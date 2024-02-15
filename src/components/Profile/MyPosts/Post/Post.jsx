import s from './Post.module.css'


const Post = (props) => {

    const { message, likesCounts } = props

    return (
        <div className={s.item}>
            <img src='https://img.freepik.com/free-photo/image-of-holstein-cow-on-yellow-background_1409-4230.jpg?w=740&t=st=1706177509~exp=1706178109~hmac=fd205c6d8226c82ac7de100016b9b71153ed56490fa79930829287a97b32821e'/>
            {message}
            <div>
                <span>{likesCounts} likes</span>
            </div>
        </div>
    );
}

export default Post