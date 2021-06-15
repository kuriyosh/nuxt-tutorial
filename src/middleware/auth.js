export default function({ store, redirect }) {
  console.log("test");
  if (!store.getters["isLoggedIn"]) {
    return redirect("/");
  }
}
