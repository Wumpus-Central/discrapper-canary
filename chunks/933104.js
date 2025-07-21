n.d(t, {
    $h: () => x,
    cO: () => I,
    jG: () => E,
    yI: () => S
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(494497),
    s = n(793030),
    a = n(442837),
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
    v = n(388032),
    C = n(423151),
    j = n(928381);
function E(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(P, {
        asset: (0, r.jsx)(m.g, { className: C.image }),
        header: v.intl.formatToPlainString(y.default['Zg/m9P'], { perkName: n.title }),
        content: v.intl.formatToPlainString(y.default['1EGXSE'], { perkName: n.title }),
        buttonCTA: v.intl.string(v.t.RzWDqa),
        onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i
    });
}
function x(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, f.Z)(t);
    return (0, r.jsx)(P, {
        asset: (0, r.jsx)('img', {
            alt: '',
            src: j.Z,
            className: l()(C.image, C.newPerksImage)
        }),
        header: v.intl.string(y.default.QpQBPT),
        content: i ? v.intl.string(y.default['6hn0xM']) : v.intl.string(y.default.RDuvXl),
        buttonCTA: v.intl.string(v.t.RzWDqa),
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
function S(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, a.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, b.ZP)(t, n[0]);
    if (0 === n.length) return;
    let s =
            n.length >= 3
                ? v.intl.formatToPlainString(y.default['6Sv+3N'], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title
                  })
                : 2 === n.length
                  ? v.intl.formatToPlainString(y.default.wcQOqK, { perks: ''.concat(n[0].title, ' & ').concat(n[1].title) })
                  : v.intl.formatToPlainString(y.default.ZF8NT0, { perk: n[0].title }),
        c = 1 === n.length;
    return (0, r.jsx)(P, {
        asset:
            1 === n.length
                ? (0, r.jsx)(m.m, {
                      className: C.image,
                      powerup: n[0]
                  })
                : (0, r.jsx)(m.g, { className: C.image }),
        header: v.intl.formatToPlainString(y.default.LmpChI, { guildName: l }),
        content: s,
        buttonCTA: c ? v.intl.string(y.default.gSxlHR) : v.intl.string(v.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i
    });
}
function I(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return n.skuId === o.A$
        ? (0, r.jsx)(P, {
              header: v.intl.string(y.default.Ygpx4e),
              content: v.intl.string(y.default.mmNkUF),
              asset: (0, r.jsx)(m.g, { className: C.image }),
              onClick: () => (0, g.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, n.skuId),
              markAsDismissed: i,
              buttonCTA: v.intl.string(v.t.RzWDqa)
          })
        : null;
}
function P(e) {
    var { asset: t, header: n, content: i, caretPosition: o, markAsDismissed: a } = e,
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
        p = d === h.DF.TOP_CENTER || d === h.DF.LEFT_TOP ? C[d] : '';
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
                    className: C.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(c.olH, {
                            className: C.close,
                            onClick: () => (null == a ? void 0 : a(O.L.USER_DISMISS))
                        })
                    ]
                }),
                header: (0, r.jsx)(s.xv, {
                    variant: 'text-md/semibold',
                    children: n
                }),
                content: (0, r.jsx)(s.xv, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    children: i
                }),
                className: l()(C.container, p),
                headerClassName: C.header,
                contentClassName: C.header,
                caretPosition: d,
                markAsDismissed: a
            },
            u
        )
    );
}
