n.d(t, {
    $h: () => S,
    jG: () => C,
    yI: () => j
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
    _ = n(921944),
    y = n(680278),
    v = n(388032),
    O = n(423151);
function C(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(x, {
        asset: (0, r.jsx)(E, {
            powerups: n,
            markAsDismissed: i
        }),
        header: v.NW.formatToPlainString(y.Z['Zg/m9P'], { perkName: n.title }),
        content: v.NW.formatToPlainString(y.Z['1EGXSE'], { perkName: n.title }),
        buttonCTA: v.NW.string(v.t.RzWDqa),
        onClick: () => (0, f.Z)(t, n.skuId),
        markAsDismissed: i
    });
}
function S(e) {
    let { guildId: t, markAsDismissed: n } = e,
        i = (0, p.Z)(t),
        l = (0, h.Z)(t);
    if (0 === l.length) return;
    let o = l.length > 1 ? ''.concat(l[0].title, ' & ').concat(l[1].title) : ''.concat(l[0].title);
    return (0, r.jsx)(x, {
        asset: (0, r.jsx)(E, {
            powerups: l,
            markAsDismissed: n
        }),
        header: v.NW.string(y.Z.xyE2AQ),
        content: i ? v.NW.formatToPlainString(y.Z.IJP4YG, { perks: o }) : v.NW.formatToPlainString(y.Z['6kywho'], { perks: o }),
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
function j(e) {
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
        asset: (0, r.jsx)(E, {
            powerups: n,
            markAsDismissed: i
        }),
        header: v.NW.formatToPlainString(y.Z.LmpChI, { guildName: l }),
        content: n.length > 1 ? v.NW.formatToPlainString(y.Z.wcQOqK, { perks: a }) : v.NW.formatToPlainString(y.Z.ZF8NT0, { perk: a }),
        buttonCTA: c ? v.NW.string(y.Z.gSxlHR) : v.NW.string(v.t.RzWDqa),
        onClick: (e) => (c ? o(e) : (0, f.Z)(t)),
        markAsDismissed: i
    });
}
function E(e) {
    let { powerups: t, markAsDismissed: n } = e;
    return (0, r.jsxs)('div', {
        className: O.imageContainer,
        children: [
            Array.isArray(t) && 1 === t.length
                ? (0, r.jsx)(g.m, {
                      className: O.image,
                      powerup: t[0]
                  })
                : (0, r.jsx)(g.g, { className: O.image }),
            (0, r.jsx)(a.olH, {
                className: O.close,
                onClick: () => n(_.L.USER_DISMISS)
            })
        ]
    });
}
function x(e) {
    var { header: t, content: n, caretPosition: i } = e,
        s = (function (e, t) {
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
        })(e, ['header', 'content', 'caretPosition']);
    let a = null != i ? i : u.DF.LEFT_TOP,
        c = a === u.DF.TOP_CENTER || a === u.DF.LEFT_TOP ? O[a] : '';
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
                header: (0, r.jsx)(o.xv, {
                    variant: 'text-md/semibold',
                    children: t
                }),
                content: (0, r.jsx)(o.xv, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    children: n
                }),
                className: l()(O.container, c),
                headerClassName: O.header,
                contentClassName: O.header,
                caretPosition: a
            },
            s
        )
    );
}
