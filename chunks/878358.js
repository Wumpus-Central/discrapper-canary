n.d(t, { A: () => F });
var r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    i = n(661531),
    c = n(109112),
    o = n(834730),
    u = n(140735),
    d = n(831544),
    m = n(534890),
    h = n(664121),
    x = n(460905),
    g = n(687966),
    f = n(554830),
    j = n(939249),
    v = n(788026),
    A = n(142617),
    p = n(819648),
    E = n(33293),
    N = n(498137),
    S = n(192339),
    C = n(144103),
    _ = n(834109),
    b = n(486020),
    R = n(48763),
    I = n(105292),
    T = n(478718),
    y = n(128400),
    M = n(241802);
let O = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function w(e) {
    let { src: t } = e;
    return (0, r.jsx)("img", { src: t, alt: "", className: M.Gl });
}
function P() {
    return (0, r.jsx)(c._, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function D(e) {
    let { character: t } = e;
    return (0, r.jsx)("div", {
        className: M.Ij,
        children: (0, r.jsx)(o.E, { variant: "text-xxs/normal", color: "text-overlay-dark", children: t }),
    });
}
function k(e) {
    let { icon: t, stat: n } = e;
    return (0, r.jsxs)("li", {
        className: M.N8,
        children: [
            t,
            (0, r.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: n.text,
            }),
            (0, r.jsx)(u.A, { children: n.accessibilityLabel }),
        ],
    });
}
function L(e) {
    let { stats: t } = e,
        { topGuild: n, topGuildAcronymCharacter: s, topEmoji: l, topGame: c } = t,
        o = a.useMemo(
            () => (null != n ? b.Ay.getGuildIconURL({ id: n.guildId, icon: n.guildIcon, size: 16 }) : void 0),
            [n],
        ),
        u = a.useMemo(
            () =>
                c?.applicationImageId != null
                    ? b.Ay.getApplicationIconURL({ id: c.applicationId, icon: c.applicationImageId, size: 16 })
                    : void 0,
            [c],
        ),
        f = a.useMemo(() => (null != o ? (0, r.jsx)(w, { src: o }) : (0, r.jsx)(D, { character: s })), [o, s]);
    return (0, r.jsxs)("ul", {
        className: M.M1,
        children: [
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(d.MicrophoneIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(m.ChatIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, r.jsx)(k, { icon: f, stat: t.topGuildName }) : null,
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(h.R, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(x.n, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != l
                ? (0, r.jsx)(k, {
                      icon: (0, r.jsx)(v.A, { emojiId: l.emojiId, emojiName: l.emojiName, alt: "", className: M.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(g.GameControllerIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, r.jsx)(k, {
                      icon: null != u ? (0, r.jsx)(w, { src: u }) : (0, r.jsx)(P, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function G(e) {
    let { isCheckpointEnabled: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.E, {
                variant: "experimental/display-xs",
                color: "text-overlay-dark",
                className: M.K8,
                children: I.intl.string(T.default["CdU/PF"]),
            }),
            t
                ? (0, r.jsx)("div", {
                      className: M.wC,
                      "aria-hidden": !0,
                      children: (0, r.jsx)(f.K, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function U(e) {
    let { isCheckpointEnabled: t, onClick: n } = e;
    return t && null != n
        ? (0, r.jsx)(j.D, {
              className: l()(M.qr, M.vk),
              onClick: n,
              "aria-label": I.intl.string(T.default.r8GEbK),
              children: (0, r.jsx)(G, { isCheckpointEnabled: t }),
          })
        : (0, r.jsx)("div", {
              className: M.qr,
              "aria-hidden": !0,
              children: (0, r.jsx)(G, { isCheckpointEnabled: t }),
          });
}
function F(e) {
    let { checkpointData: t, onFooterClick: n } = e,
        { character: s, stats: i, cardColorPalette: c } = t,
        o = null != s && null != i,
        d = (0, A.FX)("Checkpoint2026CardDisplayComponent"),
        m = a.useMemo(() => (null != i ? (0, p.R8)(i) : null), [i]);
    return (0, r.jsxs)(N.A, {
        cardColorPalette: c,
        size: R.W.SM,
        className: l()(M.Nr, { [M.Q9]: o }),
        style: O,
        children: [
            (0, r.jsx)(u.A, { children: I.intl.string(y.default.Og2R9d) }),
            (0, r.jsx)(S.A, {}),
            (0, r.jsx)(_.A, { variant: null != s ? "full" : "short", className: M.Ss }),
            null != s && null != m
                ? (0, r.jsx)(C.A, { powerLevel: m.powerLevel, powerLevelUnits: m.powerLevelUnits })
                : null,
            null != s ? (0, r.jsx)(E.A, { character: s }) : null,
            null != m ? (0, r.jsx)(L, { stats: m }) : null,
            (0, r.jsx)(U, { isCheckpointEnabled: d, onClick: n }),
        ],
    });
}
