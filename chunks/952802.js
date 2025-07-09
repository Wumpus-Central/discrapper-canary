(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(313201),
    c = n(742458),
    u = n(766650),
    d = n(553846),
    h = n(953100);
function p(e) {
    let { alpha2: t, countryCode: n, forceMode: i, label: p, error: m, className: f, required: x, value: g, setRef: j, placeholder: v, autoFocus: C, maxLength: N, spellCheck: O, autoComplete: b, autoCapitalize: y, autoCorrect: E, onChange: S, inputClassName: T } = e,
        P = (0, o.Dt)(),
        [w, A] = s.useState(!1),
        k = (0, c.o9)(i, g);
    return (0, r.jsx)(a.xJW, {
        title: p,
        error: m,
        className: f,
        required: x,
        tag: 'label',
        htmlFor: P,
        children: (0, r.jsxs)('div', {
            className: l()(h.input, d.input, T, {
                [h.error]: null != m,
                [h.focused]: w
            }),
            children: [
                (0, r.jsx)(u.Z, {
                    show: k,
                    alpha2: t,
                    countryCode: n
                }),
                (0, r.jsx)(a.oil, {
                    id: P,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: g,
                    inputRef: j,
                    placeholder: v,
                    'aria-label': p,
                    required: x,
                    onChange: function (e) {
                        let t = (0, c.o9)(i, e) ? n : '';
                        S(e, t);
                    },
                    autoComplete: b,
                    autoCapitalize: y,
                    autoCorrect: E,
                    autoFocus: C,
                    maxLength: N,
                    spellCheck: O,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => A(!0),
                    onBlur: () => A(!1)
                })
            ]
        })
    });
}
