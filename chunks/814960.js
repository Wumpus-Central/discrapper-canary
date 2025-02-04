t.d(n, {
    Gi: () => c,
    YJ: () => d,
    zY: () => u
});
var o = t(200651);
t(192379);
var r = t(481060),
    i = t(476770),
    a = t(592286),
    l = t(388032),
    s = t(484979);
function c(e) {
    let { value: n, placeholder: t, onChange: i, disabled: l, autofocus: s, className: c } = e;
    return (0, o.jsx)(r.oil, {
        inputClassName: c,
        maxLength: a.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: i,
        disabled: l,
        autoFocus: s
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, o.jsx)(i.CA, {
        title: n.label,
        children: (0, o.jsx)(r.Kx8, {
            className: s.disabledFieldBackground,
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, o.jsx)(i.hK, {
        title: n.label,
        children: (0, o.jsx)(c, {
            onChange: r,
            value: n.response,
            autofocus: t,
            placeholder: l.intl.string(l.t['Sqn+Wl'])
        })
    });
}
