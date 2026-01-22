n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(64983),
    l = n(997509),
    a = n(320426),
    s = n(652215),
    o = n(985018),
    c = n(693248);

function u(e) {
    let { guild: t } = e,
        n = () => a.A.dismissNotice(t.id);
    return (0, r.jsx)(i.A, {
        guild: t,
        onDismissed: n,
        cta: o.intl.string(o.t.RzWDqY),
        message: o.intl.format(o.t["kQ/MDl"], {}),
        type: s.n5X.COMMANDS_MIGRATION,
        image: c,
        onClick: () => {
            n(), l.A.open(t.id, s.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
