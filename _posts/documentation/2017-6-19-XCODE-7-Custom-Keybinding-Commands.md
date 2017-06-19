---
layout: post
category : documentation
tagline: "Helpful tips on using git"
tags : [xcode, keybinding]
---

### Steps:

#### 1. Close xCode7

#### 2. Copy the following code into the file indicated by the path below.

##### XCode 7 Path:
``` url
/Applications/Xcode.app/Contents/Frameworks/IDEKit.framework/Versions/A/Resources/IDETextKeyBindingSet.plist
```
##### CODE:

```
<key>My Custom Commands</key>
<dict>
    <key>Insert New Line Below</key>
    <string>moveToEndOfLine:, insertNewline:</string>
    <key>Insert New Line Above</key>
    <string>moveUp:, moveToEndOfLine:, insertNewline:</string>
    <key>Duplicate Current Line</key>
    <string>selectLine:, copy:, moveToEndOfLine:, insertNewline:, paste:, deleteBackward:</string>
    <key>Delete Current Line</key>
    <string>selectLine:, delete:</string>
    <key>Cut Current Line</key>
    <string>selectLine:, cut:</string>
    <key>Copy Current Line</key>
    <string>selectLine:, copy:</string>
</dict>
```

- [Source](https://stackoverflow.com/questions/27006557/adding-custom-key-bindings-to-xcode)


#### 3. Open xCode -> preferences -> Keybindings

#### 4. Search for the commands and add custom hotkeys for them.
