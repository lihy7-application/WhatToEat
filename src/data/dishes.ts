import { Dish } from '@/types';

export const dishes: Dish[] = [
  // 川菜
  { id: '1', name: '麻婆豆腐', cuisine: '川菜', tags: ['辣', '麻辣', '豆腐'], ingredients: ['豆腐', '肉末', '花椒', '豆瓣酱'] },
  { id: '2', name: '宫保鸡丁', cuisine: '川菜', tags: ['辣', '酸甜', '鸡肉'], ingredients: ['鸡胸肉', '花生', '干辣椒', '黄瓜'] },
  { id: '3', name: '水煮鱼', cuisine: '川菜', tags: ['辣', '麻辣', '鱼肉'], ingredients: ['鱼肉', '豆芽', '辣椒', '花椒'] },
  { id: '4', name: '回锅肉', cuisine: '川菜', tags: ['辣', '下饭菜', '猪肉'], ingredients: ['五花肉', '蒜苗', '豆瓣酱', '甜面酱'] },
  { id: '5', name: '鱼香肉丝', cuisine: '川菜', tags: ['酸甜', '辣', '猪肉'], ingredients: ['猪里脊', '木耳', '胡萝卜', '泡椒'] },
  { id: '6', name: '辣子鸡', cuisine: '川菜', tags: ['辣', '炸', '鸡肉'], ingredients: ['鸡块', '干辣椒', '花椒', '芝麻'] },
  { id: '7', name: '毛血旺', cuisine: '川菜', tags: ['辣', '麻辣', '内脏'], ingredients: ['鸭血', '毛肚', '豆芽', '郫县豆瓣'] },
  { id: '8', name: '口水鸡', cuisine: '川菜', tags: ['辣', '麻辣', '鸡肉', '凉菜'], ingredients: ['鸡肉', '花椒', '辣椒油', '花生碎'] },

  // 粤菜
  { id: '9', name: '白切鸡', cuisine: '粤菜', tags: ['清淡', '鸡肉', '原味'], ingredients: ['鸡肉', '姜', '葱', '酱油'] },
  { id: '10', name: '叉烧', cuisine: '粤菜', tags: ['甜', '猪肉', '烧腊'], ingredients: ['猪肉', '叉烧酱', '蜂蜜', '酱油'] },
  { id: '11', name: '虾饺', cuisine: '粤菜', tags: ['清淡', '海鲜', '点心'], ingredients: ['虾仁', '猪肉', '竹笋', '澄面'] },
  { id: '12', name: '烧鹅', cuisine: '粤菜', tags: ['香脆', '肉类', '烧腊'], ingredients: ['鹅肉', '麦芽糖', '五香粉', '蒜'] },
  { id: '13', name: '清蒸鲈鱼', cuisine: '粤菜', tags: ['清淡', '海鲜', '蒸'], ingredients: ['鲈鱼', '葱', '姜', '酱油'] },
  { id: '14', name: '萝卜糕', cuisine: '粤菜', tags: ['清淡', '素食', '点心'], ingredients: ['萝卜', '粘米粉', '腊肠', '虾米'] },
  { id: '15', name: '煲仔饭', cuisine: '粤菜', tags: ['香', '饭类', '腊味'], ingredients: ['米饭', '腊肠', '鸡蛋', '青菜'] },
  { id: '16', name: '云吞面', cuisine: '粤菜', tags: ['清淡', '面食', '汤面'], ingredients: ['云吞', '面条', '高汤', '葱花'] },

  // 湘菜
  { id: '17', name: '剁椒鱼头', cuisine: '湘菜', tags: ['辣', '鱼头', '蒸'], ingredients: ['鱼头', '剁椒', '豆豉', '葱姜'] },
  { id: '18', name: '小炒肉', cuisine: '湘菜', tags: ['辣', '下饭菜', '猪肉'], ingredients: ['五花肉', '青椒', '豆豉', '蒜'] },
  { id: '19', name: '臭豆腐', cuisine: '湘菜', tags: ['臭', '炸', '豆腐'], ingredients: ['豆腐', '辣椒', '蒜泥', '香菜'] },
  { id: '20', name: '口味虾', cuisine: '湘菜', tags: ['辣', '麻辣', '海鲜'], ingredients: ['小龙虾', '紫苏', '辣椒', '啤酒'] },
  { id: '21', name: '腊味合蒸', cuisine: '湘菜', tags: ['香', '腊味', '蒸'], ingredients: ['腊肉', '腊肠', '豆豉', '干辣椒'] },
  { id: '22', name: '东安鸡', cuisine: '湘菜', tags: ['酸', '辣', '鸡肉'], ingredients: ['鸡肉', '米醋', '辣椒', '姜丝'] },

  // 鲁菜
  { id: '23', name: '糖醋里脊', cuisine: '鲁菜', tags: ['酸甜', '炸', '猪肉'], ingredients: ['猪里脊', '番茄酱', '醋', '糖'] },
  { id: '24', name: '九转大肠', cuisine: '鲁菜', tags: ['香', '肥肠', '鲁菜经典'], ingredients: ['猪大肠', '葱姜', '花椒', '酱油'] },
  { id: '25', name: '葱烧海参', cuisine: '鲁菜', tags: ['鲜', '海鲜', '滋补'], ingredients: ['海参', '大葱', '高汤', '酱油'] },
  { id: '26', name: '德州扒鸡', cuisine: '鲁菜', tags: ['香', '鸡肉', '卤'], ingredients: ['鸡肉', '香料', '酱油', '高汤'] },
  { id: '27', name: '油爆双脆', cuisine: '鲁菜', tags: ['鲜', '脆', '海鲜'], ingredients: ['海螺', '猪肚', '葱姜', '料酒'] },

  // 苏菜
  { id: '28', name: '松鼠桂鱼', cuisine: '苏菜', tags: ['酸甜', '鱼', '苏菜经典'], ingredients: ['鳜鱼', '番茄酱', '松子', '淀粉'] },
  { id: '29', name: '红烧肉', cuisine: '苏菜', tags: ['甜', '猪肉', '下饭菜'], ingredients: ['五花肉', '冰糖', '酱油', '料酒'] },
  { id: '30', name: '狮子头', cuisine: '苏菜', tags: ['清淡', '猪肉', '炖'], ingredients: ['猪肉', '马蹄', '葱姜', '淀粉'] },
  { id: '31', name: '盐水鸭', cuisine: '苏菜', tags: ['清淡', '鸭肉', '卤'], ingredients: ['鸭肉', '盐', '花椒', '葱姜'] },
  { id: '32', name: '蟹粉小笼', cuisine: '苏菜', tags: ['鲜', '点心', '海鲜'], ingredients: ['蟹肉', '猪肉', '皮冻', '面粉'] },

  // 浙菜
  { id: '33', name: '东坡肉', cuisine: '浙菜', tags: ['甜', '猪肉', '卤'], ingredients: ['五花肉', '黄酒', '酱油', '冰糖'] },
  { id: '34', name: '龙井虾仁', cuisine: '浙菜', tags: ['清淡', '海鲜', '茶香'], ingredients: ['虾仁', '龙井茶', '葱姜', '料酒'] },
  { id: '35', name: '叫化鸡', cuisine: '浙菜', tags: ['香', '鸡肉', '煨'], ingredients: ['鸡肉', '荷叶', '泥土', '调料'] },
  { id: '36', name: '西湖醋鱼', cuisine: '浙菜', tags: ['酸甜', '鱼', '浙菜经典'], ingredients: ['草鱼', '醋', '糖', '姜丝'] },
  { id: '37', name: '片儿川', cuisine: '浙菜', tags: ['鲜', '面食', '杭州特色'], ingredients: ['面条', '雪菜', '笋片', '肉片'] },

  // 闽菜
  { id: '38', name: '佛跳墙', cuisine: '闽菜', tags: ['鲜', '滋补', '汤'], ingredients: ['鲍鱼', '海参', '鱼翅', '鸡肉'] },
  { id: '39', name: '沙茶面', cuisine: '闽菜', tags: ['香', '面食', '沙茶'], ingredients: ['面条', '沙茶酱', '豆干', '海鲜'] },
  { id: '40', name: '肉夹馍', cuisine: '闽菜', tags: ['香', '面食', '猪肉'], ingredients: ['白吉馍', '卤肉', '青椒', '卤汁'] },
  { id: '41', name: '土笋冻', cuisine: '闽菜', tags: ['凉', '海鲜', '福建特色'], ingredients: ['海虫', '酱油', '醋', '蒜泥'] },
  { id: '42', name: '海蛎煎', cuisine: '闽菜', tags: ['香', '海鲜', '煎'], ingredients: ['海蛎', '地瓜粉', '鸡蛋', '葱花'] },

  // 徽菜
  { id: '43', name: '臭鳜鱼', cuisine: '徽菜', tags: ['臭', '鱼', '徽菜经典'], ingredients: ['鳜鱼', '笋', '肉片', '辣椒'] },
  { id: '44', name: '徽州毛豆腐', cuisine: '徽菜', tags: ['霉香', '豆腐', '煎'], ingredients: ['毛豆腐', '辣椒', '酱油', '葱姜'] },
  { id: '45', name: '红烧果子狸', cuisine: '徽菜', tags: ['香', '野味', '红烧'], ingredients: ['果子狸', '酱油', '冰糖', '料酒'] },
  { id: '46', name: '火腿炖甲鱼', cuisine: '徽菜', tags: ['鲜', '滋补', '汤'], ingredients: ['甲鱼', '火腿', '笋', '姜'] },
  { id: '47', name: '符离集烧鸡', cuisine: '徽菜', tags: ['香', '鸡肉', '烧'], ingredients: ['鸡肉', '香料', '酱油', '蜂蜜'] },

  // 日料
  { id: '48', name: '刺身拼盘', cuisine: '日料', tags: ['生', '海鲜', '清淡'], ingredients: ['三文鱼', '金枪鱼', '北极贝', '酱油'] },
  { id: '49', name: '味噌汤', cuisine: '日料', tags: ['清淡', '汤', '日式'], ingredients: ['味噌', '豆腐', '海带', '葱花'] },
  { id: '50', name: '天妇罗', cuisine: '日料', tags: ['炸', '海鲜', '蔬菜'], ingredients: ['虾', '南瓜', '紫苏', '天妇罗粉'] },
  { id: '51', name: '鳗鱼饭', cuisine: '日料', tags: ['香', '米饭', '鳗鱼'], ingredients: ['鳗鱼', '米饭', '酱油', '海苔'] },
  { id: '52', name: '拉面', cuisine: '日料', tags: ['汤面', '面食', '日式'], ingredients: ['面条', '叉烧', '溏心蛋', '海苔'] },
  { id: '53', name: '寿司', cuisine: '日料', tags: ['生', '海鲜', '米饭'], ingredients: ['米饭', '醋', '生鱼片', '蔬菜'] },
  { id: '54', name: '章鱼小丸子', cuisine: '日料', tags: ['炸', '海鲜', '小吃'], ingredients: ['章鱼', '章鱼烧粉', '木鱼花', '酱汁'] },
  { id: '55', name: '和风沙拉', cuisine: '日料', tags: ['清淡', '素食', '沙拉'], ingredients: ['生菜', '黄瓜', '海藻', '和风酱'] },

  // 意式西餐
  { id: '56', name: '意大利面', cuisine: '意式', tags: ['面食', '番茄', '西餐'], ingredients: ['意面', '番茄', '洋葱', '蒜'] },
  { id: '57', name: '披萨', cuisine: '意式', tags: ['芝士', '烤', '西餐'], ingredients: ['面饼', '番茄酱', '马苏里拉', '配料'] },
  { id: '58', name: '提拉米苏', cuisine: '意式', tags: ['甜', '芝士', '甜点'], ingredients: ['马斯卡彭', '手指饼干', '咖啡', '可可'] },
  { id: '59', name: '意式烩饭', cuisine: '意式', tags: ['奶香', '米饭', '西餐'], ingredients: ['米', '洋葱', '白葡萄酒', '帕玛森'] },
  { id: '60', name: '卡布奇诺', cuisine: '意式', tags: ['咖啡', '奶泡', '饮品'], ingredients: ['浓缩咖啡', '牛奶', '奶泡'] },

  // 法式西餐
  { id: '61', name: '法式蜗牛', cuisine: '法式', tags: ['香', '海鲜', '法餐经典'], ingredients: ['蜗牛', '大蒜', '欧芹', '黄油'] },
  { id: '62', name: '鹅肝', cuisine: '法式', tags: ['香', '滋补', '法餐'], ingredients: ['鹅肝', '无花果', '面包', '盐'] },
  { id: '63', name: '牛排', cuisine: '法式', tags: ['肉', '煎', '西餐'], ingredients: ['牛排', '黄油', '迷迭香', '蒜'] },
  { id: '64', name: '舒芙蕾', cuisine: '法式', tags: ['甜', '蓬松', '甜点'], ingredients: ['鸡蛋', '糖', '牛奶', '面粉'] },
  { id: '65', name: '洋葱汤', cuisine: '法式', tags: ['香', '汤', '法餐'], ingredients: ['洋葱', '牛肉汤', '奶酪', '面包'] },

  // 美式西餐
  { id: '66', name: '汉堡', cuisine: '美式', tags: ['肉', '快餐', '芝士'], ingredients: ['牛肉饼', '面包', '生菜', '番茄'] },
  { id: '67', name: '薯条', cuisine: '美式', tags: ['炸', '土豆', '快餐'], ingredients: ['土豆', '盐', '番茄酱'] },
  { id: '68', name: '炸鸡', cuisine: '美式', tags: ['炸', '鸡肉', '快餐'], ingredients: ['鸡肉', '面粉', '调料', '油'] },
  { id: '69', name: '热狗', cuisine: '美式', tags: ['肉', '快餐', '肠'], ingredients: ['香肠', '面包', '芥末', '番茄酱'] },
  { id: '70', name: '苹果派', cuisine: '美式', tags: ['甜', '水果', '甜点'], ingredients: ['苹果', '面粉', '黄油', '糖'] },

  // 快餐/简餐
  { id: '71', name: '炒饭', cuisine: '简餐', tags: ['炒', '米饭', '快捷'], ingredients: ['米饭', '鸡蛋', '葱', '酱油'] },
  { id: '72', name: '炒面', cuisine: '简餐', tags: ['炒', '面食', '快捷'], ingredients: ['面条', '蔬菜', '酱油', '油'] },
  { id: '73', name: '煎饺', cuisine: '简餐', tags: ['煎', '面食', '快捷'], ingredients: ['饺子', '油', '酱油', '醋'] },
  { id: '74', name: '盖浇饭', cuisine: '简餐', tags: ['米饭', '快捷', '下饭菜'], ingredients: ['米饭', '卤汁', '蔬菜', '肉'] },
  { id: '75', name: '沙县小吃', cuisine: '简餐', tags: ['快捷', '小吃', '中式'], ingredients: ['拌面', '扁肉', '蒸饺', '汤'] },
  { id: '76', name: '麻辣烫', cuisine: '简餐', tags: ['辣', '串串', '快捷'], ingredients: ['各种丸子类', '蔬菜', '豆制品', '麻辣汤底'] },
  { id: '77', name: '黄焖鸡米饭', cuisine: '简餐', tags: ['焖', '米饭', '鸡肉'], ingredients: ['鸡肉', '土豆', '米饭', '酱汁'] },
  { id: '78', name: '兰州拉面', cuisine: '简餐', tags: ['面食', '汤面', '快捷'], ingredients: ['面条', '牛肉', '萝卜', '香菜'] },
  { id: '79', name: '煎饼果子', cuisine: '简餐', tags: ['煎', '面食', '快捷'], ingredients: ['面糊', '鸡蛋', '薄脆', '酱料'] },
  { id: '80', name: '肠粉', cuisine: '简餐', tags: ['蒸', '米香', '广东'], ingredients: ['米浆', '虾仁', '叉烧', '酱油'] },

  // 东南亚
  { id: '81', name: '冬阴功汤', cuisine: '东南亚', tags: ['酸辣', '汤', '海鲜'], ingredients: ['虾', '草菇', '冬阴功酱', '椰浆'] },
  { id: '82', name: '泰式咖喱', cuisine: '东南亚', tags: ['辣', '咖喱', '椰香'], ingredients: ['鸡肉', '咖喱酱', '椰浆', '土豆'] },
  { id: '83', name: '越南春卷', cuisine: '东南亚', tags: ['清淡', '炸', '蔬菜'], ingredients: ['米纸', '虾仁', '蔬菜', '薄荷'] },
  { id: '84', name: '海南鸡饭', cuisine: '东南亚', tags: ['清淡', '鸡肉', '米饭'], ingredients: ['鸡肉', '米饭', '姜', '酱油'] },
  { id: '85', name: '肉骨茶', cuisine: '东南亚', tags: ['汤', '药材', '猪肉'], ingredients: ['排骨', '药材', '蒜', '酱油'] },

  // 韩式
  { id: '86', name: '烤肉', cuisine: '韩式', tags: ['烤肉', '肉类', '韩餐'], ingredients: ['牛肉', '猪肉', '酱料', '生菜'] },
  { id: '87', name: '泡菜', cuisine: '韩式', tags: ['酸', '发酵', '素食'], ingredients: ['白菜', '辣椒粉', '蒜', '姜'] },
  { id: '88', name: '石锅拌饭', cuisine: '韩式', tags: ['拌饭', '米饭', '韩餐'], ingredients: ['米饭', '蔬菜', '煎蛋', '韩式辣酱'] },
  { id: '89', name: '韩式炸鸡', cuisine: '韩式', tags: ['炸', '鸡肉', '甜辣'], ingredients: ['鸡肉', '炸粉', '韩式酱料', '芝麻'] },
  { id: '90', name: '大酱汤', cuisine: '韩式', tags: ['汤', '酱', '韩餐'], ingredients: ['大酱', '豆腐', '蔬菜', '海鲜'] },

  // 其他/融合
  { id: '91', name: '咖喱饭', cuisine: '融合', tags: ['咖喱', '米饭', '香料'], ingredients: ['米饭', '咖喱块', '土豆', '胡萝卜'] },
  { id: '92', name: '三明治', cuisine: '融合', tags: ['冷餐', '面包', '快捷'], ingredients: ['面包', '生菜', '肉', '芝士'] },
  { id: '93', name: '沙拉', cuisine: '融合', tags: ['健康', '素食', '清淡'], ingredients: ['生菜', '番茄', '黄瓜', '沙拉酱'] },
  { id: '94', name: '奶茶', cuisine: '融合', tags: ['甜', '饮品', '茶'], ingredients: ['茶叶', '牛奶', '糖', '珍珠'] },
  { id: '95', name: '水果捞', cuisine: '融合', tags: ['甜', '水果', '健康'], ingredients: ['各种水果', '椰汁', '西米', '糖'] },
  { id: '96', name: '火锅', cuisine: '中餐', tags: ['煮', '社交', '丰富'], ingredients: ['各种肉类', '蔬菜', '豆制品', '火锅底料'] },
  { id: '97', name: '烧烤', cuisine: '中餐', tags: ['烤', '肉类', '社交'], ingredients: ['各种肉类', '蔬菜', '孜然', '辣椒'] },
  { id: '98', name: '饺子', cuisine: '中餐', tags: ['蒸/煮', '面食', '传统'], ingredients: ['面粉', '猪肉', '蔬菜', '酱油'] },
  { id: '99', name: '包子', cuisine: '中餐', tags: ['蒸', '面食', '早餐'], ingredients: ['面粉', '肉', '菜', '酵母'] },
  { id: '100', name: '粥', cuisine: '中餐', tags: ['清淡', '流食', '养胃'], ingredients: ['大米', '水', '配料', '盐'] },
];

export const cuisines = [...new Set(dishes.map(d => d.cuisine))];
export const allTags = [...new Set(dishes.flatMap(d => d.tags))];
export const allIngredients = [...new Set(dishes.flatMap(d => d.ingredients))];
