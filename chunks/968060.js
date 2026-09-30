n.d(t, { A: () => A });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(959070),
    p = n(915089),
    m = n(95701),
    h = n(202541),
    C = n(652215),
    f = n(375708),
    S = n(540796);
let E = (0, m.createChannelRecord)({ id: "1", type: C.rbe.DM }),
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
        [I, g] = i.useState(r ?? p),
        [P, v] = i.useState((0, c.x7)(I)),
        x = i.useRef(!1);
    function _(e, t, l) {
        t !== I && (g(t), v(l), n(t));
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
                let e = (0, c.x7)(p);
                (g(p), v(e));
            }
        }, [r, p]),
        (0, l.jsx)("div", {
            className: a()(S.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${y}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(S.Tg, C),
                                editorClassName: S.OT,
                                maxCharacterCount: h.Jo,
                                onChange: _,
                                channel: E,
                                textValue: I,
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
                                disableThemedBackground: A,
                            }),
                            (0, l.jsx)(o.A, { id: y, children: f.intl.format(f.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
