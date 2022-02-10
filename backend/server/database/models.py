from sqlalchemy import Column, Integer, String

from .database import Base


class Image(Base):
    __tablename__ = "image"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    path = Column(String)
    class_name = Column(String)
