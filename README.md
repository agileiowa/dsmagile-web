dsmagile web site 
============

[![Build Status](https://travis-ci.org/agileiowa/dsmagile-web.svg?branch=master)](https://travis-ci.org/agileiowa/dsmagile-web)

Public website for dsmAgile conference

## Local Dev
Install `rbenv` to to use the version of ruby defined in `.ruby-version`.

Run: `bundle exec rake` will start the jekyll server in *watch* mode.

## Update Library

Run `bundle update` to update all the gems to the latest version.

## How to publish
Run `bundle 
rake site:publish`
This will generate the site locally and overwrite the gh-pages branch. 

We use a `git submodule` for the `_site` folder. If you build it and experience problems, run `git submodule update --init` to reset the `_site/` folder.

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

