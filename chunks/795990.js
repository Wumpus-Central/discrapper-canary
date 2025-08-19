r.d(t, { Z: () => y });
var n = r(951288),
    l = r(647438),
    i = r(296009),
    a = r(481060),
    o = r(210753),
    c = r(804919),
    s = r(86419),
    u = r(872269),
    d = r(228168),
    f = r(247397),
    g = r(388032),
    p = r(958461);
function b(e) {
    let { widgetType: t } = e,
        r = t === i.l.FAVORITE_GAMES ? c.LM.BALDURS_GATE_3 : c.LM.CYBERPUNK_2077,
        { coverImageUrl: l, localizedName: a } = (0, o.$)(r);
    return (0, n.jsxs)("div", {
        className: p.placeholderDetailCard,
        children: [
            (0, n.jsx)("div", {
                className: p.placeholderCover,
                children:
                    null != l && "" !== l
                        ? (0, n.jsx)("img", {
                              src: l,
                              alt: null != a ? a : "",
                              className: p.placeholderGameImage,
                          })
                        : (0, n.jsx)("div", { className: p.placeholderGameFallback }),
            }),
            (0, n.jsxs)("div", {
                className: p.placeholderText,
                children: [
                    (0, n.jsx)("div", { className: p.placeholderBar }),
                    (0, n.jsx)("div", { className: p.placeholderBar }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { widgetType: t } = e,
        r =
            t === i.l.WANT_TO_PLAY_GAMES
                ? [c.LM.ROBLOX, c.LM.VALORANT, c.LM.LEAGUE_OF_LEGENDS]
                : [c.LM.ZENLESS_ZONE_ZERO, c.LM.ELDEN_RING, c.LM.RED_DEAD_REDEMPTION_2];
    return (0, n.jsx)("div", {
        className: p.placeholderCoverGrid,
        children: r.map((e, t) => (0, n.jsx)(m, { applicationId: e }, t)),
    });
}
function m(e) {
    let { applicationId: t } = e,
        { coverImageUrl: r, localizedName: l } = (0, o.$)(t);
    return (0, n.jsx)("div", {
        className: p.placeholderCoverItem,
        children:
            null != r && "" !== r
                ? (0, n.jsx)("img", {
                      src: r,
                      alt: null != l ? l : "",
                      className: p.placeholderGameImage,
                  })
                : (0, n.jsx)("div", { className: p.placeholderGameFallback }),
    });
}
function j(e) {
    let { widgetType: t } = e,
        r = l.useCallback(() => {
            (0, s.qH)(t), (0, u.L$)(d.qb.WIDGET_ADDED);
        }, [t]);
    return (0, n.jsxs)(a.P3F, {
        className: p.widgetPromptContainer,
        onClick: r,
        "aria-label": "Add widget: ".concat(g.intl.string(f.N[t])),
        children: [
            (() => {
                switch (t) {
                    case i.l.FAVORITE_GAMES:
                    case i.l.CURRENT_GAMES:
                        return (0, n.jsx)(b, { widgetType: t });
                    case i.l.WANT_TO_PLAY_GAMES:
                    case i.l.PLAYED_GAMES:
                        return (0, n.jsx)(O, { widgetType: t });
                    default:
                        return null;
                }
            })(),
            (0, n.jsxs)("div", {
                className: p.widgetPromptOverlay,
                children: [
                    (0, n.jsx)("div", {
                        className: p.addButton,
                        children: (0, n.jsx)(a.oFk, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: g.intl.string(f.N[t]),
                    }),
                ],
            }),
        ],
    });
}
function y() {
    return (0, n.jsxs)("div", {
        className: p.empty,
        children: [
            (0, n.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: g.intl.string(g.t.oqalCw),
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: g.intl.string(g.t.O9SQ1d),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: p.widgetGrid,
                "aria-label": g.intl.string(g.t["+EIBSE"]),
                children: f.r.map((e) => (0, n.jsx)("li", { children: (0, n.jsx)(j, { widgetType: e }) }, e)),
            }),
        ],
    });
}
