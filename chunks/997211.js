n.d(e, { M: () => k, A: () => z });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(855986),
    d = n(62617);
function o(t) {
    let { alt: e, ariaLabel: n, ariaHidden: s, role: r, width: a, height: o, className: c, style: I } = t,
        u = l.useMemo(
            () => (0, d.H)({ width: a, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: I }),
            [a, o, I],
        );
    return (0, i.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/c986e25b68c670ea6533709a908e2a6b35a8eaaa49e3e0a0dce08a8d9bf6ba35.svg",
        className: (0, d.Z)(c),
        alt: e,
        "aria-label": n,
        "aria-hidden": s,
        role: r ?? "img",
    });
}
var c = n(778492),
    I = n(276293),
    u = n(56059),
    E = n(834730),
    S = n(534514),
    N = n(933832),
    m = n(821609),
    g = n(404778),
    h = n(149468),
    _ = n(120692),
    T = n(97808),
    A = n(778712),
    f = n(232554),
    D = n(408278),
    O = n(477155),
    G = n(935286),
    p = n(717421),
    L = n(792996),
    C = n(757412);
function j(t) {
    let { testimonial: e, className: n } = t,
        { message: l, profilePic: s, adminTitle: r, emphasisColor: a = "interactive-text-default" } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)(E.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: L.intl.format(l, {
                    testimonialHook: (t, e) =>
                        (0, i.jsx)(E.E, { tag: "span", variant: "body-sm/semibold", color: a, children: t }, e),
                }),
            }),
            (0, i.jsxs)("div", {
                className: C.f1,
                children: [
                    (0, i.jsx)(T.eu, { src: s, size: A._3.SIZE_16, "aria-hidden": !0 }),
                    (0, i.jsx)(E.E, { variant: "body-sm/medium", color: "text-default", children: r }),
                ],
            }),
        ],
    });
}
function x(t) {
    let { testimonials: e } = t,
        [[n, s], r] = l.useState([0, "right"]),
        a = l.useCallback(() => {
            r((t) => {
                let [n] = t;
                return 0 === n ? [e.length - 1, "left"] : [n - 1, "left"];
            });
        }, [r, e.length]),
        d = l.useCallback(() => {
            r((t) => {
                let [n] = t;
                return [(n + 1) % e.length, "right"];
            });
        }, [r, e.length]),
        o = e[n],
        c = l.useCallback((t, e, n, l) => (0, i.jsx)(b, { item: e, state: n, cleanup: l, direction: s }, t), [s]);
    return (0, i.jsxs)("div", {
        className: C.FD,
        children: [
            (0, i.jsx)("div", {
                className: C.nI,
                children: (0, i.jsx)(f.F, { items: [o], renderItem: c, getItemKey: (t) => t.adminTitle }),
            }),
            (0, i.jsx)(E.E, { variant: "body-lg/semibold", className: C.wV, "aria-hidden": !0, children: "\u201C" }),
            (0, i.jsxs)("div", {
                className: C.Jv,
                children: [
                    (0, i.jsx)(D.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: O.ArrowSmallLeftIcon,
                        onClick: a,
                        "aria-label": L.intl.string(L.t["13/7kX"]),
                    }),
                    (0, i.jsx)(D.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: G.ArrowSmallRightIcon,
                        onClick: d,
                        "aria-label": L.intl.string(L.t.PDTjLN),
                    }),
                ],
            }),
        ],
    });
}
function b(t) {
    let { item: e, state: n, cleanup: l, direction: s } = t,
        [r] = (0, p.z)(
            () => {
                switch (n) {
                    case f.wL.ENTERED:
                        return {
                            from: { transform: "right" === s ? "translateX(150%)" : "translate(-150%)" },
                            to: { transform: "translateX(0%)" },
                        };
                    case f.wL.YEETED:
                        return {
                            from: { transform: "translateX(0%)" },
                            to: { transform: "right" === s ? "translateX(-150%)" : "translate(150%)" },
                            onRest: l,
                        };
                    default:
                        return {};
                }
            },
            "respect-motion-settings",
            [n],
        );
    return (0, i.jsx)(_.animated.div, { style: r, children: (0, i.jsx)(j, { className: C.EV, testimonial: e }) });
}
var v = n(283012),
    R = n(913423),
    P = n(71393),
    y = n(287809),
    U = n(129230),
    M = n(555337),
    w = n(527678),
    B = n(400812),
    H = n(652215),
    F = n(511741);
function k(t) {
    let { isTooltip: e = !1 } = t,
        n = [
            {
                emoji: "\uD83E\uDDD9",
                emojiDescription: L.intl.string(L.t.Jh9uif),
                title: L.intl.string(L.t.ATF45v),
                selected: !0,
            },
            {
                emoji: "\uD83C\uDFA4",
                emojiDescription: L.intl.string(L.t["nGt+MV"]),
                title: L.intl.string(L.t["30uo7D"]),
                selected: !1,
            },
            {
                emoji: "\uD83D\uDC40",
                emojiDescription: L.intl.string(L.t.hOMH5o),
                title: L.intl.string(L.t["5Z5sgj"]),
                selected: !1,
            },
        ];
    e && n.pop();
    let l = e
            ? (0, i.jsx)(E.E, {
                  variant: "body-sm/semibold",
                  color: "text-strong",
                  children: L.intl.string(L.t.nTI2mQ),
              })
            : (0, i.jsx)(S.D, { variant: "heading-sm/semibold", children: L.intl.string(L.t.g1OQtu) }),
        s = e
            ? (0, i.jsx)(E.E, { variant: "footnote/normal", children: L.intl.format(L.t.hGwDPV, {}) })
            : (0, i.jsx)(E.E, { variant: "body-xs/normal", children: L.intl.format(L.t["8XLD3r"], {}) });
    return (0, i.jsxs)("div", {
        className: r()(F.SI, F.f5, { [F.YL]: e }),
        children: [
            l,
            (0, i.jsx)("div", {
                className: F.Pf,
                children: n.map((t, e) => {
                    let { emoji: n, emojiDescription: l, title: s, selected: a } = t;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: r()(F.CQ, { [F.wH]: a }),
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": l, children: n }),
                                (0, i.jsx)(E.E, { variant: "body-sm/medium", color: "text-strong", children: s }),
                                a &&
                                    (0, i.jsx)("div", {
                                        className: F.ct,
                                        children: (0, i.jsx)(N.CheckmarkLargeIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: F.AI,
                                        }),
                                    }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            s,
        ],
    });
}
function V() {
    let t = [
        {
            message: L.t.FUUXXk,
            profilePic:
                "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: L.intl.string(L.t.RZVpuo),
        },
        {
            message: L.t.JAXvDe,
            profilePic:
                "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: L.intl.string(L.t.xyrlg7),
        },
        {
            message: L.t.Wj9Djq,
            profilePic:
                "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: L.intl.string(L.t["o/LQMi"]),
        },
        {
            message: L.t.ALsMNZ,
            profilePic:
                "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: L.intl.string(L.t["uvM+xc"]),
        },
    ];
    return (0, i.jsx)(x, { testimonials: t });
}
function z() {
    let t = (0, a.bG)([M.A], () => M.A.getGuildId()),
        e = (0, a.bG)([P.A], () => P.A.getGuild(t)),
        n = (0, a.bG)([y.default], () => y.default.getCurrentUser());
    return null == t || null == e || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: F.Zj,
              children: [
                  (0, i.jsxs)("div", {
                      className: F.$P,
                      children: [
                          (0, i.jsx)(o, { alt: "", ariaHidden: !0 }),
                          (0, i.jsxs)("div", {
                              className: F.KF,
                              children: [
                                  (0, i.jsx)(S.D, {
                                      variant: "heading-xl/semibold",
                                      children: L.intl.string(L.t.GnKOAx),
                                  }),
                                  (0, i.jsx)(E.E, { variant: "body-md/normal", children: L.intl.string(L.t.SJRFJj) }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: F.JO,
                              children: (0, i.jsx)(m.$, {
                                  variant: "primary",
                                  text: L.intl.string(L.t.RzWDqY),
                                  onClick: function () {
                                      null != t &&
                                          (U.default.track(
                                              H.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              { ...(0, h.H$)(t), step: B.Hy[B.Hy.LANDING], back: !1, skip: !1 },
                                          ),
                                          (0, w._k)(t, B.Hy.LANDING));
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(g.c, {}),
                  (0, i.jsx)(V, {}),
                  (0, i.jsx)(g.c, {}),
                  (0, i.jsxs)("div", {
                      className: F.a7,
                      children: [
                          (0, i.jsxs)("div", {
                              className: F.fP,
                              children: [
                                  (0, i.jsx)(k, {}),
                                  (0, i.jsxs)("div", {
                                      className: F.Ru,
                                      children: [
                                          (0, i.jsx)(S.D, {
                                              variant: "heading-sm/semibold",
                                              children: L.intl.string(L.t.Z7kqKZ),
                                          }),
                                          (0, i.jsx)(E.E, {
                                              variant: "body-sm/normal",
                                              children: L.intl.string(L.t.di3UC5),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: F.fP,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: F.Ru,
                                      children: [
                                          (0, i.jsx)(S.D, {
                                              variant: "heading-sm/semibold",
                                              children: L.intl.string(L.t.O4jYEh),
                                          }),
                                          (0, i.jsx)(E.E, {
                                              variant: "body-sm/normal",
                                              children: L.intl.string(L.t["l/l/Gw"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: r()(F.SI, F.f5),
                                      children: [
                                          (0, i.jsx)(R.A, {
                                              guildId: t,
                                              welcomeMessage: { authorIds: [n.id], message: L.intl.string(L.t.hIWAft) },
                                          }),
                                          (0, i.jsx)(v.v, {
                                              title: L.intl.string(L.t["47zu7B"]),
                                              subtitle: L.intl.string(L.t["amoSN/"]),
                                              completed: !0,
                                              Icon: I.TextIcon,
                                              variant: "static",
                                          }),
                                          (0, i.jsx)(v.v, {
                                              title: L.intl.string(L.t.EZfTKE),
                                              subtitle: L.intl.string(L.t["/sYelW"]),
                                              completed: !0,
                                              Icon: I.TextIcon,
                                              variant: "static",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: F.fP,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: r()(F.SI, F.f5),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(c.AnnouncementsIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: L.intl.string(L.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(I.TextIcon, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: L.intl.string(L.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(I.TextIcon, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: L.intl.string(L.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(u.ForumIcon, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: L.intl.string(L.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((t, e) => {
                                          let { channelIcon: n, channel: l, selected: s } = t;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: r()(F.CQ, F.p9, { [F.wH]: s }),
                                                  children: [
                                                      (0, i.jsxs)("div", {
                                                          className: F.Ix,
                                                          children: [
                                                              n(),
                                                              (0, i.jsx)(E.E, {
                                                                  variant: "body-md/medium",
                                                                  color: "text-strong",
                                                                  children: l,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: r()(F.kv, { [F.wH]: s }),
                                                          children:
                                                              s &&
                                                              (0, i.jsx)(N.CheckmarkLargeIcon, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: F.AI,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              e,
                                          );
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: F.Ru,
                                      children: [
                                          (0, i.jsx)(S.D, {
                                              variant: "heading-sm/semibold",
                                              children: L.intl.string(L.t["3T9aHG"]),
                                          }),
                                          (0, i.jsx)(E.E, {
                                              variant: "body-sm/normal",
                                              children: L.intl.string(L.t.dA7Cag),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
