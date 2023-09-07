from datetime import datetime
from pydantic import BaseModel
from typing import Optional, Union

class SettingsBar(BaseModel):
    # parametr_name: str
    channel: int
    _from: datetime
    to: datetime
    value: Union[float, int, str, None]

class SettingsBarTime(BaseModel):
    before: datetime
    after: datetime