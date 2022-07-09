import './InputBar.css';

export default function InputBar({inputHandler}) {
    return (
        <div className='wrapper'>
            <span className='small-text grey'>name</span>
            <input maxlength={22} placeholder={'Joe Biden'} className='small-input small-text-input' onChange={e => inputHandler(e.target.value)} />
        </div>
    );
}