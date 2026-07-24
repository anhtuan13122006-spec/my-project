export const site = {
  name: "Làng Nghề Investment Research",
  shortName: "Làng Nghề",
  shortNameAccent: "Research",
  email: "anhtuan13122006@gmail.com",
  author: "Tuấn",
};

export const hero = {
  eyebrow: "Independent Investment Research Project",
  title:
    "Đánh Giá Cơ Hội Đầu Tư & Phát Triển Bền Vững Làng Nghề Truyền Thống Việt Nam",
  subtitle:
    "Áp dụng phương pháp luận Equity Research, Private Equity Due Diligence và Strategy Consulting vào lĩnh vực kinh tế di sản — mỗi làng nghề được phân tích như một cơ hội đầu tư, không phải một câu chuyện văn hoá.",
  badges: [
    "Industry Report",
    "2 Investment Analysis Reports",
    "Scoring Dashboard",
    "Draft v1 — 07/2026",
  ],
};

export const methodology = {
  lead:
    "Mọi phân tích được neo bằng năm câu hỏi tư duy đầu tư và một hệ thống framework nhất quán, áp dụng xuyên suốt Industry Report, hai Investment Report và Dashboard.",
  quote:
    "Nếu đây là một công ty, tôi có đầu tư không? Moat là gì? Rủi ro là gì? Nếu đây là một quỹ, vốn nên được phân bổ như thế nào?",
  frameworks: [
    {
      title: "PESTEL & Five Forces",
      description:
        "Đánh giá bối cảnh vĩ mô và cấu trúc cạnh tranh ngành làng nghề ở cấp độ toàn ngành.",
    },
    {
      title: "Value Chain & TAM/SAM/SOM",
      description:
        "Truy vết điểm giữ giá trị và định lượng quy mô thị trường có thể tiếp cận.",
    },
    {
      title: "Business Model Canvas & SWOT",
      description:
        "Mổ xẻ mô hình vận hành của từng làng nghề như một thực thể kinh tế độc lập.",
    },
    {
      title: "Moat Analysis",
      description:
        "Xác định nguồn gốc và độ bền của lợi thế cạnh tranh — di sản, kỹ nghệ, chỉ dẫn địa lý.",
    },
    {
      title: "ESG Framework",
      description:
        "Chấm điểm có cấu trúc theo ba trụ cột Environmental, Social, Governance.",
    },
    {
      title: "Risk Matrix & Investment Thesis",
      description:
        "Xếp hạng rủi ro theo xác suất x ảnh hưởng, kết luận bằng khuyến nghị phân bổ nguồn lực.",
    },
  ],
};

export const industryReport = {
  title: "Industry Report",
  subtitle:
    "Vietnam's Traditional Craft Village Economy — nền tảng vĩ mô và cấu trúc ngành cho hai Investment Report chuyên sâu.",
  stats: [
    { num: "~5.400", label: "Làng nghề cả nước" },
    { num: "~11tr", label: "Lao động khu vực làng nghề" },
    { num: "~2 tỷ USD", label: "Kim ngạch xuất khẩu (2024)" },
    { num: "160+", label: "Quốc gia nhập khẩu" },
  ],
  body: "Ngành làng nghề Việt Nam là một cấu trúc kinh tế nghịch lý: quy mô lao động lớn nhưng giá trị xuất khẩu bình quân thấp — chỉ dấu cho thấy giá trị gia tăng bị giữ lại ở khâu sản xuất thô, trong khi khâu thiết kế, thương hiệu và phân phối phần lớn nằm ngoài tầm kiểm soát của người sản xuất. Báo cáo phân tích cấu trúc ngành theo PESTEL, Five Forces, Value Chain và TAM/SAM/SOM, kết luận bằng khung sàng lọc cơ hội áp dụng cho hai case study đi kèm.",
  keyFinding:
    "Không đầu tư dàn trải: với 5.400 làng nghề nhưng phân bố giá trị lệch mạnh, nguồn lực nên tập trung vào nhóm làng nghề có moat rõ ràng (chỉ dẫn địa lý, kỹ nghệ độc bản) nhưng đang bị giới hạn bởi năng lực thương mại hoá.",
  downloadFile: "reports/Industry_Report_Lang_Nghe.docx",
  downloadLabel: "Tải Industry Report (.docx)",
};

export const caseStudies = [
  {
    tag: "REPORT 1 / 2",
    recommendation: "OVERWEIGHT (có điều kiện)",
    recTone: "conditional",
    title: "Gốm Kim Lan",
    location: "Gia Lâm, Hà Nội",
    subtitle:
      "Di sản khảo cổ ~900–1.000 năm tuổi bên sông Hồng, cổ hơn cả Bát Tràng liền kề — cơ hội tái định vị từ sản xuất đại trà sang du lịch di sản.",
    snapshot: [
      { label: "Điểm sàng lọc", value: "3.60 / 5 — Xếp hạng 3/10" },
      { label: "Quy mô sản xuất", value: "~350 lò gốm (giảm từ ~750 lò)" },
      { label: "Doanh thu ước tính", value: "~500 tỷ VNĐ/năm (2025)" },
    ],
    thesis:
      "Kim Lan sở hữu moat di sản-khảo cổ mạnh nhất trong nhóm làng gốm miền Bắc nhưng đang định giá thấp hơn tiềm năng do bị lu mờ thương hiệu bởi Bát Tràng liền kề — cơ hội nằm ở tái định vị sang phân khúc du lịch di sản/giáo dục thay vì cạnh tranh trực diện về sản lượng gốm gia dụng.",
    keyRisk:
      "Suy giảm số lò sản xuất do mai một lao động kế cận (750 → 350 trong ~30 năm) là rủi ro nhân khẩu học dài hạn, không thể giải quyết bằng vốn đơn thuần.",
    downloadFile: "reports/Investment_Report_Gom_Kim_Lan.docx",
  },
  {
    tag: "REPORT 2 / 2",
    recommendation: "OVERWEIGHT",
    recTone: "strong",
    title: "Khảm Trai Chuôn Ngọ",
    location: "Phú Xuyên, Hà Nội",
    subtitle:
      "Làng nghề khảm trai/ốc ~1.000 năm tuổi với moat kỹ nghệ mạnh nhất trong longlist sàng lọc — đã xuất khẩu ổn định tới Nhật Bản, Anh, Mỹ, Pháp, Hà Lan, Đài Loan.",
    snapshot: [
      { label: "Điểm sàng lọc", value: "4.05 / 5 — Xếp hạng 1/10" },
      { label: "Hộ tham gia nghề", value: "~97% hộ toàn xã Chuyên Mỹ" },
      {
        label: "Doanh thu tiểu thủ công nghiệp",
        value: "~265 tỷ VNĐ/năm (số liệu 2005)",
      },
    ],
    thesis:
      "Chuôn Ngọ sở hữu moat kỹ nghệ mạnh nhất trong longlist (kỹ thuật khảm tinh xảo tích luỹ nghìn năm, khó sao chép) và đã chứng minh khả năng xuất khẩu tới các thị trường cao cấp — nhưng giá trị thương hiệu dài hạn đang bị đe doạ bởi rủi ro môi trường chưa được xử lý và phụ thuộc nguyên liệu nhập khẩu.",
    keyRisk:
      "Ô nhiễm môi trường từ bụi mài/xử lý vỏ trai là rủi ro ESG có thể ảnh hưởng trực tiếp tới khả năng duy trì đơn hàng từ các thị trường xuất khẩu khó tính (Nhật Bản, EU) vốn ngày càng siết chặt tiêu chuẩn ESG với nhà cung cấp.",
    downloadFile: "reports/Investment_Report_Kham_Trai_Chuon_Ngo.docx",
  },
];

export const dashboard = {
  lead:
    "Ma trận sàng lọc 15 làng nghề miền Bắc theo 7 tiêu chí có trọng số — cơ sở lựa chọn hai case study nghiên cứu chuyên sâu. Toàn bộ workbook (kèm KPI comparison, risk matrix, industry benchmarks) có trong file Excel đính kèm.",
  downloadFile: "reports/Lang_Nghe_Dashboard.xlsx",
  downloadLabel: "Tải Dashboard đầy đủ (.xlsx)",
  rows: [
    { rank: 1, name: "Khảm trai Chuôn Ngọ", location: "Phú Xuyên, Hà Nội", score: "4.05", caseStudy: true },
    { rank: 2, name: "Gốm Bát Tràng", location: "Gia Lâm, Hà Nội", score: "4.00" },
    { rank: 3, name: "Gốm Kim Lan", location: "Gia Lâm, Hà Nội", score: "3.60", caseStudy: true },
    { rank: 3, name: "Lụa Vạn Phúc", location: "Hà Đông, Hà Nội", score: "3.60" },
    { rank: 5, name: "Sơn mài Hạ Thái", location: "Thường Tín, Hà Nội", score: "3.40" },
    { rank: 6, name: "Đồ gỗ mỹ nghệ Đồng Kỵ", location: "Từ Sơn, Bắc Ninh", score: "3.25" },
    { rank: 7, name: "Mây tre đan Phú Vinh", location: "Chương Mỹ, Hà Nội", score: "3.15" },
    { rank: 8, name: "Tranh Đông Hồ", location: "Thuận Thành, Bắc Ninh", score: "3.05" },
    { rank: 9, name: "Nón lá làng Chuông", location: "Thanh Oai, Hà Nội", score: "2.70" },
    { rank: "—", name: "Gốm Phù Lãng", location: "Quế Võ, Bắc Ninh", score: "TBD" },
    { rank: "—", name: "Đúc đồng Đại Bái", location: "Gia Bình, Bắc Ninh", score: "TBD" },
    { rank: "—", name: "Tăm hương Quảng Phú Cầu", location: "Ứng Hoà, Hà Nội", score: "TBD" },
    { rank: "—", name: "Rèn Đa Sỹ", location: "Hà Đông, Hà Nội", score: "TBD" },
    { rank: "—", name: "Thêu Quất Động", location: "Thường Tín, Hà Nội", score: "TBD" },
    { rank: "—", name: "Chạm bạc Đồng Xâm", location: "Kiến Xương, Thái Bình", score: "TBD" },
  ],
  note: "Điểm số là đánh giá sơ bộ của tác giả (analyst judgment) dựa trên nghiên cứu thứ cấp và quan sát thực địa cá nhân — cần thẩm định lại bằng khảo sát chính thức. Các dòng \"TBD\" chưa có đủ thông tin để chấm điểm.",
};

export const about = {
  isList: [
    "Một Independent Investment Research Project mang tính học thuật, được thực hiện với kỷ luật và phương pháp luận của ngành tài chính đầu tư.",
    "Một khung phân tích áp dụng tư duy Equity Research, Private Equity và Strategy Consulting vào lĩnh vực kinh tế di sản.",
    "Một portfolio piece thể hiện năng lực nghiên cứu ngành, đánh giá cơ hội đầu tư và quản trị rủi ro.",
  ],
  isNotList: [
    "Một quỹ đầu tư thật, một doanh nghiệp, hoặc một startup gọi vốn.",
    "Một dự án phi lợi nhuận, một sáng kiến bảo tồn văn hoá thuần tuý, hay một chiến dịch truyền thông.",
    "Một bài luận sinh viên mô tả lịch sử và giá trị văn hoá làng nghề.",
  ],
  bio: "Thực hiện bởi Tuấn, sinh viên ngành Finance & Economics, dựa trên nghiên cứu thứ cấp có hệ thống kết hợp quan sát thực địa cá nhân tại các làng nghề. Phiên bản hiện tại (Draft v1) được xây dựng trong khung thời gian rút gọn và sẽ tiếp tục được nâng cấp bằng dữ liệu thực địa/phỏng vấn hợp tác xã trong các giai đoạn tiếp theo của dự án.",
  roles: [
    { role: "Equity Research", focus: "Investment Thesis, Moat Analysis" },
    { role: "Investment Banking", focus: "Financial Feasibility, Memorandum" },
    { role: "Asset Management", focus: "Dashboard, phân bổ nguồn lực" },
    { role: "Strategy Consulting", focus: "PESTEL, Five Forces, market sizing" },
    { role: "Big4 (Deloitte, KPMG, EY, PwC)", focus: "ESG, Risk Matrix, due diligence" },
    { role: "World Bank / ADB", focus: "SDG mapping, impact investing" },
  ],
  charterFile: "reports/Project_Charter_Lang_Nghe_Investment_Research.docx",
};

export const footer = {
  disclaimer:
    "Draft v1, tháng 7/2026. Toàn bộ số liệu định lượng được trích dẫn từ nguồn thứ cấp (Bộ VHTTDL, Bộ Công Thương, Hiệp hội Làng nghề Việt Nam, báo chí trong nước) — xem nguồn đầy đủ trong từng báo cáo. Điểm số sàng lọc và một số proxy tài chính là đánh giá phân tích sơ bộ, chưa qua khảo sát thực địa chính thức.",
};
