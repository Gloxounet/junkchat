import styles from './InputBar.module.css';

export default function InputBar(
    {
        inputHandler=(()=>{}),
        small=true,
        placeholder='',
        maxlength=22,
        handleEnterKeyDown=(e)=>{},
        value
    }) {
    return (
        <div className={styles.wrapper}>
            <span className={small?styles.smallText+' grey':styles.none}>name</span>
            <input
                type="text"
                maxLength={maxlength}
                placeholder={placeholder}
                className={small?styles.smallInput +' '+ styles.smallTextInput:styles.largeInput +' '+ styles.largeTextInput}

                onChange={e => inputHandler(e.target.value)}
                value={value}
                
                onKeyDown={(e)=>{e.key==='Enter'?handleEnterKeyDown(e):((e)=>{})(e)}}
            />
        </div>
    );
}