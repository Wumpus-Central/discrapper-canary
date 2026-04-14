n.d(t, { q: () => a });
var i = n(64700),
    s = n(954571),
    l = n(324593),
    r = n(652215);
function a(e) {
    return i.useCallback(() => {
        let t = e;
        for (; "parent" in t && null != t.parent; ) t = t.parent;
        let n = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != n &&
            s.default.track(r.HAw.UI_SETTING_INTERACTED, {
                key: n,
                setting_type: t.analyticsKey ?? t.key,
                search_session_id: l.A.getSearchSessionId(),
            });
    }, [e]);
}
