n.d(t, { A: () => eU, w: () => eM });
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
    g = n(503703),
    p = n(912851),
    f = n(169604),
    x = n(956793),
    E = n(785796),
    I = n(55619),
    C = n(246605),
    N = n(271866),
    T = n(736653),
    S = n(77729),
    b = n(573648),
    v = n(793574),
    y = n(688810),
    j = n(587895),
    R = n(315982),
    O = n(235986),
    L = n(420216),
    M = n(984870),
    D = n(403881),
    U = n(813803),
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
    Q = n(4630),
    J = n(532794),
    Z = n(234419),
    ee = n(532423),
    et = n(814249),
    en = n(829219),
    ei = n(601730),
    el = n(722255),
    es = n(613491),
    ea = n(464473),
    er = n(780964),
    eo = n(858897),
    ed = n(459321),
    ec = n(594609),
    eu = n(734057),
    eh = n(430452),
    eA = n(383501),
    e_ = n(967198),
    em = n(287809),
    eg = n(67480),
    ep = n(147964),
    ef = n(519057),
    ex = n(954571),
    eE = n(975571),
    eI = n(723702),
    eC = n(652215),
    eN = n(502075),
    eT = n(788868),
    eS = n(831502),
    eb = n(731854),
    ev = n(985018),
    ey = n(571655);
let ej = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, G.B1)(t)?.errorCode,
            s = ev.intl.formatToPlainString(ev.t.ejOT95, { errorCode: l }),
            a = (0, i.jsx)(h.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: ey.fU,
                selectable: !0,
                children: s,
            });
        return n
            ? (0, i.jsx)(h.DUT, {
                  tag: "span",
                  className: ey.wz,
                  onClick: () => open(eE.A.getArticleURL(eC.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    eR = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(h.$Td, {
            color: h.Hv$.DANGER,
            children: [
                (0, i.jsx)(h.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eM();
                    },
                }),
                ev.intl.string(ev.t.o3zuYz),
                (0, i.jsx)(ej, { error: G.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(h.eCN, {
                    href: eE.A.getArticleURL(eC.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ev.intl.string(ev.t.RYKKox),
                }),
            ],
        });
    };
function eO(e) {
    return (0, eI.isWindows)() && d().satisfies(S.A?.os.release, eN.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eL(e) {
    let t,
        n,
        { noticeType: l } = e,
        s = (0, $.x5)(eb.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: r, inputDeviceOSVolume: o } = (0, c.cf)([eh.Ay], () => ({
            inputDeviceOSMuted: eh.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eh.Ay.getInputDeviceOSVolume(),
        })),
        d = !1;
    return (
        !0 === r
            ? ((t = ev.intl.string(ev.t.ppW3ri)),
              (n = (0, i.jsx)(h.eCN, { href: eO(a), noticeType: l, children: ev.intl.string(ev.t.QghSIq) })))
            : 0 === o
              ? ((t = ev.intl.string(ev.t.j4gGA4)),
                (n = (0, i.jsx)(h.eCN, { href: eO(a), noticeType: l, children: ev.intl.string(ev.t.QghSIq) })))
              : eh.Ay.supports(eb.O5.LOOPBACK)
                ? ((t = ev.intl.string(ev.t.dNAJ18)),
                  (d = !0),
                  (n = (0, i.jsx)(h.zr9, {
                      onClick: () => {
                          (0, eo.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: ev.intl.string(ev.t.I6YlB4),
                  })))
                : ((t = ev.intl.string(ev.t.nCO9bI)),
                  (n = (0, i.jsx)(h.eCN, {
                      href: eE.A.getArticleURL(eC.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: ev.intl.string(ev.t.RYKKox),
                  }))),
        (0, i.jsxs)(h.$Td, {
            color: h.Hv$.DANGER,
            children: [
                (0, i.jsx)(h.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eM(), (0, ec.h)();
                    },
                }),
                t,
                (0, i.jsx)(ej, { allowClick: d, error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eM(e) {
    p.A.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eD = l.memo(function () {
    let e = (0, c.bG)([em.default], () => em.default.getCurrentUser()),
        t = (0, c.bG)([e_.A], () => e_.A.getGuildId()),
        s = (0, c.bG)([ef.Ay], () => ef.Ay.getNotice()),
        { analyticsLocations: a } = (0, y.Ay)(),
        o = (0, T.Ay)(),
        d = (0, F.H)(t),
        p = (0, Z.V)();
    if (
        (l.useEffect(() => {
            if (s?.type != null) {
                let e;
                if (
                    null == p &&
                    (s.type === eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === eC.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    p?.trial_id != null && (n.trial_id = p.trial_id),
                    (e = { notice_type: s.type, ...n }),
                    ex.default.track(eC.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [s?.type, t, p]),
        l.useEffect(() => {
            if (null != s && s.type === eC.kqX.SURVEY && null != s.metadata) {
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
    let S = null != s.type ? ef.Re[s.type] : null,
        v = null != s.type ? ef.k3[s.type] : null,
        G = null != s.type ? ef.f7[s.type] : null,
        $ = ef.pe[s.type];
    if (null != S) return (0, i.jsx)(D.$, { dismissibleContent: S, noticeType: s.type });
    if (null != v) return (0, i.jsx)(U._, { dismissibleContent: v, noticeType: s.type });
    if (null != G) return (0, i.jsx)(M.T, { dismissibleContent: G });
    if (null != $) return (0, i.jsx)(L.r, { dismissibleContent: $, noticeType: s.type });
    let ec = s.metadata?.premiumType;
    switch (s.type) {
        case eC.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(ed.A, {});
        case eC.kqX.LURKING_GUILD:
            return (0, i.jsx)(q.A, {});
        case eC.kqX.PENDING_MEMBER:
            return (0, i.jsx)(W.A, {});
        case eC.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(es.A, {});
        case eC.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eh } = s.metadata;
            return (0, i.jsx)(w.A, { onDismiss: () => eM(eh) });
        case eC.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eN } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(eN), noticeType: s.type }),
                    ev.intl.format(ev.t["08KQ1P"], { helpCenterLink: eE.A.getArticleURL(eC.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eC.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eb } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(eb), noticeType: s.type }),
                    ev.intl.format(ev.t["8Je+dX"], { helpCenterLink: eE.A.getArticleURL(eC.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eC.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: ej } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(ej), noticeType: s.type }),
                    ev.intl.string(ev.t["9DJgOg"]),
                ],
            });
        case eC.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eO } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(eO), noticeType: s.type }),
                    ev.intl.format(ev.t.q8VPLo, { helpCenterLink: eE.A.getArticleURL(eC.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eC.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eD } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(eD), noticeType: s.type }),
                    ev.intl.format(eI.isPlatformEmbedded ? ev.t.J232TI : ev.t.vceuiL, {
                        helpCenterLink: eE.A.getArticleURL(eC.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eC.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: s.type }),
                    ev.intl.string(ev.t.iW0fcQ),
                    (0, i.jsx)(h.eCN, {
                        href: eE.A.getArticleURL(eC.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.LQG5j6),
                    }),
                ],
            });
        case eC.kqX.GENERIC:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_L, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case eC.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_L, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case eC.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            f.A.clearRemoteDisconnectVoiceChannelId(), eM();
                        },
                        noticeType: s.type,
                    }),
                    ev.intl.string(ev.t.bOQ3jV),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            let e = eA.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != eu.A.getChannel(e) && x.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.vD60Pv),
                    }),
                ],
            });
        case eC.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            f.A.clearLastSessionVoiceChannelId(), eM();
                        },
                        noticeType: s.type,
                    }),
                    ev.intl.string(ev.t.jY2lUA),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            let e = eA.A.getLastSessionVoiceChannelId();
                            null != e && null != eu.A.getChannel(e) && x.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.vD60Pv),
                    }),
                ],
            });
        case eC.kqX.SPOTIFY_AUTO_PAUSED:
            let eU = b.A.get(eC.fg2.SPOTIFY);
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: s.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: ey.tV,
                        src: (0, u.qB)(o) ? eU.icon.darkSVG : eU.icon.whiteSVG,
                    }),
                    ev.intl.string(ev.t.D8Cp76),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => (0, eo.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.NiTd0e),
                    }),
                    (0, i.jsx)(h.MzZ, {
                        className: ey.uD,
                        href: eE.A.getArticleURL(eC.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ev.intl.string(ev.t.CiqAIU),
                    }),
                ],
            });
        case eC.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    ev.intl.string(ev.t["f+Zaol"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: s.type,
                        onClick: () => (d && null != t ? (0, H.Ze)(t) : R.R()),
                        children: ev.intl.string(ev.t.fiNVin),
                    }),
                ],
            });
        case eC.kqX.UNVERIFIED_ACCOUNT:
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
                                    onCancel: R.R,
                                });
                        },
                        children: ev.intl.string(ev.t.WnX4J2),
                    }),
                ],
            });
        case eC.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => E.A.ackScheduledMaintenance(), noticeType: s.type }),
                    ev.intl.format(ev.t["yb96S+"], s.metadata),
                    (0, i.jsx)(h.eCN, {
                        href: `${eC.qF7.STATUS}/incidents/${s.metadata.id}`,
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.hvVgAZ),
                    }),
                ],
            });
        case eC.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eL, { noticeType: s.type });
        case eC.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(eR, { noticeType: s.type });
        case eC.kqX.HARDWARE_MUTE:
            if (null != s.metadata) {
                let { vendor: e, model: t } = s.metadata;
                return (0, i.jsxs)(h.$Td, {
                    color: h.Hv$.DANGER,
                    children: [
                        ev.intl.format(ev.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(h.PMB, {
                            noticeType: s.type,
                            onClick: () => {
                                _.A.setEnableHardwareMuteNotice(!1), eM();
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
                                _.A.setEnableHardwareMuteNotice(!1), eM();
                            },
                        }),
                    ],
                });
            return null;
        case eC.kqX.STREAMER_MODE:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: eC.kqX.STREAMER_MODE }),
                    ev.intl.string(ev.t.iEgBXp),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => I.A.setEnabled(!1),
                        noticeType: eC.kqX.STREAMER_MODE,
                        children: ev.intl.string(ev.t.R9GHya),
                    }),
                ],
            });
        case eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let { skuId: eG, applicationId: eP } = s.metadata,
                ek = eg.A.get(eG),
                ew = j.A.getApplication(eP);
            if (null == ek || null == ew) return null;
            let eB = { page: eC.liQ.IN_APP };
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => g.X(ek.id),
                        noticeType: eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: ey.PC }),
                    ev.intl.format(ev.t["g3MU/+"], { applicationName: ew.name, skuName: ek.name }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, Q.j)({
                                applicationId: ew.id,
                                skuId: ek.id,
                                openPremiumPaymentModal: () => {
                                    (0, J.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eT.pe.TIER_2,
                                        analyticsLocations: a,
                                        analyticsObject: eB,
                                    });
                                },
                                analyticsLocations: a,
                                analyticsLocationObject: eB,
                                context: __OVERLAY__ ? eC.BRT.OVERLAY : eC.BRT.APP,
                            }).then(() => g.X(ek.id)),
                        children: ev.intl.string(ev.t.KEwPYx),
                    }),
                ],
            });
        case eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let { skuId: e, applicationId: t } = s.metadata,
                n = eg.A.get(e),
                l = j.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => eM(),
                        noticeType: eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: ey.PC }),
                    ev.intl.format(ev.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(h.zr9, {
                        children: (0, i.jsx)(r.N_, {
                            onClick: () => eM(),
                            to: {
                                pathname: eC.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ev.intl.string(ev.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eC.kqX.SURVEY: {
            let e = s.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: a, embedded: r, id: o } = e;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.SURVEY,
                        onClick: () => {
                            (0, C.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.SURVEY,
                        onClick: () => {
                            r ? (0, et.K)(o) : window.open(a, "_blank"), (0, C.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eC.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    ev.intl.string(ev.t["ugxmk/"]),
                    (0, i.jsx)(h.eCN, {
                        href: eE.A.getArticleURL(eC.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: s.type,
                        children: ev.intl.string(ev.t["6ik4Xk"]),
                    }),
                ],
            });
        case eC.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: eC.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ev.intl.string(ev.t.wVjKGi),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
        case eC.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let { error: eV } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: eC.kqX.DISPATCH_ERROR }),
                    eV?.displayMessage,
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, h.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: ev.intl.string(ev.t.hvVgAZ),
                    }),
                ],
            });
        case eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let { progress: eH, total: eF, name: eW } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eM(), noticeType: eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(O.A, {
                        justify: O.A.Justify.CENTER,
                        children: [
                            null != eW
                                ? ev.intl.formatToPlainString(ev.t["pHj+z4"], {
                                      name: `${eW}`,
                                      progress: eH,
                                      total: eF,
                                  })
                                : ev.intl.formatToPlainString(ev.t["lHZn+A"], { progress: eH, total: eF }),
                            (0, i.jsx)(h.y$y, { type: h.y$y.Type.PULSING_ELLIPSIS, className: ey.gO }),
                        ],
                    }),
                ],
            });
        case eC.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != ep.A.testModeEmbeddedApplicationId)
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
                            (0, i.jsx)(h.PMB, { onClick: N.cL, noticeType: eC.kqX.APPLICATION_TEST_MODE }),
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
                        (0, i.jsx)(h.PMB, { onClick: N.cL, noticeType: eC.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eC.kqX.VIEWING_ROLES:
            return (0, i.jsx)(z.A, {});
        case eC.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(h.$Td, {
                color:
                    ec === eT.PremiumTypes.TIER_1
                        ? h.Hv$.PREMIUM_TIER_1
                        : ec === eT.PremiumTypes.TIER_0
                          ? h.Hv$.PREMIUM_TIER_0
                          : h.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: ey.PC }),
                    ec === eT.PremiumTypes.TIER_1
                        ? ev.intl.formatToPlainString(ev.t.fXv4wm, { daysLeft: s.metadata.daysLeft })
                        : ec === eT.PremiumTypes.TIER_0
                          ? ev.intl.formatToPlainString(ev.t.ZOHZMr, { daysLeft: s.metadata.daysLeft })
                          : ev.intl.formatToPlainString(ev.t.outyHh, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, h.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("99590"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: s.metadata.daysLeft,
                                            premiumType: ec,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: s.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            ec === eT.PremiumTypes.TIER_1
                                ? ev.intl.string(ev.t.BkbUPM)
                                : ec === eT.PremiumTypes.TIER_0
                                  ? ev.intl.string(ev.t.Px978X)
                                  : ev.intl.string(ev.t.LW5tCE),
                    }),
                ],
            });
        case eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eK, dismissUntil: eY } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: s.type,
                        onClick: () => {
                            eM(eY);
                        },
                    }),
                    ev.intl.format(ev.t.zxU0Kp, { daysPastDue: eK }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eM(eY), (0, eo.openUserSettings)(er.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ev.intl.string(ev.t.q8rxeS),
                    }),
                ],
            });
        case eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ev.intl.string(ev.t.LlZaoX),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(er.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ev.intl.string(ev.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ev.intl.string(ev.t["30YfCr"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(er.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ev.intl.string(ev.t.U5pKWA),
                    }),
                ],
            });
        case eC.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ec === eT.PremiumTypes.TIER_1
                        ? ev.intl.formatToPlainString(ev.t.b6QUvf, { daysLeft: s.metadata.daysLeft })
                        : ec === eT.PremiumTypes.TIER_0
                          ? ev.intl.formatToPlainString(ev.t["tURZ/M"], { daysLeft: s.metadata.daysLeft })
                          : ev.intl.formatToPlainString(ev.t.AyC74I, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eC.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eM(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(er.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            ec === eT.PremiumTypes.TIER_1
                                ? ev.intl.string(ev.t.lboF5O)
                                : ec === eT.PremiumTypes.TIER_0
                                  ? ev.intl.string(ev.t["4UPwOq"])
                                  : ev.intl.string(ev.t["P/VvGb"]),
                    }),
                ],
            });
        case eC.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(K.y, {
                buttonText: s.buttonText ?? ev.intl.string(ev.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => eM(),
                showCloseButton: !0,
            });
        case eC.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: a });
        case eC.kqX.QUARANTINED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    ev.intl.string(ev.t.DVFJYf),
                    (0, i.jsx)(h.eCN, {
                        href: eS.q,
                        target: "_blank",
                        noticeType: s.type,
                        children: ev.intl.string(ev.t.kvHdFN),
                    }),
                    (0, i.jsx)(h.MzZ, {
                        href: eE.A.getArticleURL(eC.MVz.QUARANTINE),
                        target: "_blank",
                        className: ey.yw,
                        children: ev.intl.string(ev.t.hvVgAZ),
                    }),
                ],
            });
        case eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: ez, decisionId: eq } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, B.wu)(t), eM(ez);
                        },
                    }),
                    ev.intl.string(ev.t.B8ruyY),
                    (0, i.jsx)(h.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, B.W5)(t, eq, () => {
                                    eM(ez), (0, B.wu)(t);
                                });
                        },
                        children: ev.intl.string(ev.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(h.zr9, {
                              onClick: () => Y.A.open(t, eC.BEX.GUILD_AUTOMOD, void 0, eC.nd0.AUTOMOD_MENTION_SPAM),
                              children: ev.intl.string(ev.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eC.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eC.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            s.metadata?.streamKey != null && (0, en.lk)(s.metadata.streamKey);
                        },
                    }),
                    ev.intl.string(ev.t.rOx44m),
                ],
            });
        case eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.BRAND,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            eM(s.metadata?.dismissUntil);
                        },
                        noticeType: eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ev.intl.string(ev.t["0klLS7"]),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            (0, el.$)(), eM(s.metadata?.dismissUntil);
                        },
                        noticeType: eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ev.intl.string(ev.t.e4y2VM),
                    }),
                ],
            });
        case eC.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ei.A, {});
        case eC.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(ee.A, {});
        case eC.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ea.A, {});
        default:
            return null;
    }
});
function eU() {
    let { analyticsLocations: e } = (0, y.Ay)(v.A.NOTICE);
    return (0, i.jsx)(y.f5, { value: e, children: (0, i.jsx)(eD, {}) });
}
