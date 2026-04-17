/**
 * 候选餐厅列表
 * 用于每日食谱推荐应用
 */

export interface Restaurant {
  id: string;
  name: string;
  category: 'fast_food' | 'chinese' | 'buffet' | 'home_kitchen';
  cuisine?: string; // 菜系标签
}

export const restaurantCandidates: Restaurant[] = [
  // 按用户提供顺序排列
  { id: 'jianmian', name: '见面', category: 'chinese' },
  { id: 'zhizun_shaola', name: '至尊烧腊', category: 'chinese', cuisine: '粤菜' },
  { id: 'baogui', name: '煲掌柜', category: 'chinese' },
  { id: 'shengtang_niuniu', name: '生烫牛肉米线', category: 'chinese', cuisine: '米线' },
  { id: 'xiangli_huoyan', name: '湘里烟火', category: 'chinese', cuisine: '湘菜' },
  { id: 'mychuanzao', name: 'My川灶', category: 'chinese', cuisine: '川菜' },
  { id: 'xiangli_xiangwei', name: '湘里湘味', category: 'chinese', cuisine: '湘菜' },
  { id: 'buffet_island', name: '自助餐岛', category: 'buffet' },
  { id: 'chucaoshaoli', name: '大厨小灶', category: 'chinese' },
  { id: 'wuyuan_zhengxian', name: '一碗蒸鲜', category: 'chinese', cuisine: '蒸菜' },
  { id: 'gaomaxiaoxian', name: '盖码鲜生', category: 'chinese' },
  { id: 'nuanfu_xiaozhu', name: '暖釜小煮', category: 'chinese' },
  { id: 'baoxiaxia', name: '煲小侠', category: 'chinese' },
  { id: 'chaoweiyanjiusuo', name: '潮味研究所', category: 'chinese', cuisine: '潮汕菜' },
  { id: 'quanyi_fen', name: '悟一粉', category: 'chinese', cuisine: '粉面' },
  { id: 'niuniumianfang', name: '牛王面坊', category: 'chinese', cuisine: '面食' },
  { id: 'island_lunch', name: '餐岛（午餐）', category: 'buffet' },
  { id: 'island_dinner', name: '餐岛（晚餐）', category: 'buffet' },
  { id: 'xiaowan_zhengxian', name: '小碗蒸鲜', category: 'chinese', cuisine: '蒸菜' },
  { id: 'yangguofu', name: '杨国福', category: 'fast_food', cuisine: '麻辣烫' },
  { id: 'chuangshan_jinshan', name: '创膳金牌烧鹅', category: 'chinese', cuisine: '粤菜' },
  { id: 'gangying', name: '港盈茶餐厅', category: 'chinese', cuisine: '港式' },
  { id: 'chencengfu', name: '陈香贵', category: 'chinese', cuisine: '面食' },
  { id: 'baifumianjia', name: '佰福面家', category: 'chinese', cuisine: '面食' },
  { id: 'cangjingshoushi', name: '苍井寿司', category: 'chinese', cuisine: '日料' },
  { id: 'shaoshui_fen', name: '渝悦少水粉', category: 'chinese', cuisine: '重庆小面' },
  { id: 'kfc', name: 'KFC', category: 'fast_food', cuisine: '西式快餐' },
  { id: 'heixiongjizhou', name: '熊记鸡粥', category: 'chinese', cuisine: '粤菜' },
  { id: 'liujiao', name: '六饺', category: 'chinese', cuisine: '饺子' },
  { id: 'chenzufu', name: '陈祖父', category: 'chinese' },
  { id: 'heishixiong', name: '禾师兄', category: 'chinese' },
  { id: 'subway', name: '赛百味', category: 'fast_food', cuisine: '西式快餐' },
  { id: 'cai_mingwei', name: '蔡明炜', category: 'chinese' },
  { id: 'sc_yueyue', name: '四川-粤粤妈妈厨房', category: 'home_kitchen', cuisine: '川菜' },
  { id: 'ah_beida', name: '安徽-北大妈妈厨房', category: 'home_kitchen', cuisine: '徽菜' },
  { id: 'gd_xiaochu', name: '广东-小厨妈妈厨房', category: 'home_kitchen', cuisine: '粤菜' },
];

export default restaurantCandidates;
