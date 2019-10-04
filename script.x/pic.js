// ==UserScript==
// @name         素材站下载工具
// @namespace    http://github.com/luxizhizhong
// @version      0.1
// @description  去除烦人的广告推广, 我们只想简简单单的下载个素材啊
// @author       d1y
// @match        *://*.58pic.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// @license	     MIT
// @supportURL	 https://github.com/d1y

// ==/UserScript==

const config = {
  pic52Btn: '下载当前预览图',
  downBtn: '去下载'
}

const removeADs = () => {
  // logo去掉
  $('.header-row-logo').remove()
  // 去除烦人的登录
  $('.qt-model-t.login-model').remove()
  // 侧边栏滚蛋😡
  $('.tally').remove()
  // 广告什么的,最烦人了
  $('.ad_search').remove()
  $('.activitySettings-Fixed').remove()
  $('.tcmk, .tcmk2').remove()
  $('.activitySettings-fixedBottom').remove()
  $('.clearfix.qt-poster').remove()
  $('.modelMain, .companies, .qt-footer-default').remove()
  $('.combine2').remove()
}

((_self)=> {
  removeADs()
  const host = _self.location.href
  if (host.includes('58pic.com/newpic')) {
    // 获取到预览图的`url`
    const rand = Math.floor(Math.random() * 100000)
    const btn = $(`
      <div style="
        position: fixed;
        top: 40vh;
        left: 0;
        width: 120px;
        height: 40px;
        z-index: ${rand};
        cursor: pointer;
      ">
        <div id="previewBtn" style="
          padding: 10px;
          border-radius: 10px;
          background-image: linear-gradient(to right,#32e696,#00be6e);
          color: #fff;
        "  class="detailBtn-down download-page">
          ${ config.pic52Btn }
        </div>
        <div id="downloadBtn" style="
          margin-top: 20px;
          padding: 10px;
          border-radius: 10px;
          background-image: linear-gradient(to right,#32e696,#00be6e);
          color: #fff;
        ">
          ${ config.downBtn }
        </div>
      </div>
    `)
    $('body').append(btn)
    $('#previewBtn').click(()=> {
      const img = $($('.pic-box img')[0]).attr('data-src')
      _self.open(img)
    })
    $('#downloadBtn').click(()=> {
      const devio = new URL(host)
      const id = devio.pathname.split('/newpic/')[1].split('.html')[0]
      _self.open(`https://dl.58pic.com/${ id }.html`)
    })
  } else if (host.includes(`dl.58pic.com`)) {
    // 自动下载..
  }
})(window);