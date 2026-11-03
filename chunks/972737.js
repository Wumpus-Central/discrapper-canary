e.d(n, { O: () => s, i: () => c });
var i = e(477900),
    a = e(192308),
    d = e(834730),
    r = e(105292);
function s(t) {
    let { body: n, ...r } = t;
    (0, a.openModalLazy)(async () => {
        let { VoidConfirmModal: t } = await Promise.all([
            e.e("304823"),
            e.e("223976"),
            e.e("288688"),
            e.e("977260"),
        ]).then(e.bind(e, 397927));
        return (e) =>
            (0, i.jsx)(t, { ...e, ...r, children: (0, i.jsx)(d.E, { variant: "body-md/normal", children: n }) });
    });
}
function c(t) {
    let { message: n } = t;
    s({ header: r.intl.string(r.t.OjbtDm), confirmText: r.intl.string(r.t.BddRzS), body: n });
}
