"use strict";
n.d(t, { D: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s);
n(735438);
var o = n(419354),
    l = n(939249),
    u = n(805901),
    c = n(565645);
n(915089);
var d = n(713517);
n(822123);
var _ = n(375499);
n(937773);
var f = n(7584);
n(850992), n(690521);
var p = n(403362);
n(806931);
var h = n(307731);
n(650583);
var E = n(317299);
function m(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: f } = e,
        p = i.useRef(null),
        h = (0, d.M)(p);
    return (0, r.jsx)("span", {
        ref: p,
        children: (0, r.jsx)(l.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(u.c, {
                config: _.B,
                from: { value: 0 },
                to: { value: +!!h },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(o.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, r.jsx)(c.A, {
                            className: a()(E.Zg, f, { [E.c4]: n }),
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
h.EmojiIntention.CHAT,
    [
        f.Ay.getByName("thumbsup"),
        f.Ay.getByName("eyes"),
        f.Ay.getByName("laughing"),
        f.Ay.getByName("watermelon"),
        f.Ay.getByName("fork_and_knife"),
        f.Ay.getByName("yum"),
    ].filter(p.Vq);
