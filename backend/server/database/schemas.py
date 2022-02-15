from typing import Optional

from pydantic import BaseModel


class ImageBase(BaseModel):
    name: str
    class_name: Optional[str]


class ImageCreate(ImageBase):
    path: str

class Image(ImageBase):
    id: int

    class Config:
        orm_mode = True