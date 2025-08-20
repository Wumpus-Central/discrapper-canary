n.d(t, { Z: () => f }), n(642613), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(78839),
    c = n(851718),
    u = n(388032),
    d = n(886112);
function f(e) {
    let { onGoBack: t } = e,
        n = (0, a.Wu)([l.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == (e = l.Z.getActiveApplicationSubscriptions())
                        ? void 0
                        : e.slice().sort((e, t) => {
                              var n, r, i, a;
                              return (
                                  (null != (i = null == (n = e.createdAt) ? void 0 : n.getTime())
                                      ? i
                                      : e.currentPeriodStart.getTime()) -
                                  (null != (a = null == (r = t.createdAt) ? void 0 : r.getTime())
                                      ? a
                                      : t.currentPeriodStart.getTime())
                              );
                          }))
                ? t
                : [];
        }),
        [o, s] = i.useState();
    null == o &&
        (o = (0, r.jsx)(_, {
            onBack: t,
            title: u.intl.string(u.t["DB/m9f"]),
        }));
    let f = (e, t) => {
        s(
            (0, r.jsx)(_, {
                title: e,
                onBack: () => {
                    t(), s(void 0);
                },
            }),
        );
    };
    return (0, r.jsxs)("div", {
        children: [
            o,
            (0, r.jsx)("div", {
                className: d.subscriptionsContainer,
                children: (0, r.jsx)(c.Z, {
                    subscriptions: n,
                    updateHeader: f,
                }),
            }),
        ],
    });
}
function _(e) {
    let { onBack: t, title: n } = e;
    return (0, r.jsxs)("div", {
        className: d.title,
        children: [
            (0, r.jsx)(o.zx, {
                look: o.zx.Looks.BLANK,
                onClick: t,
                size: o.zx.Sizes.ICON,
                children: (0, r.jsx)(s.j9r, { size: "sm" }),
            }),
            (0, r.jsx)(s.X6q, {
                variant: "heading-lg/semibold",
                children: n,
            }),
        ],
    });
}
