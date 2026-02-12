t.d(e, { A: () => U });
var n = t(627968),
    a = t(64700),
    r = t(503698),
    i = t.n(r),
    l = t(835245),
    s = t(397927),
    o = t(408018),
    d = t(133343),
    u = t(95701),
    c = t(31717),
    g = t(652215),
    q = t(985018),
    p = t(502512),
    f = t(648359);
let m = (0, l.A)(),
    h = (0, u.createChannelRecord)({ id: "1", type: g.rbe.DM });
function C() {
    return new Promise((A) => {
        A({ shouldClear: !1, shouldRefocus: !0 });
    });
}
function v(A) {
    let { hasError: e, maxLength: t, text: a } = A;
    return (0, n.jsxs)("div", {
        className: i()(f.Ru, { [f.hz]: e }),
        "aria-hidden": "true",
        children: [a?.length ?? 0, " ", null != t && `/ ${t}`],
    });
}
function U(A) {
    let {
            "aria-labelledby": e,
            className: t,
            id: r,
            autoFocus: l,
            maxLength: u,
            onChange: g,
            onSubmit: f,
            showCharacterCount: U = !1,
            placeholder: V,
            required: x,
            value: b,
            enableThemedBackground: j = !1,
            parentModalKey: K,
            label: N,
            errorMessage: F,
        } = A,
        T = (0, s.xW1)(),
        [I, X] = a.useState(() => (0, o.x7)(b)),
        W = a.useRef(!0 === l),
        P = e ?? T?.titleId,
        Q = T?.errorId ?? m;
    function Z(A, e, t) {
        g(e), X(t);
    }
    let z = a.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: { alwaysUseLayer: !0, small: !0 },
            disableAutoFocus: !0 !== l,
            drafts: { type: c.C.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !1 },
            submit: { useDisabledStylesOnSubmit: !0, disableEnterToSubmit: !0 },
        }),
        [l],
    );
    return (0, n.jsx)(s.D0$, {
        label: N,
        errorMessage: F,
        id: r,
        required: x,
        children: (A) =>
            (0, n.jsxs)(d.Ay, {
                id: A?.controlId ?? r,
                "aria-describedby": A?.describedById ?? Q,
                "aria-labelledby": P,
                "aria-errormessage": A?.errorMessageId,
                "aria-invalid": A?.errorMessageId != null,
                className: p.T,
                innerClassName: i()(t, p.n),
                maxCharacterCount: u,
                onChange: Z,
                placeholder: V,
                required: x,
                channel: h,
                textValue: b,
                richValue: I,
                type: z,
                onBlur: () => {
                    W.current = !1;
                },
                onFocus: () => {
                    W.current = !0;
                },
                focused: W.current,
                onSubmit: f ?? C,
                disableThemedBackground: !j,
                parentModalKey: K,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === U &&
                        (0, n.jsx)(v, {
                            hasError: null != T.error || (null != u && b.length > u),
                            text: b,
                            maxLength: u,
                        }),
                    null != u && (0, n.jsx)(s.AC4, { id: m, children: q.intl.format(q.t["+DFxLc"], { maxLength: u }) }),
                ],
            }),
    });
}
