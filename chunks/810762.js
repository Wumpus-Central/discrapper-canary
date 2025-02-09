n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(873546),
    l = n(481060),
    r = n(270237),
    a = n(584825),
    o = n(892729),
    c = n(949914),
    d = n(388032),
    u = n(57809);
let h = (e) => {
    let { onGoBack: t } = e,
        n = (0, o.Z)(),
        { loading: h } = (0, a.sp)(n);
    return ((0, r.Z)(s.tq ? 'role-subscriptions-user-setting' : void 0), h)
        ? (0, i.jsx)(l.$jN, {})
        : 0 === n.length
          ? null
          : (0, i.jsxs)('div', {
                className: u.__invalid_container,
                children: [
                    (0, i.jsxs)(l.zxk, {
                        look: l.zxk.Looks.BLANK,
                        innerClassName: u.backButtonContents,
                        onClick: t,
                        children: [
                            (0, i.jsx)(l.ZSh, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.arrowIcon
                            }),
                            d.intl.string(d.t.hqyhKS)
                        ]
                    }),
                    (0, i.jsx)(l.LZC, { size: 10 }),
                    (0, i.jsx)(l.vwX, {
                        tag: 'h1',
                        children: d.intl.string(d.t['KzCF//'])
                    }),
                    (0, i.jsx)(l.Text, {
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
