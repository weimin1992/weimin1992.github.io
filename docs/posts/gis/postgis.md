---
title: 使用QGIS将ArcGIS Server发布的图层导入到PostGIS
---


>QGIS 是一款开源的 GIS 数据浏览、数据管理的综合平台，该软件支持很多数据源，本文记录使用 QGIS 将ArcGIS Server发布的图层数据导入到 PostGIS 中

## QGIS 的下载与安装

支持 Windows 与 MacOS 操作系统，下载与安装参照[官网文档](https://docs.qgis.org/3.22/zh-Hans/docs/user_manual/introduction/getting_started.html#installing-qgis)

## 连接 ArcGIS Server

在 QGIS 左侧的`浏览器`面板中找到`ArcGIS REST 服务器`，右击选中`新建连接`，如下图所示

![新建ArcGIS REST 服务器](https://cdn.porridge.fun/blog/gis/QGIS-2.png$fix.water)

输入连接名称后，将 ArcGIS Server 发布的服务地址粘贴到`url`输入框中(示例：`http://192.16.9.110:6080/arcgis/rest/services/`)

## 导出ArcGIS Server 发布的图层数据

连接完成后，在节点下会以目录形式展示图层，双击目标图层可以在主视图中浏览，同时在左侧下方的`图层面板`中以复选框形式展示历史图层，如下图所示

![图层展示](https://cdn.porridge.fun/blog/gis/QGIS-4.png$fix.water)

## 导出目标图层为 ESRI Shapefile

`ArcGIS Server`发布的图层的原始文件为`ESRI Shapefile`，因此需要将目标图层导出到本地，在左上浏览器中的图层列表中右击**带点线面icon的图层**，如下图所示

![带点线面icon的图层](https://cdn.porridge.fun/blog/gis/QGIS-5.png)

继续选择`导出图层 => 到文件`，在弹出的面板中将格式选中为`ESRI Shapefile`后，填入图中红框中的信息

![导出](https://cdn.porridge.fun/blog/gis/QGIS-6.png)

点击`OK`确认，将文件保存到本地，本地文件是一组 GIS 文件集合，如下图所示

![GIS文件](https://cdn.porridge.fun/blog/gis/QGIS-7.png)

## 连接 PosGIS 数据库

与[连接 ArcGIS Server](#连接-arcgis-server) 类似，在QGIS左侧的`浏览器`面板中找到`PostgreSQL 服务器`（某些版本是`PostGIS 服务器`），右击选中`新建连接`，下图为示例

![PostgreSQL](https://cdn.porridge.fun/blog/gis/QGIS-8.png$fix.water)

## 导入到 PostGIS 服务器

打开数据库管理器(`菜单栏 => 数据库 => 数据库管理器`)，左侧数据源面板中找到`PostGIS`后选中刚刚建立的连接，点击面板上方`导入图层或文件`，在`导入矢量图层`中填入配置，如下图所示

![导入](https://cdn.porridge.fun/blog/gis/QGIS-9.png$fix.water)

::: warning 注意

* 主键字段对应的数据不能有重复值，否则会报错，若id重复则推荐使用`OBJECTID`
* 坐标系若不为`默认CRS：ESPSG:4326 - WGS 84`，则需要配置为图层对应的`EPSG`
:::

## 验证

导入成功后，`数据库管理器`中点击面板上方的刷新按钮，查看数据连接下是否有新增的表，使用其他数据库管理工具也可进行验证
![验证](https://cdn.porridge.fun/blog/gis/QGIS-10.png$fix.water)
