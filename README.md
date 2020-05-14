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

* **Date:** May 14, 2020
* **Hardware:** Digital Ocean CPU-optimized droplet (4 vCPUS, 8GB)
* **OS:** Ubuntu 18.04.3 (LTS) x64
* **Node version:** 12.16.3
* **Client command:** `h2load -c100 -m100 --duration=60 --warm-up-time=30`

### Node native: 89,772 req/s
```sh
finished in 90.01s, 89771.67 req/s, 4.11MB/s
requests: 5386300 total, 5386300 started, 5386300 done, 5386300 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 5385000 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 246.65MB (258631715) total, 61.74MB (64737210) headers (space savings 91.64%), 100.00MB (104852800) data
                     min         max         mean         sd        +/- sd
time for request:    75.23ms    180.33ms    111.41ms     15.11ms    72.11%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :     833.24      981.65      897.66       58.21    51.00%
```

### Tuft: 77,218 req/s
```sh
finished in 90.01s, 77218.33 req/s, 3.54MB/s
requests: 4633100 total, 4633100 started, 4633100 done, 4633100 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 4630300 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 212.12MB (222421600) total, 52.81MB (55372409) headers (space savings 91.63%), 85.48MB (89633700) data
                     min         max         mean         sd        +/- sd
time for request:    99.47ms    218.24ms    129.50ms     17.04ms    73.23%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :     704.93      803.33      772.14       41.34    73.00%
```

### Fastify: 47,137 req/s
```sh
finished in 90.01s, 47136.67 req/s, 2.16MB/s
requests: 2828200 total, 2828200 started, 2828200 done, 2828200 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 2826900 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 129.55MB (135844900) total, 32.14MB (33705791) headers (space savings 91.61%), 51.90MB (54421900) data
                     min         max         mean         sd        +/- sd
time for request:   154.47ms    306.73ms    212.03ms     24.47ms    67.45%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :     434.97      496.66      471.34       23.56    49.00%
```

### Koa: 34,135 req/s
```sh
finished in 90.01s, 34135.00 req/s, 1.57MB/s
requests: 2048100 total, 2048100 started, 2048100 done, 2048100 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 2048600 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 93.91MB (98468800) total, 23.31MB (24442186) headers (space savings 91.59%), 37.55MB (39375700) data
                     min         max         mean         sd        +/- sd
time for request:   192.35ms    443.51ms    292.88ms     35.93ms    68.17%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :     319.96      356.66      341.33       13.56    48.00%
```

### Hapi: 29,213 req/s
```sh
finished in 90.01s, 29213.33 req/s, 1.39MB/s
requests: 1752800 total, 1752800 started, 1752800 done, 1752800 succeeded, 0 failed, 0 errored, 0 timeout
status codes: 1752000 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 83.68MB (87748668) total, 24.77MB (25975981) headers (space savings 92.48%), 31.94MB (33493200) data
                     min         max         mean         sd        +/- sd
time for request:   211.65ms    497.77ms    342.22ms     43.28ms    68.31%
time for connect:        0us         0us         0us         0us     0.00%
time to 1st byte:        0us         0us         0us         0us     0.00%
req/s           :     271.63      304.99      292.11       13.20    73.00%
```
## People
The creator and maintainer of Tuft is [Stuart Kennedy](https://github.com/rav2040).

## License
[MIT](https://github.com/tuftjs/bench/blob/master/LICENSE)
