n.d(t, { A: () => eb, w: () => ex });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    a = n.n(r),
    s = n(936504),
    o = n(299855),
    c = n.n(o),
    _ = n(311907),
    E = n(397927),
    d = n(157559),
    u = n(827343),
    A = n(830215),
    T = n(503703),
    I = n(912851),
    N = n(169604),
    R = n(956793),
    S = n(785796),
    C = n(800342),
    O = n(55619),
    p = n(246605),
    m = n(271866),
    D = n(86980),
    P = n(322337),
    g = n(77729),
    h = n(573648),
    U = n(793574),
    M = n(688810),
    y = n(587895),
    f = n(315982),
    L = n(235986),
    k = n(420216),
    x = n(984870),
    G = n(626262),
    b = n(813803),
    j = n(487329),
    B = n(102609),
    v = n(49463),
    q = n(322223),
    X = n(137207),
    F = n(619029),
    w = n(202384),
    V = n(51758),
    H = n(571139),
    W = n(527012),
    K = n(997509),
    Y = n(475723),
    $ = n(598733),
    z = n(801644),
    J = n(37770),
    Q = n(74848),
    Z = n(532794),
    ee = n(234419),
    et = n(814249),
    en = n(829219),
    ei = n(597936),
    el = n(601730),
    er = n(722255),
    ea = n(613491),
    es = n(464473),
    eo = n(780964),
    ec = n(840065),
    e_ = n(459321),
    eE = n(594609),
    ed = n(734057),
    eu = n(430452),
    eA = n(383501),
    eT = n(967198),
    eI = n(287809),
    eN = n(67480),
    eR = n(147964),
    eS = n(519057),
    eC = n(954571),
    eO = n(975571),
    ep = n(723702),
    em = n(652215),
    eD = n(502075),
    eP = n(788868),
    eg = n(831502),
    eh = n(731854),
    eU = n(985018),
    eM = n(237082);
let ey = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, j.B1)(t)?.errorCode,
            r = eU.intl.formatToPlainString(eU.t.ejOT95, { errorCode: l }),
            a = (0, i.jsx)(E.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eM.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(E.DUT, {
                  tag: "span",
                  className: eM.wz,
                  onClick: () => n && open(eO.A.getArticleURL(em.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    ef = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(E.$Td, {
            color: E.Hv$.DANGER,
            children: [
                (0, i.jsx)(E.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ex();
                    },
                }),
                eU.intl.string(eU.t.o3zuYz),
                (0, i.jsx)(ey, { error: j.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(E.eCN, {
                    href: eO.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eU.intl.string(eU.t.RYKKox),
                }),
            ],
        });
    };
function eL(e) {
    return (0, ep.isWindows)() && c().satisfies(g.A?.os.release, eD.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ek(e) {
    let t,
        n,
        { noticeType: l } = e,
        { windowsMuteAndZeroVolumeDetectionEnabled: r } = (0, J.I)({ location: "AudioIssueNoticeNoInput" }),
        a = (0, Q.x5)(eh.oh.AUDIO_INPUT),
        s = a?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: d } = (0, _.cf)([eu.Ay], () => ({
            inputDeviceOSMuted: eu.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eu.Ay.getInputDeviceOSVolume(),
        })),
        u = (0, ep.isWindows)() && c().satisfies(g.A?.os.release, eD.PH) && r,
        A = !1;
    return (
        u && !0 === o
            ? ((t = eU.intl.string(eU.t.ppW3ri)),
              (n = (0, i.jsx)(E.eCN, { href: eL(s), noticeType: l, children: eU.intl.string(eU.t.QghSIq) })))
            : u && 0 === d
              ? ((t = eU.intl.string(eU.t.j4gGA4)),
                (n = (0, i.jsx)(E.eCN, { href: eL(s), noticeType: l, children: eU.intl.string(eU.t.QghSIq) })))
              : eu.Ay.supports(eh.O5.LOOPBACK)
                ? ((t = eU.intl.string(eU.t.dNAJ18)),
                  (A = !0),
                  (n = (0, i.jsx)(E.zr9, {
                      onClick: () => {
                          (0, ec.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, { section: em.nc_.VOICE });
                      },
                      children: eU.intl.string(eU.t.I6YlB4),
                  })))
                : ((t = eU.intl.string(eU.t.nCO9bI)),
                  (n = (0, i.jsx)(E.eCN, {
                      href: eO.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: eU.intl.string(eU.t.RYKKox),
                  }))),
        (0, i.jsxs)(E.$Td, {
            color: E.Hv$.DANGER,
            children: [
                (0, i.jsx)(E.PMB, {
                    noticeType: l,
                    onClick: () => {
                        ex(), (0, eE.h)();
                    },
                }),
                t,
                (0, i.jsx)(ey, { allowClick: A, error: j.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ex(e) {
    I.A.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eG = l.memo(function () {
    let e = (0, _.bG)([eI.default], () => eI.default.getCurrentUser()),
        t = (0, _.bG)([eT.A], () => eT.A.getGuildId()),
        r = (0, _.bG)([eS.Ay], () => eS.Ay.getNotice()),
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, V.H)(t),
        c = (0, ee.V)();
    if (
        (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (
                    null == c &&
                    (r.type === em.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === em.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    c?.trial_id != null && (n.trial_id = c.trial_id),
                    (e = { notice_type: r.type, ...n }),
                    eC.default.track(em.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, c]),
        l.useEffect(() => {
            if (null != r && r.type === em.kqX.SURVEY && null != r.metadata) {
                let { metadata: e } = r,
                    t = v.A.getUserExperimentDescriptor(e.id);
                null != t && (0, B.LQ)(e.id, t),
                    (async () => {
                        r.metadata?.id != null && (await (0, p.oX)(r.metadata?.id));
                    })();
            }
        }, [r]),
        null == r)
    )
        return null;
    let I = null != r.type ? eS.Re[r.type] : null,
        g = null != r.type ? eS.k3[r.type] : null,
        U = null != r.type ? eS.f7[r.type] : null,
        j = eS.pe[r.type];
    if (null != I) return (0, i.jsx)(G.$, { dismissibleContent: I, noticeType: r.type });
    if (null != g) return (0, i.jsx)(b._, { dismissibleContent: g, noticeType: r.type });
    if (null != U) return (0, i.jsx)(x.T, { dismissibleContent: U });
    if (null != j) return (0, i.jsx)(k.r, { dismissibleContent: j, noticeType: r.type });
    let J = r.metadata?.premiumType;
    switch (r.type) {
        case em.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(e_.A, {});
        case em.kqX.LURKING_GUILD:
            return (0, i.jsx)($.A, {});
        case em.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case em.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(ea.A, {});
        case em.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: Q } = r.metadata;
            return (0, i.jsx)(q.A, { onDismiss: () => ex(Q) });
        case em.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eE } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(eE), noticeType: r.type }),
                    eU.intl.format(eU.t["08KQ1P"], { helpCenterLink: eO.A.getArticleURL(em.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case em.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eu } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(eu), noticeType: r.type }),
                    eU.intl.format(eU.t["8Je+dX"], { helpCenterLink: eO.A.getArticleURL(em.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case em.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eD } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(eD), noticeType: r.type }),
                    eU.intl.format(eU.t.q8VPLo, { helpCenterLink: eO.A.getArticleURL(em.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case em.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eh } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(eh), noticeType: r.type }),
                    eU.intl.format(ep.isPlatformEmbedded ? eU.t.J232TI : eU.t.vceuiL, {
                        helpCenterLink: eO.A.getArticleURL(em.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case em.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: r.type }),
                    eU.intl.string(eU.t.iW0fcQ),
                    (0, i.jsx)(E.eCN, {
                        href: eO.A.getArticleURL(em.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.LQG5j6),
                    }),
                ],
            });
        case em.kqX.GENERIC:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(E.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case em.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(E.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case em.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), ex();
                        },
                        noticeType: r.type,
                    }),
                    eU.intl.string(eU.t.bOQ3jV),
                    (0, i.jsx)(E.Z_L, {
                        onClick: () => {
                            let e = eA.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.vD60Pv),
                    }),
                ],
            });
        case em.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(E.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), ex();
                        },
                        noticeType: r.type,
                    }),
                    eU.intl.string(eU.t.jY2lUA),
                    (0, i.jsx)(E.Z_L, {
                        onClick: () => {
                            let e = eA.A.getLastSessionVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.vD60Pv),
                    }),
                ],
            });
        case em.kqX.SPOTIFY_AUTO_PAUSED:
            let ey = h.A.get(em.fg2.SPOTIFY);
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: r.type }),
                    (0, i.jsx)("img", { alt: "", className: eM.tV, src: ey.icon.whiteSVG }),
                    eU.intl.string(eU.t.D8Cp76),
                    (0, i.jsx)(E.Z_L, {
                        onClick: () => (0, ec.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, { section: em.nc_.VOICE }),
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.NiTd0e),
                    }),
                    (0, i.jsx)(E.MzZ, {
                        className: eM.N0,
                        href: eO.A.getArticleURL(em.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eU.intl.string(eU.t.CiqAIU),
                    }),
                ],
            });
        case em.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [
                    eU.intl.string(eU.t["f+Zaol"]),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: r.type,
                        onClick: () => (o && null != t ? (0, w.Ze)(t) : f.R()),
                        children: eU.intl.string(eU.t.fiNVin),
                    }),
                ],
            });
        case em.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [
                    eU.intl.string(eU.t["3sWbf3"]),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            A.A.verifyResend(),
                                d.A.show({
                                    title: eU.intl.string(eU.t.LykQYk),
                                    body: eU.intl.format(eU.t.azKEPy, { email: e?.email }),
                                    cancelText: eU.intl.string(eU.t.Vm8akB),
                                    onCancel: f.R,
                                });
                        },
                        children: eU.intl.string(eU.t.WnX4J2),
                    }),
                ],
            });
        case em.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => S.A.ackScheduledMaintenance(), noticeType: r.type }),
                    eU.intl.format(eU.t["yb96S+"], r.metadata),
                    (0, i.jsx)(E.eCN, {
                        href: `${em.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.hvVgAZ),
                    }),
                ],
            });
        case em.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(ek, { noticeType: r.type });
        case em.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ef, { noticeType: r.type });
        case em.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let { vendor: e, model: t } = r.metadata;
                return (0, i.jsxs)(E.$Td, {
                    color: E.Hv$.DANGER,
                    children: [
                        eU.intl.format(eU.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(E.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                u.A.setEnableHardwareMuteNotice(!1), ex();
                            },
                        }),
                        (0, i.jsx)(E.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: r.type,
                            children: eU.intl.string(eU.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (z.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(E.$Td, {
                    color: E.Hv$.INFO,
                    children: [
                        eU.intl.format(eU.t.QMw8Fd, {}),
                        (0, i.jsx)(E.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                u.A.setEnableHardwareMuteNotice(!1), ex();
                            },
                        }),
                    ],
                });
            return null;
        case em.kqX.STREAMER_MODE:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: em.kqX.STREAMER_MODE }),
                    eU.intl.string(eU.t.iEgBXp),
                    (0, i.jsx)(E.Z_L, {
                        onClick: () => O.A.setEnabled(!1),
                        noticeType: em.kqX.STREAMER_MODE,
                        children: eU.intl.string(eU.t.R9GHya),
                    }),
                ],
            });
        case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: eL, applicationId: eG } = r.metadata,
                eb = eN.A.get(eL),
                ej = y.A.getApplication(eG);
            if (null == eb || null == ej) return null;
            let eB = { page: em.liQ.IN_APP };
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(E.PMB, {
                        onClick: () => T.X(eb.id),
                        noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(E.tvc, { size: "md", color: "currentColor", className: eM.PC }),
                    eU.intl.format(eU.t["g3MU/+"], { applicationName: ej.name, skuName: eb.name }),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, D.j)({
                                applicationId: ej.id,
                                skuId: eb.id,
                                openPremiumPaymentModal: () => {
                                    (0, Z.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eP.pe.TIER_2,
                                        analyticsLocations: a,
                                        analyticsObject: eB,
                                    });
                                },
                                analyticsLocations: a,
                                analyticsLocationObject: eB,
                                context: __OVERLAY__ ? em.BRT.OVERLAY : em.BRT.APP,
                            }).then(() => T.X(eb.id)),
                        children: eU.intl.string(eU.t.KEwPYx),
                    }),
                ],
            });
        case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eN.A.get(e),
                l = y.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(E.PMB, {
                        onClick: () => ex(),
                        noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(E.tvc, { size: "md", color: "currentColor", className: eM.PC }),
                    eU.intl.format(eU.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(E.zr9, {
                        children: (0, i.jsx)(s.N_, {
                            onClick: () => ex(),
                            to: {
                                pathname: em.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eU.intl.string(eU.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case em.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: a, embedded: s, id: o } = e;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.SURVEY,
                        onClick: () => {
                            (0, p.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.SURVEY,
                        onClick: () => {
                            s ? (0, et.K)(o) : window.open(a, "_blank"), (0, p.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case em.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    eU.intl.string(eU.t["ugxmk/"]),
                    (0, i.jsx)(E.eCN, {
                        href: eO.A.getArticleURL(em.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: eU.intl.string(eU.t["6ik4Xk"]),
                    }),
                ],
            });
        case em.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    eU.intl.string(eU.t.wVjKGi),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, E.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: eU.intl.string(eU.t["1WjMbC"]),
                    }),
                ],
            });
        case em.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: ev } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: em.kqX.DISPATCH_ERROR }),
                    ev?.displayMessage,
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, E.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: eU.intl.string(eU.t.hvVgAZ),
                    }),
                ],
            });
        case em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: eq, total: eX, name: eF } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(L.A, {
                        justify: L.A.Justify.CENTER,
                        children: [
                            null != eF
                                ? eU.intl.formatToPlainString(eU.t["pHj+z4"], {
                                      name: `${eF}`,
                                      progress: eq,
                                      total: eX,
                                  })
                                : eU.intl.formatToPlainString(eU.t["lHZn+A"], { progress: eq, total: eX }),
                            (0, i.jsx)(E.y$y, { type: E.y$y.Type.PULSING_ELLIPSIS, className: eM.gO }),
                        ],
                    }),
                ],
            });
        case em.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eR.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(E.$Td, {
                    color: E.Hv$.WARNING,
                    children: (0, i.jsxs)(L.A, {
                        justify: L.A.Justify.CENTER,
                        align: L.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: eU.intl.format(eU.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(E.PMB, { onClick: m.cL, noticeType: em.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(L.A, {
                    justify: L.A.Justify.CENTER,
                    align: L.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: eU.intl.format(eU.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(P.A, {
                            dropdownSize: P.p.DropdownSizes.SMALL,
                            className: eM.aV,
                            color: P.p.Colors.WHITE,
                            look: P.p.Looks.OUTLINED,
                            size: P.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                C.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: em.JJy.NOTIFICATION_BAR,
                                        object: em.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: r.metadata.applicationId,
                            children: eU.intl.string(eU.t.Q5ZgpK),
                        }),
                        (0, i.jsx)(E.PMB, { onClick: m.cL, noticeType: em.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case em.kqX.VIEWING_ROLES:
            return (0, i.jsx)(Y.A, {});
        case em.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(E.$Td, {
                color:
                    J === eP.PremiumTypes.TIER_1
                        ? E.Hv$.PREMIUM_TIER_1
                        : J === eP.PremiumTypes.TIER_0
                          ? E.Hv$.PREMIUM_TIER_0
                          : E.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(E.tvc, { size: "md", color: "currentColor", className: eM.PC }),
                    J === eP.PremiumTypes.TIER_1
                        ? eU.intl.formatToPlainString(eU.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : J === eP.PremiumTypes.TIER_0
                          ? eU.intl.formatToPlainString(eU.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : eU.intl.formatToPlainString(eU.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, E.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("73322"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: r.metadata.daysLeft,
                                            premiumType: J,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: r.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            J === eP.PremiumTypes.TIER_1
                                ? eU.intl.string(eU.t.BkbUPM)
                                : J === eP.PremiumTypes.TIER_0
                                  ? eU.intl.string(eU.t.Px978X)
                                  : eU.intl.string(eU.t.LW5tCE),
                    }),
                ],
            });
        case em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: ew, dismissUntil: eV } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            ex(eV);
                        },
                    }),
                    eU.intl.format(eU.t.zxU0Kp, { daysPastDue: ew }),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ex(eV),
                                (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: em.nc_.SUBSCRIPTIONS });
                        },
                        children: eU.intl.string(eU.t.q8rxeS),
                    }),
                ],
            });
        case em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eU.intl.string(eU.t.LlZaoX),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: em.nc_.SUBSCRIPTIONS });
                        },
                        children: eU.intl.string(eU.t["Zpd+Yq"]),
                    }),
                ],
            });
        case em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eU.intl.string(eU.t["30YfCr"]),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: em.nc_.SUBSCRIPTIONS });
                        },
                        children: eU.intl.string(eU.t.U5pKWA),
                    }),
                ],
            });
        case em.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    J === eP.PremiumTypes.TIER_1
                        ? eU.intl.formatToPlainString(eU.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : J === eP.PremiumTypes.TIER_0
                          ? eU.intl.formatToPlainString(eU.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : eU.intl.formatToPlainString(eU.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: em.nc_.SUBSCRIPTIONS });
                        },
                        children:
                            J === eP.PremiumTypes.TIER_1
                                ? eU.intl.string(eU.t.lboF5O)
                                : J === eP.PremiumTypes.TIER_0
                                  ? eU.intl.string(eU.t["4UPwOq"])
                                  : eU.intl.string(eU.t["P/VvGb"]),
                    }),
                ],
            });
        case em.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? eU.intl.string(eU.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => ex(),
                showCloseButton: !0,
            });
        case em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(F.A, { guildId: t, analyticsLocations: a });
        case em.kqX.QUARANTINED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    eU.intl.string(eU.t.DVFJYf),
                    (0, i.jsx)(E.eCN, {
                        href: eg.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.kvHdFN),
                    }),
                    (0, i.jsx)(E.MzZ, {
                        href: eO.A.getArticleURL(em.MVz.QUARANTINE),
                        target: "_blank",
                        className: eM.yw,
                        children: eU.intl.string(eU.t.hvVgAZ),
                    }),
                ],
            });
        case em.kqX.BLOCKED_BY_PROXY:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    eU.intl.string(eU.t.Ugijzi),
                    (0, i.jsx)(E.eCN, {
                        href: `${em.qF7.STATUS}`,
                        noticeType: r.type,
                        children: eU.intl.string(eU.t.hvVgAZ),
                    }),
                    (0, i.jsx)(E.PMB, { onClick: () => ex(), noticeType: em.kqX.BLOCKED_BY_PROXY }),
                ],
            });
        case em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eH, decisionId: eW } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, X.wu)(t), ex(eH);
                        },
                    }),
                    eU.intl.string(eU.t.B8ruyY),
                    (0, i.jsx)(E.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, X.W5)(t, eW, () => {
                                    ex(eH), (0, X.wu)(t);
                                });
                        },
                        children: eU.intl.string(eU.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(E.zr9, {
                              onClick: () => K.A.open(t, em.BEX.GUILD_AUTOMOD, void 0, em.nd0.AUTOMOD_MENTION_SPAM),
                              children: eU.intl.string(eU.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case em.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ei.li(), ex();
                        },
                    }),
                    eU.intl.string(eU.t.I1nKfO),
                    (0, i.jsx)(E.Z_L, {
                        noticeType: em.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, E.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                ei.li(),
                                ex();
                        },
                        children: eU.intl.string(eU.t.l5xYnH),
                    }),
                ],
            });
        case em.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [
                    (0, i.jsx)(E.PMB, {
                        noticeType: em.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, en.lk)(r.metadata.streamKey);
                        },
                    }),
                    eU.intl.string(eU.t.rOx44m),
                ],
            });
        case em.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [
                    (0, i.jsx)(E.PMB, {
                        onClick: () => {
                            ex(r.metadata?.dismissUntil);
                        },
                        noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eU.intl.string(eU.t["0klLS7"]),
                    (0, i.jsx)(E.Z_L, {
                        onClick: () => {
                            (0, er.$)(), ex(r.metadata?.dismissUntil);
                        },
                        noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eU.intl.string(eU.t.e4y2VM),
                    }),
                ],
            });
        case em.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(el.A, {});
        case em.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(es.A, {});
        default:
            return null;
    }
});
function eb() {
    let { analyticsLocations: e } = (0, M.Ay)(U.A.NOTICE);
    return (0, i.jsx)(M.f5, { value: e, children: (0, i.jsx)(eG, {}) });
}
