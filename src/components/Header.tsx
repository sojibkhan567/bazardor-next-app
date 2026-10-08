import Link from 'next/link'
import NavLinks from './NavLinks'

const Header = () => {
  return (
      <header className='sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur'>
          <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3'>
              <Link href={"/"} className='flex items-center gap-2'>
                  <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-green-700 text-lg text-primary-content">🛒</span>
                  <span className="leading-tight">
                      <span className="block text-xl font-bold tracking-tight">বাজার দর</span>
                      <span className="block text-xs text-base-content/60">বুধবার, ৭ অক্টোবর, ২০২৬</span>
                  </span>
              </Link>
              <div className='ms-auto flex items-center gap-3'>
                  <Link href={"/sign-in"} className='btn btn-ghost'>সাইন ইন</Link>
                  <Link href={"/sign-up"} className='btn btn-primary'>সাইন আপ</Link>
              </div>
          </div>
          <NavLinks />
      </header>
  )
}

export default Header