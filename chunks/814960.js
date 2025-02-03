t.d(n, {
    Gi: () => l,
    YJ: () => d,
    zY: () => u
});
var o = t(200651);
t(192379);
var r = t(481060),
    i = t(476770),
    a = t(592286),
    s = t(388032),
    c = t(484979);
function l(e) {
    let { value: n, placeholder: t, onChange: i, disabled: s, autofocus: c, className: l } = e;
    return (0, o.jsx)(r.oil, {
        inputClassName: l,
        maxLength: a.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: i,
        disabled: s,
        autoFocus: c
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, o.jsx)(i.CA, {
        title: n.label,
        children: (0, o.jsx)(r.Kx8, {
            className: c.disabledFieldBackground,
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
        children: (0, o.jsx)(l, {
            onChange: r,
            value: n.response,
            autofocus: t,
            placeholder: s.intl.string(s.t['Sqn+Wl'])
        })
    });
}
