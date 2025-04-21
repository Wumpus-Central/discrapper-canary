n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(852860),
    a = n(999382),
    o = n(8426),
    c = n(969632),
    d = n(388032);
function u(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getSettings()),
        a = (0, l.e7)([c.Z], () => c.Z.getSubmitting()),
        u = i.useCallback(() => {
            try {
                (0, o.oo)(t, n);
            } catch (e) {}
        }, [t, n]);
    return (0, r.jsx)(s.Z, {
        onSave: u,
        onReset: o.bj,
        submitting: a,
        onSaveText: d.intl.string(d.t.R3BPHx)
    });
}
let m = function () {
    let e = (0, l.e7)([a.Z], () => a.Z.getGuild());
    return null == e ? null : (0, r.jsx)(u, { guildId: e.id });
};
