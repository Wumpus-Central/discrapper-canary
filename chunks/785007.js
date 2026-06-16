"use strict";
n.d(t, { $d: () => T, Gx: () => A, _u: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(52724),
    l = n(939249),
    u = n(452027),
    c = n(15626),
    d = n(834730),
    _ = n(818348),
    h = n(650583),
    f = n(592786);
function p(e) {
    let { checked: t, radioItemIconClassName: n, icon: r, disabled: s } = e;
    return (0, i.jsxs)("div", {
        className: f.C4,
        children: [
            (0, i.jsxs)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: a()(f.$l, n, { [f.mn]: t, [f.Rk]: s }),
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("circle", { cx: "12", cy: "12", r: "12", className: f.au }),
                    (0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        strokeWidth: 2,
                        fill: "none",
                        className: f.Bo,
                    }),
                    t ? (0, i.jsx)("circle", { cx: "12", cy: "12", r: "5", className: f.he }) : null,
                ],
            }),
            null != r &&
                (0, i.jsx)(r, { className: f.Kk, size: "md", color: "currentColor", "aria-hidden": !0, focusable: !1 }),
        ],
    });
}
function E(e) {
    let {
            disabled: t,
            checked: n,
            option: r,
            size: s,
            onClick: o,
            infoClassName: u,
            titleClassName: c,
            radioItemClassName: _,
            radioItemIconClassName: h,
            radioBarClassName: E,
            hasSelection: m,
            radioPosition: g = "left",
            icon: A,
            withTransparentBackground: I,
        } = e,
        T = r.color ?? "",
        S = n || !m,
        y = (0, i.jsx)(p, { checked: n, disabled: t, radioItemIconClassName: h, icon: A });
    return (0, i.jsx)(l.D, {
        "data-toggleable-component": "radiogroup",
        role: "radio",
        "aria-checked": n,
        "aria-label": "string" == typeof r.name ? r.name : void 0,
        onClick: t ? void 0 : o,
        tabIndex: !t && S ? 0 : -1,
        className: a()(f.AS, { [f.r9]: t, [f.EO]: !I }, _),
        children: (0, i.jsxs)("div", {
            style: { "--radio-bar-accent-color": T, padding: s },
            className: a()(f.tG, { [f.go]: "left" === g, [f.Xe]: "right" === g }, E),
            children: [
                "left" === g ? y : null,
                (0, i.jsxs)("div", {
                    className: a()(f.pq, u),
                    children: [
                        (0, i.jsx)(d.E, { variant: "text-md/medium", className: c, color: "none", children: r.name }),
                        null != r.desc && "" !== r.desc
                            ? (0, i.jsx)(d.E, { color: "none", variant: "text-sm/normal", children: r.desc })
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
            radioItemClassName: c,
            radioItemIconClassName: d,
            radioBarClassName: _,
            withTransparentBackground: h = !1,
            radioPosition: f = "left",
            onClick: p,
        } = e,
        m = r.useCallback((e) => (e.preventDefault(), p?.(s)), [p, s]),
        g = n || s.disabled,
        { icon: A } = s;
    return (0, i.jsx)(E, {
        disabled: !!g,
        checked: t,
        hasSelection: l,
        option: s,
        onClick: m,
        size: a,
        infoClassName: o,
        titleClassName: u,
        radioItemClassName: c,
        radioItemIconClassName: d,
        radioBarClassName: _,
        radioPosition: f,
        icon: A,
        withTransparentBackground: h,
    });
}
function g() {
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
                let n = "vertical" === e ? h.dh.ARROW_UP : h.dh.ARROW_LEFT,
                    r = "vertical" === e ? h.dh.ARROW_DOWN : h.dh.ARROW_RIGHT;
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
function I(e) {
    let {
            itemInfoClassName: t,
            itemTitleClassName: n,
            radioItemClassName: s,
            collapsibleClassName: o,
            className: l,
            value: u = null,
            size: d = "10px",
            radioPosition: h = "left",
            onChange: p = _.tE,
            disabled: E = !1,
            options: A = [],
            "aria-labelledby": I,
            orientation: T,
            withTransparentBackground: S,
        } = e,
        y = r.useContext(c._),
        { ref: C, ...N } = g({ labelledBy: I ?? y?.labelId, orientation: T, isDisabled: E }),
        v = A.some((e) => e.value === u);
    return (0, i.jsx)("div", {
        ...N,
        ref: C,
        className: a()(f.kL, l),
        id: y?.controlId,
        "aria-describedby": y?.describedById,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null,
        children: A.map((e) =>
            (0, i.jsx)(
                m,
                {
                    hasSelection: v,
                    disabled: E,
                    checked: u === e.value,
                    option: e,
                    onClick: p,
                    radioPosition: h,
                    size: d,
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
    return (0, i.jsx)(u.D, {
        label: t,
        description: n,
        required: r,
        errorMessage: s,
        children: (0, i.jsx)(I, { ...a }),
    });
}
