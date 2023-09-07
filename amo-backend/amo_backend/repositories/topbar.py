from typing import List
from motor.motor_asyncio import AsyncIOMotorClient

from ..config import mongo_uri as uri
from ..schemas.topbar import Topbar

from pprint import pprint

client = AsyncIOMotorClient(uri)

# dbname = 'DTCIS_proh_2_12'
# dbname = 'DTCIS_vost_lamb_5_34'

'''
data_collection_time: datetime  # 52
hook_weight: float              # 0
mechanical_speed: float         # 22
downhole_depth: float           # 53
bit_depth: float                # 54
over_the_bottom: float          # 72
'''

class TopbarRepository:
    async def get_well_name(self, username: str) -> str:
        db = client['usernames']
        doc = await db[username].find().limit(1).sort([('$natural',-1)]).next()
        result = doc['actual_well']
        
        return result

    async def get_data(self, username: str) -> Topbar:
        well_data = await self.get_well_name(username=username)

        well = well_data['name']
        database = well_data['well']

        db = client[database]
        doc = await db['DEP'].find().limit(1).sort([('$natural',-1)]).next()

        data_collection_time = doc['52']
        hook_weight = doc['0']
        mechanical_speed = doc['22']
        downhole_depth = doc['53']
        bit_depth = doc['54']
        over_the_bottom = doc['72']

        data = Topbar(
            well=well,
            data_collection_time=data_collection_time,
            hook_weight=hook_weight,
            mechanical_speed=mechanical_speed,
            downhole_depth=downhole_depth,
            bit_depth=bit_depth,
            over_the_bottom=over_the_bottom
            )


        return data
