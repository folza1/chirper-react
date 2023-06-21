import { Link, Head } from '@inertiajs/react';
import NavLink from "@/Components/NavLink.jsx";

export default function Welcome({ auth, children }) {
    return (
        <>
            <Head title="Welcome" />
                <div>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            <div>
                <NavLink href={route('home')} active={route().current('home')}>
                    MyHome
                </NavLink>
                <NavLink href={route('myfirst')} active={route().current('myfirst')}>
                    MyFirst
                </NavLink>
                <NavLink href={route('mysecond')} active={route().current('mysecond')}>
                    MySecond
                </NavLink>
            </div>
            <div>{children}</div>
        </>
    );
}
