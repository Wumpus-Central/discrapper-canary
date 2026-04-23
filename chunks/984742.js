n.d(e, { A: () => A }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(241524),
    a = n(775602),
    s = n(427675),
    o = n(21161),
    c = n(163437),
    u = n(490744),
    d = n(594508),
    p = n(156312),
    m = n(166532),
    f = n(19311),
    x = n(534479),
    g = n(482132),
    h = n(921925),
    S = n(376747),
    b = n(985018);
function A(t) {
    let e,
        n,
        { showBenefits: A, handleClose: j, onSubscriptionConfirmation: E } = t,
        { updatedSubscription: v, readySlideId: C, selectedStoreListing: y, application: I } = (0, p.P5)(),
        N = (0, s.S3)(),
        P = (0, r.A)(S.Y),
        { createMultipleConfettiAt: _ } = l.useContext(o.x),
        k = N?.name ?? "",
        T = () => {
            j(), E?.();
        },
        R = C === m.pn.CONFIRM,
        w = (0, c.bg)(N?.flags ?? 0),
        B =
            null != y && y.benefits.length > 0
                ? b.intl.formatToPlainString(b.t["+IQQVM"], { benefitCount: y.benefits.length })
                : null;
    return (
        A
            ? P
                ? (e = (0, i.jsx)(d.E, {
                      title: b.intl.format(b.t.ea6tZr, { tierName: k }),
                      subtitle:
                          null != y && y.benefits.length > 0
                              ? b.intl.formatToPlainString(b.t.HNepft, { benefits: B })
                              : null,
                      onConfirm: T,
                      confirmCta: b.intl.string(b.t.nlkywz),
                  }))
                : ((e =
                      null != y && null != I
                          ? (0, i.jsx)(u.Uf, {
                                icon: y.thumbnail,
                                storeListingBenefits: y.benefits,
                                application: I,
                                title: b.intl.format(b.t["Q+qktS"], { tier: k }),
                                subtitle: b.intl.string(b.t.ECKxXU),
                                description: w
                                    ? b.intl.format(b.t["MAtQk/"], { applicationName: I?.name })
                                    : b.intl.format(b.t.vHkMF4, { tier: k }),
                            })
                          : (0, i.jsx)(x.A, {})),
                  (n = (0, i.jsx)(f.Ay, {
                      onPrimary: T,
                      primaryCTA: f.ti.CONTINUE,
                      primaryText: b.intl.string(b.t["JtWl+a"]),
                  })))
            : (e = P
                  ? (0, i.jsx)(d.v, { tierName: k, onConfirm: T, subscription: v })
                  : (0, i.jsx)(u.XG, { tierName: k, onConfirm: T, subscription: v })),
        l.useEffect(() => {
            a.A.useReducedMotion && R && _(window.innerWidth / 2, window.innerHeight / 2);
        }, [_, R]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(g.dZ, { children: [(0, i.jsx)(h.A, {}), e] }),
                null != n && (0, i.jsx)(g.UX, { children: n }),
            ],
        })
    );
}
