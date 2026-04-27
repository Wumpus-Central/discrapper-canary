"use strict";
n.d(t, { $d: () => T, Gx: () => A, _u: () => I, nG: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(52724),
    l = n(939249),
    _ = n(452027),
    d = n(15626),
    u = n(834730),
    c = n(818348),
    E = n(650583),
    h = n(592786);
function m(e) {
    let { checked: t, radioItemIconClassName: n, icon: r, disabled: s } = e;
    return (0, i.jsxs)("div", {
        className: h.C4,
        children: [
            (0, i.jsxs)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: a()(h.$l, n, { [h.mn]: t, [h.Rk]: s }),
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("circle", { cx: "12", cy: "12", r: "12", className: h.au }),
                    (0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        strokeWidth: 2,
                        fill: "none",
                        className: h.Bo,
                    }),
                    t ? (0, i.jsx)("circle", { cx: "12", cy: "12", r: "5", className: h.he }) : null,
                ],
            }),
            null != r &&
                (0, i.jsx)(r, { className: h.Kk, size: "md", color: "currentColor", "aria-hidden": !0, focusable: !1 }),
        ],
    });
}
function f(e) {
    let {
            disabled: t,
            checked: n,
            option: r,
            size: s,
            onClick: o,
            infoClassName: _,
            titleClassName: d,
            radioItemClassName: c,
            radioItemIconClassName: E,
            radioBarClassName: f,
            hasSelection: g,
            radioPosition: I = "left",
            icon: A,
            withTransparentBackground: p,
        } = e,
        T = r.color ?? "",
        S = n || !g,
        N = (0, i.jsx)(m, { checked: n, disabled: t, radioItemIconClassName: E, icon: A });
    return (0, i.jsx)(l.D, {
        "data-toggleable-component": "radiogroup",
        role: "radio",
        "aria-checked": n,
        "aria-label": "string" == typeof r.name ? r.name : void 0,
        onClick: t ? void 0 : o,
        tabIndex: !t && S ? 0 : -1,
        className: a()(h.AS, { [h.r9]: t, [h.EO]: !p }, c),
        children: (0, i.jsxs)("div", {
            style: { "--radio-bar-accent-color": T, padding: s },
            className: a()(h.tG, { [h.go]: "left" === I, [h.Xe]: "right" === I }, f),
            children: [
                "left" === I ? N : null,
                (0, i.jsxs)("div", {
                    className: a()(h.pq, _),
                    children: [
                        (0, i.jsx)(u.E, { variant: "text-md/medium", className: d, color: "none", children: r.name }),
                        null != r.desc && "" !== r.desc
                            ? (0, i.jsx)(u.E, { color: "none", variant: "text-sm/normal", children: r.desc })
                            : null,
                    ],
                }),
                "right" === I ? N : null,
            ],
        }),
    });
}
function g(e) {
    let {
            checked: t,
            disabled: n,
            option: s,
            size: a,
            infoClassName: o,
            hasSelection: l,
            titleClassName: _,
            radioItemClassName: d,
            radioItemIconClassName: u,
            radioBarClassName: c,
            withTransparentBackground: E = !1,
            radioPosition: h = "left",
            onClick: m,
        } = e,
        g = r.useCallback((e) => (e.preventDefault(), m?.(s)), [m, s]),
        I = n || s.disabled,
        { icon: A } = s;
    return (0, i.jsx)(f, {
        disabled: !!I,
        checked: t,
        hasSelection: l,
        option: s,
        onClick: g,
        size: a,
        infoClassName: o,
        titleClassName: _,
        radioItemClassName: d,
        radioItemIconClassName: u,
        radioBarClassName: c,
        radioPosition: h,
        icon: A,
        withTransparentBackground: E,
    });
}
function I() {
    let {
            orientation: e = "vertical",
            isDisabled: t = !1,
            labelledBy: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = r.useRef(null),
        s = r.useMemo(
            () =>
                (0, o.C)({
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
                        let e = await s.getNextFocusableElement({ wrap: !0 });
                        return e?.focus();
                    }
                    case n: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await s.getPreviousFocusableElement({ wrap: !0 });
                        return e?.focus();
                    }
                }
            },
            [s, e],
        ),
        ref: i,
        "aria-labelledby": n,
        "aria-orientation": e,
        "aria-disabled": t,
    };
}
function A(e) {
    let { isSelected: t, label: n } = e;
    return { role: "radio", tabIndex: t ? 0 : -1, "aria-label": n, "aria-checked": t };
}
function p(e) {
    let {
            itemInfoClassName: t,
            itemTitleClassName: n,
            radioItemClassName: s,
            collapsibleClassName: o,
            className: l,
            value: _ = null,
            size: u = "10px",
            radioPosition: E = "left",
            onChange: m = c.tE,
            disabled: f = !1,
            options: A = [],
            "aria-labelledby": p,
            orientation: T,
            withTransparentBackground: S,
        } = e,
        N = r.useContext(d._),
        { ref: O, ...R } = I({ labelledBy: p ?? N?.labelId, orientation: T, isDisabled: f }),
        C = A.some((e) => e.value === _);
    return (0, i.jsx)("div", {
        ...R,
        ref: O,
        className: a()(h.kL, l),
        id: N?.controlId,
        "aria-describedby": N?.describedById,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null,
        children: A.map((e) =>
            (0, i.jsx)(
                g,
                {
                    hasSelection: C,
                    disabled: f,
                    checked: _ === e.value,
                    option: e,
                    onClick: m,
                    radioPosition: E,
                    size: u,
                    infoClassName: t,
                    titleClassName: n,
                    radioItemClassName: s,
                    radioItemIconClassName: e.radioItemIconClassName,
                    collapsibleClassName: o,
                    radioBarClassName: e.radioBarClassName,
                    withTransparentBackground: S,
                },
                e.value,
            ),
        ),
    });
}
function T(e) {
    let { label: t, description: n, required: r, errorMessage: s, ...a } = e;
    return (0, i.jsx)(_.D, {
        label: t,
        description: n,
        required: r,
        errorMessage: s,
        children: (0, i.jsx)(p, { ...a }),
    });
}
