from typing import List, Optional

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from database import crud, models, schemas
from database.database import SessionLocal, ENGINE

models.Base.metadata.create_all(bind=ENGINE)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/images", response_model=List[schemas.Image])
def read_image_list(db: Session = Depends(get_db)):
    images = crud.get_images(db)
    return images


@app.get("/image/{img_id}", response_model=schemas.Image)
def read_image(img_id: int, db: Session = Depends(get_db)):
    db_image = crud.get_image(db, img_id=img_id)
    if db_image is None:
        raise HTTPException(status_code=404, detail='Image not found')
    return db_image


@app.post("/image/{img_id}", response_model=schemas.Image)
def update_class(img_id: int,  db: Session = Depends(get_db)):
    pass
