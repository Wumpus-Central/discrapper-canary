(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(755721),
    o = n(481060),
    c = n(313201),
    u = n(742458),
    d = n(766650),
    h = n(553846),
    p = n(165005);
function m(e) {
    let { alpha2: t, countryCode: n, forceMode: i, label: m, error: f, className: x, required: g, value: j, setRef: v, placeholder: C, autoFocus: b, maxLength: y, spellCheck: O, autoComplete: E, autoCapitalize: N, autoCorrect: S, onChange: P, inputClassName: T } = e,
        w = (0, c.Dt)(),
        [A, k] = s.useState(!1),
        Z = (0, u.o9)(i, j);
    return (0, r.jsx)(o.xJW, {
        title: m,
        error: f,
        className: x,
        required: g,
        tag: 'label',
        htmlFor: w,
        children: (0, r.jsxs)('div', {
            className: l()(p.input, h.input, T, {
                [p.error]: null != f,
                [p.focused]: A
            }),
            children: [
                (0, r.jsx)(d.Z, {
                    show: Z,
                    alpha2: t,
                    countryCode: n
                }),
                (0, r.jsx)(a.Is, {
                    id: w,
                    name: 'email',
                    type: i === u.Nz.EMAIL ? 'email' : 'text',
                    value: j,
                    inputRef: v,
                    placeholder: C,
                    'aria-label': m,
                    required: g,
                    onChange: function (e) {
                        let t = (0, u.o9)(i, e) ? n : '';
                        P(e, t);
                    },
                    autoComplete: E,
                    autoCapitalize: N,
                    autoCorrect: S,
                    autoFocus: b,
                    maxLength: y,
                    spellCheck: O,
                    className: h.inputWrapper,
                    inputClassName: h.inputField,
                    onFocus: () => k(!0),
                    onBlur: () => k(!1)
                })
            ]
        })
    });
}
