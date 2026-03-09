export const dynamic = "force-dynamic";

export default function AtelierLoginPage() {
  return (
    <div className="shell page-shell">
      <div className="page-content section">
        <p className="eyebrow">Atelier Access</p>
        <h1>Admin Entry</h1>
        <article className="panel" style={{ marginTop: "1rem", maxWidth: "560px" }}>
          <p>
            This route is intended only for DE&apos;JERI administrators. Use the private access phrase
            to enter the management dashboard.
          </p>
          <form method="post" action="/api/admin/login">
            <input type="password" name="passphrase" placeholder="Private passphrase" required />
            <button className="btn primary" type="submit">
              Enter Atelier
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}

