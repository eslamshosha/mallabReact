import React from 'react'

export default function Breadcrumb() {
    return (
        <section className="breadcrumb-sec">
            <div className="container">
                <ul className="breadcrumb">
                    <li className="breadcrumb-li">
                        <a href="/" className="breadcrumb-a"> الرئيسية /</a>
                    </li>
                    <li className="breadcrumb-li">
                        <a href="/store" className="breadcrumb-a"> المتجر /</a>
                    </li>
                    <li className="breadcrumb-li">
                        <span> الاحذية </span>
                    </li>
                </ul>
            </div>
            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography> 
            </Breadcrumbs>
             */}
        </section>
    )
}
