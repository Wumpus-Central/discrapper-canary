n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(835245),
    o = n(317097),
    d = n(827734),
    u = n(602853),
    c = n(265872),
    g = n(508274),
    m = n(939249),
    _ = n(22231),
    A = n(919796),
    h = n(385612),
    p = n(652215),
    x = n(985018),
    E = n(773431);
function T(e) {
    let {
            onChange: t,
            onClose: n,
            color: l,
            suggestedColors: T,
            disabled: S,
            label: f,
            colorPickerMiddle: b,
            colorPickerFooter: C,
            showEyeDropper: v,
        } = e,
        N = s.useRef(null),
        I = (0, u.r)(d.A.colors.BACKGROUND_BASE_LOW).hex(),
        y = d.A.colors.BACKGROUND_MOD_MUTED.css,
        j = (0, h.sN)(l),
        O = (0, o.Hl)(l),
        R = O === I ? y : O,
        L = j ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css,
        D = (0, A.A)(b),
        P = (0, A.A)(C),
        [G, M] = s.useState((0, r.A)());
    return (
        s.useEffect(() => {
            (D !== b || P !== C) && M((0, r.A)());
        }, [C, b, P, D]),
        (0, i.jsx)(c.Y, {
            targetElementRef: N,
            positionKey: G,
            renderPopout: (e) =>
                (0, i.jsx)(g.VN, {
                    ...e,
                    value: l,
                    onChange: t,
                    suggestedColors: T,
                    middle: b,
                    footer: C,
                    showEyeDropper: v,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsxs)("div", {
                    ref: N,
                    className: a()(E.oP, { [E.r9]: S }),
                    children: [
                        (0, i.jsx)(m.D, {
                            ...n,
                            tabIndex: S ? -1 : 0,
                            onClick: S ? p.tEg : t,
                            style: { backgroundColor: O, borderColor: R },
                            className: E.nf,
                            "aria-label": x.intl.string(x.t.Qp04hK),
                            focusProps: { ringTarget: N },
                            children: (0, i.jsx)(_.R, {
                                size: "custom",
                                className: E.BW,
                                width: 14,
                                height: 14,
                                color: L,
                            }),
                        }),
                        f,
                    ],
                });
            },
        })
    );
}
