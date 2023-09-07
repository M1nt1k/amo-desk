from datetime import datetime
from pydantic import BaseModel

class Topbar(BaseModel):
    well: str = ''                  #
    data_collection_time: datetime  # 52
    hook_weight: float              # 0
    mechanical_speed: float         # 22
    downhole_depth: float           # 53
    bit_depth: float                # 54
    over_the_bottom: float          # 72