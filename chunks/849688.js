n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(442837),
    c = n(547280),
    u = n(678513),
    d = n(981631),
    p = n(388032),
    h = n(704346);
let f = function (e) {
    let { guild: t } = e,
        l = (0, s.e7)([u.Z], () => u.Z.getActiveGuildSignUp(t.id)),
        f = i.useCallback(() => {
            null != l &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('22862'), n.e('11900')]).then(n.bind(n, 646202));
                    return (n) => {
                        var i, a;
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
                            (a = a =
                                {
                                    target: l,
                                    guildId: t.id
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i)
                        );
                    };
                });
        }, [l, t.id]),
        g = i.useCallback(() => {
            null != l && (0, c.b)(l.key, l.dismissibleContent);
        }, [l]);
    if (null == l) return null;
    let m = 'url('.concat(l.backgroundAssetUrl, ') black top / cover no-repeat');
    return (0, r.jsx)(o.f6W, {
        theme: d.BRd.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(h.container, e),
                children: (0, r.jsxs)('div', {
                    className: h.card,
                    style: { background: m },
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.eyebrow,
                            children: [
                                (0, r.jsx)(o._XJ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'none',
                                    children: p.NW.string(p.t.hhKpxs)
                                })
                            ]
                        }),
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-sm/medium',
                            children: l.noticeHeader
                        }),
                        (0, r.jsx)(o.zxk, {
                            className: h.button,
                            color: 'none',
                            onClick: f,
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'none',
                                children: p.NW.string(p.t.vv0Nsb)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: h.dismiss,
                            children: (0, r.jsx)(o.P3F, {
                                onClick: g,
                                'aria-label': p.NW.string(p.t.cpT0Cg),
                                children: (0, r.jsx)(o.Dio, {
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
