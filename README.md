# Tuft Benchmark Comparison

This repository contains a suite of mini-applications for a few different *routing-enabled* frameworks, including Tuft, that have been set up for benchmarking purposes. Each application has a single `GET` route that responds with the text `'Hello, world!'`.

The frameworks to be tested include:

* No framework (native Node app)
* [Tuft](https://tuft.dev)
* [Hapi](https://hapi.dev)
* [Fastify](https://fastify.io)
* [Koa](https://koajs.com)

As Tuft is an HTTP/2-only framework, this benchmarking suite aims to only test HTTP/2 performance. If there is another Node.js web framework (that supports HTTP/2) you feel should be on the list, then feel free to open an issue or submit a pull request.

## How to test

To get the most reliable results, you should be using two systems that do not share resources with other systems. You could create two "general purpose" or "CPU optimized" droplets on [Digital Ocean](https://www.digitalocean.com) which have access to each other on a private network to achieve this.

Once you have a system running with your preferred version of Node, make sure all the frameworks and dependencies are installed.

```sh
$ npm install
```

This suite is bundled with [PM2](https://pm2.keymetrics.io), a process manager which can run Node applications in cluster mode. The scripts are configured to run each application with the maximum number of CPU cores.

To run a specific server, use the command:

```sh
$ npm run start:{app name}
```

For example, to run Tuft:

```sh
$ npm run start:tuft
```

To run all servers simultaneously:

```sh
$ npm run start:all
```

To stop a server, just replace `start` with `stop`.

While each server is running, use your load testing application of choice (preferably running on a separate system on the same local network) to test their performance.

## Results

The benchmark results below use an HTTP/2 load testing client called `h2load`, which comes bundled with [nghttp2](https://nghttp2.org/).

* **Date:** May 13, 2020  
* **Hardware:** Digital Ocean CPU-optimized droplet (2 vCPUS, 4GB)  
* **OS:** Ubuntu 18.04.3 (LTS) x64  
* **Node version:** 14.2.0 
* **Client command:** `h2load -t2 -c10 -m100 --duration=60 --warm-up-time=30`  

### Node native: 36,701.67 req/s
```sh
finished in 90.00s, 36701.67 req/s, 1.68MB/s
requests: 2202100 total, 2202100 started, 2202100 done, 2202100 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 2202000 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 100.81MB (105710890) total, 25.30MB (26533310) headers (space savings 91.66%), 41.09MB (43082000) data
                     min         max         mean         sd        +/- sd
time for request:     5.33ms     73.28ms     27.28ms      7.39ms    81.36%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :    3614.97     3724.98     3670.14       56.07   100.00%
```

### Tuft: 32,366.67 req/s
```sh
finished in 90.00s, 32366.67 req/s, 1.48MB/s
requests: 1942000 total, 1942000 started, 1942000 done, 1942000 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 1942900 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 88.94MB (93265090) total, 22.56MB (23657310) headers (space savings 91.66%), 36.63MB (38408500) data
                     min         max         mean         sd        +/- sd
time for request:     5.78ms     71.81ms     30.85ms      8.43ms    82.82%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :    3219.93     3251.63     3236.61       15.24    80.00%
```

### Fastify: 21,440.00 req/s
```sh
finished in 90.00s, 21440.00 req/s, 1005.29KB/s
requests: 1286400 total, 1286400 started, 1286400 done, 1286400 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 1286500 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 58.90MB (61765090) total, 14.60MB (15305310) headers (space savings 91.66%), 23.69MB (24836500) data
                     min         max         mean         sd        +/- sd
time for request:    32.58ms     93.41ms     46.60ms     10.15ms    81.99%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :    2096.63     2191.64     2143.97       49.90   100.00%
```

### Koa: 15,461.67 req/s
```sh
finished in 90.00s, 15461.67 req/s, 725.12KB/s
requests: 927700 total, 927700 started, 927700 done, 927700 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 927900 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 42.49MB (44551390) total, 10.90MB (11425880) headers (space savings 91.65%), 17.67MB (18532800) data
                     min         max         mean         sd        +/- sd
time for request:    32.37ms    149.09ms     64.64ms     15.74ms    71.50%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :    1483.34     1638.34     1546.16       79.33    60.00%
```

### Hapi: 12,813.33 req/s
```sh
finished in 90.00s, 12813.33 req/s, 625.81KB/s
requests: 768800 total, 768800 started, 768800 done, 768800 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 768700 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 36.67MB (38450010) total, 10.88MB (11404458) headers (space savings 92.52%), 14.11MB (14797900) data
                     min         max         mean         sd        +/- sd
time for request:    46.83ms    155.88ms     78.00ms     15.49ms    72.14%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :    1224.98     1336.66     1281.32       58.33   100.00%
```
## People
The creator and maintainer of Tuft is [Stuart Kennedy](https://github.com/rav2040).

## License
[MIT](https://github.com/tuftjs/bench/blob/master/LICENSE)
