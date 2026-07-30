"use strict";
n.d(t, { A: () => i }), n(321073);
class i {
    _capacity;
    _tokenCount;
    _queue;
    _intervalPeriod;
    _intervalID;
    constructor(e, t) {
        (this._capacity = e),
            (this._tokenCount = e),
            (this._queue = []),
            (this._intervalPeriod = t / e),
            (this._intervalID = null);
    }
    _processQueue() {
        setTimeout(() => {
            if (this._queue.length > 0 && this._tokenCount > 0) {
                this._tokenCount--,
                    null == this._intervalID &&
                        (this._intervalID = setInterval(() => this._iterate(), this._intervalPeriod));
                let e = this._queue.shift();
                e?.resolve(), this._processQueue();
            }
        }, 0);
    }
    _iterate() {
        (this._tokenCount = Math.min(this._capacity, this._tokenCount + 1)),
            this._tokenCount >= this._capacity &&
                null != this._intervalID &&
                (clearInterval(this._intervalID), (this._intervalID = null)),
            this._processQueue();
    }
    process(e) {
        return new Promise((t, n) => {
            if (e?.aborted) return void n(Error("Already aborted"));
            let i = { resolve: t, signal: e };
            this._queue.push(i),
                e &&
                    e.addEventListener(
                        "abort",
                        () => {
                            let e = this._queue.indexOf(i);
                            e >= 0 && this._queue.splice(e, 1), n(Error("Aborted"));
                        },
                        { once: !0 },
                    ),
                this._processQueue();
        });
    }
}
