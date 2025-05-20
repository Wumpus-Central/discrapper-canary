function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    GR: () => s,
    V7: () => i,
    Xp: () => a,
    sW: () => o
});
class i {
    start(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        (!this.isStarted() || n) &&
            (this.stop(),
            (this._ref = window.setTimeout(() => {
                (this._ref = null), t();
            }, e)));
    }
    stop() {
        null != this._ref && (clearTimeout(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
    constructor() {
        r(this, '_ref', void 0);
    }
}
class o {
    set(e) {
        return (this._delay = e), this;
    }
    delay() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        this._timeout.start(this._delay, this._handler, e);
    }
    cancel() {
        this._timeout.stop();
    }
    isDelayed() {
        return this._timeout.isStarted();
    }
    constructor(e, t) {
        r(this, '_timeout', void 0), r(this, '_delay', void 0), r(this, '_handler', void 0), (this._delay = e), (this._handler = t), (this._timeout = new i());
    }
}
class a {
    start(e, t) {
        this.stop(), (this._ref = window.setInterval(t, e));
    }
    stop() {
        null != this._ref && (clearInterval(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
    constructor() {
        r(this, '_ref', void 0);
    }
}
function s(e) {
    return new Promise((t) => {
        setTimeout(() => t(), e);
    });
}
