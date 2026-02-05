n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(835245),
    o = n(317097),
    c = n(827734),
    d = n(397927),
    u = n(919796),
    _ = n(385612),
    m = n(652215),
    A = n(985018),
    g = n(567458);
function E(e) {
    let {
            onChange: t,
            onClose: n,
            color: r,
            suggestedColors: E,
            disabled: h,
            label: p,
            colorPickerMiddle: C,
            colorPickerFooter: x,
            showEyeDropper: T,
        } = e,
        I = s.useRef(null),
        S = (0, d.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(),
        f = c.A.colors.BACKGROUND_MOD_MUTED.css,
        N = (0, _.sN)(r),
        b = (0, o.Hl)(r),
        R = b === S ? f : b,
        v = N ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css,
        O = (0, u.A)(C),
        j = (0, u.A)(x),
        [P, y] = s.useState((0, l.A)());
    return (
        s.useEffect(() => {
            (O !== C || j !== x) && y((0, l.A)());
        }, [x, C, j, O]),
        (0, i.jsx)(d.YNO, {
            targetElementRef: I,
            positionKey: P,
            renderPopout: (e) =>
                (0, i.jsx)(d.VNw, {
                    ...e,
                    value: r,
                    onChange: t,
                    suggestedColors: E,
                    middle: C,
                    footer: x,
                    showEyeDropper: T,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsxs)("div", {
                    ref: I,
                    className: a()(g.oP, { [g.r9]: h }),
                    children: [
                        (0, i.jsx)(d.DUT, {
                            ...n,
                            tabIndex: h ? -1 : 0,
                            onClick: h ? m.tEg : t,
                            style: { backgroundColor: b, borderColor: R },
                            className: g.nf,
                            "aria-label": A.intl.string(A.t.Qp04hK),
                            focusProps: { ringTarget: I },
                            children: (0, i.jsx)(d.R2l, {
                                size: "custom",
                                className: g.BW,
                                width: 14,
                                height: 14,
                                color: v,
                            }),
                        }),
                        p,
                    ],
                });
            },
        })
    );
}
