e.d(t, { A: () => s });
var i = e(627968);
e(64700);
var r = e(477782),
    l = e(192308),
    a = e(422258),
    d = e(985018);
function s(n) {
    return (0, i.jsx)(r.Dr, {
        id: "delete-channel",
        label: d.intl.string(d.t.Jg0R7Q),
        subtext: d.intl.string(d.t["+mNKM9"]),
        color: "danger",
        action: () =>
            (0, l.openModalLazy)(async () => {
                let { default: t } = await e.e("52210").then(e.bind(e, 862377));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onConfirm: () => {
                            e.onClose(), (0, a.fv)(n.id);
                        },
                        channel: n,
                    });
            }),
    });
}
