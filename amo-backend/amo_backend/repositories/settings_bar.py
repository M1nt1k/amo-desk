from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient

from ..config import mongo_uri as uri
from ..schemas.settings_bar import SettingsBar, SettingsBarTime

client = AsyncIOMotorClient(uri)


class SettingsBarRepository:
    async def get_well_name(self, username: str) -> str:
        db = client['usernames']
        doc = await db[username].find().limit(1).sort([('$natural',-1)]).next()
        result = doc['actual_well']
        
        return result

    async def get_param(self, username: str, mode: str, channel: int, _from: datetime, to: datetime) -> SettingsBar:
        ...

    async def get_time(self, username: str) -> SettingsBarTime:
        ...
