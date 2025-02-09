s.d(l, { Z: () => c });
var t = s(200651);
s(192379);
var i = s(481060),
    a = s(835473),
    n = s(833062),
    r = s(388032);
function c(e) {
    let { applicationIds: l } = e,
        s = (0, a.Z)(l).filter((e) => null != e);
    if (0 === s.length) return null;
    let c = null;
    if (1 === s.length) c = r.intl.format(r.t.wQ6ur6, { applicationName: () => (0, t.jsx)(n.Z, { application: s[0] }, s[0].id) });
    else if (2 === s.length)
        c = r.intl.format(r.t.C98CSE, {
            applicationName: () => (0, t.jsx)(n.Z, { application: s[0] }, s[0].id),
            applicationName2: () => (0, t.jsx)(n.Z, { application: s[1] }, s[1].id)
        });
    else {
        let e = s[s.length - 1],
            l = s.slice(0, -1);
        c = r.intl.format(r.t.UxpwAg, {
            applications: () =>
                l.map((e) =>
                    (0, t.jsx)(
                        n.Z,
                        {
                            application: e,
                            useComma: !0
                        },
                        e.id
                    )
                ),
            applicationNameLast: () => (0, t.jsx)(n.Z, { application: e }, e.id)
        });
    }
    return (0, t.jsx)(i.Text, {
        variant: 'text-sm/normal',
        children: c
    });
}
