@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"C:\tools\ruby24\bin\ruby.exe" "C:/Users/jsmith/Documents/GitHub/jtsmith24.github.io/vendor/bundle/ruby/2.4.0/bin/safe_yaml" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"C:\tools\ruby24\bin\ruby.exe" "%~dpn0" %*
