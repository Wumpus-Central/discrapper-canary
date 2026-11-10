var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(989161),
    m = n(915089),
    p = n(95701);
n(682901);
var h = n(652215),
    C = n(792996),
    f = n(540796);
let E = (0, p.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    S = (0, m.Ld)();
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    label: t = C.intl.string(C.t.B3miE8),
                    onTextChange: n,
                    pendingText: r,
                    currentText: m,
                    className: p,
                    innerClassName: h,
                    disableThemedBackground: I = !1,
                } = e,
                [g, y] = i.useState(r ?? m),
                [A, P] = i.useState((0, c.x7)(g)),
                v = i.useRef(!1);
            function x(e, t, l) {
                t !== g && (y(t), P(l), n(t));
            }
            function _() {
                return new Promise((e) => {
                    e({ shouldClear: !1, shouldRefocus: !0 });
                });
            }
            return (
                i.useEffect(() => {
                    v.current = !0;
                }, []),
                i.useEffect(() => {
                    if (void 0 === r) {
                        let e = (0, c.x7)(m);
                        (y(m), P(e));
                    }
                }, [r, m]),
                (0, l.jsx)("div", {
                    className: a()(f.rf, p),
                    children: (0, l.jsx)(s.D, {
                        label: t,
                        children: (e) =>
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(d.Ay, {
                                        "aria-describedby": `${e.describedById} ${S}`,
                                        "aria-labelledby": e.labelId,
                                        innerClassName: a()(f.Tg, h),
                                        editorClassName: f.OT,
                                        maxCharacterCount: 190,
                                        onChange: x,
                                        channel: E,
                                        textValue: g,
                                        richValue: A,
                                        type: u.oU.CUSTOM_GIFT,
                                        onBlur: () => {
                                            v.current = !1;
                                        },
                                        onFocus: () => {
                                            v.current = !0;
                                        },
                                        focused: v.current,
                                        onSubmit: _,
                                        disableThemedBackground: I,
                                    }),
                                    (0, l.jsx)(o.A, {
                                        id: S,
                                        children: C.intl.format(C.t["+DFxLc"], { maxLength: 190 }),
                                    }),
                                ],
                            }),
                    }),
                })
            );
        },
    },
);
