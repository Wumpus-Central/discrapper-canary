n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(835473),
    a = n(925329),
    s = n(388032),
    o = n(630162);
let c = (e) => {
    let { application: t, useComma: n = !1 } = e;
    return (0, i.jsxs)('div', {
        className: o.applicationNameWrapper,
        children: [
            (0, i.jsx)(
                a.Z,
                {
                    className: o.gameIcon,
                    game: t,
                    size: a.Z.Sizes.XXSMALL
                },
                t.id
            ),
            (0, i.jsx)('strong', { children: ''.concat(t.name).concat(n ? ', ' : '') })
        ]
    });
};
function d(e) {
    let { applicationIds: t } = e,
        n = (0, r.Z)(t).filter((e) => null != e);
    if (0 === n.length) return null;
    let a = null;
    if (1 === n.length) a = s.intl.format(s.t.wQ6ur6, { applicationName: () => (0, i.jsx)(c, { application: n[0] }) });
    else if (2 === n.length)
        a = s.intl.format(s.t.C98CSE, {
            applicationName: () => (0, i.jsx)(c, { application: n[0] }),
            applicationName2: () => (0, i.jsx)(c, { application: n[1] })
        });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        a = s.intl.format(s.t.UxpwAg, {
            applications: () =>
                t.map((e) =>
                    (0, i.jsx)(
                        c,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, i.jsx)(c, { application: e })
        });
    }
    return (0, i.jsx)(l.Text, {
        variant: 'text-sm/normal',
        children: a
    });
}
