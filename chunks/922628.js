n.d(t, {
    S: () => a,
    V: () => l
});
var i = n(200651),
    s = n(481060),
    r = n(388032);
function l(e) {
    let { body: t, ...r } = e;
    (0, s.ZDy)(async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                ...r,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            });
    });
}
function a(e) {
    let { message: t } = e;
    l({
        header: r.intl.string(r.t.OjbtDg),
        confirmText: r.intl.string(r.t.BddRzc),
        body: t
    });
}
