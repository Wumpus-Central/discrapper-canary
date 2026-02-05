"use strict";
n.d(t, { i: () => d });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(900283),
    l = n(106236),
    u = n(134971);
let c = (e) => `${e.toFixed(0)}%`,
    d = i.forwardRef(function (e, t) {
        let {
                value: n,
                minValue: a = 0,
                maxValue: d = 100,
                onChange: _,
                onInteraction: f,
                renderValue: p = c,
                "aria-label": h,
            } = e,
            m = i.useRef(null),
            g = i.useMemo(() => s().debounce(() => f?.(o.Q.SLIDER), 100), [f]);
        i.useImperativeHandle(
            t,
            () => ({ focus: () => m.current?.focus(), blur: () => m.current?.blur(), activate: () => !1 }),
            [],
        );
        let E = (e) => {
            _(e), g();
        };
        return (0, r.jsx)("div", {
            className: u.x,
            children: (0, r.jsx)(l.A, {
                ref: m,
                mini: !0,
                handleSize: 16,
                className: u.a,
                initialValue: n,
                minValue: a,
                maxValue: d,
                onValueChange: E,
                asValueChanges: _,
                onValueRender: p,
                orientation: "horizontal",
                "aria-label": h,
            }),
        });
    });
