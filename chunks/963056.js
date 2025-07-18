n.d(t, { Z: () => l });
var i = n(255367);
n(73800);
var r = n(104721),
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
    return (0, i.jsx)('div', {
        className: a.container,
        children: n((e, t) =>
            (0, i.jsx)(r.animated.div, {
                className: a.animatedText,
                style: e,
                children: t
            })
        )
    });
}
