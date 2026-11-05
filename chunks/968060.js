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
var C = n(652215),
    h = n(792996),
    f = n(540796);
let E = (0, p.createChannelRecord)({ id: "1", type: C.rbe.DM }),
    S = (0, m.Ld)();
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    label: t = h.intl.string(h.t.B3miE8),
                    onTextChange: n,
                    pendingText: r,
                    currentText: m,
                    className: p,
                    innerClassName: C,
                    disableThemedBackground: g = !1,
                } = e,
                [y, I] = i.useState(r ?? m),
                [A, P] = i.useState((0, c.x7)(y)),
                v = i.useRef(!1);
            function x(e, t, l) {
                t !== y && (I(t), P(l), n(t));
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
                        (I(m), P(e));
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
                                        innerClassName: a()(f.Tg, C),
                                        editorClassName: f.OT,
                                        maxCharacterCount: 190,
                                        onChange: x,
                                        channel: E,
                                        textValue: y,
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
                                        disableThemedBackground: g,
                                    }),
                                    (0, l.jsx)(o.A, {
                                        id: S,
                                        children: h.intl.format(h.t["+DFxLc"], { maxLength: 190 }),
                                    }),
                                ],
                            }),
                    }),
                })
            );
        },
    },
);
