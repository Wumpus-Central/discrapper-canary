n.d(t, { Z: () => s });
var a = n(54381);
n(473749);
var r = n(81239),
    i = n(481060),
    l = n(10467);
function s(e) {
    let { text: t } = e,
        n = (0, i.Yzy)(t, {
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
        className: l.container,
        children: n((e, t) =>
            (0, a.jsx)(r.animated.div, {
                className: l.animatedText,
                style: e,
                children: t,
            }),
        ),
    });
}
