n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(272573),
    s = n(481060),
    l = n(777742);
function a(e) {
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
    return (0, i.jsx)('div', {
        className: l.container,
        children: n((e, t) =>
            (0, i.jsx)(r.animated.div, {
                className: l.animatedText,
                style: e,
                children: t
            })
        )
    });
}
