var i = a(477900),
    r = a(582128),
    s = a(503698),
    n = a.n(s),
    c = a(646514),
    d = a(109112),
    l = a(834730),
    o = a(140735),
    u = a(831544),
    h = a(534890),
    f = a(664121),
    b = a(460905),
    _ = a(687966),
    p = a(554830),
    x = a(939249),
    m = a(565645),
    g = a(142617),
    A = a(819648),
    v = a(33293),
    w = a(498137),
    I = a(192339),
    E = a(574414),
    j = a(834109),
    N = a(486020),
    S = a(48763),
    C = a(792996),
    T = a(350363),
    R = a(852717),
    O = a(241802);
let y = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function M(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { src: t, alt: "", className: O.Gl });
}
function D() {
    return (0, i.jsx)(d._, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function k(e) {
    let { character: t } = e;
    return (0, i.jsx)("div", {
        className: O.Ij,
        children: (0, i.jsx)(l.E, { variant: "footnote/normal", color: "text-overlay-dark", children: t }),
    });
}
function L(e) {
    let { icon: t, stat: a } = e;
    return (0, i.jsxs)("li", {
        className: O.N8,
        children: [
            t,
            (0, i.jsx)(l.E, {
                variant: "body-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: a.text,
            }),
            (0, i.jsx)(o.A, { children: a.accessibilityLabel }),
        ],
    });
}
function P(e) {
    let { stats: t } = e,
        { topGuild: a, topGuildAcronymCharacter: s, topEmoji: n, topGame: d } = t,
        l = r.useMemo(
            () => (null != a ? N.Ay.getGuildIconURL({ id: a.guildId, icon: a.guildIcon, size: 16 }) : void 0),
            [a],
        ),
        o = r.useMemo(
            () =>
                d?.applicationImageId != null
                    ? N.Ay.getApplicationIconURL({ id: d.applicationId, icon: d.applicationImageId, size: 16 })
                    : void 0,
            [d],
        ),
        p = r.useMemo(() => (null != l ? (0, i.jsx)(M, { src: l }) : (0, i.jsx)(k, { character: s })), [l, s]);
    return (0, i.jsxs)("ul", {
        className: O.M1,
        children: [
            (0, i.jsx)(L, {
                icon: (0, i.jsx)(u.MicrophoneIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, i.jsx)(L, {
                icon: (0, i.jsx)(h.ChatIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, i.jsx)(L, { icon: p, stat: t.topGuildName }) : null,
            (0, i.jsx)(L, {
                icon: (0, i.jsx)(f.R, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, i.jsx)(L, {
                icon: (0, i.jsx)(b.n, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != n
                ? (0, i.jsx)(L, {
                      icon: (0, i.jsx)(m.A, { emojiId: n.emojiId, emojiName: n.emojiName, alt: "", className: O.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, i.jsx)(L, {
                icon: (0, i.jsx)(_.GameControllerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, i.jsx)(L, {
                      icon: null != o ? (0, i.jsx)(M, { src: o }) : (0, i.jsx)(D, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function G(e) {
    let { isCheckpointEnabled: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.E, {
                variant: "display-xs",
                color: "text-overlay-dark",
                className: O.K8,
                children: C.intl.string(T.default["CdU/PF"]),
            }),
            t
                ? (0, i.jsx)("div", {
                      className: O.wC,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(p.K, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function H(e) {
    let { isCheckpointEnabled: t, onClick: a } = e;
    return t && null != a
        ? (0, i.jsx)(x.D, {
              className: n()(O.qr, O.vk),
              onClick: a,
              "aria-label": C.intl.string(T.default.r8GEbK),
              children: (0, i.jsx)(G, { isCheckpointEnabled: t }),
          })
        : (0, i.jsx)("div", {
              className: O.qr,
              "aria-hidden": !0,
              children: (0, i.jsx)(G, { isCheckpointEnabled: t }),
          });
}
a.d(
    t,
    {},
    {
        A: function (e) {
            let { checkpointData: t, onFooterClick: a } = e,
                { character: s, stats: c, cardColorPalette: d } = t,
                l = null != s && null != c,
                u = (0, g.FX)("Checkpoint2026CardDisplayComponent"),
                h = r.useMemo(() => (null != c ? (0, A.R8)(c) : null), [c]);
            return (0, i.jsxs)(w.A, {
                cardColorPalette: d,
                size: S.W.SM,
                className: n()(O.Nr, { [O.Q9]: l }),
                style: y,
                children: [
                    (0, i.jsx)(o.A, { children: C.intl.string(R.default.Og2R9d) }),
                    (0, i.jsx)(I.A, {}),
                    (0, i.jsx)(j.A, { variant: null != s ? "full" : "short", className: O.Ss }),
                    null != s && null != h
                        ? (0, i.jsx)(E.A, { powerLevel: h.powerLevel, powerLevelUnits: h.powerLevelUnits })
                        : null,
                    null != s ? (0, i.jsx)(v.A, { character: s }) : null,
                    null != h ? (0, i.jsx)(P, { stats: h }) : null,
                    (0, i.jsx)(H, { isCheckpointEnabled: u, onClick: a }),
                ],
            });
        },
    },
);
