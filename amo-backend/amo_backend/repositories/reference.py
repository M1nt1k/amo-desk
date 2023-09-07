from typing import List
from motor.motor_asyncio import AsyncIOMotorClient
from pprint import pprint

from ..config import mongo_uri as uri


client = AsyncIOMotorClient(uri)


class ReferenceRepository:
    async def get_well_name(self, username: str) -> str:
        db = client['usernames']
        doc = await db[username].find().limit(1).sort([('$natural',-1)]).next()
        result = doc['actual_well']
        
        return result

    async def get_reference(self, username: str):
        well = await self.get_well_name(username=username)
        db_name = well['well']
        db = client[db_name]
        collection = db['reference']

        doc = await collection.find().limit(1).next()
        # pprint(doc)

        return doc
