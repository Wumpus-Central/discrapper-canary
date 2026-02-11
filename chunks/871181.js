"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(355622),
    u = n(408018),
    c = n(133343),
    d = n(915089),
    _ = n(95701),
    f = n(788868),
    h = n(652215),
    p = n(985018),
    g = n(766403);
let E = (0, _.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    A = (0, d.Ld)();
function I(e) {
    let {
            label: t = p.intl.string(p.t.B3miE8),
            onTextChange: n,
            pendingText: a,
            currentText: d,
            className: _,
            innerClassName: h,
            disableThemedBackground: I = !1,
        } = e,
        [T, y] = i.useState(a ?? d),
        [S, v] = i.useState((0, u.x7)(T)),
        C = i.useRef(!1);
    function b(e, t, r) {
        t !== T && (y(t), v(r), n(t));
    }
    function N() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        i.useEffect(() => {
            C.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === a) {
                let e = (0, u.x7)(d);
                y(d), v(e);
            }
        }, [a, d]),
        (0, r.jsx)("div", {
            className: s()(g.rf, _),
            children: (0, r.jsx)(o.D0$, {
                label: t,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c.Ay, {
                                "aria-describedby": `${e.describedById} ${A}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: s()(g.Tg, h),
                                editorClassName: g.OT,
                                maxCharacterCount: f.Jo,
                                onChange: b,
                                channel: E,
                                textValue: T,
                                richValue: S,
                                type: l.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    C.current = !1;
                                },
                                onFocus: () => {
                                    C.current = !0;
                                },
                                focused: C.current,
                                onSubmit: N,
                                disableThemedBackground: I,
                            }),
                            (0, r.jsx)(o.AC4, { id: A, children: p.intl.format(p.t["+DFxLc"], { maxLength: f.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
