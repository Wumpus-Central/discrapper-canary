"use strict";
n.d(t, { i: () => c });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(900283),
    l = n(106236),
    u = n(375905);
let d = (e) => `${e.toFixed(0)}%`,
    c = i.forwardRef(function (e, t) {
        let {
                value: n,
                minValue: s = 0,
                maxValue: c = 100,
                onChange: _,
                onInteraction: f,
                renderValue: E = d,
                "aria-label": h,
            } = e,
            p = i.useRef(null),
            m = i.useMemo(() => a().debounce(() => f?.(o.Q.SLIDER), 100), [f]);
        return (
            i.useImperativeHandle(
                t,
                () => ({ focus: () => p.current?.focus(), blur: () => p.current?.blur(), activate: () => !1 }),
                [],
            ),
            (0, r.jsx)("div", {
                className: u.x,
                children: (0, r.jsx)(l.A, {
                    ref: p,
                    mini: !0,
                    handleSize: 16,
                    className: u.a,
                    initialValue: n,
                    minValue: s,
                    maxValue: c,
                    onValueChange: (e) => {
                        _(e), m();
                    },
                    asValueChanges: _,
                    onValueRender: E,
                    orientation: "horizontal",
                    "aria-label": h,
                }),
            })
        );
    });
