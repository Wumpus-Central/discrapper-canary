n.d(t, { bI: () => U, Ay: () => W, vL: () => O, KL: () => R, qF: () => k, FZ: () => Z });
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
    f = n(576705),
    h = n(238490),
    g = n(371169),
    b = n(260498),
    A = n(951178),
    m = n(426035),
    _ = n(385081),
    P = n(545503),
    v = n(246338);
async function S(l, t) {
    (l.guild_id !== t || l.preview_guild_id !== t) && (await (0, g.M7)(l.id, { guild_id: t, preview_guild_id: t }));
}
var w = n(664619),
    C = n(722701),
    N = n(811587),
    y = n(809526),
    M = n(105292);
function I(l) {
    let { installScope: t, integrationStatus: n } = l,
        e = l.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === e.publishState && l.liveNameOutdated ? { ...e, publishState: "live_outdated" } : e,
        a = (function (l) {
            let { installScope: t, status: n, appChannelName: e, appChannelPending: i, botInGuild: a } = l;
            return (
                "guild" === t &&
                null != n &&
                !!(0, N.lE)(n.publishState) &&
                ("activity" === n.surface ? null == e && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })({ ...l, status: i }),
        u = (function (l) {
            let { installScope: t, guildName: n, canManageGuild: e } = l;
            return "guild" !== t || !1 !== e ? null : M.intl.format(y.default.N4NkyR, { server: n ?? "" });
        })(l),
        r = (0, h.Qg)({
            installScope: t,
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
                    ? (function (l) {
                          let { installScope: t, guildName: n, canManageChannels: e, usesAppChannels: i } = l;
                          return "guild" === t && i && !1 === e
                              ? M.intl.format(y.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(l)
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
    approved_by_grant: y.default["9+kNt8"],
    setup: y.default["F+AxgM"],
    build: y.default.oQeMIy,
    deploy: y.default.LqZvZ2,
    discord: y.default.LFcGAT,
    activating: y.default.ff1Fq1,
};
var j = n(652215);
let U = 221552 == n.j ? e.createContext(null) : null;
function R(l, t) {
    return "user" === l.install_scope ? null : (l.guild_id ?? t);
}
function k(l) {
    if ((0, A.Fl)(l)) return !1;
    let t = s.A.getApplication(l.application_id)?.name;
    return null != t && t !== l.name;
}
function D(l) {
    if (null == C.A.getPublishApprovalUrl(l)) return !1;
    let t = C.A.getPublishProgress(l)?.stage;
    return null == t || "preparing" === t || "approval" === t;
}
function F(l, t) {
    let n = b.Ay.getProject(l);
    if (null == n) return null;
    let e = R(n, t),
        i = null == e ? null : (0, v.i8)(e, n.application_id),
        a = null == e ? null : p.A.getGuild(e);
    return {
        project: n,
        guildId: e,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: C.A.getPublishStatus(l),
            integrationStatus: b.Ay.getIntegrationStatus(l),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(l),
            canManageGuild: null == a ? null : f.A.can(j.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : f.A.can(j.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, A.Hv)(n),
            botInGuild: (0, m.AS)(n, e),
            liveNameOutdated: k(n),
        },
    };
}
async function O(l, t) {
    var n;
    let e = b.Ay.getProject(l),
        i = e?.preview_application_id;
    if (null == e || null == i) return;
    let a =
        ((n = b.Ay.getIntegrationStatus(l)), n?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : t);
    (await (0, r.TA)(i).catch(() => {}),
        await new Promise((l) => {
            P.A.openConjureAppInstallModal({
                applicationId: i,
                application: s.A.getApplication(i) ?? null,
                guildId: a,
                onClose: l,
            });
        }),
        await S(e, a).catch(() => {}),
        await (0, g.U1)(l).catch(() => {}));
}
async function H(l, t, n, e) {
    let i,
        { project: u } = l,
        { platform: r, guildId: s } = n,
        o = u.id;
    Q.add(o);
    try {
        let l = await (0, x.xQ)(o);
        i = 1 === l.destinations.length ? l.selected_destination_id : await r.promptPublishDestination(l);
    } catch (l) {
        r.showError(l instanceof Error ? l.message : M.intl.string(y.default.gMWZeG));
        return;
    } finally {
        Q.delete(o);
    }
    if (null == i) return;
    if (C.A.isProjectPublishing(o) || C.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(M.intl.string(y.default["TD/ze/"]));
    let d = null != l.guildId && l.input.status?.surface === "activity" && null == l.appChannelId && !t.isUpdate;
    (d && L(o, !0),
        (0, x.TV)(o, i, e)
            .then((l) => {
                let t;
                if (!0 === l.ok) return l;
                throw (
                    20088 === l.code && (0, g.U1)(o).catch(() => {}),
                    Error(
                        null != (t = l.detail?.trim()) && "" !== t
                            ? t
                            : 20088 === l.code
                              ? M.intl.string(y.default.UXEDPw)
                              : M.intl.string(y.default.gMWZeG),
                    )
                );
            })
            .then(
                (t) => {
                    (r.showConfirmation(M.intl.string(y.default.S6Px3n)),
                        null != l.guildId && q(u),
                        (0, w.tZ)(o, { isPreview: !1 })
                            .catch((l) => {
                                console.error("[conjure] post-publish refresh failed", o, l);
                            })
                            .then(() => (d && !0 !== t.channel_skipped ? B(o, s) : void 0))
                            .finally(() => L(o, !1))
                            .catch(() => {}));
                },
                (l) => {
                    L(o, !1);
                    let t = l instanceof Error ? l.message : M.intl.string(y.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: t }),
                        r.showError(t));
                },
            ));
}
function L(l, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: l, pending: t });
}
async function B(l, t) {
    let n = Date.now() + 5e3;
    for (; F(l, t)?.appChannelId == null && Date.now() < n;) await new Promise((l) => setTimeout(l, 250));
}
function q(l) {
    (0, u.eO)((0, m.Du)(l), { withMutualGuilds: !0 }).catch(() => {});
}
let Q = new Set();
async function Z(l, t, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || Q.has(l)) return;
    let r = F(l, a),
        s = r?.input.status?.publishState;
    if (null == r || null == s || !(0, N.Uh)(s)) return;
    let o = D(l) ? C.A.getPublishApprovalUrl(l) : null;
    if (null != o && (0, b.PV)(r.project)) {
        let { promptPublishApproval: l } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        l(o);
        return;
    }
    if (C.A.isProjectPublishing(l) || r.input.status?.publishing === !0) return;
    let d = I(r.input);
    ((0, _.yJ)(l, {
        entryPoint: t,
        publishState: s,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: d.action,
    }),
    null != d.disabledReason)
        ? u.showPublishBlocked(E.k.MISSING_MANAGE_SERVER, d.disabledReason)
        : ((0, x.dx)(l), null != d.confirmReason)
          ? u.showPublishBlocked(E.k.MISSING_MANAGE_CHANNELS, d.confirmReason, () => {
                J(l, d, e, i).catch(() => {});
            })
          : await J(l, d, e, i);
}
async function J(l, t, n, e) {
    let { guildId: i, platform: a } = n,
        u = F(l, i);
    if (!(null == u || C.A.isProjectPublishing(l))) {
        if ("consent_then_publish" === t.intent) {
            Q.add(l);
            try {
                await (a.requestConsent ?? ((l) => O(l, i)))(l);
            } finally {
                Q.delete(l);
            }
            if (C.A.isProjectPublishing(l)) return;
            let u = F(l, i),
                r = u?.input.integrationStatus ?? null;
            if (
                null == u ||
                (0, h.Qg)({
                    installScope: u.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            await H(u, t, n, e);
            return;
        }
        await H(u, t, n, e);
    }
}
function W(l, t) {
    let n = e.useContext(U),
        a = t ?? n,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: h,
            publishOffered: g,
            publishing: A,
            failure: m,
            approvalUrl: _,
            project: P,
            guildId: v,
            appChannelId: S,
            installScope: w,
            status: E,
            integrationStatus: x,
            guildName: j,
            appChannelName: R,
            appChannelPending: k,
            canManageGuild: O,
            canManageChannels: H,
            usesAppChannels: L,
            botInGuild: B,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [b.Ay, C.A, p.A, c.Ay, d.A, f.A, o.A, s.A],
            () => {
                let t = null == l || null == u ? null : F(l, u);
                return {
                    viewerCanPublish: null != t && (0, b.jf)(t.project),
                    publishOffered: t?.input.status != null && (0, N.Uh)(t.input.status.publishState),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing:
                        null != l &&
                        !1 === D(l) &&
                        (C.A.isProjectPublishing(l) || C.A.getPublishStatus(l)?.publishing === !0),
                    failure: null == l ? null : C.A.getPublishFailure(l),
                    approvalUrl: null != l && D(l) ? C.A.getPublishApprovalUrl(l) : null,
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
            [l, u],
        ),
        J = e.useMemo(
            () =>
                null == P
                    ? null
                    : {
                          installScope: w,
                          status: E,
                          integrationStatus: x,
                          guildName: j,
                          appChannelName: R,
                          appChannelPending: k,
                          canManageGuild: O,
                          canManageChannels: H,
                          usesAppChannels: L,
                          botInGuild: B,
                          liveNameOutdated: Q,
                      },
            [P, w, E, x, j, R, k, O, H, L, B, Q],
        ),
        W = J?.status?.publishState ?? null,
        X = J?.installScope === "guild" && J.status?.surface === "bot";
    e.useEffect(() => {
        null != P && null != v && X && null != W && (0, N.lE)(W) && q(P);
    }, [P?.id, v, X, W]);
    let Y = P?.application_id ?? null,
        z = null != W && (0, N.lE)(W);
    e.useEffect(() => {
        null != Y &&
            z &&
            null == s.A.getApplication(Y) &&
            !s.A.isFetchingApplication(Y) &&
            (0, r.TA)(Y).catch(() => {});
    }, [Y, z]);
    let V = e.useMemo(() => (null == J ? null : I(J)), [J]),
        K = (function (l) {
            let t = (0, i.bG)([C.A], () => (null == l ? null : C.A.getPublishProgress(l))),
                [n, a] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == t) return;
                a(Date.now());
                let l = setInterval(() => a(Date.now()), 1e3);
                return () => clearInterval(l);
            }, [t]),
            null == t)
                ? null
                : M.intl.formatToPlainString(y.default["ndkR+x"], {
                      action: M.intl.string(T[t.stage]),
                      detail: (0, G.C7)(n - t.stageStartedAt),
                  });
        })(A ? l : null),
        $ = e.useCallback(
            (t, n) => {
                null != l &&
                    null != a &&
                    Z(l, t, a, n).catch((t) => {
                        console.error("[conjure] publish action failed", l, t);
                    });
            },
            [l, a],
        );
    if (null == a || !h || null == V || (!g && !A)) return null;
    let ll = null == _ ? V.label : M.intl.string(y.default.qru9M5);
    return {
        ...V,
        status: J?.status ?? null,
        guildId: v,
        appChannelId: S,
        publishing: A,
        failure: A ? null : m,
        showsProgress: null != K,
        awaitingApproval: null != _,
        label: A ? (K ?? M.intl.string(y.default.Rhx0rn)) : ll,
        disabled: A || !0 === a.busy,
        run: $,
    };
}
