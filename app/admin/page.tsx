import { getSession } from "@/lib/utils"
import { redirect } from "next/navigation";

export default async function Page() {
    let session = await getSession();

    if(!session) {
        redirect("/")
    }

    return(
        <section>
            <div>
                <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
        </section>
    )
}