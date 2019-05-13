# Replace Spaces in filenames with underscores in folder windows 10

```
cmd /e:on /v:on /c "for %f in ("* *.exe") do (set "n=%~nxf" & set "n=!n: =_!" & ren "%~ff" "!n!" )"
```

replace exe with file extensions

in my case it was mp3 files i was renaming
```
cmd /e:on /v:on /c "for %f in ("* *.mp3") do (set "n=%~nxf" & set "n=!n: =_!" & ren "%~ff" "!n!" )"

```

