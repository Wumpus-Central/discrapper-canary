n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(835473),
    o = n(833062),
    a = n(388032);
function s(e) {
    let { applicationIds: t } = e,
        n = (0, l.Z)(t).filter((e) => null != e);
    if (0 === n.length) return null;
    let s = null;
    if (1 === n.length) s = a.intl.format(a.t.wQ6ur6, { applicationName: () => (0, r.jsx)(o.Z, { application: n[0] }, n[0].id) });
    else if (2 === n.length)
        s = a.intl.format(a.t.C98CSE, {
            applicationName: () => (0, r.jsx)(o.Z, { application: n[0] }, n[0].id),
            applicationName2: () => (0, r.jsx)(o.Z, { application: n[1] }, n[1].id)
        });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        s = a.intl.format(a.t.UxpwAg, {
            applications: () =>
                t.map((e) =>
                    (0, r.jsx)(
                        o.Z,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, r.jsx)(o.Z, { application: e }, e.id)
        });
    }
    return (0, r.jsx)(i.Text, {
        variant: 'text-sm/normal',
        children: s
    });
}
