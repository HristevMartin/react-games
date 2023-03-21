// import {useHistory} from 'react-router-dom'

const loginPage = ({
    history
}) => {

    // we use this if the view that's rendered it's not a child component 
    // let history = useHistory()

    const onFormSubmit = (e) => {
        e.preventDefault()

        // TODO: login

        // one way to redirect based on an event
        history.push('/games')
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onFormSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password"/>
                    <input type="submit" className="btn submit"/>
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default loginPage;