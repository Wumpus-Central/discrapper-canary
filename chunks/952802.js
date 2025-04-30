r.d(t, { Z: () => p }), r(388685);
var n = r(200651),
    s = r(192379),
    i = r(120356),
    l = r.n(i),
    a = r(481060),
    o = r(313201),
    c = r(742458),
    u = r(766650),
    d = r(553846),
    h = r(953100);
function p(e) {
    let { alpha2: t, countryCode: r, forceMode: i, label: p, error: m, className: f, required: x, value: g, setRef: j, placeholder: v, autoFocus: C, maxLength: N, spellCheck: O, autoComplete: b, autoCapitalize: y, autoCorrect: E, onChange: S, inputClassName: P } = e,
        T = (0, o.Dt)(),
        [k, w] = s.useState(!1),
        A = (0, c.o9)(i, g);
    return (0, n.jsx)(a.xJW, {
        title: p,
        error: m,
        className: f,
        required: x,
        tag: 'label',
        htmlFor: T,
        children: (0, n.jsxs)('div', {
            className: l()(h.input, d.input, P, {
                [h.error]: null != m,
                [h.focused]: k
            }),
            children: [
                (0, n.jsx)(u.Z, {
                    show: A,
                    alpha2: t,
                    countryCode: r
                }),
                (0, n.jsx)(a.oil, {
                    id: T,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: g,
                    inputRef: j,
                    placeholder: v,
                    'aria-label': p,
                    required: x,
                    onChange: function (e) {
                        let t = (0, c.o9)(i, e) ? r : '';
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
                    onFocus: () => w(!0),
                    onBlur: () => w(!1)
                })
            ]
        })
    });
}
