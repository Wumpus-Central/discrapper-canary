n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(993413),
    o = n(388032);
let s = 40;
function l(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: l,
        pendingPronouns: c,
        placeholder: u,
        currentPronouns: d,
        disabled: f = !1,
    } = e;
    function p(e) {
        l(e === d ? void 0 : e);
    }
    return (0, r.jsx)(a.Z, {
        title: t,
        errors: n,
        disabled: f,
        children: (0, r.jsx)(i.oil, {
            placeholder: null != u ? u : o.intl.string(o.t.NPEUUu),
            maxLength: s,
            value: null != c ? c : d,
            onChange: p,
            disabled: f,
        }),
    });
}
