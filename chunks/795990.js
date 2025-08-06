n.d(t, { Z: () => j });
var r = n(255367),
    l = n(73800),
    o = n(296009),
    i = n(481060),
    a = n(634733),
    c = n(210753),
    s = n(247397),
    d = n(570911),
    u = n(388032),
    f = n(436860);
function p(e) {
    let { widgetType: t } = e,
        n = t === o.l.FAVORITE_GAMES ? d.J6["23"] : d.J6["58"],
        { coverImageUrl: l, localizedName: i } = (0, c.$)(n);
    return (0, r.jsxs)("div", {
        className: f.placeholderDetailCard,
        children: [
            (0, r.jsx)("div", {
                className: f.placeholderCover,
                children:
                    null != l && "" !== l
                        ? (0, r.jsx)("img", {
                              src: l,
                              alt: null != i ? i : "Game cover",
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
        n = t === o.l.WANT_TO_PLAY_GAMES ? [d.J6["0"], d.J6["1"], d.J6["2"]] : [d.J6["20"], d.J6["35"], d.J6["42"]];
    return (0, r.jsx)("div", {
        className: f.placeholderCoverGrid,
        children: n.map((e, t) => (0, r.jsx)(g, { applicationId: e }, t)),
    });
}
function g(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n, localizedName: l } = (0, c.$)(t);
    return (0, r.jsx)("div", {
        className: f.placeholderCoverItem,
        children:
            null != n && "" !== n
                ? (0, r.jsx)("img", {
                      src: n,
                      alt: null != l ? l : "Game cover",
                      className: f.placeholderGameImage,
                  })
                : (0, r.jsx)("div", { className: f.placeholderGameFallback }),
    });
}
function b(e) {
    let { widgetType: t } = e,
        n = l.useCallback(() => {
            (0, a.w6)(t);
        }, [t]);
    return (0, r.jsxs)(i.P3F, {
        className: f.widgetPromptContainer,
        onClick: n,
        "aria-label": "Add widget: ".concat(u.intl.string(s.NP[t])),
        children: [
            (() => {
                switch (t) {
                    case o.l.FAVORITE_GAMES:
                    case o.l.CURRENT_GAMES:
                        return (0, r.jsx)(p, { widgetType: t });
                    case o.l.WANT_TO_PLAY_GAMES:
                    case o.l.PLAYED_GAMES:
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
                        children: (0, r.jsx)(i.oFk, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: u.intl.string(s.NP[t]),
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
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: u.intl.string(u.t.oqalCw),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.intl.string(u.t.O9SQ1d),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: f.widgetGrid,
                "aria-label": "Widget options",
                children: s.rR.map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(b, { widgetType: e }) }, e)),
            }),
        ],
    });
}
