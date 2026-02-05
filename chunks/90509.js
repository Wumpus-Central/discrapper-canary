e.d(t, { A: () => s });
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(422258),
    a = e(985018);
function s(n) {
    return (0, i.jsx)(r.Drp, {
        id: "delete-channel",
        label: a.intl.string(a.t.Jg0R7Q),
        subtext: a.intl.string(a.t["+mNKM9"]),
        color: "danger",
        action: () =>
            (0, r.mMO)(async () => {
                let { default: t } = await e.e("52210").then(e.bind(e, 862377));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onConfirm: () => {
                            e.onClose(), (0, l.fv)(n.id);
                        },
                        channel: n,
                    });
            }),
    });
}
