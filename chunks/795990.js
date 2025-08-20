r.d(t, { Z: () => y });
var n = r(951288),
    l = r(647438),
    i = r(296009),
    a = r(481060),
    c = r(210753),
    o = r(804919),
    s = r(86419),
    u = r(872269),
    d = r(228168),
    f = r(247397),
    g = r(388032),
    b = r(958461);
function p(e) {
    let { widgetType: t } = e,
        r = t === i.l.FAVORITE_GAMES ? o.LM.BALDURS_GATE_3 : o.LM.CYBERPUNK_2077,
        { coverImageUrl: l, localizedName: a } = (0, c.$)(r);
    return (0, n.jsxs)("div", {
        className: b.placeholderDetailCard,
        children: [
            (0, n.jsx)("div", {
                className: b.placeholderCover,
                children:
                    null != l && "" !== l
                        ? (0, n.jsx)("img", {
                              src: l,
                              alt: null != a ? a : "",
                              className: b.placeholderGameImage,
                          })
                        : (0, n.jsx)("div", { className: b.placeholderGameFallback }),
            }),
            (0, n.jsxs)("div", {
                className: b.placeholderText,
                children: [
                    (0, n.jsx)("div", { className: b.placeholderBar }),
                    (0, n.jsx)("div", { className: b.placeholderBar }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { widgetType: t } = e,
        r =
            t === i.l.WANT_TO_PLAY_GAMES
                ? [o.LM.ROBLOX, o.LM.VALORANT, o.LM.LEAGUE_OF_LEGENDS]
                : [o.LM.ZENLESS_ZONE_ZERO, o.LM.ELDEN_RING, o.LM.RED_DEAD_REDEMPTION_2];
    return (0, n.jsx)("div", {
        className: b.placeholderCoverGrid,
        children: r.map((e, t) => (0, n.jsx)(m, { applicationId: e }, t)),
    });
}
function m(e) {
    let { applicationId: t } = e,
        { coverImageUrl: r, localizedName: l } = (0, c.$)(t);
    return (0, n.jsx)("div", {
        className: b.placeholderCoverItem,
        children:
            null != r && "" !== r
                ? (0, n.jsx)("img", {
                      src: r,
                      alt: null != l ? l : "",
                      className: b.placeholderGameImage,
                  })
                : (0, n.jsx)("div", { className: b.placeholderGameFallback }),
    });
}
function j(e) {
    let { widgetType: t } = e,
        r = l.useCallback(() => {
            (0, s.qH)(t), (0, u.L$)(d.qb.WIDGET_ADDED);
        }, [t]);
    return (0, n.jsxs)(a.P3F, {
        className: b.widgetPromptContainer,
        onClick: r,
        "aria-label": "Add widget: ".concat(g.intl.string(f.NP[t])),
        children: [
            (() => {
                switch (t) {
                    case i.l.FAVORITE_GAMES:
                    case i.l.CURRENT_GAMES:
                        return (0, n.jsx)(p, { widgetType: t });
                    case i.l.WANT_TO_PLAY_GAMES:
                    case i.l.PLAYED_GAMES:
                        return (0, n.jsx)(O, { widgetType: t });
                    default:
                        return null;
                }
            })(),
            (0, n.jsxs)("div", {
                className: b.widgetPromptOverlay,
                children: [
                    (0, n.jsx)("div", {
                        className: b.addButton,
                        children: (0, n.jsx)(a.oFk, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: g.intl.string(f.NP[t]),
                    }),
                ],
            }),
        ],
    });
}
function y() {
    return (0, n.jsxs)("div", {
        className: b.empty,
        children: [
            (0, n.jsxs)("div", {
                className: b.textContainer,
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
                className: b.widgetGrid,
                "aria-label": g.intl.string(g.t["+EIBSE"]),
                children: f.rR.map((e) => (0, n.jsx)("li", { children: (0, n.jsx)(j, { widgetType: e }) }, e)),
            }),
        ],
    });
}
