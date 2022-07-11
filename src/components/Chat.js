import styles from './Chat.module.css';

export default function Chat({messages}) {
    return (
        <div className={styles.wrapper}>
            <div>
              {
                messages.map(m=>{
                    return (
                        <Message key={m._id} {...m}/>
                    )
                })
              }
            </div>
        </div>
    )
}

function Message({time,username,color='var(--black)',text}){
    return (
        <div className={styles.messageWrapper}>
            {time}
            <span className={styles.messageUser} style={{color:color}}>{username}</span>
            {text}
        </div>
    )
}