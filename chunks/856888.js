n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(325997),
    o = n(78839),
    c = n(270144),
    d = n(851718),
    u = n(238847),
    h = n(388032),
    m = n(188645);
function g(e) {
    let { onGoBack: t } = e,
        n = (0, l.Wu)([o.ZP], () => {
            var e, t;
            return null !==
                (t =
                    null === (e = o.ZP.getActiveApplicationSubscriptions()) || void 0 === e
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, i, s, l;
                              return (null !== (s = null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== s ? s : e.currentPeriodStart.getTime()) - (null !== (l = null === (i = t.createdAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== l ? l : t.currentPeriodStart.getTime());
                          })) && void 0 !== t
                ? t
                : [];
        }),
        { enabled: r } = a.m.useExperiment({ location: 'UserSettingsApplicationSubscriptions' }),
        [c, u] = s.useState();
    return (
        null == c &&
            (c = (0, i.jsx)(x, {
                onBack: t,
                title: h.intl.string(h.t['DB/m9f'])
            })),
        (0, i.jsxs)('div', {
            children: [
                c,
                (0, i.jsx)('div', {
                    className: m.subscriptionsContainer,
                    children: r
                        ? (0, i.jsx)(d.Z, {
                              subscriptions: n,
                              updateHeader: (e, t) => {
                                  u(
                                      (0, i.jsx)(x, {
                                          title: e,
                                          onBack: () => {
                                              t(), u(void 0);
                                          }
                                      })
                                  );
                              }
                          })
                        : (0, i.jsx)(_, { subscriptions: n })
                })
            ]
        })
    );
}
function x(e) {
    let { onBack: t, title: n } = e;
    return (0, i.jsxs)('div', {
        className: m.title,
        children: [
            (0, i.jsx)(r.zxk, {
                look: r.zxk.Looks.BLANK,
                onClick: t,
                size: r.zxk.Sizes.ICON,
                children: (0, i.jsx)(r.j9r, { size: 'sm' })
            }),
            (0, i.jsx)(r.X6q, {
                variant: 'heading-lg/semibold',
                children: n
            })
        ]
    });
}
function _(e) {
    let { subscriptions: t } = e,
        { loading: n } = (0, c.sp)(t),
        { loadState: s } = (0, c.qz)();
    return n || s !== c.jd.LOADED ? (0, i.jsx)(r.$jN, {}) : t.map((e) => (0, i.jsx)(u.Z, { subscription: e }, e.id));
}
