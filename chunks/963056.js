n.d(t, { Z: () => s });
var a = n(951288);
n(647438);
var r = n(358458),
    i = n(481060),
    l = n(572797);
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
