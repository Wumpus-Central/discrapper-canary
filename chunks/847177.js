n.d(t, { A: () => c });
var i = n(440594),
    s = n(765379),
    l = n(960076),
    a = n(652215),
    r = n(985018);
function o(e, t) {
    if (null != e && e.type === a.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== a.$pd.PLAYING ? r.intl.string(r.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, l.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, s.A)(e)) return (0, i.A)(e.name);
    var n = e.type,
        o = e.name;
    switch (n) {
        case a.$pd.LISTENING:
        case a.$pd.WATCHING:
        case a.$pd.COMPETING:
        case a.$pd.STREAMING:
            return o;
        case a.$pd.CUSTOM_STATUS:
        case a.$pd.HANG_STATUS:
            return null;
        case a.$pd.PLAYING:
        default:
            return o;
    }
}
function c(e, t) {
    if (Array.isArray(e)) {
        let n = e;
        null != t && !1 !== t.discoverable && (n = [...n, null]);
        let i = null;
        for (let e of n) {
            let n = o(e, t);
            if (null != n) return { activity: e, activityText: n };
            e?.type === a.$pd.CUSTOM_STATUS && null != e.emoji && (i = e);
        }
        return i?.emoji != null ? { activity: i, activityText: null } : null;
    }
    return o(e, t);
}
