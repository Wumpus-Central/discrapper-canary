r.d(t, { Z: () => f }), r(388685);
var n = r(54381),
    s = r(473749),
    i = r(120356),
    a = r.n(i),
    o = r(755721),
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
            value: O,
            setRef: C,
            placeholder: b,
            autoFocus: j,
            maxLength: w,
            spellCheck: v,
            autoComplete: S,
            autoCapitalize: x,
            autoCorrect: P,
            onChange: E,
            inputClassName: N,
        } = e,
        k = (0, c.Dt)(),
        [Z, A] = s.useState(!1),
        T = (0, u.o9)(i, O);
    return (0, n.jsx)("div", {
        className: null != g ? g : void 0,
        children: (0, n.jsx)(l.gNt, {
            label: f,
            errorMessage: m,
            required: y,
            id: k,
            children: (0, n.jsxs)("div", {
                className: a()(p.input, h.input, N, {
                    [p.error]: null != m,
                    [p.focused]: Z,
                }),
                children: [
                    (0, n.jsx)(d.Z, {
                        show: T,
                        alpha2: t,
                        countryCode: r,
                    }),
                    (0, n.jsx)(o.Is, {
                        id: k,
                        name: "email",
                        type: i === u.Nz.EMAIL ? "email" : "text",
                        value: O,
                        inputRef: C,
                        placeholder: b,
                        "aria-label": f,
                        required: y,
                        onChange: function (e) {
                            let t = (0, u.o9)(i, e) ? r : "";
                            E(e, t);
                        },
                        autoComplete: S,
                        autoCapitalize: x,
                        autoCorrect: P,
                        autoFocus: j,
                        maxLength: w,
                        spellCheck: v,
                        className: h.inputWrapper,
                        inputClassName: h.inputField,
                        onFocus: () => A(!0),
                        onBlur: () => A(!1),
                    }),
                ],
            }),
        }),
    });
}
