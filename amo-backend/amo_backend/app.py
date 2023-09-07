import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from .routing.topbar import router as topbar_routing
from .routing.settings_bar import router as settings_bar_routing
from .routing.reference import router as reference_routing


app = FastAPI(openapi_url="/core/openapi.json", docs_url="/core/docs")

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(topbar_routing)
app.include_router(settings_bar_routing)
app.include_router(reference_routing)

def start():
    uvicorn.run('amo_backend.app:app', host='0.0.0.0', port=8000, reload=True, log_level='debug', access_log=True)