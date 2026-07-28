a.d(i, { default: () => e });
var n = a(477900);
a(582128);
var s = a(189213);
function e(t) {
    let { transitionState: i, header: a, body: e, confirmText: r, onClose: o, onConfirm: c } = t;
    return (0, n.jsx)(s.Modal, {
        title: a,
        subtitle: e,
        transitionState: i,
        onClose: o,
        actions: [
            {
                text: r,
                onClick: function () {
                    o(), c?.();
                },
                variant: "primary",
            },
        ],
    });
}
