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
function u(e) {
    let { ref: t, ...n } = e,
        {
            value: a,
            minValue: u = 0,
            maxValue: _ = 100,
            tabIndex: E,
            onChange: A,
            onInteraction: h,
            renderValue: f = c,
            "aria-label": I,
        } = n,
        p = r.useRef(null),
        T = r.useMemo(() => s().debounce(() => h?.(o.Q.SLIDER), 100), [h]);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => p.current?.focus(), blur: () => p.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            className: d.x,
            children: (0, i.jsx)(l.A, {
                ref: p,
                mini: !0,
                handleSize: 16,
                className: d.a,
                initialValue: a,
                minValue: u,
                maxValue: _,
                tabIndex: E,
                onValueChange: function (e) {
                    (A(e), T());
                },
                asValueChanges: A,
                onValueRender: f,
                orientation: "horizontal",
                consumeAxisOnly: !0,
                "aria-label": I,
            }),
        })
    );
}
