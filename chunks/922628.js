n.d(t, {
    S: () => a,
    V: () => r
});
var i = n(200651),
    s = n(481060),
    l = n(388032);
function r(e) {
    let { body: t, ...l } = e;
    (0, s.ZDy)(async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                ...l,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            });
    });
}
function a(e) {
    let { message: t } = e;
    r({
        header: l.intl.string(l.t.OjbtDg),
        confirmText: l.intl.string(l.t.BddRzc),
        body: t
    });
}
