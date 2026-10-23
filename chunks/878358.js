n.d(t, { A: () => D });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(661531),
    o = n(109112),
    c = n(834730),
    d = n(140735),
    u = n(831544),
    m = n(534890),
    p = n(664121),
    h = n(460905),
    x = n(687966),
    f = n(554830),
    g = n(565645),
    C = n(142617),
    j = n(819648),
    v = n(965344),
    A = n(498137),
    N = n(192339),
    I = n(144103),
    y = n(834109),
    E = n(486020),
    b = n(48763),
    S = n(105292),
    L = n(922704),
    T = n(763166),
    R = n(241802);
let O = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function k(e) {
    let { src: t } = e;
    return (0, l.jsx)("img", { src: t, alt: "", className: R.Gl });
}
function _() {
    return (0, l.jsx)(o._, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function M(e) {
    let { icon: t, stat: n } = e;
    return (0, l.jsxs)("li", {
        className: R.N8,
        children: [
            t,
            (0, l.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: n.text,
            }),
            (0, l.jsx)(d.A, { children: n.accessibilityLabel }),
        ],
    });
}
function P(e) {
    let { stats: t } = e,
        { topGuild: n, topEmoji: a, topGame: s } = t,
        o = r.useMemo(
            () => (null != n ? E.Ay.getGuildIconURL({ id: n.guildId, icon: n.guildIcon, size: 16 }) : void 0),
            [n],
        ),
        c = r.useMemo(
            () =>
                s?.applicationImageId != null
                    ? E.Ay.getApplicationIconURL({ id: s.applicationId, icon: s.applicationImageId, size: 16 })
                    : void 0,
            [s],
        ),
        d = r.useMemo(() => (null != o ? (0, l.jsx)(k, { src: o }) : (0, l.jsx)(_, {})), [o]);
    return (0, l.jsxs)("ul", {
        className: R.M1,
        children: [
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(u.MicrophoneIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(m.ChatIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(p.R, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, l.jsx)(M, { icon: d, stat: t.topGuildName }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(h.n, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            (0, l.jsx)(M, {
                icon:
                    null != a
                        ? (0, l.jsx)(g.A, { emojiId: a.emojiId, emojiName: a.emojiName, alt: "", className: R.Gl })
                        : (0, l.jsx)(_, {}),
                stat: t.topEmojiName,
            }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(x.GameControllerIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            (0, l.jsx)(M, { icon: null != c ? (0, l.jsx)(k, { src: c }) : (0, l.jsx)(_, {}), stat: t.topGameName }),
        ],
    });
}
function w() {
    return (0, l.jsxs)("div", {
        className: R.qr,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)(c.E, {
                variant: "experimental/display-xs",
                color: "text-overlay-dark",
                className: R.K8,
                children: S.intl.string(L.default["CdU/PF"]),
            }),
            (0, l.jsx)("div", {
                className: R.wC,
                "aria-hidden": !0,
                children: (0, l.jsx)(f.K, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
            }),
        ],
    });
}
function D(e) {
    let { checkpointData: t } = e,
        { character: n, stats: a } = t,
        i = null != n && null != a,
        o = (0, C.FX)("Checkpoint2026CardDisplayComponent"),
        c = r.useMemo(() => (null != a ? (0, j.R8)(a) : null), [a]);
    return (0, l.jsxs)(A.A, {
        character: n,
        size: b.W.SM,
        className: s()(R.Nr, { [R.Q9]: i }),
        style: O,
        children: [
            (0, l.jsx)(d.A, { children: S.intl.string(T.default.Og2R9d) }),
            (0, l.jsx)(N.A, {}),
            (0, l.jsx)(y.A, { variant: null != n ? "full" : "short", className: R.Ss }),
            null != n && null != c
                ? (0, l.jsx)(I.A, { powerLevel: c.powerLevel, powerLevelUnits: c.powerLevelUnits })
                : null,
            null != n ? (0, l.jsx)(v.A, { character: n }) : null,
            null != c ? (0, l.jsx)(P, { stats: c }) : null,
            o ? (0, l.jsx)(w, {}) : null,
        ],
    });
}
