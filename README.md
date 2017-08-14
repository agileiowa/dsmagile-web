dsmagile web site 
============

[![Build Status](https://travis-ci.org/agileiowa/dsmagile-web.svg?branch=master)](https://travis-ci.org/agileiowa/dsmagile-web)

Public website for dsmAgile conference

## Contributing

The `_site` directory is configured as a submodule that points to the gh-pages branch.


### Issue: New commits in _site folder
If you see this when you run `git status`:

```
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   _site (new commits)

no changes added to commit (use "git add" and/or "git commit -a")
```

This means somebody else has published to the gh-page branch. You need to
update your submodule.

Run this command from the root directory: `git submodule update _site/`

