n(47120);
var i = n(200651),
    r = n(192379),
    s = n(990547),
    l = n(442837),
    o = n(481060),
    a = n(893776),
    c = n(232567),
    d = n(388905),
    u = n(353926),
    h = n(82554),
    g = n(726521),
    m = n(185625),
    f = n(314897),
    p = n(63063),
    x = n(981631),
    _ = n(388032),
    E = n(57717),
    I = n(232186);
l.ZP.initialize();
let N = (e) => {
    let { title: t, menuType: r } = e,
        l = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('93288').then(n.bind(n, 396410));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onSuccess: a,
                        headerText: _.intl.string(_.t.ZLRYGR),
                        confirmButtonText: _.intl.string(_.t.PDTjLC),
                        confirmButtonColor: o.Button.Colors.BRAND,
                        impressionName: s.ImpressionNames.URF_ENTER_EMAIL
                    });
            });
        },
        a = (e) => {
            let t = async () => {
                    await (0, m.yL)(r, e);
                },
                l = async (t) => await (0, m.RV)(r, e, t),
                a = (e) => {
                    let t = null == e ? void 0 : e.token;
                    r === h.BM.MESSAGE ? (0, g.eE)(t) : r === h.BM.USER && (0, g.JM)(t);
                };
            t(),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            onFormSubmit: l,
                            onResend: t,
                            onSuccess: a,
                            headerText: _.intl.string(_.t.H3Q7U1),
                            confirmButtonText: _.intl.string(_.t['13ofGh']),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                        });
                });
        };
    return (0, i.jsx)('div', {
        className: E.buttonColumn,
        children: (0, i.jsx)(o.Button, {
            className: I.__invalid_reportButton,
            fullWidth: !0,
            color: o.Button.Colors.BRAND,
            onClick: () => l(),
            children: t
        })
    });
};
t.Z = () => {
    let [e, t] = r.useState(!0),
        [n, s] = r.useState(!1),
        g = (0, l.e7)([f.default], () => f.default.isAuthenticated()),
        v = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
        C = () => {
            (0, m.qJ)()
                .then(() => {
                    t(!1), s(!0);
                })
                .catch(() => {
                    t(!1), s(!1);
                });
        };
    return (
        r.useEffect(() => {
            g
                ? (t(!0),
                  c
                      .k({ withAnalyticsToken: !0 })
                      .then(() => C())
                      .catch(() => t(!1)))
                : C();
        }, [g]),
        r.useEffect(() => {
            (async () => {
                !v && (await a.Z.getLocationMetadata(), a.Z.getExperiments());
            })();
        }, [v]),
        e || !v
            ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)(o.Spinner, {}) })
            : n &&
              (0, i.jsxs)(d.ZP, {
                  children: [
                      (0, i.jsx)(d.Dx, {
                          className: I.marginBottom8,
                          children: _.intl.string(_.t.Z11w19)
                      }),
                      (0, i.jsx)(d.DK, {
                          className: I.marginBottom8,
                          children: _.intl.format(_.t['532l+v'], { supportURL: p.Z.getArticleURL(x.BhN.COPYRIGHT_AND_IP_POLICY) })
                      }),
                      (0, i.jsxs)('div', {
                          className: E.container,
                          children: [
                              (0, i.jsx)(N, {
                                  title: _.intl.string(_.t.fuqnBA),
                                  menuType: h.BM.MESSAGE
                              }),
                              (0, i.jsx)(N, {
                                  title: _.intl.string(_.t.F4jrRU),
                                  menuType: h.BM.USER
                              })
                          ]
                      })
                  ]
              })
    );
};
