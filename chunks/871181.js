"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(452027),
    l = n(140735),
    u = n(355622),
    c = n(408018),
    d = n(138617),
    _ = n(915089),
    h = n(95701),
    f = n(788868),
    p = n(652215),
    E = n(375708),
    m = n(25766);
let g = (0, h.createChannelRecord)({ id: "1", type: p.rbe.DM }),
    A = (0, _.Ld)();
function I(e) {
    let {
            label: t = E.intl.string(E.t.B3miE8),
            onTextChange: n,
            pendingText: s,
            currentText: _,
            className: h,
            innerClassName: p,
            disableThemedBackground: I = !1,
        } = e,
        [T, S] = r.useState(s ?? _),
        [y, C] = r.useState((0, c.x7)(T)),
        N = r.useRef(!1);
    function v(e, t, i) {
        t !== T && (S(t), C(i), n(t));
    }
    function R() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    return (
        r.useEffect(() => {
            N.current = !0;
        }, []),
        r.useEffect(() => {
            if (void 0 === s) {
                let e = (0, c.x7)(_);
                S(_), C(e);
            }
        }, [s, _]),
        (0, i.jsx)("div", {
            className: a()(m.rf, h),
            children: (0, i.jsx)(o.D, {
                label: t,
                children: (e) =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.Ay, {
                                "aria-describedby": `${e.describedById} ${A}`,
                                "aria-labelledby": e.labelId,
                                innerClassName: a()(m.Tg, p),
                                editorClassName: m.OT,
                                maxCharacterCount: f.Jo,
                                onChange: v,
                                channel: g,
                                textValue: T,
                                richValue: y,
                                type: u.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    N.current = !1;
                                },
                                onFocus: () => {
                                    N.current = !0;
                                },
                                focused: N.current,
                                onSubmit: R,
                                disableThemedBackground: I,
                            }),
                            (0, i.jsx)(l.A, { id: A, children: E.intl.format(E.t["+DFxLc"], { maxLength: f.Jo }) }),
                        ],
                    }),
            }),
        })
    );
}
