/*
 * 시드니 여행 — 모든 콘텐츠가 이 파일 하나에 있습니다.
 * 고치는 방법은 sydney/README.md를 보세요.
 *
 * 규칙
 * - 글자는 반드시 큰따옴표 "..." 안에 씁니다.
 * - 항목 끝에는 쉼표(,)를 붙입니다.
 * - 모르는 값은 "미정"으로 둡니다. 화면에 흐리게 "미정"으로 보입니다.
 * - 시각은 모두 시드니 현지 시간(24시간제, "09:05" 형식, 2월은 서머타임 UTC+11)입니다.
 *   한국 시간으로 적은 항목만 tz: "KST" 를 붙입니다.
 * - 장소의 en은 구글 지도 검색어이자 '크게 보기'에 쓰는 영어 이름입니다.
 * - 메뉴는 { en: "영어 이름", ko: "한국어 이름", desc: "설명", image: "" } 형식입니다.
 */
self.TRIP = {
  title: "시드니 여행",
  storageKey: "sydney",
  storiesTitle: "호주 이야기",
  city: "시드니",
  period: "2027년 2월 6일(토) ~ 13일(토)",

  // 현지 시간대: 2월 시드니는 서머타임이라 UTC+11, 한국보다 2시간 빨라요.
  tz: { offset: 11, label: "시드니" },

  // 끝 시각이 없는 그날 마지막 일정을 언제까지 '지금'으로 보여줄지 (시드니 시간)
  dayEnd: "23:30",

  // ───────────── 여행 전 화면 ─────────────
  departure: {
    date: "2027-02-06",
    time: "21:50",
    tz: "KST",
    place: "인천공항 1터미널",
    flight: "젯스타 JQ48",
    arriveDate: "2027-02-07",
    arrive: "10:05", // 시드니 도착 예정 (시드니 시간)
    meetTime: "19:00까지 (한국 시간)",
    meetPlace: "인천공항 1터미널 젯스타 카운터"
  },

  returnFlight: {
    date: "2027-02-13",
    time: "11:40",
    flight: "젯스타 JQ47 (인천 20:15 도착)",
    meet: "07:30 체크아웃 → 그린스퀘어역에서 공항 기차"
  },

  // ───────────── 날씨 ('지금' 화면) ─────────────
  weather: {
    lat: -33.87,
    lon: 151.21,
    timezone: "Australia/Sydney",
    season: "2월",
    normal: "낮 26도 안팎, 밤 19도 안팎 (한여름)",
    note: "자외선이 아주 강해요. 흐린 날도 선크림 SPF50을 발라요."
  },

  // ───────────── 지금 화면 위치 카드 ─────────────
  about: {
    title: "시드니는 여기예요",
    body: "인천에서 남쪽으로 약 8,300km, 비행기로 10시간 정도예요. 2월은 서머타임이라 시드니가 한국보다 2시간 빨라요. 계절은 정반대라 한여름이에요."
  },

  // ───────────── 여행 후 화면 ─────────────
  farewell: [
    "민기, 재동, 준열 6박 7일 수고 많았어요.",
    "사진은 단톡방에 모아 주세요."
  ],

  // ───────────── 지금 화면 알림 ─────────────
  // from/to: "날짜 시각", fromTz/toTz: "KST"면 한국 시간 (기본은 시드니 시간)
  nowNotices: [
    {
      from: "2027-02-07 10:05",
      to: "2027-02-07 12:00",
      title: "입국 신고서에 음식은 꼭 '있음'",
      body: "호주 검역은 아주 엄격해요. 과자·라면·육포 같은 음식이 있으면 입국 신고서(Incoming Passenger Card)에 '있음(Yes)'으로 체크하고 검사대에서 보여 주면 돼요. 신고 안 하고 걸리면 벌금이 커요."
    },
    {
      from: "2027-02-09 07:00",
      to: "2027-02-09 11:00",
      title: "피시마켓에서 뭐 먹을까",
      body: "회도 좋고, 그릴 랍스터나 피시앤칩스도 있어요. 10시 반에는 Tam Jiak(말레이시아)에서 이른 점심이에요.",
      place: "fishmarket"
    }
  ],

  // ───────────── 일정 ─────────────
  // time: 시작 시각 / end: 끝 시각(있을 때만) / timeLabel: 시각 대신 보여줄 말
  // place: 아래 places의 id (여러 곳이면 ["id1", "id2"])
  // gather: 이 일정이 집합이면 집합 장소를 적습니다.
  days: [
    {
      date: "2027-02-06",
      label: "출발",
      note: "설 당일 저녁 출발이에요. 기내 1박.",
      items: [
        { time: "19:00", tz: "KST", title: "인천공항 1터미널 집합", place: "", gather: "인천공항 1터미널 젯스타 카운터" },
        { time: "21:50", tz: "KST", title: "젯스타 JQ48 출발 (약 10시간)", place: "" }
      ]
    },
    {
      date: "2027-02-07",
      label: "1일차",
      note: "도착 · 하버 워밍업",
      items: [
        { time: "10:05", title: "시드니 1터미널 도착 · 입국심사 · 검역 · 짐 찾기", place: "airport" },
        { time: "11:30", title: "공항 기차 → 그린스퀘어역 → 숙소에 짐 맡기기 (체크인은 15시)", place: "stay", gather: "공항 기차역 (T1 국제선)" },
        { time: "13:00", title: "점심: 서큘러키에서 미트파이 · 피시앤칩스", place: "circularquay" },
        { time: "14:30", title: "하버 걷기: 더 록스 → 오페라하우스 → 보타닉 가든 → 미시즈 매쿼리스 체어", place: ["rocks", "opera", "mrsmacquarie"] },
        { time: "17:30", title: "숙소 체크인 · 샤워", place: "stay" },
        { time: "19:30", title: "저녁: Tapavino (셰리 + 스페인 타파스)", place: "tapavino" },
        { time: "21:00", title: "바: Maybe Sammy (워크인)", place: "maybesammy" }
      ]
    },
    {
      date: "2027-02-08",
      label: "2일차",
      note: "동부 해안 · 그늘이 거의 없어요",
      items: [
        { time: "07:30", title: "숙소 출발 (더위 전에 걷기)", place: "stay", gather: "숙소 앞" },
        { time: "08:30", end: "11:00", title: "해안길 걷기: 쿠지 → 본다이 (약 6km)", place: "coastalwalk" },
        { time: "11:15", title: "본다이 아이스버그 오션풀 수영", place: "icebergspool" },
        { time: "13:00", title: "점심: Icebergs Dining Room", place: "icebergs" },
        { time: "15:00", title: "본다이 해변에서 쉬기", place: "bondi" },
        { time: "17:30", title: "숙소 복귀 · 샤워", place: "stay" },
        { time: "19:30", title: "저녁: Wan's Cantonese (광둥 요리)", place: "wans" }
      ]
    },
    {
      date: "2027-02-09",
      label: "3일차",
      note: "해산물 · 아페리티보",
      items: [
        { time: "08:00", title: "시드니 피시마켓: 아침으로 흰살 회 (라이트레일 L1)", place: "fishmarket" },
        { time: "10:30", title: "이른 점심: Tam Jiak (말레이시아 해산물)", place: "tamjiak" },
        { time: "11:00", title: "물가 산책: 피어몬트 → 바랑가루", place: "barangaroo" },
        { time: "13:00", title: "숙소에서 쉬기 (한낮 피하기)", place: "stay" },
        { time: "15:00", title: "NSW 주립미술관 (신관 시드니 모던, 상설 무료)", place: "artgallery" },
        { time: "17:30", title: "아페리티보: Bar Hernandez (베르무트)", place: "hernandez" },
        { time: "19:30", title: "저녁: Dear Sainte Éloise (크루도 + 스테이크)", place: "sainteeloise" }
      ]
    },
    {
      date: "2027-02-10",
      label: "4일차",
      note: "동물원 + 블루마운틴 · 하루 종일 기차",
      items: [
        { time: "07:30", title: "센트럴역 → 블랙타운 기차 → 버스", place: "", gather: "숙소 앞" },
        { time: "08:30", end: "10:30", title: "페더데일 야생동물공원: 캥거루 먹이주기 · 쿼카", place: "featherdale" },
        { time: "11:00", title: "블랙타운 → 카툼바 기차", place: "" },
        { time: "12:30", title: "점심: 카툼바", place: "" },
        { time: "13:30", end: "16:00", title: "에코포인트 (세 자매봉) + 클리프 워크", place: "echopoint" },
        { time: "16:30", title: "루라 마을 → 기차로 복귀", place: "" },
        { time: "19:00", title: "저녁: 숙소 근처 킹스포드 인도네시아 (Ayam Goreng 99)", place: ["ayamgoreng", "sedaprasa"] }
      ]
    },
    {
      date: "2027-02-11",
      label: "5일차",
      note: "맨리 · 부야베스",
      items: [
        { time: "09:00", title: "서큘러키 → 맨리 페리 (약 30분)", place: "manlyferry", gather: "서큘러키 3번 부두" },
        { time: "10:00", title: "셸리비치 스노클 (장비 대여)", place: "shelly" },
        { time: "12:30", title: "점심: 맨리 코르소", place: "manly" },
        { time: "14:00", title: "노스헤드 전망대 또는 맨리 워크 일부", place: "" },
        { time: "17:00", title: "페리로 복귀 · 숙소 정비", place: "" },
        { time: "19:30", title: "저녁: L'Héritage (부야베스) · 우버로 이동", place: "lheritage" }
      ]
    },
    {
      date: "2027-02-12",
      label: "6일차",
      note: "자유일 · 마지막 밤",
      items: [
        { time: "10:00", title: "늦은 브런치 (시드니 카페)", place: "" },
        { time: "12:00", title: "패딩턴 옥스퍼드 스트리트 쇼핑", place: "paddington" },
        { time: "15:00", title: "숙소에서 쉬기 · 짐 1차 정리", place: "stay" },
        { time: "18:00", title: "하버 일몰 아페리티보 · 로제 한 잔", place: "operabar" },
        { time: "20:00", title: "저녁: Ho Jiak Haymarket (말레이시아)", place: "hojiak" },
        { time: "22:00", title: "바: Ramblin' Rascal Tavern (코냑·브랜디)", place: ["ramblin", "baxter", "mamak"] }
      ]
    },
    {
      date: "2027-02-13",
      label: "귀국",
      note: "체크아웃 10시 전",
      items: [
        { time: "07:30", title: "체크아웃", place: "stay", gather: "숙소 앞" },
        { time: "08:00", title: "그린스퀘어역 → 공항 기차 → 1터미널", place: "airport" },
        { time: "09:10", title: "공항 도착 (출발 2시간 30분 전)", place: "airport" },
        { time: "11:40", title: "젯스타 JQ47 출발", place: "" },
        { time: "20:15", tz: "KST", title: "인천 1터미널 도착", place: "" }
      ]
    }
  ],

  // ───────────── 장소 ─────────────
  // en: 구글 지도 검색어 / short: 일정 화면에 한 줄로 보이는 설명
  places: [
    {
      id: "stay",
      name: "숙소",
      en: "Green Square Station",
      type: "숙소",
      desc: "침실 3개, 욕실 2개, 주방과 세탁기·건조기가 있는 아파트예요. 그린스퀘어역(공항선)까지 걸어서 약 7분, 공항과 센트럴역 모두 한 번에 가요. 그린스퀘어 상권(마트·식당)은 걸어서 3분이에요.",
      image: ""
    },
    {
      id: "airport",
      name: "시드니 공항 1터미널 (국제선)",
      en: "Sydney Airport T1 International Terminal",
      type: "공항",
      desc: "국제선 터미널이에요. 지하의 공항 기차(Airport Link)를 타면 그린스퀘어역까지 세 정거장(국내선 → 마스콧 → 그린스퀘어), 약 10분이에요. 공항역은 이용료가 따로 붙어서 셋이면 우버와 값이 비슷할 수 있어요.",
      image: ""
    },
    {
      id: "circularquay",
      name: "서큘러키",
      en: "Circular Quay",
      short: "페리 터미널. 오페라하우스와 하버브리지 사이예요.",
      type: "명소",
      desc: "페리가 드나드는 시드니 항구의 중심이에요. 오페라하우스와 하버브리지가 양옆에 있어요. 점심은 근처에서 호주식 미트파이나 피시앤칩스로 가볍게 먹어요.",
      image: ""
    },
    {
      id: "rocks",
      name: "더 록스",
      en: "The Rocks Sydney",
      short: "시드니에서 가장 오래된 동네, 사암 골목",
      type: "명소",
      desc: "1788년 영국 첫 이주민이 자리 잡은 동네예요. 사암으로 지은 옛 건물과 골목, 오래된 펍이 남아 있어요.",
      image: ""
    },
    {
      id: "opera",
      name: "시드니 오페라하우스",
      en: "Sydney Opera House",
      type: "명소",
      desc: "들어가지 않고 바깥을 한 바퀴 걸어요. 지붕 타일을 가까이서 보면 흰색과 미색 두 가지가 섞여 있어요.",
      image: ""
    },
    {
      id: "mrsmacquarie",
      name: "미시즈 매쿼리스 체어",
      en: "Mrs Macquarie's Chair",
      short: "오페라하우스 + 하버브리지가 한 프레임",
      type: "전망",
      desc: "로열 보타닉 가든 끝 바위 의자예요. 오페라하우스와 하버브리지가 한 사진에 담기는 자리예요.",
      image: ""
    },
    {
      id: "tapavino",
      name: "Tapavino",
      en: "Tapavino Bulletin Place Sydney",
      short: "호주 최초의 셰리 바. 셰리 80종 이상 잔술",
      type: "타파스·셰리",
      desc: "2012년 문을 연 호주 최초의 셰리 바예요. 불러틴 플레이스 골목 안에 있어요. 셰리를 80종 넘게 잔으로 팔고 스페인 타파스를 함께 내요. 로제·스페인 와인도 있어요. 일요일이라 할증(10~15%)이 붙을 수 있어요. 예약 권장. 식사형 대안: Balcon by Tapavino (CBD).",
      image: "",
      menuTitle: "셰리 고르는 법",
      menu: [
        { en: "Fino", ko: "피노", desc: "가장 가볍고 드라이해요. 차갑게 마시는 식전주.", image: "" },
        { en: "Manzanilla", ko: "만사니야", desc: "피노와 비슷한데 바닷가 숙성이라 짭조름해요. 해산물과 잘 맞아요.", image: "" },
        { en: "Amontillado", ko: "아몬티야도", desc: "피노를 더 숙성시켜 고소하고 진해요.", image: "" },
        { en: "Oloroso", ko: "올로로소", desc: "진하고 묵직하지만 달지 않아요. 고기와 잘 맞아요.", image: "" },
        { en: "Pedro Ximénez", ko: "페드로 히메네스 (PX)", desc: "건포도처럼 아주 달아요. 디저트 대신.", image: "" },
        { en: "Could we get a sherry flight?", ko: "셰리 여러 잔 비교 세트", desc: "직원에게 이렇게 말하면 몇 가지를 조금씩 맞춰 줘요.", image: "" }
      ]
    },
    {
      id: "maybesammy",
      name: "Maybe Sammy",
      en: "Maybe Sammy Sydney",
      short: "세계 50대 바 단골. 워크인 전용",
      type: "바",
      desc: "더 록스에 있는 칵테일 바예요. 세계 50대 바 리스트에 꾸준히 오르는 곳이에요. 예약 없이 줄 서서 들어가요. 첫날이라 여기까지만.",
      image: ""
    },
    {
      id: "coastalwalk",
      name: "쿠지 → 본다이 해안길",
      en: "Coogee to Bondi Coastal Walk",
      short: "약 6km, 브론테·클로벨리 오션풀 경유",
      type: "산책",
      desc: "바닷가 절벽을 따라 걷는 약 6km 길이에요. 브론테, 클로벨리 오션풀을 지나 본다이에서 끝나요. 그늘이 거의 없어서 물과 선크림 필수예요.",
      image: ""
    },
    {
      id: "icebergspool",
      name: "본다이 아이스버그 오션풀",
      en: "Bondi Icebergs Pool",
      type: "수영",
      desc: "파도가 넘어 들어오는 바닷물 수영장이에요. 유료. 목요일은 청소로 쉬어서 월요일에 넣었어요.",
      image: ""
    },
    {
      id: "icebergs",
      name: "Icebergs Dining Room",
      en: "Icebergs Dining Room and Bar Bondi",
      short: "오션풀 위 통유리 이탈리안. 예약",
      type: "식당",
      desc: "오션풀 바로 위 통유리 레스토랑이에요. 1인 약 A$130~170. 창가 자리는 2~3주 전에 예약해요. 캐주얼 대안: North Bondi Fish (피시 타코, 사시미).",
      image: "",
      menuTitle: "고를 때",
      menu: [
        { en: "Crudo", ko: "크루도", desc: "날생선을 올리브유·시트러스로 버무린 전채예요.", image: "" },
        { en: "Grilled fish of the day", ko: "오늘의 생선 구이", desc: "", image: "" },
        { en: "Pasta", ko: "파스타", desc: "", image: "" }
      ]
    },
    {
      id: "bondi",
      name: "본다이 비치",
      en: "Bondi Beach",
      type: "해변",
      desc: "시드니에서 가장 유명한 해변이에요. 빨강·노랑 깃발 사이에서만 수영해요 (안전요원 구역).",
      image: ""
    },
    {
      id: "wans",
      name: "Wan's Cantonese",
      en: "Wan's Cantonese Darlinghurst",
      short: "홍콩식 광둥 요리. 전부 익힌 요리",
      type: "중식",
      desc: "달링허스트(서리힐스 옆)의 홍콩식 광둥 레스토랑이에요. 광둥식 해산물 요리를 내는데 예약.",
      image: ""
    },
    {
      id: "fishmarket",
      name: "시드니 피시마켓",
      en: "Sydney Fish Market",
      short: "2026년 1월 새로 연 남반구 최대 수산시장",
      type: "시장",
      desc: "2026년 1월 19일 새 건물로 문을 연 남반구 최대 수산시장이에요. 경매장을 위에서 구경할 수 있어요. 아침 7시부터 열어요. 할리부트는 호주에 없어서 흰살 회는 킹피시·플랫헤드·스내퍼로 먹어요. 라이트레일 L1 피시마켓역.",
      image: "",
      menuTitle: "먹을 것",
      menu: [
        { en: "Kingfish sashimi", ko: "킹피시 사시미", desc: "호주 대표 흰살 회. 방어와 비슷해요.", image: "" },
        { en: "Flathead / Snapper sashimi", ko: "플랫헤드 · 스내퍼 사시미", desc: "담백한 흰살 생선이에요.", image: "" },
        { en: "Sea urchin", ko: "성게", desc: "", image: "" },
        { en: "Grilled lobster", ko: "그릴 랍스터", desc: "통째로 구운 랍스터.", image: "" },
        { en: "Fish and chips", ko: "피시앤칩스", desc: "", image: "" }
      ]
    },
    {
      id: "tamjiak",
      name: "Tam Jiak",
      en: "Tam Jiak Sydney Fish Market",
      short: "Ho Jiak 셰프의 피시마켓 지점",
      type: "말레이시아",
      desc: "Ho Jiak의 준다 쿠 셰프가 피시마켓에 연 말레이시아 식당이에요. 해산물을 볶고 끓인 요리를 내요.",
      image: "",
      menuTitle: "추천",
      menu: [
        { en: "Char kway teow", ko: "차퀘이테우", desc: "불맛 나는 납작 쌀국수 볶음이에요.", image: "" }
      ]
    },
    {
      id: "barangaroo",
      name: "바랑가루",
      en: "Barangaroo Reserve",
      type: "산책",
      desc: "피어몬트에서 하버를 따라 바랑가루까지 걸어요. 새로 정비된 물가 공원이에요.",
      image: ""
    },
    {
      id: "artgallery",
      name: "NSW 주립미술관",
      en: "Art Gallery of New South Wales",
      short: "신관 시드니 모던. 상설 무료",
      type: "미술관",
      desc: "본관과 2022년에 연 신관(시드니 모던)이 있어요. 상설 전시는 무료예요. 신관 테라스에서 울루물루 바다가 보여요.",
      image: ""
    },
    {
      id: "hernandez",
      name: "Bar Hernandez",
      en: "Bar Hernandez Potts Point",
      short: "베르무트 탭 + 짭짤한 안주",
      type: "바",
      desc: "포츠포인트의 작은 바예요. 베르무트를 탭으로 따라 줘요. 저녁 식당(Dear Sainte Éloise)까지 걸어서 가요.",
      image: ""
    },
    {
      id: "sainteeloise",
      name: "Dear Sainte Éloise",
      en: "Dear Sainte Eloise Potts Point",
      short: "와인바 겸 레스토랑. 크루도 + 스테이크",
      type: "식당",
      desc: "포츠포인트 골목의 와인바 겸 레스토랑이에요. 와인 리스트로 상을 받은 곳이라 로제도 여기서 마셔요. 메뉴는 철마다 바뀌어요. 예약.",
      image: "",
      menuTitle: "고를 때",
      menu: [
        { en: "Fish crudo", ko: "피시 크루도", desc: "세비체 같은 날생선 전채. 아페리티보로.", image: "" },
        { en: "Steak", ko: "스테이크", desc: "", image: "" },
        { en: "Whole fish", ko: "통생선 구이", desc: "", image: "" }
      ]
    },
    {
      id: "featherdale",
      name: "페더데일 야생동물공원",
      en: "Featherdale Sydney Wildlife Park",
      short: "캥거루 먹이주기 · 쿼카",
      type: "동물원",
      desc: "캥거루·왈라비 구역에 들어가 직접 먹이를 줄 수 있어요 (먹이 컵 유료). 코알라도 있어요. 쿼카 인카운터는 유료 사전 예약이고 세션당 인원 제한이 있어요.",
      image: ""
    },
    {
      id: "echopoint",
      name: "에코포인트 (세 자매봉)",
      en: "Echo Point Lookout Katoomba",
      type: "전망",
      desc: "블루마운틴의 대표 전망대예요. 세 자매봉 바위가 정면에 보여요. 여름 폭염·산불 경보 때는 길이 닫힐 수 있어요.",
      image: ""
    },
    {
      id: "ayamgoreng",
      name: "Ayam Goreng 99",
      en: "Ayam Goreng 99 Kingsford",
      short: "20년 넘은 인도네시아 치킨 노포",
      type: "인도네시아",
      desc: "킹스포드 앤작 퍼레이드의 인도네시아 노포예요. 허름하지만 싸고 맛있어요. 숙소에서 가까워요.",
      image: "",
      menuTitle: "추천",
      menu: [
        { en: "Ayam goreng", ko: "아얌 고렝", desc: "양념 프라이드치킨이에요. 가게 이름이 이 메뉴예요.", image: "" },
        { en: "Sambal", ko: "삼발", desc: "매운 양념장. 조금씩 찍어요.", image: "" }
      ]
    },
    {
      id: "sedaprasa",
      name: "Sedap Rasa (대안)",
      en: "Sedap Rasa Kingsford",
      short: "드라이 렌당으로 유명",
      type: "인도네시아",
      desc: "같은 거리의 인도네시아 식당이에요. 파당식 드라이 렌당(소고기 커리 조림)으로 유명해요.",
      image: ""
    },
    {
      id: "manlyferry",
      name: "맨리 페리",
      en: "Manly Ferry Circular Quay Wharf 3",
      type: "이동",
      desc: "서큘러키에서 맨리까지 약 30분이에요. 오페라하우스와 하버브리지를 물 위에서 보는 가장 싼 방법이에요. 교통카드 대신 신용카드를 단말기에 탭하면 돼요.",
      image: ""
    },
    {
      id: "shelly",
      name: "셸리비치",
      en: "Shelly Beach Manly",
      type: "스노클",
      desc: "해양보호구역이라 물고기가 많고 파도가 잔잔해요. 맨리 해변 끝에서 걸어서 10~15분. 장비는 근처에서 빌려요.",
      image: ""
    },
    {
      id: "manly",
      name: "맨리 코르소",
      en: "The Corso Manly",
      type: "거리",
      desc: "페리 부두에서 맨리 해변까지 이어지는 보행자 거리예요. 점심은 여기서.",
      image: ""
    },
    {
      id: "lheritage",
      name: "L'Héritage",
      en: "L'Heritage Chowder Bay Mosman",
      short: "물가 프렌치. 시그니처 부야베스",
      type: "프렌치",
      desc: "모스만 차우더 베이 물가의 프렌치 비스트로예요. 부야베스가 시그니처 메뉴예요. 수~일 영업. 드라이에이징 스테이크도 있어요. 대안: Bistro Papillon (CBD, 부야베스).",
      image: "",
      menuTitle: "추천",
      menu: [
        { en: "Bouillabaisse", ko: "부야베스", desc: "마르세유식 해산물 스튜.", image: "" },
        { en: "Dry-aged steak", ko: "드라이에이징 스테이크", desc: "", image: "" }
      ]
    },
    {
      id: "paddington",
      name: "패딩턴 옥스퍼드 스트리트",
      en: "Oxford Street Paddington",
      type: "쇼핑",
      desc: "편집숍과 호주 디자이너 매장이 모여 있는 거리예요.",
      image: ""
    },
    {
      id: "operabar",
      name: "오페라 바",
      en: "Opera Bar Sydney",
      short: "하버 일몰 + 로제",
      type: "바",
      desc: "오페라하우스 아래층 야외 바예요. 하버브리지 쪽으로 해가 져요.",
      image: ""
    },
    {
      id: "hojiak",
      name: "Ho Jiak Haymarket",
      en: "Ho Jiak Haymarket",
      short: "페낭식 말레이시아. 맵기 센 편",
      type: "말레이시아",
      desc: "준다 쿠 셰프의 말레이시아 식당이에요. 맵기가 현지 수준이라 처음이면 순하게 주문해요. 예약. 코냑 바까지 걸어서 가요.",
      image: "",
      menuTitle: "추천",
      menu: [
        { en: "Nasi lemak", ko: "나시르막", desc: "코코넛 밥에 삼발·치킨을 곁들인 말레이시아 국민 음식.", image: "" },
        { en: "Char kway teow", ko: "차퀘이테우", desc: "불맛 쌀국수 볶음.", image: "" },
        { en: "Curry laksa", ko: "커리 락사", desc: "코코넛 커리 국수.", image: "" },
        { en: "Mild, please", ko: "순하게 해 주세요", desc: "", image: "" }
      ]
    },
    {
      id: "ramblin",
      name: "Ramblin' Rascal Tavern",
      en: "Ramblin Rascal Tavern Park Street Sydney",
      short: "코냑·브랜디 전문 지하 바",
      type: "바",
      desc: "파크 스트리트 지하의 바예요. 남반구에서 코냑을 가장 많이 갖췄다고 내세워요.",
      image: ""
    },
    {
      id: "baxter",
      name: "The Baxter Inn (대안)",
      en: "The Baxter Inn Sydney",
      type: "바",
      desc: "클래런스 스트리트 지하 스피크이지예요. 위스키를 중심으로 800병 넘게 있어요. 일요일 휴무, 금요일 밤은 붐벼요.",
      image: ""
    },
    {
      id: "mamak",
      name: "Mamak (야식)",
      en: "Mamak Haymarket",
      type: "말레이시아",
      desc: "로티 차나이와 사테이로 유명한 캐주얼 말레이시아 식당이에요. 금·토는 새벽 2시까지 해요.",
      image: ""
    }
  ],

  // ───────────── 길 잃었을 때 ─────────────
  lost: {
    guide: "일행과 떨어지면 단톡방에 알리고, 우버나 기차로 그린스퀘어역까지 와요. 숙소 정확한 주소는 단톡방 공지에 있어요. 기차는 공항선 그린스퀘어역(Green Square)에서 내리면 걸어서 약 7분이에요.",
    addressLines: ["Green Square Station", "(Airport Line)"],
    taxi: "Could you take me to Green Square Station, please?",
    taxiKo: "그린스퀘어역으로 가 주세요",
    contacts: [
      { label: "호주 긴급 (경찰·구급·소방)", number: "000", tel: "000" },
      { label: "주시드니 총영사관 긴급 (24시간)", number: "+61-403-546-058", tel: "+61403546058" },
      { label: "주시드니 총영사관 (평일 낮)", number: "+61-2-9210-0200", tel: "+61292100200" },
      { label: "외교부 영사콜센터 (24시간)", number: "+82-2-3210-0404", tel: "+82232100404" }
    ]
  },

  // ───────────── 더보기 ─────────────
  // ko: 한국어 뜻 / en: 영어 (누르면 크게 보여요)
  phrases: [
    { ko: "오늘의 생선이 뭐예요?", en: "What's the fish of the day?" },
    { ko: "세 명으로 나눠서 계산할게요", en: "Could we split the bill three ways?" },
    { ko: "로제 한 잔 주세요", en: "Could I get a glass of rosé?" },
    { ko: "수돗물 좀 주세요 (무료)", en: "Could we get some tap water, please?" },
    { ko: "이거 매워요?", en: "Is this spicy?" },
    { ko: "순하게 해 주세요", en: "Mild, please." },
    { ko: "추천해 주실 메뉴 있어요?", en: "What would you recommend?" }
  ],

  checklist: [
    "여권 (유효기간 6개월 이상)",
    "호주 ETA — 각자 'Australian ETA' 앱으로 신청 (출국 전 꼭!)",
    "해외결제 카드 (비자·마스터. 아멕스는 수수료가 붙을 수 있어요)",
    "eSIM 또는 로밍",
    "선크림 SPF50, 모자, 선글라스",
    "수영복, 래시가드 (오션풀·스노클)",
    "편한 운동화 (해안길 6km, 블루마운틴)",
    "어댑터 (호주는 I 타입, 八자 모양 콘센트)",
    "얇은 겉옷 (실내 에어컨, 블루마운틴 저녁)"
  ],

  airportGuide: [
    {
      title: "시드니 도착할 때 (검역)",
      items: [
        "기내에서 주는 입국 신고서에 음식·약·씨앗 같은 게 있으면 '있음(Yes)'으로 표시해요. 신고하면 대부분 보여 주고 통과예요.",
        "신고 안 하고 걸리면 벌금이 크고 비자 취소까지 될 수 있어요.",
        "고기 가공품(육포·소시지), 생과일, 씨앗은 가져가지 않는 게 좋아요."
      ]
    },
    {
      title: "공항 ↔ 숙소",
      items: [
        "1터미널 지하의 공항 기차(Airport Link)를 타고 그린스퀘어역에서 내려요. 세 정거장, 약 10분.",
        "교통카드 없이 신용카드나 휴대폰을 개찰구에 탭하면 돼요. 내릴 때도 꼭 탭해요.",
        "공항역은 이용료가 따로 붙어요. 셋이면 우버와 값을 비교해 보세요."
      ]
    }
  ],

  tips: [
    "2026년 10월부터 비자·마스터·eftpos 카드 결제 수수료(서차지)가 금지됐어요. 아멕스는 아직 붙을 수 있어요.",
    "일요일·공휴일엔 식당에서 10~15% 할증이 붙기도 해요. 카드 수수료와는 별개예요.",
    "카드 단말기에서 원화(KRW)로 결제할지 물으면 꼭 호주달러(AUD)를 골라요.",
    "팁은 의무가 아니에요. 아주 좋았을 때만 10% 정도.",
    "식당에서 수돗물(tap water)은 무료로 줘요. 그냥 마셔도 돼요.",
    "기차·버스·페리·라이트레일 모두 신용카드나 휴대폰 탭으로 타요. 타고 내릴 때 둘 다 탭.",
    "해변은 빨강·노랑 깃발 사이(안전요원 구역)에서만 수영해요. 이안류가 강해요.",
    "2월은 서머타임이라 시드니가 한국보다 2시간 빨라요."
  ],

  // 더보기 탭 '먹거리 정리'에 보여 줄 장소 (menu가 있는 곳)
  foodPlaces: ["tapavino", "fishmarket", "hojiak", "lheritage"],

  rules: null,

  // 더보기 탭 "호주 이야기"
  stories: [
    { title: "플랫화이트", body: "에스프레소에 얇은 우유 거품을 얹은 커피예요. 호주와 뉴질랜드가 서로 자기가 원조라고 다퉈요. 시드니 카페에서 한 번은 시켜 보세요." },
    { title: "킹피시", body: "호주 회의 대표 생선이에요. 방어 사촌쯤 되는 흰살 생선으로, 시드니 레스토랑 전채 크루도에 거의 빠지지 않아요." },
    { title: "오션풀", body: "시드니 해안에는 바닷가 바위를 깎아 만든 바닷물 수영장이 수십 개 있어요. 파도가 수영장 안으로 넘쳐 들어오는 게 특징이에요. 본다이 아이스버그가 가장 유명해요." },
    { title: "오페라하우스 지붕", body: "덴마크 건축가 예른 웃손이 설계했어요. 지붕은 100만 장 넘는 타일로 덮여 있는데, 광택 있는 흰색과 무광 미색 두 가지가 섞여 있어요." },
    { title: "세 자매봉 전설", body: "블루마운틴의 세 바위는 원주민 전설 속 세 자매가 돌로 변한 모습이라고 해요. 산이 파랗게 보이는 건 유칼립투스 나무가 뿜는 기름 성분 때문이에요." }
  ]
};
