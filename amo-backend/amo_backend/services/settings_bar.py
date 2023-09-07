from datetime import datetime
from ..repositories.settings_bar import SettingsBarRepository
from ..schemas.settings_bar import SettingsBar, SettingsBarTime

class SettingsBarService:
    def __init__(self, repository: SettingsBarRepository) -> None:
        self.repository = repository

    async def get_param(self, username: str) -> SettingsBar:
        result = await self.repository.get_param(username)
        return result
    
    async def get_time(self, username: str, mode: str, channel: int, _from: datetime, to: datetime) -> SettingsBarTime:
        result = await self.repository.get_time(username)
        return result