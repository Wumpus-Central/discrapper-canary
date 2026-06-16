t.r(e), t.d(e, { MemberVerificationPreviewDisabled: () => q, default: () => z });
var l = t(627968),
    s = t(64700),
    n = t(17928),
    a = t(314116),
    r = t(765671),
    d = t(4616),
    c = t(743674),
    u = t(976860),
    o = t(71393),
    m = t(486020),
    h = t(998304),
    x = t(624458),
    g = t(202384),
    j = t(513461),
    f = t(212455),
    A = t(115723),
    p = t(661531),
    v = t(534514),
    E = t(821609),
    N = t(375708),
    T = t(369364);
function C(i) {
    let { onDiscardApplication: e, onContinueApplication: t, guild: s } = i;
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(A.p, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsx)(v.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children:
                    null != s
                        ? N.intl.formatToPlainString(N.t.f5Jaw7, { guildName: s.name })
                        : N.intl.string(N.t["0sTyEb"]),
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
var b = t(401432),
    R = t(834730),
    y = t(299091),
    I = t(408213),
    G = t(652215);
let V = (i) => {
    let {
            headerId: e,
            reapplyText: t,
            onReapply: a,
            confirmText: r,
            onWithdrawApplication: d,
            rejectionReason: c = null,
            guild: u = null,
        } = i,
        { canReapply: o, isLoading: m } = (function (i) {
            let [e, t] = s.useState(!0),
                l = (0, n.bG)([f.A], () => (null != i ? f.A.getJoinRequestGuild(i) : void 0)),
                a = s.useCallback(async (i) => {
                    try {
                        let e = y.A.getInviteKeyForGuildId(i);
                        null != e && (await I.Ay.fetchVerificationForm(i, e));
                    } finally {
                        t(!1);
                    }
                }, []);
            return (
                s.useEffect(() => {
                    null == i ? t(!1) : (t(!0), a(i));
                }, [i, a]),
                {
                    canReapply: null != l && l.features.has(G.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: e,
                }
            );
        })(u?.id);
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(b.a, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsxs)("div", {
                className: T.bc,
                children: [
                    (0, l.jsx)(v.D, {
                        id: e,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            u?.name != null
                                ? N.intl.formatToPlainString(N.t["P+/gzA"], { guildName: u.name })
                                : N.intl.string(N.t.gBPcuP),
                    }),
                    null != c && "" !== c
                        ? (0, l.jsxs)(R.E, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, l.jsx)("span", { className: T.Wj, children: N.intl.string(N.t.cf1psW) }),
                                  (0, l.jsx)("span", { children: c }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: T.Ow,
                children: [
                    o || m
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
                        onClick: () => d(o || m),
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
        n = t?.id;
    return (
        s.useEffect(() => {
            null != n && (0, k.NC)(n);
        }, [n]),
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
                        (0, l.jsx)(R.E, {
                            variant: "text-md/medium",
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
var F = t(665819);
function _(i) {
    let { guild: e, width: t, height: n } = i,
        a = s.useMemo(
            () => (e?.splash != null ? m.Ay.getGuildSplashURL({ id: e?.id, splash: e?.splash }) : null),
            [e?.splash, e?.id],
        ),
        r = (0, c.S)(a);
    return null == a
        ? (0, l.jsx)("div", { className: F.Eq })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(d.A, { className: F.Yi, src: a, imageClassName: F.Iv, width: t, height: n }),
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
let q = (i) => {
        let { guildId: e } = i,
            { ref: t, width: d, height: c } = (0, r.Ay)(),
            m = (0, n.bG)([f.A], () => f.A.getRequest(e)),
            h = (0, n.bG)([o.A], () => o.A.getGuild(e)),
            { hasFetchedRequestToJoinGuilds: A, guildPreviewDisabled: p } = (0, n.cf)([f.A], () => ({
                hasFetchedRequestToJoinGuilds: f.A.hasFetchedRequestToJoinGuilds,
                guildPreviewDisabled: f.A.getJoinRequestGuild(e),
            }));
        s.useEffect(() => {
            null != h && (0, u.pX)(G.BVt.CHANNEL(e));
        }, [h, e]),
            s.useEffect(() => {
                A || x.A.fetchRequestToJoinGuilds();
            }, [A]);
        let v = s.useCallback(() => {
                x.A.removeGuildJoinRequest(e), (0, u.pX)(G.BVt.ME);
            }, [e]),
            E = (i, e) => () => {
                (0, a.A)({
                    title: N.intl.string(N.t.y0CVes),
                    subtitle: i,
                    cancelText: N.intl.string(N.t.oEAioF),
                    onConfirm: e,
                    confirmText: N.intl.string(N.t.p89ACt),
                });
            },
            T = async () => {
                await x.A.resetGuildJoinRequest(e), (0, g.Ze)(e);
            },
            b = (i) => {
                i ? E(N.intl.format(N.t["9ZezpN"], { name: p?.name }), v)() : v();
            },
            R = E(N.intl.format(N.t.fJwWVt, { name: p?.name }), v);
        return (0, l.jsxs)("div", {
            className: F.MY,
            ref: t,
            children: [
                (0, l.jsx)(_, { guild: p, height: c, width: d }),
                (0, l.jsx)("div", {
                    className: F.FG,
                    children: (() => {
                        if (null == m) return null;
                        switch (m.applicationStatus) {
                            case j.B5.SUBMITTED:
                                return (0, l.jsx)(P, { onWithdrawApplication: () => b(!0), guild: p });
                            case j.B5.REJECTED:
                                return (0, l.jsx)(V, {
                                    reapplyText: N.intl.string(N.t.I1LYVk),
                                    onReapply: T,
                                    confirmText: N.intl.string(N.t.g9tK0o),
                                    onWithdrawApplication: b,
                                    rejectionReason: m.rejectionReason,
                                    guild: p,
                                });
                            default:
                                return (0, l.jsx)(C, {
                                    onDiscardApplication: R,
                                    onContinueApplication: () => (0, g.Ze)(e),
                                    guild: p,
                                });
                        }
                    })(),
                }),
                (0, l.jsx)("div", { className: F.T_ }),
            ],
        });
    },
    z = q;
