var i = a(477900),
    r = a(582128),
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
    j = a(834109),
    S = a(486020),
    C = a(48763),
    N = a(792996),
    T = a(350363),
    R = a(852717),
    O = a(241802);
let M = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function y(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { src: t, alt: "", className: O.Gl, draggable: !1 });
}
function L() {
    return (0, i.jsx)(d.UnknownGameIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function k(e) {
    let { character: t } = e;
    return (0, i.jsx)("div", {
        className: O.Ij,
        children: (0, i.jsx)(l.E, { variant: "footnote/normal", color: "text-overlay-dark", children: t }),
    });
}
function D(e) {
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
        { topGuild: a, topGuildAcronymCharacter: n, topEmoji: s, topGame: d } = t,
        l = r.useMemo(
            () => (null != a ? S.Ay.getGuildIconURL({ id: a.guildId, icon: a.guildIcon, size: 16 }) : void 0),
            [a],
        ),
        o = r.useMemo(
            () =>
                d?.applicationImageId != null
                    ? S.Ay.getApplicationIconURL({ id: d.applicationId, icon: d.applicationImageId, size: 16 })
                    : void 0,
            [d],
        ),
        _ = r.useMemo(() => (null != l ? (0, i.jsx)(y, { src: l }) : (0, i.jsx)(k, { character: n })), [l, n]);
    return (0, i.jsxs)("ul", {
        className: O.M1,
        children: [
            (0, i.jsx)(D, {
                icon: (0, i.jsx)(u.MicrophoneIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, i.jsx)(D, {
                icon: (0, i.jsx)(h.ChatIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, i.jsx)(D, { icon: _, stat: t.topGuildName }) : null,
            (0, i.jsx)(D, {
                icon: (0, i.jsx)(f.ServerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, i.jsx)(D, {
                icon: (0, i.jsx)(b.ReactionIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != s
                ? (0, i.jsx)(D, {
                      icon: (0, i.jsx)(g.A, { emojiId: s.emojiId, emojiName: s.emojiName, alt: "", className: O.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, i.jsx)(D, {
                icon: (0, i.jsx)(p.GameControllerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, i.jsx)(D, {
                      icon: null != o ? (0, i.jsx)(y, { src: o }) : (0, i.jsx)(L, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function U(e) {
    let { isCheckpointEnabled: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.E, {
                variant: "display-xs",
                color: "text-overlay-dark",
                className: O.K8,
                children: N.intl.string(T.default["CdU/PF"]),
            }),
            t
                ? (0, i.jsx)("div", {
                      className: O.wC,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(_.ArrowLargeRightIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function G(e) {
    let { isCheckpointEnabled: t, onClick: a } = e;
    return t && null != a
        ? (0, i.jsx)(m.m, {
              text: N.intl.string(R.default.UjtEWE),
              caretConfig: { align: "end" },
              ariaHidden: !0,
              children: (0, i.jsx)(x.D, {
                  className: s()(O.qr, O.vk),
                  onClick: a,
                  "aria-label": N.intl.string(R.default.UjtEWE),
                  children: (0, i.jsx)(U, { isCheckpointEnabled: t }),
              }),
          })
        : (0, i.jsx)("div", {
              className: O.qr,
              "aria-hidden": !0,
              children: (0, i.jsx)(U, { isCheckpointEnabled: t }),
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
                h = r.useMemo(() => (null != c ? (0, v.R8)(c) : null), [c]);
            return (0, i.jsxs)(I.A, {
                cardColorPalette: d,
                size: C.W.SM,
                className: s()(O.Nr, { [O.Q9]: l }),
                style: M,
                children: [
                    (0, i.jsx)(o.A, { children: N.intl.string(R.default.Og2R9d) }),
                    (0, i.jsx)(E.A, {}),
                    (0, i.jsx)(j.A, { variant: null != n ? "full" : "short", className: O.Ss }),
                    null != n ? (0, i.jsx)(w.A, { character: n }) : null,
                    null != h ? (0, i.jsx)(P, { stats: h }) : null,
                    (0, i.jsx)(G, { isCheckpointEnabled: u, onClick: a }),
                ],
            });
        },
    },
);
