"use strict";
n.d(t, { i: () => u });
var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(900283),
    o = n(106236),
    d = n(889553);
function c(e) {
    return `${e.toFixed(0)}%`;
}
let u = r.forwardRef(function (e, t) {
    let {
            value: n,
            minValue: a = 0,
            maxValue: u = 100,
            onChange: _,
            onInteraction: E,
            renderValue: A = c,
            "aria-label": h,
        } = e,
        I = r.useRef(null),
        f = r.useMemo(() => s().debounce(() => E?.(l.Q.SLIDER), 100), [E]);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => I.current?.focus(), blur: () => I.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            className: d.x,
            children: (0, i.jsx)(o.A, {
                ref: I,
                mini: !0,
                handleSize: 16,
                className: d.a,
                initialValue: n,
                minValue: a,
                maxValue: u,
                onValueChange: function (e) {
                    _(e), f();
                },
                asValueChanges: _,
                onValueRender: A,
                orientation: "horizontal",
                consumeAxisOnly: !0,
                "aria-label": h,
            }),
        })
    );
});
