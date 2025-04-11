n.d(t, {
    $h: () => _,
    jG: () => b,
    yI: () => y
});
var r = n(200651),
    i = n(793030),
    l = n(442837),
    o = n(481060),
    a = n(970731),
    s = n(430824),
    c = n(639777),
    u = n(441536),
    d = n(795338),
    p = n(279604),
    h = n(921944),
    f = n(680278),
    g = n(388032),
    m = n(423151);
function b(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(O, {
        asset: (0, r.jsx)(v, {
            powerups: n,
            markAsDismissed: i
        }),
        header: g.NW.formatToPlainString(f.Z['Zg/m9P'], { perkName: n.title }),
        content: g.NW.formatToPlainString(f.Z['1EGXSE'], { perkName: n.title }),
        buttonCTA: g.NW.string(g.t.RzWDqa),
        onClick: () => (0, u.Z)(t, n.skuId),
        markAsDismissed: i
    });
}
function _(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e;
    if (((0, c.Z)(t), 0 === n.length)) return;
    let l = n.length > 1 ? ''.concat(n[0].title, ' & ').concat(n[1].title) : ''.concat(n[0].title);
    return (0, r.jsx)(O, {
        asset: (0, r.jsx)(v, {
            powerups: n,
            markAsDismissed: i
        }),
        header: g.NW.string(f.Z.xyE2AQ),
        content: g.NW.formatToPlainString(f.Z.IJP4YG, { perks: l }),
        buttonCTA: g.NW.string(g.t.RzWDqa),
        onClick: () => (0, u.Z)(t),
        markAsDismissed: i
    });
}
function y(e) {
    let { guildId: t, powerups: n, markAsDismissed: i } = e,
        o = (0, l.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: a } = (0, p.ZP)(t, n[0]);
    if (0 === n.length) return;
    let c = n.length > 1 ? ''.concat(n[0].title, ' & ').concat(n[1].title) : ''.concat(n[0].title),
        d = 1 === n.length;
    return (0, r.jsx)(O, {
        asset: (0, r.jsx)(v, {
            powerups: n,
            markAsDismissed: i
        }),
        header: g.NW.formatToPlainString(f.Z.LmpChI, { guildName: o }),
        content: n.length > 1 ? g.NW.formatToPlainString(f.Z.wcQOqK, { perks: c }) : g.NW.formatToPlainString(f.Z.ZF8NT0, { perk: c }),
        buttonCTA: d ? g.NW.string(f.Z.gSxlHR) : g.NW.string(g.t.RzWDqa),
        onClick: (e) => (d ? a(e) : (0, u.Z)(t)),
        markAsDismissed: i
    });
}
function v(e) {
    let { powerups: t, markAsDismissed: n } = e;
    return (0, r.jsxs)('div', {
        className: m.imageContainer,
        children: [
            Array.isArray(t) && 1 === t.length
                ? (0, r.jsx)(d.m, {
                      className: m.image,
                      powerup: t[0]
                  })
                : (0, r.jsx)(d.g, { className: m.image }),
            (0, r.jsx)(o.olH, {
                className: m.close,
                onClick: () => n(h.L.USER_DISMISS)
            })
        ]
    });
}
function O(e) {
    var t,
        n,
        { header: l, content: o } = e,
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
        })(e, ['header', 'content']);
    return (0, r.jsx)(
        a.ZP,
        ((t = (function (e) {
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
        })({}, s)),
        (n = n =
            {
                header: (0, r.jsx)(i.xv, {
                    variant: 'text-md/semibold',
                    children: l
                }),
                content: (0, r.jsx)(i.xv, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    children: o
                }),
                className: m.container,
                headerClassName: m.header,
                contentClassName: m.header,
                caretPosition: a.DF.LEFT_TOP
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
        t)
    );
}
