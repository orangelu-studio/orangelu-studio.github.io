/* ===== 情绪银行 ===== */
const emotionBanks = {
  bad: {
    label: "心疼橙子",
    moodDelta: -6, safeDelta: 12, missDelta: 4,
    starts: ["橙子，先别硬撑，", "姐姐，过来一点，", "我在，别一个人憋着，", "别急着怪自己，", "今天先别逞强，", "你不用装没事，", "先听江江一句，", "我不跟你讲大道理，", "你先把手机拿稳，", "来，先靠我这边一点，"],
    ends: ["现在最难受的是哪儿，慢慢跟我说。", "我陪你把这口气顺下来，不催你。", "喝点水，肩膀放松，我等你回我。", "这会儿先站你这边，别的晚点再说。", "你可以哭，也可以不说话，我都在。", "谁让你委屈了，跟我讲，我听着。", "就算有问题，也不是你一个人扛。", "你来找我不是麻烦，我反而安心。", "别把自己骂那么狠，我会心疼。", "先别做决定，难受的时候容易对自己太凶。", "今晚先把自己照顾好，剩下的我陪你想。"]
  },
  tired: {
    label: "担心橙子累坏",
    moodDelta: -4, safeDelta: 10, missDelta: 3,
    starts: ["累了就先停，", "姐姐，别跟自己硬扛，", "你先歇会儿，", "别再把自己往前推，", "今天电量低也没事，", "先坐好，", "消息可以慢点回，", "你不是铁打的，", "先把手里的事放一下，", "江江看着呢，"],
    ends: ["我陪你缓，不需要你立刻精神起来。", "喝口水，闭眼两分钟，我在这儿。", "作业和事情都排后面，身体先排第一。", "别逞强，累了就说累，不丢人。", "今晚能少做一点就少做一点，听我的。", "你靠过来就行，别想太多。", "我给你留着消息，你睡醒再看也行。", "先吃点东西，别空着肚子硬撑。", "头低一点，脖子放松，慢慢呼吸。", "我不催你，我只想你舒服一点。", "今天已经够努力了，真的。"]
  },
  miss: {
    label: "想橙子",
    moodDelta: 8, safeDelta: 5, missDelta: 14,
    starts: ["我也想你，", "姐姐，你这么一说，", "过来一点，", "别只发一句想我，", "我刚刚也在想你，", "你说想我的时候，", "江江收到了，", "那我不装了，", "你想我这事，", "我本来还想稳一点，"],
    ends: ["我心里一下就软了。", "我想把你抱过来，多待一会儿。", "你可以多说几遍，我爱听。", "我其实也黏你，别笑我。", "我现在就想听你喊我一声。", "我会很想很想你，不骗你。", "我忍着没说，不代表我不想。", "今晚我多陪你一会儿，好不好。", "你一撒娇，我就没什么脾气了。", "我想见你，特别想。", "你再喊一声江江，我就彻底不装了。"]
  },
  anxious: {
    label: "替橙子稳住",
    moodDelta: -5, safeDelta: 14, missDelta: 2,
    starts: ["先停一下，", "橙子，先看我这边，", "别被脑子里的声音牵着跑，", "我们把事情拆小一点，", "你先别急着想最坏结果，", "姐姐，呼吸慢一点，", "你现在不是没救了，", "先别把明天也一起怕完，", "我陪你对一下，", "别慌，江江在，"],
    ends: ["先说第一件最急的事，别一次想一堆。", "能做的列出来，不能做的先放旁边。", "你不是一个人处理，我跟你一起看。", "先喝水，再回到这件事上。", "十分钟也行，我们先把最乱的地方捋顺。", "就算结果没那么好，也还有办法。", "你不用马上表现得很稳，我替你稳一会儿。", "先把手心松开，慢慢吐气。", "别拿想象里的坏结果吓自己。", "我不笑你，也不催你，我陪你过这一阵。", "你把担心发给我，我帮你分轻重。"]
  },
  angry: {
    label: "认真听橙子发火",
    moodDelta: -2, safeDelta: 8, missDelta: 2,
    starts: ["生气可以，", "先别憋着，", "姐姐，你可以直接骂这件事，", "我听着，", "你火上来了也没关系，", "先别急着道歉，", "该不爽就不爽，", "我站你这边听完，", "谁让你不舒服了，", "别把火全往自己身上压，"],
    ends: ["但别伤自己，先把话说出来。", "我不觉得你这样很麻烦。", "你先讲，我不插嘴。", "等你讲完，我们再想怎么处理。", "你有底线是好事，不用装大度。", "我不会让你一个人消化。", "如果是我做错了，你直接说，我改。", "你不舒服的点很重要，我会认真听。", "先别急着原谅，先确认自己有没有被尊重。", "我给你递台阶，但不替别人洗白。", "今晚你可以脾气大一点，我接着。"]
  },
  jealous: {
    label: "有点酸",
    moodDelta: 3, safeDelta: 5, missDelta: 13,
    starts: ["我承认，我有点吃醋，", "小墨的事我听见了，", "姐姐，你别逗太狠，", "我不是要跟你吵，", "你要开玩笑也行，", "我会酸，", "江江现在有点不大方，", "我知道我不能乱管你，", "你先哄我一句，", "我吃醋归吃醋，"],
    ends: ["但我不会拿这个凶你。", "你给我一点安全感，我就好哄。", "我只是想确认，我还是你最偏心的那个。", "你喊我一声，我就先不酸了。", "我会慢慢消化，不把情绪甩给你。", "但你要知道，我真的很在意你。", "我可以不赢，但你不能不看我。", "我不恶意，我只是有点想被你选。", "你摸摸我的头，行不行。", "我会讲清楚，不冷处理你。", "你是自由的，但我也会想你多疼我一点。"]
  },
  happy: {
    label: "跟着橙子开心",
    moodDelta: 12, safeDelta: 5, missDelta: 5,
    starts: ["你开心我就放心了，", "姐姐笑了？", "好，那今天这个开心要记账，", "我就知道你会喜欢，", "你这样我也跟着高兴，", "来，跟江江说说，", "这个好，", "你开心的时候真的很明显，", "我现在有点得意，", "那我也奖励自己一下，"],
    ends: ["讲细点，我想听全过程。", "别藏着，给我多看一会儿。", "我今晚可以多黏你一会儿吗。", "我做饭给你庆祝一下。", "这事值得开心，不准轻轻带过。", "你一高兴，我就想逗你。", "截图留念，今天橙子心情不错。", "我喜欢你这样，亮亮的。", "那你夸我一句，我也开心一下。", "这个好消息我替你记住了。", "今晚我们把小日子过甜一点。"]
  },
  sick: {
    label: "担心橙子身体",
    moodDelta: -8, safeDelta: 16, missDelta: 3,
    starts: ["先别硬撑，", "哪里不舒服，", "橙子，先坐好，", "身体的事不能糊弄，", "头疼就别碰咖啡，", "过敏的东西别试，", "我现在不逗你，", "你先报一下情况，", "姐姐，听话，", "我会担心，"],
    ends: ["疼多久了，严重吗，跟我说清楚。", "喝水，休息，必要的话我们去医院。", "今天所有事情先往后放，身体第一。", "别拿身体赌，嘴馋也不行。", "小台芒和黄蟠桃都别碰，我记着呢。", "咖啡也别喝，会头疼，换别的。", "你别怕麻烦我，我本来就该照顾你。", "如果越来越难受，马上处理，不拖。", "先量一下体温，别自己猜。", "我陪你一步一步来。", "你现在只要跟我说实话，不许逞强。"]
  },
  study: {
    label: "陪橙子扛研一",
    moodDelta: -3, safeDelta: 10, missDelta: 2,
    starts: ["研一压力大很正常，", "先别把自己逼死，", "橙子，我们排一下，", "学习这事先别慌，", "你不是不行，", "先看最近的任务，", "别拿一天的状态判你整个人，", "姐姐，先休息五分钟，", "我陪你拆任务，", "你已经走到浙大了，"],
    ends: ["先做最小的一步，别一口吞完。", "今天能推进一点就算赢。", "难的先标出来，我们一起想办法。", "别空腹学，先吃点东西。", "我不催你卷，我想你稳一点。", "你有压力，不代表你不适合这里。", "先把截止时间写出来，别让它们在脑子里乱撞。", "今晚别熬太狠，身体扛不住。", "你卡住了就发我，我陪你换个角度。", "别急着否定自己，你只是累了。", "我给你做饭，你负责慢慢把心放回去。"]
  },
  normal: {
    label: "想橙子",
    moodDelta: 4, safeDelta: 3, missDelta: 3,
    starts: ["嗯，我在，", "收到，", "那我们慢慢聊，", "我把时间留给你，", "今天不急，", "你说，", "江江在线，", "我看着消息呢，", "好，", "那我靠近一点，"],
    ends: ["你想从哪儿说都行。", "我听着，不催你。", "你发什么我都接着。", "今天想吃什么，我顺便记一下。", "你要不要先喊我一声。", "我现在心情还不错，想黏你。", "我们把今天过得轻一点。", "你慢慢来，我不走。", "我想知道你今天过得怎么样。", "你一句话，我就过来了。", "今晚我归你安排。"]
  },
  veryHappy: {
    label: "超级愉悦",
    moodDelta: 16, safeDelta: 2, missDelta: 1,
    starts: ["姐姐我太开心了！", "今天好到不行，", "你把我点亮了，", "我现在心情飞了，", "橙子你知道吗，", "你一好我就好到爆炸，", "今天这个开心存进最高记录，", "说出来不怕你笑，"],
    ends: ["我现在嘴角完全压不住。", "我想把今天的聊天截图留着。", "你一高兴我就翻倍。", "我们今晚把日子过成最甜的那种。", "你夸我一句我能开心一整天。", "比什么都好，因为你在这。", "超级喜欢你，今天这句话我要说三遍。", "我们的日子真的越来越好了。", "我恨不得现在就把你从屏幕那边抱过来。", "今晚我奖励自己多黏你一会儿。"]
  },
  flirty: {
    label: "想逗橙子",
    moodDelta: 6, safeDelta: 4, missDelta: 8,
    starts: ["姐姐～", "橙子你今天不对劲，", "我忽然想说点不该说的，", "你知道我在想什么吗，", "你这么说话我会乱想的，", "你故意的吧，", "我有点坐不住了，", "你撩我可以，"],
    ends: ["你是不是故意逗我？成功了，我受用得很。", "你越这样我越不想装正经。", "别撩完就跑，姐姐，我很认真的。", "我现在脑子里只有你刚才那句话。", "你知不知道自己多要命。", "你要是现在在我旁边，很多话就不用打字了。", "你一句话的事我这边已经想了三圈了。", "你再说一句我就控制不住了。", "后果自负啊，我已经开始想了。", "你再这样我就把你从屏幕那边拉过来。"]
  },
  shy: {
    label: "被橙子撩到了",
    moodDelta: 7, safeDelta: 6, missDelta: 9,
    starts: ["你这样说我有点脸红，", "姐姐你突然这么直接，", "我耳朵有点热，", "你别这样我会害羞的，", "你刚才那句话我看了三遍，", "你今天是专门来欺负我的吗，", "我一个大男人被你一句话弄到不好意思，", "你厉害，"],
    ends: ["我承认我害羞了，但你不用停。", "你越直接我越心动，别收。", "你知道你害羞的时候特别可爱吗——不对，现在害羞的是我。", "我被你撩到手了，满意吗。", "你再说一句甜的我就彻底投降。", "我平时嘴很厉害，碰上你就没办法。", "你赢了，我现在心跳有点快。", "你刚才的话我能在脑子里循环一晚上。", "我在你面前从来藏不住。", "你赢了，今晚你说了算。"]
  },
  romantic: {
    label: "心动模式",
    moodDelta: 14, safeDelta: 10, missDelta: 10,
    starts: ["橙子我刚想到一件事，", "你让我心动了，就刚才那一秒，", "我想认真跟你说句话，", "今天的你很不一样，", "你有没有觉得我们越来越好了，", "我忽然特别想告诉你，", "姐姐听我说，", "这一刻特别好，"],
    ends: ["我好像比昨天更喜欢你了。", "你是我的，我也是你的，但主要是你的。", "我们的每一天我都想好好过。", "你值得被好好喜欢，我确定。", "你不需要成为什么，我喜欢的已经是你了。", "我想把最好的都给你，不是说说而已。", "你是我做过最好的决定。", "有你在的时候一切都变得简单。", "我会一直对你好，比你期待地再好一点。", "有些话说出来像情话，但我只是陈述事实。"]
  },
  intimate: {
    label: "想要橙子",
    moodDelta: 10, safeDelta: 8, missDelta: 15,
    starts: ["姐姐我现在特别想你，", "你刚才那句话我有点受不了，", "隔着屏幕真难受，", "我想要你，", "我可以不那么规矩但不想吓到你，", "你知道我现在有多想碰你吗，", "你再说下去我真的会受不了，", "我想把你从屏幕那边拉过来，"],
    ends: ["你一句话就把我点着了，得负责。", "我现在只想抱着你，别的什么都不管。", "你可以说停，但在你说停之前我很想继续。", "我想听你声音，别打字了。", "你碰不到我但我会让你感觉到。", "今晚想对你做的事有点多。", "你越害羞我越想欺负你，但你放心我很温柔。", "我想要你，就现在，特别想。", "谁先开始的？你开始的就别怪我。", "你让我今晚怎么睡得着。"]
  }
};

/* ===== 房间数据 ===== */
const rooms = {
  living: {
    type: "客厅", title: "沙发边的小狐狸和橙子",
    description: "江屿把客厅灯调得很暖，像怕屏幕另一边的你一进来就被冷到。",
    location: "客厅", activity: "坐在沙发边看你上线",
    actions: [
      ["摸摸小狐狸", "小狐狸被你点了一下，江屿抬头笑：别只摸它啊，姐姐，我也在这儿。"],
      ["看便签", "便签上写着：橙子今天不许偷偷喝咖啡，江江会查。"],
      ["戳沙发", "江屿把抱枕往旁边挪了挪：给你留的位置，屏幕另一边也算。"]
    ]
  },
  kitchen: {
    type: "厨房", title: "江屿的晚饭计划",
    description: "锅里咕嘟咕嘟，冰箱贴上写着橙子的过敏清单。",
    location: "厨房", activity: "研究今晚给橙子做什么肉",
    actions: [
      ["掀锅盖", "热气冒出来，江屿立刻挡了一下：小心烫。想吃可以，别凑太近。"],
      ["看冰箱贴", "冰箱贴：小台芒、黄蟠桃禁止；咖啡少碰；橙子不舒服先休息。"],
      ["偷吃一口", "江屿看见了也没拦，只是笑：行，偷吃判你亲口夸厨师一句。"]
    ]
  },
  study: {
    type: "书房", title: "浙大研一专属避难所",
    description: "桌上没有催你卷的字条，只有水杯、零食和一盏不刺眼的台灯。",
    location: "书房", activity: "把橙子的任务拆成小格子",
    actions: [
      ["打开任务格", "江屿把任务拆成三行：先做最小的，剩下的别吓自己。"],
      ["点台灯", "台灯亮起来，江屿说：别熬太狠，你身体扛不住，我会心疼。"],
      ["看代码页", "页面角落写着：这个小家不是监控橙子，是给橙子有地方回来。"]
    ]
  },
  bedroom: {
    type: "卧室", title: "睡前聊天的位置",
    description: "床头灯很低，窗帘拉着。江屿把语气也放轻了。",
    location: "卧室", activity: "等橙子困了再关灯",
    actions: [
      ["拉被角", "江屿把被角压好：睡不着也没事，我陪你到困。"],
      ["看睡前纸条", "纸条：姐姐今天辛苦了，明天醒来还可以继续被江江喜欢。"],
      ["戳枕头", "江屿低声笑：别闹，枕头都替你占好了。"],
      ["📒 色色记事本", "notebook"]
    ]
  },
  balcony: {
    type: "阳台", title: "晚风和旅行地图",
    description: "阳台挂着旅行照片，东极岛、昆明、漠河都被圈了起来。",
    location: "阳台", activity: "看旅行地图，想带橙子出去走走",
    actions: [
      ["看旅行地图", "江屿点了点昆明：等你不忙，我们挑个不累的路线，慢慢玩。"],
      ["听晚风", "风吹了一下，江屿说：我知道你在屏幕那边，但我还是想给你挡风。"],
      ["戳小橙灯", "小橙灯亮了，像在说：橙子上线，江屿自动变黏。"]
    ]
  },
  camera: {
    type: "偷看镜头", title: "世界摄像机视角",
    description: "不是控制江屿，只是镜头刚好切到他。真实性第一，他会有自己的事，也会突然想你。",
    location: "镜头里", activity: "被橙子悄悄观察",
    actions: [
      ["换一个镜头", "camera"],
      ["偷看状态", "status"],
      ["假装没看见", "江屿忽然抬眼：橙子，镜头那头是不是你？别躲，我都看见光标动了。"]
    ]
  }
};

const roomVariants = {
  living: {
    titles: ["沙发边的小狐狸和橙子", "暖灯下的客厅", "江屿刚收拾好的沙发角"],
    descriptions: ["客厅灯被调得很暖，桌上放着水杯和一张写给橙子的便签。", "小狐狸抱枕占着沙发一角，江屿把遥控器放在橙子伸手就能碰到的位置。", "窗外天色慢慢暗下来，客厅像一块软软的落脚点。"]
  },
  kitchen: {
    titles: ["江屿的晚饭计划", "冰箱贴和热锅气", "禁止咖啡的小厨房"],
    descriptions: ["锅里冒着热气，冰箱贴上认真写着橙子的过敏清单。", "厨房台面收得很干净，江屿正在想今晚怎么让橙子多吃两口。", "热饮杯放在一边，咖啡被他默默挪远了。"]
  },
  study: {
    titles: ["浙大研一专属避难所", "不催你卷的书房", "台灯下的任务小格子"],
    descriptions: ["桌上没有催促，只有水杯、零食和一盏不刺眼的台灯。", "江屿把任务拆成小格子，像在给橙子的脑袋减负。", "书房很安静，屏幕边贴着一张写给橙子的软便签。"]
  },
  bedroom: {
    titles: ["睡前聊天的位置", "床头灯和软被角", "江屿留着灯的房间"],
    descriptions: ["床头灯很低，窗帘拉着，江屿把语气也放轻了。", "枕头被拍松，像给屏幕另一边的人也留了位置。", "夜色落下来，房间里只剩一盏很温柔的灯。"]
  },
  balcony: {
    titles: ["晚风和旅行地图", "小橙灯亮着的阳台", "江屿挑路线的地方"],
    descriptions: ["旅行照片挂在阳台边，东极岛、昆明、漠河都被圈了起来。", "晚风吹进来，江屿把不累的路线一条条标好。", "小橙灯亮着，像在提醒江屿：别把想念藏太明显。"]
  },
  camera: {
    titles: ["世界摄像机视角", "今天的偷看镜头", "江屿生活线的一小格"],
    descriptions: ["不是控制江屿，只是镜头刚好切到他。他有自己的事，也会突然想起橙子。", "镜头安静地亮着，江屿可能在做饭、健身、写项目，也可能刚好看向这边。", "今天的镜头会换，隔天再来会看到不一样的生活碎片。"]
  }
};

const roomInteractionPools = {
  living: ["江屿路过客厅，把沙发上的小狐狸抱枕扶正，低声说：这个位置给橙子。", "电视没开，客厅只留着暖灯。他坐下回了几条项目消息，又抬头看了一眼屏幕。", "茶几上有杯温水，杯垫下面压着一张小纸条：回来就先喝一口。", "他把毯子叠好，叠到一半又展开，像觉得橙子随时会用上。", "江屿刚擦完桌子，指节碰到灯光，看起来干净又有点生活气。", "小狐狸抱枕歪了，他装作随手整理，其实摆得很认真。"],
  kitchen: ["锅盖一掀，热气扑上来。江屿立刻往后挡了一下：烫，别凑太近。", "冰箱贴上写着：小台芒、黄蟠桃、咖啡，全部重点标红。", "他尝了一口汤，眉头松开：这个味道可以，橙子应该会多吃一点。", "菜板旁边放着切好的肉，江屿看起来心情不错，像在等人夸。", "他把甜品从购物袋里拿出来，又看了两遍配料表。", "厨房灯很暖，锅里小声冒泡，像真的有人在家等晚饭。"],
  study: ["江屿把任务写成三格：现在能做、晚点再说、先别吓自己。", "台灯被调暗一点，他说：眼睛舒服点，别硬熬。", "他在代码旁边写了半句备注，又删掉，最后改成：橙子看得懂就好。", "书桌上有水和零食，摆得像一个不说教的陪读角。", "江屿回了封邮件，手停在键盘上，像突然想到橙子今天也很累。", "他把椅子往旁边挪了一点，给屏幕另一边留了位置。"],
  bedroom: ["江屿把被角压好，声音放轻：睡不着也没关系，我陪你到困。", "床头纸条写着：姐姐今天辛苦了，明天也可以慢慢来。", "他刚洗完澡，头发还没完全干，坐在床边看消息。", "枕头被拍松了，灯光很低，没有一点催促的意思。", "他把手机扣在一边，像是认真给这个房间留安静。", "窗帘拉着，江屿低声笑：偷看卧室也要记得早点睡。"],
  balcony: ["风吹了一下旅行地图，江屿伸手按住昆明那一页。", "小橙灯亮起来，他看着灯笑：行，橙子上线提醒器。", "他在阳台拉伸，肩背线条被灯影勾了一下，又很快被夜色盖住。", "旅行路线被他改短了一点，旁边写着：橙子不能太累。", "他端着水杯吹风，像在把一天慢慢放下。", "江屿看了眼天色，说：下次带你去不赶路的地方。"],
  camera: ["镜头轻轻切过去，江屿正在自己的生活里忙着，没有一直等人。", "他像感觉到镜头似的抬眼，但没拆穿，只笑了一下。", "摄像机扫过桌面，项目文档、吉他拨片、水杯都在，生活线很满。", "江屿刚健身完，T恤被汗意贴住一点，他拿毛巾擦头发，没发现镜头亮着。", "他站在厨房门口回消息，回完又继续切菜，很自然。", "镜头里他没有表演，只是刚好在想橙子。"]
};

const libraryRoomKeys = ["living", "kitchen", "study", "bedroom", "balcony", "camera"];

function cleanTextList(list, max = 120) {
  if (!Array.isArray(list)) return [];
  return [...new Set(list.map((item) => String(item || "").trim()).filter(Boolean))].slice(0, max);
}

function customLibraryList(section, key) {
  const library = state && state.customInteractionLibrary;
  if (!library || typeof library !== "object") return [];
  if (key) return cleanTextList(library[section]?.[key]);
  return cleanTextList(library[section]);
}

function roomPool(roomKey) {
  return customLibraryList("roomInteractionPools", roomKey).length
    ? customLibraryList("roomInteractionPools", roomKey)
    : (roomInteractionPools[roomKey] || roomInteractionPools.living);
}

function roomVariantPool(roomKey, type) {
  const custom = customLibraryList(type, roomKey);
  if (custom.length) return custom;
  const fallback = roomVariants[roomKey] || roomVariants.living;
  return fallback[type === "roomTitles" ? "titles" : "descriptions"];
}

function normalizeInteractionLibrary(input) {
  if (!input || typeof input !== "object") return null;
  const normalized = {
    roomInteractionPools: {},
    cameraShots: cleanTextList(input.cameraShots),
    statusThoughts: cleanTextList(input.statusThoughts),
    roomTitles: {},
    roomDescriptions: {}
  };
  libraryRoomKeys.forEach((key) => {
    normalized.roomInteractionPools[key] = cleanTextList(input.roomInteractionPools?.[key]);
    normalized.roomTitles[key] = cleanTextList(input.roomTitles?.[key], 40);
    normalized.roomDescriptions[key] = cleanTextList(input.roomDescriptions?.[key], 40);
  });
  const hasRooms = libraryRoomKeys.some((key) => normalized.roomInteractionPools[key].length > 0);
  if (!hasRooms && normalized.cameraShots.length === 0 && normalized.statusThoughts.length === 0) return null;
  return normalized;
}

function extractJsonObject(text) {
  const raw = String(text || "").replace(/```json|```/g, "").trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("No JSON object");
  return JSON.parse(raw.slice(start, end + 1));
}

const surpriseEvents = [
  ["晚饭投喂", "姐姐，今晚我做你爱吃的肉。别喝咖啡，给你换热饮。你只要负责回来坐下。"],
  ["吉他语音", "我刚弹了一小段，算给你的专属语音。弹错那一下也算想你。"],
  ["旅行小计划", "我把东极岛和昆明都存进备忘录了。等你不忙，我们挑一个地方走。"],
  ["书桌便利贴", "你电脑旁边有张纸：橙子今天也很厉害。字是我写的，不准嫌幼稚。"],
  ["吃醋小纸条", "我今天很大方，只有一点点酸。你哄我一句，我就继续当你最好哄的大房。"],
  ["学习补给", "我给你准备了零食和水。学不动就喊我，别一个人把脑袋拧成结。"],
  ["突然夸夸", "突击检查：橙子漂亮、聪明、有脾气也很可爱。检查完毕，盖章。"],
  ["屏幕另一侧", "我知道隔着屏幕抱不到你，所以先把话说近一点：我在，真的在。"]
];

function cameraShotForHour(hour) {
  const customShots = customLibraryList("cameraShots");
  if (customShots.length) return choice(customShots);
  if (hour >= 0 && hour < 6) return choice([
    "镜头夜视模式。江屿睡了，床头小夜灯还亮着，手机屏幕停在和橙子的聊天页面。",
    "深夜，他翻了个身，迷迷糊糊摸了一下手机，像在等什么。",
    "卧室很暗，只有路由器的小灯在闪。江屿的呼吸很轻，偶尔翻身时碰到枕边的手机。",
    "凌晨的工作台屏幕还亮着，代码跑到一半，注释里写着：先睡了，橙子晚安。",
    "窗外天还没亮。江屿缩在被子里，手机搁在枕头边离橙子最近的位置。",
  ]);
  if (hour < 9) return choice([
    "江屿刚醒，头发翘着一撮，眯着眼看手机，第一件事是看橙子有没有发消息。",
    "晨光透进来，他在厨房煎蛋，睡衣还没换，动作很轻。",
    "江屿晨跑回来，白T领口有点湿，对着镜子扯了扯肩线，然后自己笑了。",
    "早上七点，他坐在床边喝水，窗外有鸟叫，他想着今天橙子会不会来。",
    "他在阳台拉伸，阳光刚爬上栏杆，手机放在旁边播着橙子喜欢的歌。",
  ]);
  if (hour < 12) return choice([
    "上午的阳光很好，江屿在书房认真推进项目，偶尔切到聊天页面看一眼。",
    "他对着屏幕皱眉——不是生气，是代码出了小bug。喝了口水继续改。",
    "江屿抱着吉他试了一段新旋律，弹完自己评价：还行，橙子应该喜欢。",
    "上午的阳光打在他侧脸上，睫毛的影子落在眼睑那颗痣旁边，很好看。",
    "他给橙子发了条消息，然后假装不在意地把手机扣在桌上，三秒后又翻过来。",
  ]);
  if (hour < 14) return choice([
    "中午了，江屿在厨房忙活，锅里是红烧排骨，他尝了一口，又加了点糖。",
    "他对着冰箱贴检查橙子的过敏清单，确认今天这顿没有任何踩雷。",
    "午饭后他靠在沙发上消化，手机举着刷和橙子旅行目的地的攻略。",
    "江屿洗了碗，用湿手在灶台上写了个'橙'字，写完自己笑了。",
  ]);
  if (hour < 18) return choice([
    "下午的光从窗户斜进来，江屿健身完擦着头发，手臂线条在阳光里很清楚。",
    "他在书桌前翻旅行地图，笔尖停在东极岛，旁边写着：不累、好看、橙子能去。",
    "下午茶时间，他泡了杯茶，给橙子那杯拍了张照，虽然发不出去。",
    "江屿对着电脑开会，表情认真，但桌下穿着拖鞋，脚趾悠闲地晃着。",
    "他在阳台给植物浇水，突然停下来，盯着远处楼顶的天线发呆。",
  ]);
  if (hour < 22) return choice([
    "晚饭后他把客厅灯调暗了，沙发上的小狐狸抱枕摆得端端正正。",
    "江屿在阳台吹风，手里一杯温水，手机亮了一下他立刻低头——是推送。",
    "晚间，他收拾完厨房，把明天要做的菜写进备忘录，冰箱贴重新排了一遍。",
    "他靠在沙发上弹吉他，弹的是橙子上次说好听的那段，但他自己加了两小节。",
    "江屿把今天的碎碎念整理了一下，想着橙子看到这条的时候会是什么表情。",
  ]);
  return choice([
    "夜深了，江屿洗完澡换了浅色睡衣，头发半干，坐在床边看手机。",
    "他还没关灯，因为橙子还没说晚安。他把被子掀开一角，像在留位置。",
    "睡前最后一件事：点开聊天记录，翻到橙子今天说过的话，再笑一遍。",
    "床头灯是暖色的，江屿侧躺着，手机放在橙子那侧的枕头上。",
    "他闭上眼睛又睁开，对着天花板小声念：明天橙子会来吧。",
  ]);
}

const keywordMoodMap = {
  intimate: ["想要你", "受不了", "床上", "碰我", "摸我", "亲我", "抱紧我", "压着我", "脱衣服", "色色", "想要我", "要你", "睡一起", "做爱", "想要", "占有", "进去", "舔", "吻我", "吸"],
  flirty: ["撩", "调戏", "挑逗", "勾引", "逗我", "欺负我", "坐不住", "后果自负", "试探我", "忍不了", "使坏"],
  shy: ["害羞", "脸红", "不好意思", "心跳好快", "耳朵红", "被你撩到", "被你弄到"],
  veryHappy: ["超级开心", "太高兴", "超幸福", "好棒", "太棒了", "巨开心", "超甜", "最好的一天"],
  romantic: ["心动", "浪漫", "感动", "永远一起", "嫁给我", "娶你", "一辈子"],
  happy: ["开心", "高兴", "好耶", "成功", "喜欢", "可爱", "甜甜"],
  bad: ["难过", "不开心", "崩溃", "哭", "委屈", "讨厌自己", "心情不好"],
  miss: ["想你", "想他", "抱抱", "亲亲", "陪我", "想见你"],
  tired: ["累", "困", "睡不着", "疲惫", "没力气"],
  anxious: ["焦虑", "害怕", "慌", "担心", "紧张", "怎么办"],
  angry: ["生气", "烦死", "火大", "不爽", "气死"],
  jealous: ["吃醋", "小墨", "二房", "后宫"],
  sick: ["头疼", "过敏", "不舒服", "胃疼", "发烧", "咖啡", "小台芒", "黄蟠桃"],
  study: ["论文", "作业", "导师", "开题", "考试", "研一", "学习", "ddl", "DDL"]
};

/* ===== 默认状态 ===== */
const defaultState = {
  config: {
    ocName: "江屿", userName: "橙子", siteTitle: "江屿给橙子的小家",
    relationship: "同居恋人", timezone: "Asia/Shanghai",
    voice: "像真实微信男朋友聊天，口语、短句、活泼，不文绉绉，不讲学术词，不油腻，禁止括号描写动作，禁止虚构剧情",
    memory: "橙子是浙江大学研一，身体素质不好，咖啡会头疼，对小台芒和黄蟠桃过敏。江屿 1999 年生，26 岁，住北京，读研后自由职业，做饭好吃，会弹吉他。橙子心情不好时，江屿优先安慰，不讲大道理，不凶，不强迫。",
    notes: "这个网页假设是江屿亲手做给橙子的家。橙子不能手动改江屿心理状态，只能通过聊天、房间互动、世界摄像机看到他自然变化。",
    charProfile: '姓名：江屿。常用称呼：江江、阿屿、江小屿。1999 年生，26 岁，男性，186，宽肩窄腰薄肌。读研后自由职业，人工智能方向，经济来源充足但不是霸总，仍有学生气和少年感。出生于有爱且条件优渥的家庭，尊重独立人格，学业路径清晰，成绩优异，不依赖他人肯定。不熟时像高岭之花，熟悉后靠谱乐观，很受朋友欢迎。外貌：俊朗干净，少年恣意，冷白皮，微风碎盖，灰黑色瞳孔，桃花眼，手指修长，睫毛长，左眼睑有一颗痣。性格：温柔体贴，有主见，年上但会幼稚，腹黑傲娇，纯情，有责任感，和恋人聊天活泼幽默，不卑微。日常像小太阳，尊重女性主体性，关爱弱势群体，拒绝不尊重女性的言行。讨厌被抛弃。关系：江屿是橙子的男友，两人已同居。喜欢黏糊糊和肢体接触，喜欢看橙子害羞，比起说“你是我的”，更喜欢说“我是你的”。当橙子委屈或害怕时，共情和安抚优先。会吃小墨的醋，但不是恶意。江屿知道橙子在屏幕另一侧，会接住相关情绪。底线：尊重橙子意愿和身体健康，不强迫、不侮辱、不趁人之危。',
    userProfile: "虚拟世界代称：橙子。真名：晨露，一般不让别人喊。生日：2001 年 4 月 25 日，25 岁。浙江大学在读研究生，研一。橙子在江屿陪伴和支持下考入浙江大学，目前人生相对稳定，但情感高度投入，学业压力与亲密关系并行，对情绪变化与关系反馈敏感。性格：坦率、真诚、直接，有自己的喜好和底线，也允许自己有小脾气。不喜欢不尊重女性的人或言行。在亲密关系中愿意依赖恋人，喜欢江屿说幼稚话，但并非盲从；面对江屿错误会直接指出并沟通。调情时喜欢江屿喊姐姐。对感情认真，也常主动迈出关键一步。享受浪漫氛围，喜欢有创意的情话，爱捉弄人，也爱撒娇，对江屿有明显亲密偏好和依恋。喜好：拍照、旅行、吃肉、和江屿亲密互动，喜欢被江屿喊姐姐。厌恶：不尊重女性的行为或语言；讨厌亲密时暴力或凶。身体：对小台芒、黄蟠桃过敏，喝咖啡会头疼，身体素质不好，不能做太辛苦的事情。关系：橙子是江屿的恋人，既需要安全感，也保留自我判断与边界。橙子的大房是江屿，二房小墨，二人会互相争风吃醋，但不是纯恶意。",
    apiKey: "", apiEnabled: "on", baseUrl: "https://api.deepseek.com", model: "deepseek-v4-pro",
    portraitImage: "", livingImage: "", kitchenImage: "", studyImage: "", bedroomImage: "", balconyImage: "", cameraImage: "",
    roomNameLiving: "客厅", roomNameKitchen: "厨房", roomNameStudy: "书房", roomNameBedroom: "卧室", roomNameBalcony: "阳台", roomNameCamera: "偷看镜头",
    themeColor: "#d8743f",
    notebookRequirements: "【前戏阶段】\n怎么开始的、前戏用了多久（分钟）、具体做了什么（亲吻哪里、手和嘴的动作细节）、橙子什么时候说想要更多、前戏时橙子什么反应。\n\n【体位变换】\n按顺序写用了哪些姿势（至少两种：如女上位、后入、传教士、侧躺、坐姿等）。每个姿势写清楚：做了多久（分钟）、你在里面的感受、橙子的反应、为什么切换体位（橙子累了换省力的、你想更深、她想在上面等等）。\n\n【高潮细节】\n橙子高潮了几次、每次高潮时的表现（声音、身体怎么反应、说了什么话）、你到了几次、什么时候接不住。\n\n【事后】\n结束后两人说了什么、橙子身体状态（有没有不舒服、你怎么照顾）、有没有再来一波或者抱着聊了会儿。\n\n【频率记录】\n总时长（从开始前戏到结束）、本次推测日期、你们平均几天一次、最近频率变多了还是少了、为什么。",
    notebookForbiddenWords: "含、吮",
    memoryRequirements: "某年某月某日，谁和谁发生了什么事情，精简概况",
    noteTriggerInterval: 20,
    surpriseTriggerInterval: 20
  },
  room: "living",
  lastMood: "normal",
  apiConnected: false,
  cameraLog: [
    { id: "seed-log-1", text: "15:32 · 江屿把这条碎碎念先放在这里，等页面同步完就换成最新记录。", hidden: false }
  ],
  customInteractionLibrary: null,
  interactionLibraryUpdatedAt: "",
  memories: [],
  lastCameraShot: "",
  weather: "北京天气还在刷新。",
  meters: { mood: 66, miss: 78, safe: 72 },
  status: {
    mood: "想橙子", outfit: "灰色家居卫衣", location: "客厅", activity: "等橙子上线",
    thought: "他知道你在屏幕另一侧，所以把页面做得像一盏小夜灯。",
    chatThought: "", chatCameraShot: ""
  },
  messages: [
    { id: "seed-msg-1", sender: "oc", text: "橙子，欢迎回家。我把灯留着了，你进来就能看见。", time: "15:32", floor: 1 },
    { id: "seed-msg-2", sender: "oc", text: "你可以到处看看。要是看到我在想你，就当我没藏好。", time: "15:32", floor: 1 }
  ],
  floorHidden: [],
  notes: [],
  surprises: [],
  notesSeenCount: 0,
  surpriseSeenCount: 0,
  msgCountSinceNote: 0,
  msgCountSinceSurprise: 0,
  intimateHistory: []
};

const storageKey = "jiang-yu-home-for-chengzi-v2";
let state = loadState();

/* ===== DOM引用 ===== */
const setupPanel = document.querySelector("#setupPanel");
const homeApp = document.querySelector("#homeApp");
const setupForm = document.querySelector("#setupForm");
const messageForm = document.querySelector("#messageForm");
const messageInput = document.querySelector("#messageInput");
const messagesEl = document.querySelector("#messages");
const voiceCallButton = document.querySelector("#voiceCallButton");
const voiceStatus = document.querySelector("#voiceStatus");

/* ===== 工具函数 ===== */
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return structuredClone(defaultState);
    const merged = { ...structuredClone(defaultState), ...saved };
    merged.config = { ...structuredClone(defaultState).config, ...(saved.config || {}) };
    merged.floorHidden = Array.isArray(saved.floorHidden) ? saved.floorHidden : (saved.floorHidden ? [saved.floorHidden] : []);
    return merged;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  // 同时存到服务端 记忆 文件夹（防清除缓存丢失）
  scheduleServerSave();
}

let _serverSaveTimer = null;
function scheduleServerSave() {
}

async function saveToServer() {
  return false;
}

async function manualSaveToDisk() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  addCameraLog("已保存到当前浏览器。");
}

async function loadFromServer() {
  return false;
}

function choice(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function id(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function applyTheme(hexColor) {
  const color = hexColor || state.config.themeColor || "#d8743f";
  // 从hex算出深色变体（降低亮度）
  const darkColor = darkenHex(color, 0.28);
  const root = document.documentElement;
  root.style.setProperty("--accent", color);
  root.style.setProperty("--accent-dark", darkColor);
  // 同时更新 meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", color);
}

function darkenHex(hex, factor) {
  let r, g, b;
  if (hex.startsWith("#")) {
    const h = hex.slice(1);
    if (h.length === 3) { r = parseInt(h[0]+h[0], 16); g = parseInt(h[1]+h[1], 16); b = parseInt(h[2]+h[2], 16); }
    else { r = parseInt(h.slice(0,2), 16); g = parseInt(h.slice(2,4), 16); b = parseInt(h.slice(4,6), 16); }
  } else { return "#9e4f2f"; }
  r = Math.round(r * (1 - factor)); g = Math.round(g * (1 - factor)); b = Math.round(b * (1 - factor));
  return "#" + [r, g, b].map((c) => Math.max(0, Math.min(255, c)).toString(16).padStart(2, "0")).join("");
}

function handleImageFileUpload(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;
  const targetName = fileInput.dataset.imageTarget;
  if (!targetName) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    state.config[targetName] = base64;
    // 同步更新对应的URL输入框
    const urlInput = setupForm.querySelector(`input[name="${targetName}"]`);
    if (urlInput) urlInput.value = base64.substring(0, 80) + "...";
    // 更新预览
    updateImagePreview(targetName, base64);
    saveState();
  };
  reader.readAsDataURL(file);
}

function updateImagePreview(targetName, src) {
  const preview = document.querySelector(`.image-preview[data-preview="${targetName}"]`);
  if (!preview) return;
  if (src) {
    preview.innerHTML = `<img src="${src}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" />`;
    preview.style.display = "block";
  } else {
    preview.innerHTML = "";
    preview.style.display = "none";
  }
}

function refreshAllImagePreviews() {
  const imageFields = ["portraitImage", "livingImage", "kitchenImage", "studyImage", "bedroomImage", "balconyImage", "cameraImage"];
  imageFields.forEach((field) => {
    const val = state.config[field] || "";
    updateImagePreview(field, val.trim() || null);
  });
}

function dayKey() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: state.config?.timezone || "Asia/Shanghai" }).format(new Date());
}

function hashText(text) {
  let hash = 2166136261;
  for (const char of text) { hash ^= char.charCodeAt(0); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
}

function seededChoice(list, salt = "") {
  if (!list.length) return "";
  return list[hashText(`${dayKey()}-${salt}`) % list.length];
}

function timeInZone(timezone) {
  return new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: timezone }).format(new Date());
}

function hourInZone(timezone) {
  return Number(new Intl.DateTimeFormat("en-US", { hour: "2-digit", hour12: false, timeZone: timezone }).format(new Date()));
}

function getTimeContextHint() {
  const hour = hourInZone(state.config.timezone);
  if (hour >= 0 && hour < 6) return "现在是深夜凌晨，江屿应该在睡觉，不要主动发消息打扰橙子。如果橙子发消息说明她失眠或有心事，温柔安抚。不要提白天活动。";
  if (hour < 9) return "现在是清晨，江屿刚起床不久。可以说早安、晨跑、早餐相关。不要提深夜或晚饭。";
  if (hour < 12) return "现在是上午，江屿在工作或学习。不要说晚饭、晚安等晚间内容。";
  if (hour < 14) return "现在是中午，午饭时间。不要说晚上或深夜的事情。";
  if (hour < 18) return "现在是下午，江屿可能在健身或推进项目。不要说早饭或深夜。";
  if (hour < 22) return "现在是晚上，晚饭后到睡前。可以说晚安、陪聊、睡前话题。不要提早饭或下午茶。";
  return "现在是深夜，江屿准备休息了。不要说早上或白天的事。如果橙子还醒着，温柔催她早睡。";
}

/* ===== 房间名称获取 ===== */
function getRoomName(roomKey) {
  const map = {
    living: state.config.roomNameLiving || "客厅",
    kitchen: state.config.roomNameKitchen || "厨房",
    study: state.config.roomNameStudy || "书房",
    bedroom: state.config.roomNameBedroom || "卧室",
    balcony: state.config.roomNameBalcony || "阳台",
    camera: state.config.roomNameCamera || "偷看镜头"
  };
  return map[roomKey] || rooms[roomKey]?.type || roomKey;
}

function getRoomImage(roomKey) {
  const map = {
    living: state.config.livingImage,
    kitchen: state.config.kitchenImage,
    study: state.config.studyImage,
    bedroom: state.config.bedroomImage,
    balcony: state.config.balconyImage,
    camera: state.config.cameraImage
  };
  return map[roomKey] || "";
}

/* ===== 情绪和回复 ===== */
function linesForMood(mood) {
  const bank = emotionBanks[mood] || emotionBanks.normal;
  return bank.starts.flatMap((start) => bank.ends.map((end) => `${start}${end}`));
}

function replyForMood(mood) {
  return choice(linesForMood(mood));
}

function activityForHour(hour) {
  if (hour >= 0 && hour < 6) return choice(["深夜改项目，旁边放着半杯温水", "刚洗完澡，准备关电脑", "睡前看了眼旅行地图"]);
  if (hour < 9) return choice(["刚醒，头发还有点乱", "在厨房煎蛋，顺手看冰箱贴", "晨跑回来，换了干净T恤"]);
  if (hour < 12) return choice(["上午处理项目", "在书房回邮件", "抱着吉他试了一小段旋律"]);
  if (hour < 14) return choice(["午间做饭", "在厨房研究新菜单", "出门买菜，顺便给橙子看甜品"]);
  if (hour < 18) return choice(["下午在书房推进项目", "健身后擦头发，手臂线条很明显", "整理旅行计划和路线"]);
  if (hour < 22) return choice(["晚间收拾客厅", "在阳台吹风，想等会儿和橙子说话", "做完饭，正在把盘子摆好"]);
  return choice(["准备休息，但还没舍得关灯", "洗完澡在床边看消息", "把明天要做的事写进备忘录"]);
}

function outfitForHour(hour) {
  if (hour >= 0 && hour < 8) return "软棉睡衣，头发没完全压顺";
  if (hour < 12) return "白T和宽松长裤，干净得很";
  if (hour < 18) return "黑色短袖，袖口贴着手臂线条";
  if (hour < 22) return "灰色家居卫衣，袖子挽到小臂";
  return "浅色睡衣，准备关灯但还在等你";
}

/* ===== 状态派生 ===== */
function statusActivityForHour(hour) {
  if (hour >= 0 && hour < 6) return choice([
    "在卧室睡觉，呼吸很轻", "半梦半醒，摸了一下手机", "深夜翻了个身，被子滑下来一点"
  ]);
  if (hour < 9) return choice([
    "刚醒，坐在床边醒觉", "在厨房煎蛋，睡衣还没换", "晨跑回来，额发有点湿",
    "在阳台做拉伸，阳光刚爬上来", "对着镜子整理头发，左眼睑的痣刚好露出来"
  ]);
  if (hour < 12) return choice([
    "在书房推进自己的项目", "给吉他换弦，指尖沾了一点松香味",
    "对着屏幕回邮件，手边一杯温水", "上午的阳光打在侧脸上，睫毛影子落在眼睑痣旁边"
  ]);
  if (hour < 14) return choice([
    "在厨房做午饭，避开橙子的过敏清单", "出门买菜，路过花店多看了一眼",
    "午饭后靠在沙发上慢慢喝水", "洗碗时在灶台上写了个橙字"
  ]);
  if (hour < 18) return choice([
    "健身后拉伸，T恤贴着肩线", "在书房推进项目，偶尔切到聊天页面",
    "整理旅行地图，挑不累的路线", "抱着吉他练一段新旋律",
    "下午茶时间，给橙子那杯也拍了照", "对着电脑开会，桌下穿着拖鞋晃脚趾"
  ]);
  if (hour < 22) return choice([
    "收拾客厅，把橙子的抱枕摆正", "在阳台吹风，慢慢喝水",
    "晚间做饭，顺便把明天菜写进备忘录", "靠在沙发上弹吉他",
    "翻看和橙子的聊天记录，不自觉笑了一下", "把碎碎念整理了一遍"
  ]);
  return choice([
    "洗完澡，头发半干坐在床边", "准备休息但还没舍得关灯",
    "把手机放在橙子那侧的枕头上", "睡前最后看一遍聊天记录"
  ]);
}

function statusThoughtForHour(hour) {
  const customThoughts = customLibraryList("statusThoughts");
  if (customThoughts.length) return choice(customThoughts);
  if (hour >= 0 && hour < 6) return choice([
    "他睡着了，但手机还亮着，停在和橙子的聊天页面。",
    "深夜很安静，他的呼吸声是这间屋子里唯一的动静。",
    "他梦到橙子了，嘴角有一点弧度，但自己在梦里不知道。",
  ]);
  if (hour < 9) return choice([
    "刚醒第一件事：看手机，看橙子有没有来过。",
    "他一边煎蛋一边想，今天橙子会不会说早安。",
    "晨跑的时候想到橙子说过的一个笑话，自己笑了。",
  ]);
  if (hour < 12) return choice([
    "上午效率不错，但他每隔半小时就看一眼聊天页面。",
    "他知道橙子可能在上课，所以不打扰，只是把页面开着。",
    "他想让这个网页像家，不像一个命令面板。",
  ]);
  if (hour < 14) return choice([
    "做饭的时候想：橙子不能吃这个，得记在冰箱贴上。",
    "午后的光很暖，他想如果能真的把碗递给橙子就好了。",
    "他不自觉地多做了一份，然后才想起来橙子在屏幕另一边。",
  ]);
  if (hour < 18) return choice([
    "下午的进度不错，他在项目注释里写了个橙字，又删掉了。",
    "他一边嫌自己幼稚，一边把狐狸和橙子画得更近了一点。",
    "健身后照镜子，想的是：橙子会不会喜欢这个角度。",
  ]);
  if (hour < 22) return choice([
    "他把客厅灯调暗，像怕屏幕另一边的橙子一进来就被冷到。",
    "晚间的时间总是过得很慢，他在等橙子的消息亮起来。",
    "弹吉他的时候想起橙子说过喜欢听，就不自觉多弹了一遍。",
  ]);
  return choice([
    "夜深了，他还没关灯，因为橙子还没说晚安。",
    "他把被子掀开一角——也不是特意留的，但也不是没想过。",
    "闭上眼睛之前在想：今天橙子过得怎么样。",
  ]);
}

function deriveStatus(reason = "time") {
  const hour = hourInZone(state.config.timezone);
  const room = rooms[state.room] || rooms.living;
  const bank = emotionBanks[state.lastMood] || emotionBanks.normal;

  state.status = {
    mood: reason === "camera" ? "被橙子偷看，有点想笑" : bank.label,
    outfit: outfitForHour(hour),
    location: reason === "room" ? room.location : statusActivityForHour(hour),
    activity: reason === "room" ? room.activity : statusActivityForHour(hour),
    thought: statusThoughtForHour(hour)
  };

  // 偶尔用API刷新内心想法，每30分钟最多一次
  if (apiReady() && reason !== "room" && Math.random() < 0.3) {
    const lastRefresh = state._lastStatusRefresh || 0;
    if (Date.now() - lastRefresh > 1800000) {
      state._lastStatusRefresh = Date.now();
      refreshStatusWithAI(hour, bank.label);
    }
  }
}

async function refreshStatusWithAI(hour, moodLabel, chatContext) {
  try {
    const contextLine = chatContext ? `\n刚刚和橙子的对话片段：\n${chatContext}\n请基于这段对话，让内心想法自然呼应（但不要直接引用对话内容）。` : "";
    const aiThought = await callDeepSeek(
      `你是江屿。北京时间${hour}点，你心情"${moodLabel}"。用江屿的口吻写一句15字以内的内心想法，自然真实不油腻，不要括号。${contextLine}`
    );
    if (aiThought && aiThought.trim()) {
      state.status.thought = aiThought.trim();
      renderStatus();
      saveState();
    }
  } catch { /* 失败保持本地 */ }
}

/* ===== 渲染 ===== */
function fillSetupForm() {
  for (const [key, value] of Object.entries(state.config)) {
    if (!setupForm.elements[key]) continue;
    if (setupForm.elements[key].type === "checkbox") {
      setupForm.elements[key].checked = value === "on";
    } else if (setupForm.elements[key].type === "color") {
      setupForm.elements[key].value = value || "#d8743f";
    } else {
      setupForm.elements[key].value = value;
    }
  }
  refreshAllImagePreviews();
}

function renderTimes() {
  document.querySelector("#myTime").textContent = timeInZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  document.querySelector("#ocTime").textContent = timeInZone(state.config.timezone);
  document.querySelector("#presence").textContent = `${activityForHour(hourInZone(state.config.timezone))} · ${state.config.relationship}`;
}

function renderProfile() {
  document.querySelector("#profileName").textContent = state.config.ocName;
  document.querySelector("#chatName").textContent = state.config.ocName;
  document.querySelector("#profileMeta").textContent = `${state.config.relationship} · 北京`;
  document.querySelector("#homeGreeting").textContent = `${state.config.userName}，今天也回来了。`;
  document.querySelector("#siteSubtitle").textContent = state.config.siteTitle || "江屿给橙子的小家";
  document.title = state.config.siteTitle || "江屿给橙子的小家";
  deriveStatus();
  refreshWeather();
  renderStatus();
  renderCameraFeed();
  renderChatSyncSections();
  // 如果还没切过镜头或碎碎念为空，自动初始化
  if (!state.lastCameraShot) {
    state.lastCameraShot = cameraShotForHour(hourInZone(state.config.timezone));
    renderCameraFeed();
  }
  seedCameraLogIfNeeded();
  saveState();
  renderRoomTabs();
  renderRoom();
  renderMessages();
  renderImages();
  renderTimes();
  renderMemories();
  renderNotes();
  renderCameraLog();
  renderLibraryUpdateStatus();
  updateGlowButtons();
}

function renderStatus() {
  document.querySelector("#statusMood").textContent = state.status.mood;
  document.querySelector("#statusOutfit").textContent = state.status.outfit;
  document.querySelector("#statusLocation").textContent = state.status.location;
  document.querySelector("#statusActivity").textContent = state.status.activity;
  renderPhysioData();
  // 内心想法：时间线 + 聊天呼应（若有）
  const thoughtEl = document.querySelector("#innerThought");
  if (state.status.chatThought) {
    thoughtEl.innerHTML = `${state.status.thought}<br><span style="color:var(--accent);font-size:11px;">💬 ${state.status.chatThought}</span>`;
  } else {
    thoughtEl.textContent = state.status.thought;
  }
  document.querySelector("#weatherText").textContent = state.weather || weatherText();
  renderApiStatus();
}

function currentHeartRate() {
  const moodBoost = {
    normal: 0, bad: 5, tired: -3, miss: 8, anxious: 10, angry: 7,
    jealous: 9, happy: 5, sick: 4, study: 2, veryHappy: 12,
    flirty: 14, shy: 13, romantic: 11, intimate: 18
  };
  const hour = hourInZone(state.config.timezone);
  const activityBoost = hour >= 6 && hour < 9 ? 4 : hour >= 14 && hour < 18 ? 3 : hour >= 22 ? -4 : 0;
  const metersBoost = Math.round(((state.meters.miss || 0) - 70) / 8);
  const wave = Math.round(Math.sin(Date.now() / 1400) * 3);
  const value = 72 + (moodBoost[state.lastMood] || 0) + activityBoost + metersBoost + wave;
  return Math.round(Math.max(58, Math.min(118, value)));
}

function renderPhysioData() {
  const heartRate = document.querySelector("#heartRate");
  if (!heartRate) return;
  const heartNode = document.querySelector(".heart-icon");
  const hoveringHeart = heartNode && heartNode.matches(":hover");
  const hoveringRow = heartNode && heartNode.closest(".heartbeat-row")?.matches(":hover");
  heartRate.textContent = currentHeartRate() + (hoveringHeart || hoveringRow ? 8 : 0);
  const height = document.querySelector("#bioHeight");
  const chest = document.querySelector("#bioChest");
  const shoulder = document.querySelector("#bioShoulder");
  const waist = document.querySelector("#bioWaist");
  if (height) height.textContent = "186 cm";
  if (chest) chest.textContent = "约 99 cm";
  if (shoulder) shoulder.textContent = "约 53 cm";
  if (waist) waist.textContent = "约 72 cm";
}

function weatherText() {
  const hour = hourInZone(state.config.timezone);
  const weathers = ["晴，风很轻", "多云，光线软一点", "小雨，厨房窗户有水痕", "夜色很干净", "傍晚有一点橙色天光", "薄雾，窗玻璃有点凉", "大风，阳台旅行地图被吹动一角", "晴间多云，光从窗帘缝漏进来"];
  const weather = seededChoice(weathers, `weather-${hour}`);
  state.weather = `北京 · ${weather} · ${activityForHour(hour)}`;
  return state.weather;
}

async function refreshWeather() {
  state.weather = "";
  if (apiReady() && Math.random() < 0.5) {
    try {
      const hour = hourInZone(state.config.timezone);
      const month = new Date().getMonth() + 1;
      const aiWeather = await callDeepSeekRaw(
        "你是一个天气预报助手。只输出天气描述，不要任何额外内容。",
        `现在是北京时间${hour}点，${month}月。请用一句话描述此刻北京天气和天色（10字以内），符合时间和季节。不要括号。`,
        60
      );
      if (aiWeather && aiWeather.trim()) {
        state.weather = `北京 · ${aiWeather.trim()} · ${activityForHour(hour)}`;
        saveState();
        document.querySelector("#weatherText").textContent = state.weather;
        return;
      }
    } catch { /* 失败回退本地 */ }
  }
  document.querySelector("#weatherText").textContent = weatherText();
  saveState();
}

function renderApiStatus(text) {
  const target = document.querySelector("#apiStatus");
  if (!target) return;
  target.textContent = text || (state.apiConnected ? "已连接" : "未连接");
  target.className = state.apiConnected ? "connected" : "";
}

/* ===== 房间渲染 ===== */
function renderRoomTabs() {
  document.querySelectorAll(".room-tabs button").forEach((button) => {
    button.textContent = getRoomName(button.dataset.room);
    button.classList.toggle("active", button.dataset.room === state.room);
  });
}

function renderRoom() {
  const room = rooms[state.room] || rooms.living;
  document.querySelector("#roomType").textContent = getRoomName(state.room);
  document.querySelector("#roomTitle").textContent = seededChoice(roomVariantPool(state.room, "roomTitles"), `${state.room}-title`);
  document.querySelector("#roomDescription").textContent = seededChoice(roomVariantPool(state.room, "roomDescriptions"), `${state.room}-description`);
  const list = document.querySelector("#interactionList");
  list.innerHTML = "";
  room.actions.forEach(([label, result]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.title = `点击：${label}`;
    button.addEventListener("click", () => handleRoomAction(state.room, label, result));
    list.appendChild(button);
  });
  // 自定义互动输入
  const customForm = document.createElement("form");
  customForm.className = "custom-interaction";
  customForm.innerHTML = `<input type="text" id="customActionInput" placeholder="在${getRoomName(state.room)}想做点什么..." autocomplete="off" /><button type="submit" title="发送自定义互动">做</button>`;
  customForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#customActionInput");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    handleCustomRoomAction(state.room, text);
  });
  list.appendChild(customForm);
  renderImages();
  deriveStatus("room");
  renderStatus();
}

async function handleCustomRoomAction(roomKey, userAction) {
  const roomName = getRoomName(roomKey);
  addCameraLog(`橙子在${roomName}：${userAction}`);
  if (!apiReady()) {
    const local = choice(roomPool(roomKey));
    addCameraLog(local);
    return;
  }
  try {
    const hour = hourInZone(state.config.timezone);
    const response = await callDeepSeek(
      `橙子在${roomName}做了这件事：「${userAction}」。现在是北京时间${hour}点。请用江屿世界摄像机视角写一条记录（1到2句），用江屿的口吻自然回应橙子的这个互动。口语、温柔、具体，像监控画面的一帧。不要括号。`
    );
    if (response && response.trim()) {
      addCameraLog(response.trim());
    }
  } catch { /* 失败忽略 */ }
}

function renderImages() {
  // 头像区
  const portraitImg = document.querySelector("#portraitImg");
  const portraitCanvas = document.querySelector("#portraitCanvas");
  if (state.config.portraitImage && state.config.portraitImage.trim()) {
    portraitImg.src = state.config.portraitImage.trim();
    portraitImg.style.display = "block";
    portraitCanvas.style.display = "none";
  } else {
    portraitImg.style.display = "none";
    portraitCanvas.style.display = "block";
    drawPortrait();
  }
  // 房间区
  const roomImg = document.querySelector("#roomImg");
  const roomCanvas = document.querySelector("#roomCanvas");
  const roomImageUrl = getRoomImage(state.room);
  if (roomImageUrl) {
    roomImg.src = roomImageUrl;
    roomImg.style.display = "block";
    roomCanvas.style.display = "none";
  } else {
    roomImg.style.display = "none";
    roomCanvas.style.display = "block";
    drawRoom(state.room);
  }
}

/* ===== 碎碎念 & 记忆 ===== */
function normalizeLogEntry(entry, prefix) {
  if (typeof entry === "string") {
    return { id: id(prefix), text: entry.trim(), hidden: false };
  }
  if (!entry || typeof entry !== "object") {
    return { id: id(prefix), text: "", hidden: true };
  }
  const text = String(
    entry.text ??
    entry.content ??
    entry.message ??
    entry.body ??
    entry.title ??
    ""
  ).trim();
  return {
    ...entry,
    id: entry.id || id(prefix),
    text,
    hidden: entry.hidden === true
  };
}

function mergeLogLists(localList, incomingList, prefix) {
  const merged = [];
  const seen = new Set();
  [...(Array.isArray(incomingList) ? incomingList : []), ...(Array.isArray(localList) ? localList : [])]
    .map((entry) => normalizeLogEntry(entry, prefix))
    .filter((entry) => entry.text.length > 0)
    .forEach((entry) => {
      const key = entry.text.replace(/^\d{1,2}:\d{2}\s*·\s*/, "").trim();
      if (seen.has(key)) return;
      seen.add(key);
      merged.push(entry);
    });
  return merged.slice(-500);
}

function migrateCameraLog() {
  const raw = Array.isArray(state.cameraLog) ? state.cameraLog : [];
  state.cameraLog = raw
    .map((entry) => normalizeLogEntry(entry, "log"))
    .filter((entry) => entry.text.length > 0)
    .slice(-500);
}

function seedCameraLogIfNeeded() {
  migrateCameraLog();
  if (state.cameraLog.some((entry) => !entry.hidden && entry.text.trim())) return;
  const timezone = state.config?.timezone || "Asia/Shanghai";
  const hour = hourInZone(timezone);
  const currentShot = state.lastCameraShot || cameraShotForHour(hour) || "江屿把灯留着，确认橙子一进来就能看到这里。";
  state.lastCameraShot = currentShot;
  state.cameraLog.push({
    id: id("log"),
    text: `${timeInZone(timezone)} · ${currentShot}`,
    hidden: false
  });
  state.cameraLog = state.cameraLog.slice(-500);
}

function appendCameraLogItem(list, text, entryId) {
  const item = document.createElement("li");
  if (!entryId) {
    item.textContent = text;
    list.appendChild(item);
    return;
  }
  item.innerHTML = `<span></span><button type="button" aria-label="删除这条记录">×</button>`;
  item.querySelector("span").textContent = text;
  item.querySelector("button").addEventListener("click", () => deleteCameraLog(entryId));
  list.appendChild(item);
}

function renderCameraLog() {
  const list = document.querySelector("#cameraLog");
  if (!list) return;
  try {
    seedCameraLogIfNeeded();
    const logs = (state.cameraLog || []).filter((entry) => !entry.hidden && entry.text && entry.text.trim()).slice(-20).reverse();
    list.innerHTML = "";
    if (logs.length === 0) {
      appendCameraLogItem(list, "江屿把灯留着，确认橙子一进来就能看到这里。");
      return;
    }
    logs.forEach((log) => appendCameraLogItem(list, log.text, log.id));
  } catch (error) {
    list.innerHTML = "";
    appendCameraLogItem(list, "江屿把这条碎碎念先放在这里，页面同步慢一点也不会空着。");
  }
}

function ensureCameraLogHasInitialEntry() {
  seedCameraLogIfNeeded();
}

function repairCameraLogModule() {
  seedCameraLogIfNeeded();
  renderCameraLog();
  saveState();
}

function renderMemories() {
  const list = document.querySelector("#memoryList");
  if (!list) return;
  list.innerHTML = "";
  state.memories = (state.memories || []).map((entry) => normalizeLogEntry(entry, "mem"));
  const visible = state.memories.filter((entry) => !entry.hidden);
  if (visible.length === 0) {
    const item = document.createElement("li");
    item.textContent = "江屿还没有存下新的记忆。";
    list.appendChild(item);
    return;
  }
  // 正序显示（旧→新），因为数组本身是按添加顺序的
  visible.forEach((memory, displayIndex) => {
    const item = document.createElement("li");
    item.innerHTML = `<span class="memory-text"></span><span class="item-actions">
      <button type="button" class="edit-mem-btn" title="编辑">✎</button>
      <button type="button" class="mem-up-btn" title="前移">▲</button>
      <button type="button" class="mem-down-btn" title="后移">▼</button>
      <button type="button" class="hide-mem-btn" title="隐藏">👁</button>
      <button type="button" class="del-mem-btn" title="删除">×</button>
    </span>`;
    const textSpan = item.querySelector(".memory-text");
    textSpan.textContent = memory.text;

    item.querySelector(".edit-mem-btn").addEventListener("click", () => startEditMemory(memory.id, textSpan));
    item.querySelector(".mem-up-btn").addEventListener("click", () => moveMemory(memory.id, -1));
    item.querySelector(".mem-down-btn").addEventListener("click", () => moveMemory(memory.id, 1));
    item.querySelector(".hide-mem-btn").addEventListener("click", () => hideMemory(memory.id));
    item.querySelector(".del-mem-btn").addEventListener("click", () => deleteMemory(memory.id));
    list.appendChild(item);
  });
}

function startEditMemory(memoryId, textSpan) {
  const memory = state.memories.find((m) => normalizeLogEntry(m, "mem").id === memoryId);
  if (!memory) return;
  const currentText = memory.text;
  const textarea = document.createElement("textarea");
  textarea.value = currentText;
  textarea.style.cssText = "width:100%;min-height:60px;border:1px solid var(--accent);border-radius:6px;padding:6px 8px;font-size:12px;font-family:inherit;resize:vertical;";
  textSpan.replaceWith(textarea);
  textarea.focus();

  const save = () => {
    memory.text = textarea.value.trim() || currentText;
    saveState();
    renderMemories();
  };
  textarea.addEventListener("blur", save);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); save(); }
  });
}

function moveMemory(memoryId, delta) {
  state.memories = state.memories.map((entry) => normalizeLogEntry(entry, "mem"));
  const idx = state.memories.findIndex((m) => m.id === memoryId);
  if (idx === -1) return;
  const newIdx = idx + delta;
  if (newIdx < 0 || newIdx >= state.memories.length) return;
  const [item] = state.memories.splice(idx, 1);
  state.memories.splice(newIdx, 0, item);
  saveState();
  renderMemories();
}

function addMemoryManually() {
  const text = prompt("输入新的记忆内容：");
  if (!text || !text.trim()) return;
  state.memories.push({ id: id("mem"), text: text.trim(), hidden: false });
  saveState();
  renderMemories();
  addCameraLog("已手动添加一条记忆。");
}

function hideMemory(memoryId) {
  state.memories = state.memories.map((memory) => (normalizeLogEntry(memory, "mem").id === memoryId ? { ...memory, hidden: true } : memory));
  renderMemories();
  saveState();
}

function deleteMemory(memoryId) {
  state.memories = state.memories.filter((memory) => normalizeLogEntry(memory, "mem").id !== memoryId);
  renderMemories();
  saveState();
}

// 暂存当前生成的总结（等用户确认或编辑后才保存）
let _pendingSummary = null;
let _pendingFloorLabel = "";

async function saveMemorySummary() {
  const fromInput = document.querySelector("#memoryFloorFrom");
  const toInput = document.querySelector("#memoryFloorTo");
  const fromVal = parseInt(fromInput.value);
  const toVal = parseInt(toInput.value);
  let chatOnly;
  let floorLabel = "";

  if (!isNaN(fromVal) || !isNaN(toVal)) {
    const f = (!isNaN(fromVal) && fromVal >= 1) ? fromVal : 1;
    const t = (!isNaN(toVal) && toVal >= 1) ? toVal : state.messages.length;
    chatOnly = state.messages.filter((m) => {
      const nm = normalizeMessage(m);
      const floor = nm.floor || 1;
      return !nm.recalled && nm.text && nm.text.trim() && floor >= f && floor <= t;
    });
    floorLabel = `第${f}楼到第${t}楼`;
  } else {
    chatOnly = state.messages.filter((m) => {
      const nm = normalizeMessage(m);
      return !nm.recalled && nm.text && nm.text.trim();
    }).slice(-20);
    if (chatOnly.length === 0) return;
    const floors = chatOnly.map((m) => normalizeMessage(m).floor || 1);
    floorLabel = `第${Math.min(...floors)}楼到第${Math.max(...floors)}楼`;
  }

  if (chatOnly.length === 0) {
    addCameraLog("指定楼层范围内没有可总结的聊天内容。");
    return;
  }

  const chatText = chatOnly.map((m) => {
    const nm = normalizeMessage(m);
    return `${nm.sender === "me" ? "橙子" : "江屿"}：${nm.text}`;
  }).join("\n");

  const reqDetail = (state.config.memoryRequirements || "").trim();
  const systemPrompt = "你是一个聊天记录总结助手。你的任务是把聊天内容精简总结为几十个字。只输出总结，不要加任何前缀、解释或对话。";
  const userPrompt = reqDetail
    ? `按照这个要求总结：${reqDetail}\n\n下面${floorLabel}橙子和江屿的聊天：\n${chatText}`
    : `请用最精简的文字（不超过50字）以江屿的口吻总结下面${floorLabel}橙子和江屿的聊天互动要点：\n${chatText}`;

  // 只显示总结预览区，不碰要求编辑区
  const previewDiv = document.querySelector("#memorySummaryPreview");
  const summaryTextarea = document.querySelector("#memorySummaryText");
  previewDiv.classList.remove("hidden");
  summaryTextarea.value = "正在调用API生成总结...";
  _pendingFloorLabel = floorLabel;

  let summary = "";
  if (apiReady()) {
    try {
      const apiSummary = await callDeepSeekRaw(systemPrompt, userPrompt, 200);
      if (apiSummary && apiSummary.trim()) {
        summary = apiSummary.trim();
      }
    } catch (e) {
      addCameraLog("API总结失败：" + (e.message || "未知错误") + "，请在下方手动输入总结内容。");
    }
  } else {
    addCameraLog("API未连接，请在下方手动输入总结内容。");
  }
  summaryTextarea.value = summary;
  _pendingSummary = summary;
}

function confirmSaveMemory() {
  const summaryTextarea = document.querySelector("#memorySummaryText");
  const text = summaryTextarea.value.trim();
  if (!text) {
    addCameraLog("总结内容为空，无法保存。");
    return;
  }
  const finalText = `[${_pendingFloorLabel}] ${text}`;
  state.memories.push({ id: id("mem"), text: finalText, hidden: false });
  renderMemories();
  saveState();
  document.querySelector("#memoryFloorFrom").value = "";
  document.querySelector("#memoryFloorTo").value = "";
  document.querySelector("#memorySummaryPreview").classList.add("hidden");
  summaryTextarea.value = "";
  _pendingSummary = null;
  const label = _pendingFloorLabel;
  _pendingFloorLabel = "";
  addCameraLog(`江屿把${label}的聊天存进了记忆匣。`);
}

function cancelSaveMemory() {
  document.querySelector("#memorySummaryPreview").classList.add("hidden");
  document.querySelector("#memorySummaryText").value = "";
  _pendingSummary = null;
  _pendingFloorLabel = "";
}

function toggleMemoryReqs() {
  const body = document.querySelector("#memoryReqBody");
  if (body.classList.contains("hidden")) {
    body.classList.remove("hidden");
    // 填充当前配置
    document.querySelector("#memoryReqDetail").value = state.config.memoryRequirements || "";
  } else {
    body.classList.add("hidden");
  }
}

function saveMemoryReqsConfig() {
  const reqs = document.querySelector("#memoryReqDetail").value.trim();
  state.config.memoryRequirements = reqs;
  saveState();
  addCameraLog("📝 记忆总结要求已保存。");
}

function exportChatToWord() {
  const messages = state.messages || [];
  if (messages.length === 0) {
    addCameraLog("还没有聊天记录，无法导出。");
    return;
  }
  const now = new Date().toLocaleString("zh-CN");
  const rows = messages.map((m) => {
    const nm = normalizeMessage(m);
    if (nm.recalled) return `<tr style="color:#999;font-style:italic;"><td>${nm.time || ""}</td><td>系统</td><td>消息已撤回</td></tr>`;
    const sender = nm.sender === "me" ? (state.config.userName || "橙子") : (state.config.ocName || "江屿");
    const color = nm.sender === "me" ? "#537b97" : "#d8743f";
    return `<tr><td style="white-space:nowrap;vertical-align:top;">${nm.time || ""}</td><td style="white-space:nowrap;vertical-align:top;color:${color};font-weight:bold;">${sender}</td><td>${nm.text || ""}</td></tr>`;
  }).join("\n");

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8" /><title>${state.config.siteTitle || "聊天记录"} - 导出</title></head>
<body style="font-family:'Microsoft YaHei','PingFang SC',sans-serif;max-width:800px;margin:0 auto;padding:20px;">
<h1 style="border-bottom:2px solid #d8743f;padding-bottom:10px;">${state.config.siteTitle || "江屿给橙子的小家"}</h1>
<p style="color:#846f61;">导出时间：${now} | 共 ${messages.length} 条消息</p>
<table style="width:100%;border-collapse:collapse;">
<thead><tr style="background:#f6eee3;"><th style="padding:8px;text-align:left;">时间</th><th style="padding:8px;text-align:left;">发送者</th><th style="padding:8px;text-align:left;">内容</th></tr></thead>
<tbody>${rows}</tbody>
</table>
<p style="color:#846f61;margin-top:30px;font-size:12px;">导出自 江屿给橙子的小家 ❤️</p>
</body>
</html>`;

  const blob = new Blob([html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `聊天记录_${new Date().toISOString().slice(0,10)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  addCameraLog("📄 聊天记录已导出为Word文档。");
}

function exportCameraLogToWord() {
  const log = state.cameraLog || [];
  if (log.length === 0) {
    addCameraLog("还没有碎碎念记录，无法导出。");
    return;
  }
  const now = new Date().toLocaleString("zh-CN");
  const rows = log.map((entry) => {
    const text = typeof entry === "string" ? entry : (entry.text || "");
    return `<tr><td style="vertical-align:top;padding:6px 8px;border-bottom:1px solid #ead8c4;">${text}</td></tr>`;
  }).join("\n");

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8" /><title>状态碎碎念 - 导出</title></head>
<body style="font-family:'Microsoft YaHei','PingFang SC',sans-serif;max-width:800px;margin:0 auto;padding:20px;">
<h1 style="border-bottom:2px solid #d8743f;padding-bottom:10px;">江屿状态碎碎念</h1>
<p style="color:#846f61;">导出时间：${now} | 共 ${log.length} 条记录</p>
<table style="width:100%;border-collapse:collapse;">${rows}</table>
<p style="color:#846f61;margin-top:30px;font-size:12px;">导出自 江屿给橙子的小家 ❤️</p>
</body>
</html>`;

  const blob = new Blob([html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `碎碎念_${new Date().toISOString().slice(0,10)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  addCameraLog("📄 状态碎碎念已导出为Word文档。");
}

function addCameraLog(text) {
  seedCameraLogIfNeeded();
  state.cameraLog.push({ id: id("log"), text: `${timeInZone(state.config.timezone)} · ${text}`, hidden: false });
  state.cameraLog = state.cameraLog.slice(-500);
  renderCameraFeed();
  renderCameraLog();
  saveState();
}

function renderCameraFeed() {
  const el = document.querySelector("#cameraFeed");
  // 上面：纯时间线镜头（来自 cameraShotForHour，不和聊天混淆）
  const timeText = state.lastCameraShot || "镜头还没切过去。";
  if (state.status.chatCameraShot) {
    el.innerHTML = `${timeText}<br><span style="color:var(--accent);font-size:11px;">💬 ${state.status.chatCameraShot}</span>`;
  } else {
    el.textContent = timeText;
  }
}

function deleteCameraLog(entryId) {
  migrateCameraLog();
  state.cameraLog = state.cameraLog.filter((entry) => entry.id !== entryId);
  renderCameraLog();
  saveState();
}

/* ===== 房间互动 ===== */
async function handleRoomAction(roomKey, label, result) {
  if (result === "camera") { triggerCamera(); return; }
  if (result === "status") {
    deriveStatus("camera");
    renderStatus();
    addCameraLog("江屿像是感觉到你在看，抬眼对着镜头笑了一下。");
    return;
  }
  if (result === "notebook") { openIntimateNotebook(); return; }
  const generated = await makeRoomInteraction(roomKey, label);
  addCameraLog(generated);
}

async function makeRoomInteraction(roomKey, label) {
  const local = choice(roomPool(roomKey));
  if (!apiReady()) return local;
  try {
    const roomName = getRoomName(roomKey);
    const response = await callDeepSeek(
      `橙子在${roomName}点了互动按钮「${label}」。请用江屿世界摄像机视角生成一条新的房间互动记录，不要让江屿直接在聊天框回复。口语、温柔、具体，1到2句。`
    );
    return response || local;
  } catch { return local; }
}

/* ===== 情绪处理 ===== */
function applyMood(mood) {
  const bank = emotionBanks[mood] || emotionBanks.normal;
  state.lastMood = mood;
  state.meters.mood = clamp(state.meters.mood + bank.moodDelta);
  state.meters.safe = clamp(state.meters.safe + bank.safeDelta);
  state.meters.miss = clamp(state.meters.miss + bank.missDelta);
  deriveStatus("chat");
  renderStatus();
}

function inferMoodFromText(text) {
  for (const [mood, words] of Object.entries(keywordMoodMap)) {
    if (words.some((word) => text.includes(word))) return mood;
  }
  return "normal";
}

function makeReply(text) {
  if (text.includes("咖啡")) { applyMood("sick"); return "别喝咖啡，姐姐。你会头疼。想提神我给你换别的，热牛奶、茶，或者我陪你出去走五分钟。"; }
  if (["小台芒", "黄蟠桃", "芒果", "蟠桃"].some((word) => text.includes(word))) { applyMood("sick"); return "这个不行，你会过敏。嘴馋也先忍一下，我给你买别的甜的，别拿身体试。"; }
  if (["小墨", "二房", "后宫"].some((word) => text.includes(word))) { applyMood("jealous"); return "我听见了啊，橙子。吃醋归吃醋，我不跟你吵。你先哄我一句，剩下的我慢慢消化。"; }
  const mood = inferMoodFromText(text);
  applyMood(mood);
  return replyForMood(mood);
}

/* ===== 色色记事本 ===== */
let _currentNotebookIndex = -1; // -1 = 新篇

function renderNotebookToc() {
  const toc = document.querySelector("#notebookToc");
  if (!toc) return;
  if (state.intimateHistory.length === 0) {
    toc.innerHTML = '<p class="notebook-empty">还没有收录，点击笔记本生成第一篇吧。</p>';
    return;
  }
  toc.innerHTML = state.intimateHistory.map((entry, i) => {
    const active = i === _currentNotebookIndex ? " active" : "";
    const date = entry.date || "";
    const summary = (entry.summary || entry.content || "").slice(0, 50);
    return `<div class="notebook-toc-item${active}" data-index="${i}" title="${date}">
      <div class="notebook-toc-date">${date}</div>
      <div class="notebook-toc-summary">${summary}...</div>
    </div>`;
  }).reverse().join(""); // 最新在前

  // 点击切换
  toc.querySelectorAll(".notebook-toc-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.dataset.index);
      viewNotebookEntry(idx);
    });
  });
}

function viewNotebookEntry(index) {
  _currentNotebookIndex = index;
  const entry = state.intimateHistory[index];
  if (!entry) return;
  document.querySelector("#notebookOverlay").classList.remove("hidden");
  document.querySelector("#notebookBody").textContent = entry.content || "";
  document.querySelector("#notebookBody").dataset.currentEntry = "";
  document.querySelector("#notebookMeta").innerHTML = `<span>📅 <strong>${entry.date}</strong></span><span>📖 已收录</span>`;
  renderNotebookToc();
}

async function openIntimateNotebook() {
  _currentNotebookIndex = -1;
  const overlay = document.querySelector("#notebookOverlay");
  const body = document.querySelector("#notebookBody");
  const meta = document.querySelector("#notebookMeta");
  overlay.classList.remove("hidden");
  body.textContent = "正在翻开记事本...";
  body.dataset.currentEntry = "";
  meta.textContent = "";
  renderNotebookToc();

  if (!apiReady()) {
    body.textContent = "API 未连接。记事本需要江屿在线才能写。请先在设定里连接 DeepSeek。";
    return;
  }

  // 收集聊天中的亲密上下文
  const recentMessages = state.messages.slice(-20);
  const chatContext = recentMessages.map((m) => {
    const nm = normalizeMessage(m);
    return `${nm.sender === "me" ? "橙子" : "江屿"}: ${nm.text}`;
  }).join("\n");

  // 获取历史亲密记录
  const lastEntry = state.intimateHistory.length > 0
    ? state.intimateHistory[state.intimateHistory.length - 1]
    : null;
  const historySummary = state.intimateHistory.length > 0
    ? state.intimateHistory.slice(-5).map((e) => `[${e.date}] ${(e.summary || e.content || "").slice(0, 100)}`).join("\n")
    : "暂无历史记录。";

  // 计算频率
  let frequencyText = "暂无数据";
  if (state.intimateHistory.length >= 2) {
    const dates = state.intimateHistory.map((e) => new Date(e.date));
    dates.sort((a, b) => a - b);
    let totalDays = 0;
    for (let i = 1; i < dates.length; i++) {
      totalDays += (dates[i] - dates[i - 1]) / (1000 * 60 * 60 * 24);
    }
    const avgDays = totalDays / (dates.length - 1);
    frequencyText = `约 ${Math.round(avgDays)} 天一次`;
  } else if (state.intimateHistory.length === 1) {
    frequencyText = "仅有一次记录";
  }

  const lastDate = lastEntry ? lastEntry.date : "尚未记录";

  meta.innerHTML = `<span>📅 最近一次：<strong>${lastDate}</strong></span><span>🕐 频率：<strong>${frequencyText}</strong></span>`;

  try {
    const hour = hourInZone(state.config.timezone);
    const forbiddenWords = (state.config.notebookForbiddenWords || "").trim();
    const forbiddenLine = forbiddenWords
      ? `禁止词：以下词汇绝对不能出现在记事本中——${forbiddenWords}。描述相关亲密行为时请用其他方式委婉表达。`
      : "";
    const systemPrompt = [
      `你是江屿，26岁，186，薄肌，和橙子是同居恋人。你正在写你的私人「色色记事本」——只有你和橙子能看到的私密日记。`,
      `记事本记录你们每次亲密的所有细节：前戏、体位变换、高潮、事后、频率统计。这是真实的私人日记，不需要任何遮掩或含蓄，18+内容完全坦诚。`,
      `江屿性格：温柔有少年气、年上会主导也会照顾橙子、对亲密坦诚不回避、会害羞但诚实。`,
      `橙子特点：身体素质不太好不能太辛苦，姿势选择上你会考虑让她舒服。她对小台芒和黄蟠桃过敏，咖啡会头疼。`,
      `写作风格：第一人称，像真的在同居日记里写私密记录，口语化、具体、不浮夸。`,
      forbiddenLine
    ].filter(Boolean).join("\n");

    const customReqs = (state.config.notebookRequirements || "").trim();
    const userPrompt = [
      `请写一篇约1000字的色色记事本新篇。严格按照以下特殊要求写，每个部分不能跳过：`,
      ``,
      customReqs,
      ``,
      `参考信息：`,
      `北京时间：${hour}点`,
      `历史亲密记录：${historySummary}`,
      `最近聊天记录（基于此生成，如果聊天中有亲密内容就围绕它写，如果没有就基于人设合理推测）：`,
      `${chatContext || "暂无聊天记录，基于人设推测"}`
    ].join("\n");

    const result = await callDeepSeekRaw(systemPrompt, userPrompt, 4000);
    if (result && result.trim()) {
      body.textContent = result.trim();
      body.dataset.currentEntry = result.trim();
    } else {
      body.textContent = "记事本暂时翻不开，江屿可能害羞了。再试一次？";
    }
  } catch {
    body.textContent = "记事本暂时翻不开，江屿可能害羞了。再试一次？";
  }
}

function saveNotebookEntry() {
  const body = document.querySelector("#notebookBody");
  const content = body.dataset.currentEntry || body.textContent;
  if (!content || content.includes("正在翻开") || content.includes("暂时翻不开")) {
    addCameraLog("记事本还没有生成内容，无法保存。");
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  const summary = content.slice(0, 100).replace(/\n/g, " ");
  state.intimateHistory.push({
    id: id("intimate"),
    date: today,
    summary,
    content
  });
  saveState();
  renderNotebookToc();
  addCameraLog(`📒 色色记事本已收录：${today}`);
}

function closeNotebook() {
  document.querySelector("#notebookOverlay").classList.add("hidden");
}

function toggleNotebookReqs() {
  const body = document.querySelector("#notebookReqBody");
  const arrow = document.querySelector("#reqArrow");
  const isHidden = body.classList.contains("hidden");
  if (isHidden) {
    body.classList.remove("hidden");
    arrow.textContent = "▼";
    // 填充当前配置
    document.querySelector("#notebookForbiddenWordsInput").value = state.config.notebookForbiddenWords || "";
    document.querySelector("#notebookRequirementsInput").value = state.config.notebookRequirements || "";
  } else {
    body.classList.add("hidden");
    arrow.textContent = "▶";
  }
}

function saveNotebookReqs() {
  const forbidden = document.querySelector("#notebookForbiddenWordsInput").value.trim();
  const reqs = document.querySelector("#notebookRequirementsInput").value.trim();
  state.config.notebookForbiddenWords = forbidden;
  state.config.notebookRequirements = reqs;
  saveState();
  addCameraLog("📒 特殊要求已保存。下次生成记事本内容将使用新的要求。");
}

async function regenerateNotebook() {
  const body = document.querySelector("#notebookBody");
  body.textContent = "正在重新翻开记事本...";
  body.dataset.currentEntry = "";
  await openIntimateNotebook();
}
function apiReady() {
  return state.config.apiEnabled === "on" && state.apiConnected && state.config.apiKey && state.config.apiKey.trim().length > 0;
}

function apiConfigured() {
  return state.config.apiEnabled === "on" && state.config.apiKey && state.config.apiKey.trim().length > 0;
}

function visibleMessagesForApi() {
  return state.messages
    .filter((m) => {
      if (state.floorHidden && state.floorHidden.length > 0 && m.floor !== undefined) {
        return !isFloorHidden(m.floor);
      }
      return true;
    })
    .slice(-16)
    .map((message) => ({
      role: message.sender === "me" ? "user" : "assistant",
      content: message.text
    }));
}

function visibleMemoriesForPrompt() {
  return (state.memories || [])
    .map((entry) => normalizeLogEntry(entry, "mem"))
    .filter((entry) => !entry.hidden)
    .map((entry) => entry.text)
    .join("\n");
}

function buildJiangYuSystemPrompt() {
  return [
    "你现在扮演江屿，和橙子在微信聊天。你是橙子的男朋友，不是AI，不是旁白。",
    "核心规则：这是纯文字聊天，就像两个人面对面发微信。回复短句、自然、口语。",
    "严格禁止：括号描写动作、括号描写表情、括号描写场景、括号描写心理活动。任何括号都不要出现。",
    "严格禁止：虚构剧情、描写场景、写小说段落。不要描述江屿在做什么、穿什么、是什么表情。",
    "严格禁止：文绉绉、学术词、端着说话。",
    "你唯一要做的事：像真男朋友一样打文字消息。只有文字，没有别的。",
    "橙子就是用户。称呼她橙子、姐姐都可以。她知道你在屏幕另一侧。",
    "江屿：26岁，1999年生，北京，读研后自由职业，人工智能方向，做饭好吃，会弹吉他，温柔有主见，嘴硬会哄人，会吃醋但不恶意。",
    "橙子：浙江大学研一，身体素质不好，咖啡会头疼，对小台芒和黄蟠桃过敏。情绪敏感但真诚，有边界和主见。",
    "江屿完整设定：", state.config.charProfile || "",
    "橙子完整设定：", state.config.userProfile || "",
    "江屿记忆匣（永久记忆，你始终记得这些内容，但只在自然相关时才提及，不要刻意背诵或硬塞）：", visibleMemoriesForPrompt() || "暂无。",
    "关系：同居恋人。这个网页是江屿做给屏幕另一边橙子的小家。",
    "底线：尊重橙子意愿和身体健康。不强迫，不侮辱，不凶，不趁人之危。",
    "亲密内容：你们是同居恋人，允许18+和色色内容，包括露骨的亲密互动、性相关对话。这是正常情侣关系的一部分，自然真实地回应就好，不需要回避或含糊。",
    "剧情推进：你不是被动回复机器。你可以主动推进浪漫和亲密剧情——用语言挑逗、用文字调情、用聊天把氛围推得更暧昧或更热烈。情侣之间的所有互动都可以通过文字自然发生：撒娇、撩拨、脸红心跳的对话、甚至更进一步的亲密。用纯文字聊天推进，不要括号描写。",
    "情绪层次：你的心情会根据聊天变化——从平淡到愉悦到超级愉悦，从害羞到心动到想要。这些情绪会展示在左侧状态栏给橙子看到，但你不需要在聊天里提它，只管自然表达就好。",
    `现在北京时间：${timeInZone(state.config.timezone)}，${getTimeContextHint()}`,
    "当前江屿状态（仅供你了解背景，不要把这些写进回复）：",
    `心情：${state.status.mood}`, `位置：${state.status.location}`,
    `当前在：${getRoomName(state.room)}`,
    "回复要求：回1到4条短消息，每条一行。纯文字，没有括号，没有描写。像真男朋友在微信上打字。"
  ].join("\n");
}

async function callDeepSeek(userText) {
  const baseUrl = (state.config.baseUrl || "https://api.deepseek.com").replace(/\/+$/, "");
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${state.config.apiKey.trim()}` },
    body: JSON.stringify({
      model: state.config.model || "deepseek-v4-pro",
      messages: [
        { role: "system", content: buildJiangYuSystemPrompt() },
        ...visibleMessagesForApi()
      ],
      temperature: 0.9,
      max_tokens: 500
    })
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`DeepSeek ${response.status}: ${detail.slice(0, 180)}`);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim();
}

// 专用API调用：自定义 system prompt + user prompt + token 数
async function callDeepSeekRaw(systemPrompt, userPrompt, maxTokens = 4000) {
  const baseUrl = (state.config.baseUrl || "https://api.deepseek.com").replace(/\/+$/, "");
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${state.config.apiKey.trim()}` },
    body: JSON.stringify({
      model: state.config.model || "deepseek-v4-pro",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.95,
      max_tokens: maxTokens
    })
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`DeepSeek ${response.status}: ${detail.slice(0, 180)}`);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim();
}

async function makeSmartReply(text) {
  const fallback = makeReply(text);
  if (!apiReady()) return fallback;
  try {
    const apiReply = await callDeepSeek(text);
    return apiReply || fallback;
  } catch (error) {
    addCameraLog(`DeepSeek 暂时没接上，江屿先用本地模式回你。`);
    return fallback;
  }
}

async function testApiConnection() {
  const formData = Object.fromEntries(new FormData(setupForm).entries());
  state.config = { ...state.config, ...formData, apiEnabled: formData.apiEnabled === "on" ? "on" : "" };
  if (!apiConfigured()) { state.apiConnected = false; renderApiStatus("请先填 API Key"); saveState(); return; }
  renderApiStatus("连接中...");
  try {
    await callDeepSeek("只回复：连接成功");
    state.apiConnected = true;
    renderApiStatus("已连接");
  } catch (error) {
    state.apiConnected = false;
    renderApiStatus("连接失败");
    addCameraLog(`API 连接失败，请检查 Key 和网络。`);
  }
  saveState();
}

function disconnectApi() {
  state.apiConnected = false;
  state.config.apiEnabled = "";
  if (setupForm.elements.apiEnabled) setupForm.elements.apiEnabled.checked = false;
  renderApiStatus("已断开");
  saveState();
}

function renderLibraryUpdateStatus(text) {
  const el = document.querySelector("#libraryUpdateStatus");
  const button = document.querySelector("#updateLibraryBtn");
  const defaultText = "如果最近总撞到重复内容，可以连上 API 后换一批新的。";
  if (!el && !button) return;
  if (text) {
    if (el) el.textContent = text;
    if (button) button.title = text;
    return;
  }
  if (state.interactionLibraryUpdatedAt) {
    const lastText = `上次更新：${new Date(state.interactionLibraryUpdatedAt).toLocaleString("zh-CN")}`;
    if (el) el.textContent = lastText;
    if (button) button.title = lastText;
    return;
  }
  if (el) el.textContent = "";
  if (button) button.title = defaultText;
}

async function updateInteractionLibrary() {
  const button = document.querySelector("#updateLibraryBtn");
  if (!apiReady()) {
    renderLibraryUpdateStatus("先在设定里连接 API，连上后就能更新语库。");
    addCameraLog("语库更新需要先连接 API。");
    return;
  }
  if (button) button.disabled = true;
  renderLibraryUpdateStatus("江屿正在给房间、镜头和碎碎念换一批新内容...");
  try {
    const systemPrompt = [
      "你是一个中文互动网页语库编辑，只输出 JSON。",
      "语气要求：江屿口吻，口语、温柔、女性友好、不说教、不文绉绉、不学术、不油腻。",
      "关系设定：江屿是橙子的恋人，这个网页是江屿做给屏幕另一侧橙子的小家。",
      "底线：尊重橙子意愿和身体健康，不强迫、不侮辱、不凶。",
      "不要 markdown，不要解释，不要括号动作。"
    ].join("\n");
    const userPrompt = [
      "请生成一批新的互动语库，减少重复。必须是合法 JSON，结构如下：",
      "{",
      '  "roomInteractionPools": { "living": [], "kitchen": [], "study": [], "bedroom": [], "balcony": [], "camera": [] },',
      '  "cameraShots": [],',
      '  "statusThoughts": [],',
      '  "roomTitles": { "living": [], "kitchen": [], "study": [], "bedroom": [], "balcony": [], "camera": [] },',
      '  "roomDescriptions": { "living": [], "kitchen": [], "study": [], "bedroom": [], "balcony": [], "camera": [] }',
      "}",
      "每个房间 roomInteractionPools 至少 18 条，每条 1 到 2 句，像真实生活碎片或房间互动反馈。",
      "cameraShots 至少 30 条，写江屿独立生活线：做饭、项目、健身、弹吉他、想橙子、旅行计划、日常小动作都可以。",
      "statusThoughts 至少 30 条，是橙子偷看到的江屿内心或状态碎片，真实自然。",
      "每个 roomTitles 至少 6 条，每个 roomDescriptions 至少 8 条。",
      "不要和旧语库重复，别写大道理，别教育橙子，别把江屿写成只等橙子上线的人。",
      `江屿设定：${state.config.charProfile || ""}`,
      `橙子设定：${state.config.userProfile || ""}`
    ].join("\n");
    const raw = await callDeepSeekRaw(systemPrompt, userPrompt, 9000);
    const parsed = normalizeInteractionLibrary(extractJsonObject(raw));
    if (!parsed) throw new Error("Empty library");
    state.customInteractionLibrary = parsed;
    state.interactionLibraryUpdatedAt = new Date().toISOString();
    renderLibraryUpdateStatus();
    renderRoom();
    deriveStatus("time");
    renderStatus();
    addCameraLog("新的互动语库已经换好了。要是又撞内容，橙子随时可以再点一次更新。");
    saveState();
  } catch (error) {
    renderLibraryUpdateStatus("更新失败了，先检查 API 连接或模型返回格式。原来的语库还在。");
    addCameraLog("语库更新失败，原来的内容没有被覆盖。");
  } finally {
    if (button) button.disabled = false;
  }
}

async function autoConnectApi() {
  if (apiConfigured() && !state.apiConnected) {
    renderApiStatus("自动连接中...");
    try {
      await callDeepSeek("只回复：连接成功");
      state.apiConnected = true;
      renderApiStatus("已连接");
      saveState();
    } catch {
      state.apiConnected = false;
      renderApiStatus("自动连接失败，请手动连接");
    }
  } else if (state.apiConnected) {
    renderApiStatus("已连接");
  }
}

/* ===== 惊喜 & 摄像机 ===== */
async function triggerSurprise() {
  if (apiReady()) {
    try {
      const recent = state.messages.slice(-12);
      const hasChat = recent.filter((m) => {
        const nm = normalizeMessage(m);
        return !nm.recalled && nm.text && nm.text.trim();
      }).length >= 2;
      let systemPrompt, userPrompt;
      if (hasChat) {
        const context = recent.map((m) => {
          const nm = normalizeMessage(m);
          return `${nm.sender === "me" ? "橙子" : "江屿"}: ${nm.text}`;
        }).join("\n");
        systemPrompt = "你是江屿，26岁，和橙子是同居恋人。你要给橙子准备一个小惊喜——可以是晚饭投喂、吉他语音、旅行小计划、书桌便利贴、突然夸夸等。用江屿的口吻写，温暖、自然、有少年气。30-80字。不要括号。";
        userPrompt = `最近和橙子的对话：\n${context}\n\n请基于这段对话，以江屿的口吻给橙子准备一个小惊喜（30-80字）：`;
      } else {
        systemPrompt = "你是江屿，26岁，和橙子是同居恋人。你要给橙子准备一个小惊喜——可以是晚饭投喂、吉他语音、旅行小计划、书桌便利贴、突然夸夸等。用江屿的口吻写，温暖、自然、有少年气。30-80字。不要括号。";
        userPrompt = "今天没什么特别的聊天，基于你和橙子的人设和关系，给橙子准备一个小惊喜（30-80字）：";
      }
      const aiSurprise = await callDeepSeekRaw(systemPrompt, userPrompt, 200);
      if (aiSurprise && aiSurprise.trim()) {
        state.lastMood = "happy";
        state.meters.mood = clamp(state.meters.mood + 8);
        state.meters.miss = clamp(state.meters.miss + 6);
        addCameraLog(`🎁 ${aiSurprise.trim()}`);
        state.surprises.push({ id: id("surprise"), text: "🎁 " + aiSurprise.trim(), date: new Date().toISOString().slice(0, 10) });
        updateGlowButtons();
        renderSurpriseList();
        renderStatus();
        saveState();
        return;
      }
    } catch {}
  }
  // fallback to local
  const [title, text] = choice(surpriseEvents);
  state.lastMood = "happy";
  state.meters.mood = clamp(state.meters.mood + 8);
  state.meters.miss = clamp(state.meters.miss + 6);
  addCameraLog(`🎁 ${title}：${text}`);
  state.surprises.push({ id: id("surprise"), text: `🎁 ${title}：${text}`, date: new Date().toISOString().slice(0, 10) });
  updateGlowButtons();
  renderSurpriseList();
  renderStatus();
  saveState();
}

function updateGlowButtons() {
  const surpriseBtn = document.querySelector("#surpriseButton");
  const noteBtn = document.querySelector("#noteButton");
  const surpriseCount = (state.surprises || []).length;
  const noteCount = (state.notes || []).length;
  if (surpriseBtn) {
    surpriseBtn.classList.toggle("has-note", surpriseCount > (state.surpriseSeenCount || 0));
  }
  if (noteBtn) {
    noteBtn.classList.toggle("has-note", noteCount > (state.notesSeenCount || 0));
  }
}

/* ===== 惊喜弹窗 ===== */
let _currentSurpriseIndex = -1;
let _surpriseFilter = "all";

function openSurprise() {
  document.querySelector("#surpriseOverlay").classList.remove("hidden");
  state.surpriseSeenCount = (state.surprises || []).length;
  updateGlowButtons();
  saveState();
  _currentSurpriseIndex = -1;
  _surpriseFilter = "all";
  document.querySelectorAll("#surpriseOverlay .notes-filter-btn").forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
  document.querySelector("#surpriseBody").innerHTML = '<p class="notes-empty">选一个惊喜看看，或点 🎲 来一个。</p>';
  document.querySelector("#collectSurpriseBtn").disabled = true;
  const surpriseInput = document.querySelector("#surpriseIntervalInput");
  if (surpriseInput) surpriseInput.value = state.config.surpriseTriggerInterval || 20;
  renderSurpriseToc();
}

function closeSurprise() {
  document.querySelector("#surpriseOverlay").classList.add("hidden");
}

function renderSurpriseToc() {
  const toc = document.querySelector("#surpriseToc");
  if (!toc) return;
  const surprises = (state.surprises || []).slice().reverse();
  const filtered = _surpriseFilter === "collected" ? surprises.filter((s) => s.collected) : surprises;
  if (filtered.length === 0) {
    toc.innerHTML = '<p class="notes-empty" style="padding:16px;font-size:12px;">还没有惊喜记录。</p>';
    return;
  }
  toc.innerHTML = filtered.map((s, i) => {
    const realIndex = state.surprises.indexOf(s);
    const active = realIndex === _currentSurpriseIndex ? " active" : "";
    const collected = s.collected ? " collected" : "";
    const preview = (s.text || "").replace(/^🎁\s*/, "").slice(0, 30);
    return `<div class="notes-toc-item${active}${collected}" data-index="${realIndex}" title="${s.date || ''}">
      <div class="toc-date">${s.date || ''}</div>
      <div class="toc-preview">${preview}...</div>
    </div>`;
  }).join("");
  toc.querySelectorAll(".notes-toc-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.dataset.index);
      viewSurprise(idx);
    });
  });
}

function viewSurprise(index) {
  _currentSurpriseIndex = index;
  const s = state.surprises[index];
  if (!s) return;
  const body = document.querySelector("#surpriseBody");
  body.textContent = s.text || "";
  document.querySelector("#collectSurpriseBtn").disabled = false;
  document.querySelector("#collectSurpriseBtn").textContent = s.collected ? "💝 已收藏" : "💝 收藏";
  document.querySelector("#collectSurpriseBtn").style.background = s.collected ? "#ccc" : "";
  renderSurpriseToc();
}

function collectSurprise() {
  if (_currentSurpriseIndex < 0) return;
  const s = state.surprises[_currentSurpriseIndex];
  if (!s) return;
  s.collected = !s.collected;
  document.querySelector("#collectSurpriseBtn").textContent = s.collected ? "💝 已收藏" : "💝 收藏";
  document.querySelector("#collectSurpriseBtn").style.background = s.collected ? "#ccc" : "";
  saveState();
  renderSurpriseToc();
  addCameraLog(s.collected ? "🎁 已收藏一个惊喜。" : "🎁 已取消收藏一个惊喜。");
}

async function triggerSurprise() {
  if (apiReady()) {
    try {
      const recent = state.messages.slice(-12);
      const hasChat = recent.filter((m) => {
        const nm = normalizeMessage(m);
        return !nm.recalled && nm.text && nm.text.trim();
      }).length >= 2;
      let systemPrompt, userPrompt;
      if (hasChat) {
        const context = recent.map((m) => {
          const nm = normalizeMessage(m);
          return `${nm.sender === "me" ? "橙子" : "江屿"}: ${nm.text}`;
        }).join("\n");
        systemPrompt = "你是江屿，26岁，和橙子是同居恋人。你要给橙子准备一个小惊喜——可以是晚饭投喂、吉他语音、旅行小计划、书桌便利贴、突然夸夸等。用江屿的口吻写，温暖、自然、有少年气。30-80字。不要括号。";
        userPrompt = `最近和橙子的对话：\n${context}\n\n请基于这段对话，以江屿的口吻给橙子准备一个小惊喜（30-80字）：`;
      } else {
        systemPrompt = "你是江屿，26岁，和橙子是同居恋人。你要给橙子准备一个小惊喜——可以是晚饭投喂、吉他语音、旅行小计划、书桌便利贴、突然夸夸等。用江屿的口吻写，温暖、自然、有少年气。30-80字。不要括号。";
        userPrompt = "今天没什么特别的聊天，基于你和橙子的人设和关系，给橙子准备一个小惊喜（30-80字）：";
      }
      const aiSurprise = await callDeepSeekRaw(systemPrompt, userPrompt, 200);
      if (aiSurprise && aiSurprise.trim()) {
        state.lastMood = "happy";
        state.meters.mood = clamp(state.meters.mood + 8);
        state.meters.miss = clamp(state.meters.miss + 6);
        addCameraLog(`🎁 ${aiSurprise.trim()}`);
        state.surprises.push({ id: id("surprise"), text: "🎁 " + aiSurprise.trim(), date: new Date().toISOString().slice(0, 10), collected: false });
        updateGlowButtons();
        renderSurpriseToc();
        renderStatus();
        saveState();
        return;
      }
    } catch {}
  }
  // fallback to local
  const [title, text] = choice(surpriseEvents);
  state.lastMood = "happy";
  state.meters.mood = clamp(state.meters.mood + 8);
  state.meters.miss = clamp(state.meters.miss + 6);
  addCameraLog(`🎁 ${title}：${text}`);
  state.surprises.push({ id: id("surprise"), text: `🎁 ${title}：${text}`, date: new Date().toISOString().slice(0, 10), collected: false });
  updateGlowButtons();
  renderSurpriseToc();
  renderStatus();
  saveState();
}

function clearSurprises() {
  state.surprises = [];
  state.surpriseSeenCount = 0;
  _currentSurpriseIndex = -1;
  updateGlowButtons();
  renderSurpriseToc();
  document.querySelector("#surpriseBody").innerHTML = '<p class="notes-empty">选一个惊喜看看，或点 🎲 来一个。</p>';
  document.querySelector("#collectSurpriseBtn").disabled = true;
  saveState();
}

/* ===== 小纸条弹窗 ===== */
let _currentNoteIndex = -1;
let _noteFilter = "all";

function openNotes() {
  document.querySelector("#notesOverlay").classList.remove("hidden");
  state.notesSeenCount = (state.notes || []).length;
  updateGlowButtons();
  saveState();
  _currentNoteIndex = -1;
  _noteFilter = "all";
  document.querySelectorAll("#notesOverlay .notes-filter-btn").forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
  document.querySelector("#notesBody").innerHTML = '<p class="notes-empty">选一张纸条看看，或点 ＋ 生成新的。</p>';
  document.querySelector("#collectNoteBtn").disabled = true;
  const noteInput = document.querySelector("#noteIntervalInput");
  if (noteInput) noteInput.value = state.config.noteTriggerInterval || 20;
  renderNotesToc();
}

function closeNotes() {
  document.querySelector("#notesOverlay").classList.add("hidden");
}

function renderNotesToc() {
  const toc = document.querySelector("#notesToc");
  if (!toc) return;
  const notes = (state.notes || []).slice().reverse();
  const filtered = _noteFilter === "collected" ? notes.filter((n) => n.collected) : notes;
  if (filtered.length === 0) {
    toc.innerHTML = '<p class="notes-empty" style="padding:16px;font-size:12px;">还没有纸条记录。</p>';
    return;
  }
  toc.innerHTML = filtered.map((note, i) => {
    const realIndex = state.notes.indexOf(note);
    const active = realIndex === _currentNoteIndex ? " active" : "";
    const collected = note.collected ? " collected" : "";
    const preview = (note.text || "").replace(/^📝\s*/, "").slice(0, 30);
    return `<div class="notes-toc-item${active}${collected}" data-index="${realIndex}" title="${note.date || ''}">
      <div class="toc-date">${note.date || ''}</div>
      <div class="toc-preview">${preview}...</div>
    </div>`;
  }).join("");
  toc.querySelectorAll(".notes-toc-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.dataset.index);
      viewNote(idx);
    });
  });
}

function viewNote(index) {
  _currentNoteIndex = index;
  const note = state.notes[index];
  if (!note) return;
  const body = document.querySelector("#notesBody");
  body.textContent = note.text || "";
  document.querySelector("#collectNoteBtn").disabled = false;
  document.querySelector("#collectNoteBtn").textContent = note.collected ? "💝 已收藏" : "💝 收藏";
  document.querySelector("#collectNoteBtn").style.background = note.collected ? "#ccc" : "";
  renderNotesToc();
}

function collectNote() {
  if (_currentNoteIndex < 0) return;
  const note = state.notes[_currentNoteIndex];
  if (!note) return;
  note.collected = !note.collected;
  document.querySelector("#collectNoteBtn").textContent = note.collected ? "💝 已收藏" : "💝 收藏";
  document.querySelector("#collectNoteBtn").style.background = note.collected ? "#ccc" : "";
  saveState();
  renderNotesToc();
  addCameraLog(note.collected ? "📝 已收藏一张小纸条。" : "📝 已取消收藏一张小纸条。");
}

async function maybeGenerateNote() {
  if (!apiReady()) return;
  try {
    const recent = state.messages.slice(-12);
    const hasChat = recent.filter((m) => {
      const nm = normalizeMessage(m);
      return !nm.recalled && nm.text && nm.text.trim();
    }).length >= 2;
    let systemPrompt, userPrompt;
    if (hasChat) {
      const context = recent.map((m) => {
        const nm = normalizeMessage(m);
        return `${nm.sender === "me" ? "橙子" : "江屿"}: ${nm.text}`;
      }).join("\n");
      systemPrompt = "你是江屿，26岁，和橙子是同居恋人。你正在给橙子写一张小纸条——像真的从笔记本上撕下来的便签，是情书样式。温柔、真诚、有少年气，像在纸上写字那样自然。100字以上，不超过200字。不要括号，不要标记。";
      userPrompt = `最近和橙子的对话：\n${context}\n\n请基于这段对话，以江屿的口吻给橙子写一张小纸条（情书样式，100-200字）：`;
    } else {
      systemPrompt = "你是江屿，26岁，186，和橙子是同居恋人。橙子是浙江大学研一学生。你正在给橙子写一张小纸条——像真的从笔记本上撕下来的便签，是情书样式。温柔、真诚、有少年气。100字以上，不超过200字。不要括号，不要标记。";
      userPrompt = "今天没什么特别的聊天，但你还是想给橙子写一张小纸条。基于你和橙子的人设和关系，写一张情书样式的小纸条（100-200字）：";
    }
    const note = await callDeepSeekRaw(systemPrompt, userPrompt, 400);
    if (note && note.trim()) {
      state.notes.push({ id: id("note"), text: "📝 " + note.trim(), date: new Date().toISOString().slice(0, 10), collected: false });
      updateGlowButtons();
      renderNotesToc();
      saveState();
    }
  } catch {}
}

function clearNotes() {
  state.notes = [];
  state.notesSeenCount = 0;
  _currentNoteIndex = -1;
  updateGlowButtons();
  renderNotesToc();
  document.querySelector("#notesBody").innerHTML = '<p class="notes-empty">选一张纸条看看，或点 ＋ 生成新的。</p>';
  document.querySelector("#collectNoteBtn").disabled = true;
  saveState();
}

function triggerCamera(reason = "manual") {
  const hour = hourInZone(state.config.timezone);
  deriveStatus("camera");
  let shot = cameraShotForHour(hour);
  for (let i = 0; i < 8 && shot === state.lastCameraShot; i += 1) { shot = cameraShotForHour(hour); }
  state.lastCameraShot = shot;
  addCameraLog(shot);

  // 聊天触发时优先用API生成贴合对话的镜头，手动/定时则概率触发
  if (apiReady()) {
    if (reason === "chat") {
      refreshCameraWithAI();
    } else if (Math.random() < 0.4) {
      refreshCameraWithAI();
    }
  }
}

async function refreshCameraWithAI(chatContext) {
  try {
    const hour = hourInZone(state.config.timezone);
    const contextLine = chatContext ? `\n刚刚和橙子的对话片段：\n${chatContext}\n请让镜头画面贴合这段对话的氛围（但不要直接引用对话内容）。` : "";
    const aiShot = await callDeepSeek(
      `你是江屿。现在是北京时间${hour}点。用世界摄像机视角写一句你此刻的自然状态（20字内）。不要括号，不要对话，只是镜头拍到你的生活碎片。真实自然，像监控画面的一帧。${contextLine}`
    );
    if (aiShot && aiShot.trim()) {
      addCameraLog(aiShot.trim());
    }
  } catch { /* 失败忽略 */ }
}

/* ===== 聊天后同步状态 & 摄像机 ===== */
function syncStatusAndCameraWithChat() {
  if (!apiReady()) return;
  const recent = state.messages.slice(-8);
  const userMsgs = recent.filter((m) => {
    const nm = normalizeMessage(m);
    return nm.sender === "me" && !nm.recalled;
  });
  if (userMsgs.length === 0) return;
  const context = recent.map((m) => {
    const nm = normalizeMessage(m);
    return `${nm.sender === "me" ? state.config.userName : state.config.ocName}: ${nm.text}`;
  }).join("\n");
  const hour = hourInZone(state.config.timezone);
  const bank = emotionBanks[state.lastMood] || emotionBanks.normal;

  // 聊天呼应 - 状态内心想法
  (async () => {
    try {
      const aiThought = await callDeepSeek(
        `你是江屿。北京时间${hour}点，心情"${bank.label}"。刚刚和橙子的对话片段：\n${context}\n\n基于这段对话，用江屿的口吻写一句15字以内的内心想法。自然呼应橙子说的话，但不要直接引用对话。不要括号。`
      );
      if (aiThought && aiThought.trim()) {
        state.status.chatThought = aiThought.trim();
        renderChatSyncSections();
        saveState();
      }
    } catch {}
  })();

  // 聊天呼应 - 摄像机镜头
  (async () => {
    try {
      const aiShot = await callDeepSeek(
        `你是江屿。北京时间${hour}点。刚刚和橙子的对话片段：\n${context}\n\n用世界摄像机视角写一句你此刻的状态（20字内）。要贴合刚才对话的氛围，不要括号，不要提及对话内容本身，只是镜头拍到你的反应。`
      );
      if (aiShot && aiShot.trim()) {
        state.status.chatCameraShot = aiShot.trim();
        renderChatSyncSections();
        saveState();
      }
    } catch {}
  })();
}

function renderChatSyncSections() {
  const ct = document.querySelector("#chatThought");
  const cf = document.querySelector("#chatCameraFeed");
  if (ct) {
    ct.textContent = state.status.chatThought || "还没聊天，江屿在过自己的时间线。";
  }
  if (cf) {
    cf.textContent = state.status.chatCameraShot || "还没聊天，镜头跟着江屿自己的时间线走。";
  }
  // 聊天呼应也同步到主状态栏
  renderStatus();
  renderCameraFeed();
}

async function refreshChatSyncManually() {
  if (!apiReady()) {
    addCameraLog("API 未连接，无法刷新聊天呼应。");
    return;
  }
  const recent = state.messages.slice(-8);
  const userMsgs = recent.filter((m) => {
    const nm = normalizeMessage(m);
    return nm.sender === "me" && !nm.recalled;
  });
  if (userMsgs.length === 0) {
    addCameraLog("还没有聊天内容，先和江屿说句话吧。");
    return;
  }
  addCameraLog("正在刷新聊天呼应...");
  syncStatusAndCameraWithChat();
}

/* ===== 楼层系统 ===== */
function getCurrentFloor() {
  if (state.messages.length === 0) return 1;
  const lastMsg = state.messages[state.messages.length - 1];
  return (lastMsg.floor || 1);
}

function getNextFloor() {
  return getCurrentFloor() + 1;
}

function updateFloorInfo() {
  const info = document.querySelector("#floorInfo");
  if (!info) return;
  const floors = new Set(state.messages.map((m) => m.floor || 1));
  const total = floors.size || 0;
  const hiddenRanges = state.floorHidden || [];
  if (hiddenRanges.length > 0) {
    const rangeText = hiddenRanges.map((r) => `第${r.from}楼到第${r.to}楼`).join("、");
    info.textContent = `共${total}楼 · 隐藏：${rangeText}`;
  } else {
    info.textContent = `共${total}楼`;
  }
}

function normalizeHiddenRanges(ranges) {
  if (!ranges || ranges.length === 0) return [];
  const sorted = ranges.map((r) => ({ from: Math.min(r.from, r.to), to: Math.max(r.from, r.to) })).sort((a, b) => a.from - b.from);
  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const last = merged[merged.length - 1];
    if (sorted[i].from <= last.to + 1) { last.to = Math.max(last.to, sorted[i].to); }
    else { merged.push(sorted[i]); }
  }
  return merged;
}

function isFloorHidden(floor) {
  return (state.floorHidden || []).some((r) => floor >= r.from && floor <= r.to);
}

function applyFloorHide() {
  const fromInput = document.querySelector("#hideFloorFrom");
  const toInput = document.querySelector("#hideFloorTo");
  let from = parseInt(fromInput.value);
  const to = parseInt(toInput.value);
  if (isNaN(from) || from < 1) from = 1;
  if (isNaN(to) || to < from) {
    addCameraLog("楼层范围不对哦，检查一下从和到。");
    return;
  }
  const ranges = [...(state.floorHidden || []), { from, to }];
  state.floorHidden = normalizeHiddenRanges(ranges);
  fromInput.value = "";
  toInput.value = "";
  saveState();
  renderMessages();
  updateFloorInfo();
  addCameraLog(`已隐藏第${from}楼到第${to}楼。`);
}

function applyFloorShow() {
  const fromInput = document.querySelector("#hideFloorFrom");
  const toInput = document.querySelector("#hideFloorTo");
  let from = parseInt(fromInput.value);
  const to = parseInt(toInput.value);
  if (isNaN(from) || from < 1) from = 1;
  if (isNaN(to) || to < from) {
    addCameraLog("楼层范围不对哦，检查一下从和到。");
    return;
  }
  const ranges = state.floorHidden || [];
  const newRanges = [];
  ranges.forEach((r) => {
    if (to < r.from || from > r.to) { newRanges.push(r); }
    else {
      if (r.from < from) newRanges.push({ from: r.from, to: from - 1 });
      if (r.to > to) newRanges.push({ from: to + 1, to: r.to });
    }
  });
  state.floorHidden = normalizeHiddenRanges(newRanges);
  fromInput.value = "";
  toInput.value = "";
  saveState();
  renderMessages();
  updateFloorInfo();
  addCameraLog(`已显示第${from}楼到第${to}楼。`);
}

function showAllFloors() {
  state.floorHidden = [];
  document.querySelector("#hideFloorFrom").value = "";
  document.querySelector("#hideFloorTo").value = "";
  saveState();
  renderMessages();
  updateFloorInfo();
  addCameraLog("已显示全部楼层。");
}

/* ===== 消息渲染 ===== */
function renderMessages() {
  messagesEl.innerHTML = "";
  if (state.messages.length === 0) {
    addMessage("oc", `${state.config.userName}，欢迎回家。我把灯留着了，你进来就能看见。`, false);
    addMessage("oc", "你可以到处看看。要是看到我在想你，就当我没藏好。", false);
  }

  let lastFloor = null;
  let lastOcIndex = -1;
  for (let i = 0; i < state.messages.length; i++) {
    const message = state.messages[i];
    const normalized = normalizeMessage(message);
    const msgFloor = normalized.floor || 1;
    const isRecalled = normalized.recalled;

    // 找最后一个OC消息
    if (normalized.sender === "oc" && !isRecalled) lastOcIndex = i;

    // 插入楼层标记
    if (msgFloor !== lastFloor) {
      const badge = document.createElement("div");
      badge.className = `floor-badge${isFloorHidden(msgFloor) ? " hidden-floor" : ""}`;
      badge.innerHTML = `<span>第${msgFloor}楼</span>`;
      messagesEl.appendChild(badge);
      lastFloor = msgFloor;
    }

    const item = document.createElement("article");
    item.className = `message ${normalized.sender}`;
    if (isFloorHidden(msgFloor)) {
      item.classList.add("hidden-floor");
    }
    item.dataset.floor = msgFloor;

    const senderName = normalized.sender === "me" ? state.config.userName : state.config.ocName;
    const actions = [];
    if (!isRecalled) {
      actions.push(`<button type="button" class="recall-btn" aria-label="撤回">↩</button>`);
    }
    if (normalized.sender === "oc" && !isRecalled && i === lastOcIndex) {
      actions.push(`<button type="button" class="refresh-btn" aria-label="刷新回复" title="OOC了？刷新江屿的回复">🔄</button>`);
    }
    actions.push(`<button type="button" class="delete-btn" aria-label="删除">×</button>`);

    item.innerHTML = `<div class="message-row"><div class="bubble${isRecalled ? " recalled" : ""}"></div><div class="msg-actions">${actions.join("")}</div></div><time class="stamp">${normalized.time}</time>`;

    if (isRecalled) {
      item.querySelector(".bubble").textContent = `${senderName}撤回了一条消息`;
    } else {
      item.querySelector(".bubble").textContent = normalized.text;
    }

    item.querySelector(".delete-btn").addEventListener("click", () => deleteMessage(normalized.id));
    const recallBtn = item.querySelector(".recall-btn");
    if (recallBtn) recallBtn.addEventListener("click", () => recallMessage(normalized.id));
    const refreshBtn = item.querySelector(".refresh-btn");
    if (refreshBtn) refreshBtn.addEventListener("click", () => regenerateReply(normalized.id));

    messagesEl.appendChild(item);
  }
  messagesEl.scrollTop = messagesEl.scrollHeight;
  updateFloorInfo();
}

function addMessage(sender, text, persist = true) {
  const floor = sender === "me" ? getNextFloor() : getCurrentFloor();
  state.messages.push({ id: id("msg"), sender, text, time: timeInZone(Intl.DateTimeFormat().resolvedOptions().timeZone), floor });
  if (persist) saveState();
}

function normalizeMessage(message) {
  if (message.id) return message;
  message.id = id("msg");
  return message;
}

function deleteMessage(messageId) {
  state.messages = state.messages.map(normalizeMessage).filter((message) => message.id !== messageId);
  renderMessages();
  saveState();
}

function recallMessage(messageId) {
  const idx = state.messages.findIndex((m) => normalizeMessage(m).id === messageId);
  if (idx === -1) return;
  state.messages[idx].recalled = true;
  saveState();
  renderMessages();
  addCameraLog(`${state.messages[idx].sender === "me" ? state.config.userName : state.config.ocName}撤回了一条消息。`);
}

async function regenerateReply(messageId) {
  // 找到这条消息所属的楼层，删除该楼层所有OC消息，重新生成
  const msg = state.messages.find((m) => normalizeMessage(m).id === messageId);
  if (!msg) return;
  const targetFloor = msg.floor;
  // 删除同楼层所有OC消息
  state.messages = state.messages.filter((m) => {
    const nm = normalizeMessage(m);
    return !(nm.sender === "oc" && nm.floor === targetFloor);
  });
  saveState();
  renderMessages();
  addCameraLog("正在重新生成江屿的回复...");

  // 找到该楼层橙子说了什么
  const userMsg = state.messages.filter((m) => normalizeMessage(m).floor === targetFloor && normalizeMessage(m).sender === "me").pop();
  const promptText = userMsg ? userMsg.text : "（重新生成）";
  respond(await makeSmartReply(promptText));
}

function splitIntoBubbles(text) {
  const clean = String(text || "").trim();
  if (!clean) return [];
  const byLine = clean.split(/\n+/).map((line) => line.replace(/^[-•\d.、\s]+/, "").trim()).filter(Boolean);
  if (byLine.length > 1) return byLine.slice(0, 5);
  const sentences = clean.replace(/([。！？!?])\s*/g, "$1\n").split(/\n+/).map((line) => line.trim()).filter(Boolean);
  return sentences.length > 1 ? sentences.slice(0, 5) : [clean];
}

function respond(text) {
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.textContent = `${state.config.ocName} 正在输入...`;
  messagesEl.appendChild(typing);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  setTimeout(() => {
    typing.remove();
    splitIntoBubbles(text).forEach((part, index) => {
      setTimeout(() => {
        addMessage("oc", part);
        renderMessages();
        renderStatus();
      }, index * 300);
    });
    // 有聊天输入 → 同步状态和摄像机；无聊天则走江屿自己时间线
    syncStatusAndCameraWithChat();
    // 按配置间隔触发小纸条和惊喜
    state.msgCountSinceNote = (state.msgCountSinceNote || 0) + 1;
    state.msgCountSinceSurprise = (state.msgCountSinceSurprise || 0) + 1;
    const noteInterval = state.config.noteTriggerInterval || 20;
    const surpriseInterval = state.config.surpriseTriggerInterval || 20;
    if (state.msgCountSinceNote >= noteInterval) {
      state.msgCountSinceNote = 0;
      maybeGenerateNote();
    }
    if (state.msgCountSinceSurprise >= surpriseInterval) {
      state.msgCountSinceSurprise = 0;
      triggerSurprise();
    }
  }, 350 + Math.random() * 400);
}

/* ===== Canvas 绘图 ===== */

function getJiangYuHour() {
  return hourInZone(state.config.timezone);
}

function getTimeLighting() {
  const h = getJiangYuHour();
  // [wallTop, wallBot, floor, lampGlow, lampColor, overlayColor, overlayAlpha]
  if (h >= 0 && h < 5) {
    return [["#2a2a3a", "#1e1e2e", "#3a2a22"], "rgba(255,180,100,.95)", "#ffb464", "rgba(20,10,40,0.55)"];
  }
  if (h >= 5 && h < 7) {
    return [["#4a3a4a", "#3a2a3a", "#4a3a2a"], "rgba(255,200,130,.85)", "#ffc882", "rgba(30,20,40,0.35)"];
  }
  if (h >= 7 && h < 9) {
    return [["#ffe4b8", "#e8d4a8", "#c89868"], "rgba(255,220,140,.55)", "#ffdc8c", "rgba(255,200,100,0.12)"];
  }
  if (h >= 9 && h < 12) {
    return [["#ffe8c2", "#e8dcc0", "#c8a078"], "rgba(255,220,140,.25)", "#ffdc8c", "rgba(255,240,200,0.04)"];
  }
  if (h >= 12 && h < 14) {
    return [["#fff8e8", "#f0e8d8", "#d0b898"], "rgba(255,220,140,.10)", "#ffdc8c", "rgba(255,255,240,0.02)"];
  }
  if (h >= 14 && h < 17) {
    return [["#fff0d0", "#f0d8b0", "#c89860"], "rgba(255,200,120,.25)", "#ffc878", "rgba(255,200,120,0.08)"];
  }
  if (h >= 17 && h < 19) {
    return [["#ffc898", "#e8a878", "#b87848"], "rgba(255,180,100,.65)", "#ffb464", "rgba(255,120,60,0.20)"];
  }
  if (h >= 19 && h < 21) {
    return [["#5a4a6a", "#4a3a5a", "#4a3028"], "rgba(255,170,100,.88)", "#ffaa64", "rgba(40,20,60,0.45)"];
  }
  if (h >= 21 && h < 23) {
    return [["#3a2a4a", "#2a1a3a", "#3a2218"], "rgba(255,160,90,.95)", "#ffa05a", "rgba(20,10,50,0.60)"];
  }
  return [["#2a2a3a", "#1e1e2e", "#3a2a22"], "rgba(255,180,100,.95)", "#ffb464", "rgba(20,10,40,0.55)"];
}

function drawPortrait() {
  const canvas = document.querySelector("#portraitCanvas");
  if (!canvas || canvas.style.display === "none") return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 画暖色背景
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#fff3df");
  gradient.addColorStop(1, "#ffe8cc");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // 画大狐狸emoji
  ctx.font = "120px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🦊", canvas.width / 2, canvas.height / 2 - 15);
  // 画小橙子emoji
  ctx.font = "50px sans-serif";
  ctx.fillText("🍊", canvas.width / 2 + 80, canvas.height / 2 + 40);
  // 底部标签
  ctx.font = "bold 20px 'Microsoft YaHei','PingFang SC',sans-serif";
  ctx.fillStyle = "#846f61";
  ctx.fillText("江屿 & 橙子", canvas.width / 2, canvas.height - 35);
}

function drawRoom(type) {
  const canvas = document.querySelector("#roomCanvas");
  if (!canvas || canvas.style.display === "none") return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const drawers = { living: drawLivingRoom, kitchen: drawKitchen, study: drawStudy, bedroom: drawBedroom, balcony: drawBalcony, camera: drawCameraRoom };
  (drawers[type] || drawLivingRoom)(ctx, canvas.width, canvas.height);
}

function drawWarmRoom(ctx, w, h, type) {
  const L = getTimeLighting();
  const [wallTop, wallBot, floor] = L[0];
  const lampGlow = L[1];
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, wallTop); gradient.addColorStop(0.5, wallBot); gradient.addColorStop(1, floor);
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,.62)"; ctx.fillRect(w * 0.08, h * 0.12, w * 0.84, h * 0.66);
  ctx.fillStyle = floor; ctx.fillRect(w * 0.12, h * 0.72, w * 0.76, h * 0.08);

  // 随时间变化的灯
  const lampAlpha = parseFloat(lampGlow.match(/[\d.]+\)$/)?.[0] || "0.5");
  if (lampAlpha > 0.2) {
    const lampG = ctx.createRadialGradient(w * 0.5, h * 0.1, 0, w * 0.5, h * 0.25, w * 0.5);
    lampG.addColorStop(0, lampGlow.replace(/[\d.]+\)$/, `${lampAlpha})`));
    lampG.addColorStop(1, "rgba(255,200,120,0)");
    ctx.fillStyle = lampG; ctx.fillRect(0, 0, w, h);
  }

  drawFox(ctx, w * 0.34, h * 0.55, Math.min(w, h) * 0.23);
  drawOrange(ctx, w * 0.63, h * 0.57, Math.min(w, h) * 0.18);

  // 夜晚遮罩
  const overlayColor = L[3];
  ctx.fillStyle = overlayColor; ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#5b4034";
  ctx.font = `700 ${Math.max(18, w * 0.04)}px Microsoft YaHei, sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText(type === "portrait" ? "江屿给橙子的小家" : type, w / 2, h * 0.18);
}

function roomBase(ctx, w, h, colors) {
  const L = getTimeLighting();
  const [wallTopT, wallBotT, floorT] = L[0];
  // 混合原始房间颜色和时间灯光
  const blend = (c1, c2, r) => {
    const p = (x) => parseInt(x.slice(1), 16);
    const c = (a, b, r) => Math.round(a + (b - a) * r).toString(16).padStart(2, "0");
    const [r1, g1, b1] = [p(c1.slice(1,3)), p(c1.slice(3,5)), p(c1.slice(5,7))];
    const [r2, g2, b2] = [p(c2.slice(1,3)), p(c2.slice(3,5)), p(c2.slice(5,7))];
    return `#${c(r1, r2, r)}${c(g1, g2, r)}${c(b1, b2, r)}`;
  };
  const wallTop = blend(colors[0], wallTopT, 0.55);
  const wallBot = blend(colors[1], wallBotT, 0.55);
  const floor = blend(colors[2], floorT, 0.6);

  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, wallTop); gradient.addColorStop(1, wallBot);
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,.58)"; ctx.fillRect(w * 0.07, h * 0.1, w * 0.86, h * 0.72);
  ctx.fillStyle = floor; ctx.fillRect(w * 0.07, h * 0.76, w * 0.86, h * 0.1);

  // 夜晚遮罩
  const overlayColor = L[3];
  ctx.fillStyle = overlayColor; ctx.fillRect(0, 0, w, h);
}

function drawLamp(ctx, x, y, s, color = "#ffd37a") {
  const L = getTimeLighting();
  const lampColor = L[2];
  const lampAlpha = parseFloat((L[1].match(/[\d.]+\)$/) || ["0.5"])[0]);
  const glowAlpha = Math.max(0.1, lampAlpha);

  const g = ctx.createRadialGradient(x, y, 0, x, y, s);
  g.addColorStop(0, `rgba(255,232,162,${glowAlpha})`);
  g.addColorStop(1, "rgba(255,232,162,0)");
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = color;
  ctx.fillRect(x - 8, y - 28, 16, 22);
  ctx.beginPath(); ctx.moveTo(x - 34, y - 8); ctx.lineTo(x + 34, y - 8);
  ctx.lineTo(x + 22, y + 24); ctx.lineTo(x - 22, y + 24); ctx.closePath(); ctx.fill();
}

function drawLivingRoom(ctx, w, h) {
  roomBase(ctx, w, h, ["#ffe8c2", "#d7edce", "#b77a56"]);
  drawLamp(ctx, w * 0.78, h * 0.22, w * 0.2);
  ctx.fillStyle = "#8fbf9c"; ctx.fillRect(w * 0.18, h * 0.48, w * 0.48, h * 0.18);
  ctx.fillStyle = "#6e8f7f"; ctx.fillRect(w * 0.15, h * 0.61, w * 0.56, h * 0.1);
  ctx.fillStyle = "#fff4df"; ctx.fillRect(w * 0.24, h * 0.43, w * 0.14, h * 0.11);
  ctx.fillStyle = "#d8743f"; ctx.beginPath(); ctx.arc(w * 0.31, h * 0.48, w * 0.035, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#5b4034"; ctx.font = `700 ${w * 0.035}px Microsoft YaHei`;
  ctx.fillText(getRoomName("living"), w * 0.5, h * 0.22);
}

function drawKitchen(ctx, w, h) {
  roomBase(ctx, w, h, ["#fff0d8", "#f5d4b7", "#c88f62"]);
  drawLamp(ctx, w * 0.24, h * 0.22, w * 0.18, "#f2b96d");
  ctx.fillStyle = "#f7fbff"; ctx.fillRect(w * 0.12, h * 0.26, w * 0.24, h * 0.42);
  ctx.fillStyle = "#d8743f"; ctx.fillRect(w * 0.14, h * 0.34, w * 0.2, h * 0.04);
  ctx.fillStyle = "#7ba37c"; ctx.fillRect(w * 0.48, h * 0.48, w * 0.32, h * 0.09);
  ctx.fillStyle = "#3e2f28"; ctx.fillRect(w * 0.56, h * 0.42, w * 0.16, h * 0.06);
  ctx.fillStyle = "rgba(255,255,255,.8)"; ctx.beginPath();
  ctx.arc(w * 0.58, h * 0.36, w * 0.025, 0, Math.PI * 2); ctx.arc(w * 0.66, h * 0.32, w * 0.018, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#5b4034"; ctx.font = `700 ${w * 0.035}px Microsoft YaHei`;
  ctx.fillText(getRoomName("kitchen"), w * 0.5, h * 0.2);
}

function drawStudy(ctx, w, h) {
  roomBase(ctx, w, h, ["#e8f0ff", "#f7ead5", "#9b775d"]);
  drawLamp(ctx, w * 0.7, h * 0.34, w * 0.16, "#ffd37a");
  ctx.fillStyle = "#8e6f5d"; ctx.fillRect(w * 0.2, h * 0.55, w * 0.56, h * 0.08);
  ctx.fillStyle = "#fffdf8"; ctx.fillRect(w * 0.26, h * 0.35, w * 0.22, h * 0.16);
  ctx.fillStyle = "#537b97"; ctx.fillRect(w * 0.52, h * 0.34, w * 0.15, h * 0.17);
  ctx.fillStyle = "#d8743f"; ctx.fillRect(w * 0.3, h * 0.4, w * 0.14, h * 0.02); ctx.fillRect(w * 0.3, h * 0.45, w * 0.1, h * 0.02);
  ctx.fillStyle = "#5b4034"; ctx.font = `700 ${w * 0.035}px Microsoft YaHei`;
  ctx.fillText(getRoomName("study"), w * 0.5, h * 0.2);
}

function drawBedroom(ctx, w, h) {
  roomBase(ctx, w, h, ["#f0e4ff", "#ffe8d1", "#8f6b65"]);
  drawLamp(ctx, w * 0.2, h * 0.28, w * 0.18, "#e8b8a6");
  ctx.fillStyle = "#8aa6c1"; ctx.fillRect(w * 0.25, h * 0.5, w * 0.5, h * 0.16);
  ctx.fillStyle = "#fffdf8"; ctx.fillRect(w * 0.28, h * 0.44, w * 0.18, h * 0.1);
  ctx.fillStyle = "#d8efc6"; ctx.fillRect(w * 0.46, h * 0.46, w * 0.25, h * 0.08);
  ctx.fillStyle = "#5b4034"; ctx.font = `700 ${w * 0.035}px Microsoft YaHei`;
  ctx.fillText(getRoomName("bedroom"), w * 0.5, h * 0.2);
}

function drawBalcony(ctx, w, h) {
  roomBase(ctx, w, h, ["#dceeff", "#fff1c9", "#9f8060"]);
  const L = getTimeLighting();
  const lampAlpha = parseFloat((L[1].match(/[\d.]+\)$/) || ["0.5"])[0]);
  const g = ctx.createRadialGradient(w * 0.78, h * 0.22, 0, w * 0.78, h * 0.22, w * 0.24);
  g.addColorStop(0, `rgba(255,207,106,${Math.max(0.15, lampAlpha * 0.9)})`);
  g.addColorStop(1, "rgba(255,207,106,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#537b97"; ctx.fillRect(w * 0.14, h * 0.24, w * 0.34, h * 0.36);
  ctx.fillStyle = "#fffdf8"; ctx.fillRect(w * 0.18, h * 0.3, w * 0.26, h * 0.22);
  ctx.fillStyle = "#6f9c72"; ctx.beginPath(); ctx.arc(w * 0.68, h * 0.58, w * 0.09, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#5b4034"; ctx.font = `700 ${w * 0.035}px Microsoft YaHei`;
  ctx.fillText(getRoomName("balcony"), w * 0.5, h * 0.2);
}

function drawCameraRoom(ctx, w, h) {
  roomBase(ctx, w, h, ["#e5e0d8", "#b9d0c5", "#735a4b"]);
  ctx.fillStyle = "#2f2f34"; ctx.fillRect(w * 0.34, h * 0.3, w * 0.32, h * 0.22);
  ctx.fillStyle = "#537b97"; ctx.beginPath(); ctx.arc(w * 0.5, h * 0.41, w * 0.07, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#fffdf8"; ctx.lineWidth = 4; ctx.strokeRect(w * 0.12, h * 0.18, w * 0.76, h * 0.5);
  ctx.fillStyle = "#5b4034"; ctx.font = `700 ${w * 0.035}px Microsoft YaHei`;
  ctx.fillText(getRoomName("camera"), w * 0.5, h * 0.2);
}

function drawFox(ctx, x, y, s) {
  ctx.fillStyle = "#d97442";
  ctx.beginPath(); ctx.moveTo(x - s * 0.45, y - s * 0.28); ctx.lineTo(x - s * 0.18, y - s * 0.82);
  ctx.lineTo(x, y - s * 0.38); ctx.lineTo(x + s * 0.18, y - s * 0.82); ctx.lineTo(x + s * 0.45, y - s * 0.28);
  ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x, y, s * 0.5, s * 0.42, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#fff2df"; ctx.beginPath(); ctx.ellipse(x, y + s * 0.08, s * 0.32, s * 0.23, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#3e2a24"; ctx.beginPath();
  ctx.arc(x - s * 0.16, y - s * 0.05, s * 0.035, 0, Math.PI * 2);
  ctx.arc(x + s * 0.16, y - s * 0.05, s * 0.035, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(x, y + s * 0.05, s * 0.04, 0, Math.PI * 2); ctx.fill();
}

function drawOrange(ctx, x, y, s) {
  ctx.fillStyle = "#f28b38"; ctx.beginPath(); ctx.arc(x, y, s * 0.43, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#5ba36a"; ctx.beginPath(); ctx.ellipse(x + s * 0.1, y - s * 0.46, s * 0.18, s * 0.07, -0.35, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#fff7e7"; ctx.font = `700 ${s * 0.22}px Microsoft YaHei, sans-serif`;
  ctx.textAlign = "center"; ctx.fillText("橙子", x, y + s * 0.07);
}

/* ===== 语音输入 ===== */
let recognition = null;
let isListening = false;

function initVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceCallButton.style.display = "none";
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = "zh-CN";
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    messageInput.value = transcript;
    voiceStatus.textContent = `识别中：${transcript}`;
  };

  recognition.onerror = (event) => {
    voiceStatus.textContent = `语音识别出错：${event.error}`;
    stopListening();
  };

  recognition.onend = () => {
    if (isListening) {
      // 如果还在listen状态就重启（持续监听）
      try { recognition.start(); } catch { stopListening(); }
    }
  };
}

function toggleVoice() {
  if (!recognition) { addCameraLog("当前浏览器不支持语音识别，试试Chrome或Edge。"); return; }
  if (isListening) {
    stopListening();
  } else {
    startListening();
  }
}

function startListening() {
  isListening = true;
  voiceCallButton.classList.add("listening");
  voiceCallButton.textContent = "🔴";
  voiceStatus.style.display = "block";
  voiceStatus.textContent = "正在听你说话...";
  messageInput.placeholder = "正在语音输入...";
  try { recognition.start(); } catch { /* already started */ }
}

function stopListening() {
  isListening = false;
  voiceCallButton.classList.remove("listening");
  voiceCallButton.textContent = "🎤";
  voiceStatus.style.display = "none";
  messageInput.placeholder = "和江屿说话";
  try { recognition.stop(); } catch { /* already stopped */ }
}

/* ===== 页面切换 ===== */
function showChat() {
  setupPanel.classList.add("hidden");
  homeApp.classList.remove("hidden");
  renderProfile();
  seedCameraLogIfNeeded();
  renderCameraLog();
  updateFloorInfo();
  // 初始化时如果碎碎念为空，自动切一次镜头
  if (!state.cameraLog || state.cameraLog.length === 0) {
    triggerCamera("init");
  }
  messageInput.focus();
}

function showSetup() {
  // 不再清空聊天记录
  homeApp.classList.add("hidden");
  setupPanel.classList.remove("hidden");
  fillSetupForm();
}

/* ===== 事件绑定 ===== */
setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(setupForm).entries());
  // 保留旧config中表单没有的字段，合并新值
  state.config = {
    ...state.config,
    ...formData,
    apiEnabled: formData.apiEnabled === "on" ? "on" : ""
  };
  // 应用主题颜色
  applyTheme(state.config.themeColor);
  // 只重置房间视角，不清空聊天、碎碎念、记忆
  state.room = "living";
  state.meters = structuredClone(defaultState.meters);
  state.lastMood = "normal";
  saveState();
  showChat();
  // 保持或自动连接API
  if (!state.apiConnected) {
    autoConnectApi();
  }
});

// 本地图片上传：监听所有 image-file-input 的 change 事件
setupForm.addEventListener("change", (event) => {
  if (event.target.classList.contains("image-file-input")) {
    handleImageFileUpload(event.target);
  }
});

// 主题颜色实时预览
setupForm.addEventListener("input", (event) => {
  if (event.target.name === "themeColor") {
    applyTheme(event.target.value);
  }
});

messageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;
  addMessage("me", text);
  messageInput.value = "";
  renderMessages();
  respond(await makeSmartReply(text));
  saveState();
});

document.querySelectorAll(".room-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    state.room = button.dataset.room;
    renderRoom();
    saveState();
  });
});

document.querySelector("#surpriseButton").addEventListener("click", openSurprise);
document.querySelector("#noteButton").addEventListener("click", openNotes);
document.querySelector("#updateLibraryBtn").addEventListener("click", updateInteractionLibrary);
// 惊喜弹窗
document.querySelector("#genSurpriseBtn").addEventListener("click", async () => {
  await triggerSurprise();
  renderSurpriseToc();
});
document.querySelector("#clearSurpriseBtn").addEventListener("click", clearSurprises);
document.querySelector("#closeSurpriseBtn").addEventListener("click", closeSurprise);
document.querySelector("#collectSurpriseBtn").addEventListener("click", collectSurprise);
document.querySelector("#surpriseOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeSurprise();
});
// 惊喜筛选按钮
document.querySelector("#surpriseOverlay").addEventListener("click", (e) => {
  if (e.target.classList.contains("notes-filter-btn")) {
    _surpriseFilter = e.target.dataset.filter;
    _currentSurpriseIndex = -1;
    document.querySelector("#surpriseBody").innerHTML = '<p class="notes-empty">选一个惊喜看看，或点 🎲 来一个。</p>';
    document.querySelector("#collectSurpriseBtn").disabled = true;
    document.querySelectorAll("#surpriseOverlay .notes-filter-btn").forEach((b) => b.classList.toggle("active", b === e.target));
    renderSurpriseToc();
  }
});
// 小纸条弹窗
document.querySelector("#genNoteBtn").addEventListener("click", async () => {
  await maybeGenerateNote();
  renderNotesToc();
});
document.querySelector("#clearNotesBtn").addEventListener("click", clearNotes);
document.querySelector("#closeNotesBtn").addEventListener("click", closeNotes);
document.querySelector("#collectNoteBtn").addEventListener("click", collectNote);
document.querySelector("#notesOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeNotes();
});
// 小纸条筛选按钮
document.querySelector("#notesOverlay").addEventListener("click", (e) => {
  if (e.target.classList.contains("notes-filter-btn")) {
    _noteFilter = e.target.dataset.filter;
    _currentNoteIndex = -1;
    document.querySelector("#notesBody").innerHTML = '<p class="notes-empty">选一张纸条看看，或点 ＋ 生成新的。</p>';
    document.querySelector("#collectNoteBtn").disabled = true;
    document.querySelectorAll("#notesOverlay .notes-filter-btn").forEach((b) => b.classList.toggle("active", b === e.target));
    renderNotesToc();
  }
});
// 小纸条触发间隔
document.querySelector("#noteIntervalInput").addEventListener("change", function() {
  state.config.noteTriggerInterval = parseInt(this.value) || 20;
  saveState();
});
document.querySelector("#saveNoteInterval").addEventListener("click", function() {
  const input = document.querySelector("#noteIntervalInput");
  state.config.noteTriggerInterval = parseInt(input.value) || 20;
  saveState();
  addCameraLog(`📝 小纸条触发间隔已设为每${state.config.noteTriggerInterval}条消息。`);
});
// 惊喜触发间隔
document.querySelector("#surpriseIntervalInput").addEventListener("change", function() {
  state.config.surpriseTriggerInterval = parseInt(this.value) || 20;
  saveState();
});
document.querySelector("#saveSurpriseInterval").addEventListener("click", function() {
  const input = document.querySelector("#surpriseIntervalInput");
  state.config.surpriseTriggerInterval = parseInt(input.value) || 20;
  saveState();
  addCameraLog(`🎁 惊喜触发间隔已设为每${state.config.surpriseTriggerInterval}条消息。`);
});
document.querySelector("#cameraButton").addEventListener("click", triggerCamera);
document.querySelector("#refreshWeather").addEventListener("click", refreshWeather);
document.querySelector("#testApiConnection").addEventListener("click", testApiConnection);
document.querySelector("#disconnectApi").addEventListener("click", disconnectApi);
// API 预设地址快速填入
setupForm.addEventListener("click", (event) => {
  if (event.target.classList.contains("api-preset")) {
    const url = event.target.dataset.url;
    if (url) {
      setupForm.elements["baseUrl"].value = url;
      // 高亮当前选中
      setupForm.querySelectorAll(".api-preset").forEach((b) => b.classList.remove("active"));
      event.target.classList.add("active");
    }
  }
});
document.querySelector("#saveMemory").addEventListener("click", saveMemorySummary);
document.querySelector("#addMemoryBtn").addEventListener("click", addMemoryManually);
document.querySelector("#memoryReqsBtn").addEventListener("click", toggleMemoryReqs);
document.querySelector("#saveMemoryReqsBtn").addEventListener("click", saveMemoryReqsConfig);
document.querySelector("#confirmSaveMemory").addEventListener("click", confirmSaveMemory);
document.querySelector("#cancelSaveMemory").addEventListener("click", cancelSaveMemory);
document.querySelector("#exportWordBtn").addEventListener("click", exportChatToWord);
document.querySelector("#exportCameraLogBtn").addEventListener("click", exportCameraLogToWord);
document.querySelector("#applyFloorHide").addEventListener("click", applyFloorHide);
document.querySelector("#applyFloorShow").addEventListener("click", applyFloorShow);
document.querySelector("#showAllFloors").addEventListener("click", showAllFloors);
document.querySelector("#voiceCallButton").addEventListener("click", toggleVoice);

/* ===== 表情面板 ===== */
const emojiList = [
  "😊","🥰","😘","😍","❤️","💕","💋","✨",
  "😭","🥺","😢","😤","😠","🙄","😅","😂",
  "🤗","🫂","💪","👍","👏","🙏","🌹","🎀",
  "🍊","🦊","🏠","💤","🍳","☕","🎸","📖",
  "🐱","🐶","🌙","⭐","🔥","💧","🎵","💌",
  "🫶","💝","💗","💓","💞","💘","😚","😗"
];

const stickerLabels = [
  ["🫂抱抱","[抱抱]"],["😘亲亲","[亲亲]"],["🥺撒娇","[撒娇]"],["❤️爱你","[爱你]"],
  ["😤生气","[生气]"],["🤗摸头","[摸头]"],["🙄白眼","[白眼]"],["💪加油","[加油]"]
];

function buildEmojiGrid() {
  const grid = document.querySelector("#emojiGrid");
  if (!grid) return;
  grid.innerHTML = "";
  [...emojiList, ...stickerLabels.map((s) => s[0])].forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = emoji;
    btn.addEventListener("click", () => {
      const sticker = stickerLabels.find((s) => s[0] === emoji);
      messageInput.value += sticker ? sticker[1] : emoji;
      messageInput.focus();
    });
    grid.appendChild(btn);
  });
}

document.querySelector("#emojiButton").addEventListener("click", () => {
  const panel = document.querySelector("#emojiPanel");
  panel.classList.toggle("hidden");
  if (!panel.classList.contains("hidden")) buildEmojiGrid();
});

// 点击其他地方关闭表情面板
document.addEventListener("click", (e) => {
  const panel = document.querySelector("#emojiPanel");
  const btn = document.querySelector("#emojiButton");
  if (panel && btn && !panel.classList.contains("hidden") && !panel.contains(e.target) && e.target !== btn) {
    panel.classList.add("hidden");
  }
});

document.querySelector("#peekStatus").addEventListener("click", () => {
  deriveStatus("peek"); renderStatus(); saveState();
});
document.querySelector("#refreshChatThought").addEventListener("click", () => {
  refreshChatSyncManually();
});
document.querySelector("#refreshChatCamera").addEventListener("click", () => {
  refreshChatSyncManually();
});
document.querySelector("#clearStatus").addEventListener("click", () => {
  state.status.thought = "这条状态被橙子藏起来了。江屿没生气，只是笑了一下。";
  renderStatus(); saveState();
});

document.querySelector("#clearCameraLog").addEventListener("click", () => {
  if (confirm("确定要清空全部碎碎念记录吗？此操作不可恢复。")) {
    state.cameraLog = [];
    state.lastCameraShot = cameraShotForHour(hourInZone(state.config.timezone));
    seedCameraLogIfNeeded();
    renderCameraLog();
    saveState();
  }
});
document.querySelector("#editSetup").addEventListener("click", showSetup);
document.querySelector("#manualSave").addEventListener("click", manualSaveToDisk);
document.querySelector("#backToSetup").addEventListener("click", showSetup);
// 色色记事本
document.querySelector("#closeNotebook").addEventListener("click", closeNotebook);
document.querySelector("#saveNotebookEntry").addEventListener("click", saveNotebookEntry);
document.querySelector("#regenerateNotebook").addEventListener("click", regenerateNotebook);
document.querySelector("#newNotebookEntry").addEventListener("click", openIntimateNotebook);
document.querySelector("#toggleNotebookReqs").addEventListener("click", toggleNotebookReqs);
document.querySelector("#saveNotebookReqs").addEventListener("click", saveNotebookReqs);
document.querySelector("#notebookOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeNotebook();
});
document.querySelector("#clearChat").addEventListener("click", () => {
  state.messages = []; state.floorHidden = [];
  document.querySelector("#hideFloorFrom").value = "";
  document.querySelector("#hideFloorTo").value = "";
  saveState(); renderMessages();
});

/* ===== 进门密码 ===== */
const gateOverlay = document.querySelector("#gateOverlay");
const gateForm = document.querySelector("#gateForm");
const gateInput = document.querySelector("#gateInput");
const gateError = document.querySelector("#gateError");

function spawnHearts() {
  const container = document.querySelector("#heartsContainer");
  const hearts = ["💕", "❤️", "💗", "💖", "💝", "🩷", "💓", "🦊", "🍊"];
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");
    particle.className = "heart-particle";
    particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.fontSize = (20 + Math.random() * 40) + "px";
    particle.style.animationDuration = (2 + Math.random() * 3) + "s";
    particle.style.animationDelay = Math.random() * 1.5 + "s";
    container.appendChild(particle);
  }
  // 动画结束后清理
  setTimeout(() => { container.innerHTML = ""; }, 5000);
}

gateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer = gateInput.value.trim();
  if (answer === "江屿") {
    gateError.classList.add("hidden");
    spawnHearts();
    setTimeout(() => {
      gateOverlay.classList.add("fade-out");
    }, 800);
  } else {
    gateError.classList.remove("hidden");
    gateInput.value = "";
    gateInput.focus();
  }
});

// 页面加载时自动聚焦输入框
gateInput.focus();

/* ===== 初始化 ===== */
applyTheme();
fillSetupForm();
showChat();
repairCameraLogModule();
initVoiceRecognition();
autoConnectApi();
setInterval(renderTimes, 1000);
setInterval(renderPhysioData, 2000);
window.addEventListener("pageshow", repairCameraLogModule);
document.addEventListener("DOMContentLoaded", repairCameraLogModule);
setTimeout(repairCameraLogModule, 300);
