n.d(t, { A: () => U });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(661531),
    o = n(109112),
    c = n(834730),
    u = n(140735),
    d = n(831544),
    m = n(534890),
    h = n(664121),
    x = n(460905),
    p = n(687966),
    j = n(554830),
    f = n(565645),
    g = n(142617),
    v = n(819648),
    C = n(33293),
    A = n(498137),
    N = n(192339),
    I = n(144103),
    y = n(834109),
    E = n(486020),
    S = n(48763),
    L = n(105292),
    T = n(922704),
    b = n(763166),
    R = n(241802);
let O = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function _(e) {
    let { src: t } = e;
    return (0, l.jsx)("img", { src: t, alt: "", className: R.Gl });
}
function k() {
    return (0, l.jsx)(o._, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xs" });
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
            (0, l.jsx)(u.A, { children: n.accessibilityLabel }),
        ],
    });
}
function P(e) {
    let { stats: t } = e,
        { topGuild: n, topEmoji: a, topGame: i } = t,
        o = r.useMemo(
            () => (null != n ? E.Ay.getGuildIconURL({ id: n.guildId, icon: n.guildIcon, size: 16 }) : void 0),
            [n],
        ),
        c = r.useMemo(
            () =>
                i?.applicationImageId != null
                    ? E.Ay.getApplicationIconURL({ id: i.applicationId, icon: i.applicationImageId, size: 16 })
                    : void 0,
            [i],
        ),
        u = r.useMemo(() => (null != o ? (0, l.jsx)(_, { src: o }) : (0, l.jsx)(k, {})), [o]);
    return (0, l.jsxs)("ul", {
        className: R.M1,
        children: [
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(d.MicrophoneIcon, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(m.ChatIcon, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(h.R, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, l.jsx)(M, { icon: u, stat: t.topGuildName }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(x.n, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            (0, l.jsx)(M, {
                icon:
                    null != a
                        ? (0, l.jsx)(f.A, { emojiId: a.emojiId, emojiName: a.emojiName, alt: "", className: R.Gl })
                        : (0, l.jsx)(k, {}),
                stat: t.topEmojiName,
            }),
            (0, l.jsx)(M, {
                icon: (0, l.jsx)(p.GameControllerIcon, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            (0, l.jsx)(M, { icon: null != c ? (0, l.jsx)(_, { src: c }) : (0, l.jsx)(k, {}), stat: t.topGameName }),
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
                children: L.intl.string(T.default["CdU/PF"]),
            }),
            (0, l.jsx)("div", {
                className: R.wC,
                "aria-hidden": !0,
                children: (0, l.jsx)(j.K, { color: s.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
            }),
        ],
    });
}
function U(e) {
    let { checkpointData: t } = e,
        { character: n, stats: a } = t,
        s = null != n && null != a,
        o = (0, g.FX)("Checkpoint2026CardDisplayComponent"),
        c = r.useMemo(() => (null != a ? (0, v.R8)(a) : null), [a]);
    return (0, l.jsxs)(A.A, {
        character: n,
        size: S.W.SM,
        className: i()(R.Nr, { [R.Q9]: s }),
        style: O,
        children: [
            (0, l.jsx)(u.A, { children: L.intl.string(b.default.Og2R9d) }),
            (0, l.jsx)(N.A, {}),
            (0, l.jsx)(y.A, { variant: null != n ? "full" : "short", className: R.Ss }),
            null != n && null != c
                ? (0, l.jsx)(I.A, { powerLevel: c.powerLevel, powerLevelUnits: c.powerLevelUnits })
                : null,
            null != n ? (0, l.jsx)(C.A, { character: n }) : null,
            null != c ? (0, l.jsx)(P, { stats: c }) : null,
            o ? (0, l.jsx)(w, {}) : null,
        ],
    });
}
