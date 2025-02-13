n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(442837),
    o = n(481060),
    s = n(893776),
    c = n(232567),
    d = n(388905),
    u = n(353926),
    h = n(82554),
    _ = n(726521),
    m = n(185625),
    g = n(314897),
    p = n(63063),
    f = n(981631),
    E = n(388032),
    x = n(637213),
    I = n(483938);
a.ZP.initialize();
let v = (e) => {
        let { title: t, menuType: r } = e,
            a = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            onSuccess: s,
                            headerText: E.intl.string(E.t.ZLRYGR),
                            confirmButtonText: E.intl.string(E.t.PDTjLC),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            impressionName: l.ImpressionNames.URF_ENTER_EMAIL
                        });
                });
            },
            s = (e) => {
                let t = async () => {
                        await (0, m.yL)(r, e);
                    },
                    a = async (t) => await (0, m.RV)(r, e, t),
                    s = (e) => {
                        let t = null == e ? void 0 : e.token;
                        r === h.BM.MESSAGE ? (0, _.eE)(t) : r === h.BM.USER && (0, _.JM)(t);
                    };
                t(),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                onFormSubmit: a,
                                onResend: t,
                                onSuccess: s,
                                headerText: E.intl.string(E.t.H3Q7U1),
                                confirmButtonText: E.intl.string(E.t['13ofGh']),
                                confirmButtonColor: o.zxk.Colors.BRAND,
                                impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                            });
                    });
            };
        return (0, i.jsx)('div', {
            className: x.buttonColumn,
            children: (0, i.jsx)(o.zxk, {
                className: I.__invalid_reportButton,
                fullWidth: !0,
                color: o.zxk.Colors.BRAND,
                onClick: () => a(),
                children: t
            })
        });
    },
    C = () => {
        let [e, t] = r.useState(!0),
            [n, l] = r.useState(!1),
            _ = (0, a.e7)([g.default], () => g.default.isAuthenticated()),
            C = (0, a.e7)([u.Z], () => u.Z.hasLoadedExperiments),
            N = () => {
                (0, m.qJ)()
                    .then(() => {
                        t(!1), l(!0);
                    })
                    .catch(() => {
                        t(!1), l(!1);
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
                    C || (await s.Z.getLocationMetadata(), s.Z.getExperiments());
                })();
            }, [C]),
            e || !C
                ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)(o.$jN, {}) })
                : n &&
                  (0, i.jsxs)(d.ZP, {
                      children: [
                          (0, i.jsx)(d.Dx, {
                              className: I.marginBottom8,
                              children: E.intl.string(E.t.Z11w19)
                          }),
                          (0, i.jsx)(d.DK, {
                              className: I.marginBottom8,
                              children: E.intl.format(E.t['532l+v'], { supportURL: p.Z.getArticleURL(f.BhN.COPYRIGHT_AND_IP_POLICY) })
                          }),
                          (0, i.jsxs)('div', {
                              className: x.container,
                              children: [
                                  (0, i.jsx)(v, {
                                      title: E.intl.string(E.t.fuqnBA),
                                      menuType: h.BM.MESSAGE
                                  }),
                                  (0, i.jsx)(v, {
                                      title: E.intl.string(E.t.F4jrRU),
                                      menuType: h.BM.USER
                                  })
                              ]
                          })
                      ]
                  })
        );
    };
