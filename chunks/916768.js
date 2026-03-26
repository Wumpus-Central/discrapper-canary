n.d(t, { A: () => ej, w: () => eU });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(936504),
    o = n(299855),
    c = n.n(o),
    u = n(311907),
    d = n(582754),
    _ = n(397927),
    E = n(157559),
    A = n(827343),
    T = n(830215),
    I = n(503703),
    N = n(912851),
    p = n(169604),
    h = n(956793),
    m = n(785796),
    S = n(55619),
    C = n(246605),
    R = n(271866),
    g = n(736653),
    O = n(77729),
    y = n(573648),
    P = n(793574),
    x = n(688810),
    f = n(587895),
    D = n(315982),
    L = n(235986),
    U = n(420216),
    M = n(984870),
    j = n(626262),
    b = n(813803),
    G = n(487329),
    v = n(102609),
    k = n(49463),
    B = n(322223),
    w = n(137207),
    F = n(619029),
    W = n(202384),
    H = n(51758),
    V = n(571139),
    $ = n(527012),
    q = n(997509),
    X = n(475723),
    K = n(598733),
    z = n(801644),
    J = n(74848),
    Y = n(39771),
    Z = n(532794),
    Q = n(234419),
    ee = n(814249),
    et = n(829219),
    en = n(601730),
    ei = n(722255),
    el = n(613491),
    er = n(464473),
    es = n(780964),
    ea = n(840065),
    eo = n(459321),
    ec = n(594609),
    eu = n(734057),
    ed = n(430452),
    e_ = n(383501),
    eE = n(967198),
    eA = n(287809),
    eT = n(67480),
    eI = n(147964),
    eN = n(519057),
    ep = n(954571),
    eh = n(975571),
    em = n(723702),
    eS = n(652215),
    eC = n(502075),
    eR = n(788868),
    eg = n(831502),
    eO = n(731854),
    ey = n(985018),
    eP = n(381703);
let ex = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, G.B1)(t)?.errorCode,
            r = ey.intl.formatToPlainString(ey.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(_.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eP.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(_.DUT, {
                  tag: "span",
                  className: eP.wz,
                  onClick: () => open(eh.A.getArticleURL(eS.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ef = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eU();
                    },
                }),
                ey.intl.string(ey.t.o3zuYz),
                (0, i.jsx)(ex, { error: G.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(_.eCN, {
                    href: eh.A.getArticleURL(eS.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ey.intl.string(ey.t.RYKKox),
                }),
            ],
        });
    };
function eD(e) {
    return (0, em.isWindows)() && c().satisfies(O.A?.os.release, eC.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eL(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, J.x5)(eO.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, u.cf)([ed.Ay], () => ({
            inputDeviceOSMuted: ed.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ed.Ay.getInputDeviceOSVolume(),
        })),
        c = !1;
    return (
        !0 === a
            ? ((t = ey.intl.string(ey.t.ppW3ri)),
              (n = (0, i.jsx)(_.eCN, { href: eD(s), noticeType: l, children: ey.intl.string(ey.t.QghSIq) })))
            : 0 === o
              ? ((t = ey.intl.string(ey.t.j4gGA4)),
                (n = (0, i.jsx)(_.eCN, { href: eD(s), noticeType: l, children: ey.intl.string(ey.t.QghSIq) })))
              : ed.Ay.supports(eO.O5.LOOPBACK)
                ? ((t = ey.intl.string(ey.t.dNAJ18)),
                  (c = !0),
                  (n = (0, i.jsx)(_.zr9, {
                      onClick: () => {
                          (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: ey.intl.string(ey.t.I6YlB4),
                  })))
                : ((t = ey.intl.string(ey.t.nCO9bI)),
                  (n = (0, i.jsx)(_.eCN, {
                      href: eh.A.getArticleURL(eS.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: ey.intl.string(ey.t.RYKKox),
                  }))),
        (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eU(), (0, ec.h)();
                    },
                }),
                t,
                (0, i.jsx)(ex, { allowClick: c, error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eU(e) {
    N.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eM = l.memo(function () {
    let e = (0, u.bG)([eA.default], () => eA.default.getCurrentUser()),
        t = (0, u.bG)([eE.A], () => eE.A.getGuildId()),
        r = (0, u.bG)([eN.Ay], () => eN.Ay.getNotice()),
        { analyticsLocations: s } = (0, x.Ay)(),
        o = (0, g.Ay)(),
        c = (0, H.H)(t),
        N = (0, Q.V)();
    if (
        (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (
                    null == N &&
                    (r.type === eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eS.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    N?.trial_id != null && (n.trial_id = N.trial_id),
                    (e = { notice_type: r.type, ...n }),
                    ep.default.track(eS.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, N]),
        l.useEffect(() => {
            if (null != r && r.type === eS.kqX.SURVEY && null != r.metadata) {
                let { metadata: e } = r,
                    t = k.A.getUserExperimentDescriptor(e.id);
                null != t && (0, v.LQ)(e.id, t),
                    (async () => {
                        r.metadata?.id != null && (await (0, C.oX)(r.metadata?.id));
                    })();
            }
        }, [r]),
        null == r)
    )
        return null;
    let O = null != r.type ? eN.Re[r.type] : null,
        P = null != r.type ? eN.k3[r.type] : null,
        G = null != r.type ? eN.f7[r.type] : null,
        J = eN.pe[r.type];
    if (null != O) return (0, i.jsx)(j.$, { dismissibleContent: O, noticeType: r.type });
    if (null != P) return (0, i.jsx)(b._, { dismissibleContent: P, noticeType: r.type });
    if (null != G) return (0, i.jsx)(M.T, { dismissibleContent: G });
    if (null != J) return (0, i.jsx)(U.r, { dismissibleContent: J, noticeType: r.type });
    let ec = r.metadata?.premiumType;
    switch (r.type) {
        case eS.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(eo.A, {});
        case eS.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case eS.kqX.PENDING_MEMBER:
            return (0, i.jsx)(V.A, {});
        case eS.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(el.A, {});
        case eS.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ed } = r.metadata;
            return (0, i.jsx)(B.A, { onDismiss: () => eU(ed) });
        case eS.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eC } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(eC), noticeType: r.type }),
                    ey.intl.format(ey.t["08KQ1P"], { helpCenterLink: eh.A.getArticleURL(eS.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eS.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eO } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(eO), noticeType: r.type }),
                    ey.intl.format(ey.t["8Je+dX"], { helpCenterLink: eh.A.getArticleURL(eS.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eS.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: ex } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(ex), noticeType: r.type }),
                    ey.intl.string(ey.t["9DJgOg"]),
                ],
            });
        case eS.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eD } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(eD), noticeType: r.type }),
                    ey.intl.format(ey.t.q8VPLo, { helpCenterLink: eh.A.getArticleURL(eS.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eS.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eM } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(eM), noticeType: r.type }),
                    ey.intl.format(em.isPlatformEmbedded ? ey.t.J232TI : ey.t.vceuiL, {
                        helpCenterLink: eh.A.getArticleURL(eS.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eS.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: r.type }),
                    ey.intl.string(ey.t.iW0fcQ),
                    (0, i.jsx)(_.eCN, {
                        href: eh.A.getArticleURL(eS.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.LQG5j6),
                    }),
                ],
            });
        case eS.kqX.GENERIC:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eS.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eS.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            p.A.clearRemoteDisconnectVoiceChannelId(), eU();
                        },
                        noticeType: r.type,
                    }),
                    ey.intl.string(ey.t.bOQ3jV),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = e_.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != eu.A.getChannel(e) && h.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.vD60Pv),
                    }),
                ],
            });
        case eS.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            p.A.clearLastSessionVoiceChannelId(), eU();
                        },
                        noticeType: r.type,
                    }),
                    ey.intl.string(ey.t.jY2lUA),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = e_.A.getLastSessionVoiceChannelId();
                            null != e && null != eu.A.getChannel(e) && h.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.vD60Pv),
                    }),
                ],
            });
        case eS.kqX.SPOTIFY_AUTO_PAUSED:
            let ej = y.A.get(eS.fg2.SPOTIFY);
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: r.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: eP.tV,
                        src: (0, d.qB)(o) ? ej.icon.darkSVG : ej.icon.whiteSVG,
                    }),
                    ey.intl.string(ey.t.D8Cp76),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.NiTd0e),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        className: eP.uD,
                        href: eh.A.getArticleURL(eS.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ey.intl.string(ey.t.CiqAIU),
                    }),
                ],
            });
        case eS.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    ey.intl.string(ey.t["f+Zaol"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => (c && null != t ? (0, W.Ze)(t) : D.R()),
                        children: ey.intl.string(ey.t.fiNVin),
                    }),
                ],
            });
        case eS.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    ey.intl.string(ey.t["3sWbf3"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            T.A.verifyResend(),
                                E.A.show({
                                    title: ey.intl.string(ey.t.LykQYk),
                                    body: ey.intl.format(ey.t.azKEPy, { email: e?.email }),
                                    cancelText: ey.intl.string(ey.t.Vm8akB),
                                    onCancel: D.R,
                                });
                        },
                        children: ey.intl.string(ey.t.WnX4J2),
                    }),
                ],
            });
        case eS.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => m.A.ackScheduledMaintenance(), noticeType: r.type }),
                    ey.intl.format(ey.t["yb96S+"], r.metadata),
                    (0, i.jsx)(_.eCN, {
                        href: `${eS.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eS.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eL, { noticeType: r.type });
        case eS.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ef, { noticeType: r.type });
        case eS.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let { vendor: e, model: t } = r.metadata;
                return (0, i.jsxs)(_.$Td, {
                    color: _.Hv$.DANGER,
                    children: [
                        ey.intl.format(ey.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(_.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                A.A.setEnableHardwareMuteNotice(!1), eU();
                            },
                        }),
                        (0, i.jsx)(_.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: r.type,
                            children: ey.intl.string(ey.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (z.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(_.$Td, {
                    color: _.Hv$.INFO,
                    children: [
                        ey.intl.format(ey.t.QMw8Fd, {}),
                        (0, i.jsx)(_.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                A.A.setEnableHardwareMuteNotice(!1), eU();
                            },
                        }),
                    ],
                });
            return null;
        case eS.kqX.STREAMER_MODE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: eS.kqX.STREAMER_MODE }),
                    ey.intl.string(ey.t.iEgBXp),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => S.A.setEnabled(!1),
                        noticeType: eS.kqX.STREAMER_MODE,
                        children: ey.intl.string(ey.t.R9GHya),
                    }),
                ],
            });
        case eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: eb, applicationId: eG } = r.metadata,
                ev = eT.A.get(eb),
                ek = f.A.getApplication(eG);
            if (null == ev || null == ek) return null;
            let eB = { page: eS.liQ.IN_APP };
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => I.X(ev.id),
                        noticeType: eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eP.PC }),
                    ey.intl.format(ey.t["g3MU/+"], { applicationName: ek.name, skuName: ev.name }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, Y.j)({
                                applicationId: ek.id,
                                skuId: ev.id,
                                openPremiumPaymentModal: () => {
                                    (0, Z.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eR.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: eB,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: eB,
                                context: __OVERLAY__ ? eS.BRT.OVERLAY : eS.BRT.APP,
                            }).then(() => I.X(ev.id)),
                        children: ey.intl.string(ey.t.KEwPYx),
                    }),
                ],
            });
        case eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eT.A.get(e),
                l = f.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => eU(),
                        noticeType: eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eP.PC }),
                    ey.intl.format(ey.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(_.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => eU(),
                            to: {
                                pathname: eS.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ey.intl.string(ey.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eS.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.SURVEY,
                        onClick: () => {
                            (0, C.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, ee.K)(o) : window.open(s, "_blank"), (0, C.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eS.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    ey.intl.string(ey.t["ugxmk/"]),
                    (0, i.jsx)(_.eCN, {
                        href: eh.A.getArticleURL(eS.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t["6ik4Xk"]),
                    }),
                ],
            });
        case eS.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: eS.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ey.intl.string(ey.t.wVjKGi),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, _.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: ey.intl.string(ey.t["1WjMbC"]),
                    }),
                ],
            });
        case eS.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: ew } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: eS.kqX.DISPATCH_ERROR }),
                    ew?.displayMessage,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: eF, total: eW, name: eH } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eU(), noticeType: eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(L.A, {
                        justify: L.A.Justify.CENTER,
                        children: [
                            null != eH
                                ? ey.intl.formatToPlainString(ey.t["pHj+z4"], {
                                      name: `${eH}`,
                                      progress: eF,
                                      total: eW,
                                  })
                                : ey.intl.formatToPlainString(ey.t["lHZn+A"], { progress: eF, total: eW }),
                            (0, i.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS, className: eP.gO }),
                        ],
                    }),
                ],
            });
        case eS.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eI.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(_.$Td, {
                    color: _.Hv$.WARNING,
                    children: (0, i.jsxs)(L.A, {
                        justify: L.A.Justify.CENTER,
                        align: L.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: ey.intl.format(ey.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(_.PMB, { onClick: R.cL, noticeType: eS.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(_.$Td, {
                color: _.Hv$.WARNING,
                children: (0, i.jsxs)(L.A, {
                    justify: L.A.Justify.CENTER,
                    align: L.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: ey.intl.format(ey.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(_.PMB, { onClick: R.cL, noticeType: eS.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eS.kqX.VIEWING_ROLES:
            return (0, i.jsx)(X.A, {});
        case eS.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(_.$Td, {
                color:
                    ec === eR.PremiumTypes.TIER_1
                        ? _.Hv$.PREMIUM_TIER_1
                        : ec === eR.PremiumTypes.TIER_0
                          ? _.Hv$.PREMIUM_TIER_0
                          : _.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eP.PC }),
                    ec === eR.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : ec === eR.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, _.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("2550"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: r.metadata.daysLeft,
                                            premiumType: ec,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: r.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            ec === eR.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.BkbUPM)
                                : ec === eR.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t.Px978X)
                                  : ey.intl.string(ey.t.LW5tCE),
                    }),
                ],
            });
        case eS.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eV, dismissUntil: e$ } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            eU(e$);
                        },
                    }),
                    ey.intl.format(ey.t.zxU0Kp, { daysPastDue: eV }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eU(e$), (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ey.intl.string(ey.t.q8rxeS),
                    }),
                ],
            });
        case eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ey.intl.string(ey.t.LlZaoX),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ey.intl.string(ey.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ey.intl.string(ey.t["30YfCr"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ey.intl.string(ey.t.U5pKWA),
                    }),
                ],
            });
        case eS.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ec === eR.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : ec === eR.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eS.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eU(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            ec === eR.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.lboF5O)
                                : ec === eR.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t["4UPwOq"])
                                  : ey.intl.string(ey.t["P/VvGb"]),
                    }),
                ],
            });
        case eS.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)($.y, {
                buttonText: r.buttonText ?? ey.intl.string(ey.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => eU(),
                showCloseButton: !0,
            });
        case eS.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(F.A, { guildId: t, analyticsLocations: s });
        case eS.kqX.QUARANTINED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    ey.intl.string(ey.t.DVFJYf),
                    (0, i.jsx)(_.eCN, {
                        href: eg.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.kvHdFN),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        href: eh.A.getArticleURL(eS.MVz.QUARANTINE),
                        target: "_blank",
                        className: eP.yw,
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eS.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eq, decisionId: eX } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, w.wu)(t), eU(eq);
                        },
                    }),
                    ey.intl.string(ey.t.B8ruyY),
                    (0, i.jsx)(_.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, w.W5)(t, eX, () => {
                                    eU(eq), (0, w.wu)(t);
                                });
                        },
                        children: ey.intl.string(ey.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(_.zr9, {
                              onClick: () => q.A.open(t, eS.BEX.GUILD_AUTOMOD, void 0, eS.nd0.AUTOMOD_MENTION_SPAM),
                              children: ey.intl.string(ey.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eS.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eS.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, et.lk)(r.metadata.streamKey);
                        },
                    }),
                    ey.intl.string(ey.t.rOx44m),
                ],
            });
        case eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            eU(r.metadata?.dismissUntil);
                        },
                        noticeType: eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ey.intl.string(ey.t["0klLS7"]),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            (0, ei.$)(), eU(r.metadata?.dismissUntil);
                        },
                        noticeType: eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ey.intl.string(ey.t.e4y2VM),
                    }),
                ],
            });
        case eS.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(en.A, {});
        case eS.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(er.A, {});
        default:
            return null;
    }
});
function ej() {
    let { analyticsLocations: e } = (0, x.Ay)(P.A.NOTICE);
    return (0, i.jsx)(x.f5, { value: e, children: (0, i.jsx)(eM, {}) });
}
