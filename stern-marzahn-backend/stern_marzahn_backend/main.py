from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def get_root():
    return {}

def main() -> None:
    pass

if __name__ == "__main__":
    main()