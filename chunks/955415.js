n.d(t, { Z: () => U }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(43267),
    u = n(933557),
    d = n(471445),
    f = n(600164),
    _ = n(925329),
    p = n(565138),
    h = n(134432),
    m = n(695346),
    g = n(768581),
    E = n(153066),
    b = n(388032),
    y = n(722579);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(l.Heading, {
            variant: "heading-md/semibold",
            className: y.header,
            children: [t, n],
        });
    },
    N = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: y.content,
            children: t
                ? (0, r.jsxs)("div", {
                      className: y.resolvingWrapper,
                      children: [
                          (0, r.jsx)("div", {
                              className: y.resolving,
                              children: (0, r.jsx)("div", { className: y.resolvingBackground }),
                          }),
                          (0, r.jsx)("div", {
                              className: y.resolvingFakeButton,
                              children: (0, r.jsx)("div", { className: y.resolvingBackground }),
                          }),
                      ],
                  })
                : n,
        });
    },
    R = (e) => {
        var t;
        let { application: n, guild: i, channel: a, onClick: s, expired: d = !1, user: f, className: h } = e,
            g = null != (t = (0, u.ZP)(a)) ? t : "",
            b = m.QK.useSetting();
        if (d) return (0, r.jsx)("div", { className: y.guildIconExpired });
        let O = null == i || null != i.icon,
            v = o()((0, E.l)(y, "guildIcon", O ? "Image" : "", null != s ? "Joined" : ""), h);
        return null != n
            ? (0, r.jsx)(_.Z, {
                  game: n,
                  onClick: s,
                  size: y.applicationIcon,
                  className: v,
              })
            : null != i
              ? (0, r.jsx)(p.Z, {
                    onClick: s,
                    active: !0,
                    guild: i,
                    className: v,
                    animate: b,
                })
              : null != a
                ? (0, r.jsx)(l.qEK, {
                      onClick: s,
                      src: (0, c.x)(a),
                      size: l.EFr.SIZE_56,
                      className: v,
                      "aria-label": g,
                  })
                : null != f
                  ? (0, r.jsx)(l.qEK, {
                        onClick: s,
                        src: f.getAvatarURL(null, 56),
                        size: l.EFr.SIZE_56,
                        className: v,
                        "aria-label": g,
                    })
                  : null;
    },
    P = (e) => {
        let { title: t, onClick: n, expired: i, children: a } = e,
            o = (0, r.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                className: (0, E.l)(y, "inviteDestination", i ? "Expired" : null != n ? "Joined" : ""),
                children: t,
            });
        return (0, r.jsxs)(f.Z, {
            className: y.guildInfo,
            direction: f.Z.Direction.VERTICAL,
            justify: f.Z.Justify.CENTER,
            children: [
                null == n
                    ? o
                    : (0, r.jsx)(l.P3F, {
                          onClick: n,
                          children: o,
                      }),
                (0, r.jsx)(l.Text, {
                    tag: "strong",
                    className: y.guildDetail,
                    variant: "text-sm/normal",
                    children: a,
                }),
            ],
        });
    },
    w = (e) => {
        let { membersOnline: t, members: n } = e,
            i = [];
        return (
            null != t &&
                t > 0 &&
                i.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: y.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: y.statusOnline }),
                                (0, r.jsx)("span", {
                                    className: y.count,
                                    children: b.intl.format(b.t["LC+S+v"], { membersOnline: t }),
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
                            className: y.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: y.statusOffline }),
                                (0, r.jsx)("span", {
                                    className: y.count,
                                    children: b.intl.format(b.t.zRl6XV, { count: n }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, r.jsx)("div", {
                className: y.statusCounts,
                children: i,
            })
        );
    },
    D = (e) => {
        let { channel: t, guild: n } = e,
            i = (0, d.KS)(t, n);
        return null == t || null == i
            ? null
            : (0, r.jsxs)("div", {
                  className: y.channel,
                  children: [
                      (0, r.jsx)(i, {
                          className: y.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, r.jsx)("span", {
                          className: y.channelName,
                          children: t.name,
                      }),
                  ],
              });
    },
    L = (e) => {
        var { children: t, onClick: n, className: i, isDisabled: a } = e,
            l = S(e, ["children", "onClick", "className", "isDisabled"]);
        return (0, r.jsx)(
            s.zx,
            T(v({}, l), {
                disabled: a,
                onClick: n,
                size: y.buttonSize,
                className: o()(y.button, i),
                children: t,
            }),
        );
    };
(L.Colors = s.zx.Colors),
    (L.Looks = s.zx.Looks),
    (L.defaultProps = {
        className: null,
        isDisabled: !1,
    });
let x = (e) => {
        let { children: t, className: n, containerRef: i } = e;
        return (0, r.jsx)("div", {
            ref: i,
            className: o()(y.wrapper, n),
            children: t,
        });
    },
    M = (e) => {
        let { guild: t } = e,
            [n, a] = i.useState(!1),
            s = g.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, h.x_)(),
            });
        return null == s
            ? null
            : (0, r.jsx)("div", {
                  className: y.inviteSplash,
                  children: (0, r.jsx)("img", {
                      src: s,
                      alt: "",
                      className: o()(y.inviteSplashImage, { [y.inviteSplashImageLoaded]: n }),
                      onLoad: () => a(!0),
                  }),
              });
    },
    j = (e) => {
        let { guild: t, ref: n } = e;
        return (0, r.jsx)("div", {
            className: y.guildNameWrapper,
            ref: n,
            children: (0, r.jsx)("span", {
                className: y.guildName,
                children: t.name,
            }),
        });
    },
    k = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)("div", {
            className: y.guildNameWrapper,
            children: (0, r.jsx)("span", {
                className: y.guildName,
                children: t.serializedSourceGuild.name,
            }),
        });
    };
(x.Header = C),
    (x.Body = N),
    (x.Icon = R),
    (x.Info = P),
    (x.Data = w),
    (x.Channel = D),
    (x.Button = L),
    (x.GuildSplash = M),
    (x.GuildName = j),
    (x.GuildTemplateName = k),
    (C.displayName = "InviteButton.Header"),
    (N.displayName = "InviteButton.Body"),
    (R.displayName = "InviteButton.Icon"),
    (P.displayName = "InviteButton.Info"),
    (w.displayName = "InviteButton.Data"),
    (D.displayName = "InviteButton.Channel"),
    (L.displayName = "InviteButton.Button"),
    (M.displayName = "InviteButton.GuildSplash"),
    (j.displayName = "InviteButton.GuildName"),
    (k.displayName = "InviteButton.GuildTemplateName");
let U = x;
