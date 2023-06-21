import { Head } from '@inertiajs/react';
import Welcome from "@/Pages/Welcome.jsx";

export default function Mysecond({auth}) {
    return (
        <Welcome
            user={auth.user}
        >
            <Head title="MySecond" />
            <h1>Hello World from Mysecond!</h1>
        </Welcome>
    );
}
