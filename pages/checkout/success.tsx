import { useRouter } from "next/router"

export default function CheckoutSuccess() {
    const { query: { session_id: sessionId } } = useRouter();

    return <>
        <h2>Checkout is a success</h2>
        <p>Session ID: {sessionId}</p>
    </>
}