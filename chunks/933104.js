n.d(t, {
    $h: () => A,
    En: () => L,
    cO: () => D,
    dJ: () => M,
    jG: () => T,
    yI: () => R,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(494497),
    a = n(442837),
    s = n(198168),
    c = n(907862),
    u = n(100527),
    d = n(703656),
    f = n(430824),
    h = n(326660),
    p = n(473952),
    g = n(156732),
    m = n(448222),
    b = n(639777),
    _ = n(441536),
    y = n(795338),
    O = n(535396),
    v = n(981631),
    j = n(176505),
    C = n(921944),
    x = n(400580),
    E = n(5238),
    S = n(388032),
    I = n(428197),
    P = n(611087),
    N = n(928381),
    Z = n(283902),
    w = n(225375);
function T(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: o } = e;
    return (0, r.jsx)(k, {
        asset: (0, r.jsx)(y.g, { className: l()(I.image, I.levelImage) }),
        title: S.intl.formatToPlainString(E.default["Zg/m9K"], { perkName: n.title }),
        body: S.intl.formatToPlainString(E.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: S.intl.string(S.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, _.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: o,
    });
}
function A(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        l = (0, b.Z)(t);
    return (0, r.jsx)(c.Mb, {
        targetElementRef: i,
        assetUrl: N.Z,
        title: S.intl.string(E.default.QpQBPQ),
        body: S.intl.string(E.default["6hn0xF"]),
        action: {
            text: S.intl.string(S.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, _.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: l ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: l ? "top" : "center",
        caretConfig: l ? { align: "start" } : { align: "center" },
        onRequestClose: () => (null == n ? void 0 : n(C.L.USER_DISMISS)),
    });
}
function R(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: o } = e,
        s = (0, a.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c } = (0, m.Z)(t, n[0]),
        d = (0, g.Z)(n[0], !0);
    if (0 === n.length) return;
    let h =
            n.length >= 3
                ? S.intl.formatToPlainString(E.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? S.intl.formatToPlainString(E.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : S.intl.formatToPlainString(E.default.ZF8NT6, { perk: n[0].title }),
        p = 1 === n.length;
    return (0, r.jsx)(k, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(y.g, { className: l()(I.image, I.levelImage) })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: d,
                      className: I.image,
                  }),
        title: S.intl.formatToPlainString(E.default.LmpChE, { guildName: s }),
        body: h,
        actions: [
            {
                text: p ? S.intl.string(E.default.gSxlHf) : S.intl.string(S.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), p ? c() : (0, _.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
            },
        ],
        targetElementRef: i,
        markAsDismissed: o,
    });
}
function D(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: l } = e,
        a = n.find((e) => e.skuId === o.A$);
    if (null != a)
        return (0, r.jsx)(k, {
            targetElementRef: i,
            title: S.intl.string(E.default.Ygpx4Q),
            body: S.intl.string(E.default.mmNkUA),
            size: "video",
            asset: w.Z,
            actions: [
                {
                    text: S.intl.string(S.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, _.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let s = n.find((e) => O.NL.has(e.skuId));
    return null != s
        ? (0, r.jsx)(k, {
              targetElementRef: i,
              title: S.intl.string(E.default["kA2c+n"]),
              body: S.intl.string(E.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: Z.Z,
                  className: I.image,
              }),
              actions: [
                  {
                      text: S.intl.string(S.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, _.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, s.skuId);
                      },
                  },
              ],
              markAsDismissed: l,
          })
        : null;
}
function M(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: o } = e,
        a = (0, p.Z)(t, void 0);
    return (0, r.jsx)(k, {
        targetElementRef: o,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.Z,
            className: l()(I.image, I.gameServerHostingImage),
        }),
        title: S.intl.string(n === h.J.GAME_SERVER_HOSTING_AVAILABLE ? x.default.wXLChx : x.default["8z8RpY"]),
        body:
            n === h.J.GAME_SERVER_HOSTING_AVAILABLE
                ? S.intl.string(x.default.lZ6m7Q)
                : S.intl.format(x.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: S.intl.string(S.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, _.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function L(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(k, {
        size: "video",
        targetElementRef: i,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.Z,
            className: l()(I.image, I.gameServerHostingImage),
        }),
        title: S.intl.string(x.default["eX64+z"]),
        body: S.intl.string(x.default.NpgfEB),
        actions: [
            {
                text: S.intl.string(S.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(C.L.TAKE_ACTION), (0, d.uL)(v.Z5c.CHANNEL(t, j.oC.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function k(e) {
    var t,
        n,
        {
            caretConfig: i = { align: "start" },
            position: l = "right",
            align: o = "top",
            alignmentStrategy: a = "edge",
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
                alignmentStrategy: a,
                align: o,
                onRequestClose: () => (null == u ? void 0 : u(C.L.USER_DISMISS)),
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
