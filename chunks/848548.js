i.d(n, { default: () => o });
var e = i(54381);
i(473749);
var r = i(481060),
    l = i(369930),
    s = i(388032),
    a = i(213376);
function o(t) {
    let { transitionState: n, onClose: i } = t;
    return (0, e.jsx)(r.Ioy, {
        transitionState: n,
        onClose: i,
        graphic: {
            src: a.Z,
            type: "image",
        },
        gradientColor: "blue",
        title: s.intl.string(s.t.bAhz9l),
        subtitle: s.intl.string(s.t["7KjxW3"]),
        actions: [
            {
                text: s.intl.string(s.t.BddRzS),
                onClick: () => {
                    (0, l.Z)(), i();
                },
            },
        ],
    });
}
