n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(133343),
    p = n(915089),
    m = n(95701),
    h = n(788868),
    A = n(652215),
    _ = n(985018),
    C = n(25766);
let E = (0, m.createChannelRecord)({ id: "1", type: A.rbe.DM }),
    y = (0, p.Ld)();
function f(e) {
    let {
            label: t = _.intl.string(_.t.B3miE8),
            onTextChange: n,
            pendingText: a,
            currentText: p,
            className: m,
            innerClassName: A,
            disableThemedBackground: f = !1,
        } = e,
        [P, S] = i.useState(a ?? p),
        [x, T] = i.useState((0, c.x7)(P)),
        N = i.useRef(!1);
    function g(e, t, l) {
        t !== P && (S(t), T(l), n(t));
    }
    function I() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        i.useEffect(() => {
            N.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === a) {
                let e = (0, c.x7)(p);
                S(p), T(e);
            }
        }, [a, p]),
        (0, l.jsx)("div", {
            className: r()(C.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${y}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: r()(C.Tg, A),
                                editorClassName: C.OT,
                                maxCharacterCount: h.Jo,
                                onChange: g,
                                channel: E,
                                textValue: P,
                                richValue: x,
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
                            (0, l.jsx)(o.A, { id: y, children: _.intl.format(_.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
