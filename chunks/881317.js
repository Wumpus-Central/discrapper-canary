n.d(t, { Z: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(990547),
    o = n(442837),
    l = n(481060),
    a = n(893776),
    c = n(232567),
    u = n(388905),
    d = n(353926),
    h = n(82554),
    g = n(726521),
    p = n(185625),
    m = n(314897),
    f = n(63063),
    _ = n(981631),
    x = n(388032),
    N = n(793613),
    b = n(20493);
function E(e) {
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
function v(e, t) {
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
o.ZP.initialize();
let j = {
        [h.BM.MESSAGE]: x.t.fuqnBA,
        [h.BM.USER]: x.t.F4jrRU,
        [h.BM.GUILD]: x.t.gH3aMj
    },
    I = (e) => {
        let { title: t, menuType: i } = e,
            o = () => {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            v(E({}, t), {
                                onSuccess: a,
                                headerText: x.NW.string(x.t.ZLRYGR),
                                confirmButtonText: x.NW.string(x.t.PDTjLC),
                                confirmButtonColor: l.zxk.Colors.BRAND,
                                impressionName: s.ImpressionNames.URF_ENTER_EMAIL
                            })
                        );
                });
            },
            a = (e) => {
                let t = async () => {
                        await (0, p.yL)(i, e);
                    },
                    o = async (t) => await (0, p.RV)(i, e, t),
                    a = (e) => {
                        let t = null == e ? void 0 : e.token;
                        i === h.BM.MESSAGE ? (0, g.eE)(t) : i === h.BM.USER ? (0, g.JM)(t) : i === h.BM.GUILD && (0, g.FO)(t);
                    };
                t(),
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                v(E({}, n), {
                                    onFormSubmit: o,
                                    onResend: t,
                                    onSuccess: a,
                                    headerText: x.NW.string(x.t.H3Q7U1),
                                    confirmButtonText: x.NW.string(x.t['13ofGh']),
                                    confirmButtonColor: l.zxk.Colors.BRAND,
                                    impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                                })
                            );
                    });
            };
        return (0, r.jsxs)(l.P3F, {
            className: N.reportButton,
            onClick: () => o(),
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, r.jsx)(l.LJT, {
                    size: 'sm',
                    color: 'currentColor'
                })
            ]
        });
    },
    O = () => {
        let [e, t] = i.useState(!0),
            [n, s] = i.useState([]),
            h = (0, o.e7)([m.default], () => m.default.isAuthenticated()),
            g = (0, o.e7)([d.Z], () => d.Z.hasLoadedExperiments),
            E = () => {
                (0, p.Jj)()
                    .then((e) => {
                        let {
                            body: { capabilities: n }
                        } = e;
                        t(!1), s(n);
                    })
                    .catch(() => {
                        t(!1), s([]);
                    });
            };
        return (
            i.useEffect(() => {
                h
                    ? (t(!0),
                      c
                          .k({ withAnalyticsToken: !0 })
                          .then(() => E())
                          .catch(() => t(!1)))
                    : E();
            }, [h]),
            i.useEffect(() => {
                (async () => {
                    g || (await a.Z.getLocationMetadata(), a.Z.getExperiments());
                })();
            }, [g]),
            e || !g
                ? (0, r.jsx)(u.ZP, { children: (0, r.jsx)(l.$jN, {}) })
                : null != n &&
                  n.length > 0 &&
                  (0, r.jsxs)(u.ZP, {
                      children: [
                          (0, r.jsx)(u.Dx, {
                              className: b.marginBottom8,
                              children: x.NW.string(x.t.Z11w19)
                          }),
                          (0, r.jsx)(u.DK, {
                              className: b.marginBottom8,
                              children: x.NW.format(x.t['532l+v'], { supportURL: f.Z.getArticleURL(_.BhN.COPYRIGHT_AND_IP_POLICY) })
                          }),
                          (0, r.jsx)('div', {
                              className: N.container,
                              children: n.map((e) =>
                                  null == j[e]
                                      ? null
                                      : (0, r.jsx)(
                                            I,
                                            {
                                                title: x.NW.string(j[e]),
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
