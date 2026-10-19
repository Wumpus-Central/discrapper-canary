n.d(t, { A: () => I });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(845207),
    m = n(915089),
    p = n(95701),
    h = n(202541),
    C = n(652215),
    f = n(105292),
    E = n(540796);
let S = (0, p.createChannelRecord)({ id: "1", type: C.rbe.DM }),
    g = (0, m.Ld)();
function I(e) {
    let {
            label: t = f.intl.string(f.t.B3miE8),
            onTextChange: n,
            pendingText: r,
            currentText: m,
            className: p,
            innerClassName: C,
            disableThemedBackground: I = !1,
        } = e,
        [y, A] = i.useState(r ?? m),
        [P, x] = i.useState((0, c.x7)(y)),
        v = i.useRef(!1);
    function _(e, t, l) {
        t !== y && (A(t), x(l), n(t));
    }
    function T() {
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
                (A(m), x(e));
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
                                "aria-describedby": `${e.describedById} ${g}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(E.Tg, C),
                                editorClassName: E.OT,
                                maxCharacterCount: h.Jo,
                                onChange: _,
                                channel: S,
                                textValue: y,
                                richValue: P,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    v.current = !1;
                                },
                                onFocus: () => {
                                    v.current = !0;
                                },
                                focused: v.current,
                                onSubmit: T,
                                disableThemedBackground: I,
                            }),
                            (0, l.jsx)(o.A, { id: g, children: f.intl.format(f.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
