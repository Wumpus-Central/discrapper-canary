r.d(t, { Z: () => c });
var n = r(200651);
r(192379);
var i = r(481060),
    s = r(835473),
    l = r(833062),
    a = r(388032);
function c(e) {
    let { applicationIds: t } = e,
        r = (0, s.Z)(t).filter((e) => null != e);
    if (0 === r.length) return null;
    let c = null;
    if (1 === r.length) c = a.intl.format(a.t.wQ6ur6, { applicationName: () => (0, n.jsx)(l.Z, { application: r[0] }, r[0].id) });
    else if (2 === r.length)
        c = a.intl.format(a.t.C98CSE, {
            applicationName: () => (0, n.jsx)(l.Z, { application: r[0] }, r[0].id),
            applicationName2: () => (0, n.jsx)(l.Z, { application: r[1] }, r[1].id)
        });
    else {
        let e = r[r.length - 1],
            t = r.slice(0, -1);
        c = a.intl.format(a.t.UxpwAg, {
            applications: () =>
                t.map((e) =>
                    (0, n.jsx)(
                        l.Z,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, n.jsx)(l.Z, { application: e }, e.id)
        });
    }
    return (0, n.jsx)(i.Text, {
        variant: 'text-sm/normal',
        children: c
    });
}
