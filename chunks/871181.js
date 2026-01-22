n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(355622),
    c = n(408018),
    u = n(133343),
    d = n(915089),
    f = n(95701),
    p = n(788868),
    _ = n(652215),
    h = n(985018),
    m = n(3477);
let g = (0, f.createChannelRecord)({
        id: "1",
        type: _.rbe.DM,
    }),
    E = (0, d.Ld)();
function b(e) {
    let {
            label: t = h.intl.string(h.t.B3miE8),
            onTextChange: n,
            pendingText: a,
            currentText: d,
            className: f,
            innerClassName: _,
            disableThemedBackground: b = !1,
        } = e,
        [y, O] = i.useState(null != a ? a : d),
        [A, v] = i.useState((0, c.x7)(y)),
        S = i.useRef(!1);
    function I(e, t, r) {
        t !== y && (O(t), v(r), n(t));
    }
    function T() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    return (
        i.useEffect(() => {
            S.current = !0;
        }, []),
        i.useEffect(() => {
            if (void 0 === a) {
                let e = (0, c.x7)(d);
                O(d), v(e);
            }
        }, [a, d]),
        (0, r.jsx)("div", {
            className: s()(m.rf, f),
            children: (0, r.jsx)(o.D0$, {
                label: t,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.Ay, {
                                "aria-describedby": "".concat(e.describedById, " ").concat(E),
                                "aria-labelledby": e.labelId,
                                innerClassName: s()(m.Tg, _),
                                editorClassName: m.OT,
                                maxCharacterCount: p.Jo,
                                onChange: I,
                                channel: g,
                                textValue: y,
                                richValue: A,
                                type: l.oU.CUSTOM_GIFT,
                                onBlur: () => {
                                    S.current = !1;
                                },
                                onFocus: () => {
                                    S.current = !0;
                                },
                                focused: S.current,
                                onSubmit: T,
                                disableThemedBackground: b,
                            }),
                            (0, r.jsx)(o.AC4, {
                                id: E,
                                children: h.intl.format(h.t["+DFxLc"], { maxLength: p.Jo }),
                            }),
                        ],
                    }),
            }),
        })
    );
}
