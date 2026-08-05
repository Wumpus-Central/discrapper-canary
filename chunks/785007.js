"use strict";
n.d(t, { $d: () => S, Gx: () => m, _u: () => T, r9: () => h });
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
let h = { NOT_SET: "", NONE: "0", SMALL: "7px 10px", MEDIUM: "10px" };
function I(e) {
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
function f(e) {
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
            radioBarClassName: h,
            hasSelection: f,
            radioPosition: p = "left",
            icon: T,
            withTransparentBackground: m,
        } = e,
        g = r.color ?? "",
        S = n || !f,
        N = (0, i.jsx)(I, { checked: n, disabled: t, radioItemIconClassName: E, icon: T });
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
            className: s()(A.tG, { [A.go]: "left" === p, [A.Xe]: "right" === p }, h),
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
function p(e) {
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
        I = r.useCallback((e) => (e.preventDefault(), h?.(a)), [h, a]),
        p = n || a.disabled,
        { icon: T } = a;
    return (0, i.jsx)(f, {
        disabled: !!p,
        checked: t,
        hasSelection: o,
        option: a,
        onClick: I,
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
function T() {
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
function m(e) {
    let { isSelected: t, label: n } = e;
    return { role: "radio", tabIndex: t ? 0 : -1, "aria-label": n, "aria-checked": t };
}
function g(e) {
    let {
            itemInfoClassName: t,
            itemTitleClassName: n,
            radioItemClassName: a,
            collapsibleClassName: l,
            className: o,
            value: d = null,
            size: u = h.MEDIUM,
            radioPosition: E = "left",
            onChange: I = _.tE,
            disabled: f = !1,
            options: m = [],
            "aria-labelledby": g,
            orientation: S,
            withTransparentBackground: N,
        } = e,
        C = r.useContext(c._),
        { ref: O, ...R } = T({ labelledBy: g ?? C?.labelId, orientation: S, isDisabled: f }),
        L = m.some((e) => e.value === d);
    return (0, i.jsx)("div", {
        ...R,
        ref: O,
        className: s()(A.kL, o),
        id: C?.controlId,
        "aria-describedby": C?.describedById,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null,
        children: m.map((e) =>
            (0, i.jsx)(
                p,
                {
                    hasSelection: L,
                    disabled: f,
                    checked: d === e.value,
                    option: e,
                    onClick: I,
                    radioPosition: E,
                    size: u,
                    infoClassName: t,
                    titleClassName: n,
                    radioItemClassName: a,
                    radioItemIconClassName: e.radioItemIconClassName,
                    collapsibleClassName: l,
                    radioBarClassName: e.radioBarClassName,
                    withTransparentBackground: N,
                },
                e.value,
            ),
        ),
    });
}
function S(e) {
    let { label: t, description: n, required: r, errorMessage: a, ...s } = e;
    return (0, i.jsx)(d.D, {
        label: t,
        description: n,
        required: r,
        errorMessage: a,
        children: (0, i.jsx)(g, { ...s }),
    });
}
