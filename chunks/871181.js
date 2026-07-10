n.d(t, { A: () => S });
var l = n(627968),
    i = n(64700),
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
    A = n(905126);
let f = (0, m.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    y = (0, p.Ld)();
function S(e) {
    let {
            label: t = E.intl.string(E.t.B3miE8),
            onTextChange: n,
            pendingText: r,
            currentText: p,
            className: m,
            innerClassName: h,
            disableThemedBackground: S = !1,
        } = e,
        [P, T] = i.useState(r ?? p),
        [I, _] = i.useState((0, c.x7)(P)),
        g = i.useRef(!1);
    function x(e, t, l) {
        t !== P && (T(t), _(l), n(t));
    }
    function v() {
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
                T(p), _(e);
            }
        }, [r, p]),
        (0, l.jsx)("div", {
            className: a()(A.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${y}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(A.Tg, h),
                                editorClassName: A.OT,
                                maxCharacterCount: C.Jo,
                                onChange: x,
                                channel: f,
                                textValue: P,
                                richValue: I,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    g.current = !1;
                                },
                                onFocus: () => {
                                    g.current = !0;
                                },
                                focused: g.current,
                                onSubmit: v,
                                disableThemedBackground: S,
                            }),
                            (0, l.jsx)(o.A, { id: y, children: E.intl.format(E.t["+DFxLc"], { maxLength: C.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
