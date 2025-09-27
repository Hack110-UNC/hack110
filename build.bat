@echo off
cd /d "%~dp0"
echo Building project...
node_modules\.bin\vite build
echo Build complete!
pause