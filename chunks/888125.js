n.d(t, { w: () => p });
var r = n(200651),
    i = n(192379),
    s = n(780384),
    a = n(481060),
    l = n(410030),
    o = n(434404),
    c = n(388032),
    d = n(125048),
    u = n(935653),
    m = n(449874);
function p(e) {
    let { canManageGuild: t, premiumProgressBarEnabled: n } = e,
        p = (0, l.ZP)(),
        g = i.useCallback((e) => {
            o.Z.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (0, r.jsxs)(a.hjN, {
        className: d.container,
        children: [
            (0, r.jsxs)('div', {
                className: d.column,
                children: [
                    (0, r.jsx)(a.j7V, {
                        className: d.switch,
                        onChange: g,
                        value: n,
                        hideBorder: !0,
                        disabled: !t,
                        children: c.NW.string(c.t.Dl4mJS)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: c.NW.string(c.t.xzHcoa)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.column,
                children: (0, r.jsx)('img', {
                    alt: c.NW.string(c.t.UOJp5e),
                    src: (0, s.ap)(p) ? m : u,
                    className: d.progressBarImage
                })
            })
        ]
    });
}
