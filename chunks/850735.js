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
    b = s(652215),
    C = s(985018),
    A = s(941734);
let S = (e) => {
        let { tab: t } = e,
            [s, l, a] = (0, o.yK)([p.A], () => [p.A.getLayout(t), p.A.isFetchingLayout(t), p.A.getLayoutFetchError(t)]),
            c = null == s && !l && a?.status !== 404 && a?.status !== 429;
        return (r.useEffect(() => {
            c && (0, g.T2)({ tab: t });
        }, [c, t]),
        null == s)
            ? t !== i.g.HOME || c || l
                ? null
                : (0, n.jsx)("div", {
                      className: A.YB,
                      children: (0, n.jsx)(u.Z_, { tenantId: b.FYj, templateId: "shop-home" }),
                  })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t === i.g.ORBS && (0, n.jsx)(f.A, {}),
                      (0, n.jsx)("div", {
                          className: A.YB,
                          children: (0, n.jsx)(u.Qs, { tenantId: b.FYj, layoutId: s }),
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
            : (0, n.jsx)("div", { className: A.YB, children: (0, n.jsx)(u.Ay, { layout: s }) });
    },
    I = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            u = (0, m.uM)(),
            g = (0, o.bG)([h.A], () => h.A.getShopLayoutUrlOverride()),
            p = r.useRef(null),
            { handleScroll: f } = (0, d.X)(p, s),
            [I, L] = r.useState(E.md),
            [j, O] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != p.current) {
                    let e = () => {
                            if (null == p.current) return;
                            let e = p.current.getDistanceFromBottom();
                            I >= 36 ? O(e < 20) : e <= 200 && L((e) => e + E.md);
                        },
                        t = p.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [p, I, L, O]),
            (0, n.jsx)(c.T7Y, {
                className: A.OW,
                ref: p,
                onScroll: f,
                children: (0, n.jsxs)("div", {
                    className: A.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(A.rb, A.GS),
                            children: [
                                null != g && "" !== g ? (0, n.jsx)(v, { url: g }) : (0, n.jsx)(S, { tab: s }),
                                s !== i.g.CATALOG &&
                                    I >= 36 &&
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
                        (0, n.jsx)(x.A, { peaking: j, transitioning: l === E.Pf.OUT }),
                    ],
                }),
            })
        );
    };
