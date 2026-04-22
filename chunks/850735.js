"use strict";
s.d(t, { A: () => j });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(572944),
    o = s(311907),
    c = s(397927),
    d = s(564322),
    u = s(154323),
    _ = s(785330),
    g = s(954571),
    m = s(979286),
    h = s(440938),
    p = s(590180),
    f = s(295811),
    x = s(870216),
    E = s(166489),
    C = s(613258),
    b = s(758836),
    A = s(652215),
    S = s(985018),
    v = s(941734);
let I = (e) => {
        let { tab: t } = e,
            [s, l, a] = (0, o.yK)([x.A], () => [x.A.getLayout(t), x.A.isFetchingLayout(t), x.A.getLayoutFetchError(t)]),
            c = (0, o.bG)([u.A], () => u.A.get("shop_include_unpublished")),
            d = (0, o.bG)([p.A], () => p.A.skipNumCategories),
            g = r.useMemo(() => ({ include_unpublished: c ?? !1, skip_num_categories: d ?? 0 }), [c, d]),
            h = null == s && !l && a?.status !== 404 && a?.status !== 429;
        return (r.useEffect(() => {
            h && (0, m.T2)({ tab: t });
        }, [h, t]),
        null == s)
            ? t !== i.g.HOME || h || l
                ? null
                : (0, n.jsx)(_.Z_, { tenantId: A.FYj, templateId: "shop-home", requestParams: g })
            : (0, n.jsxs)(n.Fragment, {
                  children: [t === i.g.ORBS && (0, n.jsx)(E.A, {}), (0, n.jsx)(_.Qs, { tenantId: A.FYj, layoutId: s })],
              });
    },
    L = (e) => {
        let { url: t } = e,
            [s, l] = r.useState(null);
        return (r.useEffect(() => {
            (async () => {
                try {
                    let e = await fetch(t),
                        s = await e.json();
                    l(s);
                } catch (e) {
                    l(null);
                }
            })();
        }, [t]),
        null == s)
            ? null
            : (0, n.jsx)(_.Ay, { layout: s });
    },
    j = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            u = (0, h.uM)(),
            _ = (0, o.bG)([f.A], () => f.A.getShopLayoutUrlOverride()),
            m = r.useRef(null),
            { handleScroll: p } = (0, d.X)(m, s),
            [x, E] = r.useState(b.md),
            [j, O] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != m.current) {
                    let e = () => {
                            if (null == m.current) return;
                            let e = m.current.getDistanceFromBottom();
                            x >= 36 ? O(e < 20) : e <= 200 && E((e) => e + b.md);
                        },
                        t = m.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [m, x, E, O]),
            (0, n.jsx)(c.T7Y, {
                className: v.OW,
                ref: m,
                onScroll: p,
                children: (0, n.jsxs)("div", {
                    className: v.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(v.rb, v.GS),
                            children: [
                                null != _ && "" !== _ ? (0, n.jsx)(L, { url: _ }) : (0, n.jsx)(I, { tab: s }),
                                s !== i.g.CATALOG &&
                                    x >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: v.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: S.intl.string(S.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: S.intl.string(S.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        g.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: s,
                                                            page_category: s === i.g.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(C.A, { peaking: j, transitioning: l === b.Pf.OUT }),
                    ],
                }),
            })
        );
    };
