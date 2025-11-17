n.d(i, { default: () => r });
var s = n(54381);
n(473749);
var a = n(793030),
    e = n(388032);
function r(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, s.jsx)(a.Modal, {
        transitionState: i,
        title: e.intl.string(e.t.elyVbv),
        onClose: n,
        actions: [
            {
                text: e.intl.string(e.t.BddRzS),
                variant: "primary",
                onClick: n,
            },
        ],
        subtitle: e.intl.string(e.t.nIeRep),
    });
}
