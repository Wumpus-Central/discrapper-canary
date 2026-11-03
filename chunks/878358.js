a.d(t, { A: () => H });
var r = a(477900),
    s = a(582128),
    i = a(503698),
    c = a.n(i),
    n = a(661531),
    d = a(109112),
    l = a(834730),
    o = a(140735),
    u = a(831544),
    h = a(534890),
    f = a(664121),
    b = a(460905),
    _ = a(687966),
    x = a(554830),
    p = a(939249),
    m = a(788026),
    g = a(142617),
    A = a(819648),
    v = a(33293),
    w = a(498137),
    I = a(192339),
    E = a(144103),
    j = a(834109),
    N = a(486020),
    S = a(48763),
    T = a(105292),
    R = a(465199),
    C = a(842089),
    O = a(241802);
let M = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function y(e) {
    let { src: t } = e;
    return (0, r.jsx)("img", { src: t, alt: "", className: O.Gl });
}
function L() {
    return (0, r.jsx)(d._, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function D(e) {
    let { character: t } = e;
    return (0, r.jsx)("div", {
        className: O.Ij,
        children: (0, r.jsx)(l.E, { variant: "text-xxs/normal", color: "text-overlay-dark", children: t }),
    });
}
function k(e) {
    let { icon: t, stat: a } = e;
    return (0, r.jsxs)("li", {
        className: O.N8,
        children: [
            t,
            (0, r.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: a.text,
            }),
            (0, r.jsx)(o.A, { children: a.accessibilityLabel }),
        ],
    });
}
function P(e) {
    let { stats: t } = e,
        { topGuild: a, topGuildAcronymCharacter: i, topEmoji: c, topGame: d } = t,
        l = s.useMemo(
            () => (null != a ? N.Ay.getGuildIconURL({ id: a.guildId, icon: a.guildIcon, size: 16 }) : void 0),
            [a],
        ),
        o = s.useMemo(
            () =>
                d?.applicationImageId != null
                    ? N.Ay.getApplicationIconURL({ id: d.applicationId, icon: d.applicationImageId, size: 16 })
                    : void 0,
            [d],
        ),
        x = s.useMemo(() => (null != l ? (0, r.jsx)(y, { src: l }) : (0, r.jsx)(D, { character: i })), [l, i]);
    return (0, r.jsxs)("ul", {
        className: O.M1,
        children: [
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(u.MicrophoneIcon, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(h.ChatIcon, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, r.jsx)(k, { icon: x, stat: t.topGuildName }) : null,
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(f.R, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(b.n, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != c
                ? (0, r.jsx)(k, {
                      icon: (0, r.jsx)(m.A, { emojiId: c.emojiId, emojiName: c.emojiName, alt: "", className: O.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, r.jsx)(k, {
                icon: (0, r.jsx)(_.GameControllerIcon, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, r.jsx)(k, {
                      icon: null != o ? (0, r.jsx)(y, { src: o }) : (0, r.jsx)(L, {}),
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
            (0, r.jsx)(l.E, {
                variant: "display-xs",
                color: "text-overlay-dark",
                className: O.K8,
                children: T.intl.string(R.default["CdU/PF"]),
            }),
            t
                ? (0, r.jsx)("div", {
                      className: O.wC,
                      "aria-hidden": !0,
                      children: (0, r.jsx)(x.K, { color: n.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function U(e) {
    let { isCheckpointEnabled: t, onClick: a } = e;
    return t && null != a
        ? (0, r.jsx)(p.D, {
              className: c()(O.qr, O.vk),
              onClick: a,
              "aria-label": T.intl.string(R.default.r8GEbK),
              children: (0, r.jsx)(G, { isCheckpointEnabled: t }),
          })
        : (0, r.jsx)("div", {
              className: O.qr,
              "aria-hidden": !0,
              children: (0, r.jsx)(G, { isCheckpointEnabled: t }),
          });
}
function H(e) {
    let { checkpointData: t, onFooterClick: a } = e,
        { character: i, stats: n, cardColorPalette: d } = t,
        l = null != i && null != n,
        u = (0, g.FX)("Checkpoint2026CardDisplayComponent"),
        h = s.useMemo(() => (null != n ? (0, A.R8)(n) : null), [n]);
    return (0, r.jsxs)(w.A, {
        cardColorPalette: d,
        size: S.W.SM,
        className: c()(O.Nr, { [O.Q9]: l }),
        style: M,
        children: [
            (0, r.jsx)(o.A, { children: T.intl.string(C.default.Og2R9d) }),
            (0, r.jsx)(I.A, {}),
            (0, r.jsx)(j.A, { variant: null != i ? "full" : "short", className: O.Ss }),
            null != i && null != h
                ? (0, r.jsx)(E.A, { powerLevel: h.powerLevel, powerLevelUnits: h.powerLevelUnits })
                : null,
            null != i ? (0, r.jsx)(v.A, { character: i }) : null,
            null != h ? (0, r.jsx)(P, { stats: h }) : null,
            (0, r.jsx)(U, { isCheckpointEnabled: u, onClick: a }),
        ],
    });
}
