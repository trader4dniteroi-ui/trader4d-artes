@echo off
title Publicar Aula - Trader4D
cls

echo.
echo ==============================
echo PUBLICAR AULA - TRADER4D
echo ==============================
echo.
echo Qual aula você quer publicar AGORA?
echo.
echo 1 - Aula 01 Horario
echo 2 - Aula 02 O par de moedas
echo 3 - Aula 03 Lote spread e alavancagem
echo 4 - Aula 04 Liquidez
echo 5 - Aula 05 As 3 Sessoes
echo 6 - Mesa Proprietaria (Hantec)
echo.
set /p opcao="Digite o numero (1-6): "

if "%opcao%"=="1" (set folder=forex-aula-01) else if "%opcao%"=="2" (set folder=forex-aula-02) else if "%opcao%"=="3" (set folder=forex-aula-03) else if "%opcao%"=="4" (set folder=forex-aula-04) else if "%opcao%"=="5" (set folder=forex-aula-05-sessoes) else if "%opcao%"=="6" (set folder=mesa-proprietaria) else (echo Opcao invalida! & timeout /t 2 & goto fim)

cd C:\Users\fbrun\trader4d-artes

cls
echo.
echo Publicando no Instagram...
echo.

node ig-publish.mjs %folder%

if %ERRORLEVEL% EQU 0 (
  echo.
  echo ==============================
  echo PUBLICADO COM SUCESSO!
  echo ==============================
  echo.
  echo Verifique no seu Instagram @trader4d_
  echo.
) else (
  echo.
  echo ERRO NA PUBLICACAO
  echo.
)

pause

:fim
exit /b
