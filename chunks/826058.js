l.d(n, { bI: () => j, Ay: () => Q, qF: () => R, KL: () => k, vL: () => O, FZ: () => q });
var e = l(582128),
    i = l(855986),
    a = l(73153),
    u = l(803306),
    r = l(627363),
    s = l(587895),
    o = l(851767),
    d = l(734057),
    p = l(808728),
    c = l(71393),
    f = l(576705),
    g = l(238490),
    h = l(233470),
    A = l(260498),
    b = l(951178),
    _ = l(426035),
    P = l(890698),
    m = l(385081),
    w = l(519325),
    v = l(246338),
    S = l(664619),
    C = l(722701),
    M = l(811587),
    I = l(191850),
    y = l(792996);
function N(t) {
    let { installScope: n, integrationStatus: l } = t,
        e = t.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === e.publishState && t.liveNameOutdated ? { ...e, publishState: "live_outdated" } : e,
        a = (function (t) {
            let {
                installScope: n,
                status: l,
                appChannelName: e,
                appChannelPending: i,
                usesAppChannels: a,
                botInGuild: u,
            } = t;
            return (
                "guild" === n &&
                null != l &&
                !!(0, M.lE)(l.publishState) &&
                (!1 === u || ("activity" === l.surface && a && null == e && !0 !== i))
            );
        })({ ...t, status: i }),
        u = (function (t) {
            let { installScope: n, guildName: l, canManageGuild: e } = t;
            return "guild" !== n || !1 !== e ? null : y.intl.format(I.default.N4NkyR, { server: l ?? "" });
        })(t),
        r = (0, g.Qg)({
            installScope: n,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        }),
        s = {
            intent: r ? "consent_then_publish" : "publish",
            isUpdate: "live_outdated" === i.publishState && !a,
            upToDate: "live_current" === i.publishState && !a,
            disabledReason: u,
            confirmReason:
                null == u
                    ? (function (t) {
                          let { installScope: n, guildName: l, canManageChannels: e, usesAppChannels: i } = t;
                          return "guild" === n && i && !1 === e
                              ? y.intl.format(I.default.eHYXFg, { server: l ?? "" })
                              : null;
                      })(t)
                    : null,
            missingSurface: a ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
        };
    return r && l?.bot_permissions_changed === !0
        ? { ...s, label: y.intl.string(I.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: y.intl.string(I.default["120EFN"]), action: "publish" };
}
var E = l(516288),
    G = l(962998),
    T = l(615839);
let U = {
    preparing: I.default.GQeas1,
    approval: I.default["TkHHD+"],
    approved_by_grant: I.default["9+kNt8"],
    setup: I.default["F+AxgM"],
    build: I.default.oQeMIy,
    deploy: I.default.LqZvZ2,
    discord: I.default.LFcGAT,
    activating: I.default.ff1Fq1,
};
var D = l(652215);
let j = 221552 == l.j ? e.createContext(null) : null;
function k(t, n) {
    return "guild" === t.install_scope ? (t.guild_id ?? n) : null;
}
function R(t) {
    if (!(0, b._7)(t)) return !1;
    let n = s.A.getApplication(t.application_id)?.name;
    return null != n && n !== t.name;
}
function x(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let n = C.A.getPublishProgress(t)?.stage;
    return null == n || "preparing" === n || "approval" === n;
}
function H(t, n) {
    let l = A.Ay.getProject(t);
    if (null == l) return null;
    let e = k(l, n),
        i = null == e ? null : (0, v.i8)(e, l.application_id),
        a = null == e ? null : c.A.getGuild(e);
    return {
        project: l,
        guildId: e,
        appChannelId: i,
        ownerInstallMissing:
            "user" === l.install_scope &&
            (0, A.PV)(l) &&
            A.Ay.getIntegrationStatus(t)?.owner_authorization_revoked === !0,
        input: {
            installScope: l.install_scope,
            status: C.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(t),
            canManageGuild:
                null == a
                    ? null
                    : !!f.A.can(D.xBc.MANAGE_GUILD, a) ||
                      (!!(0, A.PV)(l) &&
                          (0, b.Jr)(l).some((t) => {
                              let n = c.A.getGuild(t);
                              return null != n && f.A.can(D.xBc.MANAGE_GUILD, n);
                          })),
            canManageChannels: null == a ? null : f.A.can(D.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(l),
            botInGuild: (0, _.AS)(l, e),
            liveNameOutdated: R(l),
        },
    };
}
async function O(t, n) {
    let l = A.Ay.getProject(t),
        e = l?.preview_application_id;
    if (null == l || null == e) return;
    let i = (function (t, n, l) {
        if (t?.guild_id == null) return l;
        let e = l !== t.guild_id && (0, b.Jr)(t).includes(l);
        return n?.integration_installed === !0 || e ? t.guild_id : l;
    })(l, A.Ay.getIntegrationStatus(t), n);
    (await (0, r.TA)(e).catch(() => {}),
        await new Promise((t) => {
            w.A.openConjureAppInstallModal({
                applicationId: e,
                application: s.A.getApplication(e) ?? null,
                guildId: i,
                onClose: t,
            });
        }),
        await (async function (t, n) {
            (t.guild_id !== n || t.preview_guild_id !== n) &&
                (await (0, h.M7)(t.id, { guild_id: n, preview_guild_id: n }));
        })(l, i).catch(() => {}),
        await (0, h.U1)(t).catch(() => {}));
}
async function F(t, n, l, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = l,
        o = u.id;
    Z.add(o);
    try {
        let t = await (0, G.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : y.intl.string(I.default.gMWZeG));
        return;
    } finally {
        Z.delete(o);
    }
    if (null == i) return;
    if (C.A.isProjectPublishing(o) || C.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(y.intl.string(I.default["TD/ze/"]));
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !n.isUpdate;
    (d && L(o, !0),
        (0, G.TV)(o, i, e)
            .then((t) => {
                let n;
                if (!0 === t.ok) return t;
                throw (
                    20088 === t.code && (0, h.U1)(o).catch(() => {}),
                    Error(
                        null != (n = t.detail?.trim()) && "" !== n
                            ? n
                            : 20088 === t.code
                              ? y.intl.string(I.default.UXEDPw)
                              : y.intl.string(I.default.gMWZeG),
                    )
                );
            })
            .then(
                (n) => {
                    (r.showConfirmation(y.intl.string(I.default.S6Px3n)),
                        (0, P.$w)(o),
                        null != t.guildId && B(u),
                        (0, S.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() =>
                                d && !0 !== n.channel_skipped
                                    ? (async function (t, n) {
                                          let l = Date.now() + 5e3;
                                          for (; H(t, n)?.appChannelId == null && Date.now() < l;)
                                              await new Promise((t) => setTimeout(t, 250));
                                      })(o, s)
                                    : void 0,
                            )
                            .finally(() => L(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    L(o, !1);
                    let n = t instanceof Error ? t.message : y.intl.string(I.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: n }),
                        r.showError(n));
                },
            ));
}
function L(t, n) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: n });
}
function B(t) {
    (0, u.eO)((0, _.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let Z = new Set();
async function q(t, n, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || Z.has(t)) return;
    let r = H(t, a),
        s = r?.input.status?.publishState;
    if (r?.ownerInstallMissing === !0) {
        Z.add(t);
        try {
            await (0, h.lZ)(t);
        } catch {
            u.showError(y.intl.string(I.default.gMWZeG));
            return;
        } finally {
            Z.delete(t);
        }
        if ("live_current" === s || "live_auto_synced" === s)
            return void u.showConfirmation(y.intl.string(I.default.S6Px3n));
    }
    if (null == r || null == s || !(0, M.Uh)(s)) return;
    if (r.input.status?.safetyHold === !0) return void u.showSafetyHold(t);
    let o = x(t) ? C.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([l.e(241989), l.e(574246)]).then(l.bind(l, 200389));
        t(o);
        return;
    }
    if (C.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = N(r.input);
    ((0, m.yJ)(t, {
        entryPoint: n,
        publishState: s,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: d.action,
    }),
    null != d.disabledReason)
        ? u.showPublishBlocked(E.k.MISSING_MANAGE_SERVER, d.disabledReason)
        : ((0, G.dx)(t), null != d.confirmReason)
          ? u.showPublishBlocked(E.k.MISSING_MANAGE_CHANNELS, d.confirmReason, () => {
                J(t, d, e, i).catch(() => {});
            })
          : await J(t, d, e, i);
}
async function J(t, n, l, e) {
    let { guildId: i, platform: a } = l,
        u = H(t, i);
    if (!(null == u || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === n.intent) {
            Z.add(t);
            try {
                await (a.requestConsent ?? ((t) => O(t, i)))(t);
            } finally {
                Z.delete(t);
            }
            if (C.A.isProjectPublishing(t)) return;
            let u = H(t, i),
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
            await F(u, n, l, e);
            return;
        }
        await F(u, n, l, e);
    }
}
function Q(t, n) {
    let l = e.useContext(j),
        a = n ?? l,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: g,
            publishOffered: h,
            ownerInstallMissing: b,
            publishing: _,
            failure: P,
            approvalUrl: m,
            project: w,
            guildId: v,
            appChannelId: S,
            installScope: E,
            status: G,
            integrationStatus: D,
            guildName: k,
            appChannelName: R,
            appChannelPending: O,
            canManageGuild: F,
            canManageChannels: L,
            usesAppChannels: Z,
            botInGuild: J,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [A.Ay, C.A, c.A, p.A, d.A, f.A, o.A, s.A],
            () => {
                let n = null == t || null == u ? null : H(t, u);
                return {
                    viewerCanPublish: null != n && (0, A.jf)(n.project),
                    publishOffered:
                        (n?.input.status != null && (0, M.Uh)(n.input.status.publishState)) ||
                        n?.ownerInstallMissing === !0,
                    ownerInstallMissing: n?.ownerInstallMissing === !0,
                    project: n?.project ?? null,
                    guildId: n?.guildId ?? null,
                    appChannelId: n?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === x(t) &&
                        (C.A.isProjectPublishing(t) || C.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : C.A.getPublishFailure(t),
                    approvalUrl: null != t && x(t) ? C.A.getPublishApprovalUrl(t) : null,
                    installScope: n?.input.installScope ?? null,
                    status: n?.input.status ?? null,
                    integrationStatus: n?.input.integrationStatus ?? null,
                    guildName: n?.input.guildName ?? null,
                    appChannelName: n?.input.appChannelName ?? null,
                    appChannelPending: n?.input.appChannelPending ?? !1,
                    canManageGuild: n?.input.canManageGuild ?? null,
                    canManageChannels: n?.input.canManageChannels ?? null,
                    usesAppChannels: n?.input.usesAppChannels ?? !1,
                    botInGuild: n?.input.botInGuild ?? null,
                    liveNameOutdated: n?.input.liveNameOutdated ?? !1,
                };
            },
            [t, u],
        ),
        V = e.useMemo(
            () =>
                null == w
                    ? null
                    : {
                          installScope: E,
                          status: G,
                          integrationStatus: D,
                          guildName: k,
                          appChannelName: R,
                          appChannelPending: O,
                          canManageGuild: F,
                          canManageChannels: L,
                          usesAppChannels: Z,
                          botInGuild: J,
                          liveNameOutdated: Q,
                      },
            [w, E, G, D, k, R, O, F, L, Z, J, Q],
        ),
        W = V?.status?.publishState ?? null,
        X = V?.installScope === "guild" && V.status?.surface === "bot";
    e.useEffect(() => {
        null != w && null != v && X && null != W && (0, M.lE)(W) && B(w);
    }, [w?.id, v, X, W]);
    let Y = w?.application_id ?? null,
        z = null != W && (0, M.lE)(W);
    e.useEffect(() => {
        null != Y &&
            z &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, z]);
    let K = e.useMemo(() => (null == V ? null : N(V)), [V]),
        $ = (function (t) {
            let n = (0, i.bG)([C.A], () => (null == t ? null : C.A.getPublishProgress(t))),
                [l, a] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == n) return;
                a(Date.now());
                let t = setInterval(() => a(Date.now()), 1e3);
                return () => clearInterval(t);
            }, [n]),
            null == n)
                ? null
                : y.intl.formatToPlainString(I.default["ndkR+x"], {
                      action: y.intl.string(U[n.stage]),
                      detail: (0, T.C7)(l - n.stageStartedAt),
                  });
        })(_ ? t : null),
        tt = e.useCallback(
            (n, l) => {
                null != t &&
                    null != a &&
                    q(t, n, a, l).catch((n) => {
                        console.error("[conjure] publish action failed", t, n);
                    });
            },
            [t, a],
        );
    if (null == a || !g || null == K || null == E || (!h && !_)) return null;
    let tn = null == m ? K.label : y.intl.string(I.default.qru9M5);
    return {
        ...K,
        upToDate: K.upToDate && !b,
        status: V?.status ?? null,
        guildId: v,
        appChannelId: S,
        publishing: _,
        failure: _ ? null : P,
        showsProgress: null != $,
        awaitingApproval: null != m,
        label: _ ? ($ ?? y.intl.string(I.default.Rhx0rn)) : tn,
        disabled: _ || !0 === a.busy,
        run: tt,
    };
}
