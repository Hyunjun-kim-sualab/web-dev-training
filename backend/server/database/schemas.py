from typing import Optional

from pydantic import BaseModel


class ImageBase(BaseModel):
    name: str
    path: str
    class_name: Optional[str]


class ImageCreate(ImageBase):
    pass

class Image(ImageBase):
    id: int

    class Config:
        orm_mode = True