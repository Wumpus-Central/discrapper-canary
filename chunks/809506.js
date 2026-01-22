t.d(A, {
    A: () => C,
}),
    t(896048);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(835245),
    s = t(397927),
    o = t(408018),
    d = t(133343),
    c = t(95701),
    u = t(31717),
    g = t(652215),
    f = t(985018),
    p = t(502512),
    m = t(648359);
let b = (0, i.A)(),
    v = (0, c.createChannelRecord)({
        id: "1",
        type: g.rbe.DM,
    });

function q() {
    return new Promise((e) => {
        e({
            shouldClear: !1,
            shouldRefocus: !0,
        });
    });
}

function h(e) {
    var A;
    let { hasError: t, maxLength: n, text: l } = e;
    return (0, r.jsxs)("div", {
        className: a()(m.Ru, {
            [m.hz]: t,
        }),
        "aria-hidden": "true",
        children: [null != (A = null == l ? void 0 : l.length) ? A : 0, " ", null != n && "/ ".concat(n)],
    });
}

function C(e) {
    var A;
    let {
            "aria-labelledby": t,
            className: l,
            id: i,
            autoFocus: c,
            maxLength: g,
            onChange: m,
            onSubmit: C,
            showCharacterCount: j = !1,
            placeholder: U,
            required: V,
            value: O,
            enableThemedBackground: x = !1,
            parentModalKey: y,
            label: P,
            errorMessage: K,
        } = e,
        N = (0, s.xW1)(),
        [T, F] = n.useState(() => (0, o.x7)(O)),
        I = n.useRef(!0 === c),
        X = null != t ? t : null == N ? void 0 : N.titleId,
        W = null != (A = null == N ? void 0 : N.errorId) ? A : b;

    function Q(e, A, t) {
        m(A), F(t);
    }
    let S = n.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            disableAutoFocus: !0 !== c,
            drafts: {
                type: u.C.ChannelMessage,
            },
            emojis: {
                button: !0,
            },
            permissions: {
                requireSendMessages: !1,
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
        }),
        [c],
    );
    return (0, r.jsx)(s.D0$, {
        label: P,
        errorMessage: K,
        id: i,
        required: V,
        children: (e) => {
            var A, t;
            return (0, r.jsxs)(d.Ay, {
                id: null != (A = null == e ? void 0 : e.controlId) ? A : i,
                "aria-describedby": null != (t = null == e ? void 0 : e.describedById) ? t : W,
                "aria-labelledby": X,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: p.T,
                innerClassName: a()(l, p.n),
                maxCharacterCount: g,
                onChange: Q,
                placeholder: U,
                required: V,
                channel: v,
                textValue: O,
                richValue: T,
                type: S,
                onBlur: () => {
                    I.current = !1;
                },
                onFocus: () => {
                    I.current = !0;
                },
                focused: I.current,
                onSubmit: null != C ? C : q,
                disableThemedBackground: !x,
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === j &&
                        (0, r.jsx)(h, {
                            hasError: null != N.error || (null != g && O.length > g),
                            text: O,
                            maxLength: g,
                        }),
                    null != g &&
                        (0, r.jsx)(s.AC4, {
                            id: b,
                            children: f.intl.format(f.t["+DFxLc"], {
                                maxLength: g,
                            }),
                        }),
                ],
            });
        },
    });
}
