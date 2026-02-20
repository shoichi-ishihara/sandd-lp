# S&D株式会社 コーポレートサイト

S&D株式会社のランディングページです。Next.js 14、TypeScript、Tailwind CSSを使用して構築されています。

## 特徴

- 🎨 洗練されたダークテーマデザイン（Midnight Board）
- 📱 完全レスポンシブ対応
- ⚡ Next.js 14による高速パフォーマンス
- 🎯 スムーススクロールナビゲーション
- 🔧 TypeScriptによる型安全性
- 🎭 Tailwind CSSによる効率的なスタイリング

## 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: React Icons
- **デプロイ**: Vercel

## セットアップ手順

### 前提条件

- Node.js 18以上がインストールされていること
- npm、yarn、またはpnpmがインストールされていること

### インストール

1. 依存関係をインストール

```bash
npm install
# または
yarn install
# または
pnpm install
```

### 開発環境での実行

開発サーバーを起動します：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

ファイルを編集すると、ページが自動的に更新されます。

### ビルド

本番環境用のビルドを作成します：

```bash
npm run build
# または
yarn build
# または
pnpm build
```

### 本番環境での実行

ビルド後、本番モードで実行します：

```bash
npm start
# または
yarn start
# または
pnpm start
```

## プロジェクト構造

```
SandD_LP/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # ルートレイアウト
│   │   ├── page.tsx          # ホームページ
│   │   └── globals.css       # グローバルスタイル
│   ├── components/
│   │   ├── Header.tsx        # ヘッダーコンポーネント
│   │   ├── Hero.tsx          # ヒーローセクション
│   │   ├── CompanyProfile.tsx # 会社概要
│   │   ├── Vision.tsx        # ビジョン
│   │   ├── Services.tsx      # 事業内容
│   │   ├── News.tsx          # お知らせ
│   │   └── Footer.tsx        # フッター
│   └── data/
│       ├── company.ts        # 会社情報データ
│       ├── vision.ts         # ビジョンデータ
│       ├── services.ts       # サービスデータ
│       └── news.ts           # ニュースデータ
├── public/                   # 静的ファイル
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## カスタマイズ

### コンテンツの編集

各セクションのコンテンツは `src/data/` ディレクトリ内のファイルで管理されています：

- `company.ts`: 会社概要の情報
- `vision.ts`: ビジョン、ミッション、バリューの情報
- `services.ts`: 事業内容の詳細
- `news.ts`: お知らせ一覧

これらのファイルを編集することで、簡単にコンテンツを更新できます。

### デザインのカスタマイズ

デザインは `tailwind.config.js` で定義されているカラーパレットを編集することで変更できます：

```javascript
colors: {
  primary: '#1e3a8a',
  secondary: '#111827',
  background: '#030712',
  surface: '#111827',
  textPrimary: '#f9fafb',
  textSecondary: '#9ca3af',
  accent: '#60a5fa',
  border: '#374151',
}
```

## Vercelへのデプロイ

### 方法1: Vercel CLIを使用

1. Vercel CLIをインストール：

```bash
npm i -g vercel
```

2. プロジェクトをデプロイ：

```bash
vercel
```

3. 指示に従って設定を完了

### 方法2: GitHubと連携

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com)にアクセスしてログイン
3. "New Project"をクリック
4. GitHubリポジトリをインポート
5. 自動的にビルドとデプロイが実行されます

### デプロイ設定

`next.config.js` で静的エクスポートが設定されています：

```javascript
output: 'export',
images: {
  unoptimized: true,
}
```

これにより、Vercelで最適なパフォーマンスが得られます。

## ライセンス

© 2026 S&D Corporation. All rights reserved.

## お問い合わせ

ご質問やサポートが必要な場合は、お気軽にお問い合わせください。

- Email: info@sandd-corp.co.jp
- Website: [https://sandd-corp.co.jp](https://sandd-corp.co.jp)
