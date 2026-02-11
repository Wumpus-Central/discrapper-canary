"use strict";
n.d(t, { D: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a);
n(735438);
var o = n(563495);
n(435371);
var l = n(397927),
    u = n(565645);
n(915089);
var c = n(713517);
n(822123);
var d = n(375499);
n(937773);
var _ = n(7584);
n(850992), n(690521);
var f = n(403362);
n(806931);
var h = n(307731);
n(650583);
var p = n(966464);
function g(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: _ } = e,
        f = i.useRef(null),
        h = (0, c.M)(f);
    return (0, r.jsx)("span", {
        ref: f,
        children: (0, r.jsx)(l.DUT, {
            onClick: a,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(l.c7X, {
                config: d.B,
                from: { value: 0 },
                to: { value: +!!h },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(o.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, r.jsx)(u.A, {
                            className: s()(p.Zg, _, { [p.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
h.b_.CHAT,
    [
        _.Ay.getByName("thumbsup"),
        _.Ay.getByName("eyes"),
        _.Ay.getByName("laughing"),
        _.Ay.getByName("watermelon"),
        _.Ay.getByName("fork_and_knife"),
        _.Ay.getByName("yum"),
    ].filter(f.Vq);
