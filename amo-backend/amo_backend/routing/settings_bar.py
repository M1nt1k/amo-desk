from typing import List
from datetime import datetime
from fastapi import APIRouter, Depends
from ..depends import get_settings_bar_service    
from ..schemas.settings_bar import SettingsBar, SettingsBarTime
from ..services.settings_bar import SettingsBarService


router = APIRouter(prefix="/params", tags=["Parametrs"])

@router.get('/{username}/get/time/period',
            responses={400: {"description": "Bad request"}},
                response_model=SettingsBar,
)
async def get_time_period(username: str, settings_bar_service: SettingsBarService = Depends(get_settings_bar_service),) -> SettingsBarTime:
    settings_bar_time = await settings_bar_service.get_time(username)
    return settings_bar_time



@router.get(
        '/{username}/{mode}/{channel}/{_from}/{to}',
        responses={400: {"description": "Bad request"}},
        response_model=SettingsBar,
        description="Получение данных для topbar",
)
async def get_param(username:str,
                    mode: str,
                    channel: int,
                    _from: datetime,
                    to: datetime,
                    settings_bar_service: SettingsBarService = Depends(get_settings_bar_service), ) -> SettingsBar:
    settings_bar = await settings_bar_service.get_param(username, mode, channel, _from, to)
    return settings_bar
