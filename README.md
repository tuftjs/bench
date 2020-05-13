# Tuft Benchmark Comparison

This repository contains a suite of mini-applications for a few different *routing-enabled* frameworks, including Tuft, that have been set up for benchmarking purposes.

The frameworks to be tested include:

* No framework (native Node app)
* [Tuft](https://tuft.dev)
* [Hapi](https://hapi.dev)
* [Fastify](https://fastify.io)
* [Koa](https://koajs.com)

As Tuft is an HTTP/2-only framework, this benchmarking suite aims to only test HTTP/2 performance. If there is another Node.js web framework (that supports HTTP/2) you feel should be on the list, then feel free to submit a pull request.

## How to test

To get the most reliable results, you should be using two systems that do not share resources with other systems. You could create two "general purpose" droplets on [Digital Ocean](https://www.digitalocean.com) which have access to each other on a private network to achieve this. However, the exact process for accomplishing this is outside the scope of this guide.

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

The benchmark results below use `h2load`, which comes with [nghttp2](https://nghttp2.org/).

## Results

Date of test: XXXXX
