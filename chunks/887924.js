"use strict";
let r = n(20816),
    i = n(978884),
    s = n(597084),
    a = () => {},
    o = new i.TimeoutError();
t.default = class extends r {
    constructor(e) {
        var t, n, r, i;
        if (
            (super(),
            (this._intervalCount = 0),
            (this._intervalEnd = 0),
            (this._pendingCount = 0),
            (this._resolveEmpty = a),
            (this._resolveIdle = a),
            !(
                "number" ==
                    typeof (e = Object.assign(
                        {
                            carryoverConcurrencyCount: !1,
                            intervalCap: 1 / 0,
                            interval: 0,
                            concurrency: 1 / 0,
                            autoStart: !0,
                            queueClass: s.default,
                        },
                        e,
                    )).intervalCap && e.intervalCap >= 1
            ))
        )
            throw TypeError(
                `Expected \`intervalCap\` to be a number from 1 and up, got \`${null != ((n = null == (t = e.intervalCap) ? void 0 : t.toString())) ? n : ""}\` (${typeof e.intervalCap})`,
            );
        if (void 0 === e.interval || !(Number.isFinite(e.interval) && e.interval >= 0))
            throw TypeError(
                `Expected \`interval\` to be a finite number >= 0, got \`${null != ((i = null == (r = e.interval) ? void 0 : r.toString())) ? i : ""}\` (${typeof e.interval})`,
            );
        (this._carryoverConcurrencyCount = e.carryoverConcurrencyCount),
            (this._isIntervalIgnored = e.intervalCap === 1 / 0 || 0 === e.interval),
            (this._intervalCap = e.intervalCap),
            (this._interval = e.interval),
            (this._queue = new e.queueClass()),
            (this._queueClass = e.queueClass),
            (this.concurrency = e.concurrency),
            (this._timeout = e.timeout),
            (this._throwOnTimeout = !0 === e.throwOnTimeout),
            (this._isPaused = !1 === e.autoStart);
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--, this._tryToStartAnother(), this.emit("next");
    }
    _resolvePromises() {
        this._resolveEmpty(),
            (this._resolveEmpty = a),
            0 === this._pendingCount && (this._resolveIdle(), (this._resolveIdle = a), this.emit("idle"));
    }
    _onResumeInterval() {
        this._onInterval(), this._initializeIntervalIfNeeded(), (this._timeoutId = void 0);
    }
    _isIntervalPaused() {
        let e = Date.now();
        if (void 0 === this._intervalId) {
            let t = this._intervalEnd - e;
            if (!(t < 0))
                return (
                    void 0 === this._timeoutId &&
                        (this._timeoutId = setTimeout(() => {
                            this._onResumeInterval();
                        }, t)),
                    !0
                );
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        }
        return !1;
    }
    _tryToStartAnother() {
        if (0 === this._queue.size)
            return (
                this._intervalId && clearInterval(this._intervalId),
                (this._intervalId = void 0),
                this._resolvePromises(),
                !1
            );
        if (!this._isPaused) {
            let e = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                let t = this._queue.dequeue();
                return !!t && (this.emit("active"), t(), e && this._initializeIntervalIfNeeded(), !0);
            }
        }
        return !1;
    }
    _initializeIntervalIfNeeded() {
        this._isIntervalIgnored ||
            void 0 !== this._intervalId ||
            ((this._intervalId = setInterval(() => {
                this._onInterval();
            }, this._interval)),
            (this._intervalEnd = Date.now() + this._interval));
    }
    _onInterval() {
        0 === this._intervalCount &&
            0 === this._pendingCount &&
            this._intervalId &&
            (clearInterval(this._intervalId), (this._intervalId = void 0)),
            (this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0),
            this._processQueue();
    }
    _processQueue() {
        for (; this._tryToStartAnother(); );
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(e) {
        if (!("number" == typeof e && e >= 1))
            throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
        (this._concurrency = e), this._processQueue();
    }
    async add(e, t = {}) {
        return new Promise((n, r) => {
            let s = async () => {
                this._pendingCount++, this._intervalCount++;
                try {
                    let s =
                        void 0 === this._timeout && void 0 === t.timeout
                            ? e()
                            : i.default(Promise.resolve(e()), void 0 === t.timeout ? this._timeout : t.timeout, () => {
                                  (void 0 === t.throwOnTimeout ? this._throwOnTimeout : t.throwOnTimeout) && r(o);
                              });
                    n(await s);
                } catch (e) {
                    r(e);
                }
                this._next();
            };
            this._queue.enqueue(s, t), this._tryToStartAnother(), this.emit("add");
        });
    }
    async addAll(e, t) {
        return Promise.all(e.map(async (e) => this.add(e, t)));
    }
    start() {
        return this._isPaused && ((this._isPaused = !1), this._processQueue()), this;
    }
    pause() {
        this._isPaused = !0;
    }
    clear() {
        this._queue = new this._queueClass();
    }
    async onEmpty() {
        if (0 !== this._queue.size)
            return new Promise((e) => {
                let t = this._resolveEmpty;
                this._resolveEmpty = () => {
                    t(), e();
                };
            });
    }
    async onIdle() {
        if (0 !== this._pendingCount || 0 !== this._queue.size)
            return new Promise((e) => {
                let t = this._resolveIdle;
                this._resolveIdle = () => {
                    t(), e();
                };
            });
    }
    get size() {
        return this._queue.size;
    }
    sizeBy(e) {
        return this._queue.filter(e).length;
    }
    get pending() {
        return this._pendingCount;
    }
    get isPaused() {
        return this._isPaused;
    }
    get timeout() {
        return this._timeout;
    }
    set timeout(e) {
        this._timeout = e;
    }
};
