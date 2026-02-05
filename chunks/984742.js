n.d(t, { A: () => j }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(241524),
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
    h = n(921925),
    g = n(376747),
    b = n(985018);
function j(e) {
    let t,
        n,
        { showBenefits: j, handleClose: A, onSubscriptionConfirmation: S } = e,
        {
            updatedSubscription: v,
            readySlideId: C,
            selectedSku: T,
            selectedStoreListing: N,
            application: E,
        } = (0, u.P5)(),
        _ = (0, l.A)(g.Y),
        { createMultipleConfettiAt: P } = r.useContext(s.x),
        y = T?.name ?? "",
        k = () => {
            A(), S?.();
        },
        I = C === m.pn.CONFIRM,
        R = (0, o.bg)(T?.flags ?? 0),
        w =
            null != N && N.benefits.length > 0
                ? b.intl.formatToPlainString(b.t["+IQQVM"], { benefitCount: N.benefits.length })
                : null;
    return (
        j
            ? _
                ? (t = (0, i.jsx)(d.E, {
                      title: b.intl.format(b.t.ea6tZr, { tierName: y }),
                      subtitle:
                          null != N && N.benefits.length > 0
                              ? b.intl.formatToPlainString(b.t.HNepft, { benefits: w })
                              : null,
                      onConfirm: k,
                      confirmCta: b.intl.string(b.t.nlkywz),
                  }))
                : ((t =
                      null != N && null != E
                          ? (0, i.jsx)(c.Uf, {
                                icon: N.thumbnail,
                                storeListingBenefits: N.benefits,
                                application: E,
                                title: b.intl.format(b.t["Q+qktS"], { tier: y }),
                                subtitle: b.intl.string(b.t.ECKxXU),
                                description: R
                                    ? b.intl.format(b.t["MAtQk/"], { applicationName: E?.name })
                                    : b.intl.format(b.t.vHkMF4, { tier: y }),
                            })
                          : (0, i.jsx)(x.A, {})),
                  (n = (0, i.jsx)(p.A, {
                      onPrimary: k,
                      primaryCTA: p.t.CONTINUE,
                      primaryText: b.intl.string(b.t["JtWl+a"]),
                  })))
            : (t = _
                  ? (0, i.jsx)(d.v, { tierName: y, onConfirm: k, subscription: v })
                  : (0, i.jsx)(c.XG, { tierName: y, onConfirm: k, subscription: v })),
        r.useEffect(() => {
            a.A.useReducedMotion && I && P(window.innerWidth / 2, window.innerHeight / 2);
        }, [P, I]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(f.dZ, { children: [(0, i.jsx)(h.A, {}), t] }),
                null != n && (0, i.jsx)(f.UX, { children: n }),
            ],
        })
    );
}
