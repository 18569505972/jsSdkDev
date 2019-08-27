# jsSdkDev
js压缩、转码小工具 
## 使用
```
// 克隆本项目
git clone git@github.com:18569505972/jsSdkDev.git
// 下载依赖
cnpm install
// 修改配置文件
config/index.js
// 打包
gulp
```
## 项目目录
│  .babelrc         // babel配置文件  
│  gulpfile.js      // gulp打包配置文件  
│  package-lock.json  
│  package.json  
│  README.md  
│  
├─config  
│      index.js     // 打包管理  
│  
├─lib               // 打包目录  
│  
└─src               // 入口目录  
## 配置文件选项
### config/index.js
entryPath：打包入口  
outputPath:输出目录  
filename：输出文件名
version：版本号
```
{
    // 打包入口
    entryPath: './src/vue.js',
    // 输出目录
    outputPath: './lib',
    // 打包文件名
    filename: 'vue',
    // 版本号
    version: '1.0'
}
```