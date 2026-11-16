var r = a(477900),
    i = a(582128),
    n = a(503698),
    s = a.n(n),
    c = a(646514),
    d = a(109112),
    l = a(834730),
    o = a(140735),
    u = a(831544),
    h = a(534890),
    f = a(664121),
    b = a(460905),
    p = a(687966),
    _ = a(554830),
    m = a(866665),
    x = a(939249),
    g = a(565645),
    A = a(142617),
    v = a(819648),
    w = a(33293),
    I = a(498137),
    E = a(192339),
    j = a(574414),
    S = a(834109),
    N = a(486020),
    T = a(48763),
    C = a(792996),
    R = a(350363),
    O = a(852717),
    M = a(241802);
let y = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function L(e) {
    let { src: t } = e;
    return (0, r.jsx)("img", { src: t, alt: "", className: M.Gl });
}
function k() {
    return (0, r.jsx)(d.UnknownGameIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function D(e) {
    let { character: t } = e;
    return (0, r.jsx)("div", {
        className: M.Ij,
        children: (0, r.jsx)(l.E, { variant: "footnote/normal", color: "text-overlay-dark", children: t }),
    });
}
function P(e) {
    let { icon: t, stat: a } = e;
    return (0, r.jsxs)("li", {
        className: M.N8,
        children: [
            t,
            (0, r.jsx)(l.E, {
                variant: "body-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: a.text,
            }),
            (0, r.jsx)(o.A, { children: a.accessibilityLabel }),
        ],
    });
}
function U(e) {
    let { stats: t } = e,
        { topGuild: a, topGuildAcronymCharacter: n, topEmoji: s, topGame: d } = t,
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
        _ = i.useMemo(() => (null != l ? (0, r.jsx)(L, { src: l }) : (0, r.jsx)(D, { character: n })), [l, n]);
    return (0, r.jsxs)("ul", {
        className: M.M1,
        children: [
            (0, r.jsx)(P, {
                icon: (0, r.jsx)(u.MicrophoneIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, r.jsx)(P, {
                icon: (0, r.jsx)(h.ChatIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, r.jsx)(P, { icon: _, stat: t.topGuildName }) : null,
            (0, r.jsx)(P, {
                icon: (0, r.jsx)(f.ServerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, r.jsx)(P, {
                icon: (0, r.jsx)(b.ReactionIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != s
                ? (0, r.jsx)(P, {
                      icon: (0, r.jsx)(g.A, { emojiId: s.emojiId, emojiName: s.emojiName, alt: "", className: M.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, r.jsx)(P, {
                icon: (0, r.jsx)(p.GameControllerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, r.jsx)(P, {
                      icon: null != o ? (0, r.jsx)(L, { src: o }) : (0, r.jsx)(k, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function F(e) {
    let { isCheckpointEnabled: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.E, {
                variant: "display-xs",
                color: "text-overlay-dark",
                className: M.K8,
                children: C.intl.string(R.default["CdU/PF"]),
            }),
            t
                ? (0, r.jsx)("div", {
                      className: M.wC,
                      "aria-hidden": !0,
                      children: (0, r.jsx)(_.ArrowLargeRightIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function G(e) {
    let { isCheckpointEnabled: t, onClick: a } = e;
    return t && null != a
        ? (0, r.jsx)(m.m, {
              text: C.intl.string(O.default.UjtEWE),
              caretConfig: { align: "end" },
              ariaHidden: !0,
              children: (0, r.jsx)(x.D, {
                  className: s()(M.qr, M.vk),
                  onClick: a,
                  "aria-label": C.intl.string(O.default.UjtEWE),
                  children: (0, r.jsx)(F, { isCheckpointEnabled: t }),
              }),
          })
        : (0, r.jsx)("div", {
              className: M.qr,
              "aria-hidden": !0,
              children: (0, r.jsx)(F, { isCheckpointEnabled: t }),
          });
}
a.d(
    t,
    {},
    {
        A: function (e) {
            let { checkpointData: t, onFooterClick: a } = e,
                { character: n, stats: c, cardColorPalette: d } = t,
                l = null != n && null != c,
                u = (0, A.FX)("Checkpoint2026CardDisplayComponent"),
                h = i.useMemo(() => (null != c ? (0, v.R8)(c) : null), [c]);
            return (0, r.jsxs)(I.A, {
                cardColorPalette: d,
                size: T.W.SM,
                className: s()(M.Nr, { [M.Q9]: l }),
                style: y,
                children: [
                    (0, r.jsx)(o.A, { children: C.intl.string(O.default.Og2R9d) }),
                    (0, r.jsx)(E.A, {}),
                    (0, r.jsx)(S.A, { variant: null != n ? "full" : "short", className: M.Ss }),
                    null != n && null != h
                        ? (0, r.jsx)(j.A, { powerLevel: h.powerLevel, powerLevelUnits: h.powerLevelUnits })
                        : null,
                    null != n ? (0, r.jsx)(w.A, { character: n }) : null,
                    null != h ? (0, r.jsx)(U, { stats: h }) : null,
                    (0, r.jsx)(G, { isCheckpointEnabled: u, onClick: a }),
                ],
            });
        },
    },
);
