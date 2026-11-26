n.d(t, { A: () => M });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(916218),
    o = n(855986),
    u = n(314116),
    c = n(858899),
    d = n(825484),
    m = n(821609),
    g = n(403581),
    A = n(834730),
    E = n(73825),
    h = n(803306),
    f = n(688810),
    p = n(669815),
    S = n(626584),
    T = n(287809),
    x = n(97352),
    I = n(166403),
    _ = n(427262),
    b = n(428152),
    y = n(192308),
    N = n(682901),
    C = n(652215),
    v = n(50302),
    j = n(792996),
    O = n(379912),
    D = n(808532);
let P = new S.A("GiftedSubscriptionsSection");
function R(e) {
    let { subscription: t, rowState: s, recipientTag: r } = e,
        { analyticsLocations: a } = (0, f.Ay)(),
        [o, g] = l.useState(!1),
        { id: A, currentPeriodEnd: h } = t,
        S = l.useCallback(() => {
            (0, u.A)({
                title: j.intl.string(j.t.LZunzZ),
                subtitle:
                    "pending" === s.kind || null == r
                        ? j.intl.string(v.default["1T/Qjw"])
                        : j.intl.formatToPlainString(v.default.VPktVS, { endDate: h, username: r }),
                confirmText: j.intl.string(j.t["cY+Oob"]),
                cancelText: j.intl.string(v.default["3T+pGu"]),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await p.M2(A, a);
                    } catch (e) {
                        throw (P.error("Failed to cancel gifted subscription", e), e);
                    }
                    try {
                        await p.hP();
                    } catch (e) {
                        P.error("Failed to refresh subscriptions after canceling a gifted subscription", e);
                    }
                },
            });
        }, [s.kind, A, h, r, a]),
        T = l.useCallback(async () => {
            g(!0);
            try {
                (await (async function () {
                    x.A.isLoadedForSKU(N.V4) || (await (0, E.ur)(N.V4));
                })(),
                    await p.QP(t, a));
            } catch (e) {
                (P.error("Failed to re-subscribe to gifted subscription", e),
                    (0, c.P0)({ text: j.intl.string(j.t["5mlOCW"]), variant: "critical" }));
            } finally {
                g(!1);
            }
        }, [t, a]),
        I = l.useCallback(() => {
            var e;
            ((e = { subscriptionId: A, analyticsLocations: a }),
                (0, y.mM)(async () => {
                    let { default: t } = await n.e(857661).then(n.bind(n, 900492));
                    return (n) => (0, i.jsx)(t, { ...n, ...e });
                }));
        }, [A, a]),
        _ = (function (e, t) {
            if (e.status !== C.Dmq.ACTIVE) return !1;
            switch (t.kind) {
                case "pending":
                    return !t.isCanceled;
                case "active":
                    return !0;
                case "payment_failed":
                case "canceled":
                    return !1;
            }
        })(t, s),
        b = "pending" === s.kind ? s.isCanceled : "canceled" === s.kind && s.canResubscribe,
        O = "payment_failed" === s.kind;
    return _ || b || O
        ? (0, i.jsxs)(d.e, {
              size: "sm",
              children: [
                  O && (0, i.jsx)(m.$, { variant: "primary", text: j.intl.string(j.t["7spYft"]), onClick: I }),
                  b && (0, i.jsx)(m.$, { variant: "primary", text: j.intl.string(j.t.iIvF2z), loading: o, onClick: T }),
                  _ && (0, i.jsx)(m.$, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: S }),
              ],
          })
        : null;
}
function L(e) {
    var t, n;
    let s,
        r,
        u,
        { subscription: c } = e,
        d = (0, b.MJ)(c),
        m =
            ((t = "pending" === d.kind ? null : d.recipientUserId),
            (s = (0, o.bG)([T.default], () => (null != t ? T.default.getUser(t) : null))),
            (r = (0, _.xG)(s, { decoration: "auto" })),
            l.useEffect(() => {
                null != t &&
                    (async function (e) {
                        try {
                            await (0, h.wz)(e);
                        } catch {}
                    })(t);
            }, [t]),
            null != s ? r : null),
        E = null != m ? j.intl.formatToPlainString(v.default.kVUGot, { username: m }) : null,
        f = [],
        p = null;
    switch (d.kind) {
        case "pending":
            ((f = [j.intl.formatToPlainString(j.t.nZBvUR, { hours: Math.max(0, (0, a.A)(d.expiresAt, new Date())) })]),
                d.isCanceled && (p = j.intl.string(v.default.bWW0Gp)));
            break;
        case "active":
            f = [E, j.intl.formatToPlainString(O.default.MR4VnX, { renewalDate: d.renewsAt })];
            break;
        case "canceled":
        case "payment_failed":
            ((f = [E]), (p = j.intl.string("canceled" === d.kind ? v.default.bWW0Gp : v.default.nZIlOV)));
    }
    let S = f.filter((e) => null != e);
    return (0, i.jsxs)("div", {
        className: D.nM,
        children: [
            (0, i.jsxs)("div", {
                className: D.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: D.Kk,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(g.NitroWheelIcon, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: D.zH,
                        children: [
                            (0, i.jsx)(A.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children:
                                    ((n = c.planId),
                                    null == (u = (0, b.Tr)(n))
                                        ? j.intl.string(j.t.lG6a5x)
                                        : j.intl.formatToPlainString(
                                              u.interval === N.WT.MONTH ? v.default.DLvbaf : v.default.eXhipA,
                                              { intervalCount: u.intervalCount },
                                          )),
                            }),
                            S.length > 0 &&
                                (0, i.jsx)(A.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: S.map((e, t) =>
                                        (0, i.jsxs)(
                                            l.Fragment,
                                            {
                                                children: [
                                                    t > 0 && (0, i.jsx)("span", { className: D.me, children: "\xb7" }),
                                                    e,
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: D.Rd,
                children: [
                    null != p &&
                        (0, i.jsx)(A.E, {
                            variant: "body-md/medium",
                            color: "text-feedback-warning",
                            tag: "span",
                            children: p,
                        }),
                    (0, i.jsx)(R, { subscription: c, rowState: d, recipientTag: m }),
                ],
            }),
        ],
    });
}
let G = l.memo(function (e) {
    let { subscriptionId: t } = e,
        n = (0, o.bG)([I.A], () => I.A.getSubscriptionById(t));
    return null != n && (0, b.VF)(n) ? (0, i.jsx)(L, { subscription: n }) : null;
});
function M(e) {
    let { subscriptionIds: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(D.uW, n),
        children: [
            (0, i.jsx)(A.E, {
                variant: "body-lg/medium",
                color: "text-strong",
                children: j.intl.string(v.default.HLHZSh),
            }),
            (0, i.jsx)("div", { className: D.p_, children: t.map((e) => (0, i.jsx)(G, { subscriptionId: e }, e)) }),
        ],
    });
}
