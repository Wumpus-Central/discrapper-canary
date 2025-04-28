t.d(n, { Z: () => a });
var i = t(200651);
t(192379);
var o = t(481060),
    l = t(835473),
    r = t(833062),
    s = t(388032);
function a(e) {
    let { applicationIds: n } = e,
        t = (0, l.Z)(n).filter((e) => null != e);
    if (0 === t.length) return null;
    let a = null;
    if (1 === t.length) a = s.intl.format(s.t.wQ6ur6, { applicationName: () => (0, i.jsx)(r.Z, { application: t[0] }, t[0].id) });
    else if (2 === t.length)
        a = s.intl.format(s.t.C98CSE, {
            applicationName: () => (0, i.jsx)(r.Z, { application: t[0] }, t[0].id),
            applicationName2: () => (0, i.jsx)(r.Z, { application: t[1] }, t[1].id)
        });
    else {
        let e = t[t.length - 1],
            n = t.slice(0, -1);
        a = s.intl.format(s.t.UxpwAg, {
            applications: () =>
                n.map((e) =>
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
    return (0, i.jsx)(o.Text, {
        variant: 'text-sm/normal',
        children: a
    });
}
