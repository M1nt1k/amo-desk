from typing import List
from ..repositories.topbar import TopbarRepository
from ..schemas.topbar import Topbar

class TopbarService:
    def __init__(self, repository: TopbarRepository) -> None:
        self.repository = repository

    async def get_data(self, username: str) -> Topbar:
        result = await self.repository.get_data(username)
        return result