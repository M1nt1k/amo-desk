from typing import List
from fastapi import APIRouter, Depends
from ..depends import get_topbar_service    
from ..schemas.topbar import Topbar
from ..services.topbar import TopbarService


router = APIRouter(prefix="/topbar", tags=["Topbar"])

@router.get(
        '/{username}',
        responses={400: {"description": "Bad request"}},
        response_model=Topbar,
        description="Получение данных для topbar",
)
async def get_topbar_data(username:str, topbar_service: TopbarService = Depends(get_topbar_service), ) -> Topbar:
    topbar = await topbar_service.get_data(username)
    return topbar
