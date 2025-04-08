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
    d = n(279604),
    p = n(921944),
    h = n(680278),
    f = n(388032),
    g = n(423151),
    m = n(942570);
function b(e) {
    let { guildId: t, powerup: n, markAsDismissed: i } = e;
    return (0, r.jsx)(O, {
        asset: (0, r.jsx)(v, {
            src: m,
            markAsDismissed: i
        }),
        header: f.NW.formatToPlainString(h.Z['Zg/m9P'], { perkName: n.title }),
        content: f.NW.formatToPlainString(h.Z['1EGXSE'], { perkName: n.title }),
        buttonCTA: f.NW.string(f.t.RzWDqa),
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
            src: m,
            markAsDismissed: i
        }),
        header: f.NW.string(h.Z.xyE2AQ),
        content: f.NW.formatToPlainString(h.Z.IJP4YG, { perks: l }),
        buttonCTA: f.NW.string(f.t.RzWDqa),
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
        { onActivate: a } = (0, d.ZP)(t, n[0]);
    if (0 === n.length) return;
    let c = n.length > 1 ? ''.concat(n[0].title, ' & ').concat(n[1].title) : ''.concat(n[0].title),
        p = 1 === n.length;
    return (0, r.jsx)(O, {
        asset: (0, r.jsx)(v, {
            src: m,
            markAsDismissed: i
        }),
        header: f.NW.formatToPlainString(h.Z.LmpChI, { guildName: o }),
        content: n.length > 1 ? f.NW.formatToPlainString(h.Z.wcQOqK, { perks: c }) : f.NW.formatToPlainString(h.Z.ZF8NT0, { perk: c }),
        buttonCTA: p ? f.NW.string(h.Z.gSxlHR) : f.NW.string(f.t.RzWDqa),
        onClick: (e) => (p ? a(e) : (0, u.Z)(t)),
        markAsDismissed: i
    });
}
function v(e) {
    let { src: t, markAsDismissed: n } = e;
    return (0, r.jsxs)('div', {
        className: g.imageContainer,
        children: [
            (0, r.jsx)('img', {
                className: g.image,
                src: t,
                alt: ''
            }),
            (0, r.jsx)(o.olH, {
                className: g.close,
                onClick: () => n(p.L.USER_DISMISS)
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
                className: g.container,
                headerClassName: g.header,
                contentClassName: g.header,
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
