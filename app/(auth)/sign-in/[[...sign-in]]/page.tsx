import { SignIn } from '@clerk/nextjs'

const SigninPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn/>
    </main>
  )
}

export default SigninPage
