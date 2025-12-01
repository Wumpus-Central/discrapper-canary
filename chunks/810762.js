n.d(t, { Z: () => p });
var r = n(54381),
    i = n(873546),
    a = n(159691),
    o = n(481060),
    s = n(270237),
    l = n(584825),
    c = n(892729),
    u = n(949914),
    d = n(388032),
    f = n(343447);
let p = (e) => {
    let { onGoBack: t } = e,
        n = (0, c.Z)(),
        { loading: p } = (0, l.sp)(n);
    return ((0, s.Z)(i.tq ? "role-subscriptions-user-setting" : void 0), p)
        ? (0, r.jsx)(o.$jN, {})
        : 0 === n.length
          ? null
          : (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.zxk, {
                        text: d.intl.string(d.t.hqyhKQ),
                        icon: o.wj7,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, r.jsx)(o.LZC, { size: 10 }),
                    (0, r.jsx)(o.C3N, {
                        label: d.intl.string(d.t["KzCF/6"]),
                        description: d.intl.string(d.t["Y+ucR7"]),
                        children: (0, r.jsx)("div", {
                            className: f.subscriptionsContainer,
                            children: n.map((e) => (0, r.jsx)(u.Z, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
