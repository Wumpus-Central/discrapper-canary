_.d(e, {
    $2: () => E,
    WD: () => o,
    cW: () => i,
});
var a,
    r,
    n = _(573736);
function o(t) {
    return new i((e) => {
        e(t);
    });
}
function E(t) {
    return new i((e, _) => {
        _(t);
    });
}
((a = r || (r = {}))[(a.PENDING = 0)] = "PENDING"),
    (a[(a.RESOLVED = 1)] = "RESOLVED"),
    (a[(a.REJECTED = 2)] = "REJECTED");
class i {
    constructor(t) {
        i.prototype.__init.call(this),
            i.prototype.__init2.call(this),
            i.prototype.__init3.call(this),
            i.prototype.__init4.call(this),
            (this._state = r.PENDING),
            (this._handlers = []);
        try {
            t(this._resolve, this._reject);
        } catch (t) {
            this._reject(t);
        }
    }
    then(t, e) {
        return new i((_, a) => {
            this._handlers.push([
                !1,
                (e) => {
                    if (t)
                        try {
                            _(t(e));
                        } catch (t) {
                            a(t);
                        }
                    else _(e);
                },
                (t) => {
                    if (e)
                        try {
                            _(e(t));
                        } catch (t) {
                            a(t);
                        }
                    else a(t);
                },
            ]),
                this._executeHandlers();
        });
    }
    catch(t) {
        return this.then((t) => t, t);
    }
    finally(t) {
        return new i((e, _) => {
            let a, r;
            return this.then(
                (e) => {
                    (r = !1), (a = e), t && t();
                },
                (e) => {
                    (r = !0), (a = e), t && t();
                },
            ).then(() => {
                if (r) return void _(a);
                e(a);
            });
        });
    }
    __init() {
        this._resolve = (t) => {
            this._setResult(r.RESOLVED, t);
        };
    }
    __init2() {
        this._reject = (t) => {
            this._setResult(r.REJECTED, t);
        };
    }
    __init3() {
        this._setResult = (t, e) => {
            if (this._state === r.PENDING) {
                if ((0, n.J8)(e)) return void e.then(this._resolve, this._reject);
                (this._state = t), (this._value = e), this._executeHandlers();
            }
        };
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === r.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
                t.forEach((t) => {
                    t[0] ||
                        (this._state === r.RESOLVED && t[1](this._value),
                        this._state === r.REJECTED && t[2](this._value),
                        (t[0] = !0));
                });
        };
    }
}
