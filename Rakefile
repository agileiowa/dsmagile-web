require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

# Change your GitHub reponame eg. "kippt/jekyll-incorporated"
GITHUB_REPONAME = "agileiowa/dsmagile-web"

# When a task isn't found, list matching tasks.
rule "" do |t|
    system("rake -sT #{t}")
end

task :default => [:watch]

desc "Watch the site and regenerate when it changes"
task :watch do
  puts "Starting to watch source with Jekyll..."
  #system "sass --update _sass:css -f -l -r ./_sass/bourbon/lib/bourbon.rb"
  jekyllPid = Process.spawn("bundle exec jekyll serve --watch")
  #sassPid = Process.spawn("sass --watch _sass:css -l -r ./_sass/bourbon/lib/bourbon.rb")

  trap("INT") {
    [jekyllPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid].each { |pid| Process.wait(pid) }
end # task :watch

namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "exclude" => ["Rakefile"]
    })).process
  end

  task :check do
      if (has_unpushed_commits())
        puts "\e[31mYou have un-pushed changes. NO PUBLISH FOR YOU!!\e[0m"
        exit 0
      end
      if (not_master_branch())
        puts "\e[31mYou need to be on the master branch. NO PUBLISH FOR YOU!!\e[0m"
        exit 0
      end
  end

  def has_unpushed_commits()
    system "git fetch origin master -q"
    status = `git status -sb`
    (status =~ /\[ahead \d{1,}\]/)
  end

  def not_master_branch()
    current_branch = `git rev-parse --abbrev-ref HEAD`
    (current_branch == 'master')
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:check] do
      system "git submodule update --init"

      Dir.chdir("_site/") do
          puts "in the _site folder"
          `git status`
          `git checkout gh-pages`
      end 

      FileUtils.rm_r Dir.glob('_site/*')

      Rake::Task['site:generate'].invoke

      Dir.chdir("_site/") do
          puts "adding them all"
          `git status`
          `git add .`
          message = "Site updated at #{Time.now.utc}"
          `git commit -m #{message.inspect}`
          system "git push origin gh-pages"
      end

      `git add .`
      `git commit -m "update _site for publish"`
  end
end
