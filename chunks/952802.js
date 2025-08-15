n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(120356),
    a = n.n(i),
    l = n(755721),
    o = n(481060),
    c = n(313201),
    u = n(742458),
    d = n(766650),
    p = n(584090),
    h = n(979712);
function f(e) {
    let {
            alpha2: t,
            countryCode: n,
            forceMode: i,
            label: f,
            error: m,
            className: g,
            required: y,
            value: b,
            setRef: w,
            placeholder: S,
            autoFocus: O,
            maxLength: C,
            spellCheck: x,
            autoComplete: j,
            autoCapitalize: v,
            autoCorrect: P,
            onChange: E,
            inputClassName: N,
        } = e,
        A = (0, c.Dt)(),
        [k, T] = s.useState(!1),
        Z = (0, u.o9)(i, b);
    return (0, r.jsx)(o.xJW, {
        title: f,
        error: m,
        className: g,
        required: y,
        tag: "label",
        htmlFor: A,
        children: (0, r.jsxs)("div", {
            className: a()(h.input, p.input, N, {
                [h.error]: null != m,
                [h.focused]: k,
            }),
            children: [
                (0, r.jsx)(d.Z, {
                    show: Z,
                    alpha2: t,
                    countryCode: n,
                }),
                (0, r.jsx)(l.Is, {
                    id: A,
                    name: "email",
                    type: i === u.Nz.EMAIL ? "email" : "text",
                    value: b,
                    inputRef: w,
                    placeholder: S,
                    "aria-label": f,
                    required: y,
                    onChange: function (e) {
                        let t = (0, u.o9)(i, e) ? n : "";
                        E(e, t);
                    },
                    autoComplete: j,
                    autoCapitalize: v,
                    autoCorrect: P,
                    autoFocus: O,
                    maxLength: C,
                    spellCheck: x,
                    className: p.inputWrapper,
                    inputClassName: p.inputField,
                    onFocus: () => T(!0),
                    onBlur: () => T(!1),
                }),
            ],
        }),
    });
}
