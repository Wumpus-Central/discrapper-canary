r.d(t, {
    Gi: () => c,
    YJ: () => u,
    zY: () => d
});
var n = r(200651);
r(192379);
var i = r(481060),
    o = r(476770),
    l = r(592286),
    s = r(388032),
    a = r(641198);
function c(e) {
    let { value: t, placeholder: r, onChange: o, disabled: s, autofocus: a, className: c } = e;
    return (0, n.jsx)(i.oil, {
        inputClassName: c,
        maxLength: l.tL,
        value: null != t ? t : '',
        placeholder: r,
        onChange: o,
        disabled: s,
        autoFocus: a
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, n.jsx)(o.CA, {
        title: t.label,
        children: (0, n.jsx)(i.Kx8, {
            className: a.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function d(e) {
    let { formField: t, autofocus: r, onChange: i } = e;
    return (0, n.jsx)(o.hK, {
        title: t.label,
        children: (0, n.jsx)(c, {
            onChange: i,
            value: t.response,
            autofocus: r,
            placeholder: s.NW.string(s.t['Sqn+Wl'])
        })
    });
}
