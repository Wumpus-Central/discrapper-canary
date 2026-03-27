"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(652215),
    d = n(788868),
    _ = n(985018),
    f = n(45812);
let p = 1048576,
    h = [
        {
            getPerkHeading: () => _.intl.string(_.t.tIiwuj),
            getPerkPreviewLightTheme: () => n(604203),
            getPerkPreviewDarkTheme: () => n(878515),
            getTier0Value: () => d.TG[c.TVA.NONE].limits.emoji,
            getTier1Value: () => d.TG[c.TVA.TIER_1].limits.emoji,
            getTier2Value: () => d.TG[c.TVA.TIER_2].limits.emoji,
            getTier3Value: () => d.TG[c.TVA.TIER_3].limits.emoji,
        },
        {
            getPerkHeading: () => _.intl.string(_.t["3iccet"]),
            getPerkPreviewLightTheme: () => n(105732),
            getPerkPreviewDarkTheme: () => n(857020),
            getTier0Value: () => d.TG[c.TVA.NONE].limits.stickers,
            getTier1Value: () => d.TG[c.TVA.TIER_1].limits.stickers,
            getTier2Value: () => d.TG[c.TVA.TIER_2].limits.stickers,
            getTier3Value: () => d.TG[c.TVA.TIER_3].limits.stickers,
        },
        {
            getPerkHeading: () => _.intl.string(_.t["+smCv9"]),
            getPerkPreviewLightTheme: () => n(597890),
            getPerkPreviewDarkTheme: () => n(297642),
            getTier0Value: () => d.TG[c.TVA.NONE].limits.soundboardSounds,
            getTier1Value: () => d.TG[c.TVA.TIER_1].limits.soundboardSounds,
            getTier2Value: () => d.TG[c.TVA.TIER_2].limits.soundboardSounds,
            getTier3Value: () => d.TG[c.TVA.TIER_3].limits.soundboardSounds,
        },
        {
            getPerkHeading: () => _.intl.string(_.t.SMYauD),
            getPerkPreviewLightTheme: () => n(323091),
            getPerkPreviewDarkTheme: () => n(261835),
            getTier0Value: () =>
                _.intl.formatToPlainString(_.t.zZ6Rdi, {
                    resolution: d.TG[c.TVA.NONE].limits.screenShareQualityResolution,
                    framerate: d.TG[c.TVA.NONE].limits.screenShareQualityFramerate,
                }),
            getTier1Value: () =>
                _.intl.formatToPlainString(_.t.zZ6Rdi, {
                    resolution: d.TG[c.TVA.TIER_1].limits.screenShareQualityResolution,
                    framerate: d.TG[c.TVA.TIER_1].limits.screenShareQualityFramerate,
                }),
            getTier2Value: () =>
                _.intl.formatToPlainString(_.t.zZ6Rdi, {
                    resolution: d.TG[c.TVA.TIER_2].limits.screenShareQualityResolution,
                    framerate: d.TG[c.TVA.TIER_2].limits.screenShareQualityFramerate,
                }),
            getTier3Value: () =>
                _.intl.formatToPlainString(_.t.zZ6Rdi, {
                    resolution: d.TG[c.TVA.TIER_3].limits.screenShareQualityResolution,
                    framerate: d.TG[c.TVA.TIER_3].limits.screenShareQualityFramerate,
                }),
        },
        {
            getPerkHeading: () => _.intl.string(_.t["/79IDj"]),
            getPerkPreviewLightTheme: () => n(913997),
            getPerkPreviewDarkTheme: () => n(95781),
            getTier0Value: () =>
                _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: d.TG[c.TVA.NONE].limits.bitrate / 1e3 }),
            getTier1Value: () =>
                _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: d.TG[c.TVA.TIER_1].limits.bitrate / 1e3 }),
            getTier2Value: () =>
                _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: d.TG[c.TVA.TIER_2].limits.bitrate / 1e3 }),
            getTier3Value: () =>
                _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: d.TG[c.TVA.TIER_3].limits.bitrate / 1e3 }),
        },
        {
            getPerkHeading: () => _.intl.string(_.t.R1U2xC),
            getPerkPreviewLightTheme: () => n(389833),
            getPerkPreviewDarkTheme: () => n(754561),
            getTier0Value: () => _.intl.formatToPlainString(_.t.pIn7Af, { size: d.TG[c.TVA.NONE].limits.fileSize / p }),
            getTier1Value: () =>
                _.intl.formatToPlainString(_.t.pIn7Af, { size: d.TG[c.TVA.TIER_1].limits.fileSize / p }),
            getTier2Value: () =>
                _.intl.formatToPlainString(_.t.pIn7Af, { size: d.TG[c.TVA.TIER_2].limits.fileSize / p }),
            getTier3Value: () =>
                _.intl.formatToPlainString(_.t.pIn7Af, { size: d.TG[c.TVA.TIER_3].limits.fileSize / p }),
        },
        {
            getPerkHeading: () => _.intl.string(_.t.f6vfso),
            getPerkPreviewLightTheme: () => n(735669),
            getPerkPreviewDarkTheme: () => n(283517),
            getTier0Value: () => d.TG[c.TVA.NONE].limits.stageVideoUsers,
            getTier1Value: () => d.TG[c.TVA.TIER_1].limits.stageVideoUsers,
            getTier2Value: () => d.TG[c.TVA.TIER_2].limits.stageVideoUsers,
            getTier3Value: () => d.TG[c.TVA.TIER_3].limits.stageVideoUsers,
        },
        {
            getPerkHeading: () => _.intl.string(_.t.qDqUME),
            getPerkPreviewLightTheme: () => n(970770),
            getPerkPreviewDarkTheme: () => n(416378),
            getTier0Value: () => !1,
            getTier1Value: () => !0,
            getTier2Value: () => !0,
            getTier3Value: () => !0,
        },
        {
            getPerkHeading: () => _.intl.string(_.t.uwqgbu),
            getPerkPreviewLightTheme: () => n(243580),
            getPerkPreviewDarkTheme: () => n(975940),
            getTier0Value: () => !1,
            getTier1Value: () => !0,
            getTier2Value: () => !0,
            getTier3Value: () => !0,
        },
        {
            getPerkHeading: () => _.intl.string(_.t.zxsDxc),
            getPerkPreviewLightTheme: () => n(435748),
            getPerkPreviewDarkTheme: () => n(978380),
            getTier0Value: () => !1,
            getTier1Value: () => !1,
            getTier2Value: () => _.intl.string(_.t["2TNS3n"]),
            getTier3Value: () => _.intl.string(_.t["l+S46U"]),
        },
        {
            getPerkHeading: () => _.intl.string(_.t["bHa+Ee"]),
            getPerkPreviewLightTheme: () => n(329312),
            getPerkPreviewDarkTheme: () => n(800120),
            getTier0Value: () => !1,
            getTier1Value: () => !1,
            getTier2Value: () => !0,
            getTier3Value: () => !0,
        },
        {
            getPerkHeading: () => _.intl.string(_.t.QV6MZQ),
            getPerkPreviewLightTheme: () => n(463384),
            getPerkPreviewDarkTheme: () => n(258963),
            getTier0Value: () => !1,
            getTier1Value: () => !1,
            getTier2Value: () => !1,
            getTier3Value: () => !0,
        },
    ];
function m(e) {
    let { children: t, className: n, tier: i } = e,
        s = i === c.TVA.NONE ? "text-muted" : "text-strong",
        o = i === c.TVA.NONE || null == i ? "heading-xl/normal" : "heading-xl/bold";
    return (0, r.jsxs)("th", {
        className: a()(f.PG, n),
        scope: "col",
        children: [
            (0, r.jsx)(l.Heading, { color: s, variant: o, children: t }),
            null != i &&
                (0, r.jsx)(l.Text, {
                    color: s,
                    variant: "text-md/normal",
                    children: _.intl.format(_.t["pob/cL"], { subscriptions: c.M2T[i] }),
                }),
        ],
    });
}
function E(e) {
    let t,
        { className: n, textVariant: i = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = a()(f.Jk, { [f.I$]: s });
        t = s
            ? (0, r.jsx)(l.A9s, { size: "md", color: "currentColor", className: e })
            : (0, r.jsx)(l.PGe, { size: "md", color: "currentColor", className: e });
    } else t = (0, r.jsx)(l.Text, { color: "interactive-text-active", variant: i, children: s });
    return (0, r.jsx)("td", { className: a()(f.xR, n), children: t });
}
function g(e) {
    switch (e) {
        case c.TVA.NONE:
        case c.TVA.TIER_1:
            return c.TVA.TIER_2;
        case c.TVA.TIER_2:
        case c.TVA.TIER_3:
            return c.TVA.TIER_3;
        default:
            return null;
    }
}
function A(e) {
    let { currentTier: t } = e,
        n = g(t);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: a()(f.ER, { [f.GH]: n === c.TVA.TIER_2, [f.z5]: n === c.TVA.TIER_3 }),
              children: (0, r.jsx)(l.Text, {
                  className: f.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === c.TVA.TIER_3 ? _.intl.string(_.t.d849Up) : _.intl.string(_.t.dZeX1z),
              }),
          });
}
function I(e) {
    let { isFocused: t, handleFocus: n, handleRowBlur: s, theme: u, row: c, hideTier0: d } = e,
        _ = i.useRef(null);
    return (0, r.jsxs)("tr", {
        className: f.__invalid_tableRow,
        children: [
            (0, r.jsx)("th", {
                className: a()(f.xR, f.uB),
                scope: "row",
                children: (0, r.jsx)(l.DUT, {
                    className: a()(f.VC, f.xR, f.Rk),
                    onFocus: n,
                    onBlur: s,
                    onMouseEnter: n,
                    onMouseLeave: s,
                    children: (0, r.jsx)(l.YNO, {
                        targetElementRef: _,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, r.jsx)("img", {
                                className: f.Mz,
                                src: (0, o.Mw)(u) ? c.getPerkPreviewDarkTheme() : c.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, r.jsx)(l.Text, { variant: "text-md/normal", ref: _, children: c.getPerkHeading() }),
                    }),
                }),
            }),
            !d && (0, r.jsx)(E, { textVariant: "text-md/normal", value: c.getTier0Value() }),
            (0, r.jsx)(E, { value: c.getTier1Value() }),
            (0, r.jsx)(E, { value: c.getTier2Value() }),
            (0, r.jsx)(E, { value: c.getTier3Value() }),
        ],
    });
}
let T = function (e) {
    let t = (0, u.Ay)(),
        [n, s] = i.useState(null),
        { className: a, guild: o, hideHeading: d, hideTier0: p } = e;
    function E(e) {
        s(e);
    }
    function g() {
        s(null);
    }
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            !d &&
                (0, r.jsx)(l.Heading, {
                    className: f.R_,
                    variant: "heading-xxl/extrabold",
                    children: _.intl.string(_.t["9GGb9k"]),
                }),
            (0, r.jsxs)("div", {
                className: f.wY,
                children: [
                    null != o && (0, r.jsx)(A, { currentTier: o.premiumTier }),
                    (0, r.jsxs)("table", {
                        className: f.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, r.jsx)("thead", {
                                children: (0, r.jsxs)("tr", {
                                    className: f.__invalid_tableRow,
                                    children: [
                                        (0, r.jsx)(m, { className: f.VC, children: _.intl.string(_.t.F5MY0k) }),
                                        !p && (0, r.jsx)(m, { tier: c.TVA.NONE, children: _.intl.string(_.t.mx8j2m) }),
                                        (0, r.jsx)(m, { tier: c.TVA.TIER_1, children: _.intl.string(_.t.nzXtaS) }),
                                        (0, r.jsx)(m, { tier: c.TVA.TIER_2, children: _.intl.string(_.t["h33/uW"]) }),
                                        (0, r.jsx)(m, { tier: c.TVA.TIER_3, children: _.intl.string(_.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("tbody", {
                                className: f.__invalid_tableBody,
                                children: h.map((e, i) => {
                                    let s = n === i;
                                    function a() {
                                        E(i);
                                    }
                                    return void 0 === e.predicate
                                        ? (0, r.jsx)(
                                              I,
                                              {
                                                  isFocused: s,
                                                  handleFocus: a,
                                                  handleRowBlur: g,
                                                  theme: t,
                                                  row: e,
                                                  hideTier0: p,
                                              },
                                              i,
                                          )
                                        : null;
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
