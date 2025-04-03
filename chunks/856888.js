n.d(t, { Z: () => u }), n(230036), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(78839),
    o = n(851718),
    c = n(388032),
    d = n(179867);
function u(e) {
    let { onGoBack: t } = e,
        n = (0, s.Wu)([l.ZP], () => {
            var e, t;
            return null !=
                (t =
                    null == (e = l.ZP.getActiveApplicationSubscriptions())
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, r, i, s;
                              return (null != (i = null == (n = e.createdAt) ? void 0 : n.getTime()) ? i : e.currentPeriodStart.getTime()) - (null != (s = null == (r = t.createdAt) ? void 0 : r.getTime()) ? s : t.currentPeriodStart.getTime());
                          }))
                ? t
                : [];
        }),
        [a, u] = i.useState();
    return (
        null == a &&
            (a = (0, r.jsx)(m, {
                onBack: t,
                title: c.NW.string(c.t['DB/m9f'])
            })),
        (0, r.jsxs)('div', {
            children: [
                a,
                (0, r.jsx)('div', {
                    className: d.subscriptionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            u(
                                (0, r.jsx)(m, {
                                    title: e,
                                    onBack: () => {
                                        t(), u(void 0);
                                    }
                                })
                            );
                        }
                    })
                })
            ]
        })
    );
}
function m(e) {
    let { onBack: t, title: n } = e;
    return (0, r.jsxs)('div', {
        className: d.title,
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
