r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(541716),
    d = r(752305),
    f = r(893718),
    p = r(993413),
    h = r(131704),
    _ = r(474936),
    m = r(981631),
    g = r(388032),
    E = r(635182);
let v = (0, h.kt)({
    id: '1',
    type: m.d4z.DM
});
function y(e) {
    let { sectionTitle: n, errors: r, onTextChange: i, pendingText: s, placeholder: h, currentText: m, className: y, innerClassName: b, disabled: I = !1, disableThemedBackground: T = !1 } = e,
        [S, A] = o.useState(null != s ? s : m),
        [C, N] = o.useState((0, d.JM)(S)),
        R = o.useRef(!1);
    function O(e, n, r) {
        n !== S && (A(n), N(r), i(n));
    }
    function D() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            });
        });
    }
    return (
        o.useEffect(() => {
            R.current = !0;
        }, []),
        o.useEffect(() => {
            if (void 0 === s) {
                let e = (0, d.JM)(m);
                A(m), N(e);
            }
        }, [s, m]),
        (0, a.jsx)('div', {
            className: l()(E.body, y),
            children: (0, a.jsxs)(p.Z, {
                title: n,
                errors: r,
                disabled: I,
                children: [
                    (0, a.jsx)(f.Z, {
                        innerClassName: l()(E.textArea, b),
                        editorClassName: E.editorTextArea,
                        maxCharacterCount: _.$n,
                        onChange: O,
                        placeholder: h,
                        channel: v,
                        textValue: S,
                        richValue: C,
                        type: c.Ie.CUSTOM_GIFT,
                        onBlur: () => {
                            R.current = !1;
                        },
                        onFocus: () => {
                            R.current = !0;
                        },
                        focused: R.current,
                        onSubmit: D,
                        disableThemedBackground: T
                    }),
                    (0, a.jsx)(u.HiddenVisually, { children: g.intl.format(g.t['+DFxLS'], { maxLength: _.$n }) })
                ]
            })
        })
    );
}
