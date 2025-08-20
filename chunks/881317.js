n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(990547),
    o = n(442837),
    s = n(481060),
    a = n(893776),
    c = n(232567),
    u = n(388905),
    d = n(353926),
    h = n(82554),
    f = n(726521),
    p = n(185625),
    g = n(314897),
    m = n(63063),
    _ = n(981631),
    x = n(388032),
    v = n(884110),
    E = n(197571);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
o.ZP.initialize();
let I = {
        [h.BM.MESSAGE]: x.t.fuqnBA,
        [h.BM.USER]: x.t.F4jrRU,
        [h.BM.GUILD]: x.t.gH3aMj,
    },
    N = (e) => {
        let { title: t, menuType: i } = e,
            o = (e) => {
                let t = async () => {
                        await (0, p.yL)(i, e);
                    },
                    o = async (t) => await (0, p.RV)(i, e, t),
                    a = (e) => {
                        let t = null == e ? void 0 : e.token;
                        i === h.BM.MESSAGE
                            ? (0, f.eE)(t)
                            : i === h.BM.USER
                              ? (0, f.JM)(t)
                              : i === h.BM.GUILD && (0, f.FO)(t);
                    };
                t(),
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e("94566").then(n.bind(n, 965072));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                j(b({}, n), {
                                    onFormSubmit: o,
                                    onResend: t,
                                    onSuccess: a,
                                    headerText: x.intl.string(x.t.H3Q7U1),
                                    confirmButtonText: x.intl.string(x.t["13ofGh"]),
                                    impression: { impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                                }),
                            );
                    });
            };
        return (0, r.jsxs)(s.P3F, {
            className: v.reportButton,
            onClick: () =>
                void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("93288").then(n.bind(n, 396410));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            j(b({}, t), {
                                onSuccess: o,
                                headerText: x.intl.string(x.t.ZLRYGR),
                                confirmButtonText: x.intl.string(x.t.PDTjLC),
                            }),
                        );
                }),
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(s.LJT, {
                    size: "sm",
                    color: "currentColor",
                }),
            ],
        });
    },
    O = () => {
        let [e, t] = i.useState(!0),
            [n, l] = i.useState([]),
            h = (0, o.e7)([g.default], () => g.default.isAuthenticated()),
            f = (0, o.e7)([d.Z], () => d.Z.hasLoadedExperiments),
            b = () => {
                (0, p.Jj)()
                    .then((e) => {
                        let {
                            body: { capabilities: n },
                        } = e;
                        t(!1), l(n);
                    })
                    .catch(() => {
                        t(!1), l([]);
                    });
            };
        return (
            i.useEffect(() => {
                h
                    ? (t(!0),
                      c
                          .k({ withAnalyticsToken: !0 })
                          .then(() => b())
                          .catch(() => t(!1)))
                    : b();
            }, [h]),
            i.useEffect(() => {
                (async () => {
                    f || (await a.Z.getLocationMetadata(), a.Z.getExperiments());
                })();
            }, [f]),
            e || !f
                ? (0, r.jsx)(u.ZP, { children: (0, r.jsx)(s.$jN, {}) })
                : null != n &&
                  n.length > 0 &&
                  (0, r.jsxs)(u.ZP, {
                      children: [
                          (0, r.jsx)(u.Dx, {
                              className: E.marginBottom8,
                              children: x.intl.string(x.t.Z11w19),
                          }),
                          (0, r.jsx)(u.DK, {
                              className: E.marginBottom8,
                              children: x.intl.format(x.t["532l+v"], {
                                  supportURL: m.Z.getArticleURL(_.BhN.COPYRIGHT_AND_IP_POLICY),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: v.container,
                              children: n.map((e) =>
                                  null == I[e]
                                      ? null
                                      : (0, r.jsx)(
                                            N,
                                            {
                                                title: x.intl.string(I[e]),
                                                menuType: e,
                                            },
                                            e,
                                        ),
                              ),
                          }),
                      ],
                  })
        );
    };
