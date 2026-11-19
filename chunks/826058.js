n.d(l, { bI: () => j, Ay: () => W, qF: () => R, KL: () => k, vL: () => O, FZ: () => q });
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
    P = n(890698),
    m = n(385081),
    w = n(519325),
    v = n(246338),
    S = n(664619),
    C = n(722701),
    M = n(811587),
    I = n(191850),
    y = n(792996);
function N(t) {
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
                !!(0, M.lE)(n.publishState) &&
                (!1 === u || ("activity" === n.surface && a && null == e && !0 !== i))
            );
        })({ ...t, status: i }),
        u = (function (t) {
            let { installScope: l, guildName: n, canManageGuild: e } = t;
            return "guild" !== l || !1 !== e ? null : y.intl.format(I.default.N4NkyR, { server: n ?? "" });
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
                              ? y.intl.format(I.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(t)
                    : null,
            missingSurface: a ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
        };
    return r && n?.bot_permissions_changed === !0
        ? { ...s, label: y.intl.string(I.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: y.intl.string(I.default["120EFN"]), action: "publish" };
}
var E = n(516288),
    G = n(962998),
    T = n(615839);
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
var D = n(652215);
let j = 221552 == n.j ? e.createContext(null) : null;
function k(t, l) {
    return "guild" === t.install_scope ? (t.guild_id ?? l) : null;
}
function R(t) {
    if (!(0, b._7)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function x(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let l = C.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function H(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = k(n, l),
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
            status: C.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(t),
            canManageGuild:
                null == a
                    ? null
                    : !!f.A.can(D.xBc.MANAGE_GUILD, a) ||
                      (!!(0, A.PV)(n) &&
                          (0, b.Jr)(n).some((t) => {
                              let l = c.A.getGuild(t);
                              return null != l && f.A.can(D.xBc.MANAGE_GUILD, l);
                          })),
            canManageChannels: null == a ? null : f.A.can(D.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, _.AS)(n, e),
            liveNameOutdated: R(n),
        },
    };
}
async function O(t, l) {
    let n = A.Ay.getProject(t),
        e = n?.preview_application_id;
    if (null == n || null == e) return;
    let i = n?.install_scope === "guild" && null != n.guild_id ? n.guild_id : l;
    (await (0, r.TA)(e).catch(() => {}),
        await new Promise((t) => {
            w.A.openConjureAppInstallModal({
                applicationId: e,
                application: s.A.getApplication(e) ?? null,
                guildId: i,
                onClose: t,
            });
        }),
        await (async function (t, l) {
            "guild" === t.install_scope &&
                (null == t.guild_id
                    ? await (0, h.xo)(t.id, l)
                    : t.preview_guild_id !== l && (await (0, h.CW)(t.id, { preview_guild_id: l })));
        })(n, i).catch(() => {}),
        await (0, h.U1)(t).catch(() => {}));
}
async function F(t, l, n, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = n,
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
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !l.isUpdate;
    (d && L(o, !0),
        (0, G.TV)(o, i, e)
            .then((t) => {
                let l;
                if (!0 === t.ok) return t;
                throw (
                    20088 === t.code && (0, h.U1)(o).catch(() => {}),
                    Error(
                        null != (l = t.detail?.trim()) && "" !== l
                            ? l
                            : 20088 === t.code
                              ? y.intl.string(I.default.UXEDPw)
                              : y.intl.string(I.default.gMWZeG),
                    )
                );
            })
            .then(
                (l) => {
                    (r.showConfirmation(y.intl.string(I.default.S6Px3n)),
                        (0, P.$w)(o),
                        null != t.guildId && B(u),
                        (0, S.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() =>
                                d && !0 !== l.channel_skipped
                                    ? (async function (t, l) {
                                          let n = Date.now() + 5e3;
                                          for (; H(t, l)?.appChannelId == null && Date.now() < n;)
                                              await new Promise((t) => setTimeout(t, 250));
                                      })(o, s)
                                    : void 0,
                            )
                            .finally(() => L(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    L(o, !1);
                    let l = t instanceof Error ? t.message : y.intl.string(I.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: l }),
                        r.showError(l));
                },
            ));
}
function L(t, l) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: l });
}
function B(t) {
    (0, u.eO)((0, _.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let Z = new Set();
async function q(t, l, e) {
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
        let { promptPublishApproval: t } = await Promise.all([n.e(241989), n.e(574246)]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (C.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = N(r.input);
    ((0, m.yJ)(t, {
        entryPoint: l,
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
async function J(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = H(t, i);
    if (!(null == u || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
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
            await F(u, l, n, e);
            return;
        }
        await F(u, l, n, e);
    }
}
function W(t, l) {
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
            liveNameOutdated: W,
        } = (0, i.cf)(
            [A.Ay, C.A, c.A, p.A, d.A, f.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : H(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered:
                        (l?.input.status != null && (0, M.Uh)(l.input.status.publishState)) ||
                        l?.ownerInstallMissing === !0,
                    ownerInstallMissing: l?.ownerInstallMissing === !0,
                    project: l?.project ?? null,
                    guildId: l?.guildId ?? null,
                    appChannelId: l?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === x(t) &&
                        (C.A.isProjectPublishing(t) || C.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : C.A.getPublishFailure(t),
                    approvalUrl: null != t && x(t) ? C.A.getPublishApprovalUrl(t) : null,
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
                          liveNameOutdated: W,
                      },
            [w, E, G, D, k, R, O, F, L, Z, J, W],
        ),
        V = Q?.status?.publishState ?? null,
        X = Q?.installScope === "guild" && Q.status?.surface === "bot";
    e.useEffect(() => {
        null != w && null != v && X && null != V && (0, M.lE)(V) && B(w);
    }, [w?.id, v, X, V]);
    let Y = w?.application_id ?? null,
        z = null != V && (0, M.lE)(V);
    e.useEffect(() => {
        null != Y &&
            z &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, z]);
    let K = e.useMemo(() => (null == Q ? null : N(Q)), [Q]),
        $ = (function (t) {
            let l = (0, i.bG)([C.A], () => (null == t ? null : C.A.getPublishProgress(t))),
                [n, a] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == l) return;
                a(Date.now());
                let t = setInterval(() => a(Date.now()), 1e3);
                return () => clearInterval(t);
            }, [l]),
            null == l)
                ? null
                : y.intl.formatToPlainString(I.default["ndkR+x"], {
                      action: y.intl.string(U[l.stage]),
                      detail: (0, T.C7)(n - l.stageStartedAt),
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
    let tl = null == m ? K.label : y.intl.string(I.default.qru9M5);
    return {
        ...K,
        upToDate: K.upToDate && !b,
        status: Q?.status ?? null,
        guildId: v,
        appChannelId: S,
        publishing: _,
        failure: _ ? null : P,
        showsProgress: null != $,
        awaitingApproval: null != m,
        label: _ ? ($ ?? y.intl.string(I.default.Rhx0rn)) : tl,
        disabled: _ || !0 === a.busy,
        run: tt,
    };
}
