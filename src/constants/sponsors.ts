export interface Sponsor {
  id: number;
  name: string;
  thumbnail?: string;
  youtube?: string;
  logo: string;
  link: string;
  service: string;
  description: string;
  detail: string;
  isShow: boolean;
}

export const SPONSORS: Sponsor[] = [
  {
    id: 1,
    name: "현대자동차",
    thumbnail: "/images/sponsors/platinum/thumbnail_hyundai.webp",
    logo: "/images/sponsors/platinum/logo_hyundai.png",
    link: "https://talent.hyundai.com/main/main.hc",
    service: "현대자동차",
    description: `Progress for Humanity   
    "우리는 인류를 위해 옳은 일을 하고자 존재합니다."
    완성차 사업의 글로벌 리더십을 기반으로 Smart Mobility Solution Provider로의 신속 전환을 추진합니다. 
    우리 모두의 이동을 위해 오늘도 혁신하는 현대자동차에 합류하세요.`,
    detail: `현대자동차그룹은 글로벌 완성차 시장에서 매년 경이로운 성장을 하고 있으며 Global Top 3라는 놀라운 성과를 달성하였습니다. 이러한 성과를 넘어 이제 Software Defined Vehicle이라는 새로운 도전을 통해 IT 전문 기업으로 도약하고자 합니다.
    \n 현대자동차그룹은 자동차와 IT 기술을 접목한 Mobility Service를 통해 고객에게 새로운 가치를 제공할 것이며, 앞으로 고객들은 Software를 통해 Hardware를 업그레이드할 수 있고, 더욱 안전하고 편리한 이동 경험을 제공받게 될 것입니다.
    \n 지금 현대자동차와 함께 여러분의 미래를 만들어가세요. Come Grow with Us!`,
    isShow: true,
  },
  {
    id: 2,
    name: "드림어스컴퍼니",
    thumbnail: "/images/sponsors/gold/thumbnail_flo.jpg",
    logo: "/images/sponsors/gold/logo_dreamus.jpg",
    link: "https://recruit.dreamuscompany.com/",
    service: "드림어스컴퍼니",
    description: `드림어스컴퍼니는 쓰면 쓸수록 나와 점점 닮아가는
    취향 기반의 뮤직 플랫폼 'FLO'를 중심으로
    '플랫폼 - 음원 유통 - 공연 - MD- 음악 디바이스' 등
    음악 생태계 전반을 아우르는 음악 콘텐츠 비즈니스 기업입니다.`,
    detail: `FLO는 AI 기술 기반 개인의 취향을 정의하고 표현할 수 있도록 돕는 뮤직 플랫폼으로, 취향을 반영한 개인화 홈 화면부터 개성을 표현할 수 있는 콘텐츠 창작 환경까지, FLO는 단 한 명을 위한 서비스를 고민합니다.
    이처럼 드림어스컴퍼니는 FLO와 함께 새롭고 다채로운 음악 콘텐츠가 가득한, 음악의 각 주체들이 꿈꾸는 세상을 만들어 나가고 있습니다.`,
    isShow: true,
  },
  {
    id: 3,
    name: "당근마켓",
    thumbnail: "/images/sponsors/gold/thumbnail_daangn.webp",
    logo: "/images/sponsors/gold/logo_daangn.png",
    link: "https://about.daangn.com/",
    service: "당근마켓",
    description: `이웃과 더 가까워지는 따뜻한 동네를 만들어요.
    우리 동네 이웃 5명 중 3명은 당근마켓으로 이웃과 함께하고 있습니다.`,
    detail: `당근마켓은 동네의 가치에 주목합니다.
    근처에 살고 있는 이웃과의 중고 직거래를 시작으로, 전에 없던 지역 생활 커뮤니티를 만들어나가고 있어요.
    이웃들은 진짜 우리 동네 이야기를 주고받을 수 있고, 가게 사장님들은 이웃의 목소리를 가장 가까이서 들을 수 있지요.
    거래, 모임, 홍보, 결제까지, 동네에서 일어나는 다양한 경험을 당근마켓으로 연결하고 있습니다.`,
    isShow: true,
  },
  {
    id: 4,
    name: "메가존소프트",
    thumbnail: "/images/sponsors/gold/thumbnail_megazon.webp",
    logo: "/images/sponsors/gold/logo_megazon.png",
    link: "https://www.megazonesoft.com/googlecloud",
    service: "메가존소프트",
    description: `메가존소프트는 구글 클라우드 프리미어 파트너로서 10년 이상의 기업 IT 운영 경험과 노하우를 바탕으로 고객에게 완벽한 매니지드 서비스(Managed Service)를 제공합니다.`,
    detail: `메가존소프트는 2009년부터 한국 최초로 Google과의 파트너십을 체결하였으며, 프리미어 파트너 입니다. 또한 아시아 No.1 클라우드 서비스 관리 업체(MSP)로서 최다 클라우드 구축 경험을 보유하고 있으며, 고객의 클라우드 여정과 고객이 원하는 클라우드의 혁신을 위한 실현할 수 있도록 체계적인 서비스를 제공하고 있습니다.`,
    isShow: true,
  },
  {
    id: 5,
    name: "AB180",
    thumbnail: "/images/sponsors/bronze/thumbnail_ab180.webp",
    logo: "/images/sponsors/bronze/logo_airbridge.png",
    link: "https://www.airbridge.io/",
    service: "에어브릿지",
    description: `AB180(에이비일팔공)은 2015년 설립된 데이터 기반의 마테크 전문 회사로, 웹+앱 통합 광고 기여도를 측정 및 분석하는 Airbridge(에어브릿지), 마케팅 자동화 & CRM 솔루션 Braze, 고객 행동 분석 솔루션 Amplitude를 통해 국내외 약 300개 이상 고객사들의 디지털 성장을 돕고 있습니다.`,
    detail: `AB180이 자체 개발 및 공급하는 모바일 광고 성과 분석 솔루션인 Airbridge는, 매일 세계 각국에서 발생하는 10억개 넘는 이벤트 데이터, 1억 대의 디바이스, 100만 RPM을 바탕으로, 웹과 앱을 넘나드는 사용자의 유입을 정확히 파악하고, 광고 채널 및 캠페인별 성과를 측정할 수 있는 국내 유일의 웹+앱 통합 광고 성과 어트리뷰션 솔루션입니다.`,
    isShow: true,
  },
  {
    id: 6,
    name: "오누이(설탭)",
    thumbnail: "/images/sponsors/bronze/thumbnail_onuii.png",
    logo: "/images/sponsors/bronze/logo_onuii.png",
    link: "https://seoltab.com/index",
    service: "오누이(설탭)",
    description: `Za세대를 위한 태블릿 공부의 혁신,
    No.1 Personalized Education을 이끌어갈 종합 학습 플랫폼 '설탭'`,
    detail: `(주)오누이는 매년 놀라운 성장을 거듭, 누적 매출 700억이라는 경이로운 성과를 달성하고 있는 No.1 에듀테크 스타트업입니다. 태블릿 기반의  1:1 온라인 과외 서비스 <설탭>으로 전국의 학생과 선생님을 실시간으로 연결하고 있습니다.<설탭>은 국내 최다 학습・수업・매칭 데이터 및 디지털 컨텐츠를 기반으로 공부의 전 영역을 디지털화, 학습 진단부터 수업까지 모든 학생에게 개인맞춤형 교육을 제공하는 AI Study Super App으로 도약하고자 합니다.Maximize Everyone's Potential,
    No.1 Personalized Education Platform, 설탭!`,
    isShow: true,
  },
  {
    id: 7,
    name: "오픈업",
    thumbnail: "/images/sponsors/silver/logo_openup.webp",
    logo: "/images/sponsors/silver/logo_openup.webp",
    link: "https://www.oss.kr/open_up_intro",
    service: "오픈업",
    description: `오픈소스SW를 개발, 공유, 활용하기를 원하는 개발자, 기업, 정부 등을 체계적으로 지원하고, 수요(기업, 공공기관) 및 공급(개발자, 기업)의 선순환 구조를 이루어 오픈소스SW 활성화의 허브 역할을 수행합니다.`,
    detail: `정보통신산업진흥원은 2003년부터 공개SW 활성화 정책을 추진하여 2020 Open UP 센터를 개소하고, 공개SW 기업지원, 개발자 지원, 커뮤니티 지원, 공공 활용지원등 공개SW활성화지원사업을 지속하고 있습니다.`,
    isShow: false,
  },
  {
    id: 8,
    name: "Jetbrains",
    thumbnail: "",
    logo: "",
    link: "https://www.jetbrains.com",
    service: "Jetbrains",
    description: ``,
    detail: ``,
    isShow: false,
  },
  {
    id: 9,
    name: "GoldenRabbit",
    thumbnail: "",
    logo: "",
    link: "https://goldenrabbit.co.kr",
    service: "GoldenRabbit",
    description: ``,
    detail: ``,
    isShow: false,
  },
  {
    id: 10,
    name: "Hanbit",
    thumbnail: "",
    logo: "",
    link: "https://www.hanbit.co.kr",
    service: "Hanbit",
    description: ``,
    detail: ``,
    isShow: false,
  },
  {
    id: 11,
    name: "Decoding",
    thumbnail: "",
    logo: "",
    link: "https://www.decoding.co.kr",
    service: "Decoding",
    description: ``,
    detail: ``,
    isShow: false,
  },
  {
    id: 12,
    name: "Jpub",
    thumbnail: "",
    logo: "",
    link: "https://jpub.tistory.com",
    service: "Jpub",
    description: ``,
    detail: ``,
    isShow: false,
  },
];
