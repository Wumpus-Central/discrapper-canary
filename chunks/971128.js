n.d(t, { Z: () => u }), n(388685);
var r = n(772848),
    i = n(710845),
    a = n(607802);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e) {
    return {
        sessionId: (0, r.Z)(),
        searchQueryId: null,
        searchLocation: null != e ? e : null,
    };
}
new i.Z("SearchSessionAnalyticsManager");
class c {
    upsertState(e, t) {
        let n = (0, a.Tm)(e),
            r = this.sessions.get(n),
            i = null != r ? r : l();
        this.sessions.set(n, s({}, i, t));
    }
    getState(e) {
        let t = (0, a.Tm)(e);
        return this.sessions.get(t);
    }
    getSessionId(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.sessionId;
    }
    getSearchLocation(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.searchLocation;
    }
    refreshSearchQueryAnalyticsId(e) {
        this.upsertState(e, { searchQueryId: (0, r.Z)() });
    }
    getQueryId(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.searchQueryId;
    }
    initialize(e) {
        let { searchContext: t, searchLocation: n } = e,
            r = (0, a.Tm)(t);
        this.sessions.set(r, l(n));
    }
    terminate(e) {
        let t = (0, a.Tm)(e);
        this.sessions.delete(t);
    }
    constructor() {
        o(this, "sessions", new Map());
    }
}
let u = new c();
