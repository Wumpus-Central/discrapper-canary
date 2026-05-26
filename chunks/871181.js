n.d(t, { A: () => S });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(201349),
    p = n(915089),
    m = n(95701),
    h = n(788868),
    C = n(652215),
    A = n(375708),
    y = n(25766);
let E = (0, m.createChannelRecord)({ id: "1", type: C.rbe.DM }),
    P = (0, p.Ld)();
function S(e) {
    let {
            label: t = A.intl.string(A.t.B3miE8),
            onTextChange: n,
            pendingText: i,
            currentText: p,
            className: m,
            innerClassName: C,
            disableThemedBackground: S = !1,
        } = e,
        [_, f] = a.useState(i ?? p),
        [T, I] = a.useState((0, c.x7)(_)),
        x = a.useRef(!1);
    function N(e, t, l) {
        t !== _ && (f(t), I(l), n(t));
    }
    function g() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        a.useEffect(() => {
            x.current = !0;
        }, []),
        a.useEffect(() => {
            if (void 0 === i) {
                let e = (0, c.x7)(p);
                f(p), I(e);
            }
        }, [i, p]),
        (0, l.jsx)("div", {
            className: r()(y.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${P}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: r()(y.Tg, C),
                                editorClassName: y.OT,
                                maxCharacterCount: h.Jo,
                                onChange: N,
                                channel: E,
                                textValue: _,
                                richValue: T,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    x.current = !1;
                                },
                                onFocus: () => {
                                    x.current = !0;
                                },
                                focused: x.current,
                                onSubmit: g,
                                disableThemedBackground: S,
                            }),
                            (0, l.jsx)(o.A, { id: P, children: A.intl.format(A.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
