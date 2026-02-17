n.d(t, { A: () => j }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(241524),
    a = n(775602),
    s = n(21161),
    o = n(163437),
    c = n(490744),
    d = n(594508),
    u = n(156312),
    m = n(166532),
    p = n(19311),
    x = n(534479),
    f = n(482132),
    g = n(921925),
    h = n(376747),
    b = n(985018);
function j(e) {
    let t,
        n,
        { showBenefits: j, handleClose: A, onSubscriptionConfirmation: S } = e,
        {
            updatedSubscription: v,
            readySlideId: C,
            selectedSku: N,
            selectedStoreListing: T,
            application: _,
        } = (0, u.P5)(),
        E = (0, r.A)(h.Y),
        { createMultipleConfettiAt: y } = l.useContext(s.x),
        P = N?.name ?? "",
        k = () => {
            A(), S?.();
        },
        I = C === m.pn.CONFIRM,
        R = (0, o.bg)(N?.flags ?? 0),
        w =
            null != T && T.benefits.length > 0
                ? b.intl.formatToPlainString(b.t["+IQQVM"], { benefitCount: T.benefits.length })
                : null;
    return (
        j
            ? E
                ? (t = (0, i.jsx)(d.E, {
                      title: b.intl.format(b.t.ea6tZr, { tierName: P }),
                      subtitle:
                          null != T && T.benefits.length > 0
                              ? b.intl.formatToPlainString(b.t.HNepft, { benefits: w })
                              : null,
                      onConfirm: k,
                      confirmCta: b.intl.string(b.t.nlkywz),
                  }))
                : ((t =
                      null != T && null != _
                          ? (0, i.jsx)(c.Uf, {
                                icon: T.thumbnail,
                                storeListingBenefits: T.benefits,
                                application: _,
                                title: b.intl.format(b.t["Q+qktS"], { tier: P }),
                                subtitle: b.intl.string(b.t.ECKxXU),
                                description: R
                                    ? b.intl.format(b.t["MAtQk/"], { applicationName: _?.name })
                                    : b.intl.format(b.t.vHkMF4, { tier: P }),
                            })
                          : (0, i.jsx)(x.A, {})),
                  (n = (0, i.jsx)(p.Ay, {
                      onPrimary: k,
                      primaryCTA: p.ti.CONTINUE,
                      primaryText: b.intl.string(b.t["JtWl+a"]),
                  })))
            : (t = E
                  ? (0, i.jsx)(d.v, { tierName: P, onConfirm: k, subscription: v })
                  : (0, i.jsx)(c.XG, { tierName: P, onConfirm: k, subscription: v })),
        l.useEffect(() => {
            a.A.useReducedMotion && I && y(window.innerWidth / 2, window.innerHeight / 2);
        }, [y, I]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(f.dZ, { children: [(0, i.jsx)(g.A, {}), t] }),
                null != n && (0, i.jsx)(f.UX, { children: n }),
            ],
        })
    );
}
