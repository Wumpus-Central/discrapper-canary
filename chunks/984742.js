n.d(t, { A: () => A }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(241524),
    a = n(775602),
    s = n(427675),
    o = n(21161),
    d = n(163437),
    c = n(490744),
    u = n(594508),
    m = n(156312),
    p = n(166532),
    f = n(19311),
    x = n(534479),
    g = n(482132),
    h = n(921925),
    S = n(376747),
    b = n(985018);
function A(e) {
    let t,
        n,
        { showBenefits: A, handleClose: j, onSubscriptionConfirmation: v } = e,
        { updatedSubscription: _, readySlideId: C, selectedStoreListing: N, application: y } = (0, m.P5)(),
        E = (0, s.S3)(),
        T = (0, r.A)(S.Y),
        { createMultipleConfettiAt: I } = l.useContext(o.x),
        P = E?.name ?? "",
        k = () => {
            j(), v?.();
        },
        w = C === p.pn.CONFIRM,
        R = (0, d.bg)(E?.flags ?? 0),
        D =
            null != N && N.benefits.length > 0
                ? b.intl.formatToPlainString(b.t["+IQQVM"], { benefitCount: N.benefits.length })
                : null;
    return (
        A
            ? T
                ? (t = (0, i.jsx)(u.E, {
                      title: b.intl.format(b.t.ea6tZr, { tierName: P }),
                      subtitle:
                          null != N && N.benefits.length > 0
                              ? b.intl.formatToPlainString(b.t.HNepft, { benefits: D })
                              : null,
                      onConfirm: k,
                      confirmCta: b.intl.string(b.t.nlkywz),
                  }))
                : ((t =
                      null != N && null != y
                          ? (0, i.jsx)(c.Uf, {
                                icon: N.thumbnail,
                                storeListingBenefits: N.benefits,
                                application: y,
                                title: b.intl.format(b.t["Q+qktS"], { tier: P }),
                                subtitle: b.intl.string(b.t.ECKxXU),
                                description: R
                                    ? b.intl.format(b.t["MAtQk/"], { applicationName: y?.name })
                                    : b.intl.format(b.t.vHkMF4, { tier: P }),
                            })
                          : (0, i.jsx)(x.A, {})),
                  (n = (0, i.jsx)(f.Ay, {
                      onPrimary: k,
                      primaryCTA: f.ti.CONTINUE,
                      primaryText: b.intl.string(b.t["JtWl+a"]),
                  })))
            : (t = T
                  ? (0, i.jsx)(u.v, { tierName: P, onConfirm: k, subscription: _ })
                  : (0, i.jsx)(c.XG, { tierName: P, onConfirm: k, subscription: _ })),
        l.useEffect(() => {
            a.A.useReducedMotion && w && I(window.innerWidth / 2, window.innerHeight / 2);
        }, [I, w]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(g.dZ, { children: [(0, i.jsx)(h.A, {}), t] }),
                null != n && (0, i.jsx)(g.UX, { children: n }),
            ],
        })
    );
}
