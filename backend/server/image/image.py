from typing import List, Union
from PIL import Image
from io import BytesIO
import torch
from torchvision.transforms import ToTensor, Compose, Normalize, Resize

from pydantic import BaseModel

# Hard-codeded path
MODEL_PATH = '/mnt/ssd0/pretrained/asirra.model'

class Predict(BaseModel):
    name: str
    prob: List[float]


class Predictor:
    def __init__(self, model_path=MODEL_PATH) -> None:
        self.model = torch.jit.load(model_path, map_location=torch.device('cuda', 1))
        self.model.eval()
        self.transform = Compose([
            Resize([224, 224]),
            ToTensor(),
            Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ])


    def predict(self, img_name: str, buffer: Union[bytes, str]) -> Predict:
        if isinstance(buffer, str):
            buffer = buffer.encode()
        img = Image.open(BytesIO(buffer))
        if img.mode != 'RGB':
            img = img.convert('RGB')
        _in = self.transform(img).unsqueeze(0).to(torch.device('cuda', 1))
        _out = self.model(_in)
        _out = _out.softmax(dim=1).squeeze().tolist()
        return Predict(name=img_name, prob=_out)


predictor = Predictor()