// Comprehensive Tourism Data for Iksan (익산시 관광 데이터)
const IKSAN_DATA = {
  attractions: [
    {
      id: "mireuksa",
      category: "unesco",
      rating: 4.9,
      reviewsCount: 1420,
      badge: "UNESCO World Heritage",
      image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 36.0125, lng: 127.0264 },
      openingHours: "09:00 - 18:00 (Closed Mondays)",
      admission: "Free",
      tel: "+82-63-290-6799",
      address: {
        en: "362 Mireuksaji-ro, Geumma-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 금마면 미륵사지로 362",
        ja: "全羅北道 益山市 金馬面 彌勒寺紙路 362",
        zh: "全罗北道 益山市 金马面 弥勒寺纸路 362"
      },
      title: {
        en: "Mireuksa Temple Site & National Iksan Museum",
        ko: "미륵사지 & 국립익산박물관",
        ja: "彌勒寺址＆国立益山博物館",
        zh: "弥勒寺址 & 国立益山博物馆"
      },
      shortDesc: {
        en: "The grandest temple of the Baekje Kingdom (7th century) featuring Korea's oldest and largest stone pagoda.",
        ko: "7세기 백제 무왕 때 창건된 동양 최대 규모의 사찰 터이자 국보 제11호 미륵사지 석탑의 고장.",
        ja: "7世紀百済の武王によって創建された東洋最大の寺院跡。国宝第11号の石塔が有名。",
        zh: "7世纪百济武王修建的大型寺庙遗址，拥有韩国第11号国宝弥勒寺址石塔。"
      },
      fullDesc: {
        en: "Mireuksa was built during the reign of King Mu of Baekje (r. 600–641). The West Stone Pagoda (National Treasure No. 11) is the oldest and largest surviving stone pagoda in Korea, meticulously restored after 20 years of restoration. The underground-designed National Iksan Museum on site displays over 30,000 ancient Baekje artifacts, including the Sarira reliquary casket.",
        ko: "미륵사지는 삼국유사에 서동(무왕)과 선화공주의 설화로 전해지는 백제 최대의 사찰지입니다. 20년의 정밀 보수 끝에 수리가 완료된 미륵사지 석탑(국보 제11호)은 한국 석탑의 시원이자 최고(最古)의 크기를 자랑합니다. 국립익산박물관에서는 사리장엄구를 비롯한 3만여 점의 백제 보물을 관람할 수 있습니다.",
        ja: "彌勒寺址は薯童（武王）と善花公主の伝承が残る百済最大の寺院跡です。20年にわたる解体修理を経て蘇った石塔は、韓国最古・最大の石塔です。併設の国立益山博物館では、国宝級の舍利庄厳具をはじめとする百済の貴重な文化財を鑑賞できます。",
        zh: "弥勒寺址是留有薯童（武王）与善花公主传说的地方。经历了20年精心修复的石塔是韩国现存最古老、最大的石塔。国立益山博物馆展出了包括金制舍利庄严具在内的3万多件百济珍贵文物。"
      },
      tags: ["UNESCO", "History", "Museum", "Architecture"],
      audioGuide: {
        title: "The Legend of King Mu & The Golden Reliquary",
        duration: "3:45",
        transcript: {
          en: "Welcome to Mireuksa Temple Site. According to the Samguk Yusa, King Mu and Queen Seonhwa founded this temple after witnessing three Maitreya Buddhas emerge from a pond at the foot of Mount Mireuksan...",
          ko: "미륵사지에 오신 것을 환영합니다. 삼국유사에 따르면 백제 무왕과 선화공주가 미륵산 아래 못에서 미륵삼존이 나타난 것을 보고 이 거대한 사찰을 창건했다고 전해집니다...",
          ja: "彌勒寺址へようこそ。三国遺事によると、百済の武王と善花公主が池から現れた三尊弥勒仏を拝し、この大寺院を建立したと伝えられています...",
          zh: "欢迎来到弥勒寺址。据《三国遗事》记载，百济武王与善花公主在此看见三尊弥勒佛显灵，因而修建了这座宏伟的皇家寺院..."
        }
      }
    },
    {
      id: "wanggungri",
      category: "unesco",
      rating: 4.8,
      reviewsCount: 980,
      badge: "UNESCO World Heritage",
      image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 35.9768, lng: 127.0545 },
      openingHours: "09:00 - 18:00 (Open All Year)",
      admission: "Free",
      tel: "+82-63-859-4636",
      address: {
        en: "662 Gungseong-ro, Wanggung-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 왕궁면 궁성로 662",
        ja: "全羅北道 益山市 王宮面 宮城路 662",
        zh: "全罗北道 益山市 王宫面 宫城路 662"
      },
      title: {
        en: "Wanggung-ri Historic Site & Five-Story Stone Pagoda",
        ko: "왕궁리 유적 & 오층석탑",
        ja: "王宮里遺跡＆五層石塔",
        zh: "王宫里遗址 & 五层石塔"
      },
      shortDesc: {
        en: "Royal palace ruins of ancient Baekje featuring a soaring 5-story stone pagoda and palace gardens.",
        ko: "백제 무왕대의 왕궁터로 웅장한 왕궁리 오층석탑과 완벽하게 정비된 백제 왕궁 정원이 위치한 유적지.",
        ja: "百済武王時代の王宮跡。優美な五層石塔と古代の王宮庭園跡が広がる歴史遺산。",
        zh: "百济武王时期的王宫遗址，拥有挺拔优雅的王宫里五层石塔和整齐的王宫花园遗迹。"
      },
      fullDesc: {
        en: "Wanggung-ri displays the grand urban planning of ancient Baekje Kingdom. Excavations revealed palace walls, royal garden waterways, gold and glass crafting workshops, and ancient royal restrooms. The centerpiece 5-story stone pagoda stands gracefully atop a gentle hill.",
        ko: "왕궁리 유적은 백제 왕궁의 구조와 정원, 금·유리 공방 및 대형 화장실 유구 등이 발견된 유일한 왕궁 유적입니다. 언덕 위에 우뚝 선 왕궁리 오층석탑(국보 제289호) 주변으로 펼쳐지는 사계절 석양과 야경은 익산 최고의 경관으로 손꼽힙니다.",
        ja: "王宮里遺跡は、百済王宮の構造、庭園、金・ガラス工房跡などが完璧な状態で発掘された貴重な遺跡です。丘の上に立つ国宝第289号の五層石塔と夕日のグラデーションは必見です。",
        zh: "王宫里遗址发掘出了百济宫殿建筑、御花园水渠、金银琉璃工坊及大型遗迹。立于山丘上的王宫里五层石塔（国宝第289号）与夕阳余晖构成了绝美的历史景观。"
      },
      tags: ["UNESCO", "Palace", "History", "Sunset Spot"],
      audioGuide: {
        title: "Secrets of the Royal Baekje Garden & Pagoda",
        duration: "2:50",
        transcript: {
          en: "Standing before the 5-story stone pagoda, you are inside the royal residential palace of Baekje King Mu...",
          ko: "왕궁리 오층석탑 앞에 서 계신 이곳은 약 1,400년 전 백제 무왕이 거닐던 왕궁의 한가운데입니다...",
          ja: "五層石塔の前に立つこの場所は、約1400年前、百済の武王が佇んでいた王宮の中心です...",
          zh: "站在五层石塔前的这片土地，正是约1400年前百济武王居住与理政的皇宫中心..."
        }
      }
    },
    {
      id: "prisonset",
      category: "culture",
      rating: 4.7,
      reviewsCount: 2150,
      badge: "Famous K-Filming Location",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 36.0592, lng: 126.9741 },
      openingHours: "09:00 - 18:00 (Closed Mondays)",
      admission: "Free (Uniform Rental KRW 2,000-3,000)",
      tel: "+82-63-859-3836",
      address: {
        en: "207 Hamnyeol-ro, Seongdang-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 성당면 함열로 207",
        ja: "全羅北道 益山市 聖堂面 咸悦路 207",
        zh: "全罗北道 益山市 圣堂面 咸悦路 207"
      },
      title: {
        en: "Iksan Prison Filming Set",
        ko: "익산 교도소 세트장",
        ja: "益山刑務所セット場",
        zh: "益山监狱影视城"
      },
      shortDesc: {
        en: "Korea's famous filming site for over 300 movies & K-dramas. Try on prisoner or guard uniforms!",
        ko: "영화 '7번방의 선물', '신과함께', 드라마 등 300여 편 이상의 K-콘텐츠가 촬영된 독특한 체험형 세트장.",
        ja: "映画『7番房の奇跡』など300作以上の韓国映画・ドラマが撮影されたユニークな撮影セット場。",
        zh: "《7号房的礼物》等300多部韩国影视剧的取装拍摄地，可体验狱警与囚服拍照。"
      },
      fullDesc: {
        en: "Built on the site of a former elementary school, this is South Korea's first and only dedicated prison filming set. Visitors can rent real court/police/prisoner costumes, walk through cell corridors, take fun mugshots, and step inside real courtrooms featured in famous Korean dramas.",
        ko: "폐교를 활용하여 만든 국내 유일의 교도소 전문 촬영장입니다. 실제 교도소 셀, 법정, 면회실 등이 구현되어 있으며, 죄수복 및 경찰 제복 무료/저렴 대여 서비스를 통해 특색 있는 인스타그램 인증샷을 남길 수 있어 외국인 관광객들에게 큰 인기를 끌고 있습니다.",
        ja: "廃校を活用して作られた韓国唯一の刑務所専門撮影セットです。法廷や面会室、独房などがリアルに再現されており、衣装体験で記念撮影を楽しむ観光客で賑わっています。",
        zh: "这是利用废弃学校改建的韩国唯一专业监狱拍摄场地。内置真实囚室、法庭及探视室，游客可租借狱警服或囚服拍照打卡，极受年轻人与外国游客喜爱。"
      },
      tags: ["K-Drama", "Photo Spot", "Unique Experience", "Entertainment"],
      audioGuide: {
        title: "Behind the Scenes of Korean Cinema",
        duration: "2:15",
        transcript: {
          en: "Welcome to Korea's iconic prison film location! Blockbuster movies like 'Miracle in Cell No. 7' were filmed right in these cell blocks...",
          ko: "한국 영화와 드라마의 단골 촬영지에 오신 것을 환영합니다! 천만 영화 '7번방의 선물'이 바로 이곳 감방에서 촬영되었습니다...",
          ja: "韓国の映画やドラマでおなじみのロケ地へようこそ！大ヒット映画『7番房の奇跡』のシーンもここで撮影されました...",
          zh: "欢迎来到韩国影视剧的热门取景地！动人电影《7号房的礼物》等诸多名作均在此拍摄..."
        }
      }
    },
    {
      id: "agapegarden",
      category: "nature",
      rating: 4.9,
      reviewsCount: 1840,
      badge: "Healing Eco Forest",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 36.0089, lng: 126.9388 },
      openingHours: "09:00 - 16:00 (Tue-Sun, Prior Booking Recommended on Weekends)",
      admission: "Free",
      tel: "+82-63-843-7023",
      address: {
        en: "9 Uyong-gil, Hwangdeung-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 황등면 율촌길 9",
        ja: "全羅北道 益山市 黄登面 栗村路 9",
        zh: "全罗北道 益山市 黄登面 栗村路 9"
      },
      title: {
        en: "Agape Garden Metasequoia Forest",
        ko: "아가페 정원 메타세쿼이아 숲",
        ja: "アガペ庭園 メタセコイアの森",
        zh: "阿加佩花园 水杉林"
      },
      shortDesc: {
        en: "Surreal cathedral-like canopy of soaring Metasequoia trees offering serene natural sanctuary.",
        ko: "높이 솟은 메타세쿼이아 나무들이 거대한 초록 터널을 이루는 익산 최고의 힐링 수목원.",
        ja: "そびえ立つメタセコイアの木々が神秘的なグリーントンネルを作る極上のヒーリングスポット。",
        zh: "耸立的水杉树群交织成雄伟的绿色天然拱廊，是益山极为动人的自然治愈胜地。"
      },
      fullDesc: {
        en: "Originally founded as an elderly care shelter sanctuary, Agape Garden was recently opened to the public. It features towering Metasequoia tree walks standing over 40 meters tall, seasonal flower gardens (hydrangeas, autumn foliage, spring blossoms), and peaceful resting zones.",
        ko: "원래 노인복지시설의 정원으로 조성되어 수십 년간 가꿔진 숲이 비밀의 정원으로 개방된 곳입니다. 높이 40m가 넘는 메타세쿼이아 산책로는 하늘을 가릴 만큼 울창하며, 계절마다 수국, 단풍, 야생화가 펼쳐집니다.",
        ja: "長年大切に育まれた私유地が公開されたシークレットガーデン。高さ40mを超えるメタセコイアの並木道は圧巻で、四季折々の花々を楽しめます。",
        zh: "这里原本是经过数十年精心呵护的私家林园，近开放供民众参观。高达40多米的水杉树郁郁葱葱，搭配四季鲜花，宛如仙境。"
      },
      tags: ["Nature", "Photography", "Healing", "Garden"],
      audioGuide: {
        title: "Whispers of the Emerald Tree Tunnel",
        duration: "2:00",
        transcript: {
          en: "Breathe deep in the crisp forest air as you step into the emerald canopy of Agape Garden...",
          ko: "아가페 정원의 아늑한 메타세쿼이아 숲길에 오신 것을 환영합니다. 높이 솟은 나무 사이로 스며드는 햇살을 느껴보세요...",
          ja: "アガペ庭園のメタセコイア並木へようこそ。木漏れ日を浴びながら、清らかな森の空気をお楽しみください...",
          zh: "欢迎漫步于阿加佩水杉林。感受阳光透过高耸树冠洒下的斑驳光影，呼吸清新的森林空气..."
        }
      }
    },
    {
      id: "gemmuseum",
      category: "culture",
      rating: 4.6,
      reviewsCount: 760,
      badge: "Jewel Capital of Korea",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 35.9812, lng: 127.0851 },
      openingHours: "10:00 - 18:00 (Closed Mondays)",
      admission: "Adults KRW 3,000",
      tel: "+82-63-859-4641",
      address: {
        en: "8 Hosugonwon-ro, Wanggung-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 왕궁면 호수공원로 8",
        ja: "全羅北道 益山市 王宮面 湖水公園路 8",
        zh: "全罗北道 益山市 王宫面 湖水公园路 8"
      },
      title: {
        en: "Iksan Gem Museum & Jewel Palace",
        ko: "익산 보석박물관 & 주얼팰리스",
        ja: "益山宝石博物館＆ジュエルパレス",
        zh: "益山宝石博物馆 & 珠宝殿堂"
      },
      shortDesc: {
        en: "Korea's only specialized gemstone museum displaying over 110,000 rare crystals and jewelry pieces.",
        ko: "국내 유일의 보석 전문 박물관으로 11만 여 점의 희귀 보석과 원석, 공룡 골격 전시를 감상할 수 있는 곳.",
        ja: "韓国唯一の宝石専門博物館。11万点を超える希少な宝石や原石、恐竜化石を展示。",
        zh: "韩国唯一的专业宝石博物馆，展出11万余件稀有宝石、原石及恐龙化石模型。"
      },
      fullDesc: {
        en: "Iksan is recognized nationwide as the 'Jewel City of Korea'. The Gem Museum features stunning collections of rubies, sapphires, emeralds, and intricate craft reproductions like the Baekje Gold Crown. Next door, the Jewel Palace offers luxury gem shopping directly from master artisans.",
        ko: "익산은 대한민국을 대표하는 보석의 도시입니다. 보석박물관에는 보석으로 재현한 순금 백제 왕관, 대형 원석, 희귀 진주 등이 전시되어 있으며, 주얼팰리스에서는 엄선된 보석 장인들의 장신구를 합리적인 가격에 구매할 수 있습니다.",
        ja: "益山は韓国を代表する『宝石の街』です。博物館には宝石で再現された百済の金冠や希少原石が展示され、隣接するジュエルパレスではジュエリーのショッピングも楽しめます。",
        zh: "益山是韩国著名的“宝石之都”。馆内陈列着宝石镶嵌的百济金冠、罕见巨大原石等，相邻的珠宝殿堂还提供名家设计的珠宝选购。"
      },
      tags: ["Shopping", "Gemstones", "Exhibition", "Family"],
      audioGuide: {
        title: "Sparkling Legacy of Iksan Craftsmen",
        duration: "3:10",
        transcript: {
          en: "You are entering Korea's premier gem vault, showcasing rare minerals and ancient Baekje metalwork art...",
          ko: "대한민국 유일의 보석박물관에 오신 것을 환영합니다. 11만 점이 넘는 영롱한 보석과 백제 세공 기술의 정수를 느껴보세요...",
          ja: "韓国唯一の宝石博物館へようこそ。11万点以上の煌めく宝石と伝統工芸の技をご覧ください...",
          zh: "欢迎光临韩国唯一的宝石博物馆。在这里饱览11万余件璀璨宝石与精致工芸品..."
        }
      }
    },
    {
      id: "nabawi",
      category: "culture",
      rating: 4.8,
      reviewsCount: 520,
      badge: "Historic Hybrid Architecture",
      image: "https://images.unsplash.com/photo-1548625361-185790403759?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 36.1023, lng: 126.9615 },
      openingHours: "09:00 - 17:00 (Open All Year)",
      admission: "Free",
      tel: "+82-63-861-8181",
      address: {
        en: "8 Nabawiseongji-gil, Mangseong-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 망성면 나바위성지길 8",
        ja: "全羅北道 益山市 望城面 ナバウィ聖地路 8",
        zh: "全罗北道 益山市 望城面 罗巴威圣地路 8"
      },
      title: {
        en: "Nabawi Holy Shrine & Historic Church",
        ko: "나바위 성지 & 나바위 성당",
        ja: "ナバウィ聖地＆ナバウィ教会",
        zh: "罗巴威天主教堂圣地"
      },
      shortDesc: {
        en: "Designated Historic Site combining Korean traditional Hanok tile roofs with Western Gothic architecture.",
        ko: "한국 최초의 천주교 신부 김대건 성인이 입국한 곳이자 한옥과 고딕 양식이 융합된 사적 지정 성당.",
        ja: "韓国初のカトリック司祭・金大建神父が着陸した地。韓屋瓦屋根とゴシック様式が融合した建築美。",
        zh: "韩国首位天主教神父金大建登陆之地，融合韩屋瓦顶与哥特风格的珍贵历史建筑。"
      },
      fullDesc: {
        en: "Nabawi Shrine marks the historical landing place of Saint Andrew Kim Tae-gon in 1845. Built in 1906, the cathedral boasts a unique architectural style: traditional Korean wooden Hanok structure topped with tile roof, blended with French Gothic stained glass windows and exterior brick arches.",
        ko: "1845년 한국 최초의 사제 성 김대건 신부가 중국에서 배를 타고 도착한 역사적인 성지입니다. 1906년에 창건된 성당 건물은 전통 한옥 목조 구조와 기와지붕, 서양식 벽돌 및 스테인드글라스가 절묘하게 조화된 한국 건축사의 걸작입니다.",
        ja: "1845年に金大建神父が到着した歴史的聖地。1906年建設の聖堂は、伝統的な韓屋の瓦屋根と西洋のステ인ドグラスが融合した美しい木造建築です。",
        zh: "这里是1845年金大建神父抵韩的历史圣地。建于1906年的教堂将韩式木结构瓦顶与西洋彩色玻璃完美融合，是建筑史上的珍品。"
      },
      tags: ["History", "Architecture", "Hanok", "Spiritual"],
      audioGuide: {
        title: "Harmonious Union of East and West Architecture",
        duration: "2:40",
        transcript: {
          en: "Notice the curved Korean tile roof sitting above Western Gothic brick walls. Nabawi Shrine is a testimony to cultural harmony...",
          ko: "서양식 벽돌 아치 위에 얹어진 한국의 전통 기와지붕을 감상해보세요. 동서양의 양식이 어우러진 평화로운 성지입니다...",
          ja: "西洋風の赤レンガの上に載った韓国伝統の瓦屋根にご注目ください。東西の文化が調和した神秘的な聖堂です...",
          zh: "请注意西方砖石拱门之上端庄的韩式瓦顶。罗巴威教堂展现了东西方建筑艺术的奇妙融和..."
        }
      }
    },
    {
      id: "hwangdeungfood",
      category: "food",
      rating: 4.9,
      reviewsCount: 1650,
      badge: "Must-Try Gourmet",
      image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 36.0071, lng: 126.9452 },
      openingHours: "11:00 - 20:00 (Varies by restaurant)",
      admission: "KRW 10,000 - 15,000 per bowl",
      tel: "+82-63-856-2053",
      address: {
        en: "Hwangdeung-ro, Hwangdeung-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 황등면 황등로 일대 (진미식당/한일식당/시장비빔밥)",
        ja: "全羅北道 益山市 黄登面 黄登路 一帯",
        zh: "全罗北道 益山市 黄登面 黄登路 一带"
      },
      title: {
        en: "Hwangdeung Yukhoe Bibimbap Alley",
        ko: "황등 육회비빔밥 거리",
        ja: "黄登 ユッケビビンバ通り",
        zh: "黄登 生牛肉拌饭美食街"
      },
      shortDesc: {
        en: "Iksan's signature culinary treasure: warm rice pre-mixed in beef broth topped with fresh seasoned beef tartare.",
        ko: "토렴한 밥에 고추장 양념과 선짓국 육수를 배어들게 한 후 신선한 육회를 얹어 먹는 익산 독창의 3대 비빔밥.",
        ja: "牛骨スープで温めたご飯に特製タレと新鮮なユッケをのせた、益山名物の絶品ビビンバ。",
        zh: "用特制高汤多次浸润米饭后拌入秘制辣酱，盖上鲜嫩生牛肉的益山三大名牌拌饭。"
      },
      fullDesc: {
        en: "Unlike standard Bibimbap, Hwangdeung Bibimbap uses a special culinary technique called 'Toryeom': hot beef bone broth is repeatedly poured over cooked rice so every grain absorbs savory richness before being tossed with chili paste, bean sprouts, and premium hanwoo beef tartare.",
        ko: "대한민국 3대 비빔밥으로 꼽히는 황등비빔밥은 밥을 그냥 비비지 않고 진한 선짓국 육수로 토렴하여 간이 밥알 속에 쏙 배어있습니다. 그 위에 고소한 참기름과 신선한 한우 육회, 콩나물이 얹어져 타 지역과 차원이 다른 깊은 맛을 냅니다.",
        ja: "韓国三大ビビンバに挙げられる黄登ビビンバは、スープでご飯を温める『トリョム』という技法により、お米一粒一粒に旨味が染み込んでいます。新鮮な韓牛ユッケとの相性が抜群です。",
        zh: "作为韩国三大拌饭之一，黄登拌饭采用“浸汤（Toryeom）”传统技艺，使特制高汤渗透每一粒米饭，搭配香浓韩牛生牛肉与黄豆芽，入口鲜美无比。"
      },
      tags: ["Food", "Korean Cuisine", "Yukhoe", "Gourmet"],
      audioGuide: {
        title: "Story of Korea's Premier Toryeom Bibimbap",
        duration: "2:20",
        transcript: {
          en: "Prepare your tastebuds for Hwangdeung Bibimbap! Notice how the rice is served hot and pre-seasoned right out of the kitchen...",
          ko: "익산이 자랑하는 최고의 별미, 황등 육회비빔밥 거리입니다. 밥알 하나하나에 육수의 깊은 맛이 배어나는 100년 전통의 손맛을 즐겨보세요...",
          ja: "益山が誇る最高のグルメ、黄登ユッケビビンバへようこそ。スープの旨味が染み込んだ絶品ビビンバをお楽しみください...",
          zh: "欢迎品尝益山最具代表性的美食黄登生牛肉拌饭。感受数十年传承下来的独家老汤拌饭技艺..."
        }
      }
    },
    {
      id: "ungpo",
      category: "nature",
      rating: 4.7,
      reviewsCount: 640,
      badge: "Best Sunset View",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      coords: { lat: 36.0888, lng: 126.8524 },
      openingHours: "Open 24 Hours",
      admission: "Free",
      tel: "+82-63-859-5778",
      address: {
        en: "Ungpogaemakin-gil, Ungpo-myeon, Iksan-si, Jeollabuk-do",
        ko: "전북 익산시 웅포면 강변로 (웅포곰개나루)",
        ja: "全羅北道 益山市 熊浦面 江辺路",
        zh: "全罗北道 益山市 熊浦面 江边路"
      },
      title: {
        en: "Geumgang River Ungpo Bear Port Sunset Park",
        ko: "웅포 곰개나루 금강 노을 공원",
        ja: "錦江 熊浦コムゲナル 夕日公園",
        zh: "锦江 熊浦熊犬津 夕阳公园"
      },
      shortDesc: {
        en: "Serene riverside park where the Geumgang River glows in golden crimson sunsets. Great for cycling & camping.",
        ko: "서해로 흘러드는 금강의 해넘이가 아름다운 낙조 명소이자 캠핑과 자전거 라이딩의 낙원.",
        ja: "錦江に沈む夕日が美しいロマンチックな公園。サイクリングやキャンプで大人気。",
        zh: "落日余晖洒满锦江的浪漫公园，是骑行、野营与观赏夕阳的绝佳避世之地。"
      },
      fullDesc: {
        en: "Situated along the wide stretches of the Geumgang River, Ungpo Gomgaenaru offers one of the top five sunset panoramas in Korea. Visitors can rent bicycles along the river trail, walk through reed fields, or camp under starry skies.",
        ko: "서해 서해안 5대 낙조 중 하나로 손꼽히는 웅포 곰개나루는 금강 물결 위로 붉게 타오르는 일몰이 환상적입니다. 강변 자전거 길과 캠핑장이 잘 마련되어 있어 자연 속 여유를 즐기기에 안성맞춤입니다.",
        ja: "西海岸5大夕日スポットの一つである熊浦コムゲナルは、水面を茜色に染める夕陽が感動的です。サイクリングロードやキャンプ施設も整っています。",
        zh: "这里被誉为西海岸五大落日观赏地之一，金黄与晚霞辉映在宽阔的锦江水面上。河畔设有自行车道与露营营地。"
      },
      tags: ["Nature", "Sunset", "Cycling", "Camping"],
      audioGuide: {
        title: "Golden Hour on the River Bank",
        duration: "1:50",
        transcript: {
          en: "As the afternoon wanes, watch the calm surface of the Geumgang River transform into a canvas of crimson and gold...",
          ko: "금강 물결 위로 펼쳐지는 붉은 노을을 감상해 보세요. 웅포 곰개나루는 마음의 평온을 주는 고요한 휴식처입니다...",
          ja: "水面を染める黄昏時の美しい風景をお楽しみください。心癒される優雅な時間をお届けします...",
          zh: "静静观看锦江河面上染红的夕阳晚霞。熊浦公园为您带来远喧嚣的宁静体验..."
        }
      }
    }
  ],

  itineraries: [
    {
      id: "unesco-day",
      title: {
        en: "1-Day UNESCO Baekje Heritage Tour",
        ko: "1일 유네스코 백제 역사 문화 코스",
        ja: "1日 ユネスコ百済歴史文化コース",
        zh: "一日 联合国教科文组织百济历史之旅"
      },
      duration: "approx. 6-7 hours",
      target: "History Buffs & Culture Lovers",
      stops: ["mireuksa", "wanggungri", "gemmuseum", "hwangdeungfood"]
    },
    {
      id: "kdrama-nature",
      title: {
        en: "1-Day K-Drama & Healing Nature Escape",
        ko: "1일 K-드라마 & 힐링 감성 코스",
        ja: "1日 Kドラマ＆ヒーリング自然コース",
        zh: "一日 韩剧打卡与自然疗愈之旅"
      },
      duration: "approx. 5-6 hours",
      target: "Instagrammers & Film Enthusiasts",
      stops: ["prisonset", "agapegarden", "nabawi", "ungpo"]
    }
  ],

  phrases: [
    {
      cat: "Transport",
      en: "How do I get to Iksan Station?",
      ko: "익산역으로 어떻게 가나요?",
      pron: "Iksan-yeok-eu-ro eo-tteoh-ke ga-na-yo?",
      ja: "益山駅にはどうやって行きますか？",
      zh: "请问怎么去益山站？"
    },
    {
      cat: "Transport",
      en: "Please take me to Mireuksa Temple Site.",
      ko: "미륵사지로 가주세요.",
      pron: "Mireuksaji-ro ga-ju-se-yo.",
      ja: "彌勒寺址までお願いします。",
      zh: "请带我去弥勒寺址。"
    },
    {
      cat: "Dining",
      en: "One bowl of Hwangdeung Bibimbap, please.",
      ko: "황등비빔밥 하나 주세요.",
      pron: "Hwangdeung-bibimbap ha-na ju-se-yo.",
      ja: "黄登ビビンバを1つください。",
      zh: "请给我一份黄登拌饭。"
    },
    {
      cat: "Dining",
      en: "Is this food spicy?",
      ko: "이 음식 매운가요?",
      pron: "I eum-sik mae-un-ga-yo?",
      ja: "この料理は辛いですか？",
      zh: "这个菜辣吗？"
    },
    {
      cat: "Shopping",
      en: "Can I pay by credit card?",
      ko: "신용카드로 결제할 수 있나요?",
      pron: "Sin-yong-ka-deu-ro gyeol-je-hal su in-na-yo?",
      ja: "クレジットカードは使えますか？",
      zh: "可以用信用卡付款吗？"
    },
    {
      cat: "General",
      en: "Where is the restroom?",
      ko: "화장실이 어디에 있나요?",
      pron: "Hwa-jang-sil-i eo-di-e in-na-yo?",
      ja: "お手洗いはどこですか？",
      zh: "请问洗手间在哪里？"
    }
  ],

  transportGuide: {
    fromSeoul: [
      { mode: "KTX / SRT High-Speed Train", duration: "1 hr 10 min", dep: "Yongsan / Suseo Station -> Iksan Station", price: "~ ₩32,000" },
      { mode: "Express Bus", duration: "2 hr 40 min", dep: "Seoul Express Bus Terminal -> Iksan Bus Terminal", price: "~ ₩21,000" }
    ],
    fromIncheonAirport: [
      { mode: "KTX Direct Link / AREX transfer", duration: "approx. 2 hr 15 min", dep: "Incheon Airport T1/T2 -> Seoul/Yongsan -> Iksan", price: "~ ₩40,000" },
      { mode: "Limousine Airport Bus", duration: "approx. 3 hr", dep: "Incheon Airport -> Iksan Terminal", price: "~ ₩33,000" }
    ],
    localTour: [
      { name: "Iksan City Tour Bus", note: "Operates weekend themed routes (UNESCO Route, Gem Route). KRW 2,000 per pass." },
      { name: "Foreign Tourist Taxi", note: "Flat rate discounted charter taxi service for foreign passport holders." }
    ]
  },

  emergencyContacts: [
    { name: "1330 Korea Travel Hotline", tel: "1330", note: "24/7 Free Tourist Interpretation (EN, JA, ZH)" },
    { name: "Emergency & Ambulance", tel: "119", note: "Fire & Rescue" },
    { name: "Police Hotline", tel: "112", note: "Police emergency" },
    { name: "Iksan Station Tourist Information", tel: "+82-63-859-3825", note: "Located at Iksan Station Plaza" }
  ]
};
