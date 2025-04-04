n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
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
    let { sectionTitle: t, errors: n, onTextChange: o, pendingText: f, placeholder: p, currentText: E, className: b, innerClassName: y, disabled: v = !1, disableThemedBackground: O = !1 } = e,
        [I, S] = i.useState(null != f ? f : E),
        [T, N] = i.useState((0, c.JM)(I)),
        A = i.useRef(!1);
    function C(e, t, n) {
        t !== I && (S(t), N(n), o(t));
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
            A.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === f) {
                let e = (0, c.JM)(E);
                S(E), N(e);
            }
        }, [f, E]),
        (0, r.jsx)('div', {
            className: a()(m.body, b),
            children: (0, r.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: v,
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
                            A.current = !1;
                        },
                        onFocus: () => {
                            A.current = !0;
                        },
                        focused: A.current,
                        onSubmit: R,
                        disableThemedBackground: O
                    }),
                    (0, r.jsx)(s.nn4, { children: h.NW.format(h.t['+DFxLS'], { maxLength: _.$n }) })
                ]
            })
        })
    );
}
