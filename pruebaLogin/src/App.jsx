import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function App() {
  const { user } = useUser();

  return (
    <div style={styles.container}>
      <SignedOut>
        <div style={styles.card}>
          <h1 style={styles.title}>Bienvenido 👋</h1>
          <p style={styles.subtitle}>Inicia sesión con Clerk</p>
          <SignInButton mode="modal">
            <button style={styles.button}>Iniciar sesión</button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div style={styles.card}>
          <img src={user?.imageUrl} alt="avatar" style={styles.avatar} />
          <h2 style={styles.title}>Hola, {user?.fullName || user?.firstName}</h2>
          <p style={styles.subtitle}>{user?.primaryEmailAddress?.emailAddress}</p>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
  },
  card: {
    background: "white",
    color: "black",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
    minWidth: 320,
  },
  title: { margin: 0 },
  subtitle: { color: "#555", marginBottom: "1.5rem" },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
  avatar: { width: 80, height: 80, borderRadius: "50%", marginBottom: 12 },
};
