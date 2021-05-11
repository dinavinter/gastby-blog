import Head from 'next/head'

import {AuthorizedView, NotAuthorizedView, ScreenSets, useGigyaAuth} from "../gigya";
import {useFido} from "../gigya/useGigyaAuth";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import React from "react";


export default function Blog() {
    return (
        <main>
            <Head>
                <title>Home page</title>
            </Head>

            <h1>List of posts</h1>

            <section>

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"> Blog</NavbarBrand>

                    <Nav className="mr-auto" navbar>


                        <NavItem>
                            <NavLink href="/post/[groups]">Groups</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>


            </section>
        </main>
    )
}