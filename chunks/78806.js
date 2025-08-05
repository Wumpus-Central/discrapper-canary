r.d(t, { Z: () => o });
var n = r(255367);
r(73800);
var i = r(481060),
    l = r(835473),
    a = r(833062),
    s = r(388032);
function o(e) {
    let { applicationIds: t } = e,
        r = (0, l.Z)(t).filter((e) => null != e);
    if (0 === r.length) return null;
    let o = null;
    if (1 === r.length) o = s.intl.format(s.t.wQ6ur6, { applicationName: () => (0, n.jsx)(a.Z, { application: r[0] }, r[0].id) });
    else if (2 === r.length)
        o = s.intl.format(s.t.C98CSE, {
            applicationName: () => (0, n.jsx)(a.Z, { application: r[0] }, r[0].id),
            applicationName2: () => (0, n.jsx)(a.Z, { application: r[1] }, r[1].id)
        });
    else {
        let e = r[r.length - 1],
            t = r.slice(0, -1);
        o = s.intl.format(s.t.UxpwAg, {
            applications: () =>
                t.map((e) =>
                    (0, n.jsx)(
                        a.Z,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, n.jsx)(a.Z, { application: e }, e.id)
        });
    }
    return (0, n.jsx)(i.Text, {
        variant: 'text-sm/normal',
        children: o
    });
}
