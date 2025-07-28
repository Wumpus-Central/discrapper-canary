n.d(t, {
    $h: () => x,
    cO: () => P,
    jG: () => S,
    yI: () => I
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(494497),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(623624),
    h = n(970731),
    p = n(430824),
    f = n(639777),
    g = n(441536),
    m = n(795338),
    b = n(279604),
    _ = n(981631),
    O = n(921944),
    y = n(93841),
    C = n(388032),
    v = n(423151),
    j = n(928381),
    E = n(225375);
function S(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(N, {
        asset: (0, r.jsx)(m.g, { className: v.image }),
        header: C.intl.formatToPlainString(y.default['Zg/m9P'], { perkName: n.title }),
        content: C.intl.formatToPlainString(y.default['1EGXSE'], { perkName: n.title }),
        buttonCTA: C.intl.string(C.t.RzWDqa),
        onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i
    });
}
function x(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, f.Z)(t);
    return (0, r.jsx)(N, {
        asset: (0, r.jsx)('img', {
            alt: '',
            src: j.Z,
            className: l()(v.image, v.newPerksImage)
        }),
        header: C.intl.string(y.default.QpQBPT),
        content: i ? C.intl.string(y.default['6hn0xM']) : C.intl.string(y.default.RDuvXl),
        buttonCTA: C.intl.string(C.t.RzWDqa),
        onClick: () =>
            i
                ? (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
                : (0, d.f)({
                      guildId: t,
                      location: { section: _.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK }
                  }),
        markAsDismissed: n,
        caretPosition: i ? h.DF.LEFT_TOP : h.DF.TOP_CENTER
    });
}
function I(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, b.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a =
            n.length >= 3
                ? C.intl.formatToPlainString(y.default['6Sv+3N'], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title
                  })
                : 2 === n.length
                  ? C.intl.formatToPlainString(y.default.wcQOqK, { perks: ''.concat(n[0].title, ' & ').concat(n[1].title) })
                  : C.intl.formatToPlainString(y.default.ZF8NT0, { perk: n[0].title }),
        c = 1 === n.length;
    return (0, r.jsx)(N, {
        asset:
            1 === n.length
                ? (0, r.jsx)(m.m, {
                      className: v.image,
                      powerup: n[0]
                  })
                : (0, r.jsx)(m.g, { className: v.image }),
        header: C.intl.formatToPlainString(y.default.LmpChI, { guildName: l }),
        content: a,
        buttonCTA: c ? C.intl.string(y.default.gSxlHR) : C.intl.string(C.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i
    });
}
function P(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return n.skuId === o.A$
        ? (0, r.jsx)(N, {
              header: C.intl.string(y.default.Ygpx4e),
              content: C.intl.string(y.default.mmNkUF),
              asset: (0, r.jsx)('img', {
                  alt: '',
                  src: E.Z,
                  className: v.image
              }),
              onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, n.skuId),
              markAsDismissed: i,
              buttonCTA: C.intl.string(C.t.RzWDqa)
          })
        : null;
}
function N(e) {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['asset', 'header', 'content', 'caretPosition', 'markAsDismissed']);
    let d = null != o ? o : h.DF.LEFT_TOP,
        p = d === h.DF.TOP_CENTER || d === h.DF.LEFT_TOP ? v[d] : '';
    return (0, r.jsx)(
        h.ZP,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                asset: (0, r.jsxs)('div', {
                    className: v.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(c.olH, {
                            className: v.close,
                            onClick: () => (null == s ? void 0 : s(O.L.USER_DISMISS))
                        })
                    ]
                }),
                header: (0, r.jsx)(a.xv, {
                    variant: 'text-md/semibold',
                    children: n
                }),
                content: (0, r.jsx)(a.xv, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    children: i
                }),
                className: l()(v.container, p),
                headerClassName: v.header,
                contentClassName: v.header,
                caretPosition: d,
                markAsDismissed: s
            },
            u
        )
    );
}
