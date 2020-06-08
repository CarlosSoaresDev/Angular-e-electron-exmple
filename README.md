SITE BASE
https://malcoded.com/posts/angular-desktop-electron/

GIT BASE
https://github.com/LukasMarx/angular-electron/blob/master/electron/tsconfig.json

VIDEO BASE
https://www.youtube.com/watch?v=u_vMChpZMCk


## INSTALAR ANGULA
npm install @angular/cli -g

## INSTALAR ELECTRON
npm i -D electron

## INSTALAR TYPES/ELECTRON
npm i -D @types/electron

## RODAR
npm run electron

## PACOTE PARA INSTALAÇÃO 
npm install electron-packager -g

## GERAR PACOTE WINDOWS
electron-packager . --platform=win32
`Ou`
electron-packager . MyApp --platform=win32 --arch=ia32

## GERAR PACOTE PARA LINUX
electron-packager . --platform=linux
`Ou`
electron-packager . myApp --platform=linux --arch=x64


## GERAR PACOTE PARA MAC OS
electron-packager . --platform=darwin
`Ou`
electron-packager . myApp --platform=darwin --arch=x64
