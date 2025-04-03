n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(642128),
    s = n(481060),
    a = n(777742);
function l(e) {
    let { text: t } = e,
        n = (0, s.Yzy)(t, {
            from: {
                opacity: 0,
                transform: 'translate3d(0, 107%, 0)'
            },
            enter: {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)'
            },
            config: {
                duration: 220,
                clamp: !0
            }
        });
    return (0, r.jsx)('div', {
        className: a.container,
        children: n((e, t) =>
            (0, r.jsx)(i.animated.div, {
                className: a.animatedText,
                style: e,
                children: t
            })
        )
    });
}
