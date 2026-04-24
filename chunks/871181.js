n.d(t, { A: () => f });
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
    A = n(652215),
    C = n(985018),
    _ = n(905126);
let E = (0, m.createChannelRecord)({ id: "1", type: A.rbe.DM }),
    y = (0, p.Ld)();
function f(e) {
    let {
            label: t = C.intl.string(C.t.B3miE8),
            onTextChange: n,
            pendingText: i,
            currentText: p,
            className: m,
            innerClassName: A,
            disableThemedBackground: f = !1,
        } = e,
        [P, S] = a.useState(i ?? p),
        [T, x] = a.useState((0, c.x7)(P)),
        N = a.useRef(!1);
    function g(e, t, l) {
        t !== P && (S(t), x(l), n(t));
    }
    function I() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        a.useEffect(() => {
            N.current = !0;
        }, []),
        a.useEffect(() => {
            if (void 0 === i) {
                let e = (0, c.x7)(p);
                S(p), x(e);
            }
        }, [i, p]),
        (0, l.jsx)("div", {
            className: r()(_.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${y}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: r()(_.Tg, A),
                                editorClassName: _.OT,
                                maxCharacterCount: h.Jo,
                                onChange: g,
                                channel: E,
                                textValue: P,
                                richValue: T,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    N.current = !1;
                                },
                                onFocus: () => {
                                    N.current = !0;
                                },
                                focused: N.current,
                                onSubmit: I,
                                disableThemedBackground: f,
                            }),
                            (0, l.jsx)(o.A, { id: y, children: C.intl.format(C.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
