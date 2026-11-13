(l.r(e), l.d(e, { MemberVerificationPreviewDisabled: () => q, default: () => L }));
var t = l(477900),
    n = l(582128),
    s = l(855986),
    a = l(314116),
    r = l(765671),
    c = l(4616),
    d = l(743674),
    o = l(976860),
    u = l(71393),
    m = l(486020),
    h = l(998304),
    g = l(624458),
    x = l(202384),
    f = l(513461),
    j = l(212455),
    A = l(115723),
    v = l(646514),
    p = l(534514),
    E = l(821609),
    N = l(792996),
    T = l(449341);
function b(i) {
    let { onDiscardApplication: e, onContinueApplication: l, guild: n } = i;
    return (0, t.jsxs)("div", {
        className: T.EL,
        children: [
            (0, t.jsx)("div", {
                className: T.P0,
                children: (0, t.jsx)(A.ListViewIcon, { size: "md", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, t.jsx)("div", {
                className: T.bc,
                children: (0, t.jsx)(p.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children:
                        null != n
                            ? N.intl.formatToPlainString(N.t.f5Jaw7, { guildName: n.name })
                            : N.intl.string(N.t["0sTyEb"]),
                }),
            }),
            (0, t.jsxs)("div", {
                className: T.rn,
                children: [
                    (0, t.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: l,
                        variant: "secondary",
                        size: "md",
                        text: N.intl.string(N.t.h3aGmv),
                    }),
                    (0, t.jsx)(E.$, {
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
var C = l(401432),
    y = l(834730),
    I = l(299091),
    R = l(408213),
    G = l(652215);
let V = function (i) {
    let {
            headerId: e,
            reapplyText: l,
            onReapply: a,
            confirmText: r,
            onWithdrawApplication: c,
            rejectionReason: d = null,
            guild: o = null,
        } = i,
        { canReapply: u, isLoading: m } = (function (i) {
            let [e, l] = n.useState(!0),
                t = (0, s.bG)([j.A], () => (null != i ? j.A.getJoinRequestGuild(i) : void 0)),
                a = n.useCallback(async (i) => {
                    try {
                        let e = I.A.getInviteKeyForGuildId(i);
                        null != e && (await R.Ay.fetchVerificationForm(i, e));
                    } finally {
                        l(!1);
                    }
                }, []);
            return (
                n.useEffect(() => {
                    null == i ? l(!1) : (l(!0), a(i));
                }, [i, a]),
                {
                    canReapply: null != t && t.features.has(G.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: e,
                }
            );
        })(o?.id);
    return (0, t.jsxs)("div", {
        className: T.EL,
        children: [
            (0, t.jsx)("div", {
                className: T.P0,
                children: (0, t.jsx)(C.XSmallBoldIcon, { size: "md", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, t.jsxs)("div", {
                className: T.bc,
                children: [
                    (0, t.jsx)(p.D, {
                        id: e,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            o?.name != null
                                ? N.intl.formatToPlainString(N.t["P+/gzA"], { guildName: o.name })
                                : N.intl.string(N.t.gBPcuP),
                    }),
                    null != d && "" !== d
                        ? (0, t.jsxs)(y.E, {
                              variant: "body-md/medium",
                              color: "text-default",
                              children: [
                                  (0, t.jsx)("span", { className: T.Wj, children: N.intl.string(N.t.cf1psW) }),
                                  (0, t.jsx)("span", { children: d }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, t.jsxs)("div", {
                className: T.Ow,
                children: [
                    u || m
                        ? (0, t.jsx)(E.$, {
                              onClick: a,
                              variant: "secondary",
                              size: "md",
                              loading: m,
                              disabled: m,
                              text: l,
                              fullWidth: !0,
                          })
                        : null,
                    (0, t.jsx)(E.$, {
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
var w = l(339350),
    k = l(51271);
let P = function (i) {
    let { onWithdrawApplication: e, guild: l = null } = i,
        s = l?.id;
    return (
        n.useEffect(() => {
            null != s && (0, k.NC)(s);
        }, [s]),
        (0, t.jsxs)("div", {
            className: T.EL,
            children: [
                (0, t.jsx)("div", {
                    className: T.P0,
                    children: (0, t.jsx)(w.HourglassIcon, { size: "md", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, t.jsxs)("div", {
                    className: T.bc,
                    children: [
                        (0, t.jsx)(p.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                l?.name != null
                                    ? N.intl.formatToPlainString(N.t["0Qlu/6"], { guildName: l.name })
                                    : N.intl.string(N.t["5iLvSx"]),
                        }),
                        (0, t.jsx)(y.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: N.intl.string(N.t.FdsK4h),
                        }),
                    ],
                }),
                (0, t.jsx)(E.$, {
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
var F = l(223810);
function _(i) {
    let { guild: e, width: l, height: s } = i,
        a = n.useMemo(
            () => (e?.splash != null ? m.Ay.getGuildSplashURL({ id: e?.id, splash: e?.splash }) : null),
            [e?.splash, e?.id],
        ),
        r = (0, d.S)(a);
    return null == a
        ? (0, t.jsx)("div", { className: F.Eq })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.A, { className: F.Yi, src: a, imageClassName: F.Iv, width: l, height: s }),
                  null != r &&
                      (0, t.jsx)("div", {
                          className: F.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, h.cb)(r, 0.16)} 0%, ${(0, h.cb)(r, 1)} 100%)`,
                          },
                      }),
                  (0, t.jsx)("div", { className: F.qj }),
              ],
          });
}
function q(i) {
    let { guildId: e } = i,
        { ref: l, width: c, height: d } = (0, r.Ay)(),
        m = (0, s.bG)([j.A], () => j.A.getRequest(e)),
        h = (0, s.bG)([u.A], () => u.A.getGuild(e)),
        { hasFetchedRequestToJoinGuilds: A, guildPreviewDisabled: v } = (0, s.cf)([j.A], () => ({
            hasFetchedRequestToJoinGuilds: j.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: j.A.getJoinRequestGuild(e),
        }));
    (n.useEffect(() => {
        h?.joinedAt != null && (0, o.pX)(G.BVt.CHANNEL(e));
    }, [h, e]),
        n.useEffect(() => {
            A || g.A.fetchRequestToJoinGuilds();
        }, [A]));
    let p = n.useCallback(() => {
        (g.A.removeGuildJoinRequest(e), (0, o.pX)(G.BVt.ME));
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
        (await g.A.resetGuildJoinRequest(e), (0, x.Ze)(e));
    }
    function C(i) {
        i ? E(N.intl.format(N.t["9ZezpN"], { name: v?.name }), p)() : p();
    }
    let y = E(N.intl.format(N.t.fJwWVt, { name: v?.name }), p);
    return (0, t.jsxs)("div", {
        className: F.MY,
        ref: l,
        children: [
            (0, t.jsx)(_, { guild: v, height: d, width: c }),
            (0, t.jsx)("div", {
                className: F.FG,
                children: (function () {
                    if (null == m) return null;
                    switch (m.applicationStatus) {
                        case f.B5.SUBMITTED:
                            return (0, t.jsx)(P, { onWithdrawApplication: () => C(!0), guild: v });
                        case f.B5.REJECTED:
                            return (0, t.jsx)(V, {
                                reapplyText: N.intl.string(N.t.I1LYVk),
                                onReapply: T,
                                confirmText: N.intl.string(N.t.g9tK0o),
                                onWithdrawApplication: C,
                                rejectionReason: m.rejectionReason,
                                guild: v,
                            });
                        default:
                            return (0, t.jsx)(b, {
                                onDiscardApplication: y,
                                onContinueApplication: () => (0, x.Ze)(e),
                                guild: v,
                            });
                    }
                })(),
            }),
            (0, t.jsx)("div", { className: F.T_ }),
        ],
    });
}
let L = q;
