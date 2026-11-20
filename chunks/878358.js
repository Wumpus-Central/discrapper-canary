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
    w = a(772210),
    I = a(33293),
    E = a(498137),
    j = a(192339),
    S = a(834109),
    C = a(486020),
    N = a(48763),
    T = a(792996),
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
    return (0, i.jsx)("img", { src: t, alt: "", className: M.Gl, draggable: !1 });
}
function k() {
    return (0, i.jsx)(d.UnknownGameIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function D(e) {
    let { character: t } = e;
    return (0, i.jsx)("div", {
        className: M.Ij,
        children: (0, i.jsx)(l.E, { variant: "footnote/normal", color: "text-overlay-dark", children: t }),
    });
}
function P(e) {
    let { icon: t, stat: a } = e;
    return (0, i.jsxs)("li", {
        className: M.N8,
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
function U(e) {
    let { stats: t } = e,
        { topGuild: a, topGuildAcronymCharacter: n, topEmoji: s, topGame: d } = t,
        l = r.useMemo(
            () => (null != a ? C.Ay.getGuildIconURL({ id: a.guildId, icon: a.guildIcon, size: 16 }) : void 0),
            [a],
        ),
        o = r.useMemo(
            () =>
                d?.applicationImageId != null
                    ? C.Ay.getApplicationIconURL({ id: d.applicationId, icon: d.applicationImageId, size: 16 })
                    : void 0,
            [d],
        ),
        _ = r.useMemo(() => (null != l ? (0, i.jsx)(L, { src: l }) : (0, i.jsx)(D, { character: n })), [l, n]);
    return (0, i.jsxs)("ul", {
        className: M.M1,
        children: [
            (0, i.jsx)(P, {
                icon: (0, i.jsx)(u.MicrophoneIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, i.jsx)(P, {
                icon: (0, i.jsx)(h.ChatIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, i.jsx)(P, { icon: _, stat: t.topGuildName }) : null,
            (0, i.jsx)(P, {
                icon: (0, i.jsx)(f.ServerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, i.jsx)(P, {
                icon: (0, i.jsx)(b.ReactionIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != s
                ? (0, i.jsx)(P, {
                      icon: (0, i.jsx)(g.A, { emojiId: s.emojiId, emojiName: s.emojiName, alt: "", className: M.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, i.jsx)(P, {
                icon: (0, i.jsx)(p.GameControllerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, i.jsx)(P, {
                      icon: null != o ? (0, i.jsx)(L, { src: o }) : (0, i.jsx)(k, {}),
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
                className: M.K8,
                children: T.intl.string(R.default["CdU/PF"]),
            }),
            t
                ? (0, i.jsx)("div", {
                      className: M.wC,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(_.ArrowLargeRightIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
                  })
                : null,
        ],
    });
}
function H(e) {
    let { isCheckpointEnabled: t, onClick: a } = e;
    return t && null != a
        ? (0, i.jsx)(m.m, {
              text: T.intl.string(O.default.UjtEWE),
              caretConfig: { align: "end" },
              ariaHidden: !0,
              children: (0, i.jsx)(x.D, {
                  className: s()(M.qr, M.vk),
                  onClick: a,
                  "aria-label": T.intl.string(O.default.UjtEWE),
                  children: (0, i.jsx)(G, { isCheckpointEnabled: t }),
              }),
          })
        : (0, i.jsx)("div", {
              className: M.qr,
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
                { character: n, stats: c, cardColorPalette: d } = t,
                l = (0, w.A)(n, 224),
                u = null != n && null != c,
                h = (0, A.FX)("Checkpoint2026CardDisplayComponent"),
                f = r.useMemo(() => (null != c ? (0, v.R8)(c) : null), [c]);
            return (0, i.jsxs)(E.A, {
                cardColorPalette: d,
                size: N.W.SM,
                className: s()(M.Nr, { [M.Q9]: u }),
                style: y,
                isLoading: "loading" === l.status,
                inert: "loading" === l.status,
                children: [
                    (0, i.jsx)(o.A, { children: T.intl.string(O.default.Og2R9d) }),
                    (0, i.jsx)(j.A, {}),
                    (0, i.jsx)(S.A, { variant: null != n ? "full" : "short", className: M.Ss }),
                    null != n ? (0, i.jsx)(I.A, { character: n, images: l }) : null,
                    null != f ? (0, i.jsx)(U, { stats: f }) : null,
                    (0, i.jsx)(H, { isCheckpointEnabled: h, onClick: a }),
                ],
            });
        },
    },
);
