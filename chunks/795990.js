n.d(t, { Z: () => O });
var r = n(255367),
    l = n(73800),
    i = n(296009),
    o = n(481060),
    a = n(210753),
    c = n(804919),
    s = n(86419),
    d = n(872269),
    u = n(228168),
    f = n(247397),
    p = n(388032),
    m = n(958461);
function g(e) {
    let { widgetType: t } = e,
        n = t === i.l.FAVORITE_GAMES ? c.LM.BALDURS_GATE_3 : c.LM.CYBERPUNK_2077,
        { coverImageUrl: l, localizedName: o } = (0, a.$)(n);
    return (0, r.jsxs)("div", {
        className: m.placeholderDetailCard,
        children: [
            (0, r.jsx)("div", {
                className: m.placeholderCover,
                children:
                    null != l && "" !== l
                        ? (0, r.jsx)("img", {
                              src: l,
                              alt: null != o ? o : "",
                              className: m.placeholderGameImage,
                          })
                        : (0, r.jsx)("div", { className: m.placeholderGameFallback }),
            }),
            (0, r.jsxs)("div", {
                className: m.placeholderText,
                children: [
                    (0, r.jsx)("div", { className: m.placeholderBar }),
                    (0, r.jsx)("div", { className: m.placeholderBar }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { widgetType: t } = e,
        n =
            t === i.l.WANT_TO_PLAY_GAMES
                ? [c.LM.ROBLOX, c.LM.VALORANT, c.LM.LEAGUE_OF_LEGENDS]
                : [c.LM.ZENLESS_ZONE_ZERO, c.LM.ELDEN_RING, c.LM.RED_DEAD_REDEMPTION_2];
    return (0, r.jsx)("div", {
        className: m.placeholderCoverGrid,
        children: n.map((e, t) => (0, r.jsx)(j, { applicationId: e }, t)),
    });
}
function j(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n, localizedName: l } = (0, a.$)(t);
    return (0, r.jsx)("div", {
        className: m.placeholderCoverItem,
        children:
            null != n && "" !== n
                ? (0, r.jsx)("img", {
                      src: n,
                      alt: null != l ? l : "",
                      className: m.placeholderGameImage,
                  })
                : (0, r.jsx)("div", { className: m.placeholderGameFallback }),
    });
}
function y(e) {
    let { widgetType: t } = e,
        n = l.useCallback(() => {
            (0, s.qH)(t), (0, d.L$)(u.qb.WIDGET_ADDED);
        }, [t]);
    return (0, r.jsxs)(o.P3F, {
        className: m.widgetPromptContainer,
        onClick: n,
        "aria-label": "Add widget: ".concat(p.intl.string(f.N[t])),
        children: [
            (() => {
                switch (t) {
                    case i.l.FAVORITE_GAMES:
                    case i.l.CURRENT_GAMES:
                        return (0, r.jsx)(g, { widgetType: t });
                    case i.l.WANT_TO_PLAY_GAMES:
                    case i.l.PLAYED_GAMES:
                        return (0, r.jsx)(b, { widgetType: t });
                    default:
                        return null;
                }
            })(),
            (0, r.jsxs)("div", {
                className: m.widgetPromptOverlay,
                children: [
                    (0, r.jsx)("div", {
                        className: m.addButton,
                        children: (0, r.jsx)(o.oFk, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: p.intl.string(f.N[t]),
                    }),
                ],
            }),
        ],
    });
}
function O() {
    return (0, r.jsxs)("div", {
        className: m.empty,
        children: [
            (0, r.jsxs)("div", {
                className: m.textContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: p.intl.string(p.t.oqalCw),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: p.intl.string(p.t.O9SQ1d),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: m.widgetGrid,
                "aria-label": p.intl.string(p.t["+EIBSE"]),
                children: f.r.map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(y, { widgetType: e }) }, e)),
            }),
        ],
    });
}
