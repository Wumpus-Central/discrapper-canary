n.d(t, {
    $h: () => P,
    cO: () => w,
    jG: () => I,
    yI: () => N,
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
    f = n(430824),
    h = n(639777),
    g = n(441536),
    m = n(795338),
    b = n(279604),
    O = n(535396),
    _ = n(981631),
    y = n(921944),
    j = n(989308),
    v = n(388032),
    C = n(428197),
    x = n(928381),
    E = n(283902),
    S = n(225375);
function I(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(Z, {
        asset: (0, r.jsx)(m.g, { className: C.image }),
        header: v.intl.formatToPlainString(j.default["Zg/m9P"], { perkName: n.title }),
        content: v.intl.formatToPlainString(j.default["1EGXSE"], { perkName: n.title }),
        buttonCTA: v.intl.string(v.t.RzWDqa),
        onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i,
    });
}
function P(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, h.Z)(t);
    return (0, r.jsx)(Z, {
        asset: (0, r.jsx)("img", {
            alt: "",
            src: x.Z,
            className: l()(C.image, C.newPerksImage),
        }),
        header: v.intl.string(j.default.QpQBPT),
        content: i ? v.intl.string(j.default["6hn0xM"]) : v.intl.string(j.default.RDuvXl),
        buttonCTA: v.intl.string(v.t.RzWDqa),
        onClick: () =>
            i
                ? (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
                : (0, d.f)({
                      guildId: t,
                      location: { section: _.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK },
                  }),
        markAsDismissed: n,
        caretPosition: i ? p.DF.LEFT_TOP : p.DF.TOP_CENTER,
    });
}
function N(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, b.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a =
            n.length >= 3
                ? v.intl.formatToPlainString(j.default["6Sv+3N"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? v.intl.formatToPlainString(j.default.wcQOqK, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : v.intl.formatToPlainString(j.default.ZF8NT0, { perk: n[0].title }),
        c = 1 === n.length;
    return (0, r.jsx)(Z, {
        asset:
            1 === n.length
                ? (0, r.jsx)(m.m, {
                      className: C.image,
                      powerup: n[0],
                  })
                : (0, r.jsx)(m.g, { className: C.image }),
        header: v.intl.formatToPlainString(j.default.LmpChI, { guildName: l }),
        content: a,
        buttonCTA: c ? v.intl.string(j.default.gSxlHR) : v.intl.string(v.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i,
    });
}
function w(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = n.find((e) => e.skuId === o.A$);
    if (null != l)
        return (0, r.jsx)(Z, {
            header: v.intl.string(j.default.Ygpx4e),
            content: v.intl.string(j.default.mmNkUF),
            asset: (0, r.jsx)("img", {
                alt: "",
                src: S.Z,
                className: C.image,
            }),
            onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, l.skuId),
            markAsDismissed: i,
            buttonCTA: v.intl.string(v.t.RzWDqa),
        });
    let a = n.find((e) => O.NL.has(e.skuId));
    return null != a
        ? (0, r.jsx)(Z, {
              header: v.intl.string(j.default["kA2c+v"]),
              content: v.intl.string(j.default.TUilLi),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: E.Z,
                  className: C.image,
              }),
              onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId),
              markAsDismissed: i,
              buttonCTA: v.intl.string(v.t.RzWDqa),
          })
        : null;
}
function Z(e) {
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
        f = d === p.DF.TOP_CENTER || d === p.DF.LEFT_TOP ? C[d] : "";
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
                asset: (0, r.jsxs)("div", {
                    className: C.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(c.olH, {
                            className: C.close,
                            onClick: () => (null == s ? void 0 : s(y.L.USER_DISMISS)),
                        }),
                    ],
                }),
                header: (0, r.jsx)(a.xv, {
                    variant: "text-md/semibold",
                    children: n,
                }),
                content: (0, r.jsx)(a.xv, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: i,
                }),
                className: l()(C.container, f),
                headerClassName: C.header,
                contentClassName: C.header,
                caretPosition: d,
                markAsDismissed: s,
            },
            u,
        ),
    );
}
