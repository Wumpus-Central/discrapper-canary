n.d(t, { A: () => I });
var a = n(627968),
    i = n(64700),
    s = n(935399),
    l = n(311907),
    r = n(732955),
    o = n(582754),
    d = n(397927),
    c = n(565645),
    u = n(736653),
    m = n(7584),
    h = n(103738),
    x = n(207803),
    p = n(84540),
    g = n(836602),
    f = n(950191),
    _ = n(576622),
    v = n(287809),
    b = n(993408),
    j = n(841702),
    A = n(892118),
    C = n(744808),
    y = n(623575),
    E = n(626768),
    S = n(464896),
    T = n(778765);
function N() {
    let e = (0, u.Ay)();
    return (0, a.jsxs)("div", {
        className: y.z3,
        children: [
            (0, a.jsx)("img", { src: (0, o.Mw)(e) ? E : S, alt: "" }),
            (0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function I() {
    let e = (0, l.bG)([v.default], () => v.default.getCurrentUser()),
        t = (0, f.Ay)(e?.id);
    i.useEffect(() => {
        e?.id != null && (0, _.A)(e.id);
    }, [e?.id]);
    let { purchases: n, isFetchingPurchases: o } = (0, j.Bf)(),
        u = i.useMemo(() => (0, b.MG)(n, new Map()), [n]),
        [{ pendingProfileFrame: E }, S] = (0, l.yK)([g.A], () => [g.A.getPendingChanges(), g.A.showNotice()]),
        I = void 0 === E ? t?.profileFrame : E,
        O = null != I ? n.get(I.skuId) : void 0,
        k = (0, A.s)(O?.items[0]) ? O.items[0] : void 0;
    return (
        (0, s.l0)(x.RE),
        (0, a.jsxs)("div", {
            className: y.kL,
            children: [
                (0, a.jsxs)(d.Heading, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, a.jsx)(c.A, {
                            emojiName: m.Ay.getByName("frame_with_picture")?.surrogates,
                            className: y.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === u.length && o && (0, a.jsx)(d.y$y, {}),
                0 === u.length && !o && (0, a.jsx)(N, {}),
                u.length > 0 &&
                    (0, a.jsxs)("div", {
                        className: y.MK,
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, a.jsxs)("ul", {
                                className: y.p_,
                                children: [
                                    (0, a.jsx)(
                                        "li",
                                        {
                                            children: (0, a.jsx)(r.$nd, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == I ? d.Uzd : void 0,
                                                disabled: null == I,
                                                onClick: () => (0, p.p)({ profileFrame: null }),
                                            }),
                                        },
                                        "none",
                                    ),
                                    u.map((e) => {
                                        let t = n.get(e.skuId);
                                        return null == t
                                            ? null
                                            : (0, a.jsx)(
                                                  "li",
                                                  {
                                                      children: (0, a.jsx)(r.$nd, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: I?.skuId === e.skuId ? d.Uzd : void 0,
                                                          disabled: I?.skuId === e.skuId,
                                                          onClick: () => (0, p.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            S && (0, a.jsx)(h.A, {}),
                            (0, a.jsxs)("div", {
                                className: y.VH,
                                children: [
                                    (0, a.jsx)(d.Text, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, a.jsxs)("div", {
                                        className: y.ME,
                                        children: [
                                            (0, a.jsx)("img", { src: T.A, alt: "" }),
                                            null != k && (0, a.jsx)(C.A, { frame: k }),
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
