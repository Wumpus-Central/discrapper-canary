n.d(t, { Z: () => u }), n(642613), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(78839),
    o = n(851718),
    c = n(388032),
    d = n(179867);
function u(e) {
    let { onGoBack: t } = e,
        n = (0, s.Wu)([a.ZP], () => {
            var e, t;
            return null !=
                (t =
                    null == (e = a.ZP.getActiveApplicationSubscriptions())
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, i, r, s;
                              return (null != (r = null == (n = e.createdAt) ? void 0 : n.getTime()) ? r : e.currentPeriodStart.getTime()) - (null != (s = null == (i = t.createdAt) ? void 0 : i.getTime()) ? s : t.currentPeriodStart.getTime());
                          }))
                ? t
                : [];
        }),
        [l, u] = r.useState();
    return (
        null == l &&
            (l = (0, i.jsx)(m, {
                onBack: t,
                title: c.intl.string(c.t['DB/m9f'])
            })),
        (0, i.jsxs)('div', {
            children: [
                l,
                (0, i.jsx)('div', {
                    className: d.subscriptionsContainer,
                    children: (0, i.jsx)(o.Z, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            u(
                                (0, i.jsx)(m, {
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
    return (0, i.jsxs)('div', {
        className: d.title,
        children: [
            (0, i.jsx)(l.zxk, {
                look: l.zxk.Looks.BLANK,
                onClick: t,
                size: l.zxk.Sizes.ICON,
                children: (0, i.jsx)(l.j9r, { size: 'sm' })
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                children: n
            })
        ]
    });
}
