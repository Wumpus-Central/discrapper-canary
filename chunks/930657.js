n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(915089),
    c = n(405810),
    o = n(342298),
    d = n(580630),
    u = n(636194),
    f = n(11351),
    g = n(306444),
    b = n(922975),
    m = n(996507),
    p = n(963175),
    x = n(652215),
    h = n(985018),
    j = n(844089);

function O(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, g.O)(),
        O = (0, l.bG)([u.A], () => {
            var e;
            return null == (e = u.A.getSubscriptionListing(n)) ? void 0 : e.image_asset;
        }),
        [y, v] = b.tx(n),
        [A, E] = b.bL(n),
        [N, _] = b.I8(n),
        [S, T] = b.lK(n, 1024),
        { imageCTA: I, imageAriaLabel: C, setFilename: P } = (0, m.A)(O),
        w = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              id: e.toString(),
                              value: e,
                              label: (0, d.$g)(e, x.Yri.USD),
                          })))
                ? e
                : [];
        }, [t]);

    function R(e, t) {
        null != t && P(t.name), T(e);
    }
    let D = (0, f.gN)(),
        G = (0, a.GV)(),
        L = (0, a.GV)(),
        k = (0, a.GV)();
    return (0, r.jsx)(p.A, {
        title: h.intl.string(h.t["iHU43+"]),
        intiallyExpanded: !0,
        children: (0, r.jsxs)(s.BJc, {
            gap: 24,
            children: [
                (0, r.jsxs)("div", {
                    className: j.lE,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.GI,
                            children: (0, r.jsx)(s.ksK, {
                                label: h.intl.string(h.t["grbGJ+"]),
                                placeholder: h.intl.string(h.t["So2/xP"]),
                                value: y,
                                onChange: v,
                                "aria-labelledby": G,
                                disabled: D,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: j.GI,
                            children: (0, r.jsx)(s.l6P, {
                                selectionMode: "single",
                                label: h.intl.string(h.t.Ibl4BR),
                                options: w,
                                disabled: D || null == t,
                                placeholder: h.intl.string(h.t["88XZDs"]),
                                value: A,
                                onSelectionChange: E,
                                maxOptionsVisible: 5,
                                "aria-labelledby": L,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.fs1, {
                    label: h.intl.string(h.t["1w2WcX"]),
                    placeholder: h.intl.string(h.t.p7Jr4K),
                    value: N,
                    autosize: !0,
                    onChange: _,
                    "aria-labelledby": k,
                    disabled: D,
                }),
                (0, r.jsxs)("div", {
                    className: j.r2,
                    children: [
                        (0, r.jsx)(s.D0$, {
                            label: h.intl.string(h.t.RUBM2q),
                            description: h.intl.string(h.t["0iUofN"]),
                            children: (0, r.jsx)(c.A, {
                                onChange: R,
                                "aria-label": C,
                                disabled: D,
                                text: I,
                                size: "md",
                                variant: "secondary",
                            }),
                        }),
                        (0, r.jsx)(o.A, {
                            image: S,
                            hint: I,
                            showIcon: !0,
                            showRemoveButton: !1,
                            hideSize: !0,
                            className: j.KN,
                            imageClassName: j.NW,
                            onChange: R,
                            "aria-label": C,
                            disabled: D,
                        }),
                    ],
                }),
            ],
        }),
    });
}
