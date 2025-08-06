n.d(i, { default: () => r });
var s = n(255367);
n(73800);
var a = n(82659),
    e = n(388032);
function r(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, s.jsx)(a.Modal, {
        transitionState: i,
        title: e.intl.string(e.t.elyVbm),
        onClose: n,
        actions: [
            {
                text: e.intl.string(e.t.BddRzc),
                variant: "primary",
                onClick: n,
            },
        ],
        subtitle: e.intl.string(e.t.nIeRen),
    });
}
