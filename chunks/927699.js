n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(993413),
    f = n(131704),
    _ = n(474936),
    p = n(981631),
    h = n(388032),
    m = n(913850);
let g = (0, f.kt)({
    id: '1',
    type: p.d4z.DM
});
function E(e) {
    let { sectionTitle: t, errors: n, onTextChange: o, pendingText: f, placeholder: p, currentText: E, className: b, innerClassName: y, disabled: O = !1, disableThemedBackground: v = !1 } = e,
        [I, S] = i.useState(null != f ? f : E),
        [T, A] = i.useState((0, c.JM)(I)),
        N = i.useRef(!1);
    function C(e, t, n) {
        t !== I && (S(t), A(n), o(t));
    }
    function R() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            });
        });
    }
    return (
        i.useEffect(() => {
            N.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === f) {
                let e = (0, c.JM)(E);
                S(E), A(e);
            }
        }, [f, E]),
        (0, r.jsx)('div', {
            className: a()(m.body, b),
            children: (0, r.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: O,
                children: [
                    (0, r.jsx)(u.Z, {
                        innerClassName: a()(m.textArea, y),
                        editorClassName: m.editorTextArea,
                        maxCharacterCount: _.$n,
                        onChange: C,
                        placeholder: p,
                        channel: g,
                        textValue: I,
                        richValue: T,
                        type: l.Ie.CUSTOM_GIFT,
                        onBlur: () => {
                            N.current = !1;
                        },
                        onFocus: () => {
                            N.current = !0;
                        },
                        focused: N.current,
                        onSubmit: R,
                        disableThemedBackground: v
                    }),
                    (0, r.jsx)(s.nn4, { children: h.intl.format(h.t['+DFxLS'], { maxLength: _.$n }) })
                ]
            })
        })
    );
}
