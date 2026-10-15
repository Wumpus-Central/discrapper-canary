n.d(e, { O: () => s, i: () => c });
var i = n(477900),
    a = n(192308),
    r = n(834730),
    d = n(105292);
function s(t) {
    let { body: e, ...d } = t;
    (0, a.openModalLazy)(async () => {
        let { VoidConfirmModal: t } = await Promise.all([
            n.e("304823"),
            n.e("223976"),
            n.e("288688"),
            n.e("977260"),
        ]).then(n.bind(n, 397927));
        return (n) =>
            (0, i.jsx)(t, { ...n, ...d, children: (0, i.jsx)(r.E, { variant: "text-md/normal", children: e }) });
    });
}
function c(t) {
    let { message: e } = t;
    s({ header: d.intl.string(d.t.OjbtDm), confirmText: d.intl.string(d.t.BddRzS), body: e });
}
