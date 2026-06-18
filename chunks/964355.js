"use strict";
n.d(t, { i: () => d });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(900283),
    l = n(106236),
    u = n(598286);
function c(e) {
    return `${e.toFixed(0)}%`;
}
let d = r.forwardRef(function (e, t) {
    let {
            value: n,
            minValue: s = 0,
            maxValue: d = 100,
            onChange: _,
            onInteraction: h,
            renderValue: f = c,
            "aria-label": p,
        } = e,
        E = r.useRef(null),
        m = r.useMemo(() => a().debounce(() => h?.(o.Q.SLIDER), 100), [h]);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => E.current?.focus(), blur: () => E.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            className: u.x,
            children: (0, i.jsx)(l.A, {
                ref: E,
                mini: !0,
                handleSize: 16,
                className: u.a,
                initialValue: n,
                minValue: s,
                maxValue: d,
                onValueChange: function (e) {
                    _(e), m();
                },
                asValueChanges: _,
                onValueRender: f,
                orientation: "horizontal",
                consumeAxisOnly: !0,
                "aria-label": p,
            }),
        })
    );
});
