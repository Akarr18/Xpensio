import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { LayoutDashboard, PenBox } from 'lucide-react';
const Header = () => {
  return (
  <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/xpensiooo.png"
          alt="logo"
          height={64}
          width={160}
          className="h-16 w-40 object-contain"
          priority
        />
      </Link>
 <div className='flex items-center space-x-4'>

    <SignedIn>
      <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600
      flex items-center gap-2'>
      <Button varaint ="outline">
          <LayoutDashboard size={18}/>
          <span className='hidden md:inline'>Dashboard</span>
        </Button>
        </Link>

        <Link href={"/transaction/create"}>
      <Button  className="flex items-center gap-2">
          <PenBox size={18}/>
          <span className='hidden md:inline'>Add Transaction</span>
        </Button>
        </Link>
    </SignedIn>
        
   <SignedOut>
        <div className="flex gap-4">
          
          <SignInButton mode="redirect" redirecturl="/sign-in" forceRedirectUrl="/dashboard">
  <Button variant="outline">Login</Button>
</SignInButton>
<SignUpButton mode="redirect" redirecturl="/sign-up" forceRedirectUrl="/dashboard">
  <Button variant="outline">Sign Up</Button>
</SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <UserButton appearance={{
          elements:{
            avatarBox:"w-10 h-10",
          },
        }
        }/>
      </SignedIn>
 </div>
     
    </nav>
  </div>
);

}

export default Header