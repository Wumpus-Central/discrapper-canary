i.d(t, { O: () => n, i: () => _ });
var l = i(627968),
    r = i(192308),
    s = i(834730),
    d = i(375708);
function n(e) {
    let { body: t, ...d } = e;
    (0, r.openModalLazy)(async () => {
        let { VoidConfirmModal: e } = await Promise.all([i.e("4823"), i.e("88017")]).then(i.bind(i, 844616));
        return (i) =>
            (0, l.jsx)(e, { ...i, ...d, children: (0, l.jsx)(s.E, { variant: "text-md/normal", children: t }) });
    });
}
function _(e) {
    let { message: t } = e;
    n({ header: d.intl.string(d.t.OjbtDm), confirmText: d.intl.string(d.t.BddRzS), body: t });
}
