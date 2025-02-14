n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    l = n(442837),
    s = n(481060),
    o = n(893776),
    c = n(232567),
    d = n(388905),
    u = n(353926),
    h = n(82554),
    _ = n(726521),
    m = n(185625),
    g = n(314897),
    p = n(63063),
    f = n(981631),
    x = n(388032),
    E = n(637213),
    I = n(483938);
l.ZP.initialize();
let v = (e) => {
        let { title: t, menuType: r } = e,
            l = () => {
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            onSuccess: o,
                            headerText: x.intl.string(x.t.ZLRYGR),
                            confirmButtonText: x.intl.string(x.t.PDTjLC),
                            confirmButtonColor: s.zxk.Colors.BRAND,
                            impressionName: a.ImpressionNames.URF_ENTER_EMAIL
                        });
                });
            },
            o = (e) => {
                let t = async () => {
                        await (0, m.yL)(r, e);
                    },
                    l = async (t) => await (0, m.RV)(r, e, t),
                    o = (e) => {
                        let t = null == e ? void 0 : e.token;
                        r === h.BM.MESSAGE ? (0, _.eE)(t) : r === h.BM.USER && (0, _.JM)(t);
                    };
                t(),
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                onFormSubmit: l,
                                onResend: t,
                                onSuccess: o,
                                headerText: x.intl.string(x.t.H3Q7U1),
                                confirmButtonText: x.intl.string(x.t['13ofGh']),
                                confirmButtonColor: s.zxk.Colors.BRAND,
                                impressionName: a.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                            });
                    });
            };
        return (0, i.jsx)('div', {
            className: E.buttonColumn,
            children: (0, i.jsx)(s.zxk, {
                className: I.__invalid_reportButton,
                fullWidth: !0,
                color: s.zxk.Colors.BRAND,
                onClick: () => l(),
                children: t
            })
        });
    },
    C = () => {
        let [e, t] = r.useState(!0),
            [n, a] = r.useState(!1),
            _ = (0, l.e7)([g.default], () => g.default.isAuthenticated()),
            C = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
            N = () => {
                (0, m.qJ)()
                    .then(() => {
                        t(!1), a(!0);
                    })
                    .catch(() => {
                        t(!1), a(!1);
                    });
            };
        return (
            r.useEffect(() => {
                _
                    ? (t(!0),
                      c
                          .k({ withAnalyticsToken: !0 })
                          .then(() => N())
                          .catch(() => t(!1)))
                    : N();
            }, [_]),
            r.useEffect(() => {
                (async () => {
                    C || (await o.Z.getLocationMetadata(), o.Z.getExperiments());
                })();
            }, [C]),
            e || !C
                ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)(s.$jN, {}) })
                : n &&
                  (0, i.jsxs)(d.ZP, {
                      children: [
                          (0, i.jsx)(d.Dx, {
                              className: I.marginBottom8,
                              children: x.intl.string(x.t.Z11w19)
                          }),
                          (0, i.jsx)(d.DK, {
                              className: I.marginBottom8,
                              children: x.intl.format(x.t['532l+v'], { supportURL: p.Z.getArticleURL(f.BhN.COPYRIGHT_AND_IP_POLICY) })
                          }),
                          (0, i.jsxs)('div', {
                              className: E.container,
                              children: [
                                  (0, i.jsx)(v, {
                                      title: x.intl.string(x.t.fuqnBA),
                                      menuType: h.BM.MESSAGE
                                  }),
                                  (0, i.jsx)(v, {
                                      title: x.intl.string(x.t.F4jrRU),
                                      menuType: h.BM.USER
                                  })
                              ]
                          })
                      ]
                  })
        );
    };
