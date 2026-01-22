n.d(t, {
    A: () => h,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    l = n(241524),
    a = n(775602),
    s = n(21161),
    o = n(163437),
    c = n(490744),
    u = n(594508),
    d = n(156312),
    p = n(166532),
    m = n(19311),
    f = n(534479),
    b = n(482132),
    g = n(921925),
    x = n(376747),
    j = n(985018);

function h(e) {
    var t, n;
    let h,
        v,
        { showBenefits: y, handleClose: P, onSubscriptionConfirmation: O } = e,
        {
            updatedSubscription: S,
            readySlideId: A,
            selectedSku: E,
            selectedStoreListing: T,
            application: N,
        } = (0, d.P5)(),
        C = (0, l.A)(x.Y),
        { createMultipleConfettiAt: w } = i.useContext(s.x),
        k = null != (t = null == E ? void 0 : E.name) ? t : "",
        _ = () => {
            P(), null == O || O();
        },
        D = A === p.pn.CONFIRM,
        I = (0, o.bg)(null != (n = null == E ? void 0 : E.flags) ? n : 0),
        R =
            null != T && T.benefits.length > 0
                ? j.intl.formatToPlainString(j.t["+IQQVM"], {
                      benefitCount: T.benefits.length,
                  })
                : null;
    return (
        y
            ? C
                ? (h = (0, r.jsx)(u.E, {
                      title: j.intl.format(j.t.ea6tZr, {
                          tierName: k,
                      }),
                      subtitle:
                          null != T && T.benefits.length > 0
                              ? j.intl.formatToPlainString(j.t.HNepft, {
                                    benefits: R,
                                })
                              : null,
                      onConfirm: _,
                      confirmCta: j.intl.string(j.t.nlkywz),
                  }))
                : ((h =
                      null != T && null != N
                          ? (0, r.jsx)(c.Uf, {
                                icon: T.thumbnail,
                                storeListingBenefits: T.benefits,
                                application: N,
                                title: j.intl.format(j.t["Q+qktS"], {
                                    tier: k,
                                }),
                                subtitle: j.intl.string(j.t.ECKxXU),
                                description: I
                                    ? j.intl.format(j.t["MAtQk/"], {
                                          applicationName: null == N ? void 0 : N.name,
                                      })
                                    : j.intl.format(j.t.vHkMF4, {
                                          tier: k,
                                      }),
                            })
                          : (0, r.jsx)(f.A, {})),
                  (v = (0, r.jsx)(m.A, {
                      onPrimary: _,
                      primaryCTA: m.t.CONTINUE,
                      primaryText: j.intl.string(j.t["JtWl+a"]),
                  })))
            : (h = C
                  ? (0, r.jsx)(u.v, {
                        tierName: k,
                        onConfirm: _,
                        subscription: S,
                    })
                  : (0, r.jsx)(c.XG, {
                        tierName: k,
                        onConfirm: _,
                        subscription: S,
                    })),
        i.useEffect(() => {
            a.A.useReducedMotion && D && w(window.innerWidth / 2, window.innerHeight / 2);
        }, [w, D]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(b.dZ, {
                    children: [(0, r.jsx)(g.A, {}), h],
                }),
                null != v &&
                    (0, r.jsx)(b.UX, {
                        children: v,
                    }),
            ],
        })
    );
}
