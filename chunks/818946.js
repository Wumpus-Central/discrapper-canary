n.d(t, { A: () => M });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(916218),
    o = n(855986),
    u = n(314116),
    d = n(858899),
    c = n(825484),
    g = n(821609),
    m = n(403581),
    A = n(834730),
    E = n(73825),
    h = n(803306),
    S = n(688810),
    f = n(669815),
    T = n(626584),
    p = n(287809),
    x = n(97352),
    I = n(166403),
    _ = n(427262),
    b = n(99618),
    N = n(192308),
    C = n(682901),
    y = n(652215),
    v = n(50302),
    j = n(792996),
    O = n(379912),
    D = n(808532);
let R = new T.A("GiftedSubscriptionsSection");
function L(e) {
    let { subscription: t, rowState: s, recipientTag: r } = e,
        { analyticsLocations: a } = (0, S.Ay)(),
        [o, m] = l.useState(!1),
        { id: A, currentPeriodEnd: h } = t,
        T = l.useCallback(() => {
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
                        await f.M2(A, a);
                    } catch (e) {
                        throw (R.error("Failed to cancel gifted subscription", e), e);
                    }
                    try {
                        await f.hP();
                    } catch (e) {
                        R.error("Failed to refresh subscriptions after canceling a gifted subscription", e);
                    }
                },
            });
        }, [s.kind, A, h, r, a]),
        p = l.useCallback(async () => {
            m(!0);
            try {
                (await (async function () {
                    x.A.isLoadedForSKU(C.V4) || (await (0, E.ur)(C.V4));
                })(),
                    await f.QP(t, a));
            } catch (e) {
                (R.error("Failed to re-subscribe to gifted subscription", e),
                    (0, d.P0)({ text: j.intl.string(j.t["5mlOCW"]), variant: "critical" }));
            } finally {
                m(!1);
            }
        }, [t, a]),
        I = l.useCallback(() => {
            var e;
            ((e = { subscriptionId: A, analyticsLocations: a }),
                (0, N.mM)(async () => {
                    let { default: t } = await n.e(857661).then(n.bind(n, 900492));
                    return (n) => (0, i.jsx)(t, { ...n, ...e });
                }));
        }, [A, a]),
        _ = (function (e, t) {
            if (e.status !== y.Dmq.ACTIVE) return !1;
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
        ? (0, i.jsxs)(c.e, {
              size: "sm",
              children: [
                  O && (0, i.jsx)(g.$, { variant: "primary", text: j.intl.string(j.t["7spYft"]), onClick: I }),
                  b && (0, i.jsx)(g.$, { variant: "primary", text: j.intl.string(j.t.iIvF2z), loading: o, onClick: p }),
                  _ && (0, i.jsx)(g.$, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: T }),
              ],
          })
        : null;
}
function P(e) {
    var t, n;
    let s,
        r,
        u,
        { subscription: d } = e,
        c = (0, b.MJ)(d),
        g =
            ((t = "pending" === c.kind ? null : c.recipientUserId),
            (s = (0, o.bG)([p.default], () => (null != t ? p.default.getUser(t) : null))),
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
        E = null != g ? j.intl.formatToPlainString(v.default.kVUGot, { username: g }) : null,
        S = [],
        f = null;
    switch (c.kind) {
        case "pending":
            ((S = [j.intl.formatToPlainString(j.t.nZBvUR, { hours: Math.max(0, (0, a.A)(c.expiresAt, new Date())) })]),
                c.isCanceled && (f = j.intl.string(v.default.bWW0Gp)));
            break;
        case "active":
            S = [E, j.intl.formatToPlainString(O.default.MR4VnX, { renewalDate: c.renewsAt })];
            break;
        case "canceled":
        case "payment_failed":
            ((S = [E]), (f = j.intl.string("canceled" === c.kind ? v.default.bWW0Gp : v.default.nZIlOV)));
    }
    let T = S.filter((e) => null != e);
    return (0, i.jsxs)("div", {
        className: D.nM,
        children: [
            (0, i.jsxs)("div", {
                className: D.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: D.Kk,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(m.NitroWheelIcon, { size: "md", color: "currentColor" }),
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
                                    ((n = d.planId),
                                    null == (u = (0, b.Tr)(n))
                                        ? j.intl.string(j.t.lG6a5x)
                                        : j.intl.formatToPlainString(
                                              u.interval === C.WT.MONTH ? v.default.DLvbaf : v.default.eXhipA,
                                              { intervalCount: u.intervalCount },
                                          )),
                            }),
                            T.length > 0 &&
                                (0, i.jsx)(A.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: T.map((e, t) =>
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
                    null != f &&
                        (0, i.jsx)(A.E, {
                            variant: "body-md/medium",
                            color: "text-feedback-warning",
                            tag: "span",
                            children: f,
                        }),
                    (0, i.jsx)(L, { subscription: d, rowState: c, recipientTag: g }),
                ],
            }),
        ],
    });
}
let G = l.memo(function (e) {
    let { subscriptionId: t } = e,
        n = (0, o.bG)([I.A], () => I.A.getSubscriptionById(t));
    return null != n && (0, b.VF)(n) ? (0, i.jsx)(P, { subscription: n }) : null;
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
