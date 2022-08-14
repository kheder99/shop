import React from 'react';
import {HashLink} from 'react-router-hash-link'

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="/">Future store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                            <HashLink class="nav-link" to="#products" smooth>Products</HashLink>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a className='btn btn-outline-light' href="/login">
                                <i className='fa fa-sign-in me-1 '> <span> Login</span> </i>
                            </a>
                            <a className='btn btn-outline-light ms-2' href="/register">
                                <i className='fa fa-user-plus me-1'> <span> Register</span> </i>
                            </a>
                            <a className='btn btn-outline-light ms-2'>
                                <i className='fa fa-shopping-cart me-1' href="/cart"> <span> Cart</span> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
