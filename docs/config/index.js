/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-21 17:09:46
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-22 11:04:28
 * @Description: 站点配置信息
 */

export const blogInfo = {
  auther: '浪铭',
  description: '化繁为简/make it easier',
  email: 'weimin1992@outlook.com',
  github: 'https://github.com/weimin1992',
  siteRecord: '苏ICP备20019081号-2',
  siteStart: '2021-11-23',
  siteLogo: 'https://github.com/weimin1992.png'
}

export const postDataSource = {
  total: 7,
  data: [
    {
      year: 2022,
      posts: [
        {
          text: 'MacOS 下安装 sqlplus',
          link: '/posts/oracle/sqlplus',
          tag: ['Oracle'],
          date: '12月20日'
        },
        {
          text: 'Docker 根路径修改',
          link: '/posts/docker/setrootdir',
          tag: ['Docker'],
          date: '12月6日'
        },
        {
          text: 'Windows 下安装 Oracle 11g',
          link: '/posts/oracle/install',
          tag: ['Oracle'],
          date: '12月1日'
        },
        
        {
          text: 'Linux 常用命令',
          link: '/posts/linux/cmd',
          tag: ['Linux'],
          date: '11月20日'
        }
      ]
    },
    {
      year: 2021,
      posts: [
        {
          text: 'Oracle 表空间创建',
          link: '/posts/oracle/create',
          tag: ['Oracle'],
          date: '12月21日'
        },
        {
          text: 'Oracle 备份与还原',
          link: '/posts/oracle/bak',
          tag: ['Oracle'],
          date: '12月20日'
        },
        {
          text: 'Wordpress 建站',
          link: '/posts/docker/wordpress',
          tag: ['Docker'],
          date: '12月1日'
        }
      ]
    }
  ]
}
