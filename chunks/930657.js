"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(915089),
    o = n(405810),
    d = n(342298),
    c = n(580630),
    u = n(636194),
    m = n(11351),
    g = n(306444),
    x = n(922975),
    h = n(996507),
    _ = n(963175),
    A = n(652215),
    p = n(985018),
    f = n(844089);
function j(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, g.O)(),
        j = (0, l.bG)([u.A], () => u.A.getSubscriptionListing(n)?.image_asset),
        [N, E] = x.tx(n),
        [b, T] = x.bL(n),
        [C, I] = x.I8(n),
        [v, S] = x.lK(n, 1024),
        { imageCTA: y, imageAriaLabel: R, setFilename: O } = (0, h.A)(j),
        G = s.useMemo(() => t?.map((e) => ({ id: e.toString(), value: e, label: (0, c.$g)(e, A.Yri.USD) })) ?? [], [t]);
    function L(e, t) {
        null != t && O(t.name), S(e);
    }
    let D = (0, m.gN)(),
        M = (0, a.GV)(),
        k = (0, a.GV)(),
        U = (0, a.GV)();
    return (0, i.jsx)(_.A, {
        title: p.intl.string(p.t["iHU43+"]),
        intiallyExpanded: !0,
        children: (0, i.jsxs)(r.BJc, {
            gap: 24,
            children: [
                (0, i.jsxs)("div", {
                    className: f.lE,
                    children: [
                        (0, i.jsx)("div", {
                            className: f.GI,
                            children: (0, i.jsx)(r.ksK, {
                                label: p.intl.string(p.t["grbGJ+"]),
                                placeholder: p.intl.string(p.t["So2/xP"]),
                                value: N,
                                onChange: E,
                                "aria-labelledby": M,
                                disabled: D,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: f.GI,
                            children: (0, i.jsx)(r.l6P, {
                                selectionMode: "single",
                                label: p.intl.string(p.t.Ibl4BR),
                                options: G,
                                disabled: D || null == t,
                                placeholder: p.intl.string(p.t["88XZDs"]),
                                value: b,
                                onSelectionChange: T,
                                maxOptionsVisible: 5,
                                "aria-labelledby": k,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(r.fs1, {
                    label: p.intl.string(p.t["1w2WcX"]),
                    placeholder: p.intl.string(p.t.p7Jr4K),
                    value: C,
                    autosize: !0,
                    onChange: I,
                    "aria-labelledby": U,
                    disabled: D,
                }),
                (0, i.jsxs)("div", {
                    className: f.r2,
                    children: [
                        (0, i.jsx)(r.D0$, {
                            label: p.intl.string(p.t.RUBM2q),
                            description: p.intl.string(p.t["0iUofN"]),
                            children: (0, i.jsx)(o.A, {
                                onChange: L,
                                "aria-label": R,
                                disabled: D,
                                text: y,
                                size: "md",
                                variant: "secondary",
                            }),
                        }),
                        (0, i.jsx)(d.A, {
                            image: v,
                            hint: y,
                            showIcon: !0,
                            showRemoveButton: !1,
                            hideSize: !0,
                            className: f.KN,
                            imageClassName: f.NW,
                            onChange: L,
                            "aria-label": R,
                            disabled: D,
                        }),
                    ],
                }),
            ],
        }),
    });
}
