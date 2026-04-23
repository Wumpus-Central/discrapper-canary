"use strict";
s.d(t, { A: () => T });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(572944),
    o = s(311907),
    c = s(599319),
    d = s(534514),
    u = s(821609),
    g = s(564322),
    h = s(154323),
    _ = s(785330),
    m = s(954571),
    p = s(979286),
    f = s(440938),
    E = s(590180),
    x = s(295811),
    A = s(870216),
    C = s(166489),
    S = s(613258),
    b = s(758836),
    v = s(652215),
    L = s(985018),
    I = s(941734);
let j = (e) => {
        let { tab: t } = e,
            [s, r, a] = (0, o.yK)([A.A], () => [A.A.getLayout(t), A.A.isFetchingLayout(t), A.A.getLayoutFetchError(t)]),
            c = (0, o.bG)([h.A], () => h.A.get("shop_include_unpublished")),
            d = (0, o.bG)([E.A], () => E.A.skipNumCategories),
            u = l.useMemo(() => ({ include_unpublished: c ?? !1, skip_num_categories: d ?? 0 }), [c, d]),
            g = null == s && !r && a?.status !== 404 && a?.status !== 429;
        return (l.useEffect(() => {
            g && (0, p.T2)({ tab: t });
        }, [g, t]),
        null == s)
            ? t !== i.g.HOME || g || r
                ? null
                : (0, n.jsx)(_.Z_, { tenantId: v.FYj, templateId: "shop-home", requestParams: u })
            : (0, n.jsxs)(n.Fragment, {
                  children: [t === i.g.ORBS && (0, n.jsx)(C.A, {}), (0, n.jsx)(_.Qs, { tenantId: v.FYj, layoutId: s })],
              });
    },
    N = (e) => {
        let { url: t } = e,
            [s, r] = l.useState(null);
        return (l.useEffect(() => {
            (async () => {
                try {
                    let e = await fetch(t),
                        s = await e.json();
                    r(s);
                } catch (e) {
                    r(null);
                }
            })();
        }, [t]),
        null == s)
            ? null
            : (0, n.jsx)(_.Ay, { layout: s });
    },
    T = (e) => {
        let { handleTransition: t, tab: s, transitionState: r } = e,
            h = (0, f.uM)(),
            _ = (0, o.bG)([x.A], () => x.A.getShopLayoutUrlOverride()),
            p = l.useRef(null),
            { handleScroll: E } = (0, g.X)(p, s),
            [A, C] = l.useState(b.md),
            [T, O] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != p.current) {
                    let e = () => {
                            if (null == p.current) return;
                            let e = p.current.getDistanceFromBottom();
                            A >= 36 ? O(e < 20) : e <= 200 && C((e) => e + b.md);
                        },
                        t = p.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [p, A, C, O]),
            (0, n.jsx)(c.Ch, {
                className: I.OW,
                ref: p,
                onScroll: E,
                children: (0, n.jsxs)("div", {
                    className: I.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(I.rb, I.GS),
                            children: [
                                null != _ && "" !== _ ? (0, n.jsx)(N, { url: _ }) : (0, n.jsx)(j, { tab: s }),
                                s !== i.g.CATALOG &&
                                    A >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: I.R$,
                                        children: [
                                            (0, n.jsx)(d.D, {
                                                variant: "heading-md/semibold",
                                                children: L.intl.string(L.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(u.$, {
                                                variant: "primary",
                                                text: L.intl.string(L.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        m.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: h?.sessionId,
                                                            page_type: s,
                                                            page_category: s === i.g.HOME ? void 0 : h?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(S.A, { peaking: T, transitioning: r === b.Pf.OUT }),
                    ],
                }),
            })
        );
    };
