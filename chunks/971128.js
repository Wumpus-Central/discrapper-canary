(r.d(t, { Z: () => o }), r(388685));
var n = r(772848),
    s = r(710845),
    l = r(607802);
function a(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function i(e) {
    return {
        sessionId: (0, n.Z)(),
        selectedSearchTab: null != e ? e : null,
        searchCount: 0,
        searchWithFiltersCount: 0
    };
}
new s.Z('SearchSessionAnalyticsManager');
let o = new (class {
    upsertState(e, t) {
        let r = (0, l.Tm)(e),
            n = this.sessions.get(r),
            s = null != n ? n : i();
        this.sessions.set(
            r,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            a(e, t, r[t]);
                        }));
                }
                return e;
            })({}, s, t)
        );
    }
    getState(e) {
        let t = (0, l.Tm)(e);
        return this.sessions.get(t);
    }
    incrementSearchCount(e, t) {
        var r, n;
        let s = this.getState(e),
            l = {};
        ((l.searchCount = (null != (r = null == s ? void 0 : s.searchCount) ? r : 0) + 1), t && (l.searchWithFiltersCount = (null != (n = null == s ? void 0 : s.searchWithFiltersCount) ? n : 0) + 1), this.upsertState(e, l));
    }
    getSearchCount(e) {
        var t, r;
        return null != (r = null == (t = this.getState(e)) ? void 0 : t.searchCount) ? r : 0;
    }
    getSearchWithFiltersCount(e) {
        var t, r;
        return null != (r = null == (t = this.getState(e)) ? void 0 : t.searchWithFiltersCount) ? r : 0;
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
    refreshSearchQueryAnalyticsId(e) {
        let t = (0, l.Tm)(e);
        this.searchQueryIds.set(t, (0, n.Z)());
    }
    getQueryId(e) {
        let t = (0, l.Tm)(e);
        return this.searchQueryIds.get(t);
    }
    getSelectedSearchTab(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.selectedSearchTab;
    }
    initialize(e) {
        let { searchContext: t, initialTab: r, initializeSearchQueryId: s } = e,
            a = (0, l.Tm)(t);
        (this.sessions.has(a) || this.sessions.set(a, i(r)), s && !this.searchQueryIds.has(a) && this.searchQueryIds.set(a, (0, n.Z)()));
    }
    terminate(e) {
        let t = (0, l.Tm)(e);
        (this.sessions.delete(t), this.searchQueryIds.delete(t));
    }
    constructor() {
        (a(this, 'sessions', new Map()), a(this, 'searchQueryIds', new Map()));
    }
})();
