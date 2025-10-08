n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(990547),
    s = n(442837),
    a = n(481060),
    o = n(893776),
    c = n(232567),
    u = n(388905),
    d = n(353926),
    h = n(82554),
    g = n(726521),
    m = n(185625),
    p = n(314897),
    f = n(63063),
    _ = n(981631),
    x = n(388032),
    E = n(942970),
    v = n(10198);
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
function I(e, t) {
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
let j = {
        [h.BM.MESSAGE]: x.t.fuqnBA,
        [h.BM.USER]: x.t.F4jrRU,
        [h.BM.GUILD]: x.t.gH3aMj,
    },
    N = (e) => {
        let { title: t, menuType: i } = e,
            s = (e) => {
                let t = async () => {
                        await (0, m.yL)(i, e);
                    },
                    s = async (t) => await (0, m.RV)(i, e, t),
                    o = (e) => {
                        let t = null == e ? void 0 : e.token;
                        i === h.BM.MESSAGE
                            ? (0, g.eE)(t)
                            : i === h.BM.USER
                              ? (0, g.JM)(t)
                              : i === h.BM.GUILD && (0, g.FO)(t);
                    };
                t(),
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e("56499").then(n.bind(n, 433570));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                I(b({}, n), {
                                    onFormSubmit: s,
                                    onResend: t,
                                    onSuccess: o,
                                    headerText: x.intl.string(x.t.H3Q7U1),
                                    confirmButtonText: x.intl.string(x.t["13ofGh"]),
                                    impression: { impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                                }),
                            );
                    });
            };
        return (0, r.jsxs)(a.P3F, {
            className: E.reportButton,
            onClick: () =>
                void (0, a.ZDy)(async () => {
                    let { default: e } = await n.e("20670").then(n.bind(n, 993018));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            I(b({}, t), {
                                onSuccess: s,
                                headerText: x.intl.string(x.t.ZLRYGR),
                                confirmButtonText: x.intl.string(x.t.PDTjLC),
                            }),
                        );
                }),
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(a.LJT, {
                    size: "sm",
                    color: "currentColor",
                }),
            ],
        });
    },
    S = () => {
        let [e, t] = i.useState(!0),
            [n, l] = i.useState([]),
            h = (0, s.e7)([p.default], () => p.default.isAuthenticated()),
            g = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
            b = () => {
                (0, m.Jj)()
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
                    g || (await o.Z.getLocationMetadata(), o.Z.getExperiments());
                })();
            }, [g]),
            e || !g
                ? (0, r.jsx)(u.ZP, { children: (0, r.jsx)(a.$jN, {}) })
                : null != n &&
                  n.length > 0 &&
                  (0, r.jsxs)(u.ZP, {
                      children: [
                          (0, r.jsx)(u.Dx, {
                              className: v.marginBottom8,
                              children: x.intl.string(x.t.Z11w19),
                          }),
                          (0, r.jsx)(u.DK, {
                              className: v.marginBottom8,
                              children: x.intl.format(x.t["532l+v"], {
                                  supportURL: f.Z.getArticleURL(_.BhN.COPYRIGHT_AND_IP_POLICY),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: E.container,
                              children: n.map((e) =>
                                  null == j[e]
                                      ? null
                                      : (0, r.jsx)(
                                            N,
                                            {
                                                title: x.intl.string(j[e]),
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
