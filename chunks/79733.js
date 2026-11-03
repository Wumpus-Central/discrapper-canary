n.d(l, { bI: () => R, Ay: () => W, vL: () => H, KL: () => k, qF: () => D, FZ: () => J });
var e = n(582128),
    i = n(17928),
    a = n(73153),
    u = n(803306),
    r = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    p = n(808728),
    c = n(71393),
    f = n(576705),
    g = n(238490),
    h = n(371169),
    A = n(260498),
    b = n(951178),
    P = n(426035),
    _ = n(385081),
    m = n(545503),
    v = n(246338);
async function S(t, l) {
    (t.guild_id !== l || t.preview_guild_id !== l) && (await (0, h.M7)(t.id, { guild_id: l, preview_guild_id: l }));
}
var w = n(664619),
    C = n(722701),
    y = n(811587),
    M = n(809526),
    I = n(105292);
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
                ("activity" === n.surface ? a && null == e && !0 !== i : "bot" === n.surface && !1 === u)
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
            missingSurface: a ? ("activity" === i.surface ? "channel" : "bot") : null,
        };
    return r && n?.bot_permissions_changed === !0
        ? { ...s, label: I.intl.string(M.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: I.intl.string(M.default["120EFN"]), action: "publish" };
}
var E = n(516288),
    G = n(962998),
    T = n(615839);
let U = {
    preparing: M.default.GQeas1,
    approval: M.default["TkHHD+"],
    approved_by_grant: M.default["9+kNt8"],
    setup: M.default["F+AxgM"],
    build: M.default.oQeMIy,
    deploy: M.default.LqZvZ2,
    discord: M.default.LFcGAT,
    activating: M.default.ff1Fq1,
};
var j = n(652215);
let R = 221552 == n.j ? e.createContext(null) : null;
function k(t, l) {
    return "guild" === t.install_scope ? (t.guild_id ?? l) : null;
}
function D(t) {
    if ((0, b.Fl)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function x(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let l = C.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function F(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = k(n, l),
        i = null == e ? null : (0, v.i8)(e, n.application_id),
        a = null == e ? null : c.A.getGuild(e);
    return {
        project: n,
        guildId: e,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: C.A.getPublishStatus(t),
            integrationStatus: A.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(t),
            canManageGuild: null == a ? null : f.A.can(j.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : f.A.can(j.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, P.AS)(n, e),
            liveNameOutdated: D(n),
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
        await S(e, a).catch(() => {}),
        await (0, h.U1)(t).catch(() => {}));
}
async function O(t, l, n, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = n,
        o = u.id;
    Z.add(o);
    try {
        let t = await (0, G.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : I.intl.string(M.default.gMWZeG));
        return;
    } finally {
        Z.delete(o);
    }
    if (null == i) return;
    if (C.A.isProjectPublishing(o) || C.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(I.intl.string(M.default["TD/ze/"]));
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
                              ? I.intl.string(M.default.UXEDPw)
                              : I.intl.string(M.default.gMWZeG),
                    )
                );
            })
            .then(
                (l) => {
                    (r.showConfirmation(I.intl.string(M.default.S6Px3n)),
                        null != t.guildId && B(u),
                        (0, w.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() => (d && !0 !== l.channel_skipped ? q(o, s) : void 0))
                            .finally(() => L(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    L(o, !1);
                    let l = t instanceof Error ? t.message : I.intl.string(M.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: l }),
                        r.showError(l));
                },
            ));
}
function L(t, l) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: l });
}
async function q(t, l) {
    let n = Date.now() + 5e3;
    for (; F(t, l)?.appChannelId == null && Date.now() < n;) await new Promise((t) => setTimeout(t, 250));
}
function B(t) {
    (0, u.eO)((0, P.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let Z = new Set();
async function J(t, l, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || Z.has(t)) return;
    let r = F(t, a),
        s = r?.input.status?.publishState;
    if (null == r || null == s || !(0, y.Uh)(s)) return;
    if (r.input.status?.safetyHold === !0) return void u.showSafetyHold(t);
    let o = x(t) ? C.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (C.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = N(r.input);
    ((0, _.yJ)(t, {
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
                Q(t, d, e, i).catch(() => {});
            })
          : await Q(t, d, e, i);
}
async function Q(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = F(t, i);
    if (!(null == u || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            Z.add(t);
            try {
                await (a.requestConsent ?? ((t) => H(t, i)))(t);
            } finally {
                Z.delete(t);
            }
            if (C.A.isProjectPublishing(t)) return;
            let u = F(t, i),
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
function W(t, l) {
    let n = e.useContext(R),
        a = l ?? n,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: g,
            publishOffered: h,
            publishing: b,
            failure: P,
            approvalUrl: _,
            project: m,
            guildId: v,
            appChannelId: S,
            installScope: w,
            status: E,
            integrationStatus: G,
            guildName: j,
            appChannelName: k,
            appChannelPending: D,
            canManageGuild: H,
            canManageChannels: O,
            usesAppChannels: L,
            botInGuild: q,
            liveNameOutdated: Z,
        } = (0, i.cf)(
            [A.Ay, C.A, c.A, p.Ay, d.A, f.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : F(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered: l?.input.status != null && (0, y.Uh)(l.input.status.publishState),
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
                null == m
                    ? null
                    : {
                          installScope: w,
                          status: E,
                          integrationStatus: G,
                          guildName: j,
                          appChannelName: k,
                          appChannelPending: D,
                          canManageGuild: H,
                          canManageChannels: O,
                          usesAppChannels: L,
                          botInGuild: q,
                          liveNameOutdated: Z,
                      },
            [m, w, E, G, j, k, D, H, O, L, q, Z],
        ),
        W = Q?.status?.publishState ?? null,
        X = Q?.installScope === "guild" && Q.status?.surface === "bot";
    e.useEffect(() => {
        null != m && null != v && X && null != W && (0, y.lE)(W) && B(m);
    }, [m?.id, v, X, W]);
    let Y = m?.application_id ?? null,
        V = null != W && (0, y.lE)(W);
    e.useEffect(() => {
        null != Y &&
            V &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, V]);
    let K = e.useMemo(() => (null == Q ? null : N(Q)), [Q]),
        z = (function (t) {
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
                      action: I.intl.string(U[l.stage]),
                      detail: (0, T.C7)(n - l.stageStartedAt),
                  });
        })(b ? t : null),
        $ = e.useCallback(
            (l, n) => {
                null != t &&
                    null != a &&
                    J(t, l, a, n).catch((l) => {
                        console.error("[conjure] publish action failed", t, l);
                    });
            },
            [t, a],
        );
    if (null == a || !g || null == K || null == w || (!h && !b)) return null;
    let tt = null == _ ? K.label : I.intl.string(M.default.qru9M5);
    return {
        ...K,
        status: Q?.status ?? null,
        guildId: v,
        appChannelId: S,
        publishing: b,
        failure: b ? null : P,
        showsProgress: null != z,
        awaitingApproval: null != _,
        label: b ? (z ?? I.intl.string(M.default.Rhx0rn)) : tt,
        disabled: b || !0 === a.busy,
        run: $,
    };
}
