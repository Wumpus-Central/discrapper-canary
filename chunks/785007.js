"use strict";
n.d(t, { $d: () => g, Gx: () => T, _u: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(52724),
    o = n(939249),
    d = n(452027),
    c = n(15626),
    u = n(834730),
    _ = n(818348),
    E = n(650583),
    A = n(784762);
function h(e) {
    let { checked: t, radioItemIconClassName: n, icon: r, disabled: a } = e;
    return (0, i.jsxs)("div", {
        className: A.C4,
        children: [
            (0, i.jsxs)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: s()(A.$l, n, { [A.mn]: t, [A.Rk]: a }),
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("circle", { cx: "12", cy: "12", r: "12", className: A.au }),
                    (0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        strokeWidth: 2,
                        fill: "none",
                        className: A.Bo,
                    }),
                    t ? (0, i.jsx)("circle", { cx: "12", cy: "12", r: "5", className: A.he }) : null,
                ],
            }),
            null != r &&
                (0, i.jsx)(r, { className: A.Kk, size: "md", color: "currentColor", "aria-hidden": !0, focusable: !1 }),
        ],
    });
}
function I(e) {
    let {
            disabled: t,
            checked: n,
            option: r,
            size: a,
            onClick: l,
            infoClassName: d,
            titleClassName: c,
            radioItemClassName: _,
            radioItemIconClassName: E,
            radioBarClassName: I,
            hasSelection: f,
            radioPosition: p = "left",
            icon: T,
            withTransparentBackground: m,
        } = e,
        g = r.color ?? "",
        S = n || !f,
        N = (0, i.jsx)(h, { checked: n, disabled: t, radioItemIconClassName: E, icon: T });
    return (0, i.jsx)(o.D, {
        "data-toggleable-component": "radiogroup",
        role: "radio",
        "aria-checked": n,
        "aria-label": "string" == typeof r.name ? r.name : void 0,
        onClick: t ? void 0 : l,
        tabIndex: !t && S ? 0 : -1,
        className: s()(A.AS, { [A.r9]: t, [A.EO]: !m }, _),
        children: (0, i.jsxs)("div", {
            style: { "--radio-bar-accent-color": g, padding: a },
            className: s()(A.tG, { [A.go]: "left" === p, [A.Xe]: "right" === p }, I),
            children: [
                "left" === p ? N : null,
                (0, i.jsxs)("div", {
                    className: s()(A.pq, d),
                    children: [
                        (0, i.jsx)(u.E, { variant: "text-md/medium", className: c, color: "none", children: r.name }),
                        null != r.desc && "" !== r.desc
                            ? (0, i.jsx)(u.E, { color: "none", variant: "text-sm/normal", children: r.desc })
                            : null,
                    ],
                }),
                "right" === p ? N : null,
            ],
        }),
    });
}
function f(e) {
    let {
            checked: t,
            disabled: n,
            option: a,
            size: s,
            infoClassName: l,
            hasSelection: o,
            titleClassName: d,
            radioItemClassName: c,
            radioItemIconClassName: u,
            radioBarClassName: _,
            withTransparentBackground: E = !1,
            radioPosition: A = "left",
            onClick: h,
        } = e,
        f = r.useCallback((e) => (e.preventDefault(), h?.(a)), [h, a]),
        p = n || a.disabled,
        { icon: T } = a;
    return (0, i.jsx)(I, {
        disabled: !!p,
        checked: t,
        hasSelection: o,
        option: a,
        onClick: f,
        size: s,
        infoClassName: l,
        titleClassName: d,
        radioItemClassName: c,
        radioItemIconClassName: u,
        radioBarClassName: _,
        radioPosition: A,
        icon: T,
        withTransparentBackground: E,
    });
}
function p() {
    let {
            orientation: e = "vertical",
            isDisabled: t = !1,
            labelledBy: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = r.useRef(null),
        a = r.useMemo(
            () =>
                (0, l.C)({
                    getFocusableElements() {
                        let e = i.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="radio"]')) : [];
                    },
                    getActiveElement: () => i.current?.ownerDocument.activeElement,
                }),
            [],
        );
    return {
        role: "radiogroup",
        onKeyDown: r.useCallback(
            async (t) => {
                if (null == i.current) return;
                let n = "vertical" === e ? E.dh.ARROW_UP : E.dh.ARROW_LEFT,
                    r = "vertical" === e ? E.dh.ARROW_DOWN : E.dh.ARROW_RIGHT;
                switch (t.key) {
                    case r: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await a.getNextFocusableElement({ wrap: !0 });
                        return e?.focus();
                    }
                    case n: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await a.getPreviousFocusableElement({ wrap: !0 });
                        return e?.focus();
                    }
                }
            },
            [a, e],
        ),
        ref: i,
        "aria-labelledby": n,
        "aria-orientation": e,
        "aria-disabled": t,
    };
}
function T(e) {
    let { isSelected: t, label: n } = e;
    return { role: "radio", tabIndex: t ? 0 : -1, "aria-label": n, "aria-checked": t };
}
function m(e) {
    let {
            itemInfoClassName: t,
            itemTitleClassName: n,
            radioItemClassName: a,
            collapsibleClassName: l,
            className: o,
            value: d = null,
            size: u = "10px",
            radioPosition: E = "left",
            onChange: h = _.tE,
            disabled: I = !1,
            options: T = [],
            "aria-labelledby": m,
            orientation: g,
            withTransparentBackground: S,
        } = e,
        N = r.useContext(c._),
        { ref: C, ...O } = p({ labelledBy: m ?? N?.labelId, orientation: g, isDisabled: I }),
        R = T.some((e) => e.value === d);
    return (0, i.jsx)("div", {
        ...O,
        ref: C,
        className: s()(A.kL, o),
        id: N?.controlId,
        "aria-describedby": N?.describedById,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null,
        children: T.map((e) =>
            (0, i.jsx)(
                f,
                {
                    hasSelection: R,
                    disabled: I,
                    checked: d === e.value,
                    option: e,
                    onClick: h,
                    radioPosition: E,
                    size: u,
                    infoClassName: t,
                    titleClassName: n,
                    radioItemClassName: a,
                    radioItemIconClassName: e.radioItemIconClassName,
                    collapsibleClassName: l,
                    radioBarClassName: e.radioBarClassName,
                    withTransparentBackground: S,
                },
                e.value,
            ),
        ),
    });
}
function g(e) {
    let { label: t, description: n, required: r, errorMessage: a, ...s } = e;
    return (0, i.jsx)(d.D, {
        label: t,
        description: n,
        required: r,
        errorMessage: a,
        children: (0, i.jsx)(m, { ...s }),
    });
}
