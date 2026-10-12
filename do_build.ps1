$nodeExe = "C:\Users\cheng\AppData\Local\OpenAI\Codex\runtimes\cua_node\1d17ec7e898678cb\bin\node.exe"
if (-not (Test-Path $nodeExe)) {
    $ideExe = "C:\Users\cheng\AppData\Local\Programs\Antigravity IDE\Antigravity IDE.exe"
    if (-not (Test-Path $ideExe)) {
        $ideExe = "C:\Users\cheng\AppData\Local\Programs\Antigravity\Antigravity.exe"
    }
    $nodeExe = $ideExe
    $env:ELECTRON_RUN_AS_NODE = "1"
}
$viteJs = Join-Path $PSScriptRoot "node_modules\vite\bin\vite.js"
$logFile = Join-Path $PSScriptRoot "build_output.log"
$errFile = Join-Path $PSScriptRoot "build_error.log"

$p = Start-Process -FilePath $nodeExe -ArgumentList "`"$viteJs`" build" -WorkingDirectory $PSScriptRoot -NoNewWindow -Wait -PassThru -RedirectStandardOutput $logFile -RedirectStandardError $errFile

"ExitCode: " + $p.ExitCode | Out-File (Join-Path $PSScriptRoot "build_status.txt") -Encoding utf8
