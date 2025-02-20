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
    p = n(474936),
    _ = n(981631),
    h = n(388032),
    m = n(397381);
let g = (0, f.kt)({
    id: '1',
    type: _.d4z.DM
});
function E(e) {
    let { sectionTitle: t, errors: n, onTextChange: o, pendingText: f, placeholder: _, currentText: E, className: v, innerClassName: b, disabled: y = !1, disableThemedBackground: O = !1 } = e,
        [S, I] = i.useState(null != f ? f : E),
        [T, N] = i.useState((0, c.JM)(S)),
        A = i.useRef(!1);
    function C(e, t, n) {
        t !== S && (I(t), N(n), o(t));
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
                I(E), N(e);
            }
        }, [f, E]),
        (0, r.jsx)('div', {
            className: a()(m.body, v),
            children: (0, r.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: y,
                children: [
                    (0, r.jsx)(u.Z, {
                        innerClassName: a()(m.textArea, b),
                        editorClassName: m.editorTextArea,
                        maxCharacterCount: p.$n,
                        onChange: C,
                        placeholder: _,
                        channel: g,
                        textValue: S,
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
                    (0, r.jsx)(s.nn4, { children: h.NW.format(h.t['+DFxLS'], { maxLength: p.$n }) })
                ]
            })
        })
    );
}
