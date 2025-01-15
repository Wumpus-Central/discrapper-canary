n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(325997),
    o = n(78839),
    c = n(270144),
    d = n(851718),
    u = n(238847),
    m = n(388032),
    g = n(410507);
function h(e) {
    let { onGoBack: t } = e,
        n = (0, r.Wu)([o.ZP], () => {
            var e, t;
            return null !==
                (t =
                    null === (e = o.ZP.getActiveApplicationSubscriptions()) || void 0 === e
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, i, s, r;
                              return (null !== (s = null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== s ? s : e.currentPeriodStart.getTime()) - (null !== (r = null === (i = t.createdAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== r ? r : t.currentPeriodStart.getTime());
                          })) && void 0 !== t
                ? t
                : [];
        }),
        { enabled: a } = l.m.useExperiment({ location: 'UserSettingsApplicationSubscriptions' }),
        [c, u] = s.useState();
    return (
        null == c &&
            (c = (0, i.jsx)(p, {
                onBack: t,
                title: m.intl.string(m.t['DB/m9f'])
            })),
        (0, i.jsxs)('div', {
            children: [
                c,
                (0, i.jsx)('div', {
                    className: g.subscriptionsContainer,
                    children: a
                        ? (0, i.jsx)(d.Z, {
                              subscriptions: n,
                              updateHeader: (e, t) => {
                                  u(
                                      (0, i.jsx)(p, {
                                          title: e,
                                          onBack: () => {
                                              t(), u(void 0);
                                          }
                                      })
                                  );
                              }
                          })
                        : (0, i.jsx)(x, { subscriptions: n })
                })
            ]
        })
    );
}
function p(e) {
    let { onBack: t, title: n } = e;
    return (0, i.jsxs)('div', {
        className: g.title,
        children: [
            (0, i.jsx)(a.Button, {
                look: a.Button.Looks.BLANK,
                onClick: t,
                size: a.Button.Sizes.ICON,
                children: (0, i.jsx)(a.ArrowLargeLeftIcon, { size: 'sm' })
            }),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-lg/semibold',
                children: n
            })
        ]
    });
}
function x(e) {
    let { subscriptions: t } = e,
        { loading: n } = (0, c.sp)(t),
        { loadState: s } = (0, c.qz)();
    return n || s !== c.jd.LOADED ? (0, i.jsx)(a.Spinner, {}) : t.map((e) => (0, i.jsx)(u.Z, { subscription: e }, e.id));
}
