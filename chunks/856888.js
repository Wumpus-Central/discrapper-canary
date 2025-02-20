n.d(t, { Z: () => p }), n(230036), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(325997),
    o = n(78839),
    c = n(270144),
    d = n(851718),
    u = n(238847),
    m = n(388032),
    g = n(860461);
function p(e) {
    let { onGoBack: t } = e,
        n = (0, s.Wu)([o.ZP], () => {
            var e, t;
            return null !==
                (t =
                    null === (e = o.ZP.getActiveApplicationSubscriptions()) || void 0 === e
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, r, i, s;
                              return (null !== (i = null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : e.currentPeriodStart.getTime()) - (null !== (s = null === (r = t.createdAt) || void 0 === r ? void 0 : r.getTime()) && void 0 !== s ? s : t.currentPeriodStart.getTime());
                          })) && void 0 !== t
                ? t
                : [];
        }),
        { enabled: a } = l.m.useExperiment({ location: 'UserSettingsApplicationSubscriptions' }),
        [c, u] = i.useState();
    return (
        null == c &&
            (c = (0, r.jsx)(h, {
                onBack: t,
                title: m.NW.string(m.t['DB/m9f'])
            })),
        (0, r.jsxs)('div', {
            children: [
                c,
                (0, r.jsx)('div', {
                    className: g.subscriptionsContainer,
                    children: a
                        ? (0, r.jsx)(d.Z, {
                              subscriptions: n,
                              updateHeader: (e, t) => {
                                  u(
                                      (0, r.jsx)(h, {
                                          title: e,
                                          onBack: () => {
                                              t(), u(void 0);
                                          }
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(f, { subscriptions: n })
                })
            ]
        })
    );
}
function h(e) {
    let { onBack: t, title: n } = e;
    return (0, r.jsxs)('div', {
        className: g.title,
        children: [
            (0, r.jsx)(a.zxk, {
                look: a.zxk.Looks.BLANK,
                onClick: t,
                size: a.zxk.Sizes.ICON,
                children: (0, r.jsx)(a.j9r, { size: 'sm' })
            }),
            (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/semibold',
                children: n
            })
        ]
    });
}
function f(e) {
    let { subscriptions: t } = e,
        { loading: n } = (0, c.sp)(t),
        { loadState: i } = (0, c.qz)();
    return n || i !== c.jd.LOADED ? (0, r.jsx)(a.$jN, {}) : t.map((e) => (0, r.jsx)(u.Z, { subscription: e }, e.id));
}
