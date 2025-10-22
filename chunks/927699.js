n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(993413),
    f = n(131704),
    _ = n(474936),
    p = n(981631),
    h = n(388032),
    m = n(810270);
let g = (0, f.createChannelRecord)({
    id: "1",
    type: p.d4z.DM,
});
function E(e) {
    let {
            sectionTitle: t,
            errors: n,
            onTextChange: a,
            pendingText: f,
            placeholder: p,
            currentText: E,
            className: b,
            innerClassName: y,
            disabled: O = !1,
            disableThemedBackground: v = !1,
        } = e,
        [I, T] = i.useState(null != f ? f : E),
        [S, A] = i.useState((0, c.JM)(I)),
        C = i.useRef(!1);
    function N(e, t, n) {
        t !== I && (T(t), A(n), a(t));
    }
    function R() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    return (
        i.useEffect(() => {
            C.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === f) {
                let e = (0, c.JM)(E);
                T(E), A(e);
            }
        }, [f, E]),
        (0, r.jsx)("div", {
            className: o()(m.body, b),
            children: (0, r.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: O,
                children: [
                    (0, r.jsx)(u.ZP, {
                        innerClassName: o()(m.textArea, y),
                        editorClassName: m.editorTextArea,
                        maxCharacterCount: _.$n,
                        onChange: N,
                        placeholder: p,
                        channel: g,
                        textValue: I,
                        richValue: S,
                        type: l.Ie.CUSTOM_GIFT,
                        onBlur: () => {
                            C.current = !1;
                        },
                        onFocus: () => {
                            C.current = !0;
                        },
                        focused: C.current,
                        onSubmit: R,
                        disableThemedBackground: v,
                    }),
                    (0, r.jsx)(s.nn4, { children: h.intl.format(h.t["+DFxLc"], { maxLength: _.$n }) }),
                ],
            }),
        })
    );
}
