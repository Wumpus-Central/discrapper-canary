n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(835473),
    a = n(833062),
    s = n(388032);
function o(e) {
    let { applicationIds: t } = e,
        n = (0, l.Z)(t).filter((e) => null != e);
    if (0 === n.length) return null;
    let o = null;
    if (1 === n.length)
        o = s.intl.format(s.t.wQ6urw, { applicationName: () => (0, r.jsx)(a.Z, { application: n[0] }, n[0].id) });
    else if (2 === n.length)
        o = s.intl.format(s.t.C98CSN, {
            applicationName: () => (0, r.jsx)(a.Z, { application: n[0] }, n[0].id),
            applicationName2: () => (0, r.jsx)(a.Z, { application: n[1] }, n[1].id),
        });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        o = s.intl.format(s.t.UxpwAh, {
            applications: () =>
                t.map((e) =>
                    (0, r.jsx)(
                        a.Z,
                        {
                            application: e,
                            useComma: !0,
                        },
                        e.id,
                    ),
                ),
            applicationNameLast: () => (0, r.jsx)(a.Z, { application: e }, e.id),
        });
    }
    return (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: o,
    });
}
