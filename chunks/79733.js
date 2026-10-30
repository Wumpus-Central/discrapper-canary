n.d(l, { bI: () => U, Ay: () => W, vL: () => O, KL: () => R, qF: () => k, FZ: () => Z });
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
    b = n(260498),
    m = n(951178),
    A = n(426035),
    _ = n(385081),
    P = n(545503),
    v = n(246338);
async function S(t, l) {
    (t.guild_id !== l || t.preview_guild_id !== l) && (await (0, g.M7)(t.id, { guild_id: l, preview_guild_id: l }));
}
var w = n(664619),
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
    if ((0, m.Fl)(t)) return !1;
    let l = s.A.getApplication(t.application_id)?.name;
    return null != l && l !== t.name;
}
function D(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let l = C.A.getPublishProgress(t)?.stage;
    return null == l || "preparing" === l || "approval" === l;
}
function F(t, l) {
    let n = b.Ay.getProject(t);
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
            integrationStatus: b.Ay.getIntegrationStatus(t),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(t),
            canManageGuild: null == a ? null : h.A.can(T.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : h.A.can(T.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, m.Hv)(n),
            botInGuild: (0, A.AS)(n, e),
            liveNameOutdated: k(n),
        },
    };
}
async function O(t, l) {
    var n;
    let e = b.Ay.getProject(t),
        i = e?.preview_application_id;
    if (null == e || null == i) return;
    let a =
        ((n = b.Ay.getIntegrationStatus(t)), n?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : l);
    (await (0, r.TA)(i).catch(() => {}),
        await new Promise((t) => {
            P.A.openConjureAppInstallModal({
                applicationId: i,
                application: s.A.getApplication(i) ?? null,
                guildId: a,
                onClose: t,
            });
        }),
        await S(e, a).catch(() => {}),
        await (0, g.U1)(t).catch(() => {}));
}
async function H(t, l, n, e) {
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
    (d && L(o, !0),
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
                            .finally(() => L(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    L(o, !1);
                    let l = t instanceof Error ? t.message : M.intl.string(y.default.gMWZeG);
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
    (0, u.eO)((0, A.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
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
    if (null != o && (0, b.PV)(r.project)) {
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
                J(t, d, e, i).catch(() => {});
            })
          : await J(t, d, e, i);
}
async function J(t, l, n, e) {
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
            await H(u, l, n, e);
            return;
        }
        await H(u, l, n, e);
    }
}
function W(t, l) {
    let n = e.useContext(U),
        a = l ?? n,
        u = a?.guildId ?? null,
        {
            viewerCanPublish: f,
            publishOffered: g,
            publishing: m,
            failure: A,
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
            canManageChannels: H,
            usesAppChannels: L,
            botInGuild: q,
            liveNameOutdated: Q,
        } = (0, i.cf)(
            [b.Ay, C.A, p.A, c.Ay, d.A, h.A, o.A, s.A],
            () => {
                let l = null == t || null == u ? null : F(t, u);
                return {
                    viewerCanPublish: null != l && (0, b.jf)(l.project),
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
        J = e.useMemo(
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
                          canManageChannels: H,
                          usesAppChannels: L,
                          botInGuild: q,
                          liveNameOutdated: Q,
                      },
            [P, w, E, x, T, R, k, O, H, L, q, Q],
        ),
        W = J?.status?.publishState ?? null,
        z = J?.installScope === "guild" && J.status?.surface === "bot";
    e.useEffect(() => {
        null != P && null != v && z && null != W && (0, N.lE)(W) && B(P);
    }, [P?.id, v, z, W]);
    let X = P?.application_id ?? null,
        Y = null != W && (0, N.lE)(W);
    e.useEffect(() => {
        null != X &&
            Y &&
            null == s.A.getApplication(X) &&
            !s.A.isFetchingApplication(X) &&
            (0, r.TA)(X).catch(() => {});
    }, [X, Y]);
    let V = e.useMemo(() => (null == J ? null : I(J)), [J]),
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
        })(m ? t : null),
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
    if (null == a || !f || null == V || (!g && !m)) return null;
    let tt = null == _ ? V.label : M.intl.string(y.default.qru9M5);
    return {
        ...V,
        status: J?.status ?? null,
        guildId: v,
        appChannelId: S,
        publishing: m,
        failure: m ? null : A,
        showsProgress: null != K,
        awaitingApproval: null != _,
        label: m ? (K ?? M.intl.string(y.default.Rhx0rn)) : tt,
        disabled: m || !0 === a.busy,
        run: $,
    };
}
