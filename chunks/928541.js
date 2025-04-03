a.d(e, {
    $2: () => i,
    WD: () => o,
    cW: () => c
});
var r,
    n,
    _ = a(573736);
function o(t) {
    return new c((e) => {
        e(t);
    });
}
function i(t) {
    return new c((e, a) => {
        a(t);
    });
}
((r = n || (n = {}))[(r.PENDING = 0)] = 'PENDING'), (r[(r.RESOLVED = 1)] = 'RESOLVED'), (r[(r.REJECTED = 2)] = 'REJECTED');
class c {
    constructor(t) {
        c.prototype.__init.call(this), c.prototype.__init2.call(this), c.prototype.__init3.call(this), c.prototype.__init4.call(this), (this._state = n.PENDING), (this._handlers = []);
        try {
            t(this._resolve, this._reject);
        } catch (t) {
            this._reject(t);
        }
    }
    then(t, e) {
        return new c((a, r) => {
            this._handlers.push([
                !1,
                (e) => {
                    if (t)
                        try {
                            a(t(e));
                        } catch (t) {
                            r(t);
                        }
                    else a(e);
                },
                (t) => {
                    if (e)
                        try {
                            a(e(t));
                        } catch (t) {
                            r(t);
                        }
                    else r(t);
                }
            ]),
                this._executeHandlers();
        });
    }
    catch(t) {
        return this.then((t) => t, t);
    }
    finally(t) {
        return new c((e, a) => {
            let r, n;
            return this.then(
                (e) => {
                    (n = !1), (r = e), t && t();
                },
                (e) => {
                    (n = !0), (r = e), t && t();
                }
            ).then(() => {
                if (n) return void a(r);
                e(r);
            });
        });
    }
    __init() {
        this._resolve = (t) => {
            this._setResult(n.RESOLVED, t);
        };
    }
    __init2() {
        this._reject = (t) => {
            this._setResult(n.REJECTED, t);
        };
    }
    __init3() {
        this._setResult = (t, e) => {
            if (this._state === n.PENDING) {
                if ((0, _.J8)(e)) return void e.then(this._resolve, this._reject);
                (this._state = t), (this._value = e), this._executeHandlers();
            }
        };
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === n.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
                t.forEach((t) => {
                    t[0] || (this._state === n.RESOLVED && t[1](this._value), this._state === n.REJECTED && t[2](this._value), (t[0] = !0));
                });
        };
    }
}
