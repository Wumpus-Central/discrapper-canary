(n.d(t, { Z: () => m }), n(642613), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(755721),
    l = n(481060),
    o = n(78839),
    c = n(851718),
    d = n(388032),
    u = n(179867);
function m(e) {
    let { onGoBack: t } = e,
        n = (0, s.Wu)([o.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == (e = o.Z.getActiveApplicationSubscriptions())
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, i, r, s;
                              return (null != (r = null == (n = e.createdAt) ? void 0 : n.getTime()) ? r : e.currentPeriodStart.getTime()) - (null != (s = null == (i = t.createdAt) ? void 0 : i.getTime()) ? s : t.currentPeriodStart.getTime());
                          }))
                ? t
                : [];
        }),
        [a, l] = r.useState();
    return (
        null == a &&
            (a = (0, i.jsx)(p, {
                onBack: t,
                title: d.intl.string(d.t['DB/m9f'])
            })),
        (0, i.jsxs)('div', {
            children: [
                a,
                (0, i.jsx)('div', {
                    className: u.subscriptionsContainer,
                    children: (0, i.jsx)(c.Z, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            l(
                                (0, i.jsx)(p, {
                                    title: e,
                                    onBack: () => {
                                        (t(), l(void 0));
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
function p(e) {
    let { onBack: t, title: n } = e;
    return (0, i.jsxs)('div', {
        className: u.title,
        children: [
            (0, i.jsx)(a.zx, {
                look: a.zx.Looks.BLANK,
                onClick: t,
                size: a.zx.Sizes.ICON,
                children: (0, i.jsx)(l.j9r, { size: 'sm' })
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                children: n
            })
        ]
    });
}
