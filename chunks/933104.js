n.d(t, {
    $h: () => E,
    jG: () => S,
    yI: () => x
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(793030),
    s = n(442837),
    a = n(481060),
    c = n(100527),
    u = n(623624),
    d = n(970731),
    h = n(430824),
    p = n(908062),
    f = n(639777),
    g = n(441536),
    m = n(795338),
    b = n(279604),
    y = n(981631),
    _ = n(921944),
    v = n(680278),
    O = n(388032),
    C = n(423151),
    j = n(928381);
function S(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(P, {
        asset: (0, r.jsx)(m.g, { className: C.image }),
        header: O.intl.formatToPlainString(v.default['Zg/m9P'], { perkName: n.title }),
        content: O.intl.formatToPlainString(v.default['1EGXSE'], { perkName: n.title }),
        buttonCTA: O.intl.string(O.t.RzWDqa),
        onClick: () => (0, g.Z)(t, c.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
        markAsDismissed: i
    });
}
function E(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, f.Z)(t);
    if (0 !== (0, p.Z)(t).length)
        return (0, r.jsx)(P, {
            asset: (0, r.jsx)('img', {
                alt: '',
                src: j.Z,
                className: l()(C.image, C.newPerksImage)
            }),
            header: O.intl.string(v.default.QpQBPT),
            content: i ? O.intl.string(v.default['6hn0xM']) : O.intl.string(v.default.RDuvXl),
            buttonCTA: O.intl.string(O.t.RzWDqa),
            onClick: () =>
                i
                    ? (0, g.Z)(t, c.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS)
                    : (0, u.f)({
                          guildId: t,
                          location: { section: y.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK }
                      }),
            markAsDismissed: n,
            caretPosition: i ? d.DF.LEFT_TOP : d.DF.TOP_CENTER
        });
}
function x(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, b.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a = n.length > 1 ? ''.concat(n[0].title, ' & ').concat(n[1].title) : ''.concat(n[0].title),
        u = 1 === n.length;
    return (0, r.jsx)(P, {
        asset:
            1 === n.length
                ? (0, r.jsx)(m.m, {
                      className: C.image,
                      powerup: n[0]
                  })
                : (0, r.jsx)(m.g, { className: C.image }),
        header: O.intl.formatToPlainString(v.default.LmpChI, { guildName: l }),
        content: n.length > 1 ? O.intl.formatToPlainString(v.default.wcQOqK, { perks: a }) : O.intl.formatToPlainString(v.default.ZF8NT0, { perk: a }),
        buttonCTA: u ? O.intl.string(v.default.gSxlHR) : O.intl.string(O.t.RzWDqa),
        onClick: (e) => (u ? o(e) : (0, g.Z)(t, c.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS)),
        markAsDismissed: i
    });
}
function P(e) {
    var { asset: t, header: n, content: i, caretPosition: s, markAsDismissed: c } = e,
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['asset', 'header', 'content', 'caretPosition', 'markAsDismissed']);
    let h = null != s ? s : d.DF.LEFT_TOP,
        p = h === d.DF.TOP_CENTER || h === d.DF.LEFT_TOP ? C[h] : '';
    return (0, r.jsx)(
        d.ZP,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                asset: (0, r.jsxs)('div', {
                    className: C.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(a.olH, {
                            className: C.close,
                            onClick: () => (null == c ? void 0 : c(_.L.USER_DISMISS))
                        })
                    ]
                }),
                header: (0, r.jsx)(o.xv, {
                    variant: 'text-md/semibold',
                    children: n
                }),
                content: (0, r.jsx)(o.xv, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    children: i
                }),
                className: l()(C.container, p),
                headerClassName: C.header,
                contentClassName: C.header,
                caretPosition: h,
                markAsDismissed: c
            },
            u
        )
    );
}
