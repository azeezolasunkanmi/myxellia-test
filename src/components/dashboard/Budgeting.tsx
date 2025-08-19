const Budgeting = () => {
  return (
    <div className="w-full mx-auto rounded-[10px] overflow-hidden">
      {/* Header*/}
      <div className="h-[213px]">
        <img
          src="/images/media.png"
          alt="Previous"
          className="w-full h-full "
        />
      </div>

      {/* Main Content Card */}
      <div className="bg-white py-6 px-12">
        {/* Features List */}
        <div className="space-y-6 mb-6">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="p-2 mt-1">
              <img
                src="/icons/setting-4.svg"
                alt="Settings"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#191919] mb-1">
                Set up annual budgets by account category
              </h3>
              <p className="text-[#606060] font-normal text-xs leading-relaxed">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="p-2 mt-1">
              <img
                src="/icons/trend-up.svg"
                alt="Settings"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#191919] mb-1">
                Track actuals vs budget in real time
              </h3>
              <p className="text-[#606060] font-normal text-xs leading-relaxed">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="p-2 mt-1">
              <img
                src="/icons/align-bottom.svg"
                alt="Settings"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#191919] mb-1">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-[#606060] font-normal text-xs leading-relaxed">
                Edit amounts, apply percentage changes, or roll forward last
                year's data—all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#18181B] text-white font-medium py-4 px-2 rounded-full disabled">
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default Budgeting;
