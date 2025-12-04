n.d(t, { O: () => f });
var r = n(661822),
    i = n(898491),
    a = n(910316),
    o = n(732418);
class s {
    constructor(e, t) {
        let n, r;
        (n = e || new a.s()), (r = t || new a.s()), (this._stack = [{ scope: n }]), (this._isolationScope = r);
    }
    withScope(e) {
        let t,
            n = this._pushScope();
        try {
            t = e(n);
        } catch (e) {
            throw (this._popScope(), e);
        }
        return (0, r.J8)(t)
            ? t.then(
                  (e) => (this._popScope(), e),
                  (e) => {
                      throw (this._popScope(), e);
                  },
              )
            : (this._popScope(), t);
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        let e = this.getScope().clone();
        return (
            this._stack.push({
                client: this.getClient(),
                scope: e,
            }),
            e
        );
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function l() {
    let e = (0, o.c)(),
        t = (0, o.q)(e);
    return (t.stack = t.stack || new s((0, i.X)(), (0, i.T)()));
}
function c(e) {
    return l().withScope(e);
}
function u(e, t) {
    let n = l();
    return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function d(e) {
    return l().withScope(() => e(l().getIsolationScope()));
}
function f() {
    return {
        withIsolationScope: d,
        withScope: c,
        withSetScope: u,
        withSetIsolationScope: (e, t) => d(t),
        getCurrentScope: () => l().getScope(),
        getIsolationScope: () => l().getIsolationScope(),
    };
}
