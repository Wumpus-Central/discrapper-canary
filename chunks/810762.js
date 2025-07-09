n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(873546),
    s = n(755721),
    a = n(481060),
    l = n(270237),
    o = n(584825),
    c = n(892729),
    d = n(949914),
    u = n(388032),
    m = n(477108);
let p = (e) => {
    let { onGoBack: t } = e,
        n = (0, c.Z)(),
        { loading: p } = (0, o.sp)(n);
    return ((0, l.Z)(r.tq ? 'role-subscriptions-user-setting' : void 0), p)
        ? (0, i.jsx)(a.$jN, {})
        : 0 === n.length
          ? null
          : (0, i.jsxs)('div', {
                className: m.__invalid_container,
                children: [
                    (0, i.jsxs)(s.zx, {
                        look: s.zx.Looks.BLANK,
                        innerClassName: m.backButtonContents,
                        onClick: t,
                        children: [
                            (0, i.jsx)(a.ZSh, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.arrowIcon
                            }),
                            u.intl.string(u.t.hqyhKS)
                        ]
                    }),
                    (0, i.jsx)(a.LZC, { size: 10 }),
                    (0, i.jsx)(a.vwX, {
                        tag: 'h1',
                        children: u.intl.string(u.t['KzCF//'])
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        className: m.pageDescription,
                        children: u.intl.string(u.t['Y+ucR0'])
                    }),
                    (0, i.jsx)('div', {
                        className: m.subscriptionsContainer,
                        children: n.map((e) => (0, i.jsx)(d.Z, { subscription: e }, e.id))
                    })
                ]
            });
};
