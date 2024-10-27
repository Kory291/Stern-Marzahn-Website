FROM python:latest

COPY . /app
WORKDIR /app

RUN pip install poetry 
RUN poetry config virtualenvs.create false
RUN poetry lock && poetry install

CMD ["fastapi", "run", "stern_marzahn_backend/main.py"]