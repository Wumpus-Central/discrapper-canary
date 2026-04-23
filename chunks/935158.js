n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(926466),
    a = n(997509),
    l = n(320426),
    s = n(652215),
    o = n(985018),
    d = n(693248);
function u(e) {
    let { guild: t } = e,
        n = () => l.A.dismissNotice(t.id);
    return (0, i.jsx)(r.A, {
        guild: t,
        onDismissed: n,
        cta: o.intl.string(o.t.RzWDqY),
        message: o.intl.format(o.t["kQ/MDl"], {}),
        type: s.n5X.COMMANDS_MIGRATION,
        image: d,
        onClick: () => {
            n(), a.A.open(t.id, s.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
