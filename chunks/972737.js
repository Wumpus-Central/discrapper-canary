e.d(n, { O: () => s, i: () => c });
var i = e(477900),
    a = e(192308),
    r = e(834730),
    d = e(375708);
function s(t) {
    let { body: n, ...d } = t;
    (0, a.openModalLazy)(async () => {
        let { VoidConfirmModal: t } = await Promise.all([e.e("304823"), e.e("223976"), e.e("977260")]).then(
            e.bind(e, 397927),
        );
        return (e) =>
            (0, i.jsx)(t, { ...e, ...d, children: (0, i.jsx)(r.E, { variant: "text-md/normal", children: n }) });
    });
}
function c(t) {
    let { message: n } = t;
    s({ header: d.intl.string(d.t.OjbtDm), confirmText: d.intl.string(d.t.BddRzS), body: n });
}
