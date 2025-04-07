n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(990547),
    a = n(442837),
    l = n(481060),
    s = n(893776),
    c = n(232567),
    u = n(388905),
    d = n(353926),
    p = n(82554),
    g = n(726521),
    h = n(185625),
    f = n(314897),
    m = n(63063),
    _ = n(981631),
    b = n(388032),
    x = n(793613),
    N = n(20493);
function v(e) {
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
function E(e, t) {
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
a.ZP.initialize();
let I = {
        [p.BM.MESSAGE]: b.t.fuqnBA,
        [p.BM.USER]: b.t.F4jrRU,
        [p.BM.GUILD]: b.t.gH3aMj
    },
    j = (e) => {
        let { title: t, menuType: i } = e,
            a = () => {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            E(v({}, t), {
                                onSuccess: s,
                                headerText: b.NW.string(b.t.ZLRYGR),
                                confirmButtonText: b.NW.string(b.t.PDTjLC),
                                confirmButtonColor: l.zxk.Colors.BRAND,
                                impressionName: o.ImpressionNames.URF_ENTER_EMAIL
                            })
                        );
                });
            },
            s = (e) => {
                let t = async () => {
                        await (0, h.yL)(i, e);
                    },
                    a = async (t) => await (0, h.RV)(i, e, t),
                    s = (e) => {
                        let t = null == e ? void 0 : e.token;
                        i === p.BM.MESSAGE ? (0, g.eE)(t) : i === p.BM.USER ? (0, g.JM)(t) : i === p.BM.GUILD && (0, g.FO)(t);
                    };
                t(),
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                E(v({}, n), {
                                    onFormSubmit: a,
                                    onResend: t,
                                    onSuccess: s,
                                    headerText: b.NW.string(b.t.H3Q7U1),
                                    confirmButtonText: b.NW.string(b.t['13ofGh']),
                                    confirmButtonColor: l.zxk.Colors.BRAND,
                                    impressionName: o.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                                })
                            );
                    });
            };
        return (0, r.jsxs)(l.P3F, {
            className: x.reportButton,
            onClick: () => a(),
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
    S = () => {
        let [e, t] = i.useState(!0),
            [n, o] = i.useState([]),
            p = (0, a.e7)([f.default], () => f.default.isAuthenticated()),
            g = (0, a.e7)([d.Z], () => d.Z.hasLoadedExperiments),
            v = () => {
                (0, h.Jj)()
                    .then((e) => {
                        let {
                            body: { capabilities: n }
                        } = e;
                        t(!1), o(n);
                    })
                    .catch(() => {
                        t(!1), o([]);
                    });
            };
        return (
            i.useEffect(() => {
                p
                    ? (t(!0),
                      c
                          .k({ withAnalyticsToken: !0 })
                          .then(() => v())
                          .catch(() => t(!1)))
                    : v();
            }, [p]),
            i.useEffect(() => {
                (async () => {
                    g || (await s.Z.getLocationMetadata(), s.Z.getExperiments());
                })();
            }, [g]),
            e || !g
                ? (0, r.jsx)(u.ZP, { children: (0, r.jsx)(l.$jN, {}) })
                : null != n &&
                  n.length > 0 &&
                  (0, r.jsxs)(u.ZP, {
                      children: [
                          (0, r.jsx)(u.Dx, {
                              className: N.marginBottom8,
                              children: b.NW.string(b.t.Z11w19)
                          }),
                          (0, r.jsx)(u.DK, {
                              className: N.marginBottom8,
                              children: b.NW.format(b.t['532l+v'], { supportURL: m.Z.getArticleURL(_.BhN.COPYRIGHT_AND_IP_POLICY) })
                          }),
                          (0, r.jsx)('div', {
                              className: x.container,
                              children: n.map((e) =>
                                  null == I[e]
                                      ? null
                                      : (0, r.jsx)(
                                            j,
                                            {
                                                title: b.NW.string(I[e]),
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
