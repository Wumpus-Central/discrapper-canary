n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(399606),
    a = n(852860),
    l = n(999382),
    o = n(8426),
    c = n(969632),
    d = n(388032);
function u(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.getSettings()),
        l = (0, s.e7)([c.Z], () => c.Z.getSubmitting()),
        u = i.useCallback(() => {
            try {
                (0, o.oo)(t, n);
            } catch (e) {}
        }, [t, n]);
    return (0, r.jsx)(a.Z, {
        onSave: u,
        onReset: o.bj,
        submitting: l,
        onSaveText: d.NW.string(d.t.R3BPHx)
    });
}
let m = function () {
    let e = (0, s.e7)([l.Z], () => l.Z.getGuild());
    return null == e ? null : (0, r.jsx)(u, { guildId: e.id });
};
