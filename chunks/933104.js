n.d(t, {
    $h: () => k,
    En: () => B,
    cO: () => U,
    dJ: () => G,
    f7: () => H,
    jG: () => M,
    r0: () => F,
    yI: () => L,
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
    d = n(623624),
    p = n(703656),
    f = n(430824),
    h = n(326660),
    g = n(156732),
    m = n(317169),
    b = n(639777),
    y = n(441536),
    v = n(795338),
    O = n(994234),
    j = n(192958),
    x = n(619733),
    C = n(535396),
    E = n(981631),
    S = n(176505),
    _ = n(921944),
    I = n(914820),
    P = n(556970),
    Z = n(388032),
    N = n(787349),
    T = n(796571),
    A = n(736817),
    w = n(53374),
    R = n(822344),
    D = n(813206);
function M(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: a } = e;
    return (0, r.jsx)(V, {
        asset: (0, r.jsx)(v.g, { className: l()(N.image, N.levelImage) }),
        title: Z.intl.formatToPlainString(P.default["Zg/m9K"], { perkName: n.title }),
        body: Z.intl.formatToPlainString(P.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: Z.intl.string(Z.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: a,
    });
}
function k(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        l = (0, b.Z)(t);
    return (0, r.jsx)(c.Mb, {
        targetElementRef: i,
        assetUrl: w.Z,
        title: Z.intl.string(P.default.QpQBPQ),
        body: Z.intl.string(P.default["6hn0xF"]),
        action: {
            text: Z.intl.string(Z.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: l ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: l ? "top" : "center",
        caretConfig: l ? { align: "start" } : { align: "center" },
        onRequestClose: () => (null == n ? void 0 : n(_.L.USER_DISMISS)),
    });
}
function L(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: a } = e,
        s = (0, o.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c, isLoading: d, error: p } = (0, O.Z)(t, n[0]),
        h = (0, g.Z)(n[0], !0);
    if (((0, j.Z)(p), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? Z.intl.formatToPlainString(P.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? Z.intl.formatToPlainString(P.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : Z.intl.formatToPlainString(P.default.ZF8NT6, { perk: n[0].title }),
        b = 1 === n.length;
    return (0, r.jsx)(V, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(v.g, { className: l()(N.image, N.levelImage) })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: h,
                      className: N.image,
                  }),
        title: Z.intl.formatToPlainString(P.default.LmpChE, { guildName: s }),
        body: m,
        actions: [
            {
                text: b ? Z.intl.string(P.default.gSxlHf) : Z.intl.string(Z.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), b ? c() : (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: i,
        markAsDismissed: a,
    });
}
function U(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: l } = e,
        o = n.find((e) => e.skuId === a.A$);
    if (null != o)
        return (0, r.jsx)(V, {
            targetElementRef: i,
            title: Z.intl.string(P.default.Ygpx4Q),
            body: Z.intl.string(P.default.mmNkUA),
            size: "video",
            asset: D.Z,
            actions: [
                {
                    text: Z.intl.string(Z.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let s = n.find((e) => C.NL.has(e.skuId));
    return null != s
        ? (0, r.jsx)(V, {
              targetElementRef: i,
              title: Z.intl.string(P.default["kA2c+n"]),
              body: Z.intl.string(P.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: R.Z,
                  className: N.image,
              }),
              actions: [
                  {
                      text: Z.intl.string(Z.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, s.skuId);
                      },
                  },
              ],
              markAsDismissed: l,
          })
        : null;
}
function G(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: a } = e,
        { available: o } = (0, m.Z)(t);
    return (0, r.jsx)(V, {
        targetElementRef: a,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: T.Z,
            className: l()(N.image, N.gameServerHostingImage),
        }),
        title: Z.intl.string(n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? I.default.wXLChx : I.default["8z8RpY"]),
        body:
            n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE
                ? Z.intl.string(I.default.lZ6m7Q)
                : Z.intl.format(I.default["IQ1E+d"], { boostCount: o }),
        actions: [
            {
                text: Z.intl.string(Z.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function B(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(V, {
        targetElementRef: i,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: T.Z,
            className: l()(N.image, N.gameServerHostingImage),
        }),
        title: Z.intl.string(I.default["eX64+z"]),
        body: Z.intl.string(I.default.NpgfEB),
        actions: [
            {
                text: Z.intl.string(Z.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(_.L.TAKE_ACTION), (0, p.uL)(E.Z5c.CHANNEL(t, S.oC.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function F(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(V, {
        targetElementRef: i,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, r.jsx)("img", {
            alt: "",
            src: T.Z,
            className: l()(N.image, N.gameServerHostingImage),
        }),
        title: Z.intl.string(I.default.t3LNW1),
        body: Z.intl.string(I.default["9qPJJd"]),
        actions: [
            {
                text: Z.intl.string(I.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(_.L.TAKE_ACTION),
                        (0, d.f)({
                            guildId: t,
                            location: {
                                section: E.jXE.GUILD_HEADER,
                                object: E.qAy.BUTTON_CTA,
                            },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function H(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        a = (0, b.Z)(t);
    return (0, r.jsx)(V, {
        targetElementRef: i,
        position: a ? "right" : "bottom",
        align: a ? "top" : "center",
        alignmentStrategy: "edge",
        caretConfig: a ? { align: "start" } : { align: "center" },
        asset: (0, r.jsx)("img", {
            alt: "",
            src: A.Z,
            className: l()(N.image, N.gameServerHostingImage),
        }),
        title: Z.intl.string(I.default["wy+j5s"]),
        body: Z.intl.string(I.default.uHvxkb),
        actions: [
            {
                text: Z.intl.string(I.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(_.L.TAKE_ACTION),
                        a
                            ? (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, x.fj)
                            : (0, d.f)({
                                  guildId: t,
                                  location: {
                                      section: E.jXE.GUILD_HEADER,
                                      object: E.qAy.BUTTON_CTA,
                                  },
                                  scrollToPowerupCards: !0,
                              });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function V(e) {
    var t,
        n,
        {
            caretConfig: i = { align: "start" },
            position: l = "right",
            align: a = "top",
            alignmentStrategy: o = "edge",
            markAsDismissed: u,
            size: d = "lg",
            asset: p,
        } = e,
        f = (function (e, t) {
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
        })({}, f)),
        (n = n =
            {
                graphic: {
                    type: "dynamic",
                    component: s.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
                    props: { asset: p },
                },
                size: d,
                shouldShow: !0,
                position: l,
                caretConfig: i,
                alignmentStrategy: o,
                align: a,
                onRequestClose: () => (null == u ? void 0 : u(_.L.USER_DISMISS)),
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
