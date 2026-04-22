"use strict";
n.d(t, { $d: () => T, Gx: () => A, _u: () => g, nG: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(52724),
    l = n(939249),
    u = n(452027),
    d = n(15626),
    c = n(834730),
    _ = n(818348),
    f = n(650583),
    E = n(592786);
function h(e) {
    let { checked: t, radioItemIconClassName: n, icon: i, disabled: s } = e;
    return (0, r.jsxs)("div", {
        className: E.C4,
        children: [
            (0, r.jsxs)("svg", {
                className: a()(E.$l, n, { [E.mn]: t, [E.Rk]: s }),
                viewBox: "0 0 24 24",
                children: [
                    (0, r.jsx)("circle", { cx: "12", cy: "12", r: "12", className: E.au }),
                    (0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        strokeWidth: 2,
                        fill: "none",
                        className: E.Bo,
                    }),
                    t ? (0, r.jsx)("circle", { cx: "12", cy: "12", r: "5", className: E.he }) : null,
                ],
            }),
            null != i && (0, r.jsx)(i, { className: E.Kk, size: "md", color: "currentColor" }),
        ],
    });
}
function p(e) {
    let {
            disabled: t,
            checked: n,
            option: i,
            size: s,
            onClick: o,
            infoClassName: u,
            titleClassName: d,
            radioItemClassName: _,
            radioItemIconClassName: f,
            radioBarClassName: p,
            hasSelection: m,
            radioPosition: g = "left",
            icon: A,
            withTransparentBackground: I,
        } = e,
        T = i.color ?? "",
        S = n || !m,
        y = (0, r.jsx)(h, { checked: n, disabled: t, radioItemIconClassName: f, icon: A });
    return (0, r.jsx)(l.D, {
        "data-toggleable-component": "radiogroup",
        role: "radio",
        "aria-checked": n,
        onClick: t ? void 0 : o,
        tabIndex: !t && S ? 0 : -1,
        className: a()(E.AS, { [E.r9]: t, [E.EO]: !I }, _),
        children: (0, r.jsxs)("div", {
            style: { "--radio-bar-accent-color": T, padding: s },
            className: a()(E.tG, { [E.go]: "left" === g, [E.Xe]: "right" === g }, p),
            children: [
                "left" === g ? y : null,
                (0, r.jsxs)("div", {
                    className: a()(E.pq, u),
                    children: [
                        (0, r.jsx)(c.E, { variant: "text-md/medium", className: d, color: "none", children: i.name }),
                        null != i.desc && "" !== i.desc
                            ? (0, r.jsx)(c.E, { color: "none", variant: "text-sm/normal", children: i.desc })
                            : null,
                    ],
                }),
                "right" === g ? y : null,
            ],
        }),
    });
}
function m(e) {
    let {
            checked: t,
            disabled: n,
            option: s,
            size: a,
            infoClassName: o,
            hasSelection: l,
            titleClassName: u,
            radioItemClassName: d,
            radioItemIconClassName: c,
            radioBarClassName: _,
            withTransparentBackground: f = !1,
            radioPosition: E = "left",
            onClick: h,
        } = e,
        m = i.useCallback((e) => (e.preventDefault(), h?.(s)), [h, s]),
        g = n || s.disabled,
        { icon: A } = s;
    return (0, r.jsx)(p, {
        disabled: !!g,
        checked: t,
        hasSelection: l,
        option: s,
        onClick: m,
        size: a,
        infoClassName: o,
        titleClassName: u,
        radioItemClassName: d,
        radioItemIconClassName: c,
        radioBarClassName: _,
        radioPosition: E,
        icon: A,
        withTransparentBackground: f,
    });
}
function g() {
    let {
            orientation: e = "vertical",
            isDisabled: t = !1,
            labelledBy: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = i.useRef(null),
        s = i.useMemo(
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
        ref: r,
        "aria-labelledby": n,
        "aria-orientation": e,
        "aria-disabled": t,
    };
}
function A(e) {
    let { isSelected: t, label: n } = e;
    return { role: "radio", tabIndex: t ? 0 : -1, "aria-label": n, "aria-checked": t };
}
function I(e) {
    let {
            itemInfoClassName: t,
            itemTitleClassName: n,
            radioItemClassName: s,
            collapsibleClassName: o,
            className: l,
            value: u = null,
            size: c = "10px",
            radioPosition: f = "left",
            onChange: h = _.tE,
            disabled: p = !1,
            options: A = [],
            "aria-labelledby": I,
            orientation: T,
            withTransparentBackground: S,
        } = e,
        y = i.useContext(d._),
        { ref: N, ...O } = g({ labelledBy: I ?? y?.labelId, orientation: T, isDisabled: p }),
        R = A.some((e) => e.value === u);
    return (0, r.jsx)("div", {
        ...O,
        ref: N,
        className: a()(E.kL, l),
        id: y?.controlId,
        "aria-describedby": y?.describedById,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null,
        children: A.map((e) =>
            (0, r.jsx)(
                m,
                {
                    hasSelection: R,
                    disabled: p,
                    checked: u === e.value,
                    option: e,
                    onClick: h,
                    radioPosition: f,
                    size: c,
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
    let { label: t, description: n, required: i, errorMessage: s, ...a } = e;
    return (0, r.jsx)(u.D, {
        label: t,
        description: n,
        required: i,
        errorMessage: s,
        children: (0, r.jsx)(I, { ...a }),
    });
}
