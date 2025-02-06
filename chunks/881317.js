n.d(t, { Z: () => N }), n(47120);
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
    g = n(185625),
    p = n(314897),
    m = n(63063),
    f = n(981631),
    x = n(388032),
    E = n(57717),
    I = n(232186);
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
                            headerText: x.intl.string(x.t.ZLRYGR),
                            confirmButtonText: x.intl.string(x.t.PDTjLC),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            impressionName: l.ImpressionNames.URF_ENTER_EMAIL
                        });
                });
            },
            s = (e) => {
                let t = async () => {
                        await (0, g.yL)(r, e);
                    },
                    a = async (t) => await (0, g.RV)(r, e, t),
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
                                headerText: x.intl.string(x.t.H3Q7U1),
                                confirmButtonText: x.intl.string(x.t['13ofGh']),
                                confirmButtonColor: o.zxk.Colors.BRAND,
                                impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                            });
                    });
            };
        return (0, i.jsx)('div', {
            className: E.buttonColumn,
            children: (0, i.jsx)(o.zxk, {
                className: I.__invalid_reportButton,
                fullWidth: !0,
                color: o.zxk.Colors.BRAND,
                onClick: () => a(),
                children: t
            })
        });
    },
    N = () => {
        let [e, t] = r.useState(!0),
            [n, l] = r.useState(!1),
            _ = (0, a.e7)([p.default], () => p.default.isAuthenticated()),
            N = (0, a.e7)([u.Z], () => u.Z.hasLoadedExperiments),
            b = () => {
                (0, g.qJ)()
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
                          .then(() => b())
                          .catch(() => t(!1)))
                    : b();
            }, [_]),
            r.useEffect(() => {
                (async () => {
                    N || (await s.Z.getLocationMetadata(), s.Z.getExperiments());
                })();
            }, [N]),
            e || !N
                ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)(o.$jN, {}) })
                : n &&
                  (0, i.jsxs)(d.ZP, {
                      children: [
                          (0, i.jsx)(d.Dx, {
                              className: I.marginBottom8,
                              children: x.intl.string(x.t.Z11w19)
                          }),
                          (0, i.jsx)(d.DK, {
                              className: I.marginBottom8,
                              children: x.intl.format(x.t['532l+v'], { supportURL: m.Z.getArticleURL(f.BhN.COPYRIGHT_AND_IP_POLICY) })
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
