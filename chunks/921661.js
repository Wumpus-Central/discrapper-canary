"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(688810),
    a = n(557158),
    o = n(573435),
    l = n(954571),
    u = n(486020),
    c = n(652215),
    d = n(307731),
    _ = n(788868),
    f = n(985018),
    p = n(202606);
let h = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, s.Ay)();
    i.useEffect(() => {
        l.default.track(c.HAw.PREMIUM_UPSELL_VIEWED, { type: _.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
    }, [n]);
    let h = (0, r.jsx)("div", {
        className: p.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, r.jsx)(
                "div",
                {
                    className: p.rT,
                    children: (0, r.jsx)("img", {
                        alt: e.name,
                        className: p.Zg,
                        src: u.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: d.EMOJI_URL_BASE_SIZE }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, r.jsx)(
                      o.Ay,
                      { className: p.j3, mask: o.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, r.jsxs)(a.Mr, {
        className: p.UX,
        children: [
            (0, r.jsx)(a.oC, {
                children: (0, r.jsx)(a.dB, { children: f.intl.format(f.t.uEky42, { count: t.length }) }),
            }),
            (0, r.jsx)(a.Aq, { children: h }),
        ],
    });
};
