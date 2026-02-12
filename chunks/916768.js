n.d(t, { A: () => ej, w: () => ex });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(758879),
    o = n(299855),
    E = n.n(o),
    _ = n(311907),
    c = n(397927),
    d = n(157559),
    A = n(827343),
    u = n(830215),
    T = n(503703),
    I = n(912851),
    N = n(169604),
    R = n(956793),
    S = n(785796),
    O = n(800342),
    C = n(55619),
    P = n(246605),
    D = n(271866),
    p = n(86980),
    m = n(322337),
    U = n(77729),
    M = n(573648),
    h = n(793574),
    g = n(688810),
    y = n(587895),
    L = n(315982),
    k = n(235986),
    f = n(420216),
    x = n(984870),
    G = n(626262),
    j = n(813803),
    B = n(709710),
    q = n(102609),
    X = n(49463),
    v = n(322223),
    b = n(137207),
    V = n(619029),
    F = n(202384),
    w = n(51758),
    H = n(571139),
    W = n(527012),
    Y = n(997509),
    K = n(475723),
    $ = n(598733),
    z = n(801644),
    Q = n(37770),
    J = n(74848),
    Z = n(532794),
    ee = n(234419),
    et = n(814249),
    en = n(829219),
    ei = n(597936),
    el = n(601730),
    er = n(722255),
    es = n(613491),
    ea = n(464473),
    eo = n(780964),
    eE = n(840065),
    e_ = n(459321),
    ec = n(594609),
    ed = n(734057),
    eA = n(430452),
    eu = n(383501),
    eT = n(967198),
    eI = n(287809),
    eN = n(67480),
    eR = n(147964),
    eS = n(519057),
    eO = n(954571),
    eC = n(975571),
    eP = n(723702),
    eD = n(652215),
    ep = n(502075),
    em = n(788868),
    eU = n(831502),
    eM = n(731854),
    eh = n(985018),
    eg = n(237082);
let ey = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, B.B1)(t)?.errorCode,
            r = eh.intl.formatToPlainString(eh.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(c.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eg.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(c.DUT, {
                  tag: "span",
                  className: eg.wz,
                  onClick: () => n && open(eC.A.getArticleURL(eD.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eL = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(c.$Td, {
            color: c.Hv$.DANGER,
            children: [
                (0, i.jsx)(c.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ex();
                    },
                }),
                eh.intl.string(eh.t.o3zuYz),
                (0, i.jsx)(ey, { error: B.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(c.eCN, {
                    href: eC.A.getArticleURL(eD.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eh.intl.string(eh.t.RYKKox),
                }),
            ],
        });
    };
function ek(e) {
    return (0, eP.isWindows)() && E().satisfies(U.A?.os.release, ep.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ef(e) {
    let t,
        n,
        { noticeType: l } = e,
        { windowsMuteAndZeroVolumeDetectionEnabled: r } = (0, Q.I)({ location: "AudioIssueNoticeNoInput" }),
        s = (0, J.x5)(eM.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: d } = (0, _.cf)([eA.Ay], () => ({
            inputDeviceOSMuted: eA.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eA.Ay.getInputDeviceOSVolume(),
        })),
        A = (0, eP.isWindows)() && E().satisfies(U.A?.os.release, ep.PH) && r,
        u = !1;
    return (
        A && !0 === o
            ? ((t = eh.intl.string(eh.t.ppW3ri)),
              (n = (0, i.jsx)(c.eCN, { href: ek(a), noticeType: l, children: eh.intl.string(eh.t.QghSIq) })))
            : A && 0 === d
              ? ((t = eh.intl.string(eh.t.j4gGA4)),
                (n = (0, i.jsx)(c.eCN, { href: ek(a), noticeType: l, children: eh.intl.string(eh.t.QghSIq) })))
              : eA.Ay.supports(eM.O5.LOOPBACK)
                ? ((t = eh.intl.string(eh.t.dNAJ18)),
                  (u = !0),
                  (n = (0, i.jsx)(c.zr9, {
                      onClick: () => {
                          (0, eE.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, { section: eD.nc_.VOICE });
                      },
                      children: eh.intl.string(eh.t.I6YlB4),
                  })))
                : ((t = eh.intl.string(eh.t.nCO9bI)),
                  (n = (0, i.jsx)(c.eCN, {
                      href: eC.A.getArticleURL(eD.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: eh.intl.string(eh.t.RYKKox),
                  }))),
        (0, i.jsxs)(c.$Td, {
            color: c.Hv$.DANGER,
            children: [
                (0, i.jsx)(c.PMB, {
                    noticeType: l,
                    onClick: () => {
                        ex(), (0, ec.h)();
                    },
                }),
                t,
                (0, i.jsx)(ey, { allowClick: u, error: B.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ex(e) {
    I.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eG = l.memo(function () {
    let e = (0, _.bG)([eI.default], () => eI.default.getCurrentUser()),
        t = (0, _.bG)([eT.A], () => eT.A.getGuildId()),
        r = (0, _.bG)([eS.Ay], () => eS.Ay.getNotice()),
        { analyticsLocations: s } = (0, g.Ay)(),
        o = (0, w.H)(t),
        E = (0, ee.V)();
    if (
        (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (
                    null == E &&
                    (r.type === eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eD.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    E?.trial_id != null && (n.trial_id = E.trial_id),
                    (e = { notice_type: r.type, ...n }),
                    eO.default.track(eD.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, E]),
        l.useEffect(() => {
            if (null != r && r.type === eD.kqX.SURVEY && null != r.metadata) {
                let { metadata: e } = r,
                    t = X.A.getUserExperimentDescriptor(e.id);
                null != t && (0, q.LQ)(e.id, t),
                    (async () => {
                        r.metadata?.id != null && (await (0, P.oX)(r.metadata?.id));
                    })();
            }
        }, [r]),
        null == r)
    )
        return null;
    let I = null != r.type ? eS.Re[r.type] : null,
        U = null != r.type ? eS.k3[r.type] : null,
        h = null != r.type ? eS.f7[r.type] : null,
        B = eS.pe[r.type];
    if (null != I) return (0, i.jsx)(G.$, { dismissibleContent: I, noticeType: r.type });
    if (null != U) return (0, i.jsx)(j._, { dismissibleContent: U, noticeType: r.type });
    if (null != h) return (0, i.jsx)(x.T, { dismissibleContent: h });
    if (null != B) return (0, i.jsx)(f.r, { dismissibleContent: B, noticeType: r.type });
    let Q = r.metadata?.premiumType;
    switch (r.type) {
        case eD.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(e_.A, {});
        case eD.kqX.LURKING_GUILD:
            return (0, i.jsx)($.A, {});
        case eD.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case eD.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(es.A, {});
        case eD.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: J } = r.metadata;
            return (0, i.jsx)(v.A, { onDismiss: () => ex(J) });
        case eD.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: ec } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(ec), noticeType: r.type }),
                    eh.intl.format(eh.t["08KQ1P"], { helpCenterLink: eC.A.getArticleURL(eD.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eD.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eA } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(eA), noticeType: r.type }),
                    eh.intl.format(eh.t["8Je+dX"], { helpCenterLink: eC.A.getArticleURL(eD.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eD.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: ep } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(ep), noticeType: r.type }),
                    eh.intl.format(eh.t.q8VPLo, { helpCenterLink: eC.A.getArticleURL(eD.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eD.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eM } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(eM), noticeType: r.type }),
                    eh.intl.format(eP.isPlatformEmbedded ? eh.t.J232TI : eh.t.vceuiL, {
                        helpCenterLink: eC.A.getArticleURL(eD.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: r.type }),
                    eh.intl.string(eh.t.iW0fcQ),
                    (0, i.jsx)(c.eCN, {
                        href: eC.A.getArticleURL(eD.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.LQG5j6),
                    }),
                ],
            });
        case eD.kqX.GENERIC:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(c.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eD.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(c.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eD.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), ex();
                        },
                        noticeType: r.type,
                    }),
                    eh.intl.string(eh.t.bOQ3jV),
                    (0, i.jsx)(c.Z_L, {
                        onClick: () => {
                            let e = eu.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.vD60Pv),
                    }),
                ],
            });
        case eD.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(c.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), ex();
                        },
                        noticeType: r.type,
                    }),
                    eh.intl.string(eh.t.jY2lUA),
                    (0, i.jsx)(c.Z_L, {
                        onClick: () => {
                            let e = eu.A.getLastSessionVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.vD60Pv),
                    }),
                ],
            });
        case eD.kqX.SPOTIFY_AUTO_PAUSED:
            let ey = M.A.get(eD.fg2.SPOTIFY);
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: r.type }),
                    (0, i.jsx)("img", { alt: "", className: eg.tV, src: ey.icon.whiteSVG }),
                    eh.intl.string(eh.t.D8Cp76),
                    (0, i.jsx)(c.Z_L, {
                        onClick: () => (0, eE.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, { section: eD.nc_.VOICE }),
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.NiTd0e),
                    }),
                    (0, i.jsx)(c.MzZ, {
                        className: eg.N0,
                        href: eC.A.getArticleURL(eD.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eh.intl.string(eh.t.CiqAIU),
                    }),
                ],
            });
        case eD.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DEFAULT,
                children: [
                    eh.intl.string(eh.t["f+Zaol"]),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: r.type,
                        onClick: () => (o && null != t ? (0, F.Ze)(t) : L.R()),
                        children: eh.intl.string(eh.t.fiNVin),
                    }),
                ],
            });
        case eD.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DEFAULT,
                children: [
                    eh.intl.string(eh.t["3sWbf3"]),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            u.A.verifyResend(),
                                d.A.show({
                                    title: eh.intl.string(eh.t.LykQYk),
                                    body: eh.intl.format(eh.t.azKEPy, { email: e?.email }),
                                    cancelText: eh.intl.string(eh.t.Vm8akB),
                                    onCancel: L.R,
                                });
                        },
                        children: eh.intl.string(eh.t.WnX4J2),
                    }),
                ],
            });
        case eD.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => S.A.ackScheduledMaintenance(), noticeType: r.type }),
                    eh.intl.format(eh.t["yb96S+"], r.metadata),
                    (0, i.jsx)(c.eCN, {
                        href: `${eD.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                ],
            });
        case eD.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(ef, { noticeType: r.type });
        case eD.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(eL, { noticeType: r.type });
        case eD.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let { vendor: e, model: t } = r.metadata;
                return (0, i.jsxs)(c.$Td, {
                    color: c.Hv$.DANGER,
                    children: [
                        eh.intl.format(eh.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(c.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                A.A.setEnableHardwareMuteNotice(!1), ex();
                            },
                        }),
                        (0, i.jsx)(c.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: r.type,
                            children: eh.intl.string(eh.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (z.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(c.$Td, {
                    color: c.Hv$.INFO,
                    children: [
                        eh.intl.format(eh.t.QMw8Fd, {}),
                        (0, i.jsx)(c.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                A.A.setEnableHardwareMuteNotice(!1), ex();
                            },
                        }),
                    ],
                });
            return null;
        case eD.kqX.STREAMER_MODE:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: eD.kqX.STREAMER_MODE }),
                    eh.intl.string(eh.t.iEgBXp),
                    (0, i.jsx)(c.Z_L, {
                        onClick: () => C.A.setEnabled(!1),
                        noticeType: eD.kqX.STREAMER_MODE,
                        children: eh.intl.string(eh.t.R9GHya),
                    }),
                ],
            });
        case eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: ek, applicationId: eG } = r.metadata,
                ej = eN.A.get(ek),
                eB = y.A.getApplication(eG);
            if (null == ej || null == eB) return null;
            let eq = { page: eD.liQ.IN_APP };
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(c.PMB, {
                        onClick: () => T.X(ej.id),
                        noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(c.tvc, { size: "md", color: "currentColor", className: eg.PC }),
                    eh.intl.format(eh.t["g3MU/+"], { applicationName: eB.name, skuName: ej.name }),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, p.j)({
                                applicationId: eB.id,
                                skuId: ej.id,
                                openPremiumPaymentModal: () => {
                                    (0, Z.A)({
                                        initialPlanId: null,
                                        subscriptionTier: em.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: eq,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: eq,
                                context: __OVERLAY__ ? eD.BRT.OVERLAY : eD.BRT.APP,
                            }).then(() => T.X(ej.id)),
                        children: eh.intl.string(eh.t.KEwPYx),
                    }),
                ],
            });
        case eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eN.A.get(e),
                l = y.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(c.PMB, {
                        onClick: () => ex(),
                        noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(c.tvc, { size: "md", color: "currentColor", className: eg.PC }),
                    eh.intl.format(eh.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(c.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => ex(),
                            to: {
                                pathname: eD.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eh.intl.string(eh.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eD.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.SURVEY,
                        onClick: () => {
                            (0, P.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, et.K)(o) : window.open(s, "_blank"), (0, P.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eD.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    eh.intl.string(eh.t["ugxmk/"]),
                    (0, i.jsx)(c.eCN, {
                        href: eC.A.getArticleURL(eD.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: eh.intl.string(eh.t["6ik4Xk"]),
                    }),
                ],
            });
        case eD.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: eD.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    eh.intl.string(eh.t.wVjKGi),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, c.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: eh.intl.string(eh.t["1WjMbC"]),
                    }),
                ],
            });
        case eD.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: eX } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: eD.kqX.DISPATCH_ERROR }),
                    eX?.displayMessage,
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, c.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                ],
            });
        case eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: ev, total: eb, name: eV } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.CENTER,
                        children: [
                            null != eV
                                ? eh.intl.formatToPlainString(eh.t["pHj+z4"], {
                                      name: `${eV}`,
                                      progress: ev,
                                      total: eb,
                                  })
                                : eh.intl.formatToPlainString(eh.t["lHZn+A"], { progress: ev, total: eb }),
                            (0, i.jsx)(c.y$y, { type: c.y$y.Type.PULSING_ELLIPSIS, className: eg.gO }),
                        ],
                    }),
                ],
            });
        case eD.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eR.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(c.$Td, {
                    color: c.Hv$.WARNING,
                    children: (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.CENTER,
                        align: k.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: eh.intl.format(eh.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(c.PMB, { onClick: D.cL, noticeType: eD.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(c.$Td, {
                color: c.Hv$.WARNING,
                children: (0, i.jsxs)(k.A, {
                    justify: k.A.Justify.CENTER,
                    align: k.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: eh.intl.format(eh.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(m.A, {
                            dropdownSize: m.p.DropdownSizes.SMALL,
                            className: eg.aV,
                            color: m.p.Colors.WHITE,
                            look: m.p.Looks.OUTLINED,
                            size: m.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eD.JJy.NOTIFICATION_BAR,
                                        object: eD.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: r.metadata.applicationId,
                            children: eh.intl.string(eh.t.Q5ZgpK),
                        }),
                        (0, i.jsx)(c.PMB, { onClick: D.cL, noticeType: eD.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eD.kqX.VIEWING_ROLES:
            return (0, i.jsx)(K.A, {});
        case eD.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(c.$Td, {
                color:
                    Q === em.PremiumTypes.TIER_1
                        ? c.Hv$.PREMIUM_TIER_1
                        : Q === em.PremiumTypes.TIER_0
                          ? c.Hv$.PREMIUM_TIER_0
                          : c.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(c.tvc, { size: "md", color: "currentColor", className: eg.PC }),
                    Q === em.PremiumTypes.TIER_1
                        ? eh.intl.formatToPlainString(eh.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : Q === em.PremiumTypes.TIER_0
                          ? eh.intl.formatToPlainString(eh.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : eh.intl.formatToPlainString(eh.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, c.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("1536"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: r.metadata.daysLeft,
                                            premiumType: Q,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: r.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            Q === em.PremiumTypes.TIER_1
                                ? eh.intl.string(eh.t.BkbUPM)
                                : Q === em.PremiumTypes.TIER_0
                                  ? eh.intl.string(eh.t.Px978X)
                                  : eh.intl.string(eh.t.LW5tCE),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eF, dismissUntil: ew } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            ex(ew);
                        },
                    }),
                    eh.intl.format(eh.t.zxU0Kp, { daysPastDue: eF }),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ex(ew),
                                (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children: eh.intl.string(eh.t.q8rxeS),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eh.intl.string(eh.t.LlZaoX),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children: eh.intl.string(eh.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eh.intl.string(eh.t["30YfCr"]),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children: eh.intl.string(eh.t.U5pKWA),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    Q === em.PremiumTypes.TIER_1
                        ? eh.intl.formatToPlainString(eh.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : Q === em.PremiumTypes.TIER_0
                          ? eh.intl.formatToPlainString(eh.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : eh.intl.formatToPlainString(eh.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children:
                            Q === em.PremiumTypes.TIER_1
                                ? eh.intl.string(eh.t.lboF5O)
                                : Q === em.PremiumTypes.TIER_0
                                  ? eh.intl.string(eh.t["4UPwOq"])
                                  : eh.intl.string(eh.t["P/VvGb"]),
                    }),
                ],
            });
        case eD.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? eh.intl.string(eh.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => ex(),
                showCloseButton: !0,
            });
        case eD.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: s });
        case eD.kqX.QUARANTINED:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    eh.intl.string(eh.t.DVFJYf),
                    (0, i.jsx)(c.eCN, {
                        href: eU.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.kvHdFN),
                    }),
                    (0, i.jsx)(c.MzZ, {
                        href: eC.A.getArticleURL(eD.MVz.QUARANTINE),
                        target: "_blank",
                        className: eg.yw,
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                ],
            });
        case eD.kqX.BLOCKED_BY_PROXY:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    eh.intl.string(eh.t.Ugijzi),
                    (0, i.jsx)(c.eCN, {
                        href: `${eD.qF7.STATUS}`,
                        noticeType: r.type,
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                    (0, i.jsx)(c.PMB, { onClick: () => ex(), noticeType: eD.kqX.BLOCKED_BY_PROXY }),
                ],
            });
        case eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eH, decisionId: eW } = r.metadata;
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.WARNING,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, b.wu)(t), ex(eH);
                        },
                    }),
                    eh.intl.string(eh.t.B8ruyY),
                    (0, i.jsx)(c.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, b.W5)(t, eW, () => {
                                    ex(eH), (0, b.wu)(t);
                                });
                        },
                        children: eh.intl.string(eh.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(c.zr9, {
                              onClick: () => Y.A.open(t, eD.BEX.GUILD_AUTOMOD, void 0, eD.nd0.AUTOMOD_MENTION_SPAM),
                              children: eh.intl.string(eh.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eD.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.BRAND,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ei.li(), ex();
                        },
                    }),
                    eh.intl.string(eh.t.I1nKfO),
                    (0, i.jsx)(c.Z_L, {
                        noticeType: eD.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, c.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                ei.li(),
                                ex();
                        },
                        children: eh.intl.string(eh.t.l5xYnH),
                    }),
                ],
            });
        case eD.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.DANGER,
                children: [
                    (0, i.jsx)(c.PMB, {
                        noticeType: eD.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, en.lk)(r.metadata.streamKey);
                        },
                    }),
                    eh.intl.string(eh.t.rOx44m),
                ],
            });
        case eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(c.$Td, {
                color: c.Hv$.BRAND,
                children: [
                    (0, i.jsx)(c.PMB, {
                        onClick: () => {
                            ex(r.metadata?.dismissUntil);
                        },
                        noticeType: eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eh.intl.string(eh.t["0klLS7"]),
                    (0, i.jsx)(c.Z_L, {
                        onClick: () => {
                            (0, er.$)(), ex(r.metadata?.dismissUntil);
                        },
                        noticeType: eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eh.intl.string(eh.t.e4y2VM),
                    }),
                ],
            });
        case eD.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(el.A, {});
        case eD.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ea.A, {});
        default:
            return null;
    }
});
function ej() {
    let { analyticsLocations: e } = (0, g.Ay)(h.A.NOTICE);
    return (0, i.jsx)(g.f5, { value: e, children: (0, i.jsx)(eG, {}) });
}
