n.d(t, {
    Gi: () => c,
    YJ: () => d,
    zY: () => u
});
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(476770),
    o = n(592286),
    l = n(388032),
    s = n(641198);
function c(e) {
    let { value: t, placeholder: n, onChange: i, disabled: l, autofocus: s, className: c } = e;
    return (0, r.jsx)(a.oil, {
        inputClassName: c,
        maxLength: o.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: l,
        autoFocus: s
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
        title: t.label,
        children: (0, r.jsx)(a.Kx8, {
            className: s.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: a } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(c, {
            onChange: a,
            value: t.response,
            autofocus: n,
            placeholder: l.NW.string(l.t['Sqn+Wl'])
        })
    });
}
