export default function InfoBlock({text, value}) {
    return (
        <div className='info-block'>
            <span className='info-block-text'>{text}</span>
            <span className='info-block-value'>{value}</span>
        </div>
    );
}
