a.d(i, { default: () => r });
var n = a(477900);
a(582128);
var e = a(189213);
function r(t) {
    let { transitionState: i, header: a, body: r, confirmText: s, onClose: c, onConfirm: o, children: u } = t;
    return (0, n.jsx)(e.Modal, {
        title: a,
        subtitle: r,
        transitionState: i,
        onClose: c,
        actions: [
            {
                text: s,
                onClick: function () {
                    c(), o?.();
                },
                variant: "primary",
            },
        ],
        children: u,
    });
}
