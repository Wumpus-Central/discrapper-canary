n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
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
            onTextChange: o,
            pendingText: f,
            placeholder: _,
            currentText: E,
            className: b,
            innerClassName: y,
            disabled: O = !1,
            disableThemedBackground: v = !1,
        } = e,
        [S, I] = i.useState(null != f ? f : E),
        [T, C] = i.useState((0, c.JM)(S)),
        A = i.useRef(!1);
    function N(e, t, n) {
        t !== S && (I(t), C(n), o(t));
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
            A.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === f) {
                let e = (0, c.JM)(E);
                I(E), C(e);
            }
        }, [f, E]),
        (0, r.jsx)("div", {
            className: a()(h.body, b),
            children: (0, r.jsxs)(d.Z, {
                title: t,
                errors: n,
                disabled: O,
                children: [
                    (0, r.jsx)(u.ZP, {
                        innerClassName: a()(h.textArea, y),
                        editorClassName: h.editorTextArea,
                        maxCharacterCount: p.$n,
                        onChange: N,
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
                        onSubmit: P,
                        disableThemedBackground: v,
                    }),
                    (0, r.jsx)(s.nn4, { children: m.intl.format(m.t["+DFxLc"], { maxLength: p.$n }) }),
                ],
            }),
        })
    );
}
