n.d(t, { Z: () => k }), n(539854), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(755721),
    o = n(481060),
    c = n(43267),
    u = n(933557),
    d = n(471445),
    m = n(600164),
    p = n(925329),
    v = n(565138),
    f = n(134432),
    g = n(695346),
    b = n(768581),
    j = n(153066),
    x = n(388032),
    h = n(722579);
let N = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(o.vwX, {
            className: h.header,
            children: [t, n],
        });
    },
    O = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: h.content,
            children: t
                ? (0, r.jsxs)("div", {
                      className: h.resolvingWrapper,
                      children: [
                          (0, r.jsx)("div", {
                              className: h.resolving,
                              children: (0, r.jsx)("div", { className: h.resolvingBackground }),
                          }),
                          (0, r.jsx)("div", {
                              className: h.resolvingFakeButton,
                              children: (0, r.jsx)("div", { className: h.resolvingBackground }),
                          }),
                      ],
                  })
                : n,
        });
    },
    y = (e) => {
        var t;
        let { application: n, guild: l, channel: i, onClick: a, expired: d = !1, user: m, className: f } = e,
            b = null != (t = (0, u.ZP)(i)) ? t : "",
            x = g.QK.useSetting();
        if (d) return (0, r.jsx)("div", { className: h.guildIconExpired });
        let N = null == l || null != l.icon,
            O = s()((0, j.l)(h, "guildIcon", N ? "Image" : "", null != a ? "Joined" : ""), f);
        return null != n
            ? (0, r.jsx)(p.Z, {
                  game: n,
                  onClick: a,
                  size: h.applicationIcon,
                  className: O,
              })
            : null != l
              ? (0, r.jsx)(v.Z, {
                    onClick: a,
                    active: !0,
                    guild: l,
                    className: O,
                    animate: x,
                })
              : null != i
                ? (0, r.jsx)(o.qEK, {
                      onClick: a,
                      src: (0, c.x)(i),
                      size: o.EFr.SIZE_56,
                      className: O,
                      "aria-label": b,
                  })
                : null != m
                  ? (0, r.jsx)(o.qEK, {
                        onClick: a,
                        src: m.getAvatarURL(null, 56),
                        size: o.EFr.SIZE_56,
                        className: O,
                        "aria-label": b,
                    })
                  : null;
    },
    E = (e) => {
        let { title: t, onClick: n, expired: l, children: i } = e,
            s = (0, r.jsx)(o.X6q, {
                variant: "heading-md/semibold",
                className: (0, j.l)(h, "inviteDestination", l ? "Expired" : null != n ? "Joined" : ""),
                children: t,
            });
        return (0, r.jsxs)(m.Z, {
            className: h.guildInfo,
            direction: m.Z.Direction.VERTICAL,
            justify: m.Z.Justify.CENTER,
            children: [
                null == n
                    ? s
                    : (0, r.jsx)(o.P3F, {
                          onClick: n,
                          children: s,
                      }),
                (0, r.jsx)(o.Text, {
                    tag: "strong",
                    className: h.guildDetail,
                    variant: "text-sm/normal",
                    children: i,
                }),
            ],
        });
    },
    P = (e) => {
        let { membersOnline: t, members: n } = e,
            l = [];
        return (
            null != t &&
                t > 0 &&
                l.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: h.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: h.statusOnline }),
                                (0, r.jsx)("span", {
                                    className: h.count,
                                    children: x.intl.format(x.t["LC+S+v"], { membersOnline: t }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != n &&
                l.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: h.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: h.statusOffline }),
                                (0, r.jsx)("span", {
                                    className: h.count,
                                    children: x.intl.format(x.t.zRl6XV, { count: n }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, r.jsx)("div", {
                className: h.statusCounts,
                children: l,
            })
        );
    },
    I = (e) => {
        let { channel: t, guild: n } = e,
            l = (0, d.KS)(t, n);
        return null == t || null == l
            ? null
            : (0, r.jsxs)("div", {
                  className: h.channel,
                  children: [
                      (0, r.jsx)(l, {
                          className: h.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, r.jsx)("span", {
                          className: h.channelName,
                          children: t.name,
                      }),
                  ],
              });
    },
    S = (e) => {
        var t,
            n,
            { children: l, onClick: i, className: o, isDisabled: c } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["children", "onClick", "className", "isDisabled"]);
        return (0, r.jsx)(
            a.zx,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, u)),
            (n = n =
                {
                    disabled: c,
                    onClick: i,
                    size: h.buttonSize,
                    className: s()(h.button, o),
                    children: l,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
    };
(S.Colors = a.zx.Colors),
    (S.Looks = a.zx.Looks),
    (S.defaultProps = {
        className: null,
        isDisabled: !1,
    });
let C = (e) => {
        let { children: t, className: n, containerRef: l } = e;
        return (0, r.jsx)("div", {
            ref: l,
            className: s()(h.wrapper, n),
            children: t,
        });
    },
    w = (e) => {
        let { guild: t } = e,
            [n, i] = l.useState(!1),
            a = b.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, f.x_)(),
            });
        return null == a
            ? null
            : (0, r.jsx)("div", {
                  className: h.inviteSplash,
                  children: (0, r.jsx)("img", {
                      src: a,
                      alt: "",
                      className: s()(h.inviteSplashImage, { [h.inviteSplashImageLoaded]: n }),
                      onLoad: () => i(!0),
                  }),
              });
    },
    T = (e) => {
        let { guild: t, ref: n } = e;
        return (0, r.jsx)("div", {
            className: h.guildNameWrapper,
            ref: n,
            children: (0, r.jsx)("span", {
                className: h.guildName,
                children: t.name,
            }),
        });
    },
    Z = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)("div", {
            className: h.guildNameWrapper,
            children: (0, r.jsx)("span", {
                className: h.guildName,
                children: t.serializedSourceGuild.name,
            }),
        });
    };
(C.Header = N),
    (C.Body = O),
    (C.Icon = y),
    (C.Info = E),
    (C.Data = P),
    (C.Channel = I),
    (C.Button = S),
    (C.GuildSplash = w),
    (C.GuildName = T),
    (C.GuildTemplateName = Z),
    (N.displayName = "InviteButton.Header"),
    (O.displayName = "InviteButton.Body"),
    (y.displayName = "InviteButton.Icon"),
    (E.displayName = "InviteButton.Info"),
    (P.displayName = "InviteButton.Data"),
    (I.displayName = "InviteButton.Channel"),
    (S.displayName = "InviteButton.Button"),
    (w.displayName = "InviteButton.GuildSplash"),
    (T.displayName = "InviteButton.GuildName"),
    (Z.displayName = "InviteButton.GuildTemplateName");
let k = C;
