l.d(t, { bI: () => T, Ay: () => V, vL: () => D, KL: () => L, qF: () => G, FZ: () => z });
var n = l(582128),
    a = l(17928),
    i = l(73153),
    r = l(803306),
    u = l(627363),
    s = l(587895),
    o = l(321191),
    d = l(734057),
    c = l(808728),
    f = l(71393),
    p = l(576705),
    h = l(238490),
    m = l(371169),
    g = l(260498),
    x = l(951178),
    b = l(426035),
    v = l(385081),
    y = l(1371),
    A = l(246338),
    j = l(803101),
    k = l(664619),
    C = l(722701),
    S = l(811587),
    w = l(248675),
    E = l(105292);
function M(e) {
    let { installScope: t, integrationStatus: l } = e,
        n = e.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        a = "live_current" === n.publishState && e.liveNameOutdated ? { ...n, publishState: "live_outdated" } : n,
        i = (function (e) {
            let { installScope: t, status: l, appChannelName: n, appChannelPending: a, botInGuild: i } = e;
            return (
                "guild" === t &&
                null != l &&
                !!(0, S.lE)(l.publishState) &&
                ("activity" === l.surface ? null == n && !0 !== a : "bot" === l.surface && !1 === i)
            );
        })({ ...e, status: a }),
        r = (function (e) {
            let { installScope: t, guildName: l, canManageGuild: n } = e;
            return "guild" !== t || !1 !== n ? null : E.intl.format(w.default.N4NkyR, { server: l ?? "" });
        })(e),
        u = (0, h.Qg)({
            installScope: t,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        }),
        s = {
            intent: u ? "consent_then_publish" : "publish",
            isUpdate: "live_outdated" === a.publishState && !i,
            upToDate: "live_current" === a.publishState && !i,
            disabledReason: r,
            confirmReason:
                null == r
                    ? (function (e) {
                          let { installScope: t, guildName: l, canManageChannels: n, usesAppChannels: a } = e;
                          return "guild" === t && a && !1 === n
                              ? E.intl.format(w.default.eHYXFg, { server: l ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: i ? ("activity" === a.surface ? "channel" : "bot") : null,
        };
    return u && l?.bot_permissions_changed === !0
        ? { ...s, label: E.intl.string(w.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: E.intl.string(w.default["120EFN"]), action: "publish" };
}
var P = l(516288),
    _ = l(962998),
    N = l(615839);
let I = {
    preparing: w.default.GQeas1,
    approval: w.default["TkHHD+"],
    setup: w.default["F+AxgM"],
    build: w.default.oQeMIy,
    deploy: w.default.LqZvZ2,
    discord: w.default.LFcGAT,
    activating: w.default.ff1Fq1,
};
var R = l(652215);
let T = 221552 == l.j ? n.createContext(null) : null;
function L(e, t) {
    return "user" === e.install_scope ? null : (e.guild_id ?? t);
}
function G(e) {
    if ((0, x.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function U(e, t) {
    let l = g.Ay.getProject(e);
    if (null == l) return null;
    let n = L(l, t),
        a = null == n ? null : (0, A.i8)(n, l.application_id),
        i = null == n ? null : f.A.getGuild(n);
    return {
        project: l,
        guildId: n,
        appChannelId: a,
        input: {
            installScope: l.install_scope,
            status: C.A.getPublishStatus(e),
            integrationStatus: g.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (d.A.getChannel(a)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(e),
            canManageGuild: null == i ? null : p.A.can(R.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : p.A.can(R.xBc.MANAGE_CHANNELS, i),
            usesAppChannels: (0, x.Hv)(l),
            botInGuild: (0, b.AS)(l, n),
            liveNameOutdated: G(l),
        },
    };
}
async function D(e, t) {
    let l = g.Ay.getProject(e),
        n = l?.preview_application_id;
    if (null == l || null == n) return;
    let a = (0, j.a)(l, g.Ay.getIntegrationStatus(e), t);
    (await (0, u.TA)(n).catch(() => {}),
        await new Promise((e) => {
            y.A.openConjureAppInstallModal({
                applicationId: n,
                application: s.A.getApplication(n) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await (0, j.$)(l, a).catch(() => {}),
        await (0, m.U1)(e).catch(() => {}));
}
async function q(e, t, l) {
    let n,
        { project: a } = e,
        { platform: r, guildId: u } = l,
        s = a.id;
    B.add(s);
    try {
        let e = await (0, _.xQ)(s);
        n = 1 === e.destinations.length ? e.selected_destination_id : await r.promptPublishDestination(e);
    } catch (e) {
        r.showError(e instanceof Error ? e.message : E.intl.string(w.default.gMWZeG));
        return;
    } finally {
        B.delete(s);
    }
    if (null == n) return;
    if (C.A.isProjectPublishing(s) || C.A.getPublishStatus(s)?.publishing === !0)
        return void r.showError(E.intl.string(w.default["TD/ze/"]));
    let o = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (o && W(s, !0),
        (0, _.TV)(s, n)
            .then((e) => {
                let t;
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, m.U1)(s).catch(() => {}),
                    Error(
                        null != (t = e.detail?.trim()) && "" !== t
                            ? t
                            : 20088 === e.code
                              ? E.intl.string(w.default.UXEDPw)
                              : E.intl.string(w.default.gMWZeG),
                    )
                );
            })
            .then(
                (t) => {
                    (r.showConfirmation(E.intl.string(w.default.S6Px3n)),
                        null != e.guildId && O(a),
                        (0, k.tZ)(s, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", s, e);
                            })
                            .then(() => (o && !0 !== t.channel_skipped ? F(s, u) : void 0))
                            .finally(() => W(s, !1))
                            .catch(() => {}));
                },
                (e) => {
                    W(s, !1);
                    let t = e instanceof Error ? e.message : E.intl.string(w.default.gMWZeG);
                    (i.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: s, message: t }),
                        r.showError(t));
                },
            ));
}
function W(e, t) {
    i.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function F(e, t) {
    let l = Date.now() + 5e3;
    for (; U(e, t)?.appChannelId == null && Date.now() < l;) await new Promise((e) => setTimeout(e, 250));
}
function O(e) {
    (0, r.eO)((0, b.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let B = new Set();
async function z(e, t, n) {
    let { guildId: a, platform: i } = n;
    if (!0 === n.busy || B.has(e)) return;
    let r = U(e, a),
        u = r?.input.status?.publishState;
    if (null == r || null == u || !(0, S.Uh)(u)) return;
    let s = C.A.getPublishApprovalUrl(e);
    if (null != s && (0, g.PV)(r.project)) {
        let { promptPublishApproval: e } = await Promise.all([l.e("241989"), l.e("574246")]).then(l.bind(l, 200389));
        e(s);
        return;
    }
    if (C.A.isProjectPublishing(e) || r.input.status?.publishing === !0) return;
    let o = M(r.input);
    ((0, v.yJ)(e, {
        entryPoint: t,
        publishState: u,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: o.action,
    }),
    null != o.disabledReason)
        ? i.showPublishBlocked(P.k.MISSING_MANAGE_SERVER, o.disabledReason)
        : ((0, _.dx)(e), null != o.confirmReason)
          ? i.showPublishBlocked(P.k.MISSING_MANAGE_CHANNELS, o.confirmReason, () => {
                $(e, o, n).catch(() => {});
            })
          : await $(e, o, n);
}
async function $(e, t, l) {
    let { guildId: n, platform: a } = l,
        i = U(e, n);
    if (!(null == i || C.A.isProjectPublishing(e))) {
        if ("consent_then_publish" === t.intent) {
            B.add(e);
            try {
                await (a.requestConsent ?? ((e) => D(e, n)))(e);
            } finally {
                B.delete(e);
            }
            if (C.A.isProjectPublishing(e)) return;
            let i = U(e, n),
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
            await q(i, t, l);
            return;
        }
        await q(i, t, l);
    }
}
function V(e, t) {
    let l = n.useContext(T),
        i = t ?? l,
        r = i?.guildId ?? null,
        {
            viewerCanPublish: h,
            publishOffered: m,
            publishing: x,
            failure: b,
            approvalUrl: v,
            project: y,
            guildId: A,
            appChannelId: j,
            installScope: k,
            status: P,
            integrationStatus: _,
            guildName: R,
            appChannelName: L,
            appChannelPending: G,
            canManageGuild: D,
            canManageChannels: q,
            usesAppChannels: W,
            botInGuild: F,
            liveNameOutdated: B,
        } = (0, a.cf)(
            [g.Ay, C.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : U(e, r);
                return {
                    viewerCanPublish: null != t && (0, g.jf)(t.project),
                    publishOffered: t?.input.status != null && (0, S.Uh)(t.input.status.publishState),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing:
                        null != e &&
                        null == C.A.getPublishApprovalUrl(e) &&
                        (C.A.isProjectPublishing(e) || C.A.getPublishStatus(e)?.publishing === !0),
                    failure: null == e ? null : C.A.getPublishFailure(e),
                    approvalUrl: null == e ? null : C.A.getPublishApprovalUrl(e),
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
        $ = n.useMemo(
            () =>
                null == y
                    ? null
                    : {
                          installScope: k,
                          status: P,
                          integrationStatus: _,
                          guildName: R,
                          appChannelName: L,
                          appChannelPending: G,
                          canManageGuild: D,
                          canManageChannels: q,
                          usesAppChannels: W,
                          botInGuild: F,
                          liveNameOutdated: B,
                      },
            [y, k, P, _, R, L, G, D, q, W, F, B],
        ),
        V = $?.status?.publishState ?? null,
        H = $?.installScope === "guild" && $.status?.surface === "bot";
    n.useEffect(() => {
        null != y && null != A && H && null != V && (0, S.lE)(V) && O(y);
    }, [y?.id, A, H, V]);
    let Z = y?.application_id ?? null,
        Q = null != V && (0, S.lE)(V);
    n.useEffect(() => {
        null != Z &&
            Q &&
            null == s.A.getApplication(Z) &&
            !s.A.isFetchingApplication(Z) &&
            (0, u.TA)(Z).catch(() => {});
    }, [Z, Q]);
    let X = n.useMemo(() => (null == $ ? null : M($)), [$]),
        J = (function (e) {
            let t = (0, a.bG)([C.A], () => (null == e ? null : C.A.getPublishProgress(e))),
                [l, i] = n.useState(() => Date.now());
            return (n.useEffect(() => {
                if (null == t) return;
                i(Date.now());
                let e = setInterval(() => i(Date.now()), 1e3);
                return () => clearInterval(e);
            }, [t]),
            null == t)
                ? null
                : E.intl.formatToPlainString(w.default["ndkR+x"], {
                      action: E.intl.string(I[t.stage]),
                      detail: (0, N.C7)(l - t.stageStartedAt),
                  });
        })(x ? e : null),
        K = n.useCallback(
            (t) => {
                null != e &&
                    null != i &&
                    z(e, t, i).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, i],
        );
    if (null == i || !h || null == X || (!m && !x)) return null;
    let Y = null == v ? X.label : E.intl.string(w.default.qru9M5);
    return {
        ...X,
        status: $?.status ?? null,
        guildId: A,
        appChannelId: j,
        publishing: x,
        failure: x ? null : b,
        showsProgress: null != J,
        awaitingApproval: null != v,
        label: x ? (J ?? E.intl.string(w.default.Rhx0rn)) : Y,
        disabled: x || !0 === i.busy,
        run: K,
    };
}
