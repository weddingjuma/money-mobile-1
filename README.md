# money-mobile

現金網手機版前端

## Build Setup

``` bash
# install dependencies
## use npm
npm run npmInit

## use yarn
yarn run init

# setting
node setConfig `API_URL` `SITE_DOMAIN`

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Application Structure

```
|-- build                 #webpack相關
|-- config                #環境配置
|-- dist                  #專案建置輸出目錄
|-- node_modules
|-- src
    |-- assets
        |-- images        #圖片
        |-- scss          #全域scss
    |-- components        #vue元件
        |-- form          #表單元件
    |-- helper            #小工具
    |-- hq-money-services
    |-- hq-money-stores
    |-- locales           #語系檔案
    |-- pages             #路由的頁面元件
    |-- routes            #路由目錄
    |-- validators        #欄位驗證的設定檔
|-- static                #靜態資源目錄
```
