from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

ENGINE = create_engine('sqlite:///./db.sqlite')

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=ENGINE)