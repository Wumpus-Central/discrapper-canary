n.d(e, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(313201),
    c = n(742458),
    u = n(766650),
    d = n(208689),
    h = n(716722);
function p(t) {
    let { alpha2: e, countryCode: n, forceMode: i, label: p, error: m, className: x, required: f, value: g, setRef: C, placeholder: j, autoFocus: v, maxLength: N, spellCheck: S, autoComplete: E, autoCapitalize: A, autoCorrect: T, onChange: I, inputClassName: M } = t,
        k = (0, o.Dt)(),
        [Z, b] = r.useState(!1),
        w = (0, c.o9)(i, g);
    return (0, s.jsx)(a.FormItem, {
        title: p,
        error: m,
        className: x,
        required: f,
        tag: 'label',
        htmlFor: k,
        children: (0, s.jsxs)('div', {
            className: l()(h.input, d.input, M, {
                [h.error]: null != m,
                [h.focused]: Z
            }),
            children: [
                (0, s.jsx)(u.Z, {
                    show: w,
                    alpha2: e,
                    countryCode: n
                }),
                (0, s.jsx)(a.TextInput, {
                    id: k,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: g,
                    inputRef: C,
                    placeholder: j,
                    'aria-label': p,
                    required: f,
                    onChange: function (t) {
                        let e = (0, c.o9)(i, t) ? n : '';
                        I(t, e);
                    },
                    autoComplete: E,
                    autoCapitalize: A,
                    autoCorrect: T,
                    autoFocus: v,
                    maxLength: N,
                    spellCheck: S,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => b(!0),
                    onBlur: () => b(!1)
                })
            ]
        })
    });
}
