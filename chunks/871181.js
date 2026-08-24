n.d(t, { A: () => I });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(273754),
    m = n(915089),
    p = n(95701),
    C = n(202541),
    h = n(652215),
    f = n(375708),
    E = n(474055);
let S = (0, p.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    y = (0, m.Ld)();
function I(e) {
    let {
            label: t = f.intl.string(f.t.B3miE8),
            onTextChange: n,
            pendingText: r,
            currentText: m,
            className: p,
            innerClassName: h,
            disableThemedBackground: I = !1,
        } = e,
        [A, g] = i.useState(r ?? m),
        [P, v] = i.useState((0, c.x7)(A)),
        x = i.useRef(!1);
    function _(e, t, l) {
        t !== A && (g(t), v(l), n(t));
    }
    function T() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        i.useEffect(() => {
            x.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === r) {
                let e = (0, c.x7)(m);
                g(m), v(e);
            }
        }, [r, m]),
        (0, l.jsx)("div", {
            className: a()(E.rf, p),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${y}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(E.Tg, h),
                                editorClassName: E.OT,
                                maxCharacterCount: C.Jo,
                                onChange: _,
                                channel: S,
                                textValue: A,
                                richValue: P,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    x.current = !1;
                                },
                                onFocus: () => {
                                    x.current = !0;
                                },
                                focused: x.current,
                                onSubmit: T,
                                disableThemedBackground: I,
                            }),
                            (0, l.jsx)(o.A, { id: y, children: f.intl.format(f.t["+DFxLc"], { maxLength: C.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
