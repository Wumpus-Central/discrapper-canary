"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(557158),
    o = n(573435),
    l = n(954571),
    u = n(486020),
    c = n(652215);
n(307731);
var d = n(788868),
    _ = n(985018),
    f = n(692433);
let p = 3,
    h = (e) => {
        let { emojis: t } = e,
            { analyticsLocations: n } = (0, a.Ay)();
        i.useEffect(() => {
            l.default.track(c.HAw.PREMIUM_UPSELL_VIEWED, { type: d.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n });
        }, [n]);
        let h = (0, r.jsx)("div", {
            className: f.gm,
            children: t.slice(0, p).map((e, t) => {
                if (null == e.id) return null;
                let n = 2 === t,
                    i = (0, r.jsx)(
                        "div",
                        {
                            className: f.rT,
                            children: (0, r.jsx)("img", {
                                alt: e.name,
                                className: f.Zg,
                                src: u.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 48 }),
                            }),
                        },
                        e.id,
                    );
                return n
                    ? i
                    : (0, r.jsx)(
                          o.Ay,
                          { className: f.j3, mask: o.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: i },
                          e.id,
                      );
            }),
        });
        return (0, r.jsxs)(s.Mr, {
            className: f.UX,
            children: [
                (0, r.jsx)(s.oC, {
                    children: (0, r.jsx)(s.dB, { children: _.intl.format(_.t.uEky42, { count: t.length }) }),
                }),
                (0, r.jsx)(s.Aq, { children: h }),
            ],
        });
    };
