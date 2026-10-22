n.d(t, { bI: () => L, Ay: () => V, KL: () => R, qF: () => D, FZ: () => z });
var l = n(582128),
    i = n(17928),
    r = n(73153),
    a = n(803306),
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
    b = n(951178),
    v = n(426035),
    x = n(385081),
    y = n(1371),
    A = n(246338),
    j = n(803101),
    w = n(664619),
    S = n(722701),
    k = n(811587);
n(128761);
var C = n(248675),
    E = n(105292);
function P(e) {
    let { installScope: t, integrationStatus: n } = e,
        l = e.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === l.publishState && e.liveNameOutdated ? { ...l, publishState: "live_outdated" } : l,
        r = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: r } = e;
            return (
                "guild" === t &&
                null != n &&
                !!(0, k.lE)(n.publishState) &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === r)
            );
        })({ ...e, status: i }),
        a = (function (e) {
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
            isUpdate: "live_outdated" === i.publishState && !r,
            disabledReason: a,
            confirmReason:
                null == a
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? E.intl.format(C.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: r ? ("activity" === i.surface ? "channel" : "bot") : null,
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
    if ((0, b.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function G(e, t) {
    let n = m.Ay.getProject(e);
    if (null == n) return null;
    let l = R(n, t),
        i = null == l ? null : (0, A.i8)(l, n.application_id),
        r = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: S.A.getPublishStatus(e),
            integrationStatus: m.Ay.getIntegrationStatus(e),
            guildName: r?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: S.A.isAppChannelPending(e),
            canManageGuild: null == r ? null : p.A.can(T.xBc.MANAGE_GUILD, r),
            canManageChannels: null == r ? null : p.A.can(T.xBc.MANAGE_CHANNELS, r),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, v.AS)(n, l),
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
async function O(e, t, n) {
    let l,
        { project: i } = e,
        { platform: r, guildId: a } = n,
        u = i.id;
    $.add(u);
    try {
        let e = await (0, _.xQ)(u);
        l = 1 === e.destinations.length ? e.selected_destination_id : await r.promptPublishDestination(e);
    } catch (e) {
        r.showError(e instanceof Error ? e.message : E.intl.string(C.default.gMWZeG));
        return;
    } finally {
        $.delete(u);
    }
    if (null == l) return;
    if (S.A.isProjectPublishing(u) || S.A.getPublishStatus(u)?.publishing === !0)
        return void r.showError(E.intl.string(C.default["TD/ze/"]));
    let s = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (s && F(u, !0),
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
                    (r.showConfirmation(E.intl.string(C.default.S6Px3n)),
                        null != e.guildId && W(i),
                        (0, w.tZ)(u, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", u, e);
                            })
                            .then(() => (s && !0 !== t.channel_skipped ? q(u, a) : void 0))
                            .finally(() => F(u, !1))
                            .catch(() => {}));
                },
                (e) => {
                    (F(u, !1), r.showError(e instanceof Error ? e.message : E.intl.string(C.default.gMWZeG)));
                },
            ));
}
function F(e, t) {
    r.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function q(e, t) {
    let n = Date.now() + 5e3;
    for (; G(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function W(e) {
    (0, a.eO)((0, v.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let $ = new Set();
async function z(e, t, l) {
    let { guildId: i, platform: r } = l;
    if (!0 === l.busy || $.has(e)) return;
    let a = G(e, i),
        u = a?.input.status?.publishState;
    if (null == a || null == u || !(0, k.Uh)(u)) return;
    let s = S.A.getPublishApprovalUrl(e);
    if (null != s && (0, m.PV)(a.project)) {
        let { promptPublishApproval: e } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        e(s);
        return;
    }
    if (S.A.isProjectPublishing(e) || a.input.status?.publishing === !0) return;
    let o = P(a.input);
    ((0, x.yJ)(e, {
        entryPoint: t,
        publishState: u,
        surface: a.input.status?.surface ?? null,
        installScope: a.project.install_scope,
        action: o.action,
    }),
    null != o.disabledReason)
        ? r.showPublishBlocked(M.k.MISSING_MANAGE_SERVER, o.disabledReason)
        : ((0, _.dx)(e), null != o.confirmReason)
          ? r.showPublishBlocked(M.k.MISSING_MANAGE_CHANNELS, o.confirmReason, () => {
                B(e, o, l).catch(() => {});
            })
          : await B(e, o, l);
}
async function B(e, t, n) {
    let { guildId: l, platform: i } = n,
        r = G(e, l);
    if (!(null == r || S.A.isProjectPublishing(e))) {
        if ("consent_then_publish" === t.intent) {
            $.add(e);
            try {
                await (i.requestConsent ?? ((e) => U(e, l)))(e);
            } finally {
                $.delete(e);
            }
            if (S.A.isProjectPublishing(e)) return;
            let r = G(e, l),
                a = r?.input.integrationStatus ?? null;
            if (
                null == r ||
                (0, h.Qg)({
                    installScope: r.project.install_scope,
                    previewReady: a?.preview_ready === !0,
                    integrationInstalled: a?.integration_installed ?? null,
                    botPermissionsChanged: a?.bot_permissions_changed === !0,
                })
            )
                return;
            await O(r, t, n);
            return;
        }
        await O(r, t, n);
    }
}
function V(e, t) {
    let n = l.useContext(L),
        r = t ?? n,
        a = r?.guildId ?? null,
        {
            viewerCanPublish: h,
            publishOffered: g,
            publishing: b,
            approvalUrl: v,
            project: x,
            guildId: y,
            appChannelId: A,
            installScope: j,
            status: w,
            integrationStatus: M,
            guildName: _,
            appChannelName: T,
            appChannelPending: R,
            canManageGuild: D,
            canManageChannels: U,
            usesAppChannels: O,
            botInGuild: F,
            liveNameOutdated: q,
        } = (0, i.cf)(
            [m.Ay, S.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == a ? null : G(e, a);
                return {
                    viewerCanPublish: null != t && (0, m.jf)(t.project),
                    publishOffered: t?.input.status != null && (0, k.Uh)(t.input.status.publishState),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing:
                        null != e &&
                        null == S.A.getPublishApprovalUrl(e) &&
                        (S.A.isProjectPublishing(e) || S.A.getPublishStatus(e)?.publishing === !0),
                    approvalUrl: null == e ? null : S.A.getPublishApprovalUrl(e),
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
            [e, a],
        ),
        $ = l.useMemo(
            () =>
                null == x
                    ? null
                    : {
                          installScope: j,
                          status: w,
                          integrationStatus: M,
                          guildName: _,
                          appChannelName: T,
                          appChannelPending: R,
                          canManageGuild: D,
                          canManageChannels: U,
                          usesAppChannels: O,
                          botInGuild: F,
                          liveNameOutdated: q,
                      },
            [x, j, w, M, _, T, R, D, U, O, F, q],
        ),
        B = $?.status?.publishState ?? null,
        V = $?.installScope === "guild" && $.status?.surface === "bot";
    l.useEffect(() => {
        null != x && null != y && V && null != B && (0, k.lE)(B) && W(x);
    }, [x?.id, y, V, B]);
    let H = x?.application_id ?? null,
        Z = null != B && (0, k.lE)(B);
    l.useEffect(() => {
        null != H &&
            Z &&
            null == s.A.getApplication(H) &&
            !s.A.isFetchingApplication(H) &&
            (0, u.TA)(H).catch(() => {});
    }, [H, Z]);
    let Q = l.useMemo(() => (null == $ ? null : P($)), [$]),
        Y = (function (e) {
            let t = (0, i.bG)([S.A], () => (null == e ? null : S.A.getPublishProgress(e))),
                [n, r] = l.useState(() => Date.now());
            return (l.useEffect(() => {
                if (null == t) return;
                r(Date.now());
                let e = setInterval(() => r(Date.now()), 1e3);
                return () => clearInterval(e);
            }, [t]),
            null == t)
                ? null
                : E.intl.formatToPlainString(C.default["ndkR+x"], {
                      action: E.intl.string(I[t.stage]),
                      detail: (0, N.C7)(n - t.stageStartedAt),
                  });
        })(b ? e : null),
        X = l.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    z(e, t, r).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    if (null == r || !h || null == Q || (!g && !b)) return null;
    let J = null == v ? Q.label : E.intl.string(C.default.qru9M5);
    return {
        ...Q,
        status: $?.status ?? null,
        guildId: y,
        appChannelId: A,
        publishing: b,
        showsProgress: null != Y,
        label: b ? (Y ?? E.intl.string(C.default.Rhx0rn)) : J,
        disabled: b || !0 === r.busy,
        run: X,
    };
}
