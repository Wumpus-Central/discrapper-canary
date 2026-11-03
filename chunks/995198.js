(t.r(e), t.d(e, { MemberVerificationPreviewDisabled: () => q, default: () => z }));
var l = t(477900),
    n = t(582128),
    s = t(17928),
    a = t(314116),
    r = t(765671),
    c = t(4616),
    d = t(743674),
    o = t(976860),
    u = t(71393),
    m = t(486020),
    h = t(998304),
    x = t(624458),
    g = t(202384),
    f = t(513461),
    j = t(212455),
    A = t(115723),
    p = t(661531),
    v = t(534514),
    E = t(821609),
    N = t(105292),
    T = t(449341);
function b(i) {
    let { onDiscardApplication: e, onContinueApplication: t, guild: n } = i;
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(A.p, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsx)("div", {
                className: T.bc,
                children: (0, l.jsx)(v.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children:
                        null != n
                            ? N.intl.formatToPlainString(N.t.f5Jaw7, { guildName: n.name })
                            : N.intl.string(N.t["0sTyEb"]),
                }),
            }),
            (0, l.jsxs)("div", {
                className: T.rn,
                children: [
                    (0, l.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: t,
                        variant: "secondary",
                        size: "md",
                        text: N.intl.string(N.t.h3aGmv),
                    }),
                    (0, l.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: e,
                        variant: "critical-primary",
                        size: "md",
                        text: N.intl.string(N.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
var C = t(401432),
    y = t(834730),
    R = t(299091),
    I = t(408213),
    G = t(652215);
let V = function (i) {
    let {
            headerId: e,
            reapplyText: t,
            onReapply: a,
            confirmText: r,
            onWithdrawApplication: c,
            rejectionReason: d = null,
            guild: o = null,
        } = i,
        { canReapply: u, isLoading: m } = (function (i) {
            let [e, t] = n.useState(!0),
                l = (0, s.bG)([j.A], () => (null != i ? j.A.getJoinRequestGuild(i) : void 0)),
                a = n.useCallback(async (i) => {
                    try {
                        let e = R.A.getInviteKeyForGuildId(i);
                        null != e && (await I.Ay.fetchVerificationForm(i, e));
                    } finally {
                        t(!1);
                    }
                }, []);
            return (
                n.useEffect(() => {
                    null == i ? t(!1) : (t(!0), a(i));
                }, [i, a]),
                {
                    canReapply: null != l && l.features.has(G.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: e,
                }
            );
        })(o?.id);
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(C.a, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsxs)("div", {
                className: T.bc,
                children: [
                    (0, l.jsx)(v.D, {
                        id: e,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            o?.name != null
                                ? N.intl.formatToPlainString(N.t["P+/gzA"], { guildName: o.name })
                                : N.intl.string(N.t.gBPcuP),
                    }),
                    null != d && "" !== d
                        ? (0, l.jsxs)(y.E, {
                              variant: "body-md/medium",
                              color: "text-default",
                              children: [
                                  (0, l.jsx)("span", { className: T.Wj, children: N.intl.string(N.t.cf1psW) }),
                                  (0, l.jsx)("span", { children: d }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: T.Ow,
                children: [
                    u || m
                        ? (0, l.jsx)(E.$, {
                              onClick: a,
                              variant: "secondary",
                              size: "md",
                              loading: m,
                              disabled: m,
                              text: t,
                              fullWidth: !0,
                          })
                        : null,
                    (0, l.jsx)(E.$, {
                        onClick: () => c(u || m),
                        variant: "critical-primary",
                        size: "md",
                        text: r,
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
};
var w = t(339350),
    k = t(51271);
let P = function (i) {
    let { onWithdrawApplication: e, guild: t = null } = i,
        s = t?.id;
    return (
        n.useEffect(() => {
            null != s && (0, k.NC)(s);
        }, [s]),
        (0, l.jsxs)("div", {
            className: T.EL,
            children: [
                (0, l.jsx)("div", {
                    className: T.P0,
                    children: (0, l.jsx)(w.Q, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, l.jsxs)("div", {
                    className: T.bc,
                    children: [
                        (0, l.jsx)(v.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                t?.name != null
                                    ? N.intl.formatToPlainString(N.t["0Qlu/6"], { guildName: t.name })
                                    : N.intl.string(N.t["5iLvSx"]),
                        }),
                        (0, l.jsx)(y.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: N.intl.string(N.t.FdsK4h),
                        }),
                    ],
                }),
                (0, l.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: e,
                    variant: "critical-primary",
                    size: "md",
                    text: N.intl.string(N.t.g9tK0o),
                }),
            ],
        })
    );
};
var F = t(223810);
function _(i) {
    let { guild: e, width: t, height: s } = i,
        a = n.useMemo(
            () => (e?.splash != null ? m.Ay.getGuildSplashURL({ id: e?.id, splash: e?.splash }) : null),
            [e?.splash, e?.id],
        ),
        r = (0, d.S)(a);
    return null == a
        ? (0, l.jsx)("div", { className: F.Eq })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(c.A, { className: F.Yi, src: a, imageClassName: F.Iv, width: t, height: s }),
                  null != r &&
                      (0, l.jsx)("div", {
                          className: F.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, h.cb)(r, 0.16)} 0%, ${(0, h.cb)(r, 1)} 100%)`,
                          },
                      }),
                  (0, l.jsx)("div", { className: F.qj }),
              ],
          });
}
function q(i) {
    let { guildId: e } = i,
        { ref: t, width: c, height: d } = (0, r.Ay)(),
        m = (0, s.bG)([j.A], () => j.A.getRequest(e)),
        h = (0, s.bG)([u.A], () => u.A.getGuild(e)),
        { hasFetchedRequestToJoinGuilds: A, guildPreviewDisabled: p } = (0, s.cf)([j.A], () => ({
            hasFetchedRequestToJoinGuilds: j.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: j.A.getJoinRequestGuild(e),
        }));
    (n.useEffect(() => {
        null != h && (0, o.pX)(G.BVt.CHANNEL(e));
    }, [h, e]),
        n.useEffect(() => {
            A || x.A.fetchRequestToJoinGuilds();
        }, [A]));
    let v = n.useCallback(() => {
        (x.A.removeGuildJoinRequest(e), (0, o.pX)(G.BVt.ME));
    }, [e]);
    function E(i, e) {
        return () => {
            (0, a.A)({
                title: N.intl.string(N.t.y0CVes),
                subtitle: i,
                cancelText: N.intl.string(N.t.oEAioF),
                onConfirm: e,
                confirmText: N.intl.string(N.t.p89ACt),
            });
        };
    }
    async function T() {
        (await x.A.resetGuildJoinRequest(e), (0, g.Ze)(e));
    }
    function C(i) {
        i ? E(N.intl.format(N.t["9ZezpN"], { name: p?.name }), v)() : v();
    }
    let y = E(N.intl.format(N.t.fJwWVt, { name: p?.name }), v);
    return (0, l.jsxs)("div", {
        className: F.MY,
        ref: t,
        children: [
            (0, l.jsx)(_, { guild: p, height: d, width: c }),
            (0, l.jsx)("div", {
                className: F.FG,
                children: (function () {
                    if (null == m) return null;
                    switch (m.applicationStatus) {
                        case f.B5.SUBMITTED:
                            return (0, l.jsx)(P, { onWithdrawApplication: () => C(!0), guild: p });
                        case f.B5.REJECTED:
                            return (0, l.jsx)(V, {
                                reapplyText: N.intl.string(N.t.I1LYVk),
                                onReapply: T,
                                confirmText: N.intl.string(N.t.g9tK0o),
                                onWithdrawApplication: C,
                                rejectionReason: m.rejectionReason,
                                guild: p,
                            });
                        default:
                            return (0, l.jsx)(b, {
                                onDiscardApplication: y,
                                onContinueApplication: () => (0, g.Ze)(e),
                                guild: p,
                            });
                    }
                })(),
            }),
            (0, l.jsx)("div", { className: F.T_ }),
        ],
    });
}
let z = q;
