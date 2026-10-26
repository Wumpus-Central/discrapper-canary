n.d(t, { bI: () => L, Ay: () => V, vL: () => U, KL: () => R, qF: () => D, FZ: () => $ });
var l = n(582128),
    a = n(17928),
    i = n(73153),
    r = n(803306),
    u = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(238490),
    g = n(371169),
    m = n(260498),
    v = n(951178),
    b = n(426035),
    x = n(385081),
    y = n(1371),
    A = n(246338),
    j = n(803101),
    w = n(664619),
    k = n(722701),
    S = n(811587);
n(128761);
var C = n(248675),
    E = n(105292);
function P(e) {
    let { installScope: t, integrationStatus: n } = e,
        l = e.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        a = "live_current" === l.publishState && e.liveNameOutdated ? { ...l, publishState: "live_outdated" } : l,
        i = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: a, botInGuild: i } = e;
            return (
                "guild" === t &&
                null != n &&
                !!(0, S.lE)(n.publishState) &&
                ("activity" === n.surface ? null == l && !0 !== a : "bot" === n.surface && !1 === i)
            );
        })({ ...e, status: a }),
        r = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : E.intl.format(C.default.N4NkyR, { server: n ?? "" });
        })(e),
        u = (0, h.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        s = {
            intent: u ? "consent_then_publish" : "publish",
            isUpdate: "live_outdated" === a.publishState && !i,
            upToDate: "live_current" === a.publishState && !i,
            disabledReason: r,
            confirmReason:
                null == r
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: a } = e;
                          return "guild" === t && a && !1 === l
                              ? E.intl.format(C.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: i ? ("activity" === a.surface ? "channel" : "bot") : null,
        };
    return u && n?.bot_permissions_changed === !0
        ? { ...s, label: E.intl.string(C.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: E.intl.string(C.default["120EFN"]), action: "publish" };
}
var M = n(516288),
    _ = n(962998),
    N = n(615839);
let I = {
    preparing: C.default.GQeas1,
    approval: C.default["TkHHD+"],
    setup: C.default["F+AxgM"],
    build: C.default.oQeMIy,
    deploy: C.default.LqZvZ2,
    discord: C.default.LFcGAT,
    activating: C.default.ff1Fq1,
};
var T = n(652215);
let L = 221552 == n.j ? l.createContext(null) : null;
function R(e, t) {
    return "user" === e.install_scope ? null : (e.guild_id ?? t);
}
function D(e) {
    if ((0, v.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function G(e, t) {
    let n = m.Ay.getProject(e);
    if (null == n) return null;
    let l = R(n, t),
        a = null == l ? null : (0, A.i8)(l, n.application_id),
        i = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: k.A.getPublishStatus(e),
            integrationStatus: m.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (d.A.getChannel(a)?.name ?? null),
            appChannelPending: k.A.isAppChannelPending(e),
            canManageGuild: null == i ? null : p.A.can(T.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : p.A.can(T.xBc.MANAGE_CHANNELS, i),
            usesAppChannels: (0, v.Hv)(n),
            botInGuild: (0, b.AS)(n, l),
            liveNameOutdated: D(n),
        },
    };
}
async function U(e, t) {
    let n = m.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = (0, j.a)(n, m.Ay.getIntegrationStatus(e), t);
    (await (0, u.TA)(l).catch(() => {}),
        await new Promise((e) => {
            y.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await (0, j.$)(n, a).catch(() => {}),
        await (0, g.U1)(e).catch(() => {}));
}
async function F(e, t, n) {
    let l,
        { project: a } = e,
        { platform: r, guildId: u } = n,
        s = a.id;
    B.add(s);
    try {
        let e = await (0, _.xQ)(s);
        l = 1 === e.destinations.length ? e.selected_destination_id : await r.promptPublishDestination(e);
    } catch (e) {
        r.showError(e instanceof Error ? e.message : E.intl.string(C.default.gMWZeG));
        return;
    } finally {
        B.delete(s);
    }
    if (null == l) return;
    if (k.A.isProjectPublishing(s) || k.A.getPublishStatus(s)?.publishing === !0)
        return void r.showError(E.intl.string(C.default["TD/ze/"]));
    let o = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (o && O(s, !0),
        (0, _.TV)(s, l)
            .then((e) => {
                let t;
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, g.U1)(s).catch(() => {}),
                    Error(
                        null != (t = e.detail?.trim()) && "" !== t
                            ? t
                            : 20088 === e.code
                              ? E.intl.string(C.default.UXEDPw)
                              : E.intl.string(C.default.gMWZeG),
                    )
                );
            })
            .then(
                (t) => {
                    (r.showConfirmation(E.intl.string(C.default.S6Px3n)),
                        null != e.guildId && q(a),
                        (0, w.tZ)(s, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", s, e);
                            })
                            .then(() => (o && !0 !== t.channel_skipped ? W(s, u) : void 0))
                            .finally(() => O(s, !1))
                            .catch(() => {}));
                },
                (e) => {
                    O(s, !1);
                    let t = e instanceof Error ? e.message : E.intl.string(C.default.gMWZeG);
                    (i.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: s, message: t }),
                        r.showError(t));
                },
            ));
}
function O(e, t) {
    i.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function W(e, t) {
    let n = Date.now() + 5e3;
    for (; G(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function q(e) {
    (0, r.eO)((0, b.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let B = new Set();
async function $(e, t, l) {
    let { guildId: a, platform: i } = l;
    if (!0 === l.busy || B.has(e)) return;
    let r = G(e, a),
        u = r?.input.status?.publishState;
    if (null == r || null == u || !(0, S.Uh)(u)) return;
    let s = k.A.getPublishApprovalUrl(e);
    if (null != s && (0, m.PV)(r.project)) {
        let { promptPublishApproval: e } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        e(s);
        return;
    }
    if (k.A.isProjectPublishing(e) || r.input.status?.publishing === !0) return;
    let o = P(r.input);
    ((0, x.yJ)(e, {
        entryPoint: t,
        publishState: u,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: o.action,
    }),
    null != o.disabledReason)
        ? i.showPublishBlocked(M.k.MISSING_MANAGE_SERVER, o.disabledReason)
        : ((0, _.dx)(e), null != o.confirmReason)
          ? i.showPublishBlocked(M.k.MISSING_MANAGE_CHANNELS, o.confirmReason, () => {
                z(e, o, l).catch(() => {});
            })
          : await z(e, o, l);
}
async function z(e, t, n) {
    let { guildId: l, platform: a } = n,
        i = G(e, l);
    if (!(null == i || k.A.isProjectPublishing(e))) {
        if ("consent_then_publish" === t.intent) {
            B.add(e);
            try {
                await (a.requestConsent ?? ((e) => U(e, l)))(e);
            } finally {
                B.delete(e);
            }
            if (k.A.isProjectPublishing(e)) return;
            let i = G(e, l),
                r = i?.input.integrationStatus ?? null;
            if (
                null == i ||
                (0, h.Qg)({
                    installScope: i.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            await F(i, t, n);
            return;
        }
        await F(i, t, n);
    }
}
function V(e, t) {
    let n = l.useContext(L),
        i = t ?? n,
        r = i?.guildId ?? null,
        {
            viewerCanPublish: h,
            publishOffered: g,
            publishing: v,
            failure: b,
            approvalUrl: x,
            project: y,
            guildId: A,
            appChannelId: j,
            installScope: w,
            status: M,
            integrationStatus: _,
            guildName: T,
            appChannelName: R,
            appChannelPending: D,
            canManageGuild: U,
            canManageChannels: F,
            usesAppChannels: O,
            botInGuild: W,
            liveNameOutdated: B,
        } = (0, a.cf)(
            [m.Ay, k.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : G(e, r);
                return {
                    viewerCanPublish: null != t && (0, m.jf)(t.project),
                    publishOffered: t?.input.status != null && (0, S.Uh)(t.input.status.publishState),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing:
                        null != e &&
                        null == k.A.getPublishApprovalUrl(e) &&
                        (k.A.isProjectPublishing(e) || k.A.getPublishStatus(e)?.publishing === !0),
                    failure: null == e ? null : k.A.getPublishFailure(e),
                    approvalUrl: null == e ? null : k.A.getPublishApprovalUrl(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesAppChannels: t?.input.usesAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                    liveNameOutdated: t?.input.liveNameOutdated ?? !1,
                };
            },
            [e, r],
        ),
        z = l.useMemo(
            () =>
                null == y
                    ? null
                    : {
                          installScope: w,
                          status: M,
                          integrationStatus: _,
                          guildName: T,
                          appChannelName: R,
                          appChannelPending: D,
                          canManageGuild: U,
                          canManageChannels: F,
                          usesAppChannels: O,
                          botInGuild: W,
                          liveNameOutdated: B,
                      },
            [y, w, M, _, T, R, D, U, F, O, W, B],
        ),
        V = z?.status?.publishState ?? null,
        H = z?.installScope === "guild" && z.status?.surface === "bot";
    l.useEffect(() => {
        null != y && null != A && H && null != V && (0, S.lE)(V) && q(y);
    }, [y?.id, A, H, V]);
    let Z = y?.application_id ?? null,
        Q = null != V && (0, S.lE)(V);
    l.useEffect(() => {
        null != Z &&
            Q &&
            null == s.A.getApplication(Z) &&
            !s.A.isFetchingApplication(Z) &&
            (0, u.TA)(Z).catch(() => {});
    }, [Z, Q]);
    let X = l.useMemo(() => (null == z ? null : P(z)), [z]),
        J = (function (e) {
            let t = (0, a.bG)([k.A], () => (null == e ? null : k.A.getPublishProgress(e))),
                [n, i] = l.useState(() => Date.now());
            return (l.useEffect(() => {
                if (null == t) return;
                i(Date.now());
                let e = setInterval(() => i(Date.now()), 1e3);
                return () => clearInterval(e);
            }, [t]),
            null == t)
                ? null
                : E.intl.formatToPlainString(C.default["ndkR+x"], {
                      action: E.intl.string(I[t.stage]),
                      detail: (0, N.C7)(n - t.stageStartedAt),
                  });
        })(v ? e : null),
        Y = l.useCallback(
            (t) => {
                null != e &&
                    null != i &&
                    $(e, t, i).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, i],
        );
    if (null == i || !h || null == X || (!g && !v)) return null;
    let K = null == x ? X.label : E.intl.string(C.default.qru9M5);
    return {
        ...X,
        status: z?.status ?? null,
        guildId: A,
        appChannelId: j,
        publishing: v,
        failure: v ? null : b,
        showsProgress: null != J,
        awaitingApproval: null != x,
        label: v ? (J ?? E.intl.string(C.default.Rhx0rn)) : K,
        disabled: v || !0 === i.busy,
        run: Y,
    };
}
