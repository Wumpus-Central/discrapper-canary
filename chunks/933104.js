n.d(t, {
    $h: () => Z,
    cO: () => T,
    dJ: () => A,
    jG: () => N,
    yI: () => w,
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
    f = n(639777),
    g = n(441536),
    m = n(795338),
    b = n(279604),
    _ = n(535396),
    y = n(981631),
    O = n(921944),
    v = n(948208),
    j = n(989308),
    x = n(388032),
    C = n(428197),
    E = n(611087),
    S = n(928381),
    I = n(283902),
    P = n(225375);
function N(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(R, {
        asset: (0, r.jsx)(m.g, { className: C.image }),
        header: x.intl.formatToPlainString(j.default["Zg/m9P"], { perkName: n.title }),
        content: x.intl.formatToPlainString(j.default["1EGXSE"], { perkName: n.title }),
        buttonCTA: x.intl.string(x.t.RzWDqa),
        onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i,
    });
}
function Z(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, f.Z)(t);
    return (0, r.jsx)(R, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: S.Z,
            className: l()(C.image, C.newPerksImage),
        }),
        header: x.intl.string(j.default.QpQBPT),
        content: i ? x.intl.string(j.default["6hn0xM"]) : x.intl.string(j.default.RDuvXl),
        buttonCTA: x.intl.string(x.t.RzWDqa),
        onClick: () =>
            i
                ? (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
                : (0, d.f)({
                      guildId: t,
                      location: { section: y.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK },
                  }),
        markAsDismissed: n,
        caretPosition: i ? p.DF.LEFT_TOP : p.DF.TOP_CENTER,
    });
}
function w(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, b.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a =
            n.length >= 3
                ? x.intl.formatToPlainString(j.default["6Sv+3N"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? x.intl.formatToPlainString(j.default.wcQOqK, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : x.intl.formatToPlainString(j.default.ZF8NT0, { perk: n[0].title }),
        c = 1 === n.length;
    return (0, r.jsx)(R, {
        asset:
            1 === n.length
                ? (0, r.jsx)(m.m, {
                      className: C.image,
                      powerup: n[0],
                  })
                : (0, r.jsx)(m.g, { className: C.image }),
        header: x.intl.formatToPlainString(j.default.LmpChI, { guildName: l }),
        content: a,
        buttonCTA: c ? x.intl.string(j.default.gSxlHR) : x.intl.string(x.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i,
    });
}
function T(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = n.find((e) => e.skuId === o.A$);
    if (null != l)
        return (0, r.jsx)(R, {
            header: x.intl.string(j.default.Ygpx4e),
            content: x.intl.string(j.default.mmNkUF),
            asset: (0, r.jsx)("img", {
                alt: "",
                src: P.Z,
                className: C.image,
            }),
            onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, l.skuId),
            markAsDismissed: i,
            buttonCTA: x.intl.string(x.t.RzWDqa),
        });
    let a = n.find((e) => _.NL.has(e.skuId));
    return null != a
        ? (0, r.jsx)(R, {
              header: x.intl.string(j.default["kA2c+v"]),
              content: x.intl.string(j.default.TUilLi),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: I.Z,
                  className: C.image,
              }),
              onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId),
              markAsDismissed: i,
              buttonCTA: x.intl.string(x.t.RzWDqa),
          })
        : null;
}
function A(e) {
    let { guildId: t, markAsDismissed: n } = e;
    return (0, r.jsx)(R, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: E.Z,
            className: l()(C.image, C.newPerksImage),
        }),
        header: x.intl.string(v.default.wXLCh4),
        content: x.intl.string(v.default.lZ6m7e),
        buttonCTA: x.intl.string(x.t.RzWDqa),
        onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
        markAsDismissed: n,
    });
}
function R(e) {
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
        h = d === p.DF.TOP_CENTER || d === p.DF.LEFT_TOP ? C[d] : "";
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
                    className: C.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: C.close,
                            onClick: () => (null == s ? void 0 : s(O.L.USER_DISMISS)),
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
                className: l()(C.container, h),
                headerClassName: C.header,
                contentClassName: C.header,
                caretPosition: d,
                markAsDismissed: s,
            },
            u,
        ),
    );
}
