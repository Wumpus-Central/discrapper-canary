n.d(t, {
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
function p(e) {
    let { alpha2: t, countryCode: n, forceMode: i, label: p, error: m, className: x, required: f, value: g, setRef: C, placeholder: j, autoFocus: v, maxLength: N, spellCheck: S, autoComplete: E, autoCapitalize: T, autoCorrect: A, onChange: k, inputClassName: I } = e,
        M = (0, o.Dt)(),
        [Z, w] = r.useState(!1),
        P = (0, c.o9)(i, g);
    return (0, s.jsx)(a.FormItem, {
        title: p,
        error: m,
        className: x,
        required: f,
        tag: 'label',
        htmlFor: M,
        children: (0, s.jsxs)('div', {
            className: l()(h.input, d.input, I, {
                [h.error]: null != m,
                [h.focused]: Z
            }),
            children: [
                (0, s.jsx)(u.Z, {
                    show: P,
                    alpha2: t,
                    countryCode: n
                }),
                (0, s.jsx)(a.TextInput, {
                    id: M,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: g,
                    inputRef: C,
                    placeholder: j,
                    'aria-label': p,
                    required: f,
                    onChange: function (e) {
                        let t = (0, c.o9)(i, e) ? n : '';
                        k(e, t);
                    },
                    autoComplete: E,
                    autoCapitalize: T,
                    autoCorrect: A,
                    autoFocus: v,
                    maxLength: N,
                    spellCheck: S,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => w(!0),
                    onBlur: () => w(!1)
                })
            ]
        })
    });
}
