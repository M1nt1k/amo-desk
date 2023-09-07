from typing import List
from fastapi import APIRouter, Depends

from ..depends import get_reference_service
from ..services.reference import ReferenceService


router = APIRouter(prefix="/reference", tags=["References"])

@router.get(
        '/{username}',
        responses={400: {"description": "Bad request"}},
        description="Получение списка параметров и систем исчисления",
)
async def get_reference(username:str, reference_service: ReferenceService = Depends(get_reference_service), ):
    reference = await reference_service.get_reference(username)
    del reference['_id']
    res = dict(reference)

    return res