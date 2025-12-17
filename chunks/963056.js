n.d(t, { Z: () => s });
var a = n(54381);
n(473749);
var r = n(236726),
    l = n(481060),
    i = n(10467);
function s(e) {
    let { text: t } = e,
        n = (0, l.Yzy)(t, {
            from: {
                opacity: 0,
                transform: "translate3d(0, 107%, 0)",
            },
            enter: {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
            config: {
                duration: 220,
                clamp: !0,
            },
        });
    return (0, a.jsx)("div", {
        className: i.container,
        children: n((e, t) =>
            (0, a.jsx)(r.animated.div, {
                className: i.animatedText,
                style: e,
                children: t,
            }),
        ),
    });
}
