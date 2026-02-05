i.d(a, { default: () => n });
var s = i(627968);
i(64700);
var e = i(158954);
function n(t) {
    let { transitionState: a, header: i, body: n, confirmText: r, onClose: o, onConfirm: c } = t;
    return (0, s.jsx)(e.Modal, {
        title: i,
        subtitle: n,
        transitionState: a,
        onClose: o,
        actions: [
            {
                text: r,
                onClick: () => {
                    o(), c?.();
                },
                variant: "primary",
            },
        ],
    });
}
