n.d(t, { R: () => d });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(434404),
    o = n(999382),
    c = n(203377);
function d() {
    let { guild: e, submitting: t, errors: n } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        d = r.useMemo(() => (0, c.LG)(n), [n]),
        u = r.useCallback(() => {
            null != e &&
                a.Z.saveGuild(e.id, {
                    systemChannelFlags: e.systemChannelFlags,
                    systemChannelId: e.systemChannelId,
                    afkChannelId: e.afkChannelId,
                    afkTimeout: e.afkTimeout
                });
        }, [e]),
        m = r.useCallback(() => {
            null != e && a.Z.init(e.id);
        }, [e]);
    return (0, i.jsx)(s.Z, {
        submitting: t,
        errorMessage: d,
        onSave: u,
        onReset: m
    });
}
