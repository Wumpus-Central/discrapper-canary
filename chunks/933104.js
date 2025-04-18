n.d(t, {
    $h: () => j,
    jG: () => S,
    yI: () => E
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(793030),
    s = n(442837),
    a = n(481060),
    c = n(623624),
    u = n(970731),
    d = n(430824),
    h = n(908062),
    p = n(639777),
    f = n(441536),
    g = n(795338),
    m = n(279604),
    b = n(981631),
    y = n(921944),
    _ = n(696672),
    v = n(388032),
    O = n(400242),
    C = n(324670);
function S(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(x, {
        asset: (0, r.jsx)(g.g, { className: O.image }),
        header: v.NW.formatToPlainString(_.Z['Zg/m9P'], { perkName: n.title }),
        content: v.NW.formatToPlainString(_.Z['1EGXSE'], { perkName: n.title }),
        buttonCTA: v.NW.string(v.t.RzWDqa),
        onClick: () => (0, f.Z)(t, n.skuId),
        markAsDismissed: i
    });
}
function j(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, p.Z)(t),
        o = (0, h.Z)(t);
    if (0 === o.length) return;
    let s = o.length > 1 ? ''.concat(o[0].title, ' & ').concat(o[1].title) : ''.concat(o[0].title);
    return (0, r.jsx)(x, {
        asset: (0, r.jsx)('img', {
            alt: '',
            src: C.Z,
            className: l()(O.image, O.newPerksImage)
        }),
        header: v.NW.string(_.Z.xyE2AQ),
        content: i ? v.NW.formatToPlainString(_.Z.IJP4YG, { perks: s }) : v.NW.formatToPlainString(_.Z['6kywho'], { perks: s }),
        buttonCTA: v.NW.string(v.t.RzWDqa),
        onClick: () =>
            i
                ? (0, f.Z)(t)
                : (0, c.f)({
                      guildId: t,
                      location: { section: b.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK }
                  }),
        markAsDismissed: n,
        caretPosition: i ? u.DF.LEFT_TOP : u.DF.TOP_CENTER
    });
}
function E(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        l = (0, s.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: o } = (0, m.ZP)(t, n[0]);
    if (0 === n.length) return;
    let a = n.length > 1 ? ''.concat(n[0].title, ' & ').concat(n[1].title) : ''.concat(n[0].title),
        c = 1 === n.length;
    return (0, r.jsx)(x, {
        asset:
            1 === n.length
                ? (0, r.jsx)(g.m, {
                      className: O.image,
                      powerup: n[0]
                  })
                : (0, r.jsx)(g.g, { className: O.image }),
        header: v.NW.formatToPlainString(_.Z.LmpChI, { guildName: l }),
        content: n.length > 1 ? v.NW.formatToPlainString(_.Z.wcQOqK, { perks: a }) : v.NW.formatToPlainString(_.Z.ZF8NT0, { perk: a }),
        buttonCTA: c ? v.NW.string(_.Z.gSxlHR) : v.NW.string(v.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, f.Z)(t)),
        markAsDismissed: i
    });
}
function x(e) {
    var { asset: t, header: n, content: i, caretPosition: s, markAsDismissed: c } = e,
        d = (function (e, t) {
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
    let h = null != s ? s : u.DF.LEFT_TOP,
        p = h === u.DF.TOP_CENTER || h === u.DF.LEFT_TOP ? O[h] : '';
    return (0, r.jsx)(
        u.ZP,
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
                    className: O.imageContainer,
                    children: [
                        t,
                        (0, r.jsx)(a.olH, {
                            className: O.close,
                            onClick: () => (null == c ? void 0 : c(y.L.USER_DISMISS))
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
                className: l()(O.container, p),
                headerClassName: O.header,
                contentClassName: O.header,
                caretPosition: h,
                markAsDismissed: c
            },
            d
        )
    );
}
