
"use server"

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signOut(){
    const supabase = await createClient();
    await supabase.auth.signOut();
    revalidatePath('/')
    redirect('/')
}