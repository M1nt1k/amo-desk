import OptionsBlock from "./optionsBlock"
import TimeInterval from "./timeInterval"

export default function SettingsForm() {
    return (
        <form className='settings-form'>
            <fielset className='interval-fieldset'>
                <span className='fieldset-title'>Интервал мониторинга</span>
                <span className='fieldset-label'>Даты по умолчанию формируются на основе текущих данных</span>
                <TimeInterval />
            </fielset>

            <fielset className='options-fieldset'>
                <span className='fieldset-title'>Настройка параметров</span>
                <span className='fieldset-label'>Для добавления нового параметра нажмите Добавить параметр</span>
                <div id='options-block-container' className='settings-options'>
                    <OptionsBlock />
                </div>
            </fielset>

            <div className='add-btn'>
                <button type="button" name="add-option-button" className="add-option-button">Добавить параметр</button>
            </div>
        </form>
    )
}