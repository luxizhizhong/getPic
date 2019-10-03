#!/usr/bin/env bash

isHttp=$(which http-server)

if [ ! -x "${isHttp}" ];then
  echo 'emmm, you need to http-server'
  echo 'try command: npm i -g http-server'
else
  http-server script.x
fi