from ..repositories.reference import ReferenceRepository

class ReferenceService:
    def __init__(self, repository: ReferenceRepository) -> None:
        self.repository = repository

    async def get_reference(self, username: str):
        result = await self.repository.get_reference(username)
        return result