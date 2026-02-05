n.d(t, { O: () => a, i: () => l });
var i = n(627968),
    s = n(397927),
    r = n(985018);
function a(e) {
    let { body: t, ...r } = e;
    (0, s.mMO)(async () => {
        let { VoidConfirmModal: e } = await Promise.resolve().then(n.bind(n, 397927));
        return (n) =>
            (0, i.jsx)(e, { ...n, ...r, children: (0, i.jsx)(s.Text, { variant: "text-md/normal", children: t }) });
    });
}
function l(e) {
    let { message: t } = e;
    a({ header: r.intl.string(r.t.OjbtDm), confirmText: r.intl.string(r.t.BddRzS), body: t });
}
