---
layout: post
category : documentation
tagline: "Helpful tips on using git"
tags : [git, github, bitbucket]
---

#### OverWrite Master With Branch
```
git checkout mybranch
git merge -s ours master
git checkout master
git merge mybranch
```

#### Delete All Other Branches
```
git branch | grep -v "master" | xargs git branch -D
```

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
