n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(954571),
    a = n(191627),
    l = n(652215),
    o = n(842130),
    c = n(985018);
function d() {
    let e = c.intl.string(o.default["8SLtqb"]);
    return (0, i.jsx)(s.Button, {
        icon: s.yVk,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("50906"), n.e("84268")]).then(n.bind(n, 320742));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
                r.default.track(l.HAw.FAMILY_CENTER_ACTION, { action: a.qb.ShowQRCodeModal });
        },
    });
}
