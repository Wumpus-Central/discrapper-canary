n.d(t, {
    $h: () => w,
    cO: () => A,
    dJ: () => R,
    jG: () => Z,
    yI: () => T,
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
    p = n(970731),
    h = n(430824),
    f = n(326660),
    g = n(639777),
    m = n(441536),
    b = n(795338),
    _ = n(279604),
    y = n(535396),
    O = n(981631),
    v = n(921944),
    j = n(948208),
    x = n(989308),
    C = n(388032),
    E = n(428197),
    S = n(611087),
    I = n(928381),
    P = n(283902),
    N = n(225375);
function Z(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(D, {
        asset: (0, r.jsx)(b.g, { className: E.image }),
        header: C.intl.formatToPlainString(x.default["Zg/m9P"], { perkName: n.title }),
        content: C.intl.formatToPlainString(x.default["1EGXSE"], { perkName: n.title }),
        buttonCTA: C.intl.string(C.t.RzWDqa),
        onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i,
    });
}
function w(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, g.Z)(t);
    return (0, r.jsx)(D, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: I.Z,
            className: l()(E.image, E.newPerksImage),
        }),
        header: C.intl.string(x.default.QpQBPT),
        content: i ? C.intl.string(x.default["6hn0xM"]) : C.intl.string(x.default.RDuvXl),
        buttonCTA: C.intl.string(C.t.RzWDqa),
        onClick: () =>
            i
                ? (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
                : (0, d.f)({
                      guildId: t,
                      location: { section: O.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK },
                  }),
        markAsDismissed: n,
        caretPosition: i ? p.DF.LEFT_TOP : p.DF.TOP_CENTER,
    });
}
function T(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, _.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a =
            n.length >= 3
                ? C.intl.formatToPlainString(x.default["6Sv+3N"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? C.intl.formatToPlainString(x.default.wcQOqK, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : C.intl.formatToPlainString(x.default.ZF8NT0, { perk: n[0].title }),
        c = 1 === n.length;
    return (0, r.jsx)(D, {
        asset:
            1 === n.length
                ? (0, r.jsx)(b.m, {
                      className: E.image,
                      powerup: n[0],
                  })
                : (0, r.jsx)(b.g, { className: E.image }),
        header: C.intl.formatToPlainString(x.default.LmpChI, { guildName: l }),
        content: a,
        buttonCTA: c ? C.intl.string(x.default.gSxlHR) : C.intl.string(C.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i,
    });
}
function A(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = n.find((e) => e.skuId === o.A$);
    if (null != l)
        return (0, r.jsx)(D, {
            header: C.intl.string(x.default.Ygpx4e),
            content: C.intl.string(x.default.mmNkUF),
            asset: (0, r.jsx)("img", {
                alt: "",
                src: N.Z,
                className: E.image,
            }),
            onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, l.skuId),
            markAsDismissed: i,
            buttonCTA: C.intl.string(C.t.RzWDqa),
        });
    let a = n.find((e) => y.NL.has(e.skuId));
    return null != a
        ? (0, r.jsx)(D, {
              header: C.intl.string(x.default["kA2c+v"]),
              content: C.intl.string(x.default.TUilLi),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: P.Z,
                  className: E.image,
              }),
              onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId),
              markAsDismissed: i,
              buttonCTA: C.intl.string(C.t.RzWDqa),
          })
        : null;
}
function R(e) {
    let { guildId: t, type: n, markAsDismissed: i } = e,
        o = (0, _.Td)(t, void 0);
    return (0, r.jsx)(D, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: S.Z,
            className: l()(E.image, E.newPerksImage),
        }),
        header: C.intl.string(n === f.J.GAME_SERVER_HOSTING_AVAILABLE ? j.default.wXLCh4 : j.default["8z8Rpa"]),
        content:
            n === f.J.GAME_SERVER_HOSTING_AVAILABLE
                ? C.intl.string(j.default.lZ6m7e)
                : C.intl.format(j.default["IQ1E+f"], { boostCount: o }),
        buttonCTA: C.intl.string(C.t.RzWDqa),
        onClick: () => (0, m.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
        markAsDismissed: i,
    });
}
function D(e) {
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
    let d = null != o ? o : p.DF.LEFT_TOP,
        h = d === p.DF.TOP_CENTER || d === p.DF.LEFT_TOP ? E[d] : "";
    return (0, r.jsx)(
        p.ZP,
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
                    className: E.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: E.close,
                            onClick: () => (null == s ? void 0 : s(v.L.USER_DISMISS)),
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
                className: l()(E.container, h),
                headerClassName: E.header,
                contentClassName: E.header,
                caretPosition: d,
                markAsDismissed: s,
            },
            u,
        ),
    );
}
