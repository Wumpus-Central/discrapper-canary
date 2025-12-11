e.d(n, { default: () => c });
var a = e(54381);
e(473749);
var l = e(481060),
    r = e(411328),
    o = e(388032),
    i = e(73377);
function c(t) {
    let { url: n, onClose: e, transitionState: c } = t;
    return (0, a.jsx)(l.Ioy, {
        transitionState: c,
        onClose: e,
        graphic: {
            src: i.Z,
            type: "image",
        },
        gradientColor: "blue",
        title: o.intl.string(o.t["2B3wj8"]),
        subtitle: o.intl.format(o.t.jnHyYU, {}),
        actions: [
            {
                text: o.intl.string(o.t["/g10LC"]),
                onClick: e,
            },
        ],
        children: (0, a.jsx)(r.W, { url: n }),
    });
}
