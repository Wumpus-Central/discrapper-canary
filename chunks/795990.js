n.d(t, { Z: () => j });
var r = n(255367),
    l = n(73800),
    i = n(296009),
    o = n(481060),
    a = n(210753),
    c = n(804919),
    s = n(86419),
    d = n(247397),
    u = n(388032),
    f = n(436860);
function p(e) {
    let { widgetType: t } = e,
        n = t === i.l.FAVORITE_GAMES ? c.LM.BALDURS_GATE_3 : c.LM.CYBERPUNK_2077,
        { coverImageUrl: l, localizedName: o } = (0, a.$)(n);
    return (0, r.jsxs)("div", {
        className: f.placeholderDetailCard,
        children: [
            (0, r.jsx)("div", {
                className: f.placeholderCover,
                children:
                    null != l && "" !== l
                        ? (0, r.jsx)("img", {
                              src: l,
                              alt: null != o ? o : "",
                              className: f.placeholderGameImage,
                          })
                        : (0, r.jsx)("div", { className: f.placeholderGameFallback }),
            }),
            (0, r.jsxs)("div", {
                className: f.placeholderText,
                children: [
                    (0, r.jsx)("div", { className: f.placeholderBar }),
                    (0, r.jsx)("div", { className: f.placeholderBar }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { widgetType: t } = e,
        n =
            t === i.l.WANT_TO_PLAY_GAMES
                ? [c.LM.ROBLOX, c.LM.VALORANT, c.LM.LEAGUE_OF_LEGENDS]
                : [c.LM.ZENLESS_ZONE_ZERO, c.LM.ELDEN_RING, c.LM.RED_DEAD_REDEMPTION_2];
    return (0, r.jsx)("div", {
        className: f.placeholderCoverGrid,
        children: n.map((e, t) => (0, r.jsx)(g, { applicationId: e }, t)),
    });
}
function g(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n, localizedName: l } = (0, a.$)(t);
    return (0, r.jsx)("div", {
        className: f.placeholderCoverItem,
        children:
            null != n && "" !== n
                ? (0, r.jsx)("img", {
                      src: n,
                      alt: null != l ? l : "",
                      className: f.placeholderGameImage,
                  })
                : (0, r.jsx)("div", { className: f.placeholderGameFallback }),
    });
}
function b(e) {
    let { widgetType: t } = e,
        n = l.useCallback(() => {
            (0, s.qH)(t);
        }, [t]);
    return (0, r.jsxs)(o.P3F, {
        className: f.widgetPromptContainer,
        onClick: n,
        "aria-label": "Add widget: ".concat(u.intl.string(d.NP[t])),
        children: [
            (() => {
                switch (t) {
                    case i.l.FAVORITE_GAMES:
                    case i.l.CURRENT_GAMES:
                        return (0, r.jsx)(p, { widgetType: t });
                    case i.l.WANT_TO_PLAY_GAMES:
                    case i.l.PLAYED_GAMES:
                        return (0, r.jsx)(m, { widgetType: t });
                    default:
                        return null;
                }
            })(),
            (0, r.jsxs)("div", {
                className: f.widgetPromptOverlay,
                children: [
                    (0, r.jsx)("div", {
                        className: f.addButton,
                        children: (0, r.jsx)(o.oFk, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: u.intl.string(d.NP[t]),
                    }),
                ],
            }),
        ],
    });
}
function j() {
    return (0, r.jsxs)("div", {
        className: f.empty,
        children: [
            (0, r.jsxs)("div", {
                className: f.textContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: u.intl.string(u.t.oqalCw),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.intl.string(u.t.O9SQ1d),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: f.widgetGrid,
                "aria-label": u.intl.string(u.t["+EIBSE"]),
                children: d.rR.map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(b, { widgetType: e }) }, e)),
            }),
        ],
    });
}
