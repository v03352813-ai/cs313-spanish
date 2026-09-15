@echo off
chcp 65001 >nul
title CS313 西班牙语研习社 · 本地运行服务
echo ==========================================================
echo  正在启动 CS313 西班牙语研习社 本地极速平台...
echo   电脑浏览器推荐访问: http://localhost:5176/
echo ==========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0serve_local.ps1"
pause
