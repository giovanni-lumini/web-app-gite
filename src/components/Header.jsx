import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-dark p-3 text-center mb-4">
            <nav>
                <NavLink to="/" className="text-decoration-none">
                    <h1>GROUP3 TRIPS</h1>
                </NavLink>
            </nav>
        </header>
    )
}