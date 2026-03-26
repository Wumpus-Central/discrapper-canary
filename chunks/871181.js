"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(355622),
    u = n(408018),
    c = n(133343),
    d = n(915089),
    _ = n(95701),
    f = n(788868),
    p = n(652215),
    h = n(985018),
    m = n(203862);
let E = (0, _.createChannelRecord)({ id: "1", type: p.rbe.DM }),
    g = (0, d.Ld)();
function A(e) {
    let {
            label: t = h.intl.string(h.t.B3miE8),
            onTextChange: n,
            pendingText: s,
            currentText: d,
            className: _,
            innerClassName: p,
            disableThemedBackground: A = !1,
        } = e,
        [I, T] = i.useState(s ?? d),
        [S, y] = i.useState((0, u.x7)(I)),
        v = i.useRef(!1);
    function N(e, t, r) {
        t !== I && (T(t), y(r), n(t));
    }
    function C() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        i.useEffect(() => {
            v.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === s) {
                let e = (0, u.x7)(d);
                T(d), y(e);
            }
        }, [s, d]),
        (0, r.jsx)("div", {
            className: a()(m.rf, _),
            children: (0, r.jsx)(o.D0$, {
                label: t,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.Ay, {
                                "aria-describedby": `${e.describedById} ${g}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(m.Tg, p),
                                editorClassName: m.OT,
                                maxCharacterCount: f.Jo,
                                onChange: N,
                                channel: E,
                                textValue: I,
                                richValue: S,
                                type: l.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    v.current = !1;
                                },
                                onFocus: () => {
                                    v.current = !0;
                                },
                                focused: v.current,
                                onSubmit: C,
                                disableThemedBackground: A,
                            }),
                            (0, r.jsx)(o.AC4, { id: g, children: h.intl.format(h.t["+DFxLc"], { maxLength: f.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
