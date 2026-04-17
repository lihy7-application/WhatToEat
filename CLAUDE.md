# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

WhatToEat - 每日食谱推荐 Windows 桌面应用，基于 Tauri 2.x (Rust + Web)。

## 常用命令

```bash
# 前端开发
npm run dev          # 启动 Vite 开发服务器
npm run build        # 构建前端（TypeScript 检查 + Vite 构建）
npm run lint         # ESLint 检查
npm run preview      # 预览构建结果

# Tauri 开发
npm run tauri dev    # 启动完整 Tauri 应用（开发模式）
npm run tauri build  # 构建 Tauri 应用
```

## 架构

### 技术栈
- **前端**: React 18 + TypeScript + Vite + Tailwind CSS
- **桌面框架**: Tauri 2.x (Rust)
- **后端服务**: Firebase (Auth + Firestore)

### 目录结构
```
src/                  # React 前端源码
  types/index.ts      # 核心类型定义（User, Dish, HistoryRecord, Recommendation）
  services/firebase.ts # Firebase 初始化
  components/         # React 组件
  hooks/              # 自定义 Hooks
  pages/              # 页面组件

src-tauri/            # Rust 后端（Tauri）
  src/lib.rs          # Tauri 入口
  tauri.conf.json     # Tauri 配置
```

### 路径别名
`@/*` 指向 `src/*`，例如 `import App from '@/App'`

### Firebase 配置
Firebase 配置位于 `src/services/firebase.ts`，需替换占位符为实际项目配置。

### 数据模型
见 `src/types/index.ts`：
- `Dish` - 菜品（id, name, cuisine, tags, ingredients）
- `User` - 用户（id, email, preferences）
- `HistoryRecord` - 历史推荐记录（dishId, feedback, timestamps）
- `Recommendation` - 推荐结果（dish + score）

### 数据文件
| 文件 | 说明 |
|------|------|
| `src/data/restaurants.ts` | 候选餐厅列表（30+餐厅，含分类和菜系标签） |
| `src/data/dishes.ts` | 菜品数据 |
| `src/data/weeklyMenu.ts` / `weeklyMenu.json` | 每周菜单配置 |

**餐厅分类**：`fast_food`（快餐）、`chinese`（中式）、`buffet`（自助餐）、`home_kitchen`（妈妈厨房）


## 要求
1. 你的候选窗口必须是 E:\application\WhatToEat\src\data\restaurants.ts 里面出现的。
2. 后续生成的一些记录和规则，都放在当前项目，仅针对当前项目有效。
3. 应用界面是中文