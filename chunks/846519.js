function i(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    GR: function () {
        return l;
    },
    V7: function () {
        return a;
    },
    Xp: function () {
        return s;
    },
    sW: function () {
        return o;
    }
});
class a {
    start(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!this.isStarted() || !!r)
            this.stop(),
                (this._ref = window.setTimeout(() => {
                    (this._ref = null), n();
                }, e));
    }
    stop() {
        null != this._ref && (clearTimeout(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
    constructor() {
        i(this, '_ref', void 0);
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
    constructor(e, n) {
        i(this, '_timeout', void 0), i(this, '_delay', void 0), i(this, '_handler', void 0), (this._delay = e), (this._handler = n), (this._timeout = new a());
    }
}
class s {
    start(e, n) {
        this.stop(), (this._ref = window.setInterval(n, e));
    }
    stop() {
        null != this._ref && (clearInterval(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
    constructor() {
        i(this, '_ref', void 0);
    }
}
function l(e) {
    return new Promise((n) => {
        setTimeout(() => n(), e);
    });
}
