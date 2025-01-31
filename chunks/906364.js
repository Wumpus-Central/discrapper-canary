n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(993413),
    l = n(388032);
function a(e) {
    let { sectionTitle: t, errors: n, onPronounsChange: a, pendingPronouns: o, placeholder: c, currentPronouns: d, disabled: u = !1 } = e;
    return (0, i.jsx)(r.Z, {
        title: t,
        errors: n,
        disabled: u,
        children: (0, i.jsx)(s.oil, {
            placeholder: null != c ? c : l.intl.string(l.t.NPEUUl),
            maxLength: 40,
            value: null != o ? o : d,
            onChange: function (e) {
                a(e === d ? void 0 : e);
            },
            disabled: u
        })
    });
}
