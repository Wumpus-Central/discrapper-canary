"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(452027),
    l = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(133343),
    _ = n(915089),
    f = n(95701),
    p = n(788868),
    h = n(652215),
    E = n(985018),
    m = n(905126);
let g = (0, f.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    A = (0, _.Ld)();
function I(e) {
    let {
            label: t = E.intl.string(E.t.B3miE8),
            onTextChange: n,
            pendingText: s,
            currentText: _,
            className: f,
            innerClassName: h,
            disableThemedBackground: I = !1,
        } = e,
        [T, S] = i.useState(s ?? _),
        [y, N] = i.useState((0, c.x7)(T)),
        v = i.useRef(!1);
    function C(e, t, r) {
        t !== T && (S(t), N(r), n(t));
    }
    function O() {
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
                let e = (0, c.x7)(_);
                S(_), N(e);
            }
        }, [s, _]),
        (0, r.jsx)("div", {
            className: a()(m.rf, f),
            children: (0, r.jsx)(o.D, {
                label: t,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${A}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(m.Tg, h),
                                editorClassName: m.OT,
                                maxCharacterCount: p.Jo,
                                onChange: C,
                                channel: g,
                                textValue: T,
                                richValue: y,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    v.current = !1;
                                },
                                onFocus: () => {
                                    v.current = !0;
                                },
                                focused: v.current,
                                onSubmit: O,
                                disableThemedBackground: I,
                            }),
                            (0, r.jsx)(l.A, { id: A, children: E.intl.format(E.t["+DFxLc"], { maxLength: p.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
