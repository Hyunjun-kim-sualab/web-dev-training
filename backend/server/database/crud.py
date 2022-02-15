from sqlalchemy.orm import Session, load_only

from . import models, schemas


def get_image(db: Session, img_id: int):
    return db.query(models.Image).filter(models.Image.id == img_id).first()


def get_images(db: Session):
    return db.query(models.Image.id, models.Image.name, models.Image.class_name).all()


def create_image(db: Session, img: schemas.ImageCreate):
    db_image = models.Image(name=img.name, path=img.path)
    db.add(db_image)
    db.commit()
    db.refresh(db_image)
    return db_image


def update_class(db: Session, img_id: int, class_name: str):
    db.query(models.Image).filter(models.Image.id == img_id).update({models.Image.class_name: class_name})
    db.commit()
    return db.query(models.Image).filter(models.Image.id == img_id).first()