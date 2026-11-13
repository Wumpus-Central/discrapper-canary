n.d(l, { bI: () => k, Ay: () => Q, qF: () => U, KL: () => D, vL: () => O, FZ: () => J });
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
    m = n(901341),
    P = n(385081),
    v = n(519325),
    w = n(246338),
    S = n(664619),
    C = n(722701),
    y = n(811587),
    M = n(191850),
    I = n(792996);
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
                !!(0, y.lE)(n.publishState) &&
                (!1 === u || ("activity" === n.surface && a && null == e && !0 !== i))
            );
        })({ ...t, status: i }),
        u = (function (t) {
            let { installScope: l, guildName: n, canManageGuild: e } = t;
            return "guild" !== l || !1 !== e ? null : I.intl.format(M.default.N4NkyR, { server: n ?? "" });
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
                              ? I.intl.format(M.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(t)
                    : null,
            missingSurface: a ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
        };
    return r && n?.bot_permissions_changed === !0
        ? { ...s, label: I.intl.string(M.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: I.intl.string(M.default["120EFN"]), action: "publish" };
}
var E = n(516288),
    G = n(962998),
    T = n(615839);
let j = {
    preparing: M.default.GQeas1,
    approval: M.default["TkHHD+"],
    approved_by_grant: M.default["9+kNt8"],
    setup: M.default["F+AxgM"],
    build: M.default.oQeMIy,
    deploy: M.default.LqZvZ2,
    discord: M.default.LFcGAT,
    activating: M.default.ff1Fq1,
};
var x = n(652215);
let k = 221552 == n.j ? e.createContext(null) : null;
function D(t, l) {
    return "guild" === t.install_scope ? (t.guild_id ?? l) : null;
}
function U(t) {
    if (!(0, b._7)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function R(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let l = C.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function H(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = D(n, l),
        i = null == e ? null : (0, w.i8)(e, n.application_id),
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
            status: C.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(t),
            canManageGuild:
                null == a
                    ? null
                    : !!f.A.can(x.xBc.MANAGE_GUILD, a) ||
                      (!!(0, A.PV)(n) &&
                          (0, b.Jr)(n).some((t) => {
                              let l = p.A.getGuild(t);
                              return null != l && f.A.can(x.xBc.MANAGE_GUILD, l);
                          })),
            canManageChannels: null == a ? null : f.A.can(x.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, _.AS)(n, e),
            liveNameOutdated: U(n),
        },
    };
}
async function O(t, l) {
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
            v.A.openConjureAppInstallModal({
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
async function B(t, l, n, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = n,
        o = u.id;
    q.add(o);
    try {
        let t = await (0, G.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : I.intl.string(M.default.gMWZeG));
        return;
    } finally {
        q.delete(o);
    }
    if (null == i) return;
    if (C.A.isProjectPublishing(o) || C.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(I.intl.string(M.default["TD/ze/"]));
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !l.isUpdate;
    (d && F(o, !0),
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
                              ? I.intl.string(M.default.UXEDPw)
                              : I.intl.string(M.default.gMWZeG),
                    )
                );
            })
            .then(
                (l) => {
                    (r.showConfirmation(I.intl.string(M.default.S6Px3n)),
                        (0, m.$w)(o),
                        null != t.guildId && L(u),
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
                            .finally(() => F(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    F(o, !1);
                    let l = t instanceof Error ? t.message : I.intl.string(M.default.gMWZeG);
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
async function J(t, l, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || q.has(t)) return;
    let r = H(t, a),
        s = r?.input.status?.publishState;
    if (r?.ownerInstallMissing === !0) {
        q.add(t);
        try {
            await (0, h.lZ)(t);
        } catch {
            u.showError(I.intl.string(M.default.gMWZeG));
            return;
        } finally {
            q.delete(t);
        }
        if ("live_current" === s || "live_auto_synced" === s)
            return void u.showConfirmation(I.intl.string(M.default.S6Px3n));
    }
    if (null == r || null == s || !(0, y.Uh)(s)) return;
    if (r.input.status?.safetyHold === !0) return void u.showSafetyHold(t);
    let o = R(t) ? C.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e(241989), n.e(574246)]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (C.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = N(r.input);
    ((0, P.yJ)(t, {
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
                Z(t, d, e, i).catch(() => {});
            })
          : await Z(t, d, e, i);
}
async function Z(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = H(t, i);
    if (!(null == u || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            q.add(t);
            try {
                await (a.requestConsent ?? ((t) => O(t, i)))(t);
            } finally {
                q.delete(t);
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
            await B(u, l, n, e);
            return;
        }
        await B(u, l, n, e);
    }
}
function Q(t, l) {
    let n = e.useContext(k),
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
            guildId: w,
            appChannelId: S,
            installScope: E,
            status: G,
            integrationStatus: x,
            guildName: D,
            appChannelName: U,
            appChannelPending: O,
            canManageGuild: B,
            canManageChannels: F,
            usesAppChannels: q,
            botInGuild: Z,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [A.Ay, C.A, p.A, c.A, d.A, f.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : H(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered:
                        (l?.input.status != null && (0, y.Uh)(l.input.status.publishState)) ||
                        l?.ownerInstallMissing === !0,
                    ownerInstallMissing: l?.ownerInstallMissing === !0,
                    project: l?.project ?? null,
                    guildId: l?.guildId ?? null,
                    appChannelId: l?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === R(t) &&
                        (C.A.isProjectPublishing(t) || C.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : C.A.getPublishFailure(t),
                    approvalUrl: null != t && R(t) ? C.A.getPublishApprovalUrl(t) : null,
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
                          status: G,
                          integrationStatus: x,
                          guildName: D,
                          appChannelName: U,
                          appChannelPending: O,
                          canManageGuild: B,
                          canManageChannels: F,
                          usesAppChannels: q,
                          botInGuild: Z,
                          liveNameOutdated: Q,
                      },
            [v, E, G, x, D, U, O, B, F, q, Z, Q],
        ),
        W = V?.status?.publishState ?? null,
        X = V?.installScope === "guild" && V.status?.surface === "bot";
    e.useEffect(() => {
        null != v && null != w && X && null != W && (0, y.lE)(W) && L(v);
    }, [v?.id, w, X, W]);
    let Y = v?.application_id ?? null,
        z = null != W && (0, y.lE)(W);
    e.useEffect(() => {
        null != Y &&
            z &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, z]);
    let K = e.useMemo(() => (null == V ? null : N(V)), [V]),
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
                : I.intl.formatToPlainString(M.default["ndkR+x"], {
                      action: I.intl.string(j[l.stage]),
                      detail: (0, T.C7)(n - l.stageStartedAt),
                  });
        })(_ ? t : null),
        tt = e.useCallback(
            (l, n) => {
                null != t &&
                    null != a &&
                    J(t, l, a, n).catch((l) => {
                        console.error("[conjure] publish action failed", t, l);
                    });
            },
            [t, a],
        );
    if (null == a || !g || null == K || null == E || (!h && !_)) return null;
    let tl = null == P ? K.label : I.intl.string(M.default.qru9M5);
    return {
        ...K,
        upToDate: K.upToDate && !b,
        status: V?.status ?? null,
        guildId: w,
        appChannelId: S,
        publishing: _,
        failure: _ ? null : m,
        showsProgress: null != $,
        awaitingApproval: null != P,
        label: _ ? ($ ?? I.intl.string(M.default.Rhx0rn)) : tl,
        disabled: _ || !0 === a.busy,
        run: tt,
    };
}
