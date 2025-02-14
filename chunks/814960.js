n.d(t, {
    Gi: () => c,
    YJ: () => d,
    zY: () => u
});
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(476770),
    a = n(592286),
    s = n(388032),
    l = n(35761);
function c(e) {
    let { value: t, placeholder: n, onChange: i, disabled: s, autofocus: l, className: c } = e;
    return (0, o.jsx)(r.oil, {
        inputClassName: c,
        maxLength: a.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: s,
        autoFocus: l
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, o.jsx)(i.CA, {
        title: t.label,
        children: (0, o.jsx)(r.Kx8, {
            className: l.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: r } = e;
    return (0, o.jsx)(i.hK, {
        title: t.label,
        children: (0, o.jsx)(c, {
            onChange: r,
            value: t.response,
            autofocus: n,
            placeholder: s.intl.string(s.t['Sqn+Wl'])
        })
    });
}
