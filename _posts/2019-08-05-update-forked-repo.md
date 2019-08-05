---
layout: post
title:  "How To Update A Forked Repo"
date:   2019-08-05 00:05:31 +0700
categories: tutorials
tags: [git]
description: How to updated a Forked a repository.
excerpt: How to updated a Forked a repository.
---

1. Add the fork source repository as upstream
```
git remote add upstream https://github.com/[user]/[repo].git
```

2. Fetch the upstream
```
git fetch upstream
```

3. Rebase your master with remote master
```
git rebase upstream/master
```

4. Push up changes to your forked repo
```
git push origin master

or

git push
```
