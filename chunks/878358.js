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
    x = a(289873),
    g = a(565645),
    A = a(142617),
    v = a(819648),
    w = a(772210),
    I = a(994641),
    E = a(33293),
    j = a(498137),
    S = a(192339),
    C = a(834109),
    N = a(486020),
    T = a(48763),
    R = a(792996),
    M = a(350363),
    O = a(852717),
    y = a(241802);
let L = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function k(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { src: t, alt: "", className: y.Gl, draggable: !1 });
}
function D() {
    return (0, i.jsx)(d.UnknownGameIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function P(e) {
    let { character: t } = e;
    return (0, i.jsx)("div", {
        className: y.Ij,
        children: (0, i.jsx)(l.E, { variant: "footnote/normal", color: "text-overlay-dark", children: t }),
    });
}
function U(e) {
    let { icon: t, stat: a } = e;
    return (0, i.jsxs)("li", {
        className: y.N8,
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
function G(e) {
    let { stats: t } = e,
        { topGuild: a, topGuildAcronymCharacter: n, topEmoji: s, topGame: d } = t,
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
        _ = r.useMemo(() => (null != l ? (0, i.jsx)(k, { src: l }) : (0, i.jsx)(P, { character: n })), [l, n]);
    return (0, i.jsxs)("ul", {
        className: y.M1,
        children: [
            (0, i.jsx)(U, {
                icon: (0, i.jsx)(u.MicrophoneIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, i.jsx)(U, {
                icon: (0, i.jsx)(h.ChatIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            null != t.topGuildName ? (0, i.jsx)(U, { icon: _, stat: t.topGuildName }) : null,
            (0, i.jsx)(U, {
                icon: (0, i.jsx)(f.ServerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, i.jsx)(U, {
                icon: (0, i.jsx)(b.ReactionIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            null != t.topEmojiName && null != s
                ? (0, i.jsx)(U, {
                      icon: (0, i.jsx)(g.A, { emojiId: s.emojiId, emojiName: s.emojiName, alt: "", className: y.Gl }),
                      stat: t.topEmojiName,
                  })
                : null,
            (0, i.jsx)(U, {
                icon: (0, i.jsx)(p.GameControllerIcon, { color: c.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            null != t.topGameName
                ? (0, i.jsx)(U, {
                      icon: null != o ? (0, i.jsx)(k, { src: o }) : (0, i.jsx)(D, {}),
                      stat: t.topGameName,
                  })
                : null,
        ],
    });
}
function H() {
    return (0, i.jsx)("div", {
        className: y.qr,
        "aria-hidden": !0,
        children: (0, i.jsx)(l.E, {
            variant: "display-xs",
            color: "text-overlay-dark",
            className: y.K8,
            children: R.intl.string(M.default["CdU/PF"]),
        }),
    });
}
function F() {
    return (0, i.jsx)(_.ArrowLargeRightIcon, {
        color: c.A.colors.ICON_OVERLAY_DARK,
        size: "custom",
        width: 14,
        height: 14,
    });
}
function K(e) {
    let { onClick: t } = e,
        [a, n] = r.useState(!1);
    return null == t
        ? (0, i.jsx)("div", { className: y.lI, "aria-hidden": !0, children: (0, i.jsx)(F, {}) })
        : (0, i.jsx)(m.m, {
              text: R.intl.string(O.default.UjtEWE),
              ariaHidden: !0,
              children: (0, i.jsx)(I.f, {
                  size: "custom",
                  className: y.lI,
                  onClick: async () => {
                      if (!a) {
                          n(!0);
                          try {
                              await t();
                          } finally {
                              n(!1);
                          }
                      }
                  },
                  "aria-label": R.intl.string(O.default.UjtEWE),
                  "aria-busy": a,
                  children: a
                      ? (0, i.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: y.KV, itemClassName: y.bZ })
                      : (0, i.jsx)(F, {}),
              }),
          });
}
a.d(
    t,
    {},
    {
        A: function (e) {
            let { checkpointData: t, onCtaClick: a } = e,
                { character: n, stats: c, cardColorPalette: d } = t,
                l = (0, w.A)(n, 224),
                u = null != n && null != c,
                h = (0, A.FX)("Checkpoint2026CardDisplayComponent"),
                f = r.useMemo(() => (null != c ? (0, v.R8)(c) : null), [c]);
            return (0, i.jsxs)(j.A, {
                cardColorPalette: d,
                size: T.W.SM,
                className: s()(y.Nr, { [y.Q9]: u, [y.WY]: h }),
                style: L,
                isLoading: "loading" === l.status,
                inert: "loading" === l.status,
                children: [
                    (0, i.jsx)(o.A, { children: R.intl.string(O.default.Og2R9d) }),
                    (0, i.jsx)(S.A, {}),
                    (0, i.jsx)(C.A, { variant: null != n ? "full" : "short", className: y.Ss }),
                    null != n ? (0, i.jsx)(E.A, { character: n, images: l, className: y.AM }) : null,
                    null != f ? (0, i.jsx)(G, { stats: f }) : null,
                    (0, i.jsx)(H, {}),
                    h ? (0, i.jsx)(K, { onClick: a }) : null,
                ],
            });
        },
    },
);
