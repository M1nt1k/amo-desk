export default function AddRmBtn() {
    return (
        <div className='option-toolbar'>
            <button className="option-toolbar-btn add-chart" type="button" disabled >Добавить</button>
            <button type="button" className="option-toolbar-btn remove-option">Удалить</button>
        </div>
    )
}