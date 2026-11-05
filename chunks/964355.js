var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(310592),
    o = n(900283),
    d = n(889553);
function c(e) {
    return `${e.toFixed(0)}%`;
}
n.d(
    t,
    {},
    {
        i: function (e) {
            let { ref: t, ...n } = e,
                {
                    value: a,
                    minValue: u = 0,
                    maxValue: _ = 100,
                    tabIndex: E,
                    onChange: A,
                    onInteraction: f,
                    renderValue: h = c,
                    "aria-label": I,
                } = n,
                p = r.useRef(null),
                m = r.useMemo(() => s().debounce(() => f?.(o.Q.SLIDER), 100), [f]);
            return (
                r.useImperativeHandle(
                    t,
                    () => ({ focus: () => p.current?.focus(), blur: () => p.current?.blur(), activate: () => !1 }),
                    [],
                ),
                (0, i.jsx)("div", {
                    className: d.x,
                    children: (0, i.jsx)(l.j, {
                        inputRef: p,
                        defaultValue: a,
                        minValue: u,
                        maxValue: _,
                        tabIndex: E,
                        onChange: A,
                        onChangeEnd: function (e) {
                            (A(e), m());
                        },
                        formatValue: h,
                        passThroughVerticalArrowKeys: !0,
                        "aria-label": I,
                    }),
                })
            );
        },
    },
);
