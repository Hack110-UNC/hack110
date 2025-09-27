@echo off
cd /d "%~dp0"
echo Building project...
echo.

REM Try different methods to run the build
echo Trying npm run build...
call npm run build 2>nul
if %errorlevel% equ 0 (
    echo Build successful with npm!
    goto :deploy
)

echo NPM failed, trying node directly...
call node node_modules\vite\bin\vite.js build 2>nul
if %errorlevel% equ 0 (
    echo Build successful with node!
    goto :deploy
)

echo Build failed. Please check for errors.
pause
exit /b 1

:deploy
echo.
echo Build complete! Now deploying...
call npm run deploy
echo.
echo Deployment complete!
pause