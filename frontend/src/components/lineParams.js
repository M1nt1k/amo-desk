export default function LineParam() {
    return (
        <div className='option-toolbar'>
            <span className='option-toolbar-item'>Линия: </span>
            <select name='lineType' className='option-toolbar-item option-line-type'>
                <option label="Сплошная" value="solid"></option>
                <option label="Пунктир" value="dashed"></option>
                <option label="Точки" value="dotted"></option>
            </select>
            <input name='lineWidth' className="line-width option-toolbar-item" value='1' type="number" min="1" max="5" ></input>
            <input name='lineColor' className="line-color option-toolbar-item" type="color" ></input>
        </div>
    )
}