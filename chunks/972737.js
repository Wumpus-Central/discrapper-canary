i.d(t, { O: () => _, i: () => n });
var l = i(627968),
    s = i(192308),
    r = i(834730),
    d = i(375708);
function _(e) {
    let { body: t, ...d } = e;
    (0, s.openModalLazy)(async () => {
        let { VoidConfirmModal: e } = await Promise.all([i.e("4823"), i.e("88017")]).then(i.bind(i, 844616));
        return (i) =>
            (0, l.jsx)(e, { ...i, ...d, children: (0, l.jsx)(r.E, { variant: "text-md/normal", children: t }) });
    });
}
function n(e) {
    let { message: t } = e;
    _({ header: d.intl.string(d.t.OjbtDm), confirmText: d.intl.string(d.t.BddRzS), body: t });
}
