var i = n(200651);
n(192379);
var r = n(873546),
    s = n(481060),
    a = n(270237),
    l = n(584825),
    o = n(892729),
    c = n(949914),
    d = n(388032),
    u = n(535407);
t.Z = (e) => {
    let { onGoBack: t } = e,
        n = (0, o.Z)(),
        { loading: m } = (0, l.sp)(n);
    return ((0, a.Z)(r.tq ? 'role-subscriptions-user-setting' : void 0), m)
        ? (0, i.jsx)(s.Spinner, {})
        : 0 === n.length
          ? null
          : (0, i.jsxs)('div', {
                className: u.__invalid_container,
                children: [
                    (0, i.jsxs)(s.Button, {
                        look: s.Button.Looks.BLANK,
                        innerClassName: u.backButtonContents,
                        onClick: t,
                        children: [
                            (0, i.jsx)(s.ArrowSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.arrowIcon
                            }),
                            d.intl.string(d.t.hqyhKS)
                        ]
                    }),
                    (0, i.jsx)(s.Spacer, { size: 10 }),
                    (0, i.jsx)(s.FormTitle, {
                        tag: 'h1',
                        children: d.intl.string(d.t['KzCF//'])
                    }),
                    (0, i.jsx)(s.Text, {
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
