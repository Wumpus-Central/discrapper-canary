n.d(t, {
    $: () => h,
    j: () => f
});
var r = n(200651),
    i = n(793030),
    o = n(970731),
    l = n(713081),
    a = n(441536),
    s = n(279604),
    c = n(367123),
    u = n(388032),
    d = n(78779),
    p = n(942570);
function h(e) {
    let { guildId: t, powerup: n, availableBoostCount: i } = e,
        { onActivate: o, isLoading: a } = (0, s.ZP)(t, n);
    return (0, r.jsx)(g, {
        asset: (0, r.jsx)('img', {
            className: d.image,
            src: p,
            alt: ''
        }),
        header: u.NW.string(c.Z['k+prUF']),
        content:
            i >= n.cost
                ? u.NW.formatToPlainString(c.Z.h8CFJi, {
                      boostCount: i,
                      perkName: n.title
                  })
                : u.NW.formatToPlainString(c.Z['+DlJ7+'], { perkName: n.title }),
        buttonCTA: u.NW.string(c.Z.gSxlHR),
        buttonProps: { submitting: a },
        secondaryButtonCTA: u.NW.string(c.Z.ivpkNT),
        onSecondaryClick: () => (0, l.jd)(t),
        onClick: o
    });
}
function f(e) {
    let { guildId: t, powerup: n } = e;
    return (0, r.jsx)(g, {
        asset: (0, r.jsx)('img', {
            className: d.image,
            src: p,
            alt: ''
        }),
        header: u.NW.formatToPlainString(c.Z['Zg/m9P'], { perkName: n.title }),
        content: u.NW.formatToPlainString(c.Z['1EGXSE'], { perkName: n.title }),
        buttonCTA: u.NW.string(u.t.RzWDqa),
        onClick: () => (0, a.Z)(t, n.skuId)
    });
}
function g(e) {
    var t,
        n,
        { header: l, content: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['header', 'content']);
    return (0, r.jsx)(
        o.ZP,
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
                    children: a
                }),
                className: d.container,
                headerClassName: d.header,
                contentClassName: d.header,
                caretPosition: o.DF.LEFT_TOP
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
