n.d(t, { A: () => d });
var i = n(440594),
    r = n(765379),
    a = n(960076),
    l = n(652215),
    s = n(985018);
function o(e, t) {
    if (null != e && e.type === l.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== l.$pd.PLAYING ? s.intl.string(s.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, a.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, r.A)(e)) return (0, i.A)(e.name);
    var n = e.type,
        o = e.name;
    switch (n) {
        case l.$pd.LISTENING:
        case l.$pd.WATCHING:
        case l.$pd.COMPETING:
        case l.$pd.STREAMING:
            return o;
        case l.$pd.CUSTOM_STATUS:
        case l.$pd.HANG_STATUS:
            return null;
        case l.$pd.PLAYING:
        default:
            return o;
    }
}
function d(e, t) {
    if (Array.isArray(e)) {
        let n = e;
        null != t && !1 !== t.discoverable && (n = [...n, null]);
        let i = null;
        for (let e of n) {
            let n = o(e, t);
            if (null != n) return { activity: e, activityText: n };
            e?.type === l.$pd.CUSTOM_STATUS && null != e.emoji && (i = e);
        }
        return i?.emoji != null ? { activity: i, activityText: null } : null;
    }
    return o(e, t);
}
