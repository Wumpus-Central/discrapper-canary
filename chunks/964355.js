n.d(t, { i: () => d });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(900283),
    l = n(106236),
    c = n(134971);
let u = (e) => "".concat(e.toFixed(0), "%"),
    d = i.forwardRef(function (e, t) {
        let {
                value: n,
                minValue: a = 0,
                maxValue: d = 100,
                onChange: f,
                onInteraction: p,
                renderValue: _ = u,
                "aria-label": h,
            } = e,
            m = i.useRef(null),
            g = i.useMemo(() => s().debounce(() => (null == p ? void 0 : p(o.Q.SLIDER)), 100), [p]);
        i.useImperativeHandle(
            t,
            () => ({
                focus: () => {
                    var e;
                    return null == (e = m.current) ? void 0 : e.focus();
                },
                blur: () => {
                    var e;
                    return null == (e = m.current) ? void 0 : e.blur();
                },
                activate: () => !1,
            }),
            [],
        );
        let E = (e) => {
            f(e), g();
        };
        return (0, r.jsx)("div", {
            className: c.x,
            children: (0, r.jsx)(l.A, {
                ref: m,
                mini: !0,
                handleSize: 16,
                className: c.a,
                initialValue: n,
                minValue: a,
                maxValue: d,
                onValueChange: E,
                asValueChanges: f,
                onValueRender: _,
                orientation: "horizontal",
                "aria-label": h,
            }),
        });
    });
