@echo off
chcp 65001 >nul
title CS313 西语研习社 · 经典西影与拉美剧集 30 部知识库全自动批量生成

echo ========================================================
echo   CS313 西语研习社 · 经典西语影视 30 部知识库全自动生成
echo ========================================================
echo.
echo [1/2] 正在调用批量数据引擎生成 30 部经典西影名场面数据...

set ELECTRON_RUN_AS_NODE=1
set "NODE_EXE=C:\Users\cheng\AppData\Local\OpenAI\Codex\runtimes\cua_node\1d17ec7e898678cb\bin\node.exe"

"%NODE_EXE%" "d:\小语种学习\cs313-spanish\scripts\generate_30_spanish_films.cjs"
if %errorlevel% neq 0 (
    echo [错误] 脚本生成失败，请检查路径。
    pause
    exit /b %errorlevel%
)

echo.
echo [2/2] 正在重新编译网站生产包 (Vite Build)...
"%NODE_EXE%" "d:\小语种学习\cs313-spanish\node_modules\vite\bin\vite.js" build --config "d:\小语种学习\cs313-spanish\vite.config.ts"
if %errorlevel% neq 0 (
    echo [错误] Vite 构建失败。
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================================
echo   🎉 恭喜！30 部经典西影名场面精讲库已成功生成并上线！
echo   系统已开启每周五自动轮换与每周持续扩充更新。
echo   请在浏览器中按 Ctrl + F5 强制刷新查看最新效果。
echo ========================================================
echo.
pause
