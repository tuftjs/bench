# Tuft Benchmark Comparison

This repository contains a suite of basic example applications for a few different *routing-enabled* frameworks, including Tuft, that have been set up for benchmarking purposes. Each application has a single `GET` route that responds with the text `'Hello, world!\n'`.

The frameworks to be tested include:

* No framework (Node native)
* [Tuft](https://tuft.dev) `2.0.0-beta.2`
* [Express](https://expressjs.com) `4.17.1`
* [Koa](https://koajs.com) `2.13.0`
* [Hapi](https://hapi.dev) `20.0.0`
* [Fastify](https://fastify.io) `3.2.1`

## Methodology

The results below were obtained using two CPU-optimized instances in the same VPC on [Digital Ocean](https://www.digitalocean.com). The application servers were executed on the first instance (the server), and the load testing was performed on the second instance (the client) using [ApacheBench](http://httpd.apache.org/docs/2.4/programs/ab.html).

## Results

* **Date:** August 21, 2020
* **Hardware:** Digital Ocean CPU-optimized droplet
* **OS:** Ubuntu 20.04 (LTS) x64
* **Node version:** 12.18.3
* **Client command:** `ab -k -c 100 -n 100000` (two rounds: one for warm-up, one for results)

### Node native: 23,617 req/s
```
Concurrency Level:      100
Time taken for tests:   4.234 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      15500000 bytes
HTML transferred:       1400000 bytes
Requests per second:    23617.18 [#/sec] (mean)
Time per request:       4.234 [ms] (mean)
Time per request:       0.042 [ms] (mean, across all concurrent requests)
Transfer rate:          3574.87 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       2
Processing:     0    4   0.8      4      21
Waiting:        0    4   0.8      4      21
Total:          0    4   0.8      4      21

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      4
  80%      4
  90%      4
  95%      5
  98%      8
  99%      8
 100%     21 (longest request)
```

### Tuft: 20,824 req/s
```
Concurrency Level:      100
Time taken for tests:   4.802 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      15500000 bytes
HTML transferred:       1400000 bytes
Requests per second:    20823.85 [#/sec] (mean)
Time per request:       4.802 [ms] (mean)
Time per request:       0.048 [ms] (mean, across all concurrent requests)
Transfer rate:          3152.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       3
Processing:     0    5   0.9      5      18
Waiting:        0    5   0.9      5      18
Total:          0    5   0.9      5      18

Percentage of the requests served within a certain time (ms)
  50%      5
  66%      5
  75%      5
  80%      5
  90%      5
  95%      6
  98%      9
  99%      9
 100%     18 (longest request)
```

### Fastify: 18,770 req/s
```
Concurrency Level:      100
Time taken for tests:   5.328 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      15500000 bytes
HTML transferred:       1400000 bytes
Requests per second:    18770.46 [#/sec] (mean)
Time per request:       5.328 [ms] (mean)
Time per request:       0.053 [ms] (mean, across all concurrent requests)
Transfer rate:          2841.23 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       3
Processing:     1    5   1.0      5      22
Waiting:        1    5   1.0      5      21
Total:          1    5   1.0      5      22

Percentage of the requests served within a certain time (ms)
  50%      5
  66%      5
  75%      5
  80%      5
  90%      6
  95%      6
  98%     10
  99%     10
 100%     22 (longest request)
```

### Koa: 16,554 req/s
```
Concurrency Level:      100
Time taken for tests:   6.041 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      15500000 bytes
HTML transferred:       1400000 bytes
Requests per second:    16553.73 [#/sec] (mean)
Time per request:       6.041 [ms] (mean)
Time per request:       0.060 [ms] (mean, across all concurrent requests)
Transfer rate:          2505.69 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       2
Processing:     0    6   0.9      6      24
Waiting:        0    6   0.9      6      24
Total:          0    6   0.9      6      24

Percentage of the requests served within a certain time (ms)
  50%      6
  66%      6
  75%      6
  80%      6
  90%      6
  95%      7
  98%      9
  99%     12
 100%     24 (longest request)
```

### Hapi: 12,851 req/s
```
Concurrency Level:      100
Time taken for tests:   7.781 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      20100000 bytes
HTML transferred:       1400000 bytes
Requests per second:    12851.44 [#/sec] (mean)
Time per request:       7.781 [ms] (mean)
Time per request:       0.078 [ms] (mean, across all concurrent requests)
Transfer rate:          2522.60 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       3
Processing:     1    8   1.2      8      28
Waiting:        1    8   1.2      8      28
Total:          1    8   1.2      8      28

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      8
  75%      8
  80%      8
  90%      8
  95%      9
  98%     12
  99%     15
 100%     28 (longest request)
```

### Express: 5,965 req/s
```
Concurrency Level:      100
Time taken for tests:   16.766 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      21800000 bytes
HTML transferred:       1400000 bytes
Requests per second:    5964.54 [#/sec] (mean)
Time per request:       16.766 [ms] (mean)
Time per request:       0.168 [ms] (mean, across all concurrent requests)
Transfer rate:          1269.80 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       2
Processing:     2   17   2.5     16      44
Waiting:        2   17   2.5     16      44
Total:          2   17   2.5     16      44

Percentage of the requests served within a certain time (ms)
  50%     16
  66%     16
  75%     16
  80%     16
  90%     20
  95%     21
  98%     22
  99%     31
 100%     44 (longest request)
```

## People
The creator and maintainer of Tuft is [Stuart Kennedy](https://github.com/rav2040).

## License
[MIT](https://github.com/tuftjs/bench/blob/master/LICENSE)
