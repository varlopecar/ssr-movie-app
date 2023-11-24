import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <p>404 - Page not found </p>
            <Link href="/">Go home</Link>
        </div>
    );
};

export default NotFound;