n.d(l, { bI: () => j, Ay: () => Y, vL: () => F, KL: () => R, qF: () => D, FZ: () => Q });
var e = n(582128),
    i = n(17928),
    a = n(73153),
    u = n(803306),
    r = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    p = n(71393),
    h = n(576705),
    f = n(238490),
    g = n(371169),
    A = n(260498),
    b = n(951178),
    m = n(426035),
    _ = n(385081),
    P = n(1371),
    v = n(246338),
    w = n(803101),
    S = n(664619),
    C = n(722701),
    N = n(811587),
    y = n(248675),
    M = n(105292);
function I(t) {
    let { installScope: l, integrationStatus: n } = t,
        e = t.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === e.publishState && t.liveNameOutdated ? { ...e, publishState: "live_outdated" } : e,
        a = (function (t) {
            let { installScope: l, status: n, appChannelName: e, appChannelPending: i, botInGuild: a } = t;
            return (
                "guild" === l &&
                null != n &&
                !!(0, N.lE)(n.publishState) &&
                ("activity" === n.surface ? null == e && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })({ ...t, status: i }),
        u = (function (t) {
            let { installScope: l, guildName: n, canManageGuild: e } = t;
            return "guild" !== l || !1 !== e ? null : M.intl.format(y.default.N4NkyR, { server: n ?? "" });
        })(t),
        r = (0, f.Qg)({
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
var E = n(516288),
    x = n(962998),
    G = n(615839);
let T = {
    preparing: y.default.GQeas1,
    approval: y.default["TkHHD+"],
    setup: y.default["F+AxgM"],
    build: y.default.oQeMIy,
    deploy: y.default.LqZvZ2,
    discord: y.default.LFcGAT,
    activating: y.default.ff1Fq1,
};
var U = n(652215);
let j = 221552 == n.j ? e.createContext(null) : null;
function R(t, l) {
    return "user" === t.install_scope ? null : (t.guild_id ?? l);
}
function D(t) {
    if ((0, b.Fl)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function k(t, l) {
    let n = A.Ay.getProject(t);
    if (null == n) return null;
    let e = R(n, l),
        i = null == e ? null : (0, v.i8)(e, n.application_id),
        a = null == e ? null : p.A.getGuild(e);
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
            canManageGuild: null == a ? null : h.A.can(U.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : h.A.can(U.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, m.AS)(n, e),
            liveNameOutdated: D(n),
        },
    };
}
async function F(t, l) {
    let n = A.Ay.getProject(t),
        e = n?.preview_application_id;
    if (null == n || null == e) return;
    let i = (0, w.a)(n, A.Ay.getIntegrationStatus(t), l);
    (await (0, r.TA)(e).catch(() => {}),
        await new Promise((t) => {
            P.A.openConjureAppInstallModal({
                applicationId: e,
                application: s.A.getApplication(e) ?? null,
                guildId: i,
                onClose: t,
            });
        }),
        await (0, w.$)(n, i).catch(() => {}),
        await (0, g.U1)(t).catch(() => {}));
}
async function O(t, l, n) {
    let e,
        { project: i } = t,
        { platform: u, guildId: r } = n,
        s = i.id;
    B.add(s);
    try {
        let t = await (0, x.xQ)(s);
        e = 1 === t.destinations.length ? t.selected_destination_id : await u.promptPublishDestination(t);
    } catch (t) {
        u.showError(t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG));
        return;
    } finally {
        B.delete(s);
    }
    if (null == e) return;
    if (C.A.isProjectPublishing(s) || C.A.getPublishStatus(s)?.publishing === !0)
        return void u.showError(M.intl.string(y.default["TD/ze/"]));
    let o = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !l.isUpdate;
    (o && L(s, !0),
        (0, x.TV)(s, e)
            .then((t) => {
                let l;
                if (!0 === t.ok) return t;
                throw (
                    20088 === t.code && (0, g.U1)(s).catch(() => {}),
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
                    (u.showConfirmation(M.intl.string(y.default.S6Px3n)),
                        null != t.guildId && q(i),
                        (0, S.tZ)(s, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", s, t);
                            })
                            .then(() => (o && !0 !== l.channel_skipped ? H(s, r) : void 0))
                            .finally(() => L(s, !1))
                            .catch(() => {}));
                },
                (t) => {
                    L(s, !1);
                    let l = t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: s, message: l }),
                        u.showError(l));
                },
            ));
}
function L(t, l) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: l });
}
async function H(t, l) {
    let n = Date.now() + 5e3;
    for (; k(t, l)?.appChannelId == null && Date.now() < n;) await new Promise((t) => setTimeout(t, 250));
}
function q(t) {
    (0, u.eO)((0, m.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let B = new Set();
async function Q(t, l, e) {
    let { guildId: i, platform: a } = e;
    if (!0 === e.busy || B.has(t)) return;
    let u = k(t, i),
        r = u?.input.status?.publishState;
    if (null == u || null == r || !(0, N.Uh)(r)) return;
    let s = C.A.getPublishApprovalUrl(t);
    if (null != s && (0, A.PV)(u.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        t(s);
        return;
    }
    if (C.A.isProjectPublishing(t) || u.input.status?.publishing === !0) return;
    let o = I(u.input);
    ((0, _.yJ)(t, {
        entryPoint: l,
        publishState: r,
        surface: u.input.status?.surface ?? null,
        installScope: u.project.install_scope,
        action: o.action,
    }),
    null != o.disabledReason)
        ? a.showPublishBlocked(E.k.MISSING_MANAGE_SERVER, o.disabledReason)
        : ((0, x.dx)(t), null != o.confirmReason)
          ? a.showPublishBlocked(E.k.MISSING_MANAGE_CHANNELS, o.confirmReason, () => {
                Z(t, o, e).catch(() => {});
            })
          : await Z(t, o, e);
}
async function Z(t, l, n) {
    let { guildId: e, platform: i } = n,
        a = k(t, e);
    if (!(null == a || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            B.add(t);
            try {
                await (i.requestConsent ?? ((t) => F(t, e)))(t);
            } finally {
                B.delete(t);
            }
            if (C.A.isProjectPublishing(t)) return;
            let a = k(t, e),
                u = a?.input.integrationStatus ?? null;
            if (
                null == a ||
                (0, f.Qg)({
                    installScope: a.project.install_scope,
                    previewReady: u?.preview_ready === !0,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                })
            )
                return;
            await O(a, l, n);
            return;
        }
        await O(a, l, n);
    }
}
function Y(t, l) {
    let n = e.useContext(j),
        a = l ?? n,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: f,
            publishOffered: g,
            publishing: b,
            failure: m,
            approvalUrl: _,
            project: P,
            guildId: v,
            appChannelId: w,
            installScope: S,
            status: E,
            integrationStatus: x,
            guildName: U,
            appChannelName: R,
            appChannelPending: D,
            canManageGuild: F,
            canManageChannels: O,
            usesAppChannels: L,
            botInGuild: H,
            liveNameOutdated: B,
        } = (0, i.cf)(
            [A.Ay, C.A, p.A, c.Ay, d.A, h.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : k(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered: l?.input.status != null && (0, N.Uh)(l.input.status.publishState),
                    project: l?.project ?? null,
                    guildId: l?.guildId ?? null,
                    appChannelId: l?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        null == C.A.getPublishApprovalUrl(t) &&
                        (C.A.isProjectPublishing(t) || C.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : C.A.getPublishFailure(t),
                    approvalUrl: null == t ? null : C.A.getPublishApprovalUrl(t),
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
        Z = e.useMemo(
            () =>
                null == P
                    ? null
                    : {
                          installScope: S,
                          status: E,
                          integrationStatus: x,
                          guildName: U,
                          appChannelName: R,
                          appChannelPending: D,
                          canManageGuild: F,
                          canManageChannels: O,
                          usesAppChannels: L,
                          botInGuild: H,
                          liveNameOutdated: B,
                      },
            [P, S, E, x, U, R, D, F, O, L, H, B],
        ),
        Y = Z?.status?.publishState ?? null,
        J = Z?.installScope === "guild" && Z.status?.surface === "bot";
    e.useEffect(() => {
        null != P && null != v && J && null != Y && (0, N.lE)(Y) && q(P);
    }, [P?.id, v, J, Y]);
    let W = P?.application_id ?? null,
        z = null != Y && (0, N.lE)(Y);
    e.useEffect(() => {
        null != W &&
            z &&
            null == s.A.getApplication(W) &&
            !s.A.isFetchingApplication(W) &&
            (0, r.TA)(W).catch(() => {});
    }, [W, z]);
    let V = e.useMemo(() => (null == Z ? null : I(Z)), [Z]),
        X = (function (t) {
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
                : M.intl.formatToPlainString(y.default["ndkR+x"], {
                      action: M.intl.string(T[l.stage]),
                      detail: (0, G.C7)(n - l.stageStartedAt),
                  });
        })(b ? t : null),
        K = e.useCallback(
            (l) => {
                null != t &&
                    null != a &&
                    Q(t, l, a).catch((l) => {
                        console.error("[conjure] publish action failed", t, l);
                    });
            },
            [t, a],
        );
    if (null == a || !f || null == V || (!g && !b)) return null;
    let $ = null == _ ? V.label : M.intl.string(y.default.qru9M5);
    return {
        ...V,
        status: Z?.status ?? null,
        guildId: v,
        appChannelId: w,
        publishing: b,
        failure: b ? null : m,
        showsProgress: null != X,
        awaitingApproval: null != _,
        label: b ? (X ?? M.intl.string(y.default.Rhx0rn)) : $,
        disabled: b || !0 === a.busy,
        run: K,
    };
}
