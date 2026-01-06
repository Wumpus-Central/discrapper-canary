n.d(t, {
    $h: () => R,
    En: () => k,
    cO: () => M,
    dJ: () => L,
    jG: () => A,
    yI: () => D,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(494497),
    o = n(442837),
    s = n(198168),
    c = n(907862),
    u = n(100527),
    d = n(703656),
    f = n(430824),
    h = n(326660),
    p = n(156732),
    g = n(317169),
    b = n(639777),
    m = n(441536),
    y = n(795338),
    O = n(994234),
    v = n(192958),
    j = n(535396),
    C = n(981631),
    x = n(176505),
    E = n(921944),
    S = n(914820),
    _ = n(556970),
    I = n(388032),
    P = n(787349),
    N = n(796571),
    Z = n(53374),
    w = n(822344),
    T = n(813206);
function A(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: a } = e;
    return (0, r.jsx)(G, {
        asset: (0, r.jsx)(y.g, { className: l()(P.image, P.levelImage) }),
        title: I.intl.formatToPlainString(_.default["Zg/m9K"], { perkName: n.title }),
        body: I.intl.formatToPlainString(_.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: a,
    });
}
function R(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        l = (0, b.Z)(t);
    return (0, r.jsx)(c.Mb, {
        targetElementRef: i,
        assetUrl: Z.Z,
        title: I.intl.string(_.default.QpQBPQ),
        body: I.intl.string(_.default["6hn0xF"]),
        action: {
            text: I.intl.string(I.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: l ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: l ? "top" : "center",
        caretConfig: l ? { align: "start" } : { align: "center" },
        onRequestClose: () => (null == n ? void 0 : n(E.L.USER_DISMISS)),
    });
}
function D(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: a } = e,
        s = (0, o.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c, isLoading: d, error: h } = (0, O.Z)(t, n[0]),
        g = (0, p.Z)(n[0], !0);
    if (((0, v.Z)(h), 0 === n.length)) return;
    let b =
            n.length >= 3
                ? I.intl.formatToPlainString(_.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? I.intl.formatToPlainString(_.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : I.intl.formatToPlainString(_.default.ZF8NT6, { perk: n[0].title }),
        j = 1 === n.length;
    return (0, r.jsx)(G, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(y.g, { className: l()(P.image, P.levelImage) })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: g,
                      className: P.image,
                  }),
        title: I.intl.formatToPlainString(_.default.LmpChE, { guildName: s }),
        body: b,
        actions: [
            {
                text: j ? I.intl.string(_.default.gSxlHf) : I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), j ? c() : (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: i,
        markAsDismissed: a,
    });
}
function M(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: l } = e,
        o = n.find((e) => e.skuId === a.A$);
    if (null != o)
        return (0, r.jsx)(G, {
            targetElementRef: i,
            title: I.intl.string(_.default.Ygpx4Q),
            body: I.intl.string(_.default.mmNkUA),
            size: "video",
            asset: T.Z,
            actions: [
                {
                    text: I.intl.string(I.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let s = n.find((e) => j.NL.has(e.skuId));
    return null != s
        ? (0, r.jsx)(G, {
              targetElementRef: i,
              title: I.intl.string(_.default["kA2c+n"]),
              body: I.intl.string(_.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: w.Z,
                  className: P.image,
              }),
              actions: [
                  {
                      text: I.intl.string(I.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, s.skuId);
                      },
                  },
              ],
              markAsDismissed: l,
          })
        : null;
}
function L(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: a } = e,
        { available: o } = (0, g.Z)(t);
    return (0, r.jsx)(G, {
        targetElementRef: a,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: N.Z,
            className: l()(P.image, P.gameServerHostingImage),
        }),
        title: I.intl.string(n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? S.default.wXLChx : S.default["8z8RpY"]),
        body:
            n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE
                ? I.intl.string(S.default.lZ6m7Q)
                : I.intl.format(S.default["IQ1E+d"], { boostCount: o }),
        actions: [
            {
                text: I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function k(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(G, {
        size: "video",
        targetElementRef: i,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: N.Z,
            className: l()(P.image, P.gameServerHostingImage),
        }),
        title: I.intl.string(S.default["eX64+z"]),
        body: I.intl.string(S.default.NpgfEB),
        actions: [
            {
                text: I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(E.L.TAKE_ACTION), (0, d.uL)(C.Z5c.CHANNEL(t, x.oC.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function G(e) {
    var t,
        n,
        {
            caretConfig: i = { align: "start" },
            position: l = "right",
            align: a = "top",
            alignmentStrategy: o = "edge",
            markAsDismissed: u,
            size: d = "lg",
            asset: f,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["caretConfig", "position", "align", "alignmentStrategy", "markAsDismissed", "size", "asset"]);
    return (0, r.jsx)(
        c.J2,
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
        })({}, h)),
        (n = n =
            {
                graphic: {
                    type: "dynamic",
                    component: s.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
                    props: { asset: f },
                },
                size: d,
                shouldShow: !0,
                position: l,
                caretConfig: i,
                alignmentStrategy: o,
                align: a,
                onRequestClose: () => (null == u ? void 0 : u(E.L.USER_DISMISS)),
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
}
