t.d(n, {
    Gi: function () {
        return c;
    },
    YJ: function () {
        return a;
    },
    zY: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(476770),
    s = t(592286),
    o = t(388032),
    u = t(484979);
function c(e) {
    let { value: n, placeholder: t, onChange: l, disabled: o, autofocus: u, className: c } = e;
    return (0, i.jsx)(r.TextInput, {
        inputClassName: c,
        maxLength: s.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: l,
        disabled: o,
        autoFocus: u
    });
}
function a(e) {
    let { formField: n } = e;
    return (0, i.jsx)(l.CA, {
        title: n.label,
        children: (0, i.jsx)(r.TextArea, {
            className: u.disabledFieldBackground,
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function d(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, i.jsx)(l.hK, {
        title: n.label,
        children: (0, i.jsx)(c, {
            onChange: r,
            value: n.response,
            autofocus: t,
            placeholder: o.intl.string(o.t['Sqn+Wl'])
        })
    });
}
