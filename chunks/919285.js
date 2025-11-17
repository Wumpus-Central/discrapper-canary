n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(82950),
    l = n(434404),
    a = n(929507),
    s = n(981631),
    o = n(388032),
    c = n(943935);
function u(e) {
    let { guild: t } = e,
        n = () => a.Z.dismissNotice(t.id);
    return (0, r.jsx)(i.Z, {
        guild: t,
        onDismissed: n,
        cta: o.intl.string(o.t.RzWDqY),
        message: o.intl.format(o.t["kQ/MDl"], {}),
        type: s.vID.COMMANDS_MIGRATION,
        image: c,
        onClick: () => {
            n(), l.Z.open(t.id, s.pNK.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
