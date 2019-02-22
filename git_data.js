
/*
安装 git https://git-scm.com/downloads

运行 Git Bash

设置
    git config --global user.name "Your Name"
    git config --global user.email "email@example.com"


创建版本库

    git init

操作文件

    git add filename.* filename2.* ...
    git commit -m '修改说明'

    git status 查询仓库当前状态
    git diff 查询修改内容

    git log 查看历史记录
    git log --pretty=oneline 查看历史记录(简化)

    git reset --hard '目标版本号'  版本回退
    git reflog 记录历史输入每一次命令

    git checkout -- '文件名' :{
        没有 add 时 ： 撤销修改回到版本库一样的状态
        add 后 ： 撤销修改回到 add 到 暂存区 的状态
    }
    git reset HEAD filaname.*  把暂存区的修改撤销掉

    git rm filename.* 删除文件
*/

//创建 github

/*
log:
    itmxXiao
    2176566525@qq.com
pwd:
    muxilove_xiao_8023

[
    git@github.com:itmxXiao/itmx.git
    https://github.com/itmxXiao/itmx.git
]
*/

/*
ssh
运行 Git Bash
    ssh-keygen -t rsa -C "youremail@example.com" 一路回车

    找到 .ssh 文件夹
    id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人

    登录 github->设置->ssh->创建ssh
        填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：

    Git Bash->
        ssh -T git@github.com 键入 yes


*/

/*
    把本地库 推送到 github
    git remote add origin git@github.com:itmxXiao/itmx.git  链接
    git push -u origin master 第一次

        连接后 git push origin master

    把本地库的内容推送到远程，用git push命令
    ，实际上是把当前分支master推送到远程。

    由于远程库是空的，
    我们第一次推送master分支时，
    加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，
    还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令
*/

/**
 * 克隆
 *  git clone git@github.com:itmxXiao/itmx.git
 * 
 * 
 */

 /**
  * 创建切换 分支
  * 
  *     git checkout -b 分支名
  * 
  * 查看当前分支
  *     git branch
  * 
  * 合并分支
  *     git merge 分支名 
  * 
  * 删除分支
  *     git branch -d 分支名
  * 
  */