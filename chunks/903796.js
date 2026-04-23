a.d(t, { A: () => w });
var n = a(627968),
    l = a(64700),
    i = a(935399),
    s = a(311907),
    r = a(821609),
    o = a(462887),
    d = a(834730),
    c = a(534514),
    u = a(289873),
    m = a(478016),
    h = a(565645),
    p = a(736653),
    x = a(7584),
    g = a(103738),
    v = a(207803),
    b = a(84540),
    _ = a(836602),
    f = a(950191),
    j = a(576622),
    A = a(287809),
    y = a(993408),
    C = a(841702),
    E = a(892118),
    S = a(744808),
    N = a(725287),
    k = a(626768),
    I = a(464896),
    D = a(778765);
function T() {
    let e = (0, p.Ay)();
    return (0, n.jsxs)("div", {
        className: N.z3,
        children: [
            (0, n.jsx)("img", { src: (0, o.M)(e) ? k : I, alt: "" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function w() {
    let e = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        t = (0, f.Ay)(e?.id);
    l.useEffect(() => {
        e?.id != null && (0, j.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: o } = (0, C.Bf)(),
        p = l.useMemo(() => (0, y.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: k }, I] = (0, s.yK)([_.A], () => [_.A.getPendingChanges(), _.A.showNotice()]),
        w = void 0 === k ? t?.profileFrame : k,
        O = null != w ? a.get(w.skuId) : void 0,
        R = (0, E.s)(O?.items[0]) ? O.items[0] : void 0;
    return (
        (0, i.l0)(v.RE),
        (0, n.jsxs)("div", {
            className: N.kL,
            children: [
                (0, n.jsxs)(c.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, n.jsx)(h.A, {
                            emojiName: x.Ay.getByName("frame_with_picture")?.surrogates,
                            className: N.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === p.length && o && (0, n.jsx)(u.y, {}),
                0 === p.length && !o && (0, n.jsx)(T, {}),
                p.length > 0 &&
                    (0, n.jsxs)("div", {
                        className: N.MK,
                        children: [
                            (0, n.jsx)(d.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, n.jsxs)("ul", {
                                className: N.p_,
                                children: [
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(r.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == w ? m.U : void 0,
                                                disabled: null == w,
                                                onClick: () => (0, b.p)({ profileFrame: null }),
                                            }),
                                        },
                                        "none",
                                    ),
                                    p.map((e) => {
                                        let t = a.get(e.skuId);
                                        return null == t
                                            ? null
                                            : (0, n.jsx)(
                                                  "li",
                                                  {
                                                      children: (0, n.jsx)(r.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: w?.skuId === e.skuId ? m.U : void 0,
                                                          disabled: w?.skuId === e.skuId,
                                                          onClick: () => (0, b.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            I && (0, n.jsx)(g.A, {}),
                            (0, n.jsxs)("div", {
                                className: N.VH,
                                children: [
                                    (0, n.jsx)(d.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, n.jsxs)("div", {
                                        className: N.ME,
                                        children: [
                                            (0, n.jsx)("img", { src: D.A, alt: "" }),
                                            null != R && (0, n.jsx)(S.A, { frame: R }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        })
    );
}
