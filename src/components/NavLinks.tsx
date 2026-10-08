import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
      <div className='border-t border-base-200 bg-base-100'>
          <nav className='mx-auto w-full max-w-6xl'>
              <ul className='flex items-center gap-1 overflow-x-auto py-2 text-sm'>
                  <li className='shrink-0'>
                      <Link href={"/category/chal"} className='btn btn-sm btn-ghost flex gap-2'>
                          <span aria-hidden="true">🍚</span>
                          <p>চাল</p>
                      </Link>
                  </li>
                  <li className='shrink-0'>
                      <Link href={"/category/chal"} className='btn btn-sm btn-ghost flex gap-2'>
                          <span aria-hidden="true">🍚</span>
                          <p>চাল</p>
                      </Link>
                  </li>
              </ul>
          </nav>
      </div>
  )
}

export default NavLinks