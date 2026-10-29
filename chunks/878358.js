n.d(t, { A: () => F });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
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
    p = n(788026),
    v = n(142617),
    A = n(819648),
    C = n(33293),
    E = n(498137),
    N = n(192339),
    S = n(144103),
    I = n(834109),
    b = n(486020),
    y = n(48763),
    T = n(105292),
    R = n(922704),
    _ = n(763166),
    O = n(241802);
let M = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function L(e) {
    let { src: t } = e;
    return (0, l.jsx)("img", { src: t, alt: "", className: O.Gl });
}
function P() {
    return (0, l.jsx)(c._, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function k(e) {
    let { character: t } = e;
    return (0, l.jsx)("div", {
        className: O.Ij,
        children: (0, l.jsx)(o.E, { variant: "text-xxs/normal", color: "text-overlay-dark", children: t }),
    });
}
function w(e) {
    let { icon: t, stat: n } = e;
    return (0, l.jsxs)("li", {
        className: O.N8,
        children: [
            t,
            (0, l.jsx)(o.E, {
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
function D(e) {
    let { stats: t } = e,
        { topGuild: n, topGuildAcronymCharacter: a, topEmoji: s, topGame: c } = t,
        o = r.useMemo(
            () => (null != n ? b.Ay.getGuildIconURL({ id: n.guildId, icon: n.guildIcon, size: 16 }) : void 0),
            [n],
        ),
        u = r.useMemo(
            () =>
                c?.applicationImageId != null
                    ? b.Ay.getApplicationIconURL({ id: c.applicationId, icon: c.applicationImageId, size: 16 })
                    : void 0,
            [c],
        ),
        f = r.useMemo(() => (null != o ? (0, l.jsx)(L, { src: o }) : (0, l.jsx)(k, { character: a })), [o, a]);
    return (0, l.jsxs)("ul", {
        className: O.M1,
        children: [
            (0, l.jsx)(w, {
                icon: (0, l.jsx)(d.MicrophoneIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, l.jsx)(w, {
                icon: (0, l.jsx)(m.ChatIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, l.jsx)(w, { icon: f, stat: t.topGuildName }) : null,
            (0, l.jsx)(w, {
                icon: (0, l.jsx)(h.R, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, l.jsx)(w, {
                icon: (0, l.jsx)(x.n, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != s
                ? (0, l.jsx)(w, {
                      icon: (0, l.jsx)(p.A, { emojiId: s.emojiId, emojiName: s.emojiName, alt: "", className: O.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, l.jsx)(w, {
                icon: (0, l.jsx)(g.GameControllerIcon, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, l.jsx)(w, {
                      icon: null != u ? (0, l.jsx)(L, { src: u }) : (0, l.jsx)(P, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function U(e) {
    let { isCheckpointEnabled: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.E, {
                variant: "experimental/display-xs",
                color: "text-overlay-dark",
                className: O.K8,
                children: T.intl.string(R.default["CdU/PF"]),
            }),
            t
                ? (0, l.jsx)("div", {
                      className: O.wC,
                      "aria-hidden": !0,
                      children: (0, l.jsx)(f.K, { color: i.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function G(e) {
    let { isCheckpointEnabled: t, onClick: n } = e;
    return t && null != n
        ? (0, l.jsx)(j.D, {
              className: s()(O.qr, O.vk),
              onClick: n,
              "aria-label": T.intl.string(R.default.r8GEbK),
              children: (0, l.jsx)(U, { isCheckpointEnabled: t }),
          })
        : (0, l.jsx)("div", {
              className: O.qr,
              "aria-hidden": !0,
              children: (0, l.jsx)(U, { isCheckpointEnabled: t }),
          });
}
function F(e) {
    let { checkpointData: t, onFooterClick: n } = e,
        { character: a, stats: i, cardColorPalette: c } = t,
        o = null != a && null != i,
        d = (0, v.FX)("Checkpoint2026CardDisplayComponent"),
        m = r.useMemo(() => (null != i ? (0, A.R8)(i) : null), [i]);
    return (0, l.jsxs)(E.A, {
        cardColorPalette: c,
        size: y.W.SM,
        className: s()(O.Nr, { [O.Q9]: o }),
        style: M,
        children: [
            (0, l.jsx)(u.A, { children: T.intl.string(_.default.Og2R9d) }),
            (0, l.jsx)(N.A, {}),
            (0, l.jsx)(I.A, { variant: null != a ? "full" : "short", className: O.Ss }),
            null != a && null != m
                ? (0, l.jsx)(S.A, { powerLevel: m.powerLevel, powerLevelUnits: m.powerLevelUnits })
                : null,
            null != a ? (0, l.jsx)(C.A, { character: a }) : null,
            null != m ? (0, l.jsx)(D, { stats: m }) : null,
            (0, l.jsx)(G, { isCheckpointEnabled: d, onClick: n }),
        ],
    });
}
