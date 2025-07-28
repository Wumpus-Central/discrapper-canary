(r.d(t, { Z: () => m }), r(388685));
var n = r(255367),
    s = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(755721),
    a = r(481060),
    c = r(313201),
    u = r(742458),
    h = r(766650),
    d = r(553846),
    p = r(165005);
function m(e) {
    let { alpha2: t, countryCode: r, forceMode: i, label: m, error: f, className: g, required: b, value: j, setRef: y, placeholder: x, autoFocus: O, maxLength: S, spellCheck: v, autoComplete: w, autoCapitalize: C, autoCorrect: P, onChange: E, inputClassName: N } = e,
        k = (0, c.Dt)(),
        [Z, T] = s.useState(!1),
        A = (0, u.o9)(i, j);
    return (0, n.jsx)(a.xJW, {
        title: m,
        error: f,
        className: g,
        required: b,
        tag: 'label',
        htmlFor: k,
        children: (0, n.jsxs)('div', {
            className: l()(p.input, d.input, N, {
                [p.error]: null != f,
                [p.focused]: Z
            }),
            children: [
                (0, n.jsx)(h.Z, {
                    show: A,
                    alpha2: t,
                    countryCode: r
                }),
                (0, n.jsx)(o.Is, {
                    id: k,
                    name: 'email',
                    type: i === u.Nz.EMAIL ? 'email' : 'text',
                    value: j,
                    inputRef: y,
                    placeholder: x,
                    'aria-label': m,
                    required: b,
                    onChange: function (e) {
                        let t = (0, u.o9)(i, e) ? r : '';
                        E(e, t);
                    },
                    autoComplete: w,
                    autoCapitalize: C,
                    autoCorrect: P,
                    autoFocus: O,
                    maxLength: S,
                    spellCheck: v,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => T(!0),
                    onBlur: () => T(!1)
                })
            ]
        })
    });
}
