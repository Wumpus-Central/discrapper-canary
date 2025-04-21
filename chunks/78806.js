n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(835473),
    s = n(833062),
    a = n(388032);
function c(e) {
    let { applicationIds: t } = e,
        n = (0, i.Z)(t).filter((e) => null != e);
    if (0 === n.length) return null;
    let c = null;
    if (1 === n.length) c = a.intl.format(a.t.wQ6ur6, { applicationName: () => (0, r.jsx)(s.Z, { application: n[0] }, n[0].id) });
    else if (2 === n.length)
        c = a.intl.format(a.t.C98CSE, {
            applicationName: () => (0, r.jsx)(s.Z, { application: n[0] }, n[0].id),
            applicationName2: () => (0, r.jsx)(s.Z, { application: n[1] }, n[1].id)
        });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        c = a.intl.format(a.t.UxpwAg, {
            applications: () =>
                t.map((e) =>
                    (0, r.jsx)(
                        s.Z,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, r.jsx)(s.Z, { application: e }, e.id)
        });
    }
    return (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        children: c
    });
}
