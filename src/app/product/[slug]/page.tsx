import Link from 'next/link'
import React from 'react'

const ProductDetailsPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6'>
      {/** page breadcrumb */}
      <nav aria-label="ব্রেডক্রাম্ব" className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href="/category/chal">চাল</Link>
          </li>
          <li>স্বর্ণমাছি চাল</li>
        </ul>
      </nav>

      {/** category header title */}
      <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span aria-hidden="true" className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl">🍚</span>
          <div className="flex-1">
            <h1 className="text-2xl font-bold sm:text-3xl mb-2">স্বর্ণমাছি চাল</h1>
            <p className="text-sm text-base-content/70">প্রতি কেজি · চাল</p>
            <p className="mt-2 text-sm text-base-content/70">গতকালের তুলনায় আজ দাম <span className="font-semibold">বেড়েছে</span> ২.১%</p>
          </div>
          <div className="rounded-box bg-base-200 px-5 py-4 text-center">
            <p className="text-sm text-base-content/70">আজকের দাম</p>
            <p className="text-3xl font-bold">১৪৮</p>
            <p className="text-sm text-base-content/70">টাকা / কেজি</p>
            <span className="inline-flex items-center gap-1 font-semibold text-error text-sm" title="বেড়েছে">
              <span aria-hidden="true">▲</span>
              <span>২.১%</span>
            </span>
          </div>
        </div>
      </header>

      {/** product details section */}
      <div className='rounded-2xl border border-base-300 bg-base-100 p-6'>
        <div className='flex flex-col gap-6'>
          <section>
            <h2 className="mb-3 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              {/** statistics card */}
              <div className="stat rounded-box border border-base-300 bg-base-100 space-y-1">
                <div className="stat-title">সর্বনিম্ন দাম</div>
                <div className="stat-value text-2xl text-success">১৩২<span className="text-sm font-medium"> টাকা</span>
                </div>
                <div className="stat-desc">সবচেয়ে কম দামের বাজার
                </div>
              </div>

              <div className="stat rounded-box border border-base-300 bg-base-100 space-y-1">
                <div className="stat-title">সর্বাধিক দাম</div>
                <div className="stat-value text-2xl text-error">১৬৫<span className="text-sm font-medium"> টাকা</span>
                </div>
                <div className="stat-desc">সবচেয়ে বেশি দামের বাজার</div>
              </div>

              <div className="stat rounded-box border border-base-300 bg-base-100 space-y-1">
                <div className="stat-title">গড় দাম</div>
                <div className="stat-value text-2xl text-primary-2">১৪৭<span className="text-sm font-medium"> টাকা</span>
                </div>
                <div className="stat-desc">প্রতি কেজি এর হিসাবে</div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
            <div className='overflow-x-auto rounded-box border border-base-300 bg-base-100'>
              <table className='table table-zebra'>
                <thead>
                  <tr>
                    <th>বাজার</th>
                    <th>বিভাগ</th>
                    <th className="text-right">সর্বনিম্ন</th>
                    <th className="text-right">সর্বাধিক</th>
                    <th className="text-right">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">মাঠ বাজার</td>
                    <td className="text-base-content/70">ময়মনসিংহ</td>
                    <td className="text-right">১৩২ টাকা</td>
                    <td className="text-right">১৪৬ টাকা</td>
                    <td className="text-right font-semibold">১৩৯ টাকা</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Link className="btn btn-primary-2" href="/category/chal">🍚 সব চাল</Link>
      </div>

    </div>
  )
}

export default ProductDetailsPage