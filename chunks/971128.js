(n.d(t, { ZP: () => u }), n(388685));
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
function l(e, t) {
    return {
        sessionId: (0, r.Z)(),
        searchLocation: null != t ? t : null,
        selectedSearchTab: null != e ? e : null,
        searchCount: 0,
        searchWithFiltersCount: 0
    };
}
new i.Z('SearchSessionAnalyticsManager');
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
    incrementSearchCount(e, t) {
        var n, r;
        let i = this.getState(e),
            a = {};
        ((a.searchCount = (null != (n = null == i ? void 0 : i.searchCount) ? n : 0) + 1), t && (a.searchWithFiltersCount = (null != (r = null == i ? void 0 : i.searchWithFiltersCount) ? r : 0) + 1), this.upsertState(e, a));
    }
    getSearchCount(e) {
        var t, n;
        return null != (n = null == (t = this.getState(e)) ? void 0 : t.searchCount) ? n : 0;
    }
    getSearchWithFiltersCount(e) {
        var t, n;
        return null != (n = null == (t = this.getState(e)) ? void 0 : t.searchWithFiltersCount) ? n : 0;
    }
    getSearchCountWithoutFilters(e) {
        return Math.max(0, this.getSearchCount(e) - this.getSearchWithFiltersCount(e));
    }
    setSelectedSearchTab(e, t) {
        null != t && this.upsertState(e, { selectedSearchTab: t });
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
        let t = (0, a.Tm)(e);
        this.searchQueryIds.set(t, (0, r.Z)());
    }
    getQueryId(e) {
        let t = (0, a.Tm)(e);
        return this.searchQueryIds.get(t);
    }
    getSelectedSearchTab(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.selectedSearchTab;
    }
    initialize(e) {
        let { searchContext: t, initialTab: n, initializeSearchQueryId: i, searchLocation: o } = e,
            s = (0, a.Tm)(t);
        (this.sessions.has(s) || this.sessions.set(s, l(n, o)), i && !this.searchQueryIds.has(s) && this.searchQueryIds.set(s, (0, r.Z)()));
    }
    terminate(e) {
        let t = (0, a.Tm)(e);
        (this.sessions.delete(t), this.searchQueryIds.delete(t));
    }
    hasSession(e) {
        let t = (0, a.Tm)(e);
        return this.sessions.has(t);
    }
    constructor() {
        (o(this, 'sessions', new Map()), o(this, 'searchQueryIds', new Map()));
    }
}
let u = new c();
