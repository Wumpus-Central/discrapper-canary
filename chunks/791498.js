n.d(t, { q: () => r });
var i = n(64700),
    s = n(954571),
    l = n(652215);
function r(e) {
    return i.useCallback(() => {
        let t = e;
        for (; "parent" in t && null != t.parent; ) t = t.parent;
        let n = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != n && s.default.track(l.HAw.UI_SETTING_INTERACTED, { key: n, setting_type: t.analyticsKey ?? t.key });
    }, [e]);
}
