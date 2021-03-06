---
layout: post
category : documentation
tagline: "Helpful tips on using git"
tags : [git, github, bitbucket]
---

# Github cheatsheet

#### OverWrite Master With Branch
```
git checkout mybranch
git merge -s ours master
git checkout master
git merge mybranch
```


* * *

## REMOTE


#### New Remote
```
git remote add origin git@bitbucket.org:[username]/[repo-name].git
git push -u origin --all # pushes up the repo and its refs for the first time
git push origin --tags # pushes up any tags
```

#### Remove Remote Origin
```
git remote rm origin
```

#### Undo Commits on particular file
```
git checkout -- file
```

#### Undo Git Add
```
git reset
```

# Revert To Old Commits
```
git reset --hard [commithash]
```


* * *

## BRANCHES:

#### Add remote Branch
```
git checkout --track origin/branchname
```

#### Move Branch from github to bitbucket
git clone locally
```
git clone
```
change origin
```
git remote set-url origin ssh://git@bitbucket.org/username/my-code-project.git
```
push for the first time
```
git push --set-upstream origin master
```

#### Delete All Other Branches
```
git branch | grep -v "master" | xargs git branch -D
```


* * *

## CLONE REPO

#### Duplicate repo
Clone into new folder localy
```
git clone http://OLD_project-repo.git.url new-project-repo
```
Create remote repo and push to it

```
git remote rename origin upstream
```
```
git remote add origin URL_TO_GITHUB_REPO
```
```
git push -u origin master
```
