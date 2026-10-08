$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Dist = Join-Path $Root "dist\markdown-resume-builder"
if (Test-Path $Dist) { Remove-Item $Dist -Recurse -Force }
New-Item -ItemType Directory -Path (Join-Path $Dist "templates") -Force | Out-Null
New-Item -ItemType Directory -Path (Join-Path $Dist ".well-known") -Force | Out-Null
$RootFiles = @("index.html","style.css","script.js","README.md","LICENSE",".gitignore","robots.txt","sitemap.xml","manifest.json","humans.txt","favicon.svg","og-image.svg")
foreach ($file in $RootFiles) { Copy-Item (Join-Path $Root $file) $Dist -Force }
Copy-Item (Join-Path $Root "templates\*.css") (Join-Path $Dist "templates") -Force
Copy-Item (Join-Path $Root "templates\*.md") (Join-Path $Dist "templates") -Force
Copy-Item (Join-Path $Root ".well-known\security.txt") (Join-Path $Dist ".well-known") -Force
$Zip = Join-Path $Root "dist\markdown-resume-builder.zip"
if (Test-Path $Zip) { Remove-Item $Zip -Force }
Compress-Archive -Path $Dist -DestinationPath $Zip -Force
Write-Output "Created: $Dist"
Write-Output "Created: $Zip"
