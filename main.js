
//ES6バージョン
// dotenvモジュールを利用するための設定
import dotenv from 'dotenv';
dotenv.config();

// 環境変数を取得
const name = process.env.NAME;
const number = process.env.NUMBER;

// message.jsモジュールをインポート
import { create } from './message.js';

// create 関数を使用してメッセージを生成
const result = create(name, number);


// fsモジュールを利用して、結果を外部ファイル「result.txt」に書き出す
import fs from 'fs';
fs.writeFileSync('result.txt', result);
