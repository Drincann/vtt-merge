# vtt-merge

用于合并 webvtt format 的字幕文件。

## build

```sh
npm i
```

## usage

```sh
node . -i ./subtitles-zh-CN.vtt ./subtitles-en.vtt -o out.vtt
```

## example

输入:

`./subtitles-zh-CN.vtt`

```text
WEBVTT
    
1
00:00:00.000 --> 00:00:03.785
大家好 我的名字是Dan Boneh

2
00:00:03.785 --> 00:00:07.522
欢迎来到我本学期在斯坦福大学教授的密码学课程

...
```

`./subtitles-en.vtt`

```text
WEBVTT

1
00:00:00.000 --> 00:00:03.785
Hello, my name is Dan Boneh, and I'd like to welcome you to my course on cryptography

2
00:00:03.785 --> 00:00:07.522
that I'll be teaching at Stanford University this quarter. This quarter, I'm experimenting

...
```

输出:

`out.vtt`

```text
WEBVTT
    
1
00:00:00.000 --> 00:00:03.785
大家好 我的名字是Dan Boneh
Hello, my name is Dan Boneh, and I'd like to welcome you to my course on cryptography

2
00:00:03.785 --> 00:00:07.522
欢迎来到我本学期在斯坦福大学教授的密码学课程
that I'll be teaching at Stanford University this quarter. This quarter, I'm experimenting

...
```