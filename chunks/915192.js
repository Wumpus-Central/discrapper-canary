t.d(e, { t: () => s });
var i = t(529058),
    r = t(287822);
t(48913);
var l = t(96798),
    d = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    s = ({
        value: a,
        emailError: e,
        label: t,
        labelHint: s,
        disabled: n = !1,
        required: o = !1,
        id: c = "email-input",
        "data-testid": p,
        onEmailChange: u,
        onBlur: h,
    }) => {
        let { t: v } = (0, i.n)();
        return (0, r.v)("div", {
            class: "IncodeEmailInput",
            children: (0, r.v)("div", {
                class: "IncodeEmailInputContainer",
                onFocusOut: h,
                children: (0, r.v)(l.t, {
                    id: c,
                    type: "email",
                    value: a,
                    onInput: (a) => {
                        let e = a.target.value.trim();
                        u(e, e.length > 0 && d.test(e));
                    },
                    placeholder: v("email.placeholder"),
                    disabled: n,
                    required: o,
                    label: t,
                    labelHint: s,
                    "data-testid": p ?? c,
                    "aria-label": t ? void 0 : "Email address",
                    "aria-invalid": e ? "true" : void 0,
                    autocomplete: "email",
                    error: e,
                    showErrorIcon: !0,
                }),
            }),
        });
    };
