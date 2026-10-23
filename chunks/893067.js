n.d(t, { bI: () => R, Ay: () => V, KL: () => L, qF: () => D, FZ: () => $ });
var l = n(582128),
    i = n(17928),
    a = n(73153),
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
function M(e) {
    let { installScope: t, integrationStatus: n } = e,
        l = e.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === l.publishState && e.liveNameOutdated ? { ...l, publishState: "live_outdated" } : l,
        a = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: a } = e;
            return (
                "guild" === t &&
                null != n &&
                !!(0, S.lE)(n.publishState) &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })({ ...e, status: i }),
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
            isUpdate: "live_outdated" === i.publishState && !a,
            disabledReason: r,
            confirmReason:
                null == r
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? E.intl.format(C.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: a ? ("activity" === i.surface ? "channel" : "bot") : null,
        };
    return u && n?.bot_permissions_changed === !0
        ? { ...s, label: E.intl.string(C.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: E.intl.string(C.default["120EFN"]), action: "publish" };
}
var P = n(516288),
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
let R = 221552 == n.j ? l.createContext(null) : null;
function L(e, t) {
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
    let l = L(n, t),
        i = null == l ? null : (0, A.i8)(l, n.application_id),
        a = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: k.A.getPublishStatus(e),
            integrationStatus: m.Ay.getIntegrationStatus(e),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: k.A.isAppChannelPending(e),
            canManageGuild: null == a ? null : p.A.can(T.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : p.A.can(T.xBc.MANAGE_CHANNELS, a),
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
    let i = (0, j.a)(n, m.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            y.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, j.$)(n, i).catch(() => {}),
        await (0, g.U1)(e).catch(() => {}));
}
async function F(e, t, n) {
    let l,
        { project: i } = e,
        { platform: a, guildId: r } = n,
        u = i.id;
    B.add(u);
    try {
        let e = await (0, _.xQ)(u);
        l = 1 === e.destinations.length ? e.selected_destination_id : await a.promptPublishDestination(e);
    } catch (e) {
        a.showError(e instanceof Error ? e.message : E.intl.string(C.default.gMWZeG));
        return;
    } finally {
        B.delete(u);
    }
    if (null == l) return;
    if (k.A.isProjectPublishing(u) || k.A.getPublishStatus(u)?.publishing === !0)
        return void a.showError(E.intl.string(C.default["TD/ze/"]));
    let s = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (s && q(u, !0),
        (0, _.TV)(u, l)
            .then((e) => {
                let t;
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, g.U1)(u).catch(() => {}),
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
                    (a.showConfirmation(E.intl.string(C.default.S6Px3n)),
                        null != e.guildId && W(i),
                        (0, w.tZ)(u, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", u, e);
                            })
                            .then(() => (s && !0 !== t.channel_skipped ? O(u, r) : void 0))
                            .finally(() => q(u, !1))
                            .catch(() => {}));
                },
                (e) => {
                    (q(u, !1), a.showError(e instanceof Error ? e.message : E.intl.string(C.default.gMWZeG)));
                },
            ));
}
function q(e, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function O(e, t) {
    let n = Date.now() + 5e3;
    for (; G(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function W(e) {
    (0, r.eO)((0, b.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let B = new Set();
async function $(e, t, l) {
    let { guildId: i, platform: a } = l;
    if (!0 === l.busy || B.has(e)) return;
    let r = G(e, i),
        u = r?.input.status?.publishState;
    if (null == r || null == u || !(0, S.Uh)(u)) return;
    let s = k.A.getPublishApprovalUrl(e);
    if (null != s && (0, m.PV)(r.project)) {
        let { promptPublishApproval: e } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        e(s);
        return;
    }
    if (k.A.isProjectPublishing(e) || r.input.status?.publishing === !0) return;
    let o = M(r.input);
    ((0, x.yJ)(e, {
        entryPoint: t,
        publishState: u,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: o.action,
    }),
    null != o.disabledReason)
        ? a.showPublishBlocked(P.k.MISSING_MANAGE_SERVER, o.disabledReason)
        : ((0, _.dx)(e), null != o.confirmReason)
          ? a.showPublishBlocked(P.k.MISSING_MANAGE_CHANNELS, o.confirmReason, () => {
                z(e, o, l).catch(() => {});
            })
          : await z(e, o, l);
}
async function z(e, t, n) {
    let { guildId: l, platform: i } = n,
        a = G(e, l);
    if (!(null == a || k.A.isProjectPublishing(e))) {
        if ("consent_then_publish" === t.intent) {
            B.add(e);
            try {
                await (i.requestConsent ?? ((e) => U(e, l)))(e);
            } finally {
                B.delete(e);
            }
            if (k.A.isProjectPublishing(e)) return;
            let a = G(e, l),
                r = a?.input.integrationStatus ?? null;
            if (
                null == a ||
                (0, h.Qg)({
                    installScope: a.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            await F(a, t, n);
            return;
        }
        await F(a, t, n);
    }
}
function V(e, t) {
    let n = l.useContext(R),
        a = t ?? n,
        r = a?.guildId ?? null,
        {
            viewerCanPublish: h,
            publishOffered: g,
            publishing: v,
            approvalUrl: b,
            project: x,
            guildId: y,
            appChannelId: A,
            installScope: j,
            status: w,
            integrationStatus: P,
            guildName: _,
            appChannelName: T,
            appChannelPending: L,
            canManageGuild: D,
            canManageChannels: U,
            usesAppChannels: F,
            botInGuild: q,
            liveNameOutdated: O,
        } = (0, i.cf)(
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
        B = l.useMemo(
            () =>
                null == x
                    ? null
                    : {
                          installScope: j,
                          status: w,
                          integrationStatus: P,
                          guildName: _,
                          appChannelName: T,
                          appChannelPending: L,
                          canManageGuild: D,
                          canManageChannels: U,
                          usesAppChannels: F,
                          botInGuild: q,
                          liveNameOutdated: O,
                      },
            [x, j, w, P, _, T, L, D, U, F, q, O],
        ),
        z = B?.status?.publishState ?? null,
        V = B?.installScope === "guild" && B.status?.surface === "bot";
    l.useEffect(() => {
        null != x && null != y && V && null != z && (0, S.lE)(z) && W(x);
    }, [x?.id, y, V, z]);
    let H = x?.application_id ?? null,
        Z = null != z && (0, S.lE)(z);
    l.useEffect(() => {
        null != H &&
            Z &&
            null == s.A.getApplication(H) &&
            !s.A.isFetchingApplication(H) &&
            (0, u.TA)(H).catch(() => {});
    }, [H, Z]);
    let Q = l.useMemo(() => (null == B ? null : M(B)), [B]),
        Y = (function (e) {
            let t = (0, i.bG)([k.A], () => (null == e ? null : k.A.getPublishProgress(e))),
                [n, a] = l.useState(() => Date.now());
            return (l.useEffect(() => {
                if (null == t) return;
                a(Date.now());
                let e = setInterval(() => a(Date.now()), 1e3);
                return () => clearInterval(e);
            }, [t]),
            null == t)
                ? null
                : E.intl.formatToPlainString(C.default["ndkR+x"], {
                      action: E.intl.string(I[t.stage]),
                      detail: (0, N.C7)(n - t.stageStartedAt),
                  });
        })(v ? e : null),
        X = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    $(e, t, a).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    if (null == a || !h || null == Q || (!g && !v)) return null;
    let K = null == b ? Q.label : E.intl.string(C.default.qru9M5);
    return {
        ...Q,
        status: B?.status ?? null,
        guildId: y,
        appChannelId: A,
        publishing: v,
        showsProgress: null != Y,
        label: v ? (Y ?? E.intl.string(C.default.Rhx0rn)) : K,
        disabled: v || !0 === a.busy,
        run: X,
    };
}
