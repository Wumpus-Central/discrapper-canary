"use strict";
s.d(t, { A: () => I });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(572944),
    o = s(311907),
    c = s(397927),
    d = s(564322),
    u = s(785330),
    _ = s(954571),
    g = s(979286),
    m = s(440938),
    h = s(295811),
    p = s(870216),
    f = s(166489),
    x = s(613258),
    E = s(758836),
    b = s(652215),
    C = s(985018),
    A = s(297046);
let S = (e) => {
        let { tab: t } = e,
            [s, r, c] = (0, o.yK)([p.A], () => [p.A.getLayout(t), p.A.isFetchingLayout(t), p.A.getLayoutFetchError(t)]),
            d = null == s && !r && c?.status !== 404 && c?.status !== 429;
        return (l.useEffect(() => {
            d && (0, g.T2)({ tab: t });
        }, [d, t]),
        null == s)
            ? t !== i.g.HOME || d || r
                ? null
                : (0, n.jsx)("div", {
                      className: a()(A.YB, A.GS),
                      children: (0, n.jsx)(u.Z_, { tenantId: b.FYj, templateId: "shop-home" }),
                  })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t === i.g.ORBS && (0, n.jsx)(f.A, {}),
                      (0, n.jsx)("div", {
                          className: a()(A.YB, A.GS),
                          children: (0, n.jsx)(u.Qs, { tenantId: b.FYj, layoutId: s }),
                      }),
                  ],
              });
    },
    v = (e) => {
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
            : (0, n.jsx)("div", { className: a()(A.YB, A.GS), children: (0, n.jsx)(u.Ay, { layout: s }) });
    },
    I = (e) => {
        let { handleTransition: t, tab: s, transitionState: r } = e,
            a = (0, m.uM)(),
            u = (0, o.bG)([h.A], () => h.A.getShopLayoutUrlOverride()),
            g = l.useRef(null),
            { handleScroll: p } = (0, d.X)(g, s),
            [f, I] = l.useState(E.md),
            [L, j] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != g.current) {
                    let e = () => {
                            if (null == g.current) return;
                            let e = g.current.getDistanceFromBottom();
                            f >= 36 ? j(e < 20) : e <= 200 && I((e) => e + E.md);
                        },
                        t = g.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [g, f, I, j]),
            (0, n.jsx)(c.T7Y, {
                className: A.OW,
                ref: g,
                onScroll: p,
                children: (0, n.jsxs)("div", {
                    className: A.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: A.rb,
                            children: [
                                null != u && "" !== u ? (0, n.jsx)(v, { url: u }) : (0, n.jsx)(S, { tab: s }),
                                s !== i.g.CATALOG &&
                                    f >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: A.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: C.intl.string(C.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: C.intl.string(C.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        _.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: a?.sessionId,
                                                            page_type: s,
                                                            page_category: s === i.g.HOME ? void 0 : a?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(x.A, { peaking: L, transitioning: r === E.Pf.OUT }),
                    ],
                }),
            })
        );
    };
