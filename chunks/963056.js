n.d(t, { Z: () => s });
var a = n(951288);
n(647438);
var i = n(13941),
    l = n(481060),
    r = n(572797);
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
        className: r.container,
        children: n((e, t) =>
            (0, a.jsx)(i.animated.div, {
                className: r.animatedText,
                style: e,
                children: t,
            }),
        ),
    });
}
