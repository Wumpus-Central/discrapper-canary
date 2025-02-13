n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(541716),
    u = n(752305),
    c = n(893718),
    d = n(993413),
    f = n(131704),
    _ = n(474936),
    p = n(981631),
    h = n(388032),
    m = n(927917);
let g = (0, f.kt)({
    id: '1',
    type: p.d4z.DM
});
function E(e) {
    let { sectionTitle: t, errors: n, onTextChange: a, pendingText: f, placeholder: p, currentText: E, className: v, innerClassName: y, disabled: I = !1, disableThemedBackground: T = !1 } = e,
        [b, S] = r.useState(null != f ? f : E),
        [A, N] = r.useState((0, u.JM)(b)),
        C = r.useRef(!1);
    function R(e, t, n) {
        t !== b && (S(t), N(n), a(t));
    }
    function O() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            });
        });
    }
    return (
        r.useEffect(() => {
            C.current = !0;
        }, []),
        r.useEffect(() => {
            if (void 0 === f) {
                let e = (0, u.JM)(E);
                S(E), N(e);
            }
        }, [f, E]),
        (0, i.jsx)('div', {
            className: s()(m.body, v),
            children: (0, i.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: I,
                children: [
                    (0, i.jsx)(c.Z, {
                        innerClassName: s()(m.textArea, y),
                        editorClassName: m.editorTextArea,
                        maxCharacterCount: _.$n,
                        onChange: R,
                        placeholder: p,
                        channel: g,
                        textValue: b,
                        richValue: A,
                        type: l.Ie.CUSTOM_GIFT,
                        onBlur: () => {
                            C.current = !1;
                        },
                        onFocus: () => {
                            C.current = !0;
                        },
                        focused: C.current,
                        onSubmit: O,
                        disableThemedBackground: T
                    }),
                    (0, i.jsx)(o.nn4, { children: h.intl.format(h.t['+DFxLS'], { maxLength: _.$n }) })
                ]
            })
        })
    );
}
