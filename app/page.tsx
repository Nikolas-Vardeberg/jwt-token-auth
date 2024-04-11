
import { getSession, login, logout } from "@/lib/utils";
import { redirect } from "next/navigation";


export default async function Home() {
  const session= await getSession();

  return (
    <section>
      <form action={async (formData) => {
        "use server"
        await login(formData);
        redirect("/admin")
      }}
      >
        <input type="email" id="email" name="email" placeholder="email"/>
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
