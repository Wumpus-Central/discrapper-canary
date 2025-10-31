n.d(t, {
    $h: () => A,
    En: () => M,
    cO: () => D,
    dJ: () => L,
    jG: () => w,
    yI: () => R,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(494497),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(623624),
    p = n(703656),
    f = n(970731),
    h = n(430824),
    g = n(326660),
    m = n(639777),
    b = n(441536),
    _ = n(795338),
    O = n(279604),
    y = n(535396),
    v = n(981631),
    j = n(176505),
    C = n(921944),
    E = n(269794),
    x = n(459196),
    S = n(388032),
    I = n(428197),
    P = n(611087),
    N = n(928381),
    Z = n(283902),
    T = n(225375);
function w(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(k, {
        asset: (0, r.jsx)(_.g, { className: I.image }),
        header: S.intl.formatToPlainString(x.default["Zg/m9K"], { perkName: n.title }),
        content: S.intl.formatToPlainString(x.default["1EGXSK"], { perkName: n.title }),
        buttonCTA: S.intl.string(S.t.RzWDqY),
        onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i,
    });
}
function A(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, m.Z)(t);
    return (0, r.jsx)(k, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: N.Z,
            className: l()(I.image, I.newPerksImage),
        }),
        header: S.intl.string(x.default.QpQBPQ),
        content: i ? S.intl.string(x.default["6hn0xF"]) : S.intl.string(x.default.RDuvXp),
        buttonCTA: S.intl.string(S.t.RzWDqY),
        onClick: () =>
            i
                ? (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
                : (0, d.f)({
                      guildId: t,
                      location: { section: v.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK },
                  }),
        markAsDismissed: n,
        caretPosition: i ? f.DF.LEFT_TOP : f.DF.TOP_CENTER,
    });
}
function R(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, O.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a =
            n.length >= 3
                ? S.intl.formatToPlainString(x.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? S.intl.formatToPlainString(x.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : S.intl.formatToPlainString(x.default.ZF8NT6, { perk: n[0].title }),
        c = 1 === n.length;
    return (0, r.jsx)(k, {
        asset:
            1 === n.length
                ? (0, r.jsx)(_.m, {
                      className: I.image,
                      powerup: n[0],
                  })
                : (0, r.jsx)(_.g, { className: I.image }),
        header: S.intl.formatToPlainString(x.default.LmpChE, { guildName: l }),
        content: a,
        buttonCTA: c ? S.intl.string(x.default.gSxlHf) : S.intl.string(S.t.RzWDqY),
        onClick: (e) => (c ? o(e) : (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i,
    });
}
function D(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = n.find((e) => e.skuId === o.A$);
    if (null != l)
        return (0, r.jsx)(k, {
            header: S.intl.string(x.default.Ygpx4Q),
            content: S.intl.string(x.default.mmNkUA),
            asset: (0, r.jsx)("img", {
                alt: "",
                src: T.Z,
                className: I.image,
            }),
            onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, l.skuId),
            markAsDismissed: i,
            buttonCTA: S.intl.string(S.t.RzWDqY),
        });
    let a = n.find((e) => y.NL.has(e.skuId));
    return null != a
        ? (0, r.jsx)(k, {
              header: S.intl.string(x.default["kA2c+n"]),
              content: S.intl.string(x.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: Z.Z,
                  className: I.image,
              }),
              onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId),
              markAsDismissed: i,
              buttonCTA: S.intl.string(S.t.RzWDqY),
          })
        : null;
}
function L(e) {
    let { guildId: t, type: n, markAsDismissed: i } = e,
        o = (0, O.Td)(t, void 0);
    return (0, r.jsx)(k, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.Z,
            className: l()(I.image, I.newPerksImage),
        }),
        header: S.intl.string(n === g.J.GAME_SERVER_HOSTING_AVAILABLE ? E.default.wXLChx : E.default["8z8RpY"]),
        content:
            n === g.J.GAME_SERVER_HOSTING_AVAILABLE
                ? S.intl.string(E.default.lZ6m7Q)
                : S.intl.format(E.default["IQ1E+d"], { boostCount: o }),
        buttonCTA: S.intl.string(S.t.RzWDqY),
        onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
        markAsDismissed: i,
    });
}
function M(e) {
    let { guildId: t, markAsDismissed: n } = e;
    return (0, r.jsx)(k, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.Z,
            className: l()(I.image, I.newPerksImage),
        }),
        header: S.intl.string(E.default["eX64+z"]),
        content: S.intl.string(E.default.NpgfEB),
        buttonCTA: S.intl.string(S.t.RzWDqY),
        onClick: () => (0, p.uL)(v.Z5c.CHANNEL(t, j.oC.GAME_SERVERS)),
        markAsDismissed: n,
    });
}
function k(e) {
    var { asset: t, header: n, content: i, caretPosition: o, markAsDismissed: s } = e,
        u = (function (e, t) {
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
        })(e, ["asset", "header", "content", "caretPosition", "markAsDismissed"]);
    let d = null != o ? o : f.DF.LEFT_TOP,
        p = d === f.DF.TOP_CENTER || d === f.DF.LEFT_TOP ? I[d] : "";
    return (0, r.jsx)(
        f.ZP,
        (function (e) {
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
        })(
            {
                "data-migration-pending": !0,
                asset: (0, r.jsxs)("div", {
                    className: I.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: I.close,
                            onClick: () => (null == s ? void 0 : s(C.L.USER_DISMISS)),
                        }),
                    ],
                }),
                header: (0, r.jsx)(a.xvT, {
                    variant: "text-md/semibold",
                    children: n,
                }),
                content: (0, r.jsx)(a.xvT, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: i,
                }),
                className: l()(I.container, p),
                headerClassName: I.header,
                contentClassName: I.header,
                caretPosition: d,
                markAsDismissed: s,
            },
            u,
        ),
    );
}
