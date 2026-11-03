a.d(t, { A: () => H });
var s = a(477900),
    i = a(582128),
    r = a(503698),
    n = a.n(r),
    c = a(661531),
    d = a(109112),
    l = a(834730),
    o = a(140735),
    u = a(831544),
    h = a(534890),
    f = a(664121),
    _ = a(460905),
    b = a(687966),
    p = a(554830),
    x = a(939249),
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
    C = a(105292),
    T = a(465199),
    R = a(842089),
    O = a(241802);
let M = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function y(e) {
    let { src: t } = e;
    return (0, s.jsx)("img", { src: t, alt: "", className: O.Gl });
}
function L() {
    return (0, s.jsx)(d._, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function D(e) {
    let { character: t } = e;
    return (0, s.jsx)("div", {
        className: O.Ij,
        children: (0, s.jsx)(l.E, { variant: "footnote/normal", color: "text-overlay-dark", children: t }),
    });
}
function k(e) {
    let { icon: t, stat: a } = e;
    return (0, s.jsxs)("li", {
        className: O.N8,
        children: [
            t,
            (0, s.jsx)(l.E, {
                variant: "body-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: a.text,
            }),
            (0, s.jsx)(o.A, { children: a.accessibilityLabel }),
        ],
    });
}
function P(e) {
    let { stats: t } = e,
        { topGuild: a, topGuildAcronymCharacter: r, topEmoji: n, topGame: d } = t,
        l = i.useMemo(
            () => (null != a ? N.Ay.getGuildIconURL({ id: a.guildId, icon: a.guildIcon, size: 16 }) : void 0),
            [a],
        ),
        o = i.useMemo(
            () =>
                d?.applicationImageId != null
                    ? N.Ay.getApplicationIconURL({ id: d.applicationId, icon: d.applicationImageId, size: 16 })
                    : void 0,
            [d],
        ),
        p = i.useMemo(() => (null != l ? (0, s.jsx)(y, { src: l }) : (0, s.jsx)(D, { character: r })), [l, r]);
    return (0, s.jsxs)("ul", {
        className: O.M1,
        children: [
            (0, s.jsx)(k, {
                icon: (0, s.jsx)(u.MicrophoneIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, s.jsx)(k, {
                icon: (0, s.jsx)(h.ChatIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, s.jsx)(k, { icon: p, stat: t.topGuildName }) : null,
            (0, s.jsx)(k, {
                icon: (0, s.jsx)(f.R, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, s.jsx)(k, {
                icon: (0, s.jsx)(_.n, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != n
                ? (0, s.jsx)(k, {
                      icon: (0, s.jsx)(m.A, { emojiId: n.emojiId, emojiName: n.emojiName, alt: "", className: O.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, s.jsx)(k, {
                icon: (0, s.jsx)(b.GameControllerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, s.jsx)(k, {
                      icon: null != o ? (0, s.jsx)(y, { src: o }) : (0, s.jsx)(L, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function G(e) {
    let { isCheckpointEnabled: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.E, {
                variant: "display-xs",
                color: "text-overlay-dark",
                className: O.K8,
                children: C.intl.string(T.default["CdU/PF"]),
            }),
            t
                ? (0, s.jsx)("div", {
                      className: O.wC,
                      "aria-hidden": !0,
                      children: (0, s.jsx)(p.K, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function U(e) {
    let { isCheckpointEnabled: t, onClick: a } = e;
    return t && null != a
        ? (0, s.jsx)(x.D, {
              className: n()(O.qr, O.vk),
              onClick: a,
              "aria-label": C.intl.string(T.default.r8GEbK),
              children: (0, s.jsx)(G, { isCheckpointEnabled: t }),
          })
        : (0, s.jsx)("div", {
              className: O.qr,
              "aria-hidden": !0,
              children: (0, s.jsx)(G, { isCheckpointEnabled: t }),
          });
}
function H(e) {
    let { checkpointData: t, onFooterClick: a } = e,
        { character: r, stats: c, cardColorPalette: d } = t,
        l = null != r && null != c,
        u = (0, g.FX)("Checkpoint2026CardDisplayComponent"),
        h = i.useMemo(() => (null != c ? (0, A.R8)(c) : null), [c]);
    return (0, s.jsxs)(w.A, {
        cardColorPalette: d,
        size: S.W.SM,
        className: n()(O.Nr, { [O.Q9]: l }),
        style: M,
        children: [
            (0, s.jsx)(o.A, { children: C.intl.string(R.default.Og2R9d) }),
            (0, s.jsx)(I.A, {}),
            (0, s.jsx)(j.A, { variant: null != r ? "full" : "short", className: O.Ss }),
            null != r && null != h
                ? (0, s.jsx)(E.A, { powerLevel: h.powerLevel, powerLevelUnits: h.powerLevelUnits })
                : null,
            null != r ? (0, s.jsx)(v.A, { character: r }) : null,
            null != h ? (0, s.jsx)(P, { stats: h }) : null,
            (0, s.jsx)(U, { isCheckpointEnabled: u, onClick: a }),
        ],
    });
}
