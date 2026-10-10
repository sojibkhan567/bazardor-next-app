import CategoryLink from './CategoryLinks';

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {

    // get all category as navlinks
    const res = await fetch(`${process.env.BASE_URL}/categories`);
    const data = await res.json();
    const navs: Category[] = data;

    //console.log(navs)

    return (
        <div className='border-t border-base-200 bg-base-100'>
            <nav className='mx-auto w-full max-w-6xl'>
                <ul className='flex items-center gap-1 overflow-x-auto py-2 text-sm'>
                    {navs.map((nav) => (
                        <li key={nav.id} className='shrink-0'>
                            <CategoryLink nav={nav} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavLinks