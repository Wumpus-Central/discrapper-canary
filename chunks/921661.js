"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(688810),
    r = n(557158),
    a = n(573435),
    o = n(954571),
    c = n(486020),
    u = n(652215),
    d = n(307731),
    h = n(788868),
    m = n(985018),
    p = n(202606);
let f = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, s.Ay)();
    l.useEffect(() => {
        o.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, { type: h.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
    }, [n]);
    let f = (0, i.jsx)("div", {
        className: p.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, i.jsx)(
                "div",
                {
                    className: p.rT,
                    children: (0, i.jsx)("img", {
                        alt: e.name,
                        className: p.Zg,
                        src: c.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: d.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, i.jsx)(
                      a.Ay,
                      { className: p.j3, mask: a.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, i.jsxs)(r.Mr, {
        className: p.UX,
        children: [
            (0, i.jsx)(r.oC, {
                children: (0, i.jsx)(r.dB, { children: m.intl.format(m.t.uEky42, { count: t.length }) }),
            }),
            (0, i.jsx)(r.Aq, { children: f }),
        ],
    });
};
