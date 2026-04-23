t.d(n, { q: () => a });
var l = t(64700),
    r = t(954571),
    i = t(324593),
    s = t(652215);
function a(e) {
    return l.useCallback(() => {
        let n = e;
        for (; "parent" in n && null != n.parent; ) n = n.parent;
        let t = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != t &&
            r.default.track(s.HAw.UI_SETTING_INTERACTED, {
                key: t,
                setting_type: n.analyticsKey ?? n.key,
                search_session_id: i.A.getSearchSessionId(),
            });
    }, [e]);
}
