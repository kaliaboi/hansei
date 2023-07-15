import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {user.isSignedIn ? <UserButton /> : <SignInButton />}
      </main>
    </>
  );
}
