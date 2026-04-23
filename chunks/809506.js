t.d(e, { A: () => V });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(835245),
    s = t(504345),
    o = t(452027),
    d = t(140735),
    c = t(408018),
    u = t(133343),
    g = t(95701),
    h = t(31717),
    p = t(652215),
    f = t(985018),
    m = t(107261),
    q = t(792034);
let v = (0, i.A)(),
    C = (0, g.createChannelRecord)({ id: "1", type: p.rbe.DM });
function x() {
    return new Promise((A) => {
        A({ shouldClear: !1, shouldRefocus: !0 });
    });
}
function U(A) {
    let { hasError: e, maxLength: t, text: n } = A;
    return (0, a.jsxs)("div", {
        className: l()(q.Ru, { [q.hz]: e }),
        "aria-hidden": "true",
        children: [n?.length ?? 0, " ", null != t && `/ ${t}`],
    });
}
function V(A) {
    let {
            "aria-labelledby": e,
            className: t,
            id: r,
            autoFocus: i,
            maxLength: g,
            onChange: p,
            onSubmit: q,
            showCharacterCount: V = !1,
            placeholder: b,
            required: j,
            value: N,
            enableThemedBackground: I = !1,
            parentModalKey: T,
            label: F,
            errorMessage: K,
        } = A,
        X = (0, s.xW)(),
        [P, W] = n.useState(() => (0, c.x7)(N)),
        Q = n.useRef(!0 === i),
        Z = e ?? X?.titleId,
        z = X?.errorId ?? v;
    function L(A, e, t) {
        p(e), W(t);
    }
    let O = n.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: { alwaysUseLayer: !0, small: !0 },
            disableAutoFocus: !0 !== i,
            drafts: { type: h.C.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !1 },
            submit: { useDisabledStylesOnSubmit: !0, disableEnterToSubmit: !0 },
        }),
        [i],
    );
    return (0, a.jsx)(o.D, {
        label: F,
        errorMessage: K,
        id: r,
        required: j,
        children: (A) =>
            (0, a.jsxs)(u.Ay, {
                id: A?.controlId ?? r,
                "aria-describedby": A?.describedById ?? z,
                "aria-labelledby": Z,
                "aria-errormessage": A?.errorMessageId,
                "aria-invalid": A?.errorMessageId != null,
                className: m.T,
                innerClassName: l()(t, m.n),
                maxCharacterCount: g,
                onChange: L,
                placeholder: b,
                required: j,
                channel: C,
                textValue: N,
                richValue: P,
                type: O,
                onBlur: () => {
                    Q.current = !1;
                },
                onFocus: () => {
                    Q.current = !0;
                },
                focused: Q.current,
                onSubmit: q ?? x,
                disableThemedBackground: !I,
                parentModalKey: T,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === V &&
                        (0, a.jsx)(U, {
                            hasError: null != X.error || (null != g && N.length > g),
                            text: N,
                            maxLength: g,
                        }),
                    null != g && (0, a.jsx)(d.A, { id: v, children: f.intl.format(f.t["+DFxLc"], { maxLength: g }) }),
                ],
            }),
    });
}
