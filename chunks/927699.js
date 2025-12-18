n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(313201),
    f = n(131704),
    p = n(474936),
    _ = n(981631),
    m = n(388032),
    h = n(765989);
let g = (0, f.createChannelRecord)({
        id: "1",
        type: _.d4z.DM,
    }),
    E = (0, d.hQ)();
function b(e) {
    let {
            label: t = m.intl.string(m.t.B3miE8),
            onTextChange: n,
            pendingText: a,
            currentText: d,
            className: f,
            innerClassName: _,
            disableThemedBackground: b = !1,
        } = e,
        [y, O] = i.useState(null != a ? a : d),
        [v, S] = i.useState((0, c.JM)(y)),
        I = i.useRef(!1);
    function T(e, t, r) {
        t !== y && (O(t), S(r), n(t));
    }
    function C() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    return (
        i.useEffect(() => {
            I.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === a) {
                let e = (0, c.JM)(d);
                O(d), S(e);
            }
        }, [a, d]),
        (0, r.jsx)("div", {
            className: o()(h.body, f),
            children: (0, r.jsx)(s.gNt, {
                label: t,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.ZP, {
                                "aria-describedby": "".concat(e.describedById, " ").concat(E),
                                "aria-labelledby": e.labelId,
                                innerClassName: o()(h.textArea, _),
                                editorClassName: h.editorTextArea,
                                maxCharacterCount: p.$n,
                                onChange: T,
                                channel: g,
                                textValue: y,
                                richValue: v,
                                type: l.Ie.CUSTOM_GIFT,
                                onBlur: () => {
                                    I.current = !1;
                                },
                                onFocus: () => {
                                    I.current = !0;
                                },
                                focused: I.current,
                                onSubmit: C,
                                disableThemedBackground: b,
                            }),
                            (0, r.jsx)(s.nn4, {
                                id: E,
                                children: m.intl.format(m.t["+DFxLc"], { maxLength: p.$n }),
                            }),
                        ],
                    }),
            }),
        })
    );
}
