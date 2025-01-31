n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(835473),
    r = n(833062),
    s = n(388032);
function o(e) {
    let { applicationIds: t } = e,
        n = (0, a.Z)(t).filter((e) => null != e);
    if (0 === n.length) return null;
    let o = null;
    if (1 === n.length) o = s.intl.format(s.t.wQ6ur6, { applicationName: () => (0, i.jsx)(r.Z, { application: n[0] }, n[0].id) });
    else if (2 === n.length)
        o = s.intl.format(s.t.C98CSE, {
            applicationName: () => (0, i.jsx)(r.Z, { application: n[0] }, n[0].id),
            applicationName2: () => (0, i.jsx)(r.Z, { application: n[1] }, n[1].id)
        });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        o = s.intl.format(s.t.UxpwAg, {
            applications: () =>
                t.map((e) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, i.jsx)(r.Z, { application: e }, e.id)
        });
    }
    return (0, i.jsx)(l.Text, {
        variant: 'text-sm/normal',
        children: o
    });
}
