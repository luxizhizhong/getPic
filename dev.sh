#!/usr/bin/env bash
# create by @d1y in 2019-10-04
# @tips { 方便油猴子脚本导入 }

isHttp=$(which http-server)
isCow=$(which cowsay)
isPy=`uname -a`
# 只判断 `mac` 和 `win`
Darwin="Darwin" # mac
isURL="https://www.npmjs.com/package/http-server"
toSay1="emmm, you need to http-server"
toSay2="try command: npm i -g http-server"
if [ ! -x "${isHttp}" ];then
  if [ ! -x "${isCow}"];then
    echo $toSay1
    echo $toSay2
  else
    cowsay "$toSay1 $toSay2"
  fi

  if [[ $isPy =~ $Darwin ]];then
    open $isURL
  else
    start $isURL
  fi
else
  if [[ $isPy =~ $Darwin ]];then
    # `mac` 下自动复制到剪切板方便测试
    echo "http://localhost:8080/pic.js" | pbcopy
  fi
  http-server script.x
fi