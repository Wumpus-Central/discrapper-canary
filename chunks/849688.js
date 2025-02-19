n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(442837),
    c = n(547280),
    u = n(678513),
    d = n(981631),
    p = n(388032),
    h = n(968284);
let g = function (e) {
    let { guild: t } = e,
        l = (0, s.e7)([u.Z], () => u.Z.getActiveGuildSignUp(t.id)),
        g = i.useCallback(() => {
            null != l &&
                (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('22862'), n.e('15012')]).then(n.bind(n, 646202));
                    return (n) => {
                        var i, o;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (o = o =
                                {
                                    target: l,
                                    guildId: t.id
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            i)
                        );
                    };
                });
        }, [l, t.id]),
        f = i.useCallback(() => {
            null != l && (0, c.b)(l.key, l.dismissibleContent);
        }, [l]);
    if (null == l) return null;
    let m = 'url('.concat(l.backgroundAssetUrl, ') black top / cover no-repeat');
    return (0, r.jsx)(a.f6W, {
        theme: d.BRd.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                className: o()(h.container, e),
                children: (0, r.jsxs)('div', {
                    className: h.card,
                    style: { background: m },
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.eyebrow,
                            children: [
                                (0, r.jsx)(a._XJ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'none',
                                    children: p.NW.string(p.t.hhKpxs)
                                })
                            ]
                        }),
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-sm/medium',
                            children: l.noticeHeader
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: h.button,
                            color: 'none',
                            onClick: g,
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'none',
                                children: p.NW.string(p.t.vv0Nsb)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: h.dismiss,
                            children: (0, r.jsx)(a.P3F, {
                                onClick: f,
                                'aria-label': p.NW.string(p.t.cpT0Cg),
                                children: (0, r.jsx)(a.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                })
            })
    });
};
