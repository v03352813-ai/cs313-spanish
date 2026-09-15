$nodeExe = "C:\Users\cheng\AppData\Local\OpenAI\Codex\runtimes\cua_node\1d17ec7e898678cb\bin\node.exe"
$viteJs = Join-Path $PSScriptRoot "node_modules\vite\bin\vite.js"
$logFile = Join-Path $PSScriptRoot "build_output.log"
$errFile = Join-Path $PSScriptRoot "build_error.log"

$p = Start-Process -FilePath $nodeExe -ArgumentList "`"$viteJs`" build" -WorkingDirectory $PSScriptRoot -NoNewWindow -Wait -PassThru -RedirectStandardOutput $logFile -RedirectStandardError $errFile

"ExitCode: " + $p.ExitCode | Out-File (Join-Path $PSScriptRoot "build_status.txt") -Encoding utf8
