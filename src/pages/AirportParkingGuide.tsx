const AirportParkingGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">机场 Parking</h1>

      <blockquote className="border-l-4 pl-4 italic text-gray-700 mb-6">所有 parking 需要 TNG Card</blockquote>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">选择 1：KLIA Terminal 2 Parking Zone</h2>
        <p className="mb-2">
          官方页面:{" "}
          <a
            href="https://airports.malaysiaairports.com.my/en/klia2/air-travel/parking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            KLIA2 Parking
          </a>
        </p>

        <h3 className="font-medium mt-3">导航：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>
            <a
              href="https://www.waze.com/en/live-map/directions/my/selangor/klia-terminal2-parking-zone-a?place=ChIJbUaiaAC_zTERHgoPOSS1XV8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              KLIA Terminal 2 Parking Zone A (Waze)
            </a>
          </li>
          <li>
            <a
              href="https://www.waze.com/en/live-map/directions/my/selangor/klia-terminal-2-parking-zone-b?place=ChIJFzrgGb6_zTER-owlJMxTOOI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              KLIA Terminal 2 Parking Zone B (Waze)
            </a>
          </li>
        </ul>

        <h3 className="font-medium">好处：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>近，就在机场里面</li>
          <li>在建筑物里面，车不会晒</li>
        </ul>

        <h3 className="font-medium">坏处：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>贵</li>
        </ul>

        <h3 className="font-medium">费用：</h3>
        <p className="text-sm italic mb-2">+10% service charge for cashless payment</p>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1 text-left">时间</th>
                <th className="border px-2 py-1 text-left">Rates (RM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1 - 3 小时</td>
                <td className="border px-2 py-1">5/小时</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">4 - 5 小时</td>
                <td className="border px-2 py-1">4/小时</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">6 - 10 小时</td>
                <td className="border px-2 py-1">3/小时</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">11 小时以后</td>
                <td className="border px-2 py-1">2/小时</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">第 1 和第 2 天，1 天最多</td>
                <td className="border px-2 py-1">52/天</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">第 3 天开始，1 天最多</td>
                <td className="border px-2 py-1">50/天</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="mt-4 font-semibold">Example</h4>
        <p className="text-sm mb-2">18/10/2025 1200 开始 → 20/10/2025 1900 结束</p>
        <p className="text-sm italic">准确要看它如何算</p>
        <p className="mt-2">
          大概费用：
          <code className="bg-gray-100 px-2 py-1 rounded">
            5 + 5 + 5 + 4 + 4 + 3 + 3 + 3 + 3 + 3 + 2 + 2 + 52 + 50 = 144
          </code>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">选择 2：KLIA and KLIA2 LTCP</h2>
        <p className="mb-2">
          详情:{" "}
          <a
            href="https://www.klia2.info/klia2/facilities/long-term-car-park-ltcp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LTCP info
          </a>
        </p>

        <h3 className="font-medium mt-3">导航</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>
            <a
              href="https://www.waze.com/en/live-map/directions/my/selangor/klia/long-term-car-park?place=ChIJUT7AyXi_zTERLNuFgnEhq0s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              LTCP (Waze)
            </a>
          </li>
        </ul>

        <h3 className="font-medium">好处：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>比选择 1 便宜</li>
          <li>有免费 24 hours shuttle bus 去机场（每 10 mins）</li>
          <li>如果不要等巴士，可以 grab，大概 RM30±（以当时为准）</li>
        </ul>

        <h3 className="font-medium">坏处：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>outdoor，只有棚，车可能晒</li>
        </ul>

        <h3 className="font-medium">费用：</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1">时间</th>
                <th className="border px-2 py-1">0 Day</th>
                <th className="border px-2 py-1">1 Day</th>
                <th className="border px-2 py-1">2 Day</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, "2.50", "34.50", "66.50"],
                [2, "5.00", "37.00", "69.00"],
                [3, "7.50", "39.50", "71.50"],
                [4, "10.00", "42.00", "74.00"],
                [5, "12.00", "44.00", "76.00"],
                [6, "14.00", "46.00", "78.00"],
                [7, "16.00", "48.00", "80.00"],
                [8, "18.00", "50.00", "82.00"],
                [9, "20.00", "52.00", "84.00"],
                [10, "22.00", "54.00", "86.00"],
                [11, "24.00", "56.00", "88.00"],
                [12, "26.00", "58.00", "90.00"],
                [13, "28.00", "60.00", "92.00"],
                [14, "30.00", "62.00", "94.00"],
                [15, "32.00", "64.00", "96.00"],
                [16, "32.00", "64.00", "96.00"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="border px-2 py-1">{row[0]}</td>
                  <td className="border px-2 py-1">{row[1]}</td>
                  <td className="border px-2 py-1">{row[2]}</td>
                  <td className="border px-2 py-1">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="mt-4 font-semibold">Example</h4>
        <p className="text-sm mb-2">18/10/2025 1200 开始 → 20/10/2025 1900 结束</p>
        <p className="text-sm italic">准确要看它如何算</p>
        <p className="mt-2">
          大概费用：<code className="bg-gray-100 px-2 py-1 rounded">26 + 32 + 32 = 90</code>
        </p>

        <h4 className="mt-4 font-semibold">其他：</h4>
        <p className="mb-2">现在好像有 discount，所以会更便宜，要看当时还有没有 promotion</p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1">天</th>
                <th className="border px-2 py-1">Rates (RM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">27</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2</td>
                <td className="border px-2 py-1">17</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">3</td>
                <td className="border px-2 py-1">17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">选择 3：KLIA Transit Salak Tinggi Station</h2>
        <p className="mb-2">
          参考:{" "}
          <a
            href="https://kualalumpurinsider.com/salak-tinggi-park-and-ride-parking-rates-and-guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Salak Tinggi Park & Ride
          </a>
        </p>

        <h3 className="font-medium mt-3">导航：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>
            <a
              href="https://waze.com/ul/hw2824d11q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Covered (Waze)
            </a>
          </li>
          <li>
            <a
              href="https://waze.com/ul/hw2824d2bu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open carpark B (Waze)
            </a>
          </li>
          <li>
            <a
              href="https://waze.com/ul/hw2824db97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open carpark C (Waze)
            </a>
          </li>
        </ul>

        <h3 className="font-medium">好处：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>最便宜</li>
        </ul>

        <h3 className="font-medium">坏处：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>最远，要搭MRT去机场，MRT就在旁边，一个人 RM4.40±，每30分钟1趟</li>
          <li>如果不要等MRT，可以 grab，大概 RM30±（以当时为准）</li>
          <li>indoor carpark比较少，可能有点难找</li>
          <li>outdoor carpark比较多，可是车需要晒</li>
        </ul>

        <h3 className="font-medium">费用：</h3>
        <ul className="list-disc pl-6 mb-3">
          <li>indoor carpark 大概 1 天 RM12</li>
          <li>outdoor carpark 大概 1 天 RM10</li>
        </ul>

        <h4 className="mt-4 font-semibold">Example</h4>
        <p className="text-sm mb-2">18/10/2025 1200 开始 → 20/10/2025 1900 结束</p>
        <p className="text-sm italic">准确要看它如何算</p>
        <p className="mt-2">
          大概费用：<code className="bg-gray-100 px-2 py-1 rounded">12 + 12 + 3 = 27</code> + MRT费用
        </p>
      </section>
    </div>
  );
};

export default AirportParkingGuide;
