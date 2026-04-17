n.d(t, { A: () => eG, w: () => eD });
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(936504),
    o = n(299855),
    d = n.n(o),
    c = n(311907),
    u = n(582754),
    h = n(397927),
    A = n(157559),
    _ = n(827343),
    m = n(830215),
    p = n(503703),
    g = n(912851),
    f = n(169604),
    E = n(956793),
    x = n(785796),
    I = n(55619),
    C = n(246605),
    N = n(271866),
    T = n(736653),
    S = n(77729),
    b = n(573648),
    y = n(793574),
    v = n(688810),
    R = n(587895),
    j = n(315982),
    O = n(235986),
    L = n(420216),
    M = n(187848),
    D = n(984870),
    U = n(626262),
    G = n(487329),
    P = n(102609),
    k = n(49463),
    w = n(322223),
    B = n(137207),
    V = n(619029),
    H = n(202384),
    F = n(51758),
    W = n(571139),
    K = n(527012),
    Y = n(997509),
    z = n(475723),
    q = n(598733),
    X = n(801644),
    $ = n(74848),
    J = n(4630),
    Q = n(532794),
    Z = n(234419),
    ee = n(37992),
    et = n(532423),
    en = n(814249),
    ei = n(829219),
    el = n(601730),
    es = n(722255),
    ea = n(613491),
    er = n(464473),
    eo = n(780964),
    ed = n(858897),
    ec = n(459321),
    eu = n(594609),
    eh = n(734057),
    eA = n(430452),
    e_ = n(383501),
    em = n(967198),
    ep = n(287809),
    eg = n(67480),
    ef = n(147964),
    eE = n(519057),
    ex = n(954571),
    eI = n(975571),
    eC = n(723702),
    eN = n(652215),
    eT = n(502075),
    eS = n(788868),
    eb = n(831502),
    ey = n(731854),
    ev = n(985018),
    eR = n(448759);
let ej = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, G.B1)(t)?.errorCode,
            s = ev.intl.formatToPlainString(ev.t.ejOT95, { errorCode: l }),
            a = (0, i.jsx)(h.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eR.fU,
                selectable: !0,
                children: s,
            });
        return n
            ? (0, i.jsx)(h.DUT, {
                  tag: "span",
                  className: eR.wz,
                  onClick: () => open(eI.A.getArticleURL(eN.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    eO = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(h.$Td, {
            color: h.Hv$.DANGER,
            children: [
                (0, i.jsx)(h.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eD();
                    },
                }),
                ev.intl.string(ev.t.o3zuYz),
                (0, i.jsx)(ej, { error: G.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(h.eCN, {
                    href: eI.A.getArticleURL(eN.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ev.intl.string(ev.t.RYKKox),
                }),
            ],
        });
    };
function eL(e) {
    return (0, eC.isWindows)() && d().satisfies(S.A?.os.release, eT.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eM(e) {
    let t,
        n,
        { noticeType: l } = e,
        s = (0, $.x5)(ey.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: r, inputDeviceOSVolume: o } = (0, c.cf)([eA.Ay], () => ({
            inputDeviceOSMuted: eA.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eA.Ay.getInputDeviceOSVolume(),
        })),
        d = !1;
    return (
        !0 === r
            ? ((t = ev.intl.string(ev.t.ppW3ri)),
              (n = (0, i.jsx)(h.eCN, { href: eL(a), noticeType: l, children: ev.intl.string(ev.t.QghSIq) })))
            : 0 === o
              ? ((t = ev.intl.string(ev.t.j4gGA4)),
                (n = (0, i.jsx)(h.eCN, { href: eL(a), noticeType: l, children: ev.intl.string(ev.t.QghSIq) })))
              : eA.Ay.supports(ey.O5.LOOPBACK)
                ? ((t = ev.intl.string(ev.t.dNAJ18)),
                  (d = !0),
                  (n = (0, i.jsx)(h.zr9, {
                      onClick: () => {
                          (0, ed.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: ev.intl.string(ev.t.I6YlB4),
                  })))
                : ((t = ev.intl.string(ev.t.nCO9bI)),
                  (n = (0, i.jsx)(h.eCN, {
                      href: eI.A.getArticleURL(eN.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: ev.intl.string(ev.t.RYKKox),
                  }))),
        (0, i.jsxs)(h.$Td, {
            color: h.Hv$.DANGER,
            children: [
                (0, i.jsx)(h.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eD(), (0, eu.h)();
                    },
                }),
                t,
                (0, i.jsx)(ej, { allowClick: d, error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eD(e) {
    g.A.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eU = l.memo(function () {
    let e = (0, c.bG)([ep.default], () => ep.default.getCurrentUser()),
        t = (0, c.bG)([em.A], () => em.A.getGuildId()),
        s = (0, c.bG)([eE.Ay], () => eE.Ay.getNotice()),
        { analyticsLocations: a } = (0, v.Ay)(),
        o = (0, T.Ay)(),
        d = (0, F.H)(t),
        g = (0, Z.V)();
    if (
        (l.useEffect(() => {
            if (s?.type != null) {
                let e;
                if (
                    null == g &&
                    (s.type === eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    g?.trial_id != null && (n.trial_id = g.trial_id),
                    (e = { notice_type: s.type, ...n }),
                    ex.default.track(eN.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [s?.type, t, g]),
        l.useEffect(() => {
            if (null != s && s.type === eN.kqX.SURVEY && null != s.metadata) {
                let { metadata: e } = s,
                    t = k.A.getUserExperimentDescriptor(e.id);
                null != t && (0, P.LQ)(e.id, t),
                    (async () => {
                        s.metadata?.id != null && (await (0, C.oX)(s.metadata?.id));
                    })();
            }
        }, [s]),
        null == s)
    )
        return null;
    let S = null != s.type ? eE.Re[s.type] : null,
        y = null != s.type ? eE.rV[s.type] : null,
        G = null != s.type ? eE.f7[s.type] : null,
        $ = eE.pe[s.type];
    if (null != S) return (0, i.jsx)(U.$, { dismissibleContent: S, noticeType: s.type });
    if (null != y) return (0, i.jsx)(M.d, { dismissibleContent: y });
    if (null != G) return (0, i.jsx)(D.T, { dismissibleContent: G });
    if (null != $) return (0, i.jsx)(L.r, { dismissibleContent: $, noticeType: s.type });
    let eu = s.metadata?.premiumType;
    switch (s.type) {
        case eN.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(ec.A, {});
        case eN.kqX.LURKING_GUILD:
            return (0, i.jsx)(q.A, {});
        case eN.kqX.PENDING_MEMBER:
            return (0, i.jsx)(W.A, {});
        case eN.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(ea.A, {});
        case eN.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eA } = s.metadata;
            return (0, i.jsx)(w.A, { onDismiss: () => eD(eA) });
        case eN.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eT } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(eT), noticeType: s.type }),
                    ev.intl.format(ev.t["08KQ1P"], { helpCenterLink: eI.A.getArticleURL(eN.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eN.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: ey } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(ey), noticeType: s.type }),
                    ev.intl.format(ev.t["8Je+dX"], { helpCenterLink: eI.A.getArticleURL(eN.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eN.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: ej } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(ej), noticeType: s.type }),
                    ev.intl.string(ev.t["9DJgOg"]),
                ],
            });
        case eN.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eL } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(eL), noticeType: s.type }),
                    ev.intl.format(ev.t.q8VPLo, { helpCenterLink: eI.A.getArticleURL(eN.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eN.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eU } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(eU), noticeType: s.type }),
                    ev.intl.format(eC.isPlatformEmbedded ? ev.t.J232TI : ev.t.vceuiL, {
                        helpCenterLink: eI.A.getArticleURL(eN.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: s.type }),
                    ev.intl.string(ev.t.iW0fcQ),
                    (0, i.jsx)(h.eCN, {
                        href: eI.A.getArticleURL(eN.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.LQG5j6),
                    }),
                ],
            });
        case eN.kqX.GENERIC:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_L, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case eN.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_L, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case eN.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            f.A.clearRemoteDisconnectVoiceChannelId(), eD();
                        },
                        noticeType: s.type,
                    }),
                    ev.intl.string(ev.t.bOQ3jV),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            let e = e_.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != eh.A.getChannel(e) && E.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.vD60Pv),
                    }),
                ],
            });
        case eN.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            f.A.clearLastSessionVoiceChannelId(), eD();
                        },
                        noticeType: s.type,
                    }),
                    ev.intl.string(ev.t.jY2lUA),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            let e = e_.A.getLastSessionVoiceChannelId();
                            null != e && null != eh.A.getChannel(e) && E.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.vD60Pv),
                    }),
                ],
            });
        case eN.kqX.SPOTIFY_AUTO_PAUSED:
            let eG = b.A.get(eN.fg2.SPOTIFY);
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: s.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: eR.tV,
                        src: (0, u.qB)(o) ? eG.icon.darkSVG : eG.icon.whiteSVG,
                    }),
                    ev.intl.string(ev.t.D8Cp76),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => (0, ed.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.NiTd0e),
                    }),
                    (0, i.jsx)(h.MzZ, {
                        className: eR.uD,
                        href: eI.A.getArticleURL(eN.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ev.intl.string(ev.t.CiqAIU),
                    }),
                ],
            });
        case eN.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    ev.intl.string(ev.t["f+Zaol"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: s.type,
                        onClick: () => (d && null != t ? (0, H.Ze)(t) : j.R()),
                        children: ev.intl.string(ev.t.fiNVin),
                    }),
                ],
            });
        case eN.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    ev.intl.string(ev.t["3sWbf3"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: s.type,
                        onClick: () => {
                            m.A.verifyResend(),
                                A.A.show({
                                    title: ev.intl.string(ev.t.LykQYk),
                                    body: ev.intl.format(ev.t.azKEPy, { email: e?.email }),
                                    cancelText: ev.intl.string(ev.t.Vm8akB),
                                    onCancel: j.R,
                                });
                        },
                        children: ev.intl.string(ev.t.WnX4J2),
                    }),
                ],
            });
        case eN.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => x.A.ackScheduledMaintenance(), noticeType: s.type }),
                    ev.intl.format(ev.t["yb96S+"], s.metadata),
                    (0, i.jsx)(h.eCN, {
                        href: `${eN.qF7.STATUS}/incidents/${s.metadata.id}`,
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.hvVgAZ),
                    }),
                ],
            });
        case eN.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eM, { noticeType: s.type });
        case eN.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(eO, { noticeType: s.type });
        case eN.kqX.HARDWARE_MUTE:
            if (null != s.metadata) {
                let { vendor: e, model: t } = s.metadata;
                return (0, i.jsxs)(h.$Td, {
                    color: h.Hv$.DANGER,
                    children: [
                        ev.intl.format(ev.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(h.PMB, {
                            noticeType: s.type,
                            onClick: () => {
                                _.A.setEnableHardwareMuteNotice(!1), eD();
                            },
                        }),
                        (0, i.jsx)(h.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: s.type,
                            children: ev.intl.string(ev.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (X.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(h.$Td, {
                    color: h.Hv$.INFO,
                    children: [
                        ev.intl.format(ev.t.QMw8Fd, {}),
                        (0, i.jsx)(h.PMB, {
                            noticeType: s.type,
                            onClick: () => {
                                _.A.setEnableHardwareMuteNotice(!1), eD();
                            },
                        }),
                    ],
                });
            return null;
        case eN.kqX.STREAMER_MODE:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: eN.kqX.STREAMER_MODE }),
                    ev.intl.string(ev.t.iEgBXp),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => I.A.setEnabled(!1),
                        noticeType: eN.kqX.STREAMER_MODE,
                        children: ev.intl.string(ev.t.R9GHya),
                    }),
                ],
            });
        case eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let { skuId: eP, applicationId: ek } = s.metadata,
                ew = eg.A.get(eP),
                eB = R.A.getApplication(ek);
            if (null == ew || null == eB) return null;
            let eV = { page: eN.liQ.IN_APP };
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => p.X(ew.id),
                        noticeType: eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: eR.PC }),
                    ev.intl.format(ev.t["g3MU/+"], { applicationName: eB.name, skuName: ew.name }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, J.j)({
                                applicationId: eB.id,
                                skuId: ew.id,
                                openPremiumPaymentModal: () => {
                                    (0, Q.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eS.pe.TIER_2,
                                        analyticsLocations: a,
                                        analyticsObject: eV,
                                    });
                                },
                                analyticsLocations: a,
                                analyticsLocationObject: eV,
                                context: __OVERLAY__ ? eN.BRT.OVERLAY : eN.BRT.APP,
                            }).then(() => p.X(ew.id)),
                        children: ev.intl.string(ev.t.KEwPYx),
                    }),
                ],
            });
        case eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let { skuId: e, applicationId: t } = s.metadata,
                n = eg.A.get(e),
                l = R.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => eD(),
                        noticeType: eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: eR.PC }),
                    ev.intl.format(ev.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(h.zr9, {
                        children: (0, i.jsx)(r.N_, {
                            onClick: () => eD(),
                            to: {
                                pathname: eN.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ev.intl.string(ev.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eN.kqX.SURVEY: {
            let e = s.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: a, embedded: r, id: o } = e;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.SURVEY,
                        onClick: () => {
                            (0, C.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.SURVEY,
                        onClick: () => {
                            r ? (0, en.K)(o) : window.open(a, "_blank"), (0, C.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eN.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    ev.intl.string(ev.t["ugxmk/"]),
                    (0, i.jsx)(h.eCN, {
                        href: eI.A.getArticleURL(eN.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: s.type,
                        children: ev.intl.string(ev.t["6ik4Xk"]),
                    }),
                ],
            });
        case eN.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: eN.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ev.intl.string(ev.t.wVjKGi),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, h.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: ev.intl.string(ev.t["1WjMbC"]),
                    }),
                ],
            });
        case eN.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let { error: eH } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: eN.kqX.DISPATCH_ERROR }),
                    eH?.displayMessage,
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, h.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: ev.intl.string(ev.t.hvVgAZ),
                    }),
                ],
            });
        case eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let { progress: eF, total: eW, name: eK } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eD(), noticeType: eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(O.A, {
                        justify: O.A.Justify.CENTER,
                        children: [
                            null != eK
                                ? ev.intl.formatToPlainString(ev.t["pHj+z4"], {
                                      name: `${eK}`,
                                      progress: eF,
                                      total: eW,
                                  })
                                : ev.intl.formatToPlainString(ev.t["lHZn+A"], { progress: eF, total: eW }),
                            (0, i.jsx)(h.y$y, { type: h.y$y.Type.PULSING_ELLIPSIS, className: eR.gO }),
                        ],
                    }),
                ],
            });
        case eN.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != ef.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(h.$Td, {
                    color: h.Hv$.WARNING,
                    children: (0, i.jsxs)(O.A, {
                        justify: O.A.Justify.CENTER,
                        align: O.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: ev.intl.format(ev.t["1qxVe4"], {
                                    applicationName: s.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(h.PMB, { onClick: N.cL, noticeType: eN.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(h.$Td, {
                color: h.Hv$.WARNING,
                children: (0, i.jsxs)(O.A, {
                    justify: O.A.Justify.CENTER,
                    align: O.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: ev.intl.format(ev.t.Fv5HrE, { applicationName: s.metadata.applicationName }),
                        }),
                        (0, i.jsx)(h.PMB, { onClick: N.cL, noticeType: eN.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eN.kqX.VIEWING_ROLES:
            return (0, i.jsx)(z.A, {});
        case eN.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(h.$Td, {
                color:
                    eu === eS.PremiumTypes.TIER_1
                        ? h.Hv$.PREMIUM_TIER_1
                        : eu === eS.PremiumTypes.TIER_0
                          ? h.Hv$.PREMIUM_TIER_0
                          : h.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: eR.PC }),
                    eu === eS.PremiumTypes.TIER_1
                        ? ev.intl.formatToPlainString(ev.t.fXv4wm, { daysLeft: s.metadata.daysLeft })
                        : eu === eS.PremiumTypes.TIER_0
                          ? ev.intl.formatToPlainString(ev.t.ZOHZMr, { daysLeft: s.metadata.daysLeft })
                          : ev.intl.formatToPlainString(ev.t.outyHh, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, h.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("55787"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: s.metadata.daysLeft,
                                            premiumType: eu,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: s.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            eu === eS.PremiumTypes.TIER_1
                                ? ev.intl.string(ev.t.BkbUPM)
                                : eu === eS.PremiumTypes.TIER_0
                                  ? ev.intl.string(ev.t.Px978X)
                                  : ev.intl.string(ev.t.LW5tCE),
                    }),
                ],
            });
        case eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eY, dismissUntil: ez } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: s.type,
                        onClick: () => {
                            eD(ez);
                        },
                    }),
                    ev.intl.format(ev.t.zxU0Kp, { daysPastDue: eY }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eD(ez), (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ev.intl.string(ev.t.q8rxeS),
                    }),
                ],
            });
        case eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ev.intl.string(ev.t.LlZaoX),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ev.intl.string(ev.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ev.intl.string(ev.t["30YfCr"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ev.intl.string(ev.t.U5pKWA),
                    }),
                ],
            });
        case eN.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eu === eS.PremiumTypes.TIER_1
                        ? ev.intl.formatToPlainString(ev.t.b6QUvf, { daysLeft: s.metadata.daysLeft })
                        : eu === eS.PremiumTypes.TIER_0
                          ? ev.intl.formatToPlainString(ev.t["tURZ/M"], { daysLeft: s.metadata.daysLeft })
                          : ev.intl.formatToPlainString(ev.t.AyC74I, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eN.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eD(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            eu === eS.PremiumTypes.TIER_1
                                ? ev.intl.string(ev.t.lboF5O)
                                : eu === eS.PremiumTypes.TIER_0
                                  ? ev.intl.string(ev.t["4UPwOq"])
                                  : ev.intl.string(ev.t["P/VvGb"]),
                    }),
                ],
            });
        case eN.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(K.y, {
                buttonText: s.buttonText ?? ev.intl.string(ev.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => eD(),
                showCloseButton: !0,
            });
        case eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: a });
        case eN.kqX.QUARANTINED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    ev.intl.string(ev.t.DVFJYf),
                    (0, i.jsx)(h.eCN, {
                        href: eb.q,
                        target: "_blank",
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.kvHdFN),
                    }),
                    (0, i.jsx)(h.MzZ, {
                        href: eI.A.getArticleURL(eN.MVz.QUARANTINE),
                        target: "_blank",
                        className: eR.yw,
                        children: ev.intl.string(ev.t.hvVgAZ),
                    }),
                ],
            });
        case eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eq, decisionId: eX } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, B.wu)(t), eD(eq);
                        },
                    }),
                    ev.intl.string(ev.t.B8ruyY),
                    (0, i.jsx)(h.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, B.W5)(t, eX, () => {
                                    eD(eq), (0, B.wu)(t);
                                });
                        },
                        children: ev.intl.string(ev.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(h.zr9, {
                              onClick: () => Y.A.open(t, eN.BEX.GUILD_AUTOMOD, void 0, eN.nd0.AUTOMOD_MENTION_SPAM),
                              children: ev.intl.string(ev.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eN.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eN.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            s.metadata?.streamKey != null && (0, ei.lk)(s.metadata.streamKey);
                        },
                    }),
                    ev.intl.string(ev.t.rOx44m),
                ],
            });
        case eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.BRAND,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            eD(s.metadata?.dismissUntil);
                        },
                        noticeType: eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ev.intl.string(ev.t["0klLS7"]),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            (0, es.$)(), eD(s.metadata?.dismissUntil);
                        },
                        noticeType: eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ev.intl.string(ev.t.e4y2VM),
                    }),
                ],
            });
        case eN.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(el.A, {});
        case eN.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(et.A, {});
        case eN.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
            return (0, i.jsx)(ee.A, { premiumSubscription: s.metadata.premiumSubscription });
        case eN.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(er.A, {});
        default:
            return null;
    }
});
function eG() {
    let { analyticsLocations: e } = (0, v.Ay)(y.A.NOTICE);
    return (0, i.jsx)(v.f5, { value: e, children: (0, i.jsx)(eU, {}) });
}
