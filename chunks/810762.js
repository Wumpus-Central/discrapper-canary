n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(873546),
    a = n(755721),
    o = n(481060),
    s = n(270237),
    l = n(584825),
    c = n(892729),
    u = n(949914),
    d = n(388032),
    f = n(343447);
let _ = (e) => {
    let { onGoBack: t } = e,
        n = (0, c.Z)(),
        { loading: _ } = (0, l.sp)(n);
    return ((0, s.Z)(i.tq ? "role-subscriptions-user-setting" : void 0), _)
        ? (0, r.jsx)(o.$jN, {})
        : 0 === n.length
          ? null
          : (0, r.jsxs)("div", {
                className: f.__invalid_container,
                children: [
                    (0, r.jsxs)(a.zx, {
                        look: a.zx.Looks.BLANK,
                        innerClassName: f.backButtonContents,
                        onClick: t,
                        children: [
                            (0, r.jsx)(o.ZSh, {
                                size: "md",
                                color: "currentColor",
                                className: f.arrowIcon,
                            }),
                            d.intl.string(d.t.hqyhKS),
                        ],
                    }),
                    (0, r.jsx)(o.LZC, { size: 10 }),
                    (0, r.jsx)(o.vwX, {
                        tag: "h1",
                        children: d.intl.string(d.t["KzCF//"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: f.pageDescription,
                        children: d.intl.string(d.t["Y+ucR0"]),
                    }),
                    (0, r.jsx)("div", {
                        className: f.subscriptionsContainer,
                        children: n.map((e) => (0, r.jsx)(u.Z, { subscription: e }, e.id)),
                    }),
                ],
            });
};
