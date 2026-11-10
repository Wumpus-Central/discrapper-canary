n.d(l, { bI: () => j, Ay: () => J, qF: () => k, KL: () => D, vL: () => H, FZ: () => q });
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
    h = n(233470),
    A = n(260498),
    b = n(951178),
    _ = n(426035),
    P = n(385081),
    m = n(519325),
    v = n(246338),
    w = n(664619),
    S = n(722701),
    C = n(811587),
    M = n(191850),
    y = n(792996);
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
                (!1 === u || ("activity" === n.surface && a && null == e && !0 !== i))
            );
        })({ ...t, status: i }),
        u = (function (t) {
            let { installScope: l, guildName: n, canManageGuild: e } = t;
            return "guild" !== l || !1 !== e ? null : y.intl.format(M.default.N4NkyR, { server: n ?? "" });
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
                              ? y.intl.format(M.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(t)
                    : null,
            missingSurface: a ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
        };
    return r && n?.bot_permissions_changed === !0
        ? { ...s, label: y.intl.string(M.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: y.intl.string(M.default["120EFN"]), action: "publish" };
}
var N = n(516288),
    E = n(962998),
    G = n(615839);
let T = {
    preparing: M.default.GQeas1,
    approval: M.default["TkHHD+"],
    approved_by_grant: M.default["9+kNt8"],
    setup: M.default["F+AxgM"],
    build: M.default.oQeMIy,
    deploy: M.default.LqZvZ2,
    discord: M.default.LFcGAT,
    activating: M.default.ff1Fq1,
};
var U = n(652215);
let j = 221552 == n.j ? e.createContext(null) : null;
function D(t, l) {
    return "guild" === t.install_scope ? (t.guild_id ?? l) : null;
}
function k(t) {
    if (!(0, b._7)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function R(t) {
    if (null == S.A.getPublishApprovalUrl(t)) return !1;
    let l = S.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function x(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = D(n, l),
        i = null == e ? null : (0, v.i8)(e, n.application_id),
        a = null == e ? null : c.A.getGuild(e);
    return {
        project: n,
        guildId: e,
        appChannelId: i,
        ownerInstallMissing:
            "user" === n.install_scope &&
            (0, A.PV)(n) &&
            A.Ay.getIntegrationStatus(t)?.owner_authorization_revoked === !0,
        input: {
            installScope: n.install_scope,
            status: S.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: S.A.isAppChannelPending(t),
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
    Z.add(o);
    try {
        let t = await (0, E.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : y.intl.string(M.default.gMWZeG));
        return;
    } finally {
        Z.delete(o);
    }
    if (null == i) return;
    if (S.A.isProjectPublishing(o) || S.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(y.intl.string(M.default["TD/ze/"]));
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
                              ? y.intl.string(M.default.UXEDPw)
                              : y.intl.string(M.default.gMWZeG),
                    )
                );
            })
            .then(
                (l) => {
                    (r.showConfirmation(y.intl.string(M.default.S6Px3n)),
                        null != t.guildId && L(u),
                        (0, w.tZ)(o, { isPreview: !1 })
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
                    let l = t instanceof Error ? t.message : y.intl.string(M.default.gMWZeG);
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
let Z = new Set();
async function q(t, l, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || Z.has(t)) return;
    let r = x(t, a),
        s = r?.input.status?.publishState;
    if (r?.ownerInstallMissing === !0) {
        Z.add(t);
        try {
            await (0, h.lZ)(t);
        } catch {
            u.showError(y.intl.string(M.default.gMWZeG));
            return;
        } finally {
            Z.delete(t);
        }
        if ("live_current" === s || "live_auto_synced" === s)
            return void u.showConfirmation(y.intl.string(M.default.S6Px3n));
    }
    if (null == r || null == s || !(0, C.Uh)(s)) return;
    if (r.input.status?.safetyHold === !0) return void u.showSafetyHold(t);
    let o = R(t) ? S.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e(241989), n.e(574246)]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (S.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
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
                B(t, d, e, i).catch(() => {});
            })
          : await B(t, d, e, i);
}
async function B(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = x(t, i);
    if (!(null == u || S.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            Z.add(t);
            try {
                await (a.requestConsent ?? ((t) => H(t, i)))(t);
            } finally {
                Z.delete(t);
            }
            if (S.A.isProjectPublishing(t)) return;
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
            ownerInstallMissing: b,
            publishing: _,
            failure: P,
            approvalUrl: m,
            project: v,
            guildId: w,
            appChannelId: N,
            installScope: E,
            status: U,
            integrationStatus: D,
            guildName: k,
            appChannelName: H,
            appChannelPending: O,
            canManageGuild: F,
            canManageChannels: Z,
            usesAppChannels: B,
            botInGuild: J,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [A.Ay, S.A, c.A, p.A, d.A, f.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : x(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered:
                        (l?.input.status != null && (0, C.Uh)(l.input.status.publishState)) ||
                        l?.ownerInstallMissing === !0,
                    ownerInstallMissing: l?.ownerInstallMissing === !0,
                    project: l?.project ?? null,
                    guildId: l?.guildId ?? null,
                    appChannelId: l?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === R(t) &&
                        (S.A.isProjectPublishing(t) || S.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : S.A.getPublishFailure(t),
                    approvalUrl: null != t && R(t) ? S.A.getPublishApprovalUrl(t) : null,
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
        W = e.useMemo(
            () =>
                null == v
                    ? null
                    : {
                          installScope: E,
                          status: U,
                          integrationStatus: D,
                          guildName: k,
                          appChannelName: H,
                          appChannelPending: O,
                          canManageGuild: F,
                          canManageChannels: Z,
                          usesAppChannels: B,
                          botInGuild: J,
                          liveNameOutdated: Q,
                      },
            [v, E, U, D, k, H, O, F, Z, B, J, Q],
        ),
        V = W?.status?.publishState ?? null,
        X = W?.installScope === "guild" && W.status?.surface === "bot";
    e.useEffect(() => {
        null != v && null != w && X && null != V && (0, C.lE)(V) && L(v);
    }, [v?.id, w, X, V]);
    let Y = v?.application_id ?? null,
        z = null != V && (0, C.lE)(V);
    e.useEffect(() => {
        null != Y &&
            z &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, z]);
    let K = e.useMemo(() => (null == W ? null : I(W)), [W]),
        $ = (function (t) {
            let l = (0, i.bG)([S.A], () => (null == t ? null : S.A.getPublishProgress(t))),
                [n, a] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == l) return;
                a(Date.now());
                let t = setInterval(() => a(Date.now()), 1e3);
                return () => clearInterval(t);
            }, [l]),
            null == l)
                ? null
                : y.intl.formatToPlainString(M.default["ndkR+x"], {
                      action: y.intl.string(T[l.stage]),
                      detail: (0, G.C7)(n - l.stageStartedAt),
                  });
        })(_ ? t : null),
        tt = e.useCallback(
            (l, n) => {
                null != t &&
                    null != a &&
                    q(t, l, a, n).catch((l) => {
                        console.error("[conjure] publish action failed", t, l);
                    });
            },
            [t, a],
        );
    if (null == a || !g || null == K || null == E || (!h && !_)) return null;
    let tl = null == m ? K.label : y.intl.string(M.default.qru9M5);
    return {
        ...K,
        upToDate: K.upToDate && !b,
        status: W?.status ?? null,
        guildId: w,
        appChannelId: N,
        publishing: _,
        failure: _ ? null : P,
        showsProgress: null != $,
        awaitingApproval: null != m,
        label: _ ? ($ ?? y.intl.string(M.default.Rhx0rn)) : tl,
        disabled: _ || !0 === a.busy,
        run: tt,
    };
}
