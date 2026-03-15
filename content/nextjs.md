+++
title = 'Next.js'
description = ''
keywords = []
+++


## Bugs

### Cache max size exceeded?

Was getting these

```
Mar 15 13:17:42 2022-life npm[2478707]: Error: LRUCache: calculateSize returned 0, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.
Mar 15 13:17:42 2022-life npm[2478707]:     at ignore-listed frames
Mar 15 13:17:42 2022-life npm[2478707]: ⨯ unhandledRejection:  Error: LRUCache: calculateSize returned 0, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.
Mar 15 13:17:42 2022-life npm[2478707]:     at ignore-listed frames
Mar 15 13:17:42 2022-life npm[2478707]: ⨯ Failed to write image to cache cFi0-pbL_j-Z8eqsBa__70aSP35wN61NzO4w7IqCfRI Error: LRUCache: calculateSize returned 0, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.
Mar 15 13:17:42 2022-life npm[2478707]:     at ignore-listed frames
```

Just did `mv .next/cache/images .next/cache/images.bak` and restarted the service, everything was clean then onwards.

The default max cache size seems to be 50 MB. Possibly related to that as the size of my cache was about 400MB. (It was growing unbounded earlier).
