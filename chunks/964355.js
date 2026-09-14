n.d(t, { i: () => u });
var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(299163),
    o = n(900283),
    d = n(889553);
function c(e) {
    return `${e.toFixed(0)}%`;
}
let u = r.forwardRef(function (e, t) {
    let {
            value: n,
            minValue: a = 0,
            maxValue: u = 100,
            tabIndex: _,
            onChange: E,
            onInteraction: A,
            renderValue: h = c,
            "aria-label": I,
        } = e,
        f = r.useRef(null),
        p = r.useMemo(() => s().debounce(() => A?.(o.Q.SLIDER), 100), [A]);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => f.current?.focus(), blur: () => f.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            className: d.x,
            children: (0, i.jsx)(l.A, {
                ref: f,
                mini: !0,
                handleSize: 16,
                className: d.a,
                initialValue: n,
                minValue: a,
                maxValue: u,
                tabIndex: _,
                onValueChange: function (e) {
                    (E(e), p());
                },
                asValueChanges: E,
                onValueRender: h,
                orientation: "horizontal",
                consumeAxisOnly: !0,
                "aria-label": I,
            }),
        })
    );
});
