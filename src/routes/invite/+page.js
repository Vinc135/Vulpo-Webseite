import { redirect } from "@sveltejs/kit";

export async function load() {
  redirect(308, "https://discord.com/oauth2/authorize?client_id=925799559576322078&permissions=8&scope=bot%20applications.commands");
}