n.d(t, {
    $2: () => _,
    WD: () => o,
    cW: () => s,
});
var r,
    i,
    a = n(661822);
function o(e) {
    return new s((t) => {
        t(e);
    });
}
function _(e) {
    return new s((t, n) => {
        n(e);
    });
}
((r = i || (i = {}))[(r.PENDING = 0)] = "PENDING"),
    (r[(r.RESOLVED = 1)] = "RESOLVED"),
    (r[(r.REJECTED = 2)] = "REJECTED");
class s {
    constructor(e) {
        s.prototype.__init.call(this),
            s.prototype.__init2.call(this),
            s.prototype.__init3.call(this),
            s.prototype.__init4.call(this),
            (this._state = i.PENDING),
            (this._handlers = []);
        try {
            e(this._resolve, this._reject);
        } catch (e) {
            this._reject(e);
        }
    }
    then(e, t) {
        return new s((n, r) => {
            this._handlers.push([
                !1,
                (t) => {
                    if (e)
                        try {
                            n(e(t));
                        } catch (e) {
                            r(e);
                        }
                    else n(t);
                },
                (e) => {
                    if (t)
                        try {
                            n(t(e));
                        } catch (e) {
                            r(e);
                        }
                    else r(e);
                },
            ]),
                this._executeHandlers();
        });
    }
    catch(e) {
        return this.then((e) => e, e);
    }
    finally(e) {
        return new s((t, n) => {
            let r, i;
            return this.then(
                (t) => {
                    (i = !1), (r = t), e && e();
                },
                (t) => {
                    (i = !0), (r = t), e && e();
                },
            ).then(() => {
                if (i) return void n(r);
                t(r);
            });
        });
    }
    __init() {
        this._resolve = (e) => {
            this._setResult(i.RESOLVED, e);
        };
    }
    __init2() {
        this._reject = (e) => {
            this._setResult(i.REJECTED, e);
        };
    }
    __init3() {
        this._setResult = (e, t) => {
            if (this._state === i.PENDING) {
                if ((0, a.J8)(t)) return void t.then(this._resolve, this._reject);
                (this._state = e), (this._value = t), this._executeHandlers();
            }
        };
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === i.PENDING) return;
            let e = this._handlers.slice();
            (this._handlers = []),
                e.forEach((e) => {
                    e[0] ||
                        (this._state === i.RESOLVED && e[1](this._value),
                        this._state === i.REJECTED && e[2](this._value),
                        (e[0] = !0));
                });
        };
    }
}
