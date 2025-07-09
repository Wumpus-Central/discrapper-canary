(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(990547),
    s = n(442837),
    a = n(755721),
    o = n(481060),
    c = n(893776),
    u = n(232567),
    d = n(388905),
    h = n(353926),
    p = n(82554),
    g = n(726521),
    m = n(185625),
    f = n(314897),
    _ = n(63063),
    x = n(981631),
    b = n(388032),
    E = n(793613),
    v = n(20493);
function I(e) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
s.ZP.initialize();
let O = {
        [p.BM.MESSAGE]: b.t.fuqnBA,
        [p.BM.USER]: b.t.F4jrRU,
        [p.BM.GUILD]: b.t.gH3aMj
    },
    y = (e) => {
        let { title: t, menuType: i } = e,
            s = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            j(I({}, t), {
                                onSuccess: c,
                                headerText: b.intl.string(b.t.ZLRYGR),
                                confirmButtonText: b.intl.string(b.t.PDTjLC),
                                confirmButtonColor: a.zx.Colors.BRAND,
                                impressionName: l.ImpressionNames.URF_ENTER_EMAIL
                            })
                        );
                });
            },
            c = (e) => {
                let t = async () => {
                        await (0, m.yL)(i, e);
                    },
                    s = async (t) => await (0, m.RV)(i, e, t),
                    c = (e) => {
                        let t = null == e ? void 0 : e.token;
                        i === p.BM.MESSAGE ? (0, g.eE)(t) : i === p.BM.USER ? (0, g.JM)(t) : i === p.BM.GUILD && (0, g.FO)(t);
                    };
                (t(),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                j(I({}, n), {
                                    onFormSubmit: s,
                                    onResend: t,
                                    onSuccess: c,
                                    headerText: b.intl.string(b.t.H3Q7U1),
                                    confirmButtonText: b.intl.string(b.t['13ofGh']),
                                    confirmButtonColor: a.zx.Colors.BRAND,
                                    impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                                })
                            );
                    }));
            };
        return (0, r.jsxs)(o.P3F, {
            className: E.reportButton,
            onClick: () => s(),
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, r.jsx)(o.LJT, {
                    size: 'sm',
                    color: 'currentColor'
                })
            ]
        });
    },
    S = () => {
        let [e, t] = i.useState(!0),
            [n, l] = i.useState([]),
            a = (0, s.e7)([f.default], () => f.default.isAuthenticated()),
            p = (0, s.e7)([h.Z], () => h.Z.hasLoadedExperiments),
            g = () => {
                (0, m.Jj)()
                    .then((e) => {
                        let {
                            body: { capabilities: n }
                        } = e;
                        (t(!1), l(n));
                    })
                    .catch(() => {
                        (t(!1), l([]));
                    });
            };
        return (
            i.useEffect(() => {
                a
                    ? (t(!0),
                      u
                          .k({ withAnalyticsToken: !0 })
                          .then(() => g())
                          .catch(() => t(!1)))
                    : g();
            }, [a]),
            i.useEffect(() => {
                (async () => {
                    p || (await c.Z.getLocationMetadata(), c.Z.getExperiments());
                })();
            }, [p]),
            e || !p
                ? (0, r.jsx)(d.ZP, { children: (0, r.jsx)(o.$jN, {}) })
                : null != n &&
                  n.length > 0 &&
                  (0, r.jsxs)(d.ZP, {
                      children: [
                          (0, r.jsx)(d.Dx, {
                              className: v.marginBottom8,
                              children: b.intl.string(b.t.Z11w19)
                          }),
                          (0, r.jsx)(d.DK, {
                              className: v.marginBottom8,
                              children: b.intl.format(b.t['532l+v'], { supportURL: _.Z.getArticleURL(x.BhN.COPYRIGHT_AND_IP_POLICY) })
                          }),
                          (0, r.jsx)('div', {
                              className: E.container,
                              children: n.map((e) =>
                                  null == O[e]
                                      ? null
                                      : (0, r.jsx)(
                                            y,
                                            {
                                                title: b.intl.string(O[e]),
                                                menuType: e
                                            },
                                            e
                                        )
                              )
                          })
                      ]
                  })
        );
    };
