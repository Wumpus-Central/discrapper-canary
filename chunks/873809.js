a.d(i, { default: () => e });
var n = a(951288);
a(647438);
var s = a(82659);
function e(t) {
    let { transitionState: i, header: a, body: e, confirmText: r, onClose: o, onConfirm: u } = t;
    return (0, n.jsx)(s.Modal, {
        title: a,
        subtitle: e,
        transitionState: i,
        onClose: o,
        actions: [
            {
                text: r,
                onClick: () => {
                    o(), null == u || u();
                },
                variant: "primary",
            },
        ],
    });
}
