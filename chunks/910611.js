n.d(t, {
    TS: () => F,
    ud: () => L,
    v0: () => U,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(28664),
    u = n(481060),
    d = n(835473),
    p = n(385499),
    f = n(933557),
    h = n(471445),
    m = n(243778),
    g = n(565138),
    b = n(370774),
    _ = n(703656),
    y = n(621853),
    C = n(484459),
    v = n(699516),
    O = n(914010),
    x = n(594174),
    E = n(768581),
    j = n(63063),
    S = n(374386),
    P = n(946734),
    I = n(99843),
    Z = n(372564),
    T = n(984370),
    N = n(217314),
    A = n(981631),
    w = n(921944),
    M = n(388032),
    R = n(97009);
function D(e) {
    var t;
    let { channel: n, children: i } = e,
        l = (0, d.q)(null == (t = n.linkedLobby) ? void 0 : t.application_id),
        [a, o] = (0, m.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let p = E.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14,
        }),
        [f, h] =
            a !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [M.intl.string(M.t["XJVlf/"]), void 0]
                : [
                      (0, r.jsxs)(
                          "div",
                          {
                              className: R.linkedLobbyEducationTooltip,
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: M.intl.string(M.t.YIVr4B),
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      color: "header-secondary",
                                      children: M.intl.format(M.t["16aguo"], {
                                          helpdeskArticle: j.Z.getArticleURL(A.BhN.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, r.jsx)(u.P3F, {
                                      className: R.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => o(w.L.USER_DISMISS),
                                      children: (0, r.jsx)(u.Dio, {
                                          className: R.linkedLobbyEducationTooltipCloseIcon,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      M.intl.string(M.t.YIVr4B),
                  ];
    return (0, r.jsx)(
        c.u,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: f,
            "aria-label": h,
            forceOpen: a === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, r.jsxs)("div", {
                className: R.linkedLobbyTooltip,
                children: [
                    i,
                    (0, r.jsxs)(u.Text, {
                        className: R.linkedLobby,
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: [
                            "\u2022",
                            (0, r.jsx)("img", {
                                alt: "",
                                src: p,
                                className: R.linkedLobbyApplicationIcon,
                            }),
                            l.name,
                        ],
                    }),
                ],
            }),
        },
        a,
    );
}
function L(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: l,
            guild: o,
            inSidebar: s = !1,
            handleClick: c,
            handleContextMenu: d,
            handleParentClick: p,
            handleParentContextMenu: m,
            renderFollowButton: g,
        } = e,
        b = (0, h.KS)(t, o),
        { prefix: _, level: y } = (function (e, t) {
            var n, r;
            switch (e) {
                case A.d4z.DM:
                    return {
                        prefix: M.intl.string(M.t.EJRzg7),
                        level: 1,
                    };
                case A.d4z.GROUP_DM:
                    return {
                        prefix: M.intl.string(M.t["e5y+gm"]),
                        level: 1,
                    };
                case A.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null != (n = null == t ? void 0 : t.name) ? n : "",
                        level: 1,
                    };
                case A.d4z.GUILD_ANNOUNCEMENT:
                case A.d4z.GUILD_TEXT:
                case A.d4z.GUILD_FORUM:
                case A.d4z.GUILD_MEDIA:
                case A.d4z.GUILD_STAGE_VOICE:
                case A.d4z.GUILD_VOICE:
                    return {
                        prefix: null != (r = null == t ? void 0 : t.name) ? r : "",
                        level: 1,
                    };
                case A.d4z.ANNOUNCEMENT_THREAD:
                case A.d4z.PUBLIC_THREAD:
                case A.d4z.PRIVATE_THREAD:
                    return {
                        prefix: M.intl.string(M.t["7Xm5QI"]),
                        level: 2,
                    };
                default:
                    return {
                        prefix: null,
                        level: 1,
                    };
            }
        })(t.type, o),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                null != _
                    ? (0, r.jsxs)(u.nn4, {
                          children: [_, ":"],
                      })
                    : null,
                " ",
                n,
            ],
        });
    switch (t.type) {
        case A.d4z.DM:
            return (0, r.jsx)(N.Z, {
                level: y,
                channel: t,
                handleClick: c,
                handleContextMenu: d,
            });
        case A.d4z.GROUP_DM:
            if (t.isManaged()) return C;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.nn4, { children: M.intl.string(M.t["e5y+gm"]) }),
                    (0, r.jsx)(I.j, { channel: t }, "channel-".concat(t.id)),
                ],
            });
        case A.d4z.GUILD_ANNOUNCEMENT:
        case A.d4z.GUILD_TEXT:
        case A.d4z.GUILD_FORUM:
        case A.d4z.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, r.jsxs)(D, {
                      channel: t,
                      children: [
                          B(
                              b,
                              t.type === A.d4z.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, r.jsx)(T.Z.Title, {
                              level: y,
                              onContextMenu: d,
                              onClick: c,
                              children: C,
                          }),
                      ],
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          B(
                              b,
                              t.type === A.d4z.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, r.jsx)(T.Z.Title, {
                              level: y,
                              onContextMenu: d,
                              onClick: c,
                              children: C,
                          }),
                          null != g ? g() : null,
                      ],
                  });
        case A.d4z.GUILD_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    B(b, M.intl.string(M.t.BVZqJl)),
                    (0, r.jsx)(T.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: c,
                        children: C,
                    }),
                ],
            });
        case A.d4z.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    B(b, M.intl.string(M.t.EErMzA)),
                    (0, r.jsx)(T.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: c,
                        children: C,
                    }),
                ],
            });
        case A.d4z.ANNOUNCEMENT_THREAD:
        case A.d4z.PUBLIC_THREAD:
        case A.d4z.PRIVATE_THREAD:
            let O = null;
            if (!s && null != l) {
                let e = (0, h.KS)(l, o);
                O = (0, r.jsxs)(i.Fragment, {
                    children: [
                        B(e, M.intl.string(M.t.Pnajj0)),
                        (0, r.jsx)(T.Z.Title, {
                            level: y,
                            onContextMenu: m,
                            onClick: p,
                            className: a()(R.parentChannelName, R.cursorPointer),
                            children: (0, f.F6)(l, x.default, v.Z),
                        }),
                        (0, r.jsx)(T.Z.Caret, {}),
                    ],
                });
            }
            let E = (null == l ? void 0 : l.type) != null && A.TPd.GUILD_THREADS_ONLY.has(l.type);
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    O,
                    B(E ? null : b, M.intl.string(M.t["7Xm5QI"])),
                    (0, r.jsx)(T.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: c,
                        className: a()({
                            [R.cursorPointer]: s,
                            [R.forumPostTitle]: E,
                            [R.forumPostSidebarTitle]: s && E,
                        }),
                        children: C,
                    }),
                ],
            });
        case A.d4z.GUILD_DIRECTORY:
            let j = (null == o ? void 0 : o.features.has(A.GuildFeatures.HUB))
                ? M.intl.formatToPlainString(M.t.Dy2aht, { guildName: n })
                : n;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    null !== b
                        ? (0, r.jsx)(T.Z.ChannelIcon, {
                              icon: b,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsxs)(T.Z.Title, {
                        level: y,
                        onContextMenu: d,
                        onClick: c,
                        children: [
                            null != _
                                ? (0, r.jsxs)(u.nn4, {
                                      children: [_, ":"],
                                  })
                                : null,
                            " ",
                            j,
                        ],
                    }),
                ],
            });
        default:
            return null;
    }
}
let k = (e) => {
    var t, n, l;
    let { channel: a } = e,
        s = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        c = (0, o.e7)([x.default], () => x.default.getUser(a.getRecipientId())),
        u = (0, S.G)(),
        d = (0, o.e7)([y.Z], () => (null != c ? y.Z.getUserProfile(c.id) : null)),
        f = null != d && (null != (t = null == d ? void 0 : d.fetchEndedAt) ? t : 0) > 0;
    return (i.useEffect(() => {
        (null == s ? void 0 : s.isStaff()) &&
            null != c &&
            !c.isStaff() &&
            (0, C.Z)(c.id, c.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [s, c]),
    a.isDM() && (null == s ? void 0 : s.isStaff()) && null != c)
        ? c.isStaff()
            ? (0, r.jsx)(p.Z, { type: p.Z.Types.STAFF_ONLY_DM })
            : u && f && !(null != (l = null == (n = d.badges) ? void 0 : n.some((e) => e.id.startsWith("staff"))) && l)
              ? (0, r.jsx)(p.Z, { type: p.Z.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function U(e, t) {
    switch (e.type) {
        case A.d4z.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(k, { channel: e }), (0, r.jsx)(P.Z, { channel: e }, e.id)],
            });
        case A.d4z.GUILD_ANNOUNCEMENT:
        case A.d4z.GUILD_TEXT:
        case A.d4z.GUILD_VOICE:
        case A.d4z.GUILD_STAGE_VOICE:
        case A.d4z.GROUP_DM:
            return null != t
                ? (0, r.jsx)(
                      Z.Z,
                      {
                          channel: e,
                          guild: t,
                      },
                      e.id,
                  )
                : null;
        default:
            return null;
    }
}
function B(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null !== e &&
                (0, r.jsx)(T.Z.ChannelIcon, {
                    icon: e,
                    "aria-hidden": !0,
                }),
            (0, r.jsx)(u.nn4, { children: t }),
        ],
    });
}
function F(e) {
    let { guild: t, channel: n, caretPosition: l = "left" } = e,
        a = (0, o.e7)([O.Z], () => O.Z.getGuildId()),
        s = (0, b.D)(),
        d = i.useRef(null);
    return (a === A.I_8 || s) && null != t
        ? (0, r.jsx)(c.u, {
              asContainer: !0,
              text: t.name,
              targetElementRef: d,
              position: "bottom",
              children: (0, r.jsxs)(u.P3F, {
                  onClick: () => {
                      (0, _.XU)(t.id, n.id);
                  },
                  className: R.guildBreadcrumbContainer,
                  children: [
                      "left" === l && (0, r.jsx)(T.Z.Caret, { direction: "left" }),
                      (0, r.jsx)("div", {
                          ref: d,
                          children: (0, r.jsx)(g.Z, {
                              guild: t,
                              size: g.Z.Sizes.SMALLER,
                              className: R.guildBreadcrumbIcon,
                              active: !0,
                          }),
                      }),
                      "right" === l && (0, r.jsx)(T.Z.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}
