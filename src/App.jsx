import React, { useState } from 'react';
import { CheckCircle, XCircle, BookOpen, ChevronRight, ArrowLeft } from 'lucide-react';

const PsychologyQuizApp = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isReview, setIsReview] = useState(false);

  // 科目データ構造
  const subjects = {
    psychology: {
      id: 'psychology',
      name: '心理学概論',
      icon: '🧠',
      color: 'blue',
      correspondence: [
        // 既存の通信指導問題（問1～問10）
        {
          id: 1,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "ゲシュタルト心理学は、ヴントによって始められた。",
            "外部から観察できる客観的な指標のみに基づいて、行動を解明しようとする立場を、認知主義という。",
            "人間性心理学を代表する人物として、フロイトを挙げることができる。",
            "ダーウィンの進化論は、心理学の成立と発展に大きな影響を及ぼした。"
          ],
          correct: 3,
          explanations: [
            "ゲシュタルト心理学は、ヴェルトハイマー、ケーラー、コフカによって創始されました。ヴントは構成主義心理学（要素主義）の創始者で、心を要素に分解して研究しようとしました。",
            "外部から観察できる客観的な指標（行動）のみに基づいて研究する立場は「行動主義」です。認知主義は、内的な心理過程を研究対象とする立場です。",
            "人間性心理学を代表するのは、マズローやロジャースです。フロイトは精神分析学の創始者です。",
            "【正解】ダーウィンの進化論（1859年）は、心理学に革命的な影響を与えました。①比較心理学の発展、②個体差研究の重要性、③適応という概念、④本能や情動の研究などに大きく貢献しました。"
          ],
          hint: "心理学史の重要な学派：構成主義（ヴント）→ 機能主義→ 行動主義→ ゲシュタルト心理学→ 精神分析→ 人間性心理学→ 認知心理学"
        },
        {
          id: 2,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "場面見本法は、観察する事象を限定する方法である。",
            "時間見本法は、観察する時間を限定する方法である。",
            "事象見本法は、観察する場面を限定する方法である。",
            "日誌法は、参加者と交流せずに観察する方法である。"
          ],
          correct: 1,
          explanations: [
            "「事象見本法」が観察する事象を限定する方法です。特定の行動が起きたときのみ記録します。",
            "【正解】時間見本法（タイムサンプリング）は、一定の時間間隔で観察を行う方法です。長時間の観察が必要な場合に有効で、行動の頻度を定量的に分析できます。",
            "事象見本法は、観察する「事象」を限定する方法です。場面ではありません。",
            "日誌法は参加観察の一種です。参加者と交流しないのは「非参加観察」の特徴です。"
          ],
          hint: "観察法の分類：①時間による分類：時間見本法、②事象による分類：事象見本法、③観察者の関与：参加観察と非参加観察"
        },
        {
          id: 3,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "面接者の力量が最も必要とされるのは、構造化面接である。",
            "面接者の力量が最も必要とされるのは、非構造化面接である。",
            "面接者の力量が最も必要とされないのは、半構造化面接である。",
            "面接者の力量が最も必要とされないのは、グループ面接である。"
          ],
          correct: 1,
          explanations: [
            "構造化面接は質問内容が標準化されているため、面接者の力量による影響が最小限です。",
            "【正解】非構造化面接では、質問内容が事前に固定されていないため、面接者は状況に応じて柔軟に質問を変更する必要があります。高度な傾聴力、共感能力、即興性が求められます。",
            "半構造化面接は、基本的な質問の枠組みはあるが追加質問ができる方法です。構造化面接よりは力量が必要です。",
            "グループ面接では、複数の参加者をファシリテートする高度なスキルが求められます。"
          ],
          hint: "構造化の程度：構造化大（標準化）← 構造化面接 ← 半構造化面接 ← 非構造化面接 → 構造化小（柔軟性大）"
        },
        {
          id: 4,
          question: "次の①～④の選択肢の中から、誤っているものを一つ選べ。",
          options: [
            "2つの刺激が区別できるのに必要な感覚を生じさせる最小の刺激変化量のことを絶対閾という。",
            "感覚は、その刺激に触れたばかりのときには敏感だが、同じ刺激に繰り返し触れ続けると、次第に鈍感になっていく。",
            "図と地の反転図形では、ものとして見える「図」と背景として見える「地」が、絶えず入れ替わるという現象が経験される。",
            "ある人が10メートル先にいる場合と、20メートル先にいる場合では、網膜に映るその人の姿は2分の1の大きさになるはずだが、私たちは、その人の大きさが半分になったとは感じない。"
          ],
          correct: 0,
          explanations: [
            "【正解（誤り）】2つの刺激を区別できる最小の刺激変化量は「弁別閾（差異閾）」です。絶対閾は、刺激の存在を検出できる最小の刺激強度を指します。",
            "この現象を「順応」といいます。暗順応、嗅覚順応など、感覚器官が刺激に慣れることで、環境の変化を効率的に検出できます。",
            "ルビンの壺のような図と地の反転図形では、「図」と「地」の解釈が入れ替わることで知覚が変わります。",
            "この現象を「大きさの恒常性」といいます。脳は距離情報を使って対象の実際の大きさを推定します。"
          ],
          hint: "精神物理学：①絶対閾：刺激を検出できる最小値、②弁別閾：2つの刺激を区別できる最小差、③恒常性：環境変化に関わらず対象の真の特性を知覚"
        },
        {
          id: 5,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "視覚、聴覚、嗅覚、触覚、味覚という五感の分類は、近代になってできたものである。",
            "五感は相互に完全に独立しているため、感覚間で混線が起こることはない。",
            "私たちは、常に多くの感覚を経験しながら生活しているが、それらの感覚を遮断したとしても、特に生活に支障はない。",
            "ペンフィールドが作成した感覚の脳内地図を見ると、身体部位によって、体性感覚野に占める相対的な大きさには違いがみられる。"
          ],
          correct: 3,
          explanations: [
            "五感の分類は、古代ギリシャのアリストテレスの時代から存在します。",
            "五感は独立していません。マガーク効果、共感覚、風味（味覚と嗅覚の相互作用）など、感覚統合が起こります。",
            "感覚遮断実験では、集中力低下、幻覚、不安などの深刻な影響が現れます。感覚情報は脳の正常な機能維持に不可欠です。",
            "【正解】ペンフィールドの感覚ホムンクルスでは、手や唇など触覚が敏感な部位が、体性感覚野で大きな領域を占めています。感覚の重要性に応じて脳の領域が配分されています。"
          ],
          hint: "体性感覚の脳内表現：感覚ホムンクルスと運動ホムンクルスがあり、特に指、手、顔、唇が大きく表現されます。"
        },
        {
          id: 6,
          question: "次の①～④の選択肢の中から、誤っているものを一つ選べ。",
          options: [
            "観察学習では、モデルの行動を直接的に観察するだけでなく、テレビなどを通して間接的に観察するだけでも学習は成立する。",
            "洞察学習が成立するまでには、古典的条件づけや道具的条件づけとは違い、目標となる行動に向けた試行を何度も繰り返す必要はない。",
            "道具的条件づけでネズミがレバー押しをするようになるためには、エサのような報酬だけでなく、嫌悪刺激も利用できる。",
            "パブロフの実験で、イヌがメトロノームの音を聞いただけで、唾液を分泌するようになったという場合、メトロノームの音と唾液分泌の関係はそれぞれ無条件刺激と無条件反応である。"
          ],
          correct: 3,
          explanations: [
            "バンデューラの社会的学習理論では、テレビなどメディアを通じた間接観察でも学習が成立します。ボボ人形実験で実証されました。",
            "ケーラーのチンパンジー研究で示された洞察学習では、試行錯誤なしに突然問題が解決されます（「アハ体験」）。",
            "道具的条件づけでは、正の強化（報酬）だけでなく、負の強化（嫌悪刺激の除去）も行動を増加させます。",
            "【正解（誤り）】メトロノームの音は「条件刺激（CS）」、それによる唾液分泌は「条件反応（CR）」です。無条件刺激（US）は食物、無条件反応（UR）は食物に対する生得的な唾液分泌です。"
          ],
          hint: "古典的条件づけ：①無条件刺激（US）→ 無条件反応（UR）は生得的、②条件刺激（CS）→ 条件反応（CR）は学習により獲得"
        },
        {
          id: 7,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "PETやfMRIは、EEGやMEGに比べて空間分解能が優れている。",
            "大脳皮質を機能的な側面から分ける場合、前頭葉、頭頂葉、後頭葉、側頭葉に分けることができる。",
            "大脳は、左半球と右半球に分かれているが、両者の間に特に機能的な違いは見られない。",
            "神経細胞の軸索終末部は、隣接する神経細胞の樹状突起と密着しており、その密着部を通じて、一つの神経細胞から次の神経細胞へと情報が伝達される。"
          ],
          correct: 0,
          explanations: [
            "【正解】PETとfMRIは数ミリメートル単位で脳活動部位を特定できる高い空間分解能を持ちます。一方、EEGとMEGは時間分解能（ミリ秒単位）に優れますが、空間分解能は低いです。",
            "これは正しい記述です。大脳皮質は前頭葉、頭頂葉、後頭葉、側頭葉の4つに分けられ、それぞれが特定の機能を担います。",
            "大脳半球には機能的非対称性があります。一般的に、左半球は言語、論理的思考、右半球は空間認知、感情処理に優れています。",
            "神経細胞間には「シナプス間隙」という隙間があり、情報伝達は神経伝達物質による化学的伝達で行われます。"
          ],
          hint: "脳機能イメージング：①空間分解能：fMRI, PET > MEG > EEG、②時間分解能：EEG, MEG > fMRI > PET"
        },
        {
          id: 8,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "比較心理学は、人間と動物の相違点を探求する学問であり、類似点には関心がない。",
            "ヒトには色の知覚に関与する錐体が3種あり、これは他のどんな動物よりも多い。",
            "マークテスト（ルージュテスト）を行うことで、動物の自己認識能力を調べることができる。",
            "言語能力は人に特有のものなので、進化の隣人と呼ばれるチンパンジーでも身につけることはできない。"
          ],
          correct: 2,
          explanations: [
            "比較心理学は、人間と動物の類似点と相違点の両方を探求します。類似点の研究により、心理現象の進化的起源を理解できます。",
            "鳥類には4種類の錐体があり、人間（3種）より多様な色覚を持ちます。鳥類は紫外線も見ることができます。",
            "【正解】マークテストでは、動物の顔に印をつけ、鏡を見たときに印に触れるかを観察します。チンパンジー、イルカ、ゾウ、カササギなどが合格しています。",
            "チンパンジーは手話や記号を使った言語的コミュニケーション能力をある程度獲得できます。ただし、人間の言語のような複雑な統語構造は限定的です。"
          ],
          hint: "動物の認知能力：①自己認識、②心の理論、③道具使用、④数概念、⑤言語（類人猿の記号学習）"
        },
        {
          id: 9,
          question: "次の①～④の選択肢の中から、誤っているものを一つ選べ。",
          options: [
            "自己決定理論の4つのスタイルのうち、最も内発的に動機づけられているスタイルだと考えられるのは「内的調整」である。",
            "教師のリーダーシップをPM理論に沿って分類した場合、最も望ましいのはPM型である。",
            "ソーシャル・スキル・トレーニングの長所は、それが知識や技能の獲得を目標としており、それらを具体的に教えることができる点にある。",
            "学習者のもつ「誤概念」は、理科や算数・数学の領域に関するものに限定されており、社会科のような領域で学習者が誤概念をもつことはない。"
          ],
          correct: 3,
          explanations: [
            "自己決定理論では、内的調整（統合的調整）が最も自律的で内発的です。行動が自己の価値観と完全に一致しています。",
            "PM理論では、PM型（P機能とM機能の両方が高い）が最も効果的です。目標達成と集団維持の両立が重要です。",
            "SSTは、対人関係スキルを具体的に教える行動療法的アプローチです。観察可能な行動目標を設定できる点が長所です。",
            "【正解（誤り）】誤概念は、理科や数学だけでなく、社会科、歴史、経済学など、あらゆる教科で生じます。日常経験に基づく素朴理論から生じることが多いです。"
          ],
          hint: "誤概念の特徴：①頑健性、②一貫性、③普遍性、④抵抗性。効果的な教育には概念変容アプローチが有効です。"
        },
        {
          id: 10,
          question: "次の①～④の選択肢の中から、誤っているものを一つ選べ。",
          options: [
            "達成目標理論の目標タイプの4つの下位分類のうち、「よい成績をとることで自分のプライドを保ちたい」というのは、「遂行接近」目標に分類される。",
            "モレノの開発したソシオメトリック・テストは、学級内の交友関係を知るのに有効なので、その実施が奨励される。",
            "「誤概念」は、現在の科学に照らすと誤りないし不適切であるが、ある限定的な範囲では妥当性をもつことがある。",
            "同じ減法（引き算）を用いて答えを出す文章題でも、そこで必要になる認知過程は異なることがあるため、正答率に差が生じることがある。"
          ],
          correct: 1,
          explanations: [
            "達成目標理論の「遂行接近」目標は、他者より良い成績をとり、能力を示すことを目指します。自尊心の維持が動機です。",
            "【正解（誤り）】ソシオメトリック・テストは人間関係を可視化できますが、孤立児の存在が明らかになるなど、実施には慎重な倫理的配慮が必要です。無条件に奨励されるものではありません。",
            "誤概念は完全な誤りではなく、日常経験の範囲では機能することがあります。適用範囲を理解させることが教育的に重要です。",
            "同じ引き算でも、文脈により必要な認知過程が異なります。除去問題、比較問題、部分-全体問題では難易度が変わります。"
          ],
          hint: "教育評価の倫理：①プライバシー保護、②スティグマ化防止、③結果の適切な使用、④インフォームドコンセント"
        }
      ],
      practice: [
        // 既存の自習型問題（Q1～Q10）
        {
          id: 1,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "縦断的方法では、年齢に伴う発達的変化の一般的傾向とともに、変化の道筋の個人差を捉えることもできる。",
            "人間の発達は、遺伝と環境の相互作用によって進むため、個人の主体的制御の影響は認められない。",
            "児童期の思考の特徴として、自己中心性が挙げられる。",
            "成人期以降、知能は徐々に衰えていく。"
          ],
          correct: 0,
          explanations: [
            "【正解】縦断的方法は、同じ個人を長期間追跡するため、発達の一般的傾向だけでなく、個人内の変化パターンや個人差（早熟型・晩熟型など）も詳細に捉えられます。",
            "人間の発達は、遺伝と環境の相互作用に加えて、個人の能動的な選択や主体的な関与も重要な役割を果たします。",
            "自己中心性は前操作期（2-7歳）の幼児期の特徴です。児童期は具体的操作期で、脱中心化が進みます。",
            "流動性知能は加齢で低下しますが、結晶性知能は高齢期まで維持・向上します。"
          ],
          hint: "発達研究：①縦断的研究：個人内変化、②横断的研究：年齢差、③系列的研究：両者の組み合わせ"
        },
        {
          id: 2,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "ヴィゴツキーは、子どもの認知的発達段階を提唱した。",
            "ピアジェは知能検査を開発した。",
            "エリクソンはアタッチメント理論を提唱した。",
            "バンデューラは社会的学習理論を唱えた。"
          ],
          correct: 3,
          explanations: [
            "認知的発達段階を提唱したのはピアジェです。ヴィゴツキーは社会文化的アプローチと発達の最近接領域（ZPD）で知られています。",
            "知能検査を開発したのはビネーとシモンです（1905年）。ピアジェは知能の質的な発達段階を研究しました。",
            "アタッチメント理論を提唱したのはボウルビィです。エリクソンは心理社会的発達理論（8段階）を提唱しました。",
            "【正解】バンデューラは社会的学習理論を提唱し、観察学習（モデリング）の重要性を実証しました。ボボ人形実験が有名です。自己効力感の概念も提唱しました。"
          ],
          hint: "発達心理学の主要理論家：①ピアジェ：認知発達段階、②ヴィゴツキー：ZPD、③エリクソン：心理社会的発達、④ボウルビィ：アタッチメント、⑤バンデューラ：社会的学習"
        },
        {
          id: 3,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "臨床心理学では、個別性が重視されるため、エビデンスは重視されない。",
            "心理アセスメントの手法には、観察法と検査法の2種類がある。",
            "精神疾患を診断する基準としてよく用いられているのは、ICDである。",
            "習癖には、身体をいじる癖（身体玩弄癖）や身体の動きを伴う癖（運動性習癖）などが含まれる。"
          ],
          correct: 3,
          explanations: [
            "現代の臨床心理学では、個別性を重視しつつも、エビデンスに基づく実践（EBP）が重視されています。",
            "心理アセスメントには、①観察法、②検査法、③面接法、④質問紙法など複数の方法があります。",
            "ICD（WHO）とDSM（アメリカ精神医学会）の両方が広く用いられています。日本では両方が参照されます。",
            "【正解】習癖には、①身体玩弄癖（爪噛み、指しゃぶり、抜毛）、②運動性習癖（チック、頭部打ちつけ）などが含まれます。多くは成長とともに自然消失します。"
          ],
          hint: "臨床心理アセスメント：①多面的評価、②信頼性と妥当性、③個別性の尊重、④倫理的配慮"
        },
        {
          id: 4,
          question: "次の①～④の選択肢の中から、誤っているものを一つ選べ。",
          options: [
            "認知療法では、問題行動を環境との相互作用の中でとらえ、「先行要因－問題行動－随伴要因」の3項随伴性を明らかにする。",
            "精神分析療法では、無意識レベルでの葛藤を意識化することにより、抑圧された感情を解放し、クライエントが自己洞察できるようになることをめざす。",
            "クライエント中心療法の三原則は、共感的理解、無条件の肯定的配慮、自己一致である。",
            "うつ病の人は、不合理で偏った自動的思考をする傾向がある。"
          ],
          correct: 0,
          explanations: [
            "【正解（誤り）】3項随伴性を分析するのは認知療法ではなく行動療法（行動分析）です。認知療法は自動思考や認知の歪みに焦点を当てます。",
            "精神分析療法は、無意識の意識化、抑圧された感情の解放（カタルシス）、洞察の獲得を目指します。",
            "ロジャースのクライエント中心療法の三原則は、①共感的理解、②無条件の肯定的配慮、③自己一致です。",
            "ベックの認知療法では、うつ病の人は認知の三徴（自己、世界、未来への否定的見方）と自動思考の歪みを持つとされます。"
          ],
          hint: "主要な心理療法：①精神分析：無意識、②行動療法：学習理論、③認知療法：認知の歪み、④クライエント中心療法：自己実現、⑤認知行動療法（CBT）"
        },
        {
          id: 5,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "パーソナリティは、身体的・神経的側面とは無関係である。",
            "子どもはタブラ・ラサ（白紙）で生まれてくるため、生まれながらの個性というものは存在しない。",
            "神経症傾向は、パーソナリティの5因子（ビッグファイブ）の一つである。",
            "性格検査には、質問紙法と面接法、投影法の3種類がある。"
          ],
          correct: 2,
          explanations: [
            "パーソナリティは遺伝的要因（気質）と環境的要因の相互作用により形成されます。双生児研究により約40-60%は遺伝的要因で説明できます。",
            "乳児期から気質の個人差が観察されます。トーマスとチェスの研究で、扱いやすい子、難しい子、反応の鈍い子の3タイプが示されました。",
            "【正解】神経症傾向（Neuroticism）はビッグファイブの一つです。他は①外向性、②調和性、③誠実性、④開放性です。",
            "性格検査には、①質問紙法、②投影法、③作業検査法などがあります。面接法はアセスメント全般の方法です。"
          ],
          hint: "ビッグファイブ（OCEAN）：①開放性、②誠実性、③外向性、④調和性、⑤神経症傾向"
        },
        {
          id: 6,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "人間の行動に関するレヴィンの公式(B = f(P・E))において、Pとはperception、すなわち、知覚のことである。",
            "社会的促進は、人間にのみ起こる現象である。",
            "規範的影響は、他者の行動を暗黙の規範とみなすことによって生じるもので、この影響によって生じる同調は、他者から拒絶されたくないとか、好ましく思ってほしいといった動機づけに基づいている。",
            "多数派の影響は絶対的なため、集団における意思決定の場で、少数派の意見が多数派の意見を覆すことはない。"
          ],
          correct: 2,
          explanations: [
            "レヴィンの公式 B = f(P, E) で、PはPerson（個人）、EはEnvironment（環境）を意味します。行動は個人と環境の相互作用で決まります。",
            "社会的促進は人間だけでなく、アリ、ゴキブリ、ニワトリなど多くの動物でも観察されます。",
            "【正解】規範的影響は、集団から受け入れられたい、拒絶されたくないという動機に基づく同調です。公的同調を生み、内心では同意していないことが多いです。",
            "モスコヴィッチの研究により、一貫性のある少数派は多数派の意見を変えることができることが示されています。"
          ],
          hint: "社会的影響：①規範的影響：集団承認欲求、②情報的影響：正しい情報への欲求"
        },
        {
          id: 7,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "産業心理学の祖と呼ばれるミュンスターベルクは、ヴントの弟子である。",
            "テイラーは、現場の作業能率を上げるには、作業者の経験や勘に頼るのが一番良いと主張した。",
            "ホーソン工場で行われた実験では、照明を段階的に明るくした場合にのみ、作業能率が上がった。",
            "レヴィンらが行ったリーダーシップに関する研究では、放任型のリーダーシップ・スタイルが、もっとも作業能率が高かった。"
          ],
          correct: 0,
          explanations: [
            "【正解】ミュンスターベルク（1863-1916）は、ヴントの下で博士号取得後、アメリカで産業心理学、法心理学の基礎を築きました。応用心理学の父と呼ばれます。",
            "テイラーの科学的管理法は、経験や勘ではなく科学的な作業分析により能率を上げることを主張しました。",
            "ホーソン実験では、照明を明るくしても暗くしても作業能率が上がりました（ホーソン効果）。社会的・心理的要因の重要性が示されました。",
            "レヴィンらの研究では、民主型が最も効果的でした。放任型は最も非効率でした。"
          ],
          hint: "産業・組織心理学：①科学的管理法（テイラー）、②ホーソン実験、③人間関係論、④動機づけ理論"
        },
        {
          id: 8,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "日本人には集団主義的な傾向が強く見られる。",
            "文化的自己観とは、自己概念や自尊感情における文化差のことを指している。",
            "アジア圏では分析的思考が優勢であり、欧米圏では包括的思考が優勢となっている。",
            "日本人の自己批判的傾向は、他者高揚や自己向上と結びついている。"
          ],
          correct: 3,
          explanations: [
            "日本社会には集団主義的側面がありますが、近年の研究では状況に応じて個人主義的行動もとることが示されています。",
            "文化的自己観は、自己を独立的に捉えるか相互協調的に捉えるかという、自己観そのものの文化差を指します。",
            "逆です。東アジアは包括的（全体的）思考、欧米は分析的（要素分解）思考が優勢とされています。",
            "【正解】日本人の自己批判的傾向は、①他者高揚（他者を高く評価）、②自己向上動機（継続的な自己改善）と関連しています。謙遜の美徳という文化的価値観と整合的です。"
          ],
          hint: "文化心理学：①独立的自己観vs相互協調的自己観、②個人主義vs集団主義、③分析的思考vs包括的思考"
        },
        {
          id: 9,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "推測統計を行って有意差が出なかった場合には、記述統計を行うべきである。",
            "データ入力の間違いを犯すことはありえないので、推測統計の前に記述統計を行う必要は無い。",
            "記述統計を行いその結果をグラフに示してから、推測統計に進む必要がある。",
            "記述統計は標本（サンプル）の結果を把握するために行い、推測統計は母集団の結果を推測するために行う。"
          ],
          correct: 3,
          explanations: [
            "推測統計の結果に関わらず、記述統計は常に行います。記述統計は推測統計の前提です。",
            "データ入力ミスは必ず起こりうるため、推測統計の前に記述統計を行うことが重要です。",
            "記述統計を先に行うことは推奨されますが、「必要がある」という表現は強すぎます。",
            "【正解】記述統計は標本データの特徴を要約・記述します（平均、標準偏差など）。推測統計は標本から母集団を推定したり仮説検定を行います。"
          ],
          hint: "統計分析の流れ：①データ収集、②データクリーニング、③記述統計、④前提確認、⑤推測統計、⑥効果量、⑦解釈と報告"
        },
        {
          id: 10,
          question: "次の①～④の選択肢の中から、正しいものを一つ選べ。",
          options: [
            "心理学の知識は日々更新されているので、古典として位置づけられるような研究を知る必要はない。",
            "「心理学の過去は長いが歴史は短い」という有名なことばがある。これは、「心」への関心という意味での心理学の起源は遥か遠くの紀元前にまでさかのぼることができるが、心理学が一学問として成立したのはまだ最近のことだということである。",
            "心理学は多様な分野からなる学問だが、それらを幅広く学ぶ必要はなく、関心のある分野だけを学べばよい。",
            "心理学を学べば、目の前にいる他者の気持ちを手に取るようにわかるようになる。"
          ],
          correct: 1,
          explanations: [
            "古典的研究を学ぶことは重要です。現代の理論の基礎を理解でき、概念の本来の意味を把握できます。",
            "【正解】この言葉はエビングハウスによるものです。心への関心は古代ギリシャから存在しますが、科学としての心理学が成立したのは1879年のヴントの実験室設立からです。わずか約145年の歴史です。",
            "心理学の各分野は相互に関連しています。幅広い知識は、多角的な視点、統合的理解、専門性の深化に不可欠です。",
            "心理学は他者の心を読む超能力ではありません。人間行動の一般的原理を提供しますが、個人の具体的な思考を予測する万能の技術ではありません。"
          ],
          hint: "心理学を学ぶ意義：①自己理解、②他者理解、③批判的思考、④科学的態度、⑤応用への貢献"
        }
      ]
    }
  };

  // カラーテーマの定義
  const colorThemes = {
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      hover: 'hover:from-blue-600 hover:to-blue-700',
      light: 'bg-blue-50 border-blue-500',
      text: 'text-blue-100'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      hover: 'hover:from-purple-600 hover:to-purple-700',
      light: 'bg-purple-50 border-purple-500',
      text: 'text-purple-100'
    }
  };

  // 現在の質問を取得
  const getCurrentQuestions = () => {
    if (!selectedSubject || !selectedMode) return [];
    return subjects[selectedSubject][selectedMode];
  };

  const questions = getCurrentQuestions();
  const questionsToUse = isReview ? wrongAnswers : questions;
  const currentQuestion = questionsToUse[currentQ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index !== currentQuestion.correct && !isReview) {
      setWrongAnswers([...wrongAnswers, currentQuestion]);
    }
  };

  const handleNext = () => {
    if (currentQ < questionsToUse.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      if (!isReview && wrongAnswers.length > 0) {
        setIsReview(true);
        setCurrentQ(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setCurrentQ(questionsToUse.length);
      }
    }
  };

  const handleReset = () => {
    setSelectedSubject(null);
    setSelectedMode(null);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setWrongAnswers([]);
    setIsReview(false);
  };

  const handleBackToSubjects = () => {
    setSelectedMode(null);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setWrongAnswers([]);
    setIsReview(false);
  };

  // 科目選択画面
  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-12">
              <BookOpen className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">心理学 学習アプリ</h1>
              <p className="text-gray-600 text-lg">学習する科目を選択してください</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(subjects).map((subject) => {
                const theme = colorThemes[subject.color];
                return (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`group bg-gradient-to-br ${theme.gradient} ${theme.hover} text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    <div className="text-6xl mb-4">{subject.icon}</div>
                    <h2 className="text-2xl font-bold mb-3">{subject.name}</h2>
                    <div className="flex justify-center gap-4 text-sm">
                      <span className={theme.text}>通信指導 {subject.correspondence.length}問</span>
                      <span className={theme.text}>自習型 {subject.practice.length}問</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-12 text-center text-gray-500 text-sm">
              <p>※現在は心理学概論のみ利用可能です</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentSubject = subjects[selectedSubject];
  const theme = colorThemes[currentSubject.color];

  // 問題セット選択画面
  if (!selectedMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <button
              onClick={() => setSelectedSubject(null)}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              科目選択に戻る
            </button>

            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{currentSubject.icon}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{currentSubject.name}</h1>
              <p className="text-gray-600 text-lg">問題セットを選択してください</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setSelectedMode('correspondence')}
                className={`group bg-gradient-to-br ${theme.gradient} ${theme.hover} text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold mb-3">通信指導問題</h2>
                <p className={`${theme.text} mb-2`}>問1～問{currentSubject.correspondence.length}</p>
                <p className="text-sm opacity-90">提出が必要な問題セット</p>
              </button>

              <button
                onClick={() => setSelectedMode('practice')}
                className={`group bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold mb-3">自習型問題</h2>
                <p className="text-teal-100 mb-2">Q1～Q{currentSubject.practice.length}</p>
                <p className="text-sm opacity-90">復習・練習用の問題セット</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 結果画面
  if (currentQ >= questionsToUse.length) {
    const correctCount = isReview ? 0 : questions.length - wrongAnswers.length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {isReview ? '復習完了！' : '全問題完了！'}
            </h2>

            {!isReview && (
              <div className="mb-8">
                <div className="text-5xl font-bold text-indigo-600 mb-2">
                  {correctCount} / {questions.length}
                </div>
                <p className="text-gray-600">正解数</p>

                {wrongAnswers.length > 0 && (
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                      間違えた問題が {wrongAnswers.length} 問あります
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              <button
                onClick={handleBackToSubjects}
                className={`w-full bg-gradient-to-r ${theme.gradient} ${theme.hover} text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                問題セット選択に戻る
              </button>
              <button
                onClick={handleReset}
                className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                科目選択に戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQ + 1) / questionsToUse.length) * 100;
  const modeTitle = selectedMode === 'correspondence' ? '通信指導問題' : '自習型問題';
  const questionPrefix = selectedMode === 'correspondence' ? '問' : 'Q';

  // 問題表示画面
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-t-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{currentSubject.name}</h1>
              <p className="text-gray-600">{modeTitle}</p>
            </div>
            <button
              onClick={handleBackToSubjects}
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              戻る
            </button>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className={`bg-gradient-to-r ${theme.gradient} h-2.5 rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>{questionPrefix}{currentQuestion.id} / {questionsToUse.length}問</span>
            <span>{Math.round(progress)}% 完了</span>
          </div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correct;
              const isSelected = index === selectedAnswer;

              let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";

              if (!showExplanation) {
                buttonClass += "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50";
              } else if (isCorrect) {
                buttonClass += "border-green-500 bg-green-50";
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-red-500 bg-red-50";
              } else {
                buttonClass += "border-gray-300 bg-gray-50";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-start">
                    <span className="font-bold mr-3 text-gray-600">
                      {['①', '②', '③', '④'][index]}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showExplanation && isCorrect && (
                      <CheckCircle className="w-6 h-6 text-green-500 ml-2 flex-shrink-0" />
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-500 ml-2 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  ヒント
                </h3>
                <p className="text-blue-700">{currentQuestion.hint}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">詳しい解説</h3>
                <div className="space-y-3">
                  {currentQuestion.explanations.map((explanation, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-bold text-gray-600 mr-2">
                        {['①', '②', '③', '④'][index]}
                      </span>
                      <span className="text-gray-700">{explanation}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className={`w-full bg-gradient-to-r ${theme.gradient} ${theme.hover} text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center`}
              >
                {currentQ < questionsToUse.length - 1 ? (
                  <>
                    次の問題へ
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  '結果を見る'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PsychologyQuizApp;
