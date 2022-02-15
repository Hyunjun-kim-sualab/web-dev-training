import os
import sqlite3


def add_image(curr, image_path):
    image_name = '.'.join(
        image_path.split('/')[-1]
        .split('.')[:-1]
    )
    curr.execute(
        "INSERT INTO image (name, path) VALUES ('{name}', '{path}');"
        .format(name=image_name, path=image_path)
    )


if __name__ == "__main__":
    root_dir = '/mnt/ssd0/dataset/asirra'

    con = sqlite3.connect('../server/db.sqlite')
    curr = con.cursor()

    for root, dirs, files in os.walk(root_dir):
        print(root)
        for file in files:
            if file.split('.')[-1] != 'jpg':
                continue

            path = os.path.join(root, file)
            add_image(curr, path)

    con.commit()

    con.close()