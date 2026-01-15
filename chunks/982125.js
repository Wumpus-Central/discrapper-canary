n.d(t, { C: () => _ }), n(953529), n(388685);
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
    p = n(672);
function _(e) {
    let {
            checked: t,
            description: n,
            onChange: a,
            disabled: _ = !1,
            displayOnly: h,
            label: m,
            labeledBy: g,
            leadingIcon: E,
            value: b,
            labelType: y = "primary",
            usageVariant: O = "single",
        } = e,
        v = (0, i.useRef)(null),
        S = (0, i.useRef)(null),
        I = (0, i.useRef)(null),
        [T, C] = (0, i.useState)(void 0),
        A = (0, i.useRef)(!1),
        N = null != m && "" !== m,
        P = null != n && "" !== n,
        w = null != E ? E : null;
    (0, i.useEffect)(() => {
        if (!A.current) {
            A.current = !0;
            return;
        }
        C(t ? "animateIn" : "animateOut");
    }, [t]);
    let R = (e) => {
            null != a && a(e);
        },
        D = o()(p.checkboxOption, "string" == typeof T && p[T], "indicator" !== O && p.spacing),
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: p.checkboxIndicator,
                    ref: v,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)("svg", {
                            className: p.checkmark,
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, r.jsx)("circle", {
                                className: p.dot,
                                cx: "10",
                                cy: "10",
                                r: "1.1",
                                fill: "currentColor",
                            }),
                        }),
                        (0, r.jsx)(u.CheckmarkSmallBoldIcon, {
                            className: p.checkStroke,
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
                                className: p.label,
                                children: [
                                    null != w &&
                                        (0, r.jsx)(w, {
                                            className: p.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(f.x, {
                                        variant: "text-md/normal",
                                        color: "primary" === y ? "text-strong" : "text-subtle",
                                        children: m,
                                    }),
                                ],
                            }),
                            P &&
                                (0, r.jsx)(f.x, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: n,
                                }),
                        ],
                    }),
            ],
        });
    return h
        ? (0, r.jsx)("div", {
              className: D,
              "data-selected": t || void 0,
              "data-disabled": _ || void 0,
              children: x,
          })
        : (0, r.jsx)(c.tE, {
              focusTarget: S,
              ringTarget: I,
              children: (0, r.jsx)(l.XZ, {
                  ref: I,
                  inputRef: S,
                  "aria-labelledby": g,
                  isSelected: t,
                  onChange: R,
                  isDisabled: _,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: D,
                  value: String(b),
                  children: x,
              }),
          });
}
