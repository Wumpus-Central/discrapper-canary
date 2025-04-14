n.d(t, {
    Gi: () => c,
    YJ: () => d,
    zY: () => u
});
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(476770),
    a = n(592286),
    s = n(388032),
    o = n(641198);
function c(e) {
    let { value: t, placeholder: n, onChange: i, disabled: s, autofocus: o, className: c } = e;
    return (0, r.jsx)(l.oil, {
        inputClassName: c,
        maxLength: a.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: s,
        autoFocus: o
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
        title: t.label,
        children: (0, r.jsx)(l.Kx8, {
            className: o.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(c, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: s.NW.string(s.t['Sqn+Wl'])
        })
    });
}
