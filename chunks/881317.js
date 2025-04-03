n.d(t, { Z: () => j }), n(47120);
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
let I = (e) => {
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
                        i === p.BM.MESSAGE ? (0, g.eE)(t) : i === p.BM.USER && (0, g.JM)(t);
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
        return (0, r.jsx)('div', {
            className: x.buttonColumn,
            children: (0, r.jsx)(l.zxk, {
                className: N.__invalid_reportButton,
                fullWidth: !0,
                color: l.zxk.Colors.BRAND,
                onClick: () => a(),
                children: t
            })
        });
    },
    j = () => {
        let [e, t] = i.useState(!0),
            [n, o] = i.useState(!1),
            g = (0, a.e7)([f.default], () => f.default.isAuthenticated()),
            v = (0, a.e7)([d.Z], () => d.Z.hasLoadedExperiments),
            E = () => {
                (0, h.qJ)()
                    .then(() => {
                        t(!1), o(!0);
                    })
                    .catch(() => {
                        t(!1), o(!1);
                    });
            };
        return (
            i.useEffect(() => {
                g
                    ? (t(!0),
                      c
                          .k({ withAnalyticsToken: !0 })
                          .then(() => E())
                          .catch(() => t(!1)))
                    : E();
            }, [g]),
            i.useEffect(() => {
                (async () => {
                    v || (await s.Z.getLocationMetadata(), s.Z.getExperiments());
                })();
            }, [v]),
            e || !v
                ? (0, r.jsx)(u.ZP, { children: (0, r.jsx)(l.$jN, {}) })
                : n &&
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
                          (0, r.jsxs)('div', {
                              className: x.container,
                              children: [
                                  (0, r.jsx)(I, {
                                      title: b.NW.string(b.t.fuqnBA),
                                      menuType: p.BM.MESSAGE
                                  }),
                                  (0, r.jsx)(I, {
                                      title: b.NW.string(b.t.F4jrRU),
                                      menuType: p.BM.USER
                                  })
                              ]
                          })
                      ]
                  })
        );
    };
