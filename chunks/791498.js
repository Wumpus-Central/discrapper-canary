n.d(t, { q: () => l });
var i = n(64700),
    s = n(954571),
    a = n(652215);
function l(e) {
    return i.useCallback(() => {
        let t = e;
        for (; "parent" in t && null != t.parent; ) t = t.parent;
        let n = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != n && s.default.track(a.HAw.UI_SETTING_INTERACTED, { key: n, setting_type: t.analyticsKey ?? t.key });
    }, [e]);
}
