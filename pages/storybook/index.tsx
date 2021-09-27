import {ReactElement} from "react";

const headerStyle = require('./header.module.scss')

const Storybook =  (): ReactElement => (
    <>
        <header className={headerStyle.header}>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                </ul>
            </nav>
        </header>
    </>
)

export default Storybook
