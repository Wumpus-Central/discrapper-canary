n.d(t, {
    S: function () {
        return l;
    },
    V: function () {
        return a;
    }
});
var i = n(200651),
    r = n(481060),
    s = n(388032);
function a(e) {
    let { body: t, ...s } = e;
    (0, r.openModalLazy)(async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                ...s,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            });
    });
}
function l(e) {
    let { message: t } = e;
    a({
        header: s.intl.string(s.t.OjbtDg),
        confirmText: s.intl.string(s.t.BddRzc),
        body: t
    });
}
