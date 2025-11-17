n.d(t, { C: () => p }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(937397),
    l = n(735048),
    c = n(155127),
    u = n(657707),
    d = n(821541),
    f = n(777207),
    _ = n(726550);
function p(e) {
    let {
            checked: t,
            description: n,
            onChange: a,
            disabled: p = !1,
            displayOnly: h,
            label: m,
            labeledBy: g,
            leadingIcon: E,
            value: b,
            labelType: y = "primary",
            usageVariant: O = "single",
        } = e,
        v = (0, i.useRef)(null),
        I = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [S, A] = (0, i.useState)(void 0),
        C = (0, i.useRef)(!1),
        N = null != m && "" !== m,
        R = null != n && "" !== n,
        P = null != E ? E : null;
    (0, i.useEffect)(() => {
        if (!C.current) {
            C.current = !0;
            return;
        }
        A(t ? "animateIn" : "animateOut");
    }, [t]);
    let D = (e) => {
            null != a && a(e);
        },
        w = o()(_.checkboxOption, "string" == typeof S && _[S], "indicator" !== O && _.spacing),
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: _.checkboxIndicator,
                    ref: v,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)("svg", {
                            className: _.checkmark,
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, r.jsx)("circle", {
                                className: _.dot,
                                cx: "10",
                                cy: "10",
                                r: "1.1",
                                fill: "currentColor",
                            }),
                        }),
                        (0, r.jsx)(u.kSu, {
                            className: _.checkStroke,
                            size: "sm",
                            color: "currentColor",
                        }),
                    ],
                }),
                N &&
                    (0, r.jsxs)(d.K, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(s._, {
                                className: _.label,
                                children: [
                                    null != P &&
                                        (0, r.jsx)(P, {
                                            className: _.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(f.x, {
                                        variant: "text-md/normal",
                                        color: "primary" === y ? "text-primary" : "text-secondary",
                                        children: m,
                                    }),
                                ],
                            }),
                            R &&
                                (0, r.jsx)(f.x, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: n,
                                }),
                        ],
                    }),
            ],
        });
    return h
        ? (0, r.jsx)("div", {
              className: w,
              "data-selected": t || void 0,
              "data-disabled": p || void 0,
              children: x,
          })
        : (0, r.jsx)(c.tE, {
              focusTarget: I,
              ringTarget: T,
              children: (0, r.jsx)(l.XZ, {
                  ref: T,
                  inputRef: I,
                  "aria-labelledby": g,
                  isSelected: t,
                  onChange: D,
                  isDisabled: p,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: w,
                  value: String(b),
                  children: x,
              }),
          });
}
