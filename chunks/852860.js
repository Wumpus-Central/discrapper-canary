a.d(t, { A: () => _, o: () => h }), a(321073);
var n = a(627968),
    i = a(64700),
    s = a(397927),
    l = a(503879),
    r = a(710016),
    o = a(644576),
    c = a(590858),
    d = a(652215),
    u = a(985018);
function h(e) {
    return `${e.split("?")[0]}?size=2048`;
}
let m = (e) => {
    let { index: t, items: a, ...i } = e,
        s = a[t],
        l = 0,
        o = [];
    for (let e of a)
        if (e.type === d.geh.IMG) {
            let { width: t, height: a, src: n } = e;
            e === s && (l = o.length), o.push({ src: h(n), width: t, height: a });
        }
    return (0, n.jsx)(r.A, { ...i, items: o, startWith: l });
};
class p extends i.Component {
    handleCurrentItemClick = (e, t) => {
        e.type !== d.geh.IMG ||
            (0, s.ueM)() ||
            (0, s.qfG)((e) =>
                (0, n.jsx)(s.EOs, {
                    size: s.rIJ.DYNAMIC,
                    "aria-label": u.intl.string(u.t.X4IxWL),
                    ...e,
                    parentComponent: "ApplicationStoreListingCarousel",
                    children: (0, n.jsx)(m, { ...e, index: t, items: this.props.items }),
                }),
            );
    };
    render() {
        let { pageSize: e, ...t } = this.props,
            a = e === c.q.SMALL ? o.A : l.A;
        return (0, n.jsx)(a, { ...t, onCurrentItemClick: this.handleCurrentItemClick });
    }
}
let _ = p;
