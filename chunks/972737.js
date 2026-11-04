var e = n(477900),
    r = n(192308),
    d = n(834730),
    a = n(792996);
function s(t) {
    let { body: i, ...a } = t;
    (0, r.mM)(async () => {
        let { VoidConfirmModal: t } = await Promise.all([n.e(288688), n.e(304823), n.e(223976), n.e(977260)]).then(
            n.bind(n, 397927),
        );
        return (n) =>
            (0, e.jsx)(t, { ...n, ...a, children: (0, e.jsx)(d.E, { variant: "body-md/normal", children: i }) });
    });
}
n.d(
    i,
    {},
    {
        O: s,
        i: function (t) {
            let { message: i } = t;
            s({ header: a.intl.string(a.t.OjbtDm), confirmText: a.intl.string(a.t.BddRzS), body: i });
        },
    },
);
