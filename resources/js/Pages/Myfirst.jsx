import { Head } from '@inertiajs/react';
import Welcome from "@/Pages/Welcome.jsx";

export default function Myfirst({ auth }) {
    return (
        <Welcome
            user={auth.user}>
            <Head title="MyFirst" />
            <h1>Hello World from AuthenticatedLayout {auth.user.name}!</h1>
        </Welcome>
    );
}
