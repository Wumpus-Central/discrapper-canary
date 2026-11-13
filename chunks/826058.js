n.d(l, { bI: () => x, Ay: () => Z, qF: () => D, KL: () => k, vL: () => H, FZ: () => q });
var e = n(582128),
    i = n(855986),
    a = n(73153),
    u = n(803306),
    r = n(627363),
    s = n(587895),
    o = n(851767),
    d = n(734057),
    c = n(808728),
    p = n(71393),
    f = n(576705),
    g = n(238490),
    h = n(233470),
    A = n(260498),
    b = n(951178),
    _ = n(426035),
    m = n(385081),
    P = n(519325),
    v = n(246338),
    S = n(664619),
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
                (!1 === u || ("activity" === n.surface && a && null == e && !0 !== i))
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
            missingSurface: a ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
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
var j = n(652215);
let x = 221552 == n.j ? e.createContext(null) : null;
function k(t, l) {
    return "guild" === t.install_scope ? (t.guild_id ?? l) : null;
}
function D(t) {
    if (!(0, b._7)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function U(t) {
    if (null == w.A.getPublishApprovalUrl(t)) return !1;
    let l = w.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function R(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = k(n, l),
        i = null == e ? null : (0, v.i8)(e, n.application_id),
        a = null == e ? null : p.A.getGuild(e);
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
            status: w.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: w.A.isAppChannelPending(t),
            canManageGuild:
                null == a
                    ? null
                    : !!f.A.can(j.xBc.MANAGE_GUILD, a) ||
                      (!!(0, A.PV)(n) &&
                          (0, b.Jr)(n).some((t) => {
                              let l = p.A.getGuild(t);
                              return null != l && f.A.can(j.xBc.MANAGE_GUILD, l);
                          })),
            canManageChannels: null == a ? null : f.A.can(j.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, _.AS)(n, e),
            liveNameOutdated: D(n),
        },
    };
}
async function H(t, l) {
    let n = A.Ay.getProject(t),
        e = n?.preview_application_id;
    if (null == n || null == e) return;
    let i = (function (t, l, n) {
        if (t?.guild_id == null) return n;
        let e = n !== t.guild_id && (0, b.Jr)(t).includes(n);
        return l?.integration_installed === !0 || e ? t.guild_id : n;
    })(n, A.Ay.getIntegrationStatus(t), l);
    (await (0, r.TA)(e).catch(() => {}),
        await new Promise((t) => {
            P.A.openConjureAppInstallModal({
                applicationId: e,
                application: s.A.getApplication(e) ?? null,
                guildId: i,
                onClose: t,
            });
        }),
        await (async function (t, l) {
            (t.guild_id !== l || t.preview_guild_id !== l) &&
                (await (0, h.M7)(t.id, { guild_id: l, preview_guild_id: l }));
        })(n, i).catch(() => {}),
        await (0, h.U1)(t).catch(() => {}));
}
async function O(t, l, n, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = n,
        o = u.id;
    L.add(o);
    try {
        let t = await (0, E.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG));
        return;
    } finally {
        L.delete(o);
    }
    if (null == i) return;
    if (w.A.isProjectPublishing(o) || w.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(M.intl.string(y.default["TD/ze/"]));
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !l.isUpdate;
    (d && B(o, !0),
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
                        null != t.guildId && F(u),
                        (0, S.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() =>
                                d && !0 !== l.channel_skipped
                                    ? (async function (t, l) {
                                          let n = Date.now() + 5e3;
                                          for (; R(t, l)?.appChannelId == null && Date.now() < n;)
                                              await new Promise((t) => setTimeout(t, 250));
                                      })(o, s)
                                    : void 0,
                            )
                            .finally(() => B(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    B(o, !1);
                    let l = t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: l }),
                        r.showError(l));
                },
            ));
}
function B(t, l) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: l });
}
function F(t) {
    (0, u.eO)((0, _.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let L = new Set();
async function q(t, l, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || L.has(t)) return;
    let r = R(t, a),
        s = r?.input.status?.publishState;
    if (r?.ownerInstallMissing === !0) {
        L.add(t);
        try {
            await (0, h.lZ)(t);
        } catch {
            u.showError(M.intl.string(y.default.gMWZeG));
            return;
        } finally {
            L.delete(t);
        }
        if ("live_current" === s || "live_auto_synced" === s)
            return void u.showConfirmation(M.intl.string(y.default.S6Px3n));
    }
    if (null == r || null == s || !(0, C.Uh)(s)) return;
    if (r.input.status?.safetyHold === !0) return void u.showSafetyHold(t);
    let o = U(t) ? w.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e(241989), n.e(574246)]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (w.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = I(r.input);
    ((0, m.yJ)(t, {
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
                J(t, d, e, i).catch(() => {});
            })
          : await J(t, d, e, i);
}
async function J(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = R(t, i);
    if (!(null == u || w.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            L.add(t);
            try {
                await (a.requestConsent ?? ((t) => H(t, i)))(t);
            } finally {
                L.delete(t);
            }
            if (w.A.isProjectPublishing(t)) return;
            let u = R(t, i),
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
function Z(t, l) {
    let n = e.useContext(x),
        a = l ?? n,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: g,
            publishOffered: h,
            ownerInstallMissing: b,
            publishing: _,
            failure: m,
            approvalUrl: P,
            project: v,
            guildId: S,
            appChannelId: N,
            installScope: E,
            status: j,
            integrationStatus: k,
            guildName: D,
            appChannelName: H,
            appChannelPending: O,
            canManageGuild: B,
            canManageChannels: L,
            usesAppChannels: J,
            botInGuild: Z,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [A.Ay, w.A, p.A, c.A, d.A, f.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : R(t, u);
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
                        !1 === U(t) &&
                        (w.A.isProjectPublishing(t) || w.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : w.A.getPublishFailure(t),
                    approvalUrl: null != t && U(t) ? w.A.getPublishApprovalUrl(t) : null,
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
        V = e.useMemo(
            () =>
                null == v
                    ? null
                    : {
                          installScope: E,
                          status: j,
                          integrationStatus: k,
                          guildName: D,
                          appChannelName: H,
                          appChannelPending: O,
                          canManageGuild: B,
                          canManageChannels: L,
                          usesAppChannels: J,
                          botInGuild: Z,
                          liveNameOutdated: Q,
                      },
            [v, E, j, k, D, H, O, B, L, J, Z, Q],
        ),
        W = V?.status?.publishState ?? null,
        X = V?.installScope === "guild" && V.status?.surface === "bot";
    e.useEffect(() => {
        null != v && null != S && X && null != W && (0, C.lE)(W) && F(v);
    }, [v?.id, S, X, W]);
    let Y = v?.application_id ?? null,
        z = null != W && (0, C.lE)(W);
    e.useEffect(() => {
        null != Y &&
            z &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, z]);
    let K = e.useMemo(() => (null == V ? null : I(V)), [V]),
        $ = (function (t) {
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
    let tl = null == P ? K.label : M.intl.string(y.default.qru9M5);
    return {
        ...K,
        upToDate: K.upToDate && !b,
        status: V?.status ?? null,
        guildId: S,
        appChannelId: N,
        publishing: _,
        failure: _ ? null : m,
        showsProgress: null != $,
        awaitingApproval: null != P,
        label: _ ? ($ ?? M.intl.string(y.default.Rhx0rn)) : tl,
        disabled: _ || !0 === a.busy,
        run: tt,
    };
}
