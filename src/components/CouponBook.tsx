export default function CouponBook() {
  return (
    <div className="relative mx-auto h-44 w-56 sm:h-52 sm:w-64">
      <div className="absolute inset-0 rotate-6 rounded-sm bg-emerald-700 shadow-xl" />
      <div className="absolute inset-0 -rotate-3 flex flex-col items-center justify-center rounded-sm border-2 border-dashed border-emerald-200 bg-emerald-600 px-4 text-center text-emerald-50 shadow-xl">
        <p className="text-xs font-semibold tracking-wide">$20.00 COUPON BOOK</p>
        <p className="mt-2 text-lg font-bold">YELLOW CAB SCRIP</p>
        <p className="mt-2 text-[10px] tracking-widest">SALT LAKE CITY</p>
        <p className="text-[10px] tracking-widest">521-2100 OR 521-1862</p>
      </div>
    </div>
  );
}
