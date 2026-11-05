n.d(l, { bI: () => j, Ay: () => J, qF: () => k, KL: () => R, vL: () => H, FZ: () => B });
var e = n(582128),
    i = n(855986),
    a = n(73153),
    u = n(803306),
    r = n(627363),
    s = n(587895),
    o = n(851767),
    d = n(734057),
    p = n(808728),
    c = n(71393),
    f = n(576705),
    g = n(238490),
    h = n(371169),
    A = n(260498),
    b = n(951178),
    _ = n(426035),
    P = n(385081),
    m = n(519325),
    S = n(246338),
    v = n(664619),
    w = n(722701),
    C = n(811587),
    y = n(191850),
    M = n(792996);
function I(t) {
    let { installScope: l, integrationStatus: n } = t,
        e = t.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === e.publishState && t.liveNameOutdated ? { ...e, publishState: "live_outdated" } : e,
        a = (function (t) {
            let {
                installScope: l,
                status: n,
                appChannelName: e,
                appChannelPending: i,
                usesAppChannels: a,
                botInGuild: u,
            } = t;
            return (
                "guild" === l &&
                null != n &&
                !!(0, C.lE)(n.publishState) &&
                ("activity" === n.surface ? a && null == e && !0 !== i : "bot" === n.surface && !1 === u)
            );
        })({ ...t, status: i }),
        u = (function (t) {
            let { installScope: l, guildName: n, canManageGuild: e } = t;
            return "guild" !== l || !1 !== e ? null : M.intl.format(y.default.N4NkyR, { server: n ?? "" });
        })(t),
        r = (0, g.Qg)({
            installScope: l,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        s = {
            intent: r ? "consent_then_publish" : "publish",
            isUpdate: "live_outdated" === i.publishState && !a,
            upToDate: "live_current" === i.publishState && !a,
            disabledReason: u,
            confirmReason:
                null == u
                    ? (function (t) {
                          let { installScope: l, guildName: n, canManageChannels: e, usesAppChannels: i } = t;
                          return "guild" === l && i && !1 === e
                              ? M.intl.format(y.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(t)
                    : null,
            missingSurface: a ? ("activity" === i.surface ? "channel" : "bot") : null,
        };
    return r && n?.bot_permissions_changed === !0
        ? { ...s, label: M.intl.string(y.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: M.intl.string(y.default["120EFN"]), action: "publish" };
}
var N = n(516288),
    E = n(962998),
    G = n(615839);
let T = {
    preparing: y.default.GQeas1,
    approval: y.default["TkHHD+"],
    approved_by_grant: y.default["9+kNt8"],
    setup: y.default["F+AxgM"],
    build: y.default.oQeMIy,
    deploy: y.default.LqZvZ2,
    discord: y.default.LFcGAT,
    activating: y.default.ff1Fq1,
};
var U = n(652215);
let j = 221552 == n.j ? e.createContext(null) : null;
function R(t, l) {
    return "guild" === t.install_scope ? (t.guild_id ?? l) : null;
}
function k(t) {
    if (!(0, b._7)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function D(t) {
    if (null == w.A.getPublishApprovalUrl(t)) return !1;
    let l = w.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function x(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = R(n, l),
        i = null == e ? null : (0, S.i8)(e, n.application_id),
        a = null == e ? null : c.A.getGuild(e);
    return {
        project: n,
        guildId: e,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: w.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: w.A.isAppChannelPending(t),
            canManageGuild: null == a ? null : f.A.can(U.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : f.A.can(U.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, _.AS)(n, e),
            liveNameOutdated: k(n),
        },
    };
}
async function H(t, l) {
    var n;
    let e = A.Ay.getProject(t),
        i = e?.preview_application_id;
    if (null == e || null == i) return;
    let a =
        ((n = A.Ay.getIntegrationStatus(t)), n?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : l);
    (await (0, r.TA)(i).catch(() => {}),
        await new Promise((t) => {
            m.A.openConjureAppInstallModal({
                applicationId: i,
                application: s.A.getApplication(i) ?? null,
                guildId: a,
                onClose: t,
            });
        }),
        await (async function (t, l) {
            (t.guild_id !== l || t.preview_guild_id !== l) &&
                (await (0, h.M7)(t.id, { guild_id: l, preview_guild_id: l }));
        })(e, a).catch(() => {}),
        await (0, h.U1)(t).catch(() => {}));
}
async function O(t, l, n, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = n,
        o = u.id;
    q.add(o);
    try {
        let t = await (0, E.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG));
        return;
    } finally {
        q.delete(o);
    }
    if (null == i) return;
    if (w.A.isProjectPublishing(o) || w.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(M.intl.string(y.default["TD/ze/"]));
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !l.isUpdate;
    (d && F(o, !0),
        (0, E.TV)(o, i, e)
            .then((t) => {
                let l;
                if (!0 === t.ok) return t;
                throw (
                    20088 === t.code && (0, h.U1)(o).catch(() => {}),
                    Error(
                        null != (l = t.detail?.trim()) && "" !== l
                            ? l
                            : 20088 === t.code
                              ? M.intl.string(y.default.UXEDPw)
                              : M.intl.string(y.default.gMWZeG),
                    )
                );
            })
            .then(
                (l) => {
                    (r.showConfirmation(M.intl.string(y.default.S6Px3n)),
                        null != t.guildId && L(u),
                        (0, v.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() =>
                                d && !0 !== l.channel_skipped
                                    ? (async function (t, l) {
                                          let n = Date.now() + 5e3;
                                          for (; x(t, l)?.appChannelId == null && Date.now() < n;)
                                              await new Promise((t) => setTimeout(t, 250));
                                      })(o, s)
                                    : void 0,
                            )
                            .finally(() => F(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    F(o, !1);
                    let l = t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: l }),
                        r.showError(l));
                },
            ));
}
function F(t, l) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: l });
}
function L(t) {
    (0, u.eO)((0, _.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let q = new Set();
async function B(t, l, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || q.has(t)) return;
    let r = x(t, a),
        s = r?.input.status?.publishState;
    if (null == r || null == s || !(0, C.Uh)(s)) return;
    if (r.input.status?.safetyHold === !0) return void u.showSafetyHold(t);
    let o = D(t) ? w.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e(241989), n.e(574246)]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (w.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = I(r.input);
    ((0, P.yJ)(t, {
        entryPoint: l,
        publishState: s,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: d.action,
    }),
    null != d.disabledReason)
        ? u.showPublishBlocked(N.k.MISSING_MANAGE_SERVER, d.disabledReason)
        : ((0, E.dx)(t), null != d.confirmReason)
          ? u.showPublishBlocked(N.k.MISSING_MANAGE_CHANNELS, d.confirmReason, () => {
                Z(t, d, e, i).catch(() => {});
            })
          : await Z(t, d, e, i);
}
async function Z(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = x(t, i);
    if (!(null == u || w.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            q.add(t);
            try {
                await (a.requestConsent ?? ((t) => H(t, i)))(t);
            } finally {
                q.delete(t);
            }
            if (w.A.isProjectPublishing(t)) return;
            let u = x(t, i),
                r = u?.input.integrationStatus ?? null;
            if (
                null == u ||
                (0, g.Qg)({
                    installScope: u.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            await O(u, l, n, e);
            return;
        }
        await O(u, l, n, e);
    }
}
function J(t, l) {
    let n = e.useContext(j),
        a = l ?? n,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: g,
            publishOffered: h,
            publishing: b,
            failure: _,
            approvalUrl: P,
            project: m,
            guildId: S,
            appChannelId: v,
            installScope: N,
            status: E,
            integrationStatus: U,
            guildName: R,
            appChannelName: k,
            appChannelPending: H,
            canManageGuild: O,
            canManageChannels: F,
            usesAppChannels: q,
            botInGuild: Z,
            liveNameOutdated: J,
        } = (0, i.cf)(
            [A.Ay, w.A, c.A, p.A, d.A, f.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : x(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered: l?.input.status != null && (0, C.Uh)(l.input.status.publishState),
                    project: l?.project ?? null,
                    guildId: l?.guildId ?? null,
                    appChannelId: l?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === D(t) &&
                        (w.A.isProjectPublishing(t) || w.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : w.A.getPublishFailure(t),
                    approvalUrl: null != t && D(t) ? w.A.getPublishApprovalUrl(t) : null,
                    installScope: l?.input.installScope ?? null,
                    status: l?.input.status ?? null,
                    integrationStatus: l?.input.integrationStatus ?? null,
                    guildName: l?.input.guildName ?? null,
                    appChannelName: l?.input.appChannelName ?? null,
                    appChannelPending: l?.input.appChannelPending ?? !1,
                    canManageGuild: l?.input.canManageGuild ?? null,
                    canManageChannels: l?.input.canManageChannels ?? null,
                    usesAppChannels: l?.input.usesAppChannels ?? !1,
                    botInGuild: l?.input.botInGuild ?? null,
                    liveNameOutdated: l?.input.liveNameOutdated ?? !1,
                };
            },
            [t, u],
        ),
        Q = e.useMemo(
            () =>
                null == m
                    ? null
                    : {
                          installScope: N,
                          status: E,
                          integrationStatus: U,
                          guildName: R,
                          appChannelName: k,
                          appChannelPending: H,
                          canManageGuild: O,
                          canManageChannels: F,
                          usesAppChannels: q,
                          botInGuild: Z,
                          liveNameOutdated: J,
                      },
            [m, N, E, U, R, k, H, O, F, q, Z, J],
        ),
        W = Q?.status?.publishState ?? null,
        X = Q?.installScope === "guild" && Q.status?.surface === "bot";
    e.useEffect(() => {
        null != m && null != S && X && null != W && (0, C.lE)(W) && L(m);
    }, [m?.id, S, X, W]);
    let Y = m?.application_id ?? null,
        V = null != W && (0, C.lE)(W);
    e.useEffect(() => {
        null != Y &&
            V &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, V]);
    let K = e.useMemo(() => (null == Q ? null : I(Q)), [Q]),
        z = (function (t) {
            let l = (0, i.bG)([w.A], () => (null == t ? null : w.A.getPublishProgress(t))),
                [n, a] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == l) return;
                a(Date.now());
                let t = setInterval(() => a(Date.now()), 1e3);
                return () => clearInterval(t);
            }, [l]),
            null == l)
                ? null
                : M.intl.formatToPlainString(y.default["ndkR+x"], {
                      action: M.intl.string(T[l.stage]),
                      detail: (0, G.C7)(n - l.stageStartedAt),
                  });
        })(b ? t : null),
        $ = e.useCallback(
            (l, n) => {
                null != t &&
                    null != a &&
                    B(t, l, a, n).catch((l) => {
                        console.error("[conjure] publish action failed", t, l);
                    });
            },
            [t, a],
        );
    if (null == a || !g || null == K || null == N || (!h && !b)) return null;
    let tt = null == P ? K.label : M.intl.string(y.default.qru9M5);
    return {
        ...K,
        status: Q?.status ?? null,
        guildId: S,
        appChannelId: v,
        publishing: b,
        failure: b ? null : _,
        showsProgress: null != z,
        awaitingApproval: null != P,
        label: b ? (z ?? M.intl.string(y.default.Rhx0rn)) : tt,
        disabled: b || !0 === a.busy,
        run: $,
    };
}
