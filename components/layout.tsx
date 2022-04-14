import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
    </Head>
    <div>
      <nav>
        <ul className="navbar-nav">
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/checkout"><a>
              <span aria-label="emoji" role="img">
                🛒
              </span>{' '}
              Checkout
            </a></Link>
          </li>
          <li>
            <Link href="/payments"><a>
              <span aria-label="emoji" role="img">
                💸
              </span>{' '}
              Payments
            </a></Link>
          </li>
          <li>
            <Link href="/customers"><a>
              <span aria-label="emoji" role="img">
                🧑🏿‍🤝‍🧑🏻
              </span>{' '}
              Customers
            </a></Link>
          </li>
          <li>
            <Link href="/subscriptions"><a>
              <span aria-label="emoji" role="img">
                🔄
              </span>{' '}
              Subscriptions
            </a></Link>
          </li>
        </ul>
      </nav>

      <main>
        {children}
      </main>
    </div>
  </>;
}