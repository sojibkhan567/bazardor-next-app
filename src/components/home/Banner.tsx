import Image from "next/image";

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <section className="rounded-3xl border border-base-300 bg-base-100">
            <div className="w-full lg:flex md:flex items-start gap-6 px-10 py-10 lg:flex-row lg:justify-between">
                <div className="max-w-xl">
                    <p className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-2">{date}</p>
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">আজকের বাজারের দাম এক নজরে</h1>
                    <p className="mt-3 text-base-content/70">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <a className="btn btn-primary-2" href="#সব-পণ্য">সব পণ্য দেখুন</a>
                    </div>
                </div>
                <Image src="/bazar-hero.svg" alt="hero-image" width={360} height={300} />
            </div>
        </section>
    )
}

export default Banner