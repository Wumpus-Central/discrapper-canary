n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    l = n(442837),
    o = n(481060),
    s = n(893776),
    c = n(232567),
    d = n(388905),
    u = n(353926),
    h = n(82554),
    _ = n(726521),
    g = n(185625),
    m = n(314897),
    p = n(63063),
    f = n(981631),
    E = n(388032),
    x = n(57717),
    I = n(232186);
l.ZP.initialize();
let C = (e) => {
        let { title: t, menuType: r } = e,
            l = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            onSuccess: s,
                            headerText: E.intl.string(E.t.ZLRYGR),
                            confirmButtonText: E.intl.string(E.t.PDTjLC),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            impressionName: a.ImpressionNames.URF_ENTER_EMAIL
                        });
                });
            },
            s = (e) => {
                let t = async () => {
                        await (0, g.yL)(r, e);
                    },
                    l = async (t) => await (0, g.RV)(r, e, t),
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
                                onFormSubmit: l,
                                onResend: t,
                                onSuccess: s,
                                headerText: E.intl.string(E.t.H3Q7U1),
                                confirmButtonText: E.intl.string(E.t['13ofGh']),
                                confirmButtonColor: o.zxk.Colors.BRAND,
                                impressionName: a.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                            });
                    });
            };
        return (0, i.jsx)('div', {
            className: x.buttonColumn,
            children: (0, i.jsx)(o.zxk, {
                className: I.__invalid_reportButton,
                fullWidth: !0,
                color: o.zxk.Colors.BRAND,
                onClick: () => l(),
                children: t
            })
        });
    },
    v = () => {
        let [e, t] = r.useState(!0),
            [n, a] = r.useState(!1),
            _ = (0, l.e7)([m.default], () => m.default.isAuthenticated()),
            v = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
            N = () => {
                (0, g.qJ)()
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
                    v || (await s.Z.getLocationMetadata(), s.Z.getExperiments());
                })();
            }, [v]),
            e || !v
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
                                  (0, i.jsx)(C, {
                                      title: E.intl.string(E.t.fuqnBA),
                                      menuType: h.BM.MESSAGE
                                  }),
                                  (0, i.jsx)(C, {
                                      title: E.intl.string(E.t.F4jrRU),
                                      menuType: h.BM.USER
                                  })
                              ]
                          })
                      ]
                  })
        );
    };
