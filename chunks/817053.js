(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(481060),
    i = n(810568),
    a = n(168524),
    c = n(388032),
    s = n(467514);
function d(e) {
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
}
function u(e) {
    let { imageSrc: t, gameName: n } = e,
        [i, a] = o.useState(!1),
        d = null != n ? n : c.intl.string(c.t.GIWFlJ);
    return i || null == t
        ? (0, r.jsx)('div', {
              role: 'img',
              'aria-label': d,
              className: s.fallback,
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-xxs/medium',
                  lineClamp: 3,
                  'aria-hidden': !0,
                  children: d
              })
          })
        : (0, r.jsx)('img', {
              src: t,
              alt: d,
              className: s.gameCoverImage,
              onError: () => a(!0),
              onLoad: () => a(!1)
          });
}
function f(e) {
    let { imageSrc: t, gameName: n, applicationId: o, userId: d } = e,
        f = (0, a.Z)({
            location: 'GameCover',
            applicationId: o,
            source: i.m1.UserProfile,
            sourceUserId: d,
            trackEntryPointImpression: !0
        });
    if (null == f)
        return (0, r.jsx)(u, {
            imageSrc: t,
            gameName: n
        });
    let p = c.intl.formatToPlainString(c.t['8QLQBw'], { gameName: null != n ? n : c.intl.string(c.t.GIWFlJ) });
    return (0, r.jsx)(l.P3F, {
        onClick: f,
        'aria-label': p,
        className: s.clickable,
        children: (0, r.jsx)(u, {
            imageSrc: t,
            gameName: n
        })
    });
}
function p(e) {
    var { applicationId: t, userId: n, disableInteraction: o = !1 } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['applicationId', 'userId', 'disableInteraction']);
    return o
        ? (0, r.jsx)(u, d({}, l))
        : (0, r.jsx)(
              f,
              d(
                  {
                      applicationId: t,
                      userId: n
                  },
                  l
              )
          );
}
