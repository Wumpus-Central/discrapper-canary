i.d(t, { A: () => r });
var s = i(132500),
    n = i(954571),
    a = i(652215);
let r = new (class {
    searchSessionId = null;
    searchSessionStartTime = null;
    isQueryEnteredTracked = !1;
    getSearchSessionId() {
        return this.searchSessionId;
    }
    isSessionActive() {
        return null != this.searchSessionId;
    }
    initialize() {
        (this.searchSessionId = (0, s.A)()),
            (this.searchSessionStartTime = Date.now()),
            (this.isQueryEnteredTracked = !1);
    }
    maybeTrackQueryEntered() {
        this.isQueryEnteredTracked ||
            (n.default.track(a.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, { search_session_id: r.getSearchSessionId() }),
            (this.isQueryEnteredTracked = !0));
    }
    terminate() {
        null != this.searchSessionId &&
            null != this.searchSessionStartTime &&
            (!(function (e) {
                let { searchSessionDuration: t } = e;
                n.default.track(a.HAw.USER_SETTINGS_SEARCH_CLOSED, {
                    search_session_id: r.getSearchSessionId(),
                    search_session_duration_ms: t,
                });
            })({ searchSessionDuration: Date.now() - this.searchSessionStartTime }),
            (this.searchSessionId = null),
            (this.searchSessionStartTime = null),
            (this.isQueryEnteredTracked = !1));
    }
})();
