"use strict";
s.d(t, { A: () => I });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
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
    C = s(652215),
    b = s(985018),
    A = s(419447);
let S = (e) => {
        let { tab: t } = e,
            [s, l, c] = (0, o.yK)([p.A], () => [p.A.getLayout(t), p.A.isFetchingLayout(t), p.A.getLayoutFetchError(t)]),
            d = null == s && !l && c?.status !== 404 && c?.status !== 429;
        return (r.useEffect(() => {
            d && (0, g.T2)({ tab: t });
        }, [d, t]),
        null == s)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t === i.g.ORBS && (0, n.jsx)(f.A, {}),
                      (0, n.jsx)("div", {
                          className: a()(A.YB, A.GS),
                          children: (0, n.jsx)(u.Qs, { tenantId: C.FYj, layoutId: s }),
                      }),
                  ],
              });
    },
    v = (e) => {
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
            : (0, n.jsx)("div", { className: a()(A.YB, A.GS), children: (0, n.jsx)(u.Ay, { layout: s }) });
    },
    I = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            a = (0, m.uM)(),
            u = (0, o.bG)([h.A], () => h.A.getShopLayoutUrlOverride()),
            g = r.useRef(null),
            { handleScroll: p } = (0, d.X)(g, s),
            [f, I] = r.useState(E.md),
            [L, j] = r.useState(!1);
        return (
            r.useEffect(() => {
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
                                                children: b.intl.string(b.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: b.intl.string(b.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        _.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, n.jsx)(x.A, { peaking: L, transitioning: l === E.Pf.OUT }),
                    ],
                }),
            })
        );
    };
