n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(993413),
    a = n(388032);
function l(e) {
    let { sectionTitle: t, errors: n, onPronounsChange: l, pendingPronouns: o, placeholder: c, currentPronouns: d, disabled: u = !1 } = e;
    return (0, i.jsx)(s.Z, {
        title: t,
        errors: n,
        disabled: u,
        children: (0, i.jsx)(r.TextInput, {
            placeholder: null != c ? c : a.intl.string(a.t.NPEUUl),
            maxLength: 40,
            value: null != o ? o : d,
            onChange: function (e) {
                l(e === d ? void 0 : e);
            },
            disabled: u
        })
    });
}
