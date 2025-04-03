n.d(t, {
    Kq: () => u,
    Ot: () => d,
    ZP: () => h,
    jz: () => p
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(534091),
    s = n(981631),
    c = n(191052);
function u(e) {
    let { locked: t = !1, channelType: n } = e,
        i = n === s.d4z.GUILD_VOICE || n === s.d4z.GUILD_STAGE_VOICE ? o.kBi : t ? o.W4G : o.VL1;
    return (0, r.jsx)('div', {
        className: l()(c.emptyChannelIcon, c.emptyChannelIconComponent),
        children: (0, r.jsx)(i, {
            color: o.TVs.colors.WHITE,
            size: 'custom',
            width: 42,
            height: 42
        })
    });
}
function d(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)(o.X6q, {
        'aria-hidden': 'true',
        className: l()(n, c.header),
        variant: 'heading-xxl/extrabold',
        children: t
    });
}
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: c.description,
        children: t
    });
}
let h = function (e) {
    var t,
        n,
        { className: i, channelId: o, children: s } = e,
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
        })(e, ['className', 'channelId', 'children']);
    return (0, r.jsx)(
        'div',
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
        })(
            {
                className: l()(i, c.container),
                id: (0, a.p)(o, o)
            },
            u
        )),
        (n = n = { children: s }),
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
};
