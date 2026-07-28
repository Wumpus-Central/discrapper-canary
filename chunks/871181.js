n.d(t, { A: () => y });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(138617),
    p = n(915089),
    m = n(95701),
    C = n(202541),
    h = n(652215),
    E = n(375708),
    f = n(383070);
let A = (0, m.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    S = (0, p.Ld)();
function y(e) {
    let {
            label: t = E.intl.string(E.t.B3miE8),
            onTextChange: n,
            pendingText: r,
            currentText: p,
            className: m,
            innerClassName: h,
            disableThemedBackground: y = !1,
        } = e,
        [P, I] = i.useState(r ?? p),
        [_, T] = i.useState((0, c.x7)(P)),
        g = i.useRef(!1);
    function v(e, t, l) {
        t !== P && (I(t), T(l), n(t));
    }
    function x() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        i.useEffect(() => {
            g.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === r) {
                let e = (0, c.x7)(p);
                I(p), T(e);
            }
        }, [r, p]),
        (0, l.jsx)("div", {
            className: a()(f.rf, m),
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
                                maxCharacterCount: C.Jo,
                                onChange: v,
                                channel: A,
                                textValue: P,
                                richValue: _,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    g.current = !1;
                                },
                                onFocus: () => {
                                    g.current = !0;
                                },
                                focused: g.current,
                                onSubmit: x,
                                disableThemedBackground: y,
                            }),
                            (0, l.jsx)(o.A, { id: S, children: E.intl.format(E.t["+DFxLc"], { maxLength: C.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
