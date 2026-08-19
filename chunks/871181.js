n.d(t, { A: () => A });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(273754),
    p = n(915089),
    m = n(95701),
    h = n(202541),
    C = n(652215),
    f = n(375708),
    E = n(383070);
let S = (0, m.createChannelRecord)({ id: "1", type: C.rbe.DM }),
    y = (0, p.Ld)();
function A(e) {
    let {
            label: t = f.intl.string(f.t.B3miE8),
            onTextChange: n,
            pendingText: r,
            currentText: p,
            className: m,
            innerClassName: C,
            disableThemedBackground: A = !1,
        } = e,
        [P, I] = i.useState(r ?? p),
        [g, v] = i.useState((0, c.x7)(P)),
        _ = i.useRef(!1);
    function T(e, t, l) {
        t !== P && (I(t), v(l), n(t));
    }
    function x() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        i.useEffect(() => {
            _.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === r) {
                let e = (0, c.x7)(p);
                I(p), v(e);
            }
        }, [r, p]),
        (0, l.jsx)("div", {
            className: a()(E.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${y}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(E.Tg, C),
                                editorClassName: E.OT,
                                maxCharacterCount: h.Jo,
                                onChange: T,
                                channel: S,
                                textValue: P,
                                richValue: g,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    _.current = !1;
                                },
                                onFocus: () => {
                                    _.current = !0;
                                },
                                focused: _.current,
                                onSubmit: x,
                                disableThemedBackground: A,
                            }),
                            (0, l.jsx)(o.A, { id: y, children: f.intl.format(f.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
