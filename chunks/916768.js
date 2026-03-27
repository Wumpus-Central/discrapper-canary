n.d(t, { A: () => ej, w: () => eM });
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
    T = n(827343),
    A = n(830215),
    I = n(503703),
    p = n(912851),
    N = n(169604),
    m = n(956793),
    R = n(785796),
    h = n(55619),
    S = n(246605),
    g = n(271866),
    C = n(736653),
    O = n(77729),
    y = n(573648),
    x = n(793574),
    f = n(688810),
    P = n(587895),
    D = n(315982),
    U = n(235986),
    M = n(420216),
    L = n(984870),
    j = n(403881),
    b = n(813803),
    v = n(487329),
    k = n(102609),
    G = n(49463),
    B = n(322223),
    w = n(137207),
    H = n(619029),
    F = n(202384),
    V = n(51758),
    $ = n(571139),
    W = n(527012),
    q = n(997509),
    X = n(475723),
    K = n(598733),
    z = n(801644),
    J = n(74848),
    Y = n(39771),
    Q = n(532794),
    Z = n(234419),
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
    eT = n(287809),
    eA = n(67480),
    eI = n(147964),
    ep = n(519057),
    eN = n(954571),
    em = n(975571),
    eR = n(723702),
    eh = n(652215),
    eS = n(502075),
    eg = n(788868),
    eC = n(831502),
    eO = n(731854),
    ey = n(985018),
    ex = n(571655);
let ef = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, v.B1)(t)?.errorCode,
            r = ey.intl.formatToPlainString(ey.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(_.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: ex.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(_.DUT, {
                  tag: "span",
                  className: ex.wz,
                  onClick: () => open(em.A.getArticleURL(eh.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eP = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eM();
                    },
                }),
                ey.intl.string(ey.t.o3zuYz),
                (0, i.jsx)(ef, { error: v.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(_.eCN, {
                    href: em.A.getArticleURL(eh.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ey.intl.string(ey.t.RYKKox),
                }),
            ],
        });
    };
function eD(e) {
    return (0, eR.isWindows)() && c().satisfies(O.A?.os.release, eS.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eU(e) {
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
                      href: em.A.getArticleURL(eh.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: ey.intl.string(ey.t.RYKKox),
                  }))),
        (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eM(), (0, ec.h)();
                    },
                }),
                t,
                (0, i.jsx)(ef, { allowClick: c, error: v.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eM(e) {
    p.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eL = l.memo(function () {
    let e = (0, u.bG)([eT.default], () => eT.default.getCurrentUser()),
        t = (0, u.bG)([eE.A], () => eE.A.getGuildId()),
        r = (0, u.bG)([ep.Ay], () => ep.Ay.getNotice()),
        { analyticsLocations: s } = (0, f.Ay)(),
        o = (0, C.Ay)(),
        c = (0, V.H)(t),
        p = (0, Z.V)();
    if (
        (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (
                    null == p &&
                    (r.type === eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    p?.trial_id != null && (n.trial_id = p.trial_id),
                    (e = { notice_type: r.type, ...n }),
                    eN.default.track(eh.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, p]),
        l.useEffect(() => {
            if (null != r && r.type === eh.kqX.SURVEY && null != r.metadata) {
                let { metadata: e } = r,
                    t = G.A.getUserExperimentDescriptor(e.id);
                null != t && (0, k.LQ)(e.id, t),
                    (async () => {
                        r.metadata?.id != null && (await (0, S.oX)(r.metadata?.id));
                    })();
            }
        }, [r]),
        null == r)
    )
        return null;
    let O = null != r.type ? ep.Re[r.type] : null,
        x = null != r.type ? ep.k3[r.type] : null,
        v = null != r.type ? ep.f7[r.type] : null,
        J = ep.pe[r.type];
    if (null != O) return (0, i.jsx)(j.$, { dismissibleContent: O, noticeType: r.type });
    if (null != x) return (0, i.jsx)(b._, { dismissibleContent: x, noticeType: r.type });
    if (null != v) return (0, i.jsx)(L.T, { dismissibleContent: v });
    if (null != J) return (0, i.jsx)(M.r, { dismissibleContent: J, noticeType: r.type });
    let ec = r.metadata?.premiumType;
    switch (r.type) {
        case eh.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(eo.A, {});
        case eh.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case eh.kqX.PENDING_MEMBER:
            return (0, i.jsx)($.A, {});
        case eh.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(el.A, {});
        case eh.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ed } = r.metadata;
            return (0, i.jsx)(B.A, { onDismiss: () => eM(ed) });
        case eh.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eS } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(eS), noticeType: r.type }),
                    ey.intl.format(ey.t["08KQ1P"], { helpCenterLink: em.A.getArticleURL(eh.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eh.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eO } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(eO), noticeType: r.type }),
                    ey.intl.format(ey.t["8Je+dX"], { helpCenterLink: em.A.getArticleURL(eh.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eh.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: ef } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(ef), noticeType: r.type }),
                    ey.intl.string(ey.t["9DJgOg"]),
                ],
            });
        case eh.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eD } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(eD), noticeType: r.type }),
                    ey.intl.format(ey.t.q8VPLo, { helpCenterLink: em.A.getArticleURL(eh.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eh.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eL } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(eL), noticeType: r.type }),
                    ey.intl.format(eR.isPlatformEmbedded ? ey.t.J232TI : ey.t.vceuiL, {
                        helpCenterLink: em.A.getArticleURL(eh.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: r.type }),
                    ey.intl.string(ey.t.iW0fcQ),
                    (0, i.jsx)(_.eCN, {
                        href: em.A.getArticleURL(eh.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.LQG5j6),
                    }),
                ],
            });
        case eh.kqX.GENERIC:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eh.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eh.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), eM();
                        },
                        noticeType: r.type,
                    }),
                    ey.intl.string(ey.t.bOQ3jV),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = e_.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != eu.A.getChannel(e) && m.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.vD60Pv),
                    }),
                ],
            });
        case eh.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), eM();
                        },
                        noticeType: r.type,
                    }),
                    ey.intl.string(ey.t.jY2lUA),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = e_.A.getLastSessionVoiceChannelId();
                            null != e && null != eu.A.getChannel(e) && m.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.vD60Pv),
                    }),
                ],
            });
        case eh.kqX.SPOTIFY_AUTO_PAUSED:
            let ej = y.A.get(eh.fg2.SPOTIFY);
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: r.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: ex.tV,
                        src: (0, d.qB)(o) ? ej.icon.darkSVG : ej.icon.whiteSVG,
                    }),
                    ey.intl.string(ey.t.D8Cp76),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.NiTd0e),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        className: ex.uD,
                        href: em.A.getArticleURL(eh.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ey.intl.string(ey.t.CiqAIU),
                    }),
                ],
            });
        case eh.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    ey.intl.string(ey.t["f+Zaol"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => (c && null != t ? (0, F.Ze)(t) : D.R()),
                        children: ey.intl.string(ey.t.fiNVin),
                    }),
                ],
            });
        case eh.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    ey.intl.string(ey.t["3sWbf3"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            A.A.verifyResend(),
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
        case eh.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => R.A.ackScheduledMaintenance(), noticeType: r.type }),
                    ey.intl.format(ey.t["yb96S+"], r.metadata),
                    (0, i.jsx)(_.eCN, {
                        href: `${eh.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eh.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eU, { noticeType: r.type });
        case eh.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(eP, { noticeType: r.type });
        case eh.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let { vendor: e, model: t } = r.metadata;
                return (0, i.jsxs)(_.$Td, {
                    color: _.Hv$.DANGER,
                    children: [
                        ey.intl.format(ey.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(_.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                T.A.setEnableHardwareMuteNotice(!1), eM();
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
                                T.A.setEnableHardwareMuteNotice(!1), eM();
                            },
                        }),
                    ],
                });
            return null;
        case eh.kqX.STREAMER_MODE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: eh.kqX.STREAMER_MODE }),
                    ey.intl.string(ey.t.iEgBXp),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => h.A.setEnabled(!1),
                        noticeType: eh.kqX.STREAMER_MODE,
                        children: ey.intl.string(ey.t.R9GHya),
                    }),
                ],
            });
        case eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: eb, applicationId: ev } = r.metadata,
                ek = eA.A.get(eb),
                eG = P.A.getApplication(ev);
            if (null == ek || null == eG) return null;
            let eB = { page: eh.liQ.IN_APP };
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => I.X(ek.id),
                        noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: ex.PC }),
                    ey.intl.format(ey.t["g3MU/+"], { applicationName: eG.name, skuName: ek.name }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, Y.j)({
                                applicationId: eG.id,
                                skuId: ek.id,
                                openPremiumPaymentModal: () => {
                                    (0, Q.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eg.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: eB,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: eB,
                                context: __OVERLAY__ ? eh.BRT.OVERLAY : eh.BRT.APP,
                            }).then(() => I.X(ek.id)),
                        children: ey.intl.string(ey.t.KEwPYx),
                    }),
                ],
            });
        case eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eA.A.get(e),
                l = P.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => eM(),
                        noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: ex.PC }),
                    ey.intl.format(ey.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(_.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => eM(),
                            to: {
                                pathname: eh.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ey.intl.string(ey.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eh.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.SURVEY,
                        onClick: () => {
                            (0, S.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, ee.K)(o) : window.open(s, "_blank"), (0, S.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eh.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    ey.intl.string(ey.t["ugxmk/"]),
                    (0, i.jsx)(_.eCN, {
                        href: em.A.getArticleURL(eh.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t["6ik4Xk"]),
                    }),
                ],
            });
        case eh.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: eh.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ey.intl.string(ey.t.wVjKGi),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
        case eh.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: ew } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: eh.kqX.DISPATCH_ERROR }),
                    ew?.displayMessage,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: eH, total: eF, name: eV } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => eM(), noticeType: eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(U.A, {
                        justify: U.A.Justify.CENTER,
                        children: [
                            null != eV
                                ? ey.intl.formatToPlainString(ey.t["pHj+z4"], {
                                      name: `${eV}`,
                                      progress: eH,
                                      total: eF,
                                  })
                                : ey.intl.formatToPlainString(ey.t["lHZn+A"], { progress: eH, total: eF }),
                            (0, i.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS, className: ex.gO }),
                        ],
                    }),
                ],
            });
        case eh.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eI.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(_.$Td, {
                    color: _.Hv$.WARNING,
                    children: (0, i.jsxs)(U.A, {
                        justify: U.A.Justify.CENTER,
                        align: U.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: ey.intl.format(ey.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(_.PMB, { onClick: g.cL, noticeType: eh.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(_.$Td, {
                color: _.Hv$.WARNING,
                children: (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    align: U.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: ey.intl.format(ey.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(_.PMB, { onClick: g.cL, noticeType: eh.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eh.kqX.VIEWING_ROLES:
            return (0, i.jsx)(X.A, {});
        case eh.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(_.$Td, {
                color:
                    ec === eg.PremiumTypes.TIER_1
                        ? _.Hv$.PREMIUM_TIER_1
                        : ec === eg.PremiumTypes.TIER_0
                          ? _.Hv$.PREMIUM_TIER_0
                          : _.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: ex.PC }),
                    ec === eg.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : ec === eg.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, _.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("99590"),
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
                            ec === eg.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.BkbUPM)
                                : ec === eg.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t.Px978X)
                                  : ey.intl.string(ey.t.LW5tCE),
                    }),
                ],
            });
        case eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: e$, dismissUntil: eW } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            eM(eW);
                        },
                    }),
                    ey.intl.format(ey.t.zxU0Kp, { daysPastDue: e$ }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eM(eW), (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ey.intl.string(ey.t.q8rxeS),
                    }),
                ],
            });
        case eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ey.intl.string(ey.t.LlZaoX),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ey.intl.string(ey.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ey.intl.string(ey.t["30YfCr"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ey.intl.string(ey.t.U5pKWA),
                    }),
                ],
            });
        case eh.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ec === eg.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : ec === eg.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eh.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            ec === eg.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.lboF5O)
                                : ec === eg.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t["4UPwOq"])
                                  : ey.intl.string(ey.t["P/VvGb"]),
                    }),
                ],
            });
        case eh.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? ey.intl.string(ey.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => eM(),
                showCloseButton: !0,
            });
        case eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(H.A, { guildId: t, analyticsLocations: s });
        case eh.kqX.QUARANTINED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    ey.intl.string(ey.t.DVFJYf),
                    (0, i.jsx)(_.eCN, {
                        href: eC.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.kvHdFN),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        href: em.A.getArticleURL(eh.MVz.QUARANTINE),
                        target: "_blank",
                        className: ex.yw,
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eq, decisionId: eX } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, w.wu)(t), eM(eq);
                        },
                    }),
                    ey.intl.string(ey.t.B8ruyY),
                    (0, i.jsx)(_.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, w.W5)(t, eX, () => {
                                    eM(eq), (0, w.wu)(t);
                                });
                        },
                        children: ey.intl.string(ey.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(_.zr9, {
                              onClick: () => q.A.open(t, eh.BEX.GUILD_AUTOMOD, void 0, eh.nd0.AUTOMOD_MENTION_SPAM),
                              children: ey.intl.string(ey.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eh.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eh.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, et.lk)(r.metadata.streamKey);
                        },
                    }),
                    ey.intl.string(ey.t.rOx44m),
                ],
            });
        case eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            eM(r.metadata?.dismissUntil);
                        },
                        noticeType: eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ey.intl.string(ey.t["0klLS7"]),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            (0, ei.$)(), eM(r.metadata?.dismissUntil);
                        },
                        noticeType: eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ey.intl.string(ey.t.e4y2VM),
                    }),
                ],
            });
        case eh.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(en.A, {});
        case eh.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(er.A, {});
        default:
            return null;
    }
});
function ej() {
    let { analyticsLocations: e } = (0, f.Ay)(x.A.NOTICE);
    return (0, i.jsx)(f.f5, { value: e, children: (0, i.jsx)(eL, {}) });
}
