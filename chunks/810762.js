n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(873546),
    s = n(481060),
    a = n(270237),
    l = n(584825),
    o = n(892729),
    c = n(949914),
    d = n(388032),
    u = n(477108);
let m = (e) => {
    let { onGoBack: t } = e,
        n = (0, o.Z)(),
        { loading: m } = (0, l.sp)(n);
    return ((0, a.Z)(i.tq ? 'role-subscriptions-user-setting' : void 0), m)
        ? (0, r.jsx)(s.$jN, {})
        : 0 === n.length
          ? null
          : (0, r.jsxs)('div', {
                className: u.__invalid_container,
                children: [
                    (0, r.jsxs)(s.zxk, {
                        look: s.zxk.Looks.BLANK,
                        innerClassName: u.backButtonContents,
                        onClick: t,
                        children: [
                            (0, r.jsx)(s.ZSh, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.arrowIcon
                            }),
                            d.NW.string(d.t.hqyhKS)
                        ]
                    }),
                    (0, r.jsx)(s.LZC, { size: 10 }),
                    (0, r.jsx)(s.vwX, {
                        tag: 'h1',
                        children: d.NW.string(d.t['KzCF//'])
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        className: u.pageDescription,
                        children: d.NW.string(d.t['Y+ucR0'])
                    }),
                    (0, r.jsx)('div', {
                        className: u.subscriptionsContainer,
                        children: n.map((e) => (0, r.jsx)(c.Z, { subscription: e }, e.id))
                    })
                ]
            });
};
