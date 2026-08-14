i.d(e, { O: () => d, i: () => u });
var n = i(477900),
    r = i(192308),
    s = i(834730),
    l = i(375708);
function d(t) {
    let { body: e, ...l } = t;
    (0, r.openModalLazy)(async () => {
        let { VoidConfirmModal: t } = await Promise.all([i.e("304823"), i.e("977260")]).then(i.bind(i, 397927));
        return (i) =>
            (0, n.jsx)(t, { ...i, ...l, children: (0, n.jsx)(s.E, { variant: "text-md/normal", children: e }) });
    });
}
function u(t) {
    let { message: e } = t;
    d({ header: l.intl.string(l.t.OjbtDm), confirmText: l.intl.string(l.t.BddRzS), body: e });
}
