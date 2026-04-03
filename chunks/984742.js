n.d(t, { A: () => j }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(241524),
    a = n(775602),
    s = n(21161),
    o = n(163437),
    d = n(490744),
    c = n(594508),
    u = n(156312),
    m = n(166532),
    p = n(19311),
    f = n(534479),
    x = n(482132),
    g = n(987616),
    h = n(921925),
    b = n(376747),
    A = n(985018);
function j(e) {
    let t,
        n,
        { showBenefits: j, handleClose: S, onSubscriptionConfirmation: v } = e,
        { updatedSubscription: C, readySlideId: _, selectedStoreListing: y, application: N } = (0, u.P5)(),
        E = (0, g.S3)(),
        T = (0, r.A)(b.Y),
        { createMultipleConfettiAt: P } = l.useContext(s.x),
        I = E?.name ?? "",
        k = () => {
            S(), v?.();
        },
        w = _ === m.pn.CONFIRM,
        R = (0, o.bg)(E?.flags ?? 0),
        D =
            null != y && y.benefits.length > 0
                ? A.intl.formatToPlainString(A.t["+IQQVM"], { benefitCount: y.benefits.length })
                : null;
    return (
        j
            ? T
                ? (t = (0, i.jsx)(c.E, {
                      title: A.intl.format(A.t.ea6tZr, { tierName: I }),
                      subtitle:
                          null != y && y.benefits.length > 0
                              ? A.intl.formatToPlainString(A.t.HNepft, { benefits: D })
                              : null,
                      onConfirm: k,
                      confirmCta: A.intl.string(A.t.nlkywz),
                  }))
                : ((t =
                      null != y && null != N
                          ? (0, i.jsx)(d.Uf, {
                                icon: y.thumbnail,
                                storeListingBenefits: y.benefits,
                                application: N,
                                title: A.intl.format(A.t["Q+qktS"], { tier: I }),
                                subtitle: A.intl.string(A.t.ECKxXU),
                                description: R
                                    ? A.intl.format(A.t["MAtQk/"], { applicationName: N?.name })
                                    : A.intl.format(A.t.vHkMF4, { tier: I }),
                            })
                          : (0, i.jsx)(f.A, {})),
                  (n = (0, i.jsx)(p.Ay, {
                      onPrimary: k,
                      primaryCTA: p.ti.CONTINUE,
                      primaryText: A.intl.string(A.t["JtWl+a"]),
                  })))
            : (t = T
                  ? (0, i.jsx)(c.v, { tierName: I, onConfirm: k, subscription: C })
                  : (0, i.jsx)(d.XG, { tierName: I, onConfirm: k, subscription: C })),
        l.useEffect(() => {
            a.A.useReducedMotion && w && P(window.innerWidth / 2, window.innerHeight / 2);
        }, [P, w]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(x.dZ, { children: [(0, i.jsx)(h.A, {}), t] }),
                null != n && (0, i.jsx)(x.UX, { children: n }),
            ],
        })
    );
}
