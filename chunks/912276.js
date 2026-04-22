"use strict";
n.d(t, { D: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s);
n(735438);
var a = n(517738),
    o = n(939249),
    c = n(805901),
    u = n(565645);
n(915089);
var d = n(713517);
n(822123);
var h = n(375499);
n(937773);
var m = n(7584);
n(850992), n(690521);
var p = n(403362);
n(806931);
var f = n(307731);
n(650583);
var g = n(317299);
function _(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: m } = e,
        p = l.useRef(null),
        f = (0, d.M)(p);
    return (0, i.jsx)("span", {
        ref: p,
        children: (0, i.jsx)(o.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(c.c, {
                config: h.B,
                from: { value: 0 },
                to: { value: +!!f },
                children: (e) => {
                    let { value: l } = e;
                    return (0, i.jsx)(a.animated.div, {
                        style: { transform: l.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, i.jsx)(u.A, {
                            className: r()(g.Zg, m, { [g.c4]: n }),
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
f.EmojiIntention.CHAT,
    [
        m.Ay.getByName("thumbsup"),
        m.Ay.getByName("eyes"),
        m.Ay.getByName("laughing"),
        m.Ay.getByName("watermelon"),
        m.Ay.getByName("fork_and_knife"),
        m.Ay.getByName("yum"),
    ].filter(p.Vq);
