export default function ButtonSidebar({text}) {
    return (
        <button className="btn sidebar-btn">
            <span className="material-symbols-outlined">{text}</span>
        </button>
    );
}