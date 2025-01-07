t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(481060),
    c = t(541716),
    o = t(752305),
    u = t(893718),
    d = t(993413),
    m = t(131704),
    p = t(474936),
    x = t(981631),
    h = t(388032),
    f = t(635182);
let v = (0, m.kt)({
    id: '1',
    type: x.d4z.DM
});
function E(e) {
    let { sectionTitle: n, errors: t, onTextChange: r, pendingText: m, placeholder: x, currentText: E, className: S, innerClassName: g, disabled: j = !1, disableThemedBackground: y = !1 } = e,
        [I, P] = l.useState(null != m ? m : E),
        [T, N] = l.useState((0, o.JM)(I)),
        b = l.useRef(!1);
    return (
        l.useEffect(() => {
            b.current = !0;
        }, []),
        l.useEffect(() => {
            if (void 0 === m) {
                let e = (0, o.JM)(E);
                P(E), N(e);
            }
        }, [m, E]),
        (0, i.jsx)('div', {
            className: s()(f.body, S),
            children: (0, i.jsxs)(d.Z, {
                title: n,
                errors: t,
                disabled: j,
                children: [
                    (0, i.jsx)(u.Z, {
                        innerClassName: s()(f.textArea, g),
                        editorClassName: f.editorTextArea,
                        maxCharacterCount: p.$n,
                        onChange: function (e, n, t) {
                            n !== I && (P(n), N(t), r(n));
                        },
                        placeholder: x,
                        channel: v,
                        textValue: I,
                        richValue: T,
                        type: c.Ie.CUSTOM_GIFT,
                        onBlur: () => {
                            b.current = !1;
                        },
                        onFocus: () => {
                            b.current = !0;
                        },
                        focused: b.current,
                        onSubmit: function () {
                            return new Promise((e) => {
                                e({
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                });
                            });
                        },
                        disableThemedBackground: y
                    }),
                    (0, i.jsx)(a.HiddenVisually, { children: h.intl.format(h.t['+DFxLS'], { maxLength: p.$n }) })
                ]
            })
        })
    );
}
