n.d(t, { Z: () => s });
var a = n(54381);
n(473749);
var l = n(666917),
    i = n(481060),
    r = n(572797);
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
        className: r.container,
        children: n((e, t) =>
            (0, a.jsx)(l.animated.div, {
                className: r.animatedText,
                style: e,
                children: t,
            }),
        ),
    });
}
