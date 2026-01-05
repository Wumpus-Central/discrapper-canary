n.d(t, { Z: () => l }), n(388685);
var r = n(772848),
    i = n(607802);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function s() {
    return {
        sessionId: (0, r.Z)(),
        searchQueryId: null,
    };
}
class l {
    getSession(e) {
        var t;
        return null != (t = this.sessions.get((0, i.Tm)(e))) ? t : null;
    }
    setSession(e, t) {
        var n;
        let r = (0, i.Tm)(e),
            a = null != (n = this.sessions.get(r)) ? n : s();
        this.sessions.set(r, o({}, a, t));
    }
    deleteSession(e) {
        this.sessions.delete((0, i.Tm)(e));
    }
    getSessionId(e) {
        var t, n;
        return null != (n = null == (t = this.getSession(e)) ? void 0 : t.sessionId) ? n : null;
    }
    getQueryId(e) {
        var t, n;
        return null != (n = null == (t = this.getSession(e)) ? void 0 : t.searchQueryId) ? n : null;
    }
    refreshQueryId(e) {
        this.setSession(e, { searchQueryId: (0, r.Z)() });
    }
    initialize(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        this._initialize(e, ...n),
            this.setSession(e, {
                sessionId: (0, r.Z)(),
                searchQueryId: null,
            });
    }
    terminate(e) {
        this._terminate(e), this.deleteSession(e);
    }
    transferSession(e, t) {
        this._transferSession(e, t);
        let n = this.getSession(e);
        this.sessions.set((0, i.Tm)(t), null != n ? n : s()), this.deleteSession(e);
    }
    constructor() {
        a(this, "sessions", new Map());
    }
}
