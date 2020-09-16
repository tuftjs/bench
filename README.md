# Tuft Benchmark Comparison

This repository contains a suite of basic example applications for a few different *routing-enabled* frameworks, including Tuft, that have been set up for benchmarking purposes. Each application has a single `GET` route that responds with the text `'Hello, world!\n'`.

The frameworks to be tested include:

* No framework (Node native)
* [Tuft](https://tuft.dev)
* [Express](https://expressjs.com)
* [Koa](https://koajs.com)
* [Hapi](https://hapi.dev)
* [Fastify](https://fastify.io)

## Methodology

The results below were obtained using two CPU-optimized instances in the same VPC on [Digital Ocean](https://www.digitalocean.com). The application servers were executed on the first instance (the server), and the load testing was performed on the second instance (the client) using [AutoCannon](https://github.com/mcollina/autocannon#readme).

## Results

* **Date:** September 16, 2020
* **Hardware:** Digital Ocean CPU-optimized droplet
* **OS:** Ubuntu 20.04 (LTS) x64
* **Node version:** 12.18.4
* **Client command:** `autocannon -c 100 -d 40` (two rounds: one for warm-up, one for results)

| Framework     | Version | Req/s  | Bytes/s (MB) | Latency (ms) |
| ------------- | ------- | ------ | ------------ | ------------ |
| *none*        | N/A     | 22,474 | 3.48         | 4.08         |
| **Tuft**      | 2.3.1   | 20,872 | 3.23         | 4.17         |
| Fastify       | 3.4.1   | 18,858 | 2.92         | 5.08         |
| Koa           | 2.13.0  | 14,959 | 2.32         | 6.14         |
| Hapi          | 20.0.0  | 12,583 | 2.53         | 7.28         |
| Express       | 4.17.1  | 6,037  | 1.32         | 16.1         |


## People
The creator and maintainer of Tuft is [Stuart Kennedy](https://github.com/rav2040).

## License
[MIT](https://github.com/tuftjs/bench/blob/master/LICENSE)
