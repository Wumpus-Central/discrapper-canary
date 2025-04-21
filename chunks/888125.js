n.d(t, { w: () => g });
var r = n(200651),
    i = n(192379),
    l = n(780384),
    s = n(481060),
    a = n(410030),
    o = n(434404),
    c = n(388032),
    d = n(747608),
    u = n(935653),
    m = n(449874);
function g(e) {
    let { canManageGuild: t, premiumProgressBarEnabled: n } = e,
        g = (0, a.ZP)(),
        p = i.useCallback((e) => {
            o.Z.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (0, r.jsxs)(s.hjN, {
        className: d.container,
        children: [
            (0, r.jsxs)('div', {
                className: d.column,
                children: [
                    (0, r.jsx)(s.j7V, {
                        className: d.switch,
                        onChange: p,
                        value: n,
                        hideBorder: !0,
                        disabled: !t,
                        children: c.intl.string(c.t.Dl4mJS)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: c.intl.string(c.t.xzHcoa)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.column,
                children: (0, r.jsx)('img', {
                    alt: c.intl.string(c.t.UOJp5e),
                    src: (0, l.ap)(g) ? m : u,
                    className: d.progressBarImage
                })
            })
        ]
    });
}
