n.d(t, { h: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(990547),
    a = n(481060),
    s = n(213609),
    c = n(626135),
    u = n(738672),
    d = n(981631),
    p = n(388032),
    h = n(504619);
function f() {
    return (f =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function m(e) {
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
}
function g(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, s.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.HD_STREAMING_POPOUT
            },
            { disableTrack: t },
            [t]
        ),
        (0, r.jsxs)('div', {
            className: l()(h.popoutContainer, { [h.hidden]: t }),
            children: [
                (0, r.jsx)('img', {
                    className: h.image,
                    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                    alt: 'HD Streaming Nitro Perk'
                }),
                (0, r.jsx)(a.zxk, {
                    className: h.closeButton,
                    'aria-label': p.NW.string(p.t.cpT0Cg),
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.NONE,
                    onClick: () => {
                        n(), c.default.track(d.rMx.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, r.jsx)(a.Dio, {
                        size: 'xs',
                        className: h.closeIcon,
                        color: 'white'
                    })
                }),
                (0, r.jsx)('div', {
                    className: h.infoContainerParent,
                    children: (0, r.jsxs)('div', {
                        className: h.infoContainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                className: h.infoText,
                                variant: 'text-sm/medium',
                                children: p.NW.format(p.t.ruvD7u, {})
                            }),
                            (0, r.jsxs)('div', {
                                className: h.poweredByNitroContainer,
                                children: [
                                    (0, r.jsx)(a.SrA, { size: 'xs' }),
                                    (0, r.jsx)(a.Text, {
                                        className: h.infoText,
                                        variant: 'text-sm/medium',
                                        children: p.NW.string(p.t['BMw+7O'])
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function b(e) {
    var t,
        n,
        i = f(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    return (0, r.jsx)(
        u.h,
        ((t = m({}, i)),
        (n = n = { renderComponent: (e) => (0, r.jsx)(g, m({}, e)) }),
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
