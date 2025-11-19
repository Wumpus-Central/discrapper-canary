n.d(t, { q: () => a }), n(953529);
var l = n(473749),
    r = n(894694),
    i = n(388032);
function a(e) {
    return l.useMemo(() => {
        var t, n, l, a;
        if (null != e.name && "" !== e.name) return "";
        if ((null == (t = e.decision) ? void 0 : t.signal) != null) {
            let t = null == (n = e.decision) ? void 0 : n.signal;
            switch (t.type) {
                case r.Bs.GAME_EVENT:
                    return null != (a = null != (l = t.description) ? l : t.title) ? a : i.intl.string(i.t.Cyxddp);
                case r.Bs.PHRASE:
                    return '"'.concat(t.text, '"');
            }
        }
        return i.intl.string(i.t.Cyxddp);
    }, [e.name, e.decision]);
}
