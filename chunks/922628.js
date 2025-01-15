n.d(t, {
    S: function () {
        return l;
    },
    V: function () {
        return a;
    }
});
var i = n(200651),
    s = n(481060),
    r = n(388032);
function a(e) {
    let { body: t, ...r } = e;
    (0, s.openModalLazy)(async () => {
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
function l(e) {
    let { message: t } = e;
    a({
        header: r.intl.string(r.t.OjbtDg),
        confirmText: r.intl.string(r.t.BddRzc),
        body: t
    });
}
