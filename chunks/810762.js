n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(873546),
    r = n(481060),
    l = n(270237),
    a = n(584825),
    o = n(892729),
    c = n(949914),
    d = n(388032),
    u = n(326839);
let m = (e) => {
    let { onGoBack: t } = e,
        n = (0, o.Z)(),
        { loading: m } = (0, a.sp)(n);
    return ((0, l.Z)(s.tq ? 'role-subscriptions-user-setting' : void 0), m)
        ? (0, i.jsx)(r.$jN, {})
        : 0 === n.length
          ? null
          : (0, i.jsxs)('div', {
                className: u.__invalid_container,
                children: [
                    (0, i.jsxs)(r.zxk, {
                        look: r.zxk.Looks.BLANK,
                        innerClassName: u.backButtonContents,
                        onClick: t,
                        children: [
                            (0, i.jsx)(r.ZSh, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.arrowIcon
                            }),
                            d.intl.string(d.t.hqyhKS)
                        ]
                    }),
                    (0, i.jsx)(r.LZC, { size: 10 }),
                    (0, i.jsx)(r.vwX, {
                        tag: 'h1',
                        children: d.intl.string(d.t['KzCF//'])
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        className: u.pageDescription,
                        children: d.intl.string(d.t['Y+ucR0'])
                    }),
                    (0, i.jsx)('div', {
                        className: u.subscriptionsContainer,
                        children: n.map((e) => (0, i.jsx)(c.Z, { subscription: e }, e.id))
                    })
                ]
            });
};
