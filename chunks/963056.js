n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(803948),
    a = n(481060),
    o = n(572797);
function s(e) {
    let { text: t } = e,
        n = (0, a.Yzy)(t, {
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
    return (0, r.jsx)("div", {
        className: o.container,
        children: n((e, t) =>
            (0, r.jsx)(i.animated.div, {
                className: o.animatedText,
                style: e,
                children: t,
            }),
        ),
    });
}
