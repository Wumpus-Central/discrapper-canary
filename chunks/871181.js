n.d(t, { A: () => S });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(452027),
    o = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(138617),
    p = n(915089),
    m = n(95701),
    h = n(788868),
    A = n(652215),
    E = n(375708),
    C = n(905126);
let y = (0, m.createChannelRecord)({ id: "1", type: A.rbe.DM }),
    _ = (0, p.Ld)();
function S(e) {
    let {
            label: t = E.intl.string(E.t.B3miE8),
            onTextChange: n,
            pendingText: i,
            currentText: p,
            className: m,
            innerClassName: A,
            disableThemedBackground: S = !1,
        } = e,
        [P, I] = r.useState(i ?? p),
        [f, T] = r.useState((0, c.x7)(P)),
        N = r.useRef(!1);
    function g(e, t, l) {
        t !== P && (I(t), T(l), n(t));
    }
    function v() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        r.useEffect(() => {
            N.current = !0;
        }, []),
        r.useEffect(() => {
            if (void 0 === i) {
                let e = (0, c.x7)(p);
                I(p), T(e);
            }
        }, [i, p]),
        (0, l.jsx)("div", {
            className: a()(C.rf, m),
            children: (0, l.jsx)(s.D, {
                label: t,
                children: (e) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${_}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(C.Tg, A),
                                editorClassName: C.OT,
                                maxCharacterCount: h.Jo,
                                onChange: g,
                                channel: y,
                                textValue: P,
                                richValue: f,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    N.current = !1;
                                },
                                onFocus: () => {
                                    N.current = !0;
                                },
                                focused: N.current,
                                onSubmit: v,
                                disableThemedBackground: S,
                            }),
                            (0, l.jsx)(o.A, { id: _, children: E.intl.format(E.t["+DFxLc"], { maxLength: h.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
