import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://img.freepik.com/free-photo/creative-minimalistic-sun-logo-isolated-generative-ai_169016-30133.jpg?w=1380&t=st=1706133306~exp=1706133906~hmac=ce03dd956ed4b0645ecfefc4d3614e0d2b96030e0fb49272a164c96c0326f6d0' alt='img'/>
        </header>
    );
}

export default Header