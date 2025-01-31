s.d(t, { Z: () => m }), s(47120);
var n = s(200651),
    r = s(192379),
    i = s(120356),
    l = s.n(i),
    a = s(481060),
    o = s(313201),
    c = s(742458),
    d = s(766650),
    u = s(208689),
    h = s(716722);
function m(e) {
    let { alpha2: t, countryCode: s, forceMode: i, label: m, error: p, className: x, required: g, value: f, setRef: j, placeholder: C, autoFocus: v, maxLength: N, spellCheck: E, autoComplete: k, autoCapitalize: S, autoCorrect: T, onChange: A, inputClassName: Z } = e,
        w = (0, o.Dt)(),
        [I, M] = r.useState(!1),
        P = (0, c.o9)(i, f);
    return (0, n.jsx)(a.xJW, {
        title: m,
        error: p,
        className: x,
        required: g,
        tag: 'label',
        htmlFor: w,
        children: (0, n.jsxs)('div', {
            className: l()(h.input, u.input, Z, {
                [h.error]: null != p,
                [h.focused]: I
            }),
            children: [
                (0, n.jsx)(d.Z, {
                    show: P,
                    alpha2: t,
                    countryCode: s
                }),
                (0, n.jsx)(a.oil, {
                    id: w,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: f,
                    inputRef: j,
                    placeholder: C,
                    'aria-label': m,
                    required: g,
                    onChange: function (e) {
                        let t = (0, c.o9)(i, e) ? s : '';
                        A(e, t);
                    },
                    autoComplete: k,
                    autoCapitalize: S,
                    autoCorrect: T,
                    autoFocus: v,
                    maxLength: N,
                    spellCheck: E,
                    className: u.inputWrapper,
                    inputClassName: u.inputField,
                    onFocus: () => M(!0),
                    onBlur: () => M(!1)
                })
            ]
        })
    });
}
