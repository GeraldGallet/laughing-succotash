import { Link } from "@tanstack/react-router";
import { Route as indexRoute } from "./routes/index";
import { Route as aboutRoute } from "./routes/about";
import { Route as booksRoute } from "./routes/books";

export function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '1rem 2rem',
        backgroundColor: '#2C5F6F',
        color: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Babel&apos;s Library
      </h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link 
          to={indexRoute.to}
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'opacity 0.2s',
          }}
        >
          Home
        </Link>
        <Link 
          to={booksRoute.to}
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'opacity 0.2s',
          }}
        >
          Books
        </Link>
        <Link 
          to={aboutRoute.to}
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'opacity 0.2s',
          }}
        >
          About
        </Link>
      </div>
    </div>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', width: '100%' }}>{children}</div>
  </>
}