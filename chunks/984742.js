n.d(t, { A: () => f }), n(938796);
var l = n(627968),
    r = n(64700),
    i = n(241524),
    a = n(775602),
    s = n(31823),
    o = n(266060),
    u = n(427675),
    c = n(211159),
    d = n(21161),
    C = n(163437),
    p = n(897904),
    m = n(594508),
    _ = n(166532),
    E = n(19311),
    T = n(534479),
    I = n(482132),
    S = n(921925),
    h = n(975965),
    A = n(376747),
    O = n(375708);
function f(e) {
    let t,
        n,
        { handleClose: f, onSubscriptionConfirmation: x } = e,
        P = (0, o.K)(),
        { application: g } = (0, s.V)(),
        { readySlideId: N, updatedSubscription: R } = (0, c.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        v = (0, u.S3)(),
        y = (0, i.A)(A.Y),
        { createMultipleConfettiAt: U } = r.useContext(d.x),
        j = v?.name ?? "",
        M = () => {
            f(), x?.();
        },
        L = N === _.pn.CONFIRM,
        k = (0, C.bg)(v?.flags ?? 0),
        F =
            null != P && P.benefits.length > 0
                ? O.intl.formatToPlainString(O.t["+IQQVM"], { benefitCount: P.benefits.length })
                : null,
        { showBenefitsFirst: b } = (0, h.l)();
    return (
        b
            ? (t = y
                  ? (0, l.jsx)(m.v, { tierName: j, onConfirm: M, subscription: R })
                  : (0, l.jsx)(p.XG, { tierName: j, onConfirm: M, subscription: R }))
            : y
              ? (t = (0, l.jsx)(m.E, {
                    title: O.intl.format(O.t.ea6tZr, { tierName: j }),
                    subtitle:
                        null != P && P.benefits.length > 0
                            ? O.intl.formatToPlainString(O.t.HNepft, { benefits: F })
                            : null,
                    onConfirm: M,
                    confirmCta: O.intl.string(O.t.nlkywz),
                }))
              : ((t =
                    null != P && null != g
                        ? (0, l.jsx)(p.Uf, {
                              icon: P.thumbnail,
                              storeListingBenefits: P.benefits,
                              application: g,
                              title: O.intl.format(O.t["Q+qktS"], { tier: j }),
                              subtitle: O.intl.string(O.t.ECKxXU),
                              description: k
                                  ? O.intl.format(O.t["MAtQk/"], { applicationName: g?.name })
                                  : O.intl.format(O.t.vHkMF4, { tier: j }),
                          })
                        : (0, l.jsx)(T.A, {})),
                (n = (0, l.jsx)(E.Ay, {
                    onPrimary: M,
                    primaryCTA: E.ti.CONTINUE,
                    primaryText: O.intl.string(O.t["JtWl+a"]),
                }))),
        r.useEffect(() => {
            a.Ay.useReducedMotion && L && U(window.innerWidth / 2, window.innerHeight / 2);
        }, [U, L]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(I.dZ, { children: [(0, l.jsx)(S.A, {}), t] }),
                null != n && (0, l.jsx)(I.UX, { children: n }),
            ],
        })
    );
}
