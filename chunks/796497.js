n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(954571),
    a = n(191627),
    r = n(652215),
    o = n(842130),
    d = n(985018);
function c() {
    let e = d.intl.string(o.default["8SLtqb"]);
    return (0, i.jsx)(s.Button, {
        icon: s.yVk,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("77406"), n.e("84268")]).then(n.bind(n, 320742));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
                l.default.track(r.HAw.FAMILY_CENTER_ACTION, { action: a.qb.ShowQRCodeModal });
        },
    });
}
