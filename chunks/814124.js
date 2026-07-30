n.d(t, { Ay: () => R, ZV: () => j, z8: () => N });
var l,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    c = n.n(s),
    o = n(43990),
    r = n(834730),
    d = n(349288),
    p = n(821609),
    u = n(417098),
    h = n(812095),
    x = n(975571),
    m = n(80151),
    A = n(151115),
    T = n(758836),
    k = n(652215),
    C = n(375708),
    I = n(456670),
    N = (((l = {}).DEFAULT = "default"), (l.NITRO = "nitro"), l);
let v = { default: I.Hk, nitro: I.O5 };
function j(e) {
    let {
            promotionTheme: t = "default",
            icon: n,
            headerText: l,
            helpCenterId: s,
            helpCenterLinkText: m,
            ctaText: T,
            ctaIcon: N,
            onCtaClick: j,
            hideCta: R,
            onDismiss: b,
        } = e,
        E = a.useMemo(() => (null == s ? null : x.A.getArticleURL(s)), [s]),
        O = (0, A.s)(n);
    return (0, i.jsx)(o.N, {
        theme: k.NJ8.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: c()(I.kL, e),
                children: [
                    (0, i.jsx)("div", { className: c()(I.D7, v[t]) }),
                    (0, i.jsxs)("div", {
                        className: I.Qs,
                        children: [
                            (0, i.jsxs)("div", {
                                className: I.hu,
                                children: [
                                    null != O && (0, i.jsx)(O, { size: "sm", colorClass: I.Kk }),
                                    (0, i.jsxs)(r.E, {
                                        variant: "text-sm/normal",
                                        color: "text-overlay-light",
                                        children: [
                                            null != l ? (0, h.U)(l) : null,
                                            null != E &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, i.jsx)(d.Anchor, {
                                                            href: E,
                                                            target: "_blank",
                                                            className: I.nf,
                                                            children: m ?? C.intl.string(C.t.WQdkbb),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: I.uJ,
                                children: [
                                    !R &&
                                        null != T &&
                                        (0, i.jsx)(p.$, {
                                            variant: "overlay-primary",
                                            size: "sm",
                                            text: T,
                                            icon: N,
                                            onClick: j,
                                        }),
                                    null != b &&
                                        (0, i.jsx)(u.PM, {
                                            onClick: b,
                                            noticeType: k.kqX.COLLECTIBLES_SHOP_NAGBAR,
                                            className: I.r,
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
let R =
    21552 == n.j
        ? function (e) {
              let { tab: t, handleTransition: n } = e,
                  l = (0, m.A)(),
                  s = l?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
                  c = a.useCallback(() => {
                      n(T.G2.OFFER_ELIGIBLE);
                  }, [n]);
              return t === T.G2.ORBS || null == s
                  ? null
                  : (0, i.jsx)(j, {
                        promotionTheme: void 0,
                        icon: s.icon,
                        headerText: s.headerText,
                        ctaText: s.cta?.text,
                        helpCenterId: s.helpCenterId,
                        onCtaClick: c,
                    });
          }
        : null;
