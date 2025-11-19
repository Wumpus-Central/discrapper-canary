n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(43267),
    c = n(933557),
    u = n(471445),
    d = n(600164),
    f = n(925329),
    _ = n(565138),
    p = n(134432),
    h = n(695346),
    m = n(768581),
    g = n(153066),
    E = n(388032),
    b = n(257727);
let y = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(s.Heading, {
            variant: "heading-md/semibold",
            className: b.header,
            children: [t, n],
        });
    },
    O = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: b.content,
            children: t
                ? (0, r.jsxs)("div", {
                      className: b.resolvingWrapper,
                      children: [
                          (0, r.jsx)("div", {
                              className: b.resolving,
                              children: (0, r.jsx)("div", { className: b.resolvingBackground }),
                          }),
                          (0, r.jsx)("div", {
                              className: b.resolvingFakeButton,
                              children: (0, r.jsx)("div", { className: b.resolvingBackground }),
                          }),
                      ],
                  })
                : n,
        });
    },
    v = (e) => {
        var t;
        let { application: n, guild: i, channel: a, onClick: u, expired: d = !1, user: p, className: m } = e,
            E = null != (t = (0, c.ZP)(a)) ? t : "",
            y = h.QK.useSetting();
        if (d) return (0, r.jsx)("div", { className: b.guildIconExpired });
        let O = null == i || null != i.icon,
            v = o()((0, g.l)(b, "guildIcon", O ? "Image" : "", null != u ? "Joined" : ""), m);
        return null != n
            ? (0, r.jsx)(f.Z, {
                  game: n,
                  onClick: u,
                  size: b.applicationIcon,
                  className: v,
              })
            : null != i
              ? (0, r.jsx)(_.Z, {
                    onClick: u,
                    active: !0,
                    guild: i,
                    className: v,
                    animate: y,
                })
              : null != a
                ? (0, r.jsx)(s.qEK, {
                      onClick: u,
                      src: (0, l.x)(a),
                      size: s.EFr.SIZE_56,
                      className: v,
                      "aria-label": E,
                  })
                : null != p
                  ? (0, r.jsx)(s.qEK, {
                        onClick: u,
                        src: p.getAvatarURL(null, 56),
                        size: s.EFr.SIZE_56,
                        className: v,
                        "aria-label": E,
                    })
                  : null;
    },
    I = (e) => {
        let { title: t, onClick: n, expired: i, children: a } = e,
            o = (0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                className: (0, g.l)(b, "inviteDestination", i ? "Expired" : null != n ? "Joined" : ""),
                children: t,
            });
        return (0, r.jsxs)(d.Z, {
            className: b.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
                null == n
                    ? o
                    : (0, r.jsx)(s.P3F, {
                          onClick: n,
                          children: o,
                      }),
                (0, r.jsx)(s.Text, {
                    tag: "strong",
                    className: b.guildDetail,
                    variant: "text-sm/normal",
                    children: a,
                }),
            ],
        });
    },
    T = (e) => {
        let { membersOnline: t, members: n } = e,
            i = [];
        return (
            null != t &&
                t > 0 &&
                i.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: b.statusOnline }),
                                (0, r.jsx)("span", {
                                    className: b.count,
                                    children: E.intl.format(E.t["LC+S+m"], { membersOnline: t }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != n &&
                i.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: b.statusOffline }),
                                (0, r.jsx)("span", {
                                    className: b.count,
                                    children: E.intl.format(E.t.zRl6XR, { count: n }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, r.jsx)("div", {
                className: b.statusCounts,
                children: i,
            })
        );
    },
    S = (e) => {
        let { channel: t, guild: n } = e,
            i = (0, u.KS)(t, n);
        return null == t || null == i
            ? null
            : (0, r.jsxs)("div", {
                  className: b.channel,
                  children: [
                      (0, r.jsx)(i, {
                          className: b.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, r.jsx)("span", {
                          className: b.channelName,
                          children: t.name,
                      }),
                  ],
              });
    },
    A = (e) => {
        let { children: t, className: n, containerRef: i } = e;
        return (0, r.jsx)("div", {
            ref: i,
            className: o()(b.wrapper, n),
            children: t,
        });
    },
    C = (e) => {
        let { guild: t } = e,
            [n, a] = i.useState(!1),
            s = m.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, p.x_)(),
            });
        return null == s
            ? null
            : (0, r.jsx)("div", {
                  className: b.inviteSplash,
                  children: (0, r.jsx)("img", {
                      src: s,
                      alt: "",
                      className: o()(b.inviteSplashImage, { [b.inviteSplashImageLoaded]: n }),
                      onLoad: () => a(!0),
                  }),
              });
    },
    N = (e) => {
        let { guild: t, ref: n } = e;
        return (0, r.jsx)("div", {
            className: b.guildNameWrapper,
            ref: n,
            children: (0, r.jsx)("span", {
                className: b.guildName,
                children: t.name,
            }),
        });
    },
    R = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)("div", {
            className: b.guildNameWrapper,
            children: (0, r.jsx)("span", {
                className: b.guildName,
                children: t.serializedSourceGuild.name,
            }),
        });
    };
(A.Header = y),
    (A.Body = O),
    (A.Icon = v),
    (A.Info = I),
    (A.Data = T),
    (A.Channel = S),
    (A.GuildSplash = C),
    (A.GuildName = N),
    (A.GuildTemplateName = R),
    (y.displayName = "InviteButton.Header"),
    (O.displayName = "InviteButton.Body"),
    (v.displayName = "InviteButton.Icon"),
    (I.displayName = "InviteButton.Info"),
    (T.displayName = "InviteButton.Data"),
    (S.displayName = "InviteButton.Channel"),
    (C.displayName = "InviteButton.GuildSplash"),
    (N.displayName = "InviteButton.GuildName"),
    (R.displayName = "InviteButton.GuildTemplateName");
let P = A;
