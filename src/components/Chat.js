import './Chat.css';

export default function Chat() {
    return (
        <div className='wrapper'>
            <Message time='14:10' user='Bakerman' color='var(--pink)' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.' />
            <Message time='14:15' user='uwu' color='var(--aqua)' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
        </div>
    )
}

function Message({time,user,color='var(--black)',text}){
    return (
        <div className='message-wrapper'>
            {time}
            <span className='message-user' style={{color:color}}>{user}</span>
            {text}
        </div>
    )
}