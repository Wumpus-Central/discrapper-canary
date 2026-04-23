l.d(t, { A: () => x });
var n = l(627968);
l(64700);
var i = l(192308),
    s = l(821609),
    a = l(141006),
    r = l(954571),
    d = l(191627),
    c = l(652215),
    u = l(602339),
    o = l(985018);
function x() {
    let e = o.intl.string(u.default["8SLtqb"]);
    return (0, n.jsx)(s.$, {
        icon: a.y,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("53242"), l.e("84268")]).then(l.bind(l, 320742));
                return (t) => (0, n.jsx)(e, { ...t });
            }),
                r.default.track(c.HAw.FAMILY_CENTER_ACTION, { action: d.qb.ShowQRCodeModal });
        },
    });
}
