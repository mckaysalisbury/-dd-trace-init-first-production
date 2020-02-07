A package that initializes dd trace when the environment is production, (and is
lexographically superior, so that it is sorted to be "first").

# Usage
To use this package, import or require it.

    import '0-dd-trace-init-first-production';

# Naming

* `0-` - beginning with a `-` is slightly prefered to me, but npmjs.com doesn't
  allow it. It just errors with a 404 if you try, so it might be a bug, but my
  gut says it's intentional. Note that `0-` is lexographically superior to
  `00000-`. `0-` is the most lexographically superior prefix for an npmjs.com
  package.
* `dd-trace` - It's a `dd-trace` lib at heart, so it's got `dd-trace` in it.
* `init` - It runs the `init()` method.
* `first` - This is kind of redundant with the `0-` prefix, but this should
  remind developers that it belongs at the first, in case someone decides to
  name their package `0--a` or something silly that is more superior. I admit
  that this solution isn't perfect, it's just [more
  perfect](https://en.wikisource.org/wiki/Constitution_of_the_United_States_of_America)
  than anything else I can think of.
* `production` - It only runs `init()` if the node env is production. Someone
  might want a `0-dd-trace-init-first` that runs always or something. 
