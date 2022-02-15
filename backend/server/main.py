from typing import List, Optional

from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import crud, models, schemas
from database.database import SessionLocal, ENGINE

models.Base.metadata.create_all(bind=ENGINE)

app = FastAPI()

origins = [
    'http://10.99.5.156:3000',
    '10.99.5.156:3000',
    'localhost:3000',
    'http://localhost:3000'
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/api/images", response_model=List[schemas.Image])
def read_image_list(db: Session = Depends(get_db)):
    images = crud.get_images(db)
    return images


@app.get("/image/{img_id}")
def read_image(img_id: int, db: Session = Depends(get_db)):
    db_image = crud.get_image(db, img_id=img_id)
    if db_image is None:
        raise HTTPException(status_code=404, detail='Image not found')
    return FileResponse(db_image.path)


@app.post("/api/image/", response_model=schemas.Image)
def update_class(img: schemas.Image,  db: Session = Depends(get_db)):
    if img.class_name == None:
        raise HTTPException(status_code=400, detail='Class name is not in input')
    db_image = crud.update_class(db, img.id, img.class_name)
    return db_image
