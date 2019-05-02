# Rename Files from the command line Windows 10

Replace all spaces with underscores
```
cmd /e:on /v:on /c "for %f in ("* *.mp3") do (set "n=%~nxf" & set "n=!n: =_!" & ren "%~ff" "!n!" )"
```
