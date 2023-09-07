from .repositories.topbar import TopbarRepository
from .services.topbar import TopbarService
from .repositories.settings_bar import SettingsBarRepository
from .services.settings_bar import SettingsBarService
from .repositories.reference import ReferenceRepository
from .services.reference import ReferenceService



topbar_repository = TopbarRepository()
topbar_service = TopbarService(topbar_repository)
def get_topbar_service() -> TopbarService:
    return topbar_service

settings_bar_repository = SettingsBarRepository()
settings_bar_service = SettingsBarService(settings_bar_repository)
def get_settings_bar_service() -> SettingsBarService:
    return settings_bar_service

reference_repository = ReferenceRepository()
reference_service = ReferenceService(reference_repository)
def get_reference_service() -> ReferenceService:
    return reference_service
