n.d(t, {
    $h: () => T,
    En: () => L,
    cO: () => R,
    dJ: () => D,
    jG: () => w,
    yI: () => A,
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
    p = n(430824),
    h = n(326660),
    f = n(156732),
    g = n(639777),
    m = n(441536),
    b = n(795338),
    _ = n(279604),
    y = n(535396),
    O = n(981631),
    v = n(176505),
    j = n(921944),
    C = n(613275),
    x = n(130231),
    E = n(388032),
    S = n(428197),
    I = n(611087),
    P = n(928381),
    N = n(283902),
    Z = n(225375);
function w(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: o } = e;
    return (0, r.jsx)(M, {
        asset: (0, r.jsx)(b.g, { className: l()(S.image, S.levelImage) }),
        title: E.intl.formatToPlainString(x.default["Zg/m9K"], { perkName: n.title }),
        body: E.intl.formatToPlainString(x.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: E.intl.string(E.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: o,
    });
}
function T(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        l = (0, g.Z)(t);
    return (0, r.jsx)(c.Mb, {
        targetElementRef: i,
        assetUrl: P.Z,
        title: E.intl.string(x.default.QpQBPQ),
        body: E.intl.string(x.default["6hn0xF"]),
        action: {
            text: E.intl.string(E.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: l ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: l ? "top" : "center",
        caretConfig: l ? { align: "start" } : { align: "center" },
        onRequestClose: () => (null == n ? void 0 : n(j.L.USER_DISMISS)),
    });
}
function A(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: o } = e,
        s = (0, a.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c } = (0, _.ZP)(t, n[0]),
        d = (0, f.Z)(n[0], !0);
    if (0 === n.length) return;
    let h =
            n.length >= 3
                ? E.intl.formatToPlainString(x.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? E.intl.formatToPlainString(x.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : E.intl.formatToPlainString(x.default.ZF8NT6, { perk: n[0].title }),
        g = 1 === n.length;
    return (0, r.jsx)(M, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(b.g, { className: l()(S.image, S.levelImage) })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: d,
                      className: S.image,
                  }),
        title: E.intl.formatToPlainString(x.default.LmpChE, { guildName: s }),
        body: h,
        actions: [
            {
                text: g ? E.intl.string(x.default.gSxlHf) : E.intl.string(E.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    g ? c(e) : (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
            },
        ],
        targetElementRef: i,
        markAsDismissed: o,
    });
}
function R(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: l } = e,
        a = n.find((e) => e.skuId === o.A$);
    if (null != a)
        return (0, r.jsx)(M, {
            targetElementRef: i,
            title: E.intl.string(x.default.Ygpx4Q),
            body: E.intl.string(x.default.mmNkUA),
            size: "video",
            asset: Z.Z,
            actions: [
                {
                    text: E.intl.string(E.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: l,
        });
    let s = n.find((e) => y.NL.has(e.skuId));
    return null != s
        ? (0, r.jsx)(M, {
              targetElementRef: i,
              title: E.intl.string(x.default["kA2c+n"]),
              body: E.intl.string(x.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: N.Z,
                  className: S.image,
              }),
              actions: [
                  {
                      text: E.intl.string(E.t.RzWDqY),
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
function D(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: o } = e,
        a = (0, _.Td)(t, void 0);
    return (0, r.jsx)(M, {
        targetElementRef: o,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: I.Z,
            className: l()(S.image, S.gameServerHostingImage),
        }),
        title: E.intl.string(n === h.J.GAME_SERVER_HOSTING_AVAILABLE ? C.default.wXLChx : C.default["8z8RpY"]),
        body:
            n === h.J.GAME_SERVER_HOSTING_AVAILABLE
                ? E.intl.string(C.default.lZ6m7Q)
                : E.intl.format(C.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: E.intl.string(E.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function L(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e;
    return (0, r.jsx)(M, {
        size: "video",
        targetElementRef: i,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: I.Z,
            className: l()(S.image, S.gameServerHostingImage),
        }),
        title: E.intl.string(C.default["eX64+z"]),
        body: E.intl.string(C.default.NpgfEB),
        actions: [
            {
                text: E.intl.string(E.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, d.uL)(O.Z5c.CHANNEL(t, v.oC.GAME_SERVERS)),
            },
        ],
        markAsDismissed: n,
    });
}
function M(e) {
    var t,
        n,
        {
            caretConfig: i = { align: "start" },
            position: l = "right",
            align: o = "top",
            alignmentStrategy: a = "edge",
            markAsDismissed: u,
            size: d = "lg",
            asset: p,
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
                    props: { asset: p },
                },
                size: d,
                shouldShow: !0,
                position: l,
                caretConfig: i,
                alignmentStrategy: a,
                align: o,
                onRequestClose: () => (null == u ? void 0 : u(j.L.USER_DISMISS)),
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
