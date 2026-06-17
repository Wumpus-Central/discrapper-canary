"use strict";
n.d(t, { A: () => a });
var i = n(835245),
    r = n(174459),
    s = n(652215);
let a = new (class {
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
        (this.searchSessionId = (0, i.A)()),
            (this.searchSessionStartTime = Date.now()),
            (this.isQueryEnteredTracked = !1);
    }
    maybeTrackQueryEntered() {
        this.isQueryEnteredTracked ||
            (r.default.track(s.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, { search_session_id: a.getSearchSessionId() }),
            (this.isQueryEnteredTracked = !0));
    }
    terminate() {
        null != this.searchSessionId &&
            null != this.searchSessionStartTime &&
            (!(function (e) {
                let { searchSessionDuration: t } = e;
                r.default.track(s.HAw.USER_SETTINGS_SEARCH_CLOSED, {
                    search_session_id: a.getSearchSessionId(),
                    search_session_duration_ms: t,
                });
            })({ searchSessionDuration: Date.now() - this.searchSessionStartTime }),
            (this.searchSessionId = null),
            (this.searchSessionStartTime = null),
            (this.isQueryEnteredTracked = !1));
    }
})();
