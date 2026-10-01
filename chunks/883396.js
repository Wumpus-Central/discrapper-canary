(n.r(t), n.d(t, { default: () => ip }));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(435558),
    o = n(17928),
    c = n(506774),
    d = n(192308),
    u = n(43990),
    h = n(73153),
    A = n(367513),
    p = n(148494),
    x = n(765671),
    g = n(964486),
    m = n(793574),
    f = n(688810),
    E = n(198052),
    C = n(520698),
    j = n(43189),
    N = n(518530),
    T = n(384059),
    S = n(267102),
    _ = n(574172),
    I = n(869146),
    y = n(976860),
    v = n(461782),
    b = n(20465),
    O = n(156652),
    R = n(128286),
    L = n(619344),
    P = n(821747),
    U = n(280450),
    w = n(249288),
    M = n(71393),
    k = n(576705),
    G = n(309010),
    D = n(723702),
    V = n(19575),
    z = n(790535),
    B = n(113783),
    q = n(518769),
    K = n(571909),
    H = n(284009),
    F = n.n(H),
    Y = n(789645),
    W = n(297152),
    Q = n(939249),
    X = n(778712),
    Z = n(463930),
    $ = n(834730),
    J = n(866665),
    ee = n(408278),
    et = n(117723),
    en = n(193249),
    ei = n(475825),
    el = n(442433),
    es = n(730134),
    ea = n(80682),
    er = n(58736),
    eo = n(967144),
    ec = n(342296),
    ed = n(696451),
    eu = n(290863),
    eh = n(849736),
    eA = n(927813),
    ep = n(427262),
    ex = n(375708);
let eg = +eA.A.Millis.DAY;
var em = n(105530),
    ef = n(734057),
    eE = n(488926),
    eC = n(652215),
    ej = n(451394),
    eN = n(710358),
    eT = n(151069);
function eS(e) {
    let { className: t } = e;
    return (0, i.jsx)(eN.A, {
        className: t,
        children: (0, i.jsx)("div", {
            className: eT.T,
            children: (0, i.jsx)(ej.q, {
                size: "custom",
                color: "currentColor",
                className: eT.C,
                width: 32,
                height: 32,
            }),
        }),
    });
}
var e_ = n(818348),
    eI = n(888299);
let ey = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, i.jsx)(er.Ay.Icon, { icon: Y.P, tooltip: ex.intl.string(ex.t.cpT0Cq), onClick: t });
        return (0, i.jsxs)(er.Ay, {
            toolbar: l,
            className: a()(eI.N1, { [eI.X_]: n }),
            children: [
                (0, i.jsx)(er.Ay.Icon, { icon: W.E, disabled: !0, "aria-label": ex.intl.string(ex.t.TYZgzW) }),
                (0, i.jsx)(er.Ay.Title, { children: ex.intl.string(ex.t.TYZgzW) }),
            ],
        });
    }),
    ev = l.memo(function (e) {
        let { channel: t, participant: s, tempDisableOnInit: a = !1 } = e,
            r = l.useRef(null),
            [c, d] = l.useState(a);
        (0, g.Ay)(() => {
            if (!c) return;
            let e = setTimeout(() => d(!1), 1e3);
            return () => clearTimeout(e);
        });
        let u = t.getGuildId();
        F()(null != u, "Channel cannot be guildless");
        let { isMobile: h, status: A } = (0, o.cf)([eu.A], () => ({
                isMobile: eu.A.isMobileOnline(s.user.id),
                status: eu.A.getStatus(s.user.id, u),
            })),
            p = (0, o.bG)([ed.Ay], () => ed.Ay.getMember(u, s.user.id)),
            x = (0, eo.gn)(t.guild_id, p?.userId, p?.colorStrings ?? null),
            m = l.useMemo(() => ({ [u]: [s.user.id] }), [u, s.user.id]);
        (0, ea.Eq)(m, "RequestToSpeakSidebar");
        let f = s.rtsState === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function E(e) {
            null != u &&
                (0, el.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("463317"),
                        n.e("893190"),
                        n.e("189673"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("229787"),
                        n.e("576665"),
                        n.e("624198"),
                        n.e("245996"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("307059"),
                        n.e("449145"),
                        n.e("343116"),
                        n.e("139103"),
                        n.e("470314"),
                        n.e("70515"),
                        n.e("404524"),
                        n.e("654148"),
                        n.e("666939"),
                        n.e("717334"),
                        n.e("184841"),
                    ]).then(n.bind(n, 107632));
                    return (n) => (0, i.jsx)(e, { ...n, user: s.user, guildId: u, channel: t, showMediaItems: !0 });
                });
        }
        return (0, i.jsxs)("div", {
            className: eI.fn,
            children: [
                (0, i.jsx)(ec.A, {
                    targetElementRef: r,
                    user: s.user,
                    guildId: t.guild_id,
                    channelId: t.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) =>
                        (0, i.jsxs)(Q.D, {
                            innerRef: r,
                            className: eI.$u,
                            onContextMenu: E,
                            ...e,
                            children: [
                                (0, i.jsx)(es.A, {
                                    size: X._3.SIZE_40,
                                    className: eI.RB,
                                    user: s.user,
                                    isMobile: h,
                                    status: A,
                                }),
                                (0, i.jsxs)("div", {
                                    className: eI.kH,
                                    children: [
                                        (0, i.jsx)(Z.g, {
                                            name: s.userNick,
                                            colorString: p?.colorString ?? null,
                                            colorStrings: x,
                                            className: eI.F8,
                                        }),
                                        (0, i.jsx)($.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: (function (e) {
                                                if ((0, ep.mv)(e.user)) return ex.intl.string(ex.t.VaCdhQ);
                                                let t = e.member?.joinedAt;
                                                return null == t
                                                    ? ex.intl.string(ex.t.CQmzib)
                                                    : null != e.member && e.member.roles.length > 0
                                                      ? (e.role?.name ?? ex.intl.string(ex.t["97/NdO"]))
                                                      : new Date().getTime() - Date.parse(t) < eg
                                                        ? ex.intl.string(ex.t.IKE48n)
                                                        : ex.intl.string(ex.t.u0gUWt);
                                            })(s),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
                (0, i.jsxs)("div", {
                    className: eI.UD,
                    children: [
                        (0, i.jsx)(J.m, {
                            text: f ? ex.intl.string(ex.t.h9rsTd) : ex.intl.string(ex.t.f0T7hI),
                            asContainer: !0,
                            children: (0, i.jsx)(ee.K, {
                                onClick: function () {
                                    (0, eh.lL)(t, s.user.id, !1);
                                },
                                disabled: f || c,
                                icon: et.L,
                                variant: "secondary",
                                "aria-label": f ? ex.intl.string(ex.t.h9rsTd) : ex.intl.string(ex.t.f0T7hI),
                            }),
                        }),
                        (0, i.jsx)(J.m, {
                            text: ex.intl.string(ex.t.moABMy),
                            asContainer: !0,
                            children: (0, i.jsx)(ee.K, {
                                "aria-label": ex.intl.string(ex.t.moABMy),
                                onClick: function () {
                                    (0, eh.lL)(t, s.user.id, !0);
                                },
                                icon: Y.P,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    eb = l.memo(function (e) {
        let { channel: t } = e,
            [n, s] = (function (e) {
                let t = (0, o.bG)([ef.A], () => ef.A.getChannel(e), [e]),
                    n = eE.MJ(eC.xBc.REQUEST_TO_SPEAK, t),
                    [i, s] = l.useState(n);
                return (
                    n !== i && s(n),
                    [
                        i,
                        function (e) {
                            null != t && (s(e), (0, eh.b6)(t, eC.xBc.REQUEST_TO_SPEAK, e));
                        },
                    ]
                );
            })(t.id);
        return (0, i.jsx)(en.d, { label: ex.intl.string(ex.t.GYCh0W), checked: n, onChange: s });
    }),
    eO = l.memo(function () {
        return (0, i.jsxs)("div", {
            className: eI.y7,
            children: [
                (0, i.jsx)(eS, {}),
                (0, i.jsx)($.E, {
                    className: eI.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["7R24mX"]),
                }),
                (0, i.jsx)($.E, {
                    className: eI.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ex.intl.string(ex.t.Rpr2s0),
                }),
            ],
        });
    });
function eR(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        s = (0, B.J2)(t.id),
        r = [
            +!!(0, o.bG)([k.A], () => k.A.can(e_.xB.MANAGE_CHANNELS, t) || k.A.can(e_.xB.MANAGE_ROLES, t)),
            Math.max(1, s.length),
        ];
    return (0, i.jsxs)("div", {
        className: a()(eI.kL, { [eI.X_]: l }),
        children: [
            (0, i.jsx)(ey, { toggleRequestToSpeakSidebar: n, chatOpen: l }),
            (0, i.jsx)(ei.OZ, {
                className: eI.hQ,
                sections: r,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === s.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: l } = e;
                    switch (n) {
                        case 0:
                            return (0, i.jsx)(eb, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === s.length) return (0, i.jsx)(eO, {}, "participants-empty");
                            let e = s[l];
                            return (0, i.jsx)(ev, { channel: t, participant: e, tempDisableOnInit: !0 }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, i.jsx)(
                              $.E,
                              {
                                  className: eI.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      s.length > 0
                                          ? ex.intl.formatToPlainString(ex.t["5z7q5a"], { numHands: s.length })
                                          : ex.intl.string(ex.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
var eL = n(297264),
    eP = n(821609),
    eU = n(730852),
    ew = n(164617),
    eM = n(47167),
    ek = n(202384),
    eG = n(51758),
    eD = n(175203),
    eV = n(426660),
    ez = n(403362),
    eB = n(110618),
    eq = n(446600),
    eK = n(698441),
    eH = n(520006);
function eF(e) {
    let {
            stream: t,
            applicationId: n,
            channel: l,
            exitFullScreen: s,
            appContext: a,
            analyticsLocation: r,
            className: c,
            size: d = "sm",
        } = e,
        u = l?.getGuildId(),
        h = l?.id,
        A = (0, o.bG)([M.A], () => (null != u ? M.A.getGuild(u) : null), [u]),
        p = (0, o.bG)([eK.Ay], () => eK.Ay.getActiveEventByChannel(h), [h]);
    if (!(null != A && null != l && k.A.can(eC.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let x = ex.intl.string(ex.t.VINpSK);
    return (
        null != t ? (x = ex.intl.string(ex.t["6VQaqd"])) : null != n && (x = ex.intl.string(ex.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: c,
            children: (0, i.jsx)(eP.$, {
                size: d,
                variant: "secondary",
                text: x,
                onClick: () => {
                    (F()(null != A, "guild cannot be null"),
                        F()(null != l, "channel cannot be null"),
                        (0, eH.X)({
                            guild: A,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: a,
                            exitFullScreen: s,
                            analyticsLocation: r,
                            guildScheduledEvent: p,
                            source: eC.PE1.STAGE_CHANNEL,
                        }));
                },
            }),
        })
    );
}
function eY(e) {
    let { channel: t } = e,
        n = (0, S.Us)(),
        l = (0, o.bG)([k.A], () => k.A.can(eC.xBc.CREATE_INSTANT_INVITE, t)),
        s = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id)),
        a = (0, o.bG)([eq.A], () => eq.A.getStageInstanceByChannel(t.id)),
        r = l || a?.invite_code != null;
    return null != s && r
        ? (0, i.jsx)(eF, { size: "md", channel: t, appContext: n, analyticsLocation: eC.liQ.GUILD_CHANNEL })
        : null;
}
var eW = n(853325);
let eQ = function (e) {
    let { participants: t, channel: n, hasConnectPermission: s } = e,
        a = (0, eG.H)(n.guild_id),
        r = l.useCallback(() => {
            a ? (0, ek.Ze)(n.guild_id, () => eU.default.selectVoiceChannel(n.id)) : eU.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, a]),
        c = t.filter((e) => e.type === q.wY.VOICE),
        d = (0, eM.Ay)(n),
        u = 4 === c.length ? 2 : 3,
        h = (0, o.yK)([E.A], () => c.map((e) => E.A.getParticipant(n.id, e.id)).filter(ez.Vq), [n.id, c]);
    return (0, i.jsxs)("div", {
        className: eW.kL,
        children: [
            (0, i.jsx)(eV.A, {}),
            (0, i.jsx)("div", {
                className: eW.os,
                style: { maxWidth: 168 * u },
                children: h
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            eD.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: eW.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: ew.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(eL.D, { className: eW.HA, variant: "heading-xxl/normal", children: d }),
            (0, i.jsx)("div", {
                className: eW.Nu,
                children: (0, i.jsx)($.E, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, eB.DO)(n, c),
                }),
            }),
            (0, i.jsxs)("div", {
                className: eW.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: eW.PD,
                        children: (0, i.jsx)(eP.$, {
                            variant: "overlay-primary",
                            text: s ? ex.intl.string(ex.t["7vb2cc"]) : ex.intl.string(ex.t.TVBCKZ),
                            onClick: r,
                            disabled: !s,
                        }),
                    }),
                    (0, i.jsx)(eY, { channel: n }),
                ],
            }),
        ],
    });
};
var eX = n(661531),
    eZ = n(831544),
    e$ = n(177953),
    eJ = n(689874),
    e0 = n(878678),
    e1 = n(742589),
    e9 = n(977851),
    e5 = n(174459),
    e2 = n(776781),
    e4 = n(233993),
    e3 = n(132500),
    e7 = n(280056),
    e6 = n(204651),
    e8 = n(116108);
function te(e) {
    let { width: t = 24, height: n = 24, isBadged: s = !1 } = e,
        [a] = l.useState(() => (0, e3.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        s && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", { mask: `url(#${a})`, children: (0, i.jsx)(e7.c, {}) }),
        ],
    });
}
function tt(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: a()(e8.v, t),
        children: [
            (0, i.jsx)(te, { isBadged: l }),
            l ? (0, i.jsx)($.E, { className: e8.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function tn(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: s,
            numRequestToSpeak: a,
            onClick: r,
            ...o
        } = e,
        c = l.useCallback(() => {
            (r?.(), t());
        }, [r, t]);
    return (0, i.jsx)(e6.A, {
        onClick: c,
        label: n ? ex.intl.string(ex.t.gKGz7A) : ex.intl.string(ex.t.ImQ4dW),
        className: s,
        iconComponent: () => (0, i.jsx)(tt, { numRequestToSpeak: a, className: s }),
        ...o,
    });
}
var ti = n(96566);
function tl(e) {
    let t = (0, o.bG)([E.A], () => E.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, B.uy)(e.id),
        i = (0, B.zy)(e.id, q.ip.AUDIENCE),
        l = (0, ti.qT)(e.id),
        s = (0, o.bG)([M.A], () => M.A.getGuild(e.guild_id), [e.guild_id]),
        a = (0, o.bG)([k.A], () => k.A.can(e4.QY, e), [e]),
        r = s?.maxStageVideoChannelUsers ?? 0,
        c = !(null != s && s.features.has(eC.GuildFeatures.COMMUNITY)) && r > eC.uaN;
    return l && !t && a && !c && n + i >= r;
}
var ts = n(202541),
    ta = n(903489);
function tr(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, f.Ay)(m.A.VOICE_CHANNEL_HEADER),
        c = (0, o.bG)([E.A], () => E.A.getChatOpen(t.id), [t.id]),
        d = (0, e2.Ni)(t.id),
        u = (0, B.zy)(t.id, q.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, i.jsxs)(f.f5, {
        value: s,
        children: [
            (0, i.jsx)(eJ.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && d
                ? (0, i.jsx)("div", {
                      className: a()(ta.x6, { [ta.vc]: c }),
                      children: (0, i.jsx)(tn, {
                          toggleRequestToSpeakSidebar: function () {
                              (c && A.A.updateChatOpen(t.id, !1), (0, T.X)(r, T.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n());
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: u,
                      }),
                  })
                : null,
            !c &&
                (0, i.jsx)("div", {
                    className: a()(ta.x6, { [ta.vc]: l }),
                    children: (0, i.jsx)(e9.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: ta.iA,
                    }),
                }),
        ],
    });
}
function to(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        r = (0, eM.Ay)(t),
        c = (0, o.bG)([eq.A], () => eq.A.getStageInstanceByChannel(t.id)),
        d = (0, B.uy)(t.id),
        h = (0, B.zy)(t.id, q.ip.AUDIENCE),
        p = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]),
        x = p?.maxStageVideoChannelUsers ?? 0,
        g =
            null != p && p.features.has(eC.GuildFeatures.COMMUNITY)
                ? x < eC.p2C
                : p?.premiumTier !== eC.TVA.TIER_3 && x <= eC.nyz,
        m = tl(t),
        f = (0, o.bG)([k.A], () => k.A.can(e4.QY, t));
    function E() {
        (A.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
            e5.default.track(eC.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: t.guild_id,
                type: ts.e.VIDEO_STAGE_LIMIT,
                is_moderator: f,
                action: ts.pd.DISMISS,
            }));
    }
    let C = { canModerate: f, audienceCount: h, channel: t, speakerCount: d },
        j = l.useRef(C);
    (l.useEffect(() => {
        j.current = C;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = j.current;
            m &&
                e5.default.track(eC.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: ts.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [m]));
    let N = (0, i.jsx)(u.N, {
        theme: eC.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(er.Ay, {
                toolbar: (0, i.jsx)(tr, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s, channel: t }),
                onDoubleClick: e1.I,
                transparent: !0,
                className: a()(e, ta.lF),
                children: [
                    (0, i.jsx)(er.Ay.Icon, {
                        icon: ej.q,
                        disabled: !0,
                        "aria-label": ex.intl.string(ex.t.EErMzA),
                        className: ta.Kk,
                        color: null != c ? eX.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(er.Ay.Title, { className: ta.HA, wrapperClassName: ta.KD, children: c?.topic ?? r }),
                    (0, i.jsx)(er.Ay.Divider, { className: ta.yF }),
                    (0, i.jsxs)(er.Ay.Title, {
                        children: [
                            (0, i.jsx)(eZ.MicrophoneIcon, { size: "xs", color: eX.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: ta.N_,
                                children: ex.intl.format(ex.t.chmM9N, { count: d }),
                            }),
                            (0, i.jsx)(e$.n, { size: "xs", className: ta.Kk, color: "currentColor" }),
                            (0, i.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: ta.N_,
                                children: ex.intl.format(ex.t["+v2pN2"], { count: h }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return m
        ? (0, i.jsxs)("div", {
              children: [
                  N,
                  (0, i.jsxs)("div", {
                      className: ta.bp,
                      children: [
                          (0, i.jsx)(tc, {}),
                          (0, i.jsxs)("div", {
                              className: ta.Qq,
                              children: [
                                  (0, i.jsx)($.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: g ? ex.intl.string(ex.t["T+zF9M"]) : ex.intl.string(ex.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)($.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: g ? ex.intl.string(ex.t.Izgpmv) : ex.intl.string(ex.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: ta.Uo,
                              children: g
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(eP.$, {
                                                onClick: E,
                                                size: "sm",
                                                variant: "secondary",
                                                text: ex.intl.string(ex.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(eP.$, {
                                                variant: "expressive",
                                                onClick: function () {
                                                    ((0, e0.K4)({
                                                        guildId: t.guild_id,
                                                        location: { section: eC.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        e5.default.track(eC.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: ts.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: f,
                                                            action: ts.pd.BOOST,
                                                        }));
                                                },
                                                size: "sm",
                                                text: ex.intl.string(ex.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(eP.$, {
                                        variant: "primary",
                                        onClick: E,
                                        size: "sm",
                                        text: ex.intl.string(ex.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : N;
}
function tc() {
    return (0, i.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        children: [
            (0, i.jsxs)("g", {
                clipPath: "url(#clip0_595_59940)",
                children: [
                    (0, i.jsx)("path", {
                        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
                        fill: "url(#paint0_linear_595_59940)",
                    }),
                    (0, i.jsx)("path", {
                        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
                        fill: "white",
                    }),
                    (0, i.jsx)("path", {
                        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, i.jsxs)("defs", {
                children: [
                    (0, i.jsxs)("linearGradient", {
                        id: "paint0_linear_595_59940",
                        x1: "2.4046e-06",
                        y1: "35.2166",
                        x2: "35.7182",
                        y2: "-1.45185",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, i.jsx)("stop", { stopColor: "#3E70DD" }),
                            (0, i.jsx)("stop", { offset: "1", stopColor: "#B377F3" }),
                        ],
                    }),
                    (0, i.jsx)("clipPath", {
                        id: "clip0_595_59940",
                        children: (0, i.jsx)("rect", { width: "36", height: "36", fill: "white" }),
                    }),
                ],
            }),
        ],
    });
}
var td = n(456412),
    tu = n(63995);
n(321073);
var th = n(59520),
    tA = n(996439),
    tp = n(562708),
    tx = n(428678),
    tg = n(952270),
    tm = n(104510),
    tf = n(139286),
    tE = n(480890),
    tC = n(562153),
    tj = n(806931),
    tN = n(314243);
let tT = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: s, isBlocked: a, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: tN.FS,
            children: [
                a ? (0, i.jsx)(tx.K, { size: "lg", className: tN.Q6, color: eX.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(tg.EyeSlashIcon, { size: "lg", className: tN.Q6 }) : null,
                (0, i.jsx)($.E, {
                    className: tN.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: tC.Ay.getName(t, n, l),
                }),
                s ? (0, i.jsx)(tm._, { className: tN.EH, color: eX.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    tS = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: s } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            h = d === em.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: tN.H,
                    children: [
                        h &&
                            (0, i.jsx)(W.E, {
                                size: "md",
                                color: "currentColor",
                                className: a()(tN.Kk, { [tN.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(tN.my, { [tN.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(tT, { guildId: n, channelId: l.id, user: r, isPremium: s, isBlocked: o, isIgnored: c }),
            ],
        });
    });
function t_() {
    return (0, i.jsx)("div", { className: tN.j8 });
}
let tI = l.memo(function (e) {
    let { participant: t, channel: s } = e,
        { user: r, blocked: c } = t,
        d = s.getGuildId(),
        u = U.default.getId(),
        { newestAnalyticsLocation: h } = (0, f.Ay)(m.A.AUDIENCE_TILE),
        A = (0, S.Us)(),
        p = (0, o.bG)([ed.Ay], () => null != d && ed.Ay.getMember(d, r.id)?.premiumSince != null, [d, r.id]),
        x = l.useRef(null);
    F()(null != d, "Channel cannot be guildless");
    let g = l.useCallback(
        (e) => {
            ((0, tf.x)({
                type: tp.ImpressionTypes.MENU,
                name: tp.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: { location: "AudienceTile", is_tile_owner: r.id === u, tile_type: tj.qs.USER },
            }),
                (0, el.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("463317"),
                            n.e("893190"),
                            n.e("189673"),
                            n.e("882073"),
                            n.e("797558"),
                            n.e("691994"),
                            n.e("229787"),
                            n.e("576665"),
                            n.e("624198"),
                            n.e("245996"),
                            n.e("529422"),
                            n.e("823427"),
                            n.e("307059"),
                            n.e("449145"),
                            n.e("343116"),
                            n.e("139103"),
                            n.e("470314"),
                            n.e("70515"),
                            n.e("404524"),
                            n.e("654148"),
                            n.e("666939"),
                            n.e("717334"),
                            n.e("184841"),
                        ]).then(n.bind(n, 107632));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                user: r,
                                guildId: d,
                                channel: s,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, tE.s)("GuildChannelUserContextMenu", h, {
                                    targetUserId: r.id,
                                    tileType: tj.qs.USER,
                                }),
                            });
                    },
                    { context: A },
                ));
        },
        [r, u, A, d, s, h],
    );
    return (0, i.jsx)(ec.A, {
        targetElementRef: x,
        user: r,
        guildId: s.guild_id,
        channelId: s.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(Q.D, {
                innerRef: x,
                className: a()(tN.iA, { [tN.wP]: p || c, [tN.fP]: p && c }),
                onContextMenu: g,
                ...e,
                children: (0, i.jsx)(tS, { participant: t, guildId: d, channel: s, isPremium: p }),
            }),
    });
});
var ty = n(784227);
let tv = l.memo(function (e) {
    let { channel: t, participants: n, maxTiles: l } = e;
    if (0 === n.length) return null;
    let s = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            s.push((0, i.jsx)(tI, { channel: t, participant: l }, l.id));
        } else s.push((0, i.jsx)(t_, {}, e));
    return (0, i.jsx)("div", { className: ty.l, children: s });
});
var tb = n(446837),
    tO = n(201001),
    tR = n(473530);
let tL = (0, tO.$)(tR.qZ, tR.Rv, "", window.ResizeObserver ?? tb.t);
var tP = n(844222),
    tU = n(401843),
    tw = n(643501),
    tM = n(652896),
    tk = n(279250),
    tG = n(51092),
    tD = n(326567),
    tV = n(616356),
    tz = n(977997),
    tB = n(312006),
    tq = n(25578),
    tK = n(756872);
function tH(e) {
    let { aspectRatio: t, className: n, children: l, width: s, ...a } = e,
        r = tq.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: s },
        className: tK.A,
        children: (0, i.jsxs)("div", {
            className: tK.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(eD.Ay, { className: n, videoComponent: r, width: s, ...a }), l],
        }),
    });
}
var tF = n(953727);
function tY(e) {
    let { width: t = 32, height: n = 32, color: l = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsxs)("svg", {
        ...(0, tF.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 32 32",
        children: [
            (0, i.jsx)("rect", { width: "32", height: "32", rx: "16", fill: l }),
            (0, i.jsx)("path", {
                d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                className: s,
            }),
        ],
    });
}
var tW = n(90075);
let tQ = function () {
    return (0, i.jsx)(J.m, {
        text: ex.intl.string(ex.t.GMZqSi),
        children: (0, i.jsx)("div", {
            className: tW.k,
            children: (0, i.jsx)(tY, { color: eX.A.unsafe_rawColors.WHITE.css }),
        }),
    });
};
var tX = n(145131);
let tZ = 16 / 9;
function t$(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: s,
            guildId: a,
            user: r,
            width: o,
            isModerator: c,
            onContextMenu: d,
            popoutType: u,
        } = e,
        h = l.useRef(null),
        { reducedMotion: A } = l.useContext(tP.C),
        { blocked: p, ignored: x, id: g } = t;
    return (0, i.jsx)(ec.A, {
        targetElementRef: h,
        user: r,
        guildId: a,
        channelId: s.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(Q.D, {
                innerRef: h,
                onContextMenu: (e) => d(n, e),
                ...e,
                children: (0, i.jsx)(
                    tH,
                    {
                        participant: n,
                        aspectRatio: tZ,
                        blocked: p,
                        ignored: x,
                        channel: s,
                        className: tX.V,
                        inCall: !0,
                        popoutType: u,
                        pulseSpeakingIndicator: !A.enabled,
                        width: o,
                        onContextMenu: d,
                        children: c && (0, i.jsx)(tQ, {}),
                    },
                    g,
                ),
            }),
    });
}
function tJ(e) {
    let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: s,
            width: a,
            isModerator: r,
            onContextMenu: c,
            popoutType: d,
        } = e,
        { reducedMotion: u } = l.useContext(tP.C),
        { id: h, blocked: p, ignored: x } = t,
        g = (0, o.yK)([tV.A], () => tV.A.getAllActiveStreams(), []),
        { selectedParticipant: m, largeStream: f } = (0, o.cf)([E.A], () => ({
            selectedParticipant: null != s ? E.A.getSelectedParticipant(s.id) : null,
            largeStream: null != s && E.A.getStageStreamSize(s.id),
        })),
        C = l.useCallback(
            (e, t) => {
                if (
                    e.type === tj.lp.STREAM &&
                    0 === g.filter((t) => (0, tM._z)(t) === e.id && t.state !== eC.XYD.ENDED).length
                ) {
                    if (!(0, tk.eo)(s, tz.A, M.A, k.A, tw.default)[0]) return;
                    (0, tU.A9)((0, tM.Iy)(e.id), { forceMultiple: t.shiftKey });
                }
                m?.id === e.id
                    ? f
                        ? (A.A.selectParticipant(s.id, null), A.A.updateStageStreamSize(s.id, !1))
                        : A.A.updateStageStreamSize(s.id, !0)
                    : (A.A.updateStageStreamSize(s.id, !1), A.A.selectParticipant(s.id, e.id));
            },
            [g, s, m, f],
        );
    return (0, i.jsx)(
        tH,
        {
            participant: n,
            aspectRatio: tZ,
            fit: n.type === tj.lp.USER ? tG.$.COVER : void 0,
            blocked: p,
            ignored: x,
            channel: s,
            className: tX.V,
            inCall: !0,
            popoutType: d,
            onClick: C,
            onContextMenu: c,
            pulseSpeakingIndicator: !u.enabled,
            width: a,
            children: r && n.type === tj.lp.USER && (0, i.jsx)(tQ, {}),
        },
        h,
    );
}
let t0 = l.memo(function (e) {
    let { participant: t, channel: l, width: s, popoutType: a } = e,
        { newestAnalyticsLocation: r } = (0, f.Ay)(m.A.STAGE_TILE),
        c = (0, S.Us)(),
        d = l.getGuildId(),
        u = U.default.getId();
    F()(null != d, "Channel cannot be guildless");
    let { user: h } = t,
        A = (0, o.bG)([E.A], () => E.A.getParticipant(l.id, t.id), [l.id, t.id]),
        p = (0, o.bG)([tB.Ay], () => tB.Ay.isModerator(h.id, l.id), [l.id, h.id]);
    if (null == A || A.type === tj.lp.ACTIVITY) return null;
    function x(e) {
        (0, tf.x)({
            type: tp.ImpressionTypes.MENU,
            name: tp.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: { location: "StageTile", is_tile_owner: h.id === u, tile_type: e },
        });
    }
    function g(e, t, s, a) {
        if (null != d)
            switch (e.type) {
                case tj.lp.HIDDEN_STREAM:
                case tj.lp.STREAM:
                    (x(tj.qs.STREAM),
                        (0, el.L3)(
                            t,
                            async () => {
                                let { default: t } = await Promise.all([
                                    n.e("189673"),
                                    n.e("245996"),
                                    n.e("529422"),
                                    n.e("58315"),
                                    n.e("870553"),
                                ]).then(n.bind(n, 744960));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        appContext: c,
                                        exitFullscreen: () => {},
                                        onInteraction: (0, tE.s)("StreamContextMenu", r, {
                                            entrypoint: a,
                                            targetUserId: h.id,
                                            tileType: tj.qs.STREAM,
                                        }),
                                    });
                            },
                            { context: c },
                        ));
                    return;
                case tj.lp.USER:
                default:
                    if ((x(tj.qs.USER), s))
                        return (0, tD.r)(t, h, l, { context: c }, (e, t) =>
                            (0, tE.Y)({
                                menuName: e,
                                menuItemProps: t,
                                entrypoint: tj.GK.THREE_DOT,
                                targetUserId: h.id,
                                location: r,
                                tileType: tj.qs.USER,
                            }),
                        );
                    (0, el.L3)(
                        t,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("463317"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("229787"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("245996"),
                                n.e("529422"),
                                n.e("823427"),
                                n.e("307059"),
                                n.e("449145"),
                                n.e("343116"),
                                n.e("139103"),
                                n.e("470314"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: h,
                                    guildId: d,
                                    channel: l,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, tE.s)("GuildChannelUserContextMenu", r, {
                                        targetUserId: h.id,
                                        tileType: tj.qs.USER,
                                    }),
                                });
                        },
                        { context: c },
                    );
            }
    }
    return A.type !== tj.lp.USER || A.voiceState?.selfVideo
        ? (0, i.jsx)(tJ, {
              stageParticipant: t,
              rtcParticipant: A,
              channel: l,
              guildId: d,
              user: h,
              width: s,
              isModerator: p,
              onContextMenu: g,
              popoutType: a,
          })
        : (0, i.jsx)(t$, {
              stageParticipant: t,
              rtcParticipant: A,
              channel: l,
              guildId: d,
              user: h,
              width: s,
              isModerator: p,
              onContextMenu: g,
              popoutType: a,
          });
});
var t1 = n(239131);
let t9 = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: s, popoutType: a } = e;
    return (0, i.jsx)("div", {
        className: t1.q,
        children: n.map((e) =>
            e.id === s?.id ? null : (0, i.jsx)(t0, { channel: t, participant: e, width: l, popoutType: a }, e.id),
        ),
    });
});
var t5 = n(847374),
    t2 = n(402216),
    t4 = n(97808),
    t3 = n(717558),
    t7 = n(636585),
    t6 = n(486020),
    t8 = n(799656);
function ne(e) {
    let { channel: t, speaker: s, className: r } = e,
        o = l.useRef(null),
        { newestAnalyticsLocation: c } = (0, f.Ay)(),
        d = (0, S.Us)(),
        { reducedMotion: u } = l.useContext(tP.C),
        h = (0, t3.A)({ userId: s.id }),
        A = null != s.member ? (0, t6.xT)(s.member) : null;
    function p(e) {
        (0, el.L3)(
            e,
            async () => {
                let { default: e } = await Promise.all([
                    n.e("463317"),
                    n.e("893190"),
                    n.e("189673"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("691994"),
                    n.e("229787"),
                    n.e("576665"),
                    n.e("624198"),
                    n.e("245996"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("307059"),
                    n.e("449145"),
                    n.e("343116"),
                    n.e("139103"),
                    n.e("470314"),
                    n.e("70515"),
                    n.e("404524"),
                    n.e("654148"),
                    n.e("666939"),
                    n.e("717334"),
                    n.e("184841"),
                ]).then(n.bind(n, 107632));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: s.user,
                        guildId: t.guild_id,
                        channel: t,
                        showMediaItems: !0,
                        showStageChannelItems: !0,
                        showChatItems: !1,
                        onInteraction: (0, tE.s)("GuildChannelUserContextMenu", c),
                    });
            },
            { context: d },
        );
    }
    return (0, i.jsx)(ec.A, {
        targetElementRef: o,
        user: s.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(J.m, {
                targetElementRef: o,
                __unsupportedReactNodeAsText: s.userNick,
                position: "bottom",
                children: (0, i.jsx)(Q.D, {
                    ...e,
                    innerRef: o,
                    onClick: (t) => {
                        (t.stopPropagation(), e.onClick(t));
                    },
                    onContextMenu: p,
                    children: (0, i.jsx)(t4.eu, {
                        src: A ?? s.user.getAvatarURL(t.guild_id, 24),
                        size: X._3.SIZE_24,
                        className: a()(t8.my, r),
                        "aria-label": s.userNick,
                        isSpeaking: h && !u.enabled,
                    }),
                }),
            }),
    });
}
function nt(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(t7.A, {
        className: t8.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(ne, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(t8.$U, t), children: e }, n),
    });
}
var nn = n(784269);
let ni = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: s,
        collapsed: r,
        speakers: o,
        channel: c,
        isStreamLive: d,
    } = e;
    return (0, i.jsxs)(Q.D, {
        onClick: l,
        className: a()(nn.kL, s),
        children: [
            null == o
                ? (0, i.jsx)(e$.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: nn.Vo })
                : (0, i.jsx)(eZ.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: nn.Vo,
                  }),
            (0, i.jsxs)($.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: nn.Qq,
                children: [t, " \u2014 ", n],
            }),
            r &&
                null != c &&
                null != o &&
                o.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(nt, { channel: c, speakers: o }), d && (0, i.jsx)(t2.Ay, {})],
                }),
            (0, i.jsx)(t5.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(nn.mw, { [nn.VU]: r }),
            }),
        ],
    });
});
var nl = n(676553);
function ns(e) {
    return e.type === q.wY.VOICE;
}
let na = (0, td.A)(function (e) {
    let t,
        n,
        { channel: s, width: a, onScroll: c, popoutType: d } = e,
        {
            selectedParticipantId: u,
            largeStream: h,
            chatOpen: A,
        } = (0, o.cf)(
            [E.A],
            () => ({
                selectedParticipantId: E.A.getSelectedParticipantId(s.id),
                largeStream: E.A.getStageStreamSize(s.id),
                chatOpen: E.A.getChatOpen(s.id),
            }),
            [s.id],
        ),
        p = (0, B.uy)(s.id),
        x = (0, B.zy)(s.id, q.ip.AUDIENCE),
        g = (0, o.bG)([tu.A], () => (null != u ? tu.A.getParticipant(s.id, u) : null)),
        m = (0, B.E5)(s.id, q.ip.SPEAKER),
        f = m.filter(ns),
        C = null != m.find((e) => e.type === q.wY.STREAM),
        j = Math.floor((a - 32) / 102),
        N = a < 424 ? 1 : a < 624 ? 2 : a < 824 || A ? 3 : 4,
        T = { [q.ip.SPEAKER]: N, [q.ip.AUDIENCE]: j, [q.ip.SELECTED]: 1 },
        S = (function (e) {
            let t = (0, B.zy)(e, q.ip.AUDIENCE),
                [n, i] = l.useState(!1);
            return (
                l.useEffect(() => {
                    t > 100 ? i(!0) : t < 75 && i(!1);
                }, [t]),
                5e3 * !!n
            );
        })(s.id),
        [_, I] = (function (e, t, n) {
            let i,
                s,
                a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                c =
                    ((i = (0, o.bG)([tu.A], () => [e, tu.A.getParticipantsVersion(e)], [e], tA.D)),
                    (s = (0, o.bG)([E.A], () => E.A.getSelectedParticipantId(e), [e])),
                    l.useMemo(() => {
                        let n = [],
                            l = [],
                            o = -1,
                            c = [];
                        if (a)
                            for (let t of tu.A.getMutableParticipants(e, q.ip.SPEAKER))
                                if (t.type === q.wY.STREAM) (t.id !== s && c.push(t), o++);
                                else break;
                        function d(e, t, i) {
                            let a = i ? e.filter((e, t) => e.id !== s && t > o) : e,
                                c = (0, r.chunk)(a, t);
                            (l.push(c), n.push(c.length));
                        }
                        let u = null != s ? tu.A.getParticipant(e, s) : null;
                        return (
                            u?.speaker ? d([u], 1, !1) : d([], 1, !1),
                            [q.ip.SPEAKER, q.ip.AUDIENCE].forEach((e) => {
                                d(tu.A.getMutableParticipants(i[0], e), t[e], e === q.ip.SPEAKER);
                            }),
                            d(c, 1, !1),
                            [n, l]
                        );
                    }, [i, t, s, a, e])),
                [d, u] = c,
                [h, A] = (0, th.J)(c, n, [t[q.ip.AUDIENCE]]);
            return [
                [d[3 * !!a], d[1], h[2]],
                [u[3 * !!a], u[1], A[2]],
            ];
        })(s.id, T, S),
        y = [Math.max(_[0] ?? 1, 1), Math.max(_[1] ?? 1, 1), _[2]],
        { speakerTileWidth: v, speakerTileHeight: b } =
            ((n = Math.floor((t = Math.floor(a / N - 8)) / tZ)), { speakerTileWidth: t, speakerTileHeight: n }),
        O = h ? a - 32 : Math.min(a - 64, 3 * v + 8);
    function R(e) {
        return e === _.length - 1 || (0 === x && 1 === e);
    }
    let [L, P] = l.useState(!1),
        [U, w] = l.useState(!1);
    return (0, i.jsx)(tL, {
        sections: y,
        renderSection: function (e) {
            let { section: t } = e;
            return 1 === t
                ? 0 === p
                    ? null
                    : (0, i.jsx)(
                          ni,
                          {
                              participantCount: p,
                              label: ex.intl.string(ex.t.CduOkx),
                              className: nl.wx,
                              onClick: () => P(!L),
                              collapsed: L,
                              speakers: f,
                              channel: s,
                              isStreamLive: C,
                          },
                          `speaker-header-${t}`,
                      )
                : 2 === t
                  ? 0 === x
                      ? null
                      : (0, i.jsx)(
                            ni,
                            {
                                participantCount: x,
                                label: ex.intl.string(ex.t["3foUu5"]),
                                className: nl.wx,
                                onClick: () => w(!U),
                                collapsed: U,
                                channel: s,
                            },
                            `audience-header-${t}`,
                        )
                  : null;
        },
        sectionHeight: function (e) {
            return 48;
        },
        renderRow: function (e) {
            let { section: t, row: n } = e,
                a = I[t][n];
            if (a?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === a.length || null == a[0]) return null;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: nl.Od,
                            children: (0, i.jsx)(t0, { channel: s, participant: a[0], width: O, popoutType: d }),
                        },
                        "selected-participant",
                    );
                case 1:
                    if (L) return null;
                    return (0, i.jsx)(
                        l.Fragment,
                        {
                            children: (0, i.jsx)(t9, {
                                tileWidth: v,
                                channel: s,
                                participants: a,
                                selectedParticipant: g,
                                popoutType: d,
                            }),
                        },
                        `speakers-${t}-${n}`,
                    );
                case 2:
                    if (U) return null;
                    return (0, i.jsx)(tv, { channel: s, participants: a, maxTiles: j }, `audience-${t}-${n}`);
                default:
                    return null;
            }
        },
        rowHeight: function (e) {
            return null == I[e][0] ? 0 : 0 === e ? O / tZ + 8 : 1 === e ? (L ? 0 : b) : 98 * !U;
        },
        renderFooter: function (e) {
            let { section: t } = e;
            return R(t) ? (0, i.jsx)("div", { className: nl.jH }, "bottom-spacer") : null;
        },
        footerHeight: function (e) {
            return 1 === e ? 8 : 0 === e ? 12 : 88 * !!R(e);
        },
        className: nl.XG,
        chunkSize: 60,
        onScroll: c,
    });
});
var nr = n(43105),
    no = n(309796),
    nc = n(666654),
    nd = n(922016),
    nu = n(980707),
    nh = n(477782),
    nA = n(285796),
    np = n(381844),
    nx = n(532676),
    ng = n(432017),
    nm = n(517461),
    nf = n(379257),
    nE = n(306537),
    nC = n(385318),
    nj = n(329072),
    nN = n(183184),
    nT = n(880144),
    nS = n(394412),
    n_ = n(993838),
    nI = n(418208),
    ny = n(47868);
function nv(e) {
    let { className: t, channel: n, highlight: l } = e,
        s = (0, S.Us)();
    return (0, nI.zU)()
        ? null
        : (0, i.jsx)(ny.A, {
              highlight: l ?? !1,
              className: t,
              icon: (0, i.jsx)(ej.q, { size: "custom", color: "currentColor", height: 20, width: 20 }),
              color: eX.A.unsafe_rawColors.GREEN_360.css,
              title: ex.intl.string(ex.t.OYbHfv),
              description: ex.intl.string(ex.t.yXwLMQ),
              onClick: function () {
                  (0, n_.tQ)(n, s);
              },
          });
}
var nb = n(931991),
    nO = n(151476),
    nR = n(405018),
    nL = n(704877),
    nP = n(173660),
    nU = n(105225),
    nw = n(579153),
    nM = n(222692),
    nk = n(246356),
    nG = n(404355),
    nD = n(577062),
    nV = n(970636),
    nz = n(287809),
    nB = n(302884),
    nq = n(30108),
    nK = n(39938),
    nH = n(106044);
function nF(e) {
    let t = (0, o.bG)([U.default], () => U.default.getId());
    return (0, em.Ay)(t, e) === em.zF.ON_STAGE;
}
var nY = n(505543);
function nW(e) {
    let t = (0, o.bG)([U.default], () => U.default.getId()),
        n = (0, em.Ay)(t, e.id),
        i = n === em.zF.REQUESTED_TO_SPEAK || n === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [s, a] = l.useState(i);
    return (
        l.useEffect(() => {
            a(i);
        }, [i]),
        [
            s,
            function () {
                (0, nI.Cf)(e.id)
                    ? nf.A.showAgeVerificationGetStartedModal({ entryPoint: nE.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === em.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, eh.e7)(e, !0) : (0, eh.J7)(e, !s),
                      a(!s));
            },
        ]
    );
}
var nQ = n(328375),
    nX = n(117816);
function nZ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        s = nF(t.id),
        [a, r] = nW(t),
        c = (0, o.bG)([k.A], () => k.A.can(e_.xB.REQUEST_TO_SPEAK, t)),
        d = (0, nI.Vv)(),
        u = (0, nI.tp)(),
        h = l.useRef(null),
        [A, p] = (0, nm.V)("age-verification-stage-popover-dismissed", !1),
        x = l.useContext(v.vG);
    if (s) return null;
    let g = u && !A;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e6.l, {
                ref: h,
                isTrayButton: !0,
                isActive: a,
                label: (function (e, t, n, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : n
                          ? ex.intl.string(ex.t.NzITVo)
                          : e
                            ? ex.intl.string(ex.t.GCimTk)
                            : t
                              ? ex.intl.string(ex.t.hLbG5N)
                              : ex.intl.string(ex.t.e4WMvx);
                })(a, c, d, u, A),
                iconComponent: d ? no._ : W.E,
                onClick: () => {
                    ((0, T.X)(n, T.O.REQUEST_TO_SPEAK, !a),
                        p(!0),
                        d
                            ? nf.A.showAgeVerificationGetStartedModal({ entryPoint: nE.q1.STAGE_CHANNEL_RAISE_HAND })
                            : r());
                },
                color: a ? "green" : void 0,
                disabled: !c && !a,
            }),
            g &&
                (0, i.jsx)(nr.A, {
                    targetElementRef: h,
                    graphic: { type: "image", src: nX.A },
                    gradientColor: "blue",
                    title: ex.intl.string(ex.t.zvubnM),
                    body: void 0,
                    shouldShow: !x,
                    actions: [
                        {
                            text: ex.intl.string(ex.t.KXVgjt),
                            onClick: () => {
                                (nf.A.showAgeVerificationGetStartedModal({
                                    entryPoint: nE.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    p(!0));
                            },
                        },
                    ],
                    onRequestClose: () => p(!0),
                }),
        ],
    });
}
let n$ = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: nQ.kL,
        children: [
            (0, i.jsxs)("div", {
                className: nQ.qi,
                children: [
                    (0, i.jsx)(n9, { channelId: t.id }),
                    n ? (0, i.jsx)(nZ, { channel: t }) : null,
                    (0, i.jsx)(nw.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(n0, { channel: t }),
        ],
    });
});
function nJ(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        l = (0, nI.Vv)();
    return (0, i.jsx)(e6.l, {
        isTrayButton: !0,
        onClick: function () {
            ((0, T.X)(n, T.O.SPEAK_ON_STAGE), l)
                ? nf.A.showAgeVerificationGetStartedModal({ entryPoint: nE.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, eh.e7)(t, !1);
        },
        iconComponent: l ? nc.O : et.L,
        label: ex.intl.string(l ? ex.t.NzITVo : ex.t["8Joh+p"]),
    });
}
function n0(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, S.Us)(),
        { canManageGuildEvent: a } = (0, nb.nr)(t),
        r = (0, o.bG)([eq.A], () => eq.A.getStageInstanceByChannel(t.id), [t.id]),
        c = (0, o.bG)([eK.Ay], () => eK.Ay.getGuildScheduledEvent(r?.guild_scheduled_event_id)),
        { suppress: d } = (0, nP.A)(t),
        u = U.default.getId(),
        [h] = nW(t),
        A = tB.Ay.isModerator(u, t.id),
        p = (0, e2.Ni)(t.id),
        x = a(c),
        { parentAnalyticsLocation: g } = (0, f.Ay)(),
        E = l.useRef(null);
    function C() {
        return (function (e) {
            let { channel: t, appContext: n } = e;
            ((0, T.X)(m.A.VOICE_CONTROL_TRAY, T.O.DISCONNECT), (0, nH.A)(t))
                ? (0, n_.j3)(t, n)
                : eU.default.disconnect();
        })({ channel: t, appContext: s });
    }
    return (A || x) && null != r
        ? (0, i.jsx)(nd.Y, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(nk.A, {
                      children: (0, i.jsx)(nu.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": ex.intl.string(ex.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, tE.s)("End Stage", g, { entrypoint: tj.GK.CARET }),
                          children: (0, i.jsx)(nh.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, n_.$q)(t, s),
                              label: ex.intl.string(ex.t["Fmx5y/"]),
                              icon: nA.a,
                              leadingAccessory: { type: "icon", icon: nA.a },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: nd.Y.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, i.jsx)(nG.A, {
                      ref: E,
                      label: ex.intl.string(ex.t.c6qKwr),
                      onClick: C,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (d && !p) || h
          ? (0, i.jsx)(nG.A, { label: ex.intl.string(ex.t.SMKyih), onClick: C })
          : (0, i.jsx)(nG.A, { label: ex.intl.string(ex.t.c6qKwr), onClick: C });
}
function n1(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)();
    return (0, i.jsx)(e6.l, {
        isTrayButton: !0,
        iconComponent: np.U,
        label: ex.intl.string(ex.t.ezLpY6),
        onClick: function () {
            ((0, T.X)(n, T.O.MOVE_TO_AUDIENCE), (0, eh.Tf)(t));
        },
    });
}
function n9(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        l = (0, o.bG)([nK.A], () => nK.A.isMuted()),
        s = (0, nq.bF)(t),
        a = (0, o.bG)([nK.A], () => nK.A.shouldPlay());
    return s
        ? (0, i.jsx)(e6.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? ex.intl.string(ex.t.ScHlfl) : ex.intl.string(ex.t.zqxfrf),
              iconComponent: l ? nx.C : ng.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  ((0, T.X)(n, T.O.STAGE_MUSIC, l), (0, nB.k)(!l));
              },
          })
        : (0, i.jsx)(e6.l, {
              isTrayButton: !0,
              isActive: a,
              label: a ? ex.intl.string(ex.t.zqxfrf) : ex.intl.string(ex.t.ScHlfl),
              iconComponent: a ? ng.T : nx.C,
              color: a ? "green" : void 0,
              onClick: () => {
                  ((0, T.X)(n, T.O.STAGE_MUSIC, !a), (0, nB.C)(!a));
              },
          });
}
let n5 = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.Ay)(),
        { suppress: s, selfMute: a, mute: r } = (0, nP.A)(t),
        c = (0, e2.Ni)(t.id),
        d = (0, o.bG)([tw.default], () => null != tw.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: u, enabled: h } = (0, nO.A)(),
        A = (0, nL.A)(t),
        { limit: p, reachedLimit: x } = (0, nR.A)(t),
        g = (0, o.bG)([nz.default], () => nz.default.getCurrentUser()),
        m = (0, o.bG)([tq.Ay], () => (0, nT.A)(tq.Ay)),
        C = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t.id, [t.id]),
        j = (0, o.bG)([E.A], () => E.A.getStreamParticipants(t.id)[0], [t.id]),
        N = (0, ti.qT)(t.id),
        T = p > 0,
        S = (x && !N) || (null != j && j.user.id !== g?.id),
        _ = (0, tE.s)("AudioDeviceMenu", n, { entrypoint: tj.GK.CARET }),
        I = l.useRef(null),
        y = l.useRef(null);
    if (null == g) return null;
    let v = (0, i.jsx)(nd.Y, {
        targetElementRef: I,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(nk.A, {
                children: (0, i.jsx)(nj.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, tE.s)("VideoDeviceMenu", n, { entrypoint: tj.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: nd.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(nV.A, {
                ref: I,
                centerButton: !0,
                hasPermission: A,
                enabled: h,
                cameraUnavailable: u,
                onChange: nU.SZ,
                onCameraUnavailable: nM.A,
                channelLimitReached: x,
                channelLimit: p,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: nQ.iE,
        children: [
            C && !s
                ? (0, i.jsxs)("div", {
                      className: nQ.qi,
                      children: [
                          (0, i.jsx)(nd.Y, {
                              targetElementRef: y,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(nk.A, {
                                      children: (0, i.jsx)(nC.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: _,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: nd.Y.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, i.jsx)(nD.A, {
                                      ref: y,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: a,
                                      serverMute: r,
                                      suppress: s,
                                      popoutOpen: l,
                                      onClick: () => (0, nN.A)(r, s, "Stage Channel Controls"),
                                      awaitingRemote: d,
                                  });
                              },
                          }),
                          T && v,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: nQ.qi,
                children: [
                    C && !s && T
                        ? (0, i.jsx)(nU.rP, {
                              channel: t,
                              currentUser: g,
                              exitFullScreen: () => null,
                              canGoLive: m,
                              hasPermission: A,
                              disabled: S,
                          })
                        : null,
                    (0, i.jsx)(n9, { channelId: t.id }),
                    C && (0, i.jsx)(nZ, { channel: t }),
                    C && c && s && (0, i.jsx)(nJ, { channel: t }),
                    C && !s && (0, i.jsx)(n1, { channel: t }),
                    (0, i.jsx)(nw.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(n0, { channel: t }),
        ],
    });
});
function n2(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: nQ.iE,
        children: [
            (0, i.jsx)("div", { className: nQ.qi, children: (0, i.jsx)(n9, { channelId: t.id }) }),
            (0, i.jsx)(n0, { channel: t }),
        ],
    });
}
let n4 = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = nF(t.id),
        s = (0, e2.Ni)(t.id),
        a = (0, o.bG)([k.A], () => k.A.can(e4.QY, t), [t]),
        r = (0, nI.zU)(),
        c = (0, nY.A)(t.id),
        d = (0, o.bG)([E.A], () => (null != t ? E.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(n2, { channel: t })
        : l || s
          ? (0, i.jsxs)("div", {
                className: nQ.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: nQ.Ac,
                        children: [
                            u ? (0, i.jsx)(nS.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: nQ.me }),
                            u && a && !r ? (0, i.jsx)(nv, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: nQ.me }),
                        ],
                    }),
                    (0, i.jsx)(n5, { channel: t }),
                ],
            })
          : (0, i.jsx)(n$, { channel: t });
});
var n3 = n(104171),
    n7 = n(81466),
    n6 = n(823508);
function n8(e) {
    let { className: t, guildId: l } = e,
        s = (0, n6.A)();
    return (0, i.jsx)(ny.A, {
        className: t,
        icon: (0, i.jsx)(n7.CalendarIcon, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: eX.A.unsafe_rawColors.BRAND_500.css,
        title: ex.intl.string(ex.t["60lJ0C"]),
        description: ex.intl.string(ex.t["EYn7/y"]),
        onClick: function () {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("489565"),
                    n.e("476227"),
                    n.e("998835"),
                    n.e("468555"),
                    n.e("862179"),
                    n.e("191601"),
                    n.e("936875"),
                    n.e("370017"),
                    n.e("730931"),
                    n.e("711162"),
                    n.e("948054"),
                    n.e("159957"),
                    n.e("728136"),
                    n.e("216084"),
                    n.e("409391"),
                    n.e("810262"),
                    n.e("756684"),
                    n.e("970644"),
                    n.e("752695"),
                    n.e("449347"),
                    n.e("853934"),
                    n.e("468248"),
                    n.e("469647"),
                    n.e("670089"),
                    n.e("870160"),
                    n.e("454450"),
                    n.e("560423"),
                ]).then(n.bind(n, 729398));
                return (t) => (0, i.jsx)(e, { ...t, guildId: l });
            }, s);
        },
    });
}
var ie = n(269341);
function it(e) {
    let { onClick: t, className: n } = e,
        l = eZ.MicrophoneIcon;
    return (0, i.jsx)(ny.A, {
        iconContainerClassName: a()({ [ie.q8]: !1 }),
        icon: (0, i.jsx)(l, { size: "custom", color: "currentColor", className: ie.Pz, height: 20, width: 20 }),
        color: eX.A.unsafe_rawColors.PRIMARY_700.css,
        title: ex.intl.string(ex.t["jMLfp/"]),
        description: ex.intl.string(ex.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function ii(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                [n] = (0, o.bG)(
                    [tu.A],
                    () => {
                        let n = tu.A.getMutableParticipants(e).filter((e) => e.type === q.wY.VOICE),
                            i = [];
                        for (let e of n) {
                            if (i.length >= t) break;
                            null == i.find((t) => t.id === e.user.id) && i.push(e.user);
                        }
                        return [{ participants: n, usersInSummary: i }, tu.A.getParticipantsVersion(e)];
                    },
                    [e, t],
                    tA.D,
                );
            return n;
        })(t.id);
    return (0, i.jsxs)("div", {
        className: ie.P1,
        children: [
            (0, i.jsx)(n3.Ay, { className: ie.Ip, guildId: t.guild_id, users: l, size: n3.DN.SIZE_16 }),
            (0, i.jsx)($.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return ex.intl.formatToPlainString(ex.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return ex.intl.formatToPlainString(ex.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return ex.intl.formatToPlainString(ex.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function il(e) {
    let { channel: t, onContinueClick: n } = e,
        s = (0, o.bG)([k.A], () => k.A.can(e4.QY, t), [t]),
        r = t.guild_id,
        { canCreateGuildEvent: c } = (0, nb.nr)(t),
        d = (0, nY.A)(t.id),
        u = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: ie.kL,
        ref: u,
        children: [
            (0, i.jsx)(eV.A, { eventTargetRef: u }),
            (0, i.jsxs)("div", {
                className: ie.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: ie.N1,
                        children: [
                            (0, i.jsx)(eL.D, {
                                className: ie.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: ex.intl.string(ex.t.QGnDLs),
                            }),
                            (0, i.jsx)($.E, {
                                tag: "div",
                                className: ie.VA,
                                variant: "heading-lg/normal",
                                children: ex.intl.string(ex.t.djfK36),
                            }),
                        ],
                    }),
                    d ? null : (0, i.jsx)(nS.A, { channelId: t.id, showDismiss: !1 }),
                    s ? (0, i.jsx)(nv, { className: ie.fN, channel: t }) : null,
                    c ? (0, i.jsx)(n8, { className: ie.fN, guildId: r }) : null,
                    s ? (0, i.jsx)(it, { className: a()({ [ie.fN]: !0 }), onClick: n }) : null,
                    (0, i.jsx)(ii, { channel: t }),
                ],
            }),
        ],
    });
}
var is = n(95561),
    ia = n(423562),
    ir = n(625494),
    io = n(475815),
    ic = n(44540);
let id = "HasBeenInStageChannel";
function iu(e) {
    ((0, T.X)(m.A.VOICE_CONTROL_TRAY, T.O.STAY_ON_TOP, e), _.setAlwaysOnTop(eC.MLl.CHANNEL_CALL_POPOUT, e));
}
function ih(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: s,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, f.Ay)(),
        u = t.getGuildId(),
        p = (0, o.bG)([G.Ay], () => G.Ay.getMostRecentSelectedTextChannelId(u), [u]),
        x = U.default.getId(),
        g =
            !(0, o.bG)([E.A], () => E.A.isFullscreenInContext(n)) &&
            (!D.isPlatformEmbedded || V.Ay.supportsFeature(eC.BYE.POPOUT_WINDOWS)),
        m = null != c && c.type !== tj.lp.ACTIVITY && c.user.id !== x,
        j = l.useMemo(() => a?.window ?? window, [a]),
        N = (function (e) {
            let { channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: r } = e,
                { parentAnalyticsLocation: c } = (0, f.Ay)(),
                d = n === eC.BRT.POPOUT,
                u = l.useRef(null),
                { currentLayout: p, mode: x } = (0, o.cf)(
                    [E.A],
                    () => {
                        let e = E.A.getMode(t.id),
                            i = n === eC.BRT.POPOUT;
                        i && (e = eC._Of.VIDEO);
                        let l = e === eC._Of.VIDEO ? E.A.getLayout(t.id, n) : eC.DUB.MINIMUM;
                        return (i && l !== eC.DUB.FULL_SCREEN && (l = eC.DUB.NO_CHAT), { currentLayout: l, mode: e });
                    },
                    [t, n],
                ),
                g = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t.id, [t.id]);
            l.useEffect(() => {
                u.current = x;
            });
            let m = l.useRef(p),
                { currentDocument: C, rootNode: j } = l.useMemo(() => {
                    let e = null != a && d ? a.document : document,
                        t = r.document.getElementById("app-mount");
                    return { currentWindow: r, currentDocument: e, rootNode: t };
                }, [a, d, r]),
                N = s && !d,
                S = x === eC._Of.VIDEO && g && !N,
                I = l.useCallback(
                    (e, i) => {
                        i !== e &&
                            (A.A.updateLayout(t.id, i, n),
                            i === eC.DUB.FULL_SCREEN && t.isPrivate() && ir._.dispatch(eC.jej.TEXTAREA_BLUR));
                    },
                    [n, t],
                ),
                y = l.useCallback(
                    (e) => {
                        null == j ||
                            (e === eC.DUB.FULL_SCREEN &&
                                (I(e, m.current),
                                (0, io.sP)((e) => {
                                    m.current = e;
                                }, C)));
                    },
                    [C, I, j],
                ),
                v = l.useCallback(
                    (e) => () => {
                        null != j &&
                            ((0, T.X)(c, T.O.FULL_SCREEN, e !== eC.DUB.FULL_SCREEN),
                            e !== eC.DUB.FULL_SCREEN
                                ? ((m.current = e), I(e, eC.DUB.FULL_SCREEN), (0, io.tl)(j))
                                : y(e));
                    },
                    [I, y, j, c],
                );
            l.useEffect(() => {
                function e() {
                    null != j && ((0, io._U)(j, C) || p !== eC.DUB.FULL_SCREEN || v(p)());
                }
                return (
                    C.addEventListener(io.Wb, e),
                    () => {
                        C.removeEventListener(io.Wb, e);
                    }
                );
            }, [C, p, v, j]);
            let b = { channel: t, maybeLeaveFullScreen: y },
                O = l.useRef(b);
            return (l.useEffect(() => {
                O.current = b;
            }),
            l.useEffect(() => {
                let { channel: e, maybeLeaveFullScreen: t } = O.current;
                return (
                    e5.default.track(eC.HAw.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: d ? "popout" : p,
                        ...(0, is.QS)(e.id),
                    }),
                    () => {
                        (d && (0, D.isMac)()) || t(p);
                    }
                );
            }, [p, d]),
            l.useEffect(() => {
                null != j && u.current === eC._Of.VIDEO && x === eC._Of.VOICE && (0, io.sP)(j, C);
            }, [C, x, u, j]),
            l.useEffect(() => {
                !g && d && h.h.wait(() => _.close(eC.MLl.CHANNEL_CALL_POPOUT));
            }, [g, d]),
            S)
                ? (0, i.jsx)(ia.A, { themeable: !1, node: j, guestWindow: a, onClick: v(p) })
                : null;
        })({ channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: j }),
        S = n === eC.BRT.POPOUT && D.isPlatformEmbedded && V.Ay.supportsFeature(eC.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(P.A, {
                      context: (0, C.A)(c.type),
                      userId: c.user.id,
                      currentWindow: j,
                      sliderClassName: ic.MQ,
                      location: d,
                  })
                : null,
            S ? (0, i.jsx)(L.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: iu }) : null,
            g
                ? (0, i.jsx)(R.A, {
                      popoutOpen: s,
                      onOpenPopout: () => {
                          ((0, T.X)(d, T.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  (null != e && null != p && (0, y.uh)(e, p), _.openChannelCallPopout(t));
                              })());
                      },
                      onClosePopout: () => {
                          ((0, T.X)(d, T.O.POPOUT, !1), h.h.wait(() => _.close(eC.MLl.CHANNEL_CALL_POPOUT)));
                      },
                  })
                : null,
            N,
        ],
    });
}
function iA(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: s,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: h,
            popoutType: x,
            chatOpen: g,
            idleProps: C,
        } = e,
        { analyticsLocations: N } = (0, f.Ay)(m.A.VOICE_CONTROL_TRAY),
        T = (0, S.Us)(),
        _ = (0, o.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === n.id, [n.id]),
        I = (0, o.bG)([k.A], () => k.A.can(eC.xBc.CONNECT, n)),
        y = (0, B.E5)(n.id, q.ip.SPEAKER),
        v = (0, o.bG)([E.A], () => E.A.getSelectedParticipant(n.id)),
        R = h && T !== eC.BRT.POPOUT,
        [L, P] = l.useState(0),
        U = l.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        P(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: M } = (0, K.Ay)();
    (0, K.vI)(n);
    let D = (0, o.bG)([w.A], () => w.A.getToastsEnabled(n.id)),
        V = l.useCallback((e) => {
            (A.A.updateChatOpen(e.channel_id, !0),
                p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        }, []),
        H = tl(n) ? (null != v ? "84px" : "124px") : null != v ? "0px" : "48px";
    return (
        M && (H = "0px"),
        (t = M
            ? (0, i.jsx)(il, {
                  channel: n,
                  onContinueClick: () => {
                      ((0, K.ek)(!1), _ || (0, z.cy)(n));
                  },
              })
            : _
              ? (0, i.jsx)(na, { channel: n, onScroll: U, popoutType: x })
              : (0, i.jsx)(eQ, { participants: y, channel: n, hasConnectPermission: I })),
        (0, i.jsx)(O.A, {
            style: { height: `calc(100% - ${H})`, paddingTop: H },
            disableGradients: !_ || (0 === L && O.x.TOP),
            renderBottomCenter: () =>
                _
                    ? (0, i.jsx)(f.f5, { value: N, children: (0, i.jsx)(n4, { channel: n, isOnStartStageScreen: M }) })
                    : null,
            renderBottomRight: () =>
                _
                    ? (0, i.jsx)(f.f5, {
                          value: N,
                          children: (0, i.jsx)(ih, {
                              channel: n,
                              appContext: T,
                              popoutOpen: h,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: u,
                              selectedParticipant: v,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(to, { toggleRequestToSpeakSidebar: s, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: function () {
                return !D || g || R
                    ? null
                    : (0, i.jsx)(j.Ay, {
                          children: (0, i.jsx)(b.A, {
                              className: a()(ic.T6, { [ic.c3]: c }),
                              channelId: n.id,
                              onToastClick: V,
                          }),
                      });
            },
            screenMessage: R ? { mainText: ex.intl.string(ex.t.J5bXZU) } : null,
            ...C,
            children: !R && t,
        })
    );
}
function ip(e) {
    let { channel: t, popoutType: s } = e,
        [r, h] = l.useState(!1),
        A = l.useCallback(() => {
            h(!r);
        }, [r, h]),
        { popoutWindow: p, popoutWindowAlwaysOnTop: C } = (0, o.cf)([I.A], () => ({
            popoutWindow: I.A.getWindow(eC.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: I.A.getIsAlwaysOnTop(eC.MLl.CHANNEL_CALL_POPOUT),
        })),
        T = null != p && !p.closed,
        { analyticsLocations: _ } = (0, f.Ay)(m.A.STAGE_CHANNEL_CALL),
        y = (0, S.Us)(),
        b = (0, o.bG)([E.A], () => E.A.getChatOpen(t.id), [t.id]),
        O = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]);
    (0, g.Ay)(() => {
        null == c.w.get(id) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("97186"), n.e("756016")]).then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.w.set(id, Date.now()));
    });
    let { width: R = 0, ref: L } = (0, x.Ay)(),
        P = !T || y === eC.BRT.POPOUT;
    return (0, i.jsx)(f.f5, {
        value: _,
        children: (0, i.jsxs)(j.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: ic.kL,
                    ref: L,
                    children: [
                        (0, i.jsx)(u.N, {
                            theme: eC.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: a()(ic.ik, e, { [ic.pR]: r, [ic.gy]: r || b }),
                                    children: (0, i.jsx)(v.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(iA, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: A,
                                                showRequestToSpeakSidebar: r,
                                                popoutWindow: p,
                                                popoutWindowAlwaysOnTop: C,
                                                popoutOpen: T,
                                                popoutType: s,
                                                chatOpen: b,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        r ? (0, i.jsx)(eR, { channel: t, toggleRequestToSpeakSidebar: A, chatOpen: b }) : null,
                        (0, i.jsx)("div", {
                            className: ic.B2,
                            children: b && P && (0, i.jsx)(N.A, { channel: t, guild: O, maxWidth: R - 550 }),
                        }),
                    ],
                }),
                (0, i.jsx)(j.WD, {}),
            ],
        }),
    });
}
