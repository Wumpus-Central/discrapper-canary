r.d(t, { Z: () => f }), r(388685);
var n = r(951288),
    s = r(647438),
    i = r(120356),
    o = r.n(i),
    a = r(755721),
    l = r(481060),
    c = r(313201),
    u = r(742458),
    d = r(766650),
    h = r(584090),
    p = r(979712);
function f(e) {
    let {
            alpha2: t,
            countryCode: r,
            forceMode: i,
            label: f,
            error: m,
            className: g,
            required: y,
            value: b,
            setRef: C,
            placeholder: O,
            autoFocus: j,
            maxLength: w,
            spellCheck: S,
            autoComplete: v,
            autoCapitalize: x,
            autoCorrect: P,
            onChange: E,
            inputClassName: N,
        } = e,
        k = (0, c.Dt)(),
        [Z, A] = s.useState(!1),
        T = (0, u.o9)(i, b);
    return (0, n.jsx)(l.xJW, {
        title: f,
        error: m,
        className: g,
        required: y,
        htmlFor: k,
        children: (0, n.jsxs)("div", {
            className: o()(p.input, h.input, N, {
                [p.error]: null != m,
                [p.focused]: Z,
            }),
            children: [
                (0, n.jsx)(d.Z, {
                    show: T,
                    alpha2: t,
                    countryCode: r,
                }),
                (0, n.jsx)(a.Is, {
                    id: k,
                    name: "email",
                    type: i === u.Nz.EMAIL ? "email" : "text",
                    value: b,
                    inputRef: C,
                    placeholder: O,
                    "aria-label": f,
                    required: y,
                    onChange: function (e) {
                        let t = (0, u.o9)(i, e) ? r : "";
                        E(e, t);
                    },
                    autoComplete: v,
                    autoCapitalize: x,
                    autoCorrect: P,
                    autoFocus: j,
                    maxLength: w,
                    spellCheck: S,
                    className: h.inputWrapper,
                    inputClassName: h.inputField,
                    onFocus: () => A(!0),
                    onBlur: () => A(!1),
                }),
            ],
        }),
    });
}
