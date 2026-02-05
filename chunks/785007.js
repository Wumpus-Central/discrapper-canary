"use strict";
n.d(t, { $d: () => y, Gx: () => I, _u: () => A, nG: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(52724),
    l = n(939249),
    u = n(452027),
    c = n(15626),
    d = n(834730),
    _ = n(818348),
    f = n(650583),
    p = n(888147);
let h = "10px";
function m(e) {
    let { checked: t, radioItemIconClassName: n, icon: i, disabled: a } = e,
        o = i;
    return (0, r.jsxs)("div", {
        className: p.C4,
        children: [
            (0, r.jsxs)("svg", {
                className: s()(p.$l, n, { [p.mn]: t, [p.Rk]: a }),
                viewBox: "0 0 24 24",
                children: [
                    (0, r.jsx)("circle", { cx: "12", cy: "12", r: "12", className: p.au }),
                    (0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        strokeWidth: 2,
                        fill: "none",
                        className: p.Bo,
                    }),
                    t ? (0, r.jsx)("circle", { cx: "12", cy: "12", r: "5", className: p.he }) : null,
                ],
            }),
            null != o && (0, r.jsx)(o, { className: p.Kk, size: "md", color: "currentColor" }),
        ],
    });
}
function g(e) {
    let {
            disabled: t,
            checked: n,
            option: i,
            size: a,
            onClick: o,
            infoClassName: u,
            titleClassName: c,
            radioItemClassName: _,
            radioItemIconClassName: f,
            radioBarClassName: h,
            hasSelection: g,
            radioPosition: E = "left",
            icon: A,
            withTransparentBackground: I,
        } = e,
        T = i.color ?? "",
        y = n || !g,
        S = (0, r.jsx)(m, { checked: n, disabled: t, radioItemIconClassName: f, icon: A });
    return (0, r.jsx)(l.D, {
        "data-toggleable-component": "radiogroup",
        role: "radio",
        "aria-checked": n,
        onClick: t ? void 0 : o,
        tabIndex: !t && y ? 0 : -1,
        className: s()(p.AS, { [p.r9]: t, [p.EO]: !I }, _),
        children: (0, r.jsxs)("div", {
            style: { "--radio-bar-accent-color": T, padding: a },
            className: s()(p.tG, { [p.go]: "left" === E, [p.Xe]: "right" === E }, h),
            children: [
                "left" === E ? S : null,
                (0, r.jsxs)("div", {
                    className: s()(p.pq, u),
                    children: [
                        (0, r.jsx)(d.E, { variant: "text-md/medium", className: c, color: "none", children: i.name }),
                        null != i.desc && "" !== i.desc
                            ? (0, r.jsx)(d.E, { color: "none", variant: "text-sm/normal", children: i.desc })
                            : null,
                    ],
                }),
                "right" === E ? S : null,
            ],
        }),
    });
}
function E(e) {
    let {
            checked: t,
            disabled: n,
            option: a,
            size: s,
            infoClassName: o,
            hasSelection: l,
            titleClassName: u,
            radioItemClassName: c,
            radioItemIconClassName: d,
            radioBarClassName: _,
            withTransparentBackground: f = !1,
            radioPosition: p = "left",
            onClick: h,
        } = e,
        m = i.useCallback((e) => (e.preventDefault(), h?.(a)), [h, a]),
        E = n || a.disabled,
        { icon: A } = a;
    return (0, r.jsx)(g, {
        disabled: !!E,
        checked: t,
        hasSelection: l,
        option: a,
        onClick: m,
        size: s,
        infoClassName: o,
        titleClassName: u,
        radioItemClassName: c,
        radioItemIconClassName: d,
        radioBarClassName: _,
        radioPosition: p,
        icon: A,
        withTransparentBackground: f,
    });
}
function A() {
    let {
            orientation: e = "vertical",
            isDisabled: t = !1,
            labelledBy: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = i.useRef(null),
        a = i.useMemo(
            () =>
                (0, o.C)({
                    getFocusableElements() {
                        let e = r.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="radio"]')) : [];
                    },
                    getActiveElement: () => r.current?.ownerDocument.activeElement,
                }),
            [],
        );
    return {
        role: "radiogroup",
        onKeyDown: i.useCallback(
            async (t) => {
                if (null == r.current) return;
                let n = "vertical" === e ? f.dh.ARROW_UP : f.dh.ARROW_LEFT,
                    i = "vertical" === e ? f.dh.ARROW_DOWN : f.dh.ARROW_RIGHT;
                switch (t.key) {
                    case i: {
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
        ref: r,
        "aria-labelledby": n,
        "aria-orientation": e,
        "aria-disabled": t,
    };
}
function I(e) {
    let { isSelected: t, label: n } = e;
    return { role: "radio", tabIndex: t ? 0 : -1, "aria-label": n, "aria-checked": t };
}
function T(e) {
    let {
            itemInfoClassName: t,
            itemTitleClassName: n,
            radioItemClassName: a,
            collapsibleClassName: o,
            className: l,
            value: u = null,
            size: d = h,
            radioPosition: f = "left",
            onChange: m = _.tE,
            disabled: g = !1,
            options: I = [],
            "aria-labelledby": T,
            orientation: y,
            withTransparentBackground: S,
        } = e,
        v = i.useContext(c._),
        { ref: C, ...b } = A({ labelledBy: T ?? v?.labelId, orientation: y, isDisabled: g }),
        N = I.some((e) => e.value === u);
    return (0, r.jsx)("div", {
        ...b,
        ref: C,
        className: s()(p.kL, l),
        id: v?.controlId,
        "aria-describedby": v?.describedById,
        "aria-errormessage": v?.errorMessageId,
        "aria-invalid": v?.errorMessageId != null,
        children: I.map((e) =>
            (0, r.jsx)(
                E,
                {
                    hasSelection: N,
                    disabled: g,
                    checked: u === e.value,
                    option: e,
                    onClick: m,
                    radioPosition: f,
                    size: d,
                    infoClassName: t,
                    titleClassName: n,
                    radioItemClassName: a,
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
function y(e) {
    let { label: t, description: n, required: i, errorMessage: a, ...s } = e;
    return (0, r.jsx)(u.D, {
        label: t,
        description: n,
        required: i,
        errorMessage: a,
        children: (0, r.jsx)(T, { ...s }),
    });
}
