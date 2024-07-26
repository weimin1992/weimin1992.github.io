---
title: Java学习笔记-Java背景知识
# next:
#   text: Java学习笔记-安装
#   link: /posts/java/1_install
---


## 术语

* **JRE** (**J**ava **R**untime **E**nvironment): Java 程序运行时环境，包含 JVM 和运行时所需要的核心类库，若要运行一个已有的 Java 程序，只需安装 JRE 即可；

* **JDK** (**J**ava **D**evelopmenet **K**it): Java 程序开发工具包，包含 JRE 和开发人员使用的工具 (javac) 和运行工具 (java)等，若要开发一个全新的 Java 程序，必须安装 JDK；

* **JVM** (**J**ava **V**irtual **M**achine): Java 虚拟机( JRE 的一部分，支持跨平台)，是一个虚构出来的计算机，支持跨平台。

::: warning 注意
JVM 跨平台： 屏蔽了与具体操作系统平台相关的信息，Java 程序只需生成在 JVM 上运行的字节码，就可以在多种平台上不加修改的运行。JVM 在执行字节码时，实际上最终还是把字节码解释成具体平台上的机器指令执行
:::

> 关系如下图所示:

![relation](https://cdn.porridge.fun/blog/java/Java-0.drawio.png$fix.water)
