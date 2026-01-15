n.d(t, {
    $h: () => D,
    En: () => U,
    cO: () => k,
    dJ: () => L,
    jG: () => R,
    r0: () => G,
    yI: () => M,
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
    x = n(535396),
    C = n(981631),
    E = n(176505),
    S = n(921944),
    _ = n(914820),
    I = n(556970),
    P = n(388032),
    Z = n(787349),
    N = n(796571),
    T = n(53374),
    A = n(822344),
    w = n(813206);
function R(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: a } = e;
    return (0, r.jsx)(B, {
        asset: (0, r.jsx)(v.g, { className: l()(Z.image, Z.levelImage) }),
        title: P.intl.formatToPlainString(I.default["Zg/m9K"], { perkName: n.title }),
        body: P.intl.formatToPlainString(I.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: a,
    });
}
function D(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        l = (0, b.Z)(t);
    return (0, r.jsx)(c.Mb, {
        targetElementRef: i,
        assetUrl: T.Z,
        title: P.intl.string(I.default.QpQBPQ),
        body: P.intl.string(I.default["6hn0xF"]),
        action: {
            text: P.intl.string(P.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: l ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: l ? "top" : "center",
        caretConfig: l ? { align: "start" } : { align: "center" },
        onRequestClose: () => (null == n ? void 0 : n(S.L.USER_DISMISS)),
    });
}
function M(e) {
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
                ? P.intl.formatToPlainString(I.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? P.intl.formatToPlainString(I.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : P.intl.formatToPlainString(I.default.ZF8NT6, { perk: n[0].title }),
        b = 1 === n.length;
    return (0, r.jsx)(B, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(v.g, { className: l()(Z.image, Z.levelImage) })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: h,
                      className: Z.image,
                  }),
        title: P.intl.formatToPlainString(I.default.LmpChE, { guildName: s }),
        body: m,
        actions: [
            {
                text: b ? P.intl.string(I.default.gSxlHf) : P.intl.string(P.t.RzWDqY),
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
function k(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: l } = e,
        o = n.find((e) => e.skuId === a.A$);
    if (null != o)
        return (0, r.jsx)(B, {
            targetElementRef: i,
            title: P.intl.string(I.default.Ygpx4Q),
            body: P.intl.string(I.default.mmNkUA),
            size: "video",
            asset: w.Z,
            actions: [
                {
                    text: P.intl.string(P.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let s = n.find((e) => x.NL.has(e.skuId));
    return null != s
        ? (0, r.jsx)(B, {
              targetElementRef: i,
              title: P.intl.string(I.default["kA2c+n"]),
              body: P.intl.string(I.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: A.Z,
                  className: Z.image,
              }),
              actions: [
                  {
                      text: P.intl.string(P.t.RzWDqY),
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
function L(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: a } = e,
        { available: o } = (0, m.Z)(t);
    return (0, r.jsx)(B, {
        targetElementRef: a,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: N.Z,
            className: l()(Z.image, Z.gameServerHostingImage),
        }),
        title: P.intl.string(n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE ? _.default.wXLChx : _.default["8z8RpY"]),
        body:
            n === h.Jk.GAME_SERVER_HOSTING_AVAILABLE
                ? P.intl.string(_.default.lZ6m7Q)
                : P.intl.format(_.default["IQ1E+d"], { boostCount: o }),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, y.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function U(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(B, {
        targetElementRef: i,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: N.Z,
            className: l()(Z.image, Z.gameServerHostingImage),
        }),
        title: P.intl.string(_.default["eX64+z"]),
        body: P.intl.string(_.default.NpgfEB),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(S.L.TAKE_ACTION), (0, p.uL)(C.Z5c.CHANNEL(t, E.oC.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function G(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(B, {
        targetElementRef: i,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, r.jsx)("img", {
            alt: "",
            src: N.Z,
            className: l()(Z.image, Z.gameServerHostingImage),
        }),
        title: P.intl.string(_.default.t3LNW1),
        body: P.intl.string(_.default["9qPJJd"]),
        actions: [
            {
                text: P.intl.string(_.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(S.L.TAKE_ACTION),
                        (0, d.f)({
                            guildId: t,
                            location: {
                                section: C.jXE.GUILD_HEADER,
                                object: C.qAy.BUTTON_CTA,
                            },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function B(e) {
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
                onRequestClose: () => (null == u ? void 0 : u(S.L.USER_DISMISS)),
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
