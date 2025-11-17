n.d(t, { Z: () => d }), n(642613), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(78839),
    l = n(851718),
    c = n(388032),
    u = n(886112);
function d(e) {
    let { onGoBack: t } = e,
        n = (0, a.Wu)([s.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == (e = s.Z.getActiveApplicationSubscriptions())
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
        [o, d] = i.useState();
    null == o &&
        (o = (0, r.jsx)(f, {
            onBack: t,
            title: c.intl.string(c.t["DB/m9a"]),
        }));
    let _ = (e, t) => {
        d(
            (0, r.jsx)(f, {
                title: e,
                onBack: () => {
                    t(), d(void 0);
                },
            }),
        );
    };
    return (0, r.jsxs)("div", {
        children: [
            o,
            (0, r.jsx)("div", {
                className: u.subscriptionsContainer,
                children: (0, r.jsx)(l.Z, {
                    subscriptions: n,
                    updateHeader: _,
                }),
            }),
        ],
    });
}
function f(e) {
    let { onBack: t, title: n } = e;
    return (0, r.jsxs)("div", {
        className: u.title,
        children: [
            (0, r.jsx)(o.hU, {
                "aria-label": c.intl.string(c.t["13/7kX"]),
                icon: () => (0, r.jsx)(o.j9r, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: n,
            }),
        ],
    });
}
