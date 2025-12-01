n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(993413),
    f = n(131704),
    p = n(474936),
    _ = n(981631),
    m = n(388032),
    h = n(12033);
let g = (0, f.createChannelRecord)({
    id: "1",
    type: _.d4z.DM,
});
function E(e) {
    let {
            sectionTitle: t,
            errors: n,
            onTextChange: a,
            pendingText: f,
            placeholder: _,
            currentText: E,
            className: b,
            innerClassName: y,
            disabled: O = !1,
            disableThemedBackground: v = !1,
        } = e,
        [S, I] = i.useState(null != f ? f : E),
        [T, A] = i.useState((0, c.JM)(S)),
        C = i.useRef(!1);
    function N(e, t, n) {
        t !== S && (I(t), A(n), a(t));
    }
    function P() {
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
                I(E), A(e);
            }
        }, [f, E]),
        (0, r.jsx)("div", {
            className: o()(h.body, b),
            children: (0, r.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: O,
                children: [
                    (0, r.jsx)(u.ZP, {
                        innerClassName: o()(h.textArea, y),
                        editorClassName: h.editorTextArea,
                        maxCharacterCount: p.$n,
                        onChange: N,
                        placeholder: _,
                        channel: g,
                        textValue: S,
                        richValue: T,
                        type: l.Ie.CUSTOM_GIFT,
                        onBlur: () => {
                            C.current = !1;
                        },
                        onFocus: () => {
                            C.current = !0;
                        },
                        focused: C.current,
                        onSubmit: P,
                        disableThemedBackground: v,
                    }),
                    (0, r.jsx)(s.nn4, { children: m.intl.format(m.t["+DFxLc"], { maxLength: p.$n }) }),
                ],
            }),
        })
    );
}
