n.d(l, { bI: () => U, Ay: () => z, vL: () => O, KL: () => R, qF: () => k, FZ: () => Z });
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
    S = n(803101),
    w = n(664619),
    C = n(722701),
    N = n(811587),
    y = n(87501),
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
let j = {
    preparing: y.default.GQeas1,
    approval: y.default["TkHHD+"],
    approved_by_grant: y.default["9+kNt8"],
    setup: y.default["F+AxgM"],
    build: y.default.oQeMIy,
    deploy: y.default.LqZvZ2,
    discord: y.default.LFcGAT,
    activating: y.default.ff1Fq1,
};
var T = n(652215);
let U = 221552 == n.j ? e.createContext(null) : null;
function R(t, l) {
    return "user" === t.install_scope ? null : (t.guild_id ?? l);
}
function k(t) {
    if ((0, b.Fl)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function D(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let l = C.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function F(t, l) {
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
            canManageGuild: null == a ? null : h.A.can(T.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : h.A.can(T.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, m.AS)(n, e),
            liveNameOutdated: k(n),
        },
    };
}
async function O(t, l) {
    let n = A.Ay.getProject(t),
        e = n?.preview_application_id;
    if (null == n || null == e) return;
    let i = (0, S.a)(n, A.Ay.getIntegrationStatus(t), l);
    (await (0, r.TA)(e).catch(() => {}),
        await new Promise((t) => {
            P.A.openConjureAppInstallModal({
                applicationId: e,
                application: s.A.getApplication(e) ?? null,
                guildId: i,
                onClose: t,
            });
        }),
        await (0, S.$)(n, i).catch(() => {}),
        await (0, g.U1)(t).catch(() => {}));
}
async function L(t, l, n, e) {
    let i,
        { project: u } = t,
        { platform: r, guildId: s } = n,
        o = u.id;
    Q.add(o);
    try {
        let t = await (0, x.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG));
        return;
    } finally {
        Q.delete(o);
    }
    if (null == i) return;
    if (C.A.isProjectPublishing(o) || C.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(M.intl.string(y.default["TD/ze/"]));
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !l.isUpdate;
    (d && H(o, !0),
        (0, x.TV)(o, i, e)
            .then((t) => {
                let l;
                if (!0 === t.ok) return t;
                throw (
                    20088 === t.code && (0, g.U1)(o).catch(() => {}),
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
                    (r.showConfirmation(M.intl.string(y.default.S6Px3n)),
                        null != t.guildId && B(u),
                        (0, w.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() => (d && !0 !== l.channel_skipped ? q(o, s) : void 0))
                            .finally(() => H(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    H(o, !1);
                    let l = t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG);
                    (a.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: l }),
                        r.showError(l));
                },
            ));
}
function H(t, l) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: l });
}
async function q(t, l) {
    let n = Date.now() + 5e3;
    for (; F(t, l)?.appChannelId == null && Date.now() < n;) await new Promise((t) => setTimeout(t, 250));
}
function B(t) {
    (0, u.eO)((0, m.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let Q = new Set();
async function Z(t, l, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: a, platform: u } = e;
    if (!0 === e.busy || Q.has(t)) return;
    let r = F(t, a),
        s = r?.input.status?.publishState;
    if (null == r || null == s || !(0, N.Uh)(s)) return;
    let o = D(t) ? C.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, A.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        t(o);
        return;
    }
    if (C.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = I(r.input);
    ((0, _.yJ)(t, {
        entryPoint: l,
        publishState: s,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: d.action,
    }),
    null != d.disabledReason)
        ? u.showPublishBlocked(E.k.MISSING_MANAGE_SERVER, d.disabledReason)
        : ((0, x.dx)(t), null != d.confirmReason)
          ? u.showPublishBlocked(E.k.MISSING_MANAGE_CHANNELS, d.confirmReason, () => {
                Y(t, d, e, i).catch(() => {});
            })
          : await Y(t, d, e, i);
}
async function Y(t, l, n, e) {
    let { guildId: i, platform: a } = n,
        u = F(t, i);
    if (!(null == u || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === l.intent) {
            Q.add(t);
            try {
                await (a.requestConsent ?? ((t) => O(t, i)))(t);
            } finally {
                Q.delete(t);
            }
            if (C.A.isProjectPublishing(t)) return;
            let u = F(t, i),
                r = u?.input.integrationStatus ?? null;
            if (
                null == u ||
                (0, f.Qg)({
                    installScope: u.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            await L(u, l, n, e);
            return;
        }
        await L(u, l, n, e);
    }
}
function z(t, l) {
    let n = e.useContext(U),
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
            appChannelId: S,
            installScope: w,
            status: E,
            integrationStatus: x,
            guildName: T,
            appChannelName: R,
            appChannelPending: k,
            canManageGuild: O,
            canManageChannels: L,
            usesAppChannels: H,
            botInGuild: q,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [A.Ay, C.A, p.A, c.Ay, d.A, h.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : F(t, u);
                return {
                    viewerCanPublish: null != l && (0, A.jf)(l.project),
                    publishOffered: l?.input.status != null && (0, N.Uh)(l.input.status.publishState),
                    project: l?.project ?? null,
                    guildId: l?.guildId ?? null,
                    appChannelId: l?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === D(t) &&
                        (C.A.isProjectPublishing(t) || C.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : C.A.getPublishFailure(t),
                    approvalUrl: null != t && D(t) ? C.A.getPublishApprovalUrl(t) : null,
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
        Y = e.useMemo(
            () =>
                null == P
                    ? null
                    : {
                          installScope: w,
                          status: E,
                          integrationStatus: x,
                          guildName: T,
                          appChannelName: R,
                          appChannelPending: k,
                          canManageGuild: O,
                          canManageChannels: L,
                          usesAppChannels: H,
                          botInGuild: q,
                          liveNameOutdated: Q,
                      },
            [P, w, E, x, T, R, k, O, L, H, q, Q],
        ),
        z = Y?.status?.publishState ?? null,
        J = Y?.installScope === "guild" && Y.status?.surface === "bot";
    e.useEffect(() => {
        null != P && null != v && J && null != z && (0, N.lE)(z) && B(P);
    }, [P?.id, v, J, z]);
    let W = P?.application_id ?? null,
        X = null != z && (0, N.lE)(z);
    e.useEffect(() => {
        null != W &&
            X &&
            null == s.A.getApplication(W) &&
            !s.A.isFetchingApplication(W) &&
            (0, r.TA)(W).catch(() => {});
    }, [W, X]);
    let V = e.useMemo(() => (null == Y ? null : I(Y)), [Y]),
        K = (function (t) {
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
                      action: M.intl.string(j[l.stage]),
                      detail: (0, G.C7)(n - l.stageStartedAt),
                  });
        })(b ? t : null),
        $ = e.useCallback(
            (l, n) => {
                null != t &&
                    null != a &&
                    Z(t, l, a, n).catch((l) => {
                        console.error("[conjure] publish action failed", t, l);
                    });
            },
            [t, a],
        );
    if (null == a || !f || null == V || (!g && !b)) return null;
    let tt = null == _ ? V.label : M.intl.string(y.default.qru9M5);
    return {
        ...V,
        status: Y?.status ?? null,
        guildId: v,
        appChannelId: S,
        publishing: b,
        failure: b ? null : m,
        showsProgress: null != K,
        awaitingApproval: null != _,
        label: b ? (K ?? M.intl.string(y.default.Rhx0rn)) : tt,
        disabled: b || !0 === a.busy,
        run: $,
    };
}
