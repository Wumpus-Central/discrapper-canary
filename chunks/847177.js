n.d(t, {
    A: () => c,
}),
    n(733351),
    n(896048);
var r = n(440594),
    i = n(765379),
    l = n(960076),
    a = n(652215),
    s = n(985018);

function o(e, t) {
    if (null != e && e.type === a.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== a.$pd.PLAYING ? s.intl.string(s.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, l.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, i.A)(e)) return (0, r.A)(e.name);
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
        let r = null;
        for (let e of n) {
            let n = o(e, t);
            if (null != n)
                return {
                    activity: e,
                    activityText: n,
                };
            (null == e ? void 0 : e.type) === a.$pd.CUSTOM_STATUS && null != e.emoji && (r = e);
        }
        return (null == r ? void 0 : r.emoji) != null
            ? {
                  activity: r,
                  activityText: null,
              }
            : null;
    }
    return o(e, t);
}
