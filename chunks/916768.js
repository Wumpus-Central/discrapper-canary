n.d(t, { A: () => eD, w: () => eL });
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
    y = n(793574),
    v = n(688810),
    j = n(587895),
    R = n(315982),
    O = n(235986),
    L = n(420216),
    M = n(984870),
    D = n(626262),
    U = n(813803),
    G = n(487329),
    P = n(102609),
    k = n(49463),
    w = n(322223),
    B = n(137207),
    V = n(619029),
    H = n(202384),
    F = n(51758),
    K = n(571139),
    W = n(527012),
    Y = n(997509),
    z = n(475723),
    q = n(598733),
    X = n(801644),
    J = n(74848),
    Q = n(4630),
    $ = n(532794),
    Z = n(234419),
    ee = n(814249),
    et = n(829219),
    en = n(601730),
    ei = n(722255),
    el = n(613491),
    es = n(464473),
    ea = n(780964),
    er = n(840065),
    eo = n(459321),
    ed = n(594609),
    ec = n(734057),
    eu = n(430452),
    eh = n(383501),
    eA = n(967198),
    e_ = n(287809),
    em = n(67480),
    eg = n(147964),
    ep = n(519057),
    ef = n(954571),
    ex = n(975571),
    eE = n(723702),
    eI = n(652215),
    eC = n(502075),
    eN = n(788868),
    eT = n(831502),
    eS = n(731854),
    eb = n(985018),
    ey = n(381703);
let ev = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, G.B1)(t)?.errorCode,
            s = eb.intl.formatToPlainString(eb.t.ejOT95, { errorCode: l }),
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
                  onClick: () => open(ex.A.getArticleURL(eI.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    ej = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(h.$Td, {
            color: h.Hv$.DANGER,
            children: [
                (0, i.jsx)(h.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eL();
                    },
                }),
                eb.intl.string(eb.t.o3zuYz),
                (0, i.jsx)(ev, { error: G.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(h.eCN, {
                    href: ex.A.getArticleURL(eI.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eb.intl.string(eb.t.RYKKox),
                }),
            ],
        });
    };
function eR(e) {
    return (0, eE.isWindows)() && d().satisfies(S.A?.os.release, eC.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eO(e) {
    let t,
        n,
        { noticeType: l } = e,
        s = (0, J.x5)(eS.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: r, inputDeviceOSVolume: o } = (0, c.cf)([eu.Ay], () => ({
            inputDeviceOSMuted: eu.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eu.Ay.getInputDeviceOSVolume(),
        })),
        d = !1;
    return (
        !0 === r
            ? ((t = eb.intl.string(eb.t.ppW3ri)),
              (n = (0, i.jsx)(h.eCN, { href: eR(a), noticeType: l, children: eb.intl.string(eb.t.QghSIq) })))
            : 0 === o
              ? ((t = eb.intl.string(eb.t.j4gGA4)),
                (n = (0, i.jsx)(h.eCN, { href: eR(a), noticeType: l, children: eb.intl.string(eb.t.QghSIq) })))
              : eu.Ay.supports(eS.O5.LOOPBACK)
                ? ((t = eb.intl.string(eb.t.dNAJ18)),
                  (d = !0),
                  (n = (0, i.jsx)(h.zr9, {
                      onClick: () => {
                          (0, er.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: eb.intl.string(eb.t.I6YlB4),
                  })))
                : ((t = eb.intl.string(eb.t.nCO9bI)),
                  (n = (0, i.jsx)(h.eCN, {
                      href: ex.A.getArticleURL(eI.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: eb.intl.string(eb.t.RYKKox),
                  }))),
        (0, i.jsxs)(h.$Td, {
            color: h.Hv$.DANGER,
            children: [
                (0, i.jsx)(h.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eL(), (0, ed.h)();
                    },
                }),
                t,
                (0, i.jsx)(ev, { allowClick: d, error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eL(e) {
    p.A.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eM = l.memo(function () {
    let e = (0, c.bG)([e_.default], () => e_.default.getCurrentUser()),
        t = (0, c.bG)([eA.A], () => eA.A.getGuildId()),
        s = (0, c.bG)([ep.Ay], () => ep.Ay.getNotice()),
        { analyticsLocations: a } = (0, v.Ay)(),
        o = (0, T.Ay)(),
        d = (0, F.H)(t),
        p = (0, Z.V)();
    if (
        (l.useEffect(() => {
            if (s?.type != null) {
                let e;
                if (
                    null == p &&
                    (s.type === eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    p?.trial_id != null && (n.trial_id = p.trial_id),
                    (e = { notice_type: s.type, ...n }),
                    ef.default.track(eI.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [s?.type, t, p]),
        l.useEffect(() => {
            if (null != s && s.type === eI.kqX.SURVEY && null != s.metadata) {
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
    let S = null != s.type ? ep.Re[s.type] : null,
        y = null != s.type ? ep.k3[s.type] : null,
        G = null != s.type ? ep.f7[s.type] : null,
        J = ep.pe[s.type];
    if (null != S) return (0, i.jsx)(D.$, { dismissibleContent: S, noticeType: s.type });
    if (null != y) return (0, i.jsx)(U._, { dismissibleContent: y, noticeType: s.type });
    if (null != G) return (0, i.jsx)(M.T, { dismissibleContent: G });
    if (null != J) return (0, i.jsx)(L.r, { dismissibleContent: J, noticeType: s.type });
    let ed = s.metadata?.premiumType;
    switch (s.type) {
        case eI.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(eo.A, {});
        case eI.kqX.LURKING_GUILD:
            return (0, i.jsx)(q.A, {});
        case eI.kqX.PENDING_MEMBER:
            return (0, i.jsx)(K.A, {});
        case eI.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(el.A, {});
        case eI.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eu } = s.metadata;
            return (0, i.jsx)(w.A, { onDismiss: () => eL(eu) });
        case eI.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eC } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(eC), noticeType: s.type }),
                    eb.intl.format(eb.t["08KQ1P"], { helpCenterLink: ex.A.getArticleURL(eI.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eI.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eS } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(eS), noticeType: s.type }),
                    eb.intl.format(eb.t["8Je+dX"], { helpCenterLink: ex.A.getArticleURL(eI.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eI.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: ev } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(ev), noticeType: s.type }),
                    eb.intl.string(eb.t["9DJgOg"]),
                ],
            });
        case eI.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eR } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(eR), noticeType: s.type }),
                    eb.intl.format(eb.t.q8VPLo, { helpCenterLink: ex.A.getArticleURL(eI.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eI.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eM } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(eM), noticeType: s.type }),
                    eb.intl.format(eE.isPlatformEmbedded ? eb.t.J232TI : eb.t.vceuiL, {
                        helpCenterLink: ex.A.getArticleURL(eI.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: s.type }),
                    eb.intl.string(eb.t.iW0fcQ),
                    (0, i.jsx)(h.eCN, {
                        href: ex.A.getArticleURL(eI.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: s.type,
                        children: eb.intl.string(eb.t.LQG5j6),
                    }),
                ],
            });
        case eI.kqX.GENERIC:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_L, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case eI.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_L, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case eI.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            f.A.clearRemoteDisconnectVoiceChannelId(), eL();
                        },
                        noticeType: s.type,
                    }),
                    eb.intl.string(eb.t.bOQ3jV),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            let e = eh.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ec.A.getChannel(e) && x.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: eb.intl.string(eb.t.vD60Pv),
                    }),
                ],
            });
        case eI.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            f.A.clearLastSessionVoiceChannelId(), eL();
                        },
                        noticeType: s.type,
                    }),
                    eb.intl.string(eb.t.jY2lUA),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            let e = eh.A.getLastSessionVoiceChannelId();
                            null != e && null != ec.A.getChannel(e) && x.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: eb.intl.string(eb.t.vD60Pv),
                    }),
                ],
            });
        case eI.kqX.SPOTIFY_AUTO_PAUSED:
            let eD = b.A.get(eI.fg2.SPOTIFY);
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: s.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: ey.tV,
                        src: (0, u.qB)(o) ? eD.icon.darkSVG : eD.icon.whiteSVG,
                    }),
                    eb.intl.string(eb.t.D8Cp76),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => (0, er.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: s.type,
                        children: eb.intl.string(eb.t.NiTd0e),
                    }),
                    (0, i.jsx)(h.MzZ, {
                        className: ey.uD,
                        href: ex.A.getArticleURL(eI.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eb.intl.string(eb.t.CiqAIU),
                    }),
                ],
            });
        case eI.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    eb.intl.string(eb.t["f+Zaol"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: s.type,
                        onClick: () => (d && null != t ? (0, H.Ze)(t) : R.R()),
                        children: eb.intl.string(eb.t.fiNVin),
                    }),
                ],
            });
        case eI.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    eb.intl.string(eb.t["3sWbf3"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: s.type,
                        onClick: () => {
                            m.A.verifyResend(),
                                A.A.show({
                                    title: eb.intl.string(eb.t.LykQYk),
                                    body: eb.intl.format(eb.t.azKEPy, { email: e?.email }),
                                    cancelText: eb.intl.string(eb.t.Vm8akB),
                                    onCancel: R.R,
                                });
                        },
                        children: eb.intl.string(eb.t.WnX4J2),
                    }),
                ],
            });
        case eI.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => E.A.ackScheduledMaintenance(), noticeType: s.type }),
                    eb.intl.format(eb.t["yb96S+"], s.metadata),
                    (0, i.jsx)(h.eCN, {
                        href: `${eI.qF7.STATUS}/incidents/${s.metadata.id}`,
                        noticeType: s.type,
                        children: eb.intl.string(eb.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eO, { noticeType: s.type });
        case eI.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ej, { noticeType: s.type });
        case eI.kqX.HARDWARE_MUTE:
            if (null != s.metadata) {
                let { vendor: e, model: t } = s.metadata;
                return (0, i.jsxs)(h.$Td, {
                    color: h.Hv$.DANGER,
                    children: [
                        eb.intl.format(eb.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(h.PMB, {
                            noticeType: s.type,
                            onClick: () => {
                                _.A.setEnableHardwareMuteNotice(!1), eL();
                            },
                        }),
                        (0, i.jsx)(h.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: s.type,
                            children: eb.intl.string(eb.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (X.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(h.$Td, {
                    color: h.Hv$.INFO,
                    children: [
                        eb.intl.format(eb.t.QMw8Fd, {}),
                        (0, i.jsx)(h.PMB, {
                            noticeType: s.type,
                            onClick: () => {
                                _.A.setEnableHardwareMuteNotice(!1), eL();
                            },
                        }),
                    ],
                });
            return null;
        case eI.kqX.STREAMER_MODE:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: eI.kqX.STREAMER_MODE }),
                    eb.intl.string(eb.t.iEgBXp),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => I.A.setEnabled(!1),
                        noticeType: eI.kqX.STREAMER_MODE,
                        children: eb.intl.string(eb.t.R9GHya),
                    }),
                ],
            });
        case eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let { skuId: eU, applicationId: eG } = s.metadata,
                eP = em.A.get(eU),
                ek = j.A.getApplication(eG);
            if (null == eP || null == ek) return null;
            let ew = { page: eI.liQ.IN_APP };
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => g.X(eP.id),
                        noticeType: eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: ey.PC }),
                    eb.intl.format(eb.t["g3MU/+"], { applicationName: ek.name, skuName: eP.name }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, Q.j)({
                                applicationId: ek.id,
                                skuId: eP.id,
                                openPremiumPaymentModal: () => {
                                    (0, $.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eN.pe.TIER_2,
                                        analyticsLocations: a,
                                        analyticsObject: ew,
                                    });
                                },
                                analyticsLocations: a,
                                analyticsLocationObject: ew,
                                context: __OVERLAY__ ? eI.BRT.OVERLAY : eI.BRT.APP,
                            }).then(() => g.X(eP.id)),
                        children: eb.intl.string(eb.t.KEwPYx),
                    }),
                ],
            });
        case eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let { skuId: e, applicationId: t } = s.metadata,
                n = em.A.get(e),
                l = j.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => eL(),
                        noticeType: eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: ey.PC }),
                    eb.intl.format(eb.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(h.zr9, {
                        children: (0, i.jsx)(r.N_, {
                            onClick: () => eL(),
                            to: {
                                pathname: eI.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eb.intl.string(eb.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eI.kqX.SURVEY: {
            let e = s.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: a, embedded: r, id: o } = e;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.SURVEY,
                        onClick: () => {
                            (0, C.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.SURVEY,
                        onClick: () => {
                            r ? (0, ee.K)(o) : window.open(a, "_blank"), (0, C.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eI.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    eb.intl.string(eb.t["ugxmk/"]),
                    (0, i.jsx)(h.eCN, {
                        href: ex.A.getArticleURL(eI.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: s.type,
                        children: eb.intl.string(eb.t["6ik4Xk"]),
                    }),
                ],
            });
        case eI.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: eI.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    eb.intl.string(eb.t.wVjKGi),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, h.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: eb.intl.string(eb.t["1WjMbC"]),
                    }),
                ],
            });
        case eI.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let { error: eB } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: eI.kqX.DISPATCH_ERROR }),
                    eB?.displayMessage,
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, h.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: eb.intl.string(eb.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let { progress: eV, total: eH, name: eF } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(h.PMB, { onClick: () => eL(), noticeType: eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(O.A, {
                        justify: O.A.Justify.CENTER,
                        children: [
                            null != eF
                                ? eb.intl.formatToPlainString(eb.t["pHj+z4"], {
                                      name: `${eF}`,
                                      progress: eV,
                                      total: eH,
                                  })
                                : eb.intl.formatToPlainString(eb.t["lHZn+A"], { progress: eV, total: eH }),
                            (0, i.jsx)(h.y$y, { type: h.y$y.Type.PULSING_ELLIPSIS, className: ey.gO }),
                        ],
                    }),
                ],
            });
        case eI.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != eg.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(h.$Td, {
                    color: h.Hv$.WARNING,
                    children: (0, i.jsxs)(O.A, {
                        justify: O.A.Justify.CENTER,
                        align: O.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: eb.intl.format(eb.t["1qxVe4"], {
                                    applicationName: s.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(h.PMB, { onClick: N.cL, noticeType: eI.kqX.APPLICATION_TEST_MODE }),
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
                            children: eb.intl.format(eb.t.Fv5HrE, { applicationName: s.metadata.applicationName }),
                        }),
                        (0, i.jsx)(h.PMB, { onClick: N.cL, noticeType: eI.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eI.kqX.VIEWING_ROLES:
            return (0, i.jsx)(z.A, {});
        case eI.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(h.$Td, {
                color:
                    ed === eN.PremiumTypes.TIER_1
                        ? h.Hv$.PREMIUM_TIER_1
                        : ed === eN.PremiumTypes.TIER_0
                          ? h.Hv$.PREMIUM_TIER_0
                          : h.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(h.tvc, { size: "md", color: "currentColor", className: ey.PC }),
                    ed === eN.PremiumTypes.TIER_1
                        ? eb.intl.formatToPlainString(eb.t.fXv4wm, { daysLeft: s.metadata.daysLeft })
                        : ed === eN.PremiumTypes.TIER_0
                          ? eb.intl.formatToPlainString(eb.t.ZOHZMr, { daysLeft: s.metadata.daysLeft })
                          : eb.intl.formatToPlainString(eb.t.outyHh, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, h.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("2550"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: s.metadata.daysLeft,
                                            premiumType: ed,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: s.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            ed === eN.PremiumTypes.TIER_1
                                ? eb.intl.string(eb.t.BkbUPM)
                                : ed === eN.PremiumTypes.TIER_0
                                  ? eb.intl.string(eb.t.Px978X)
                                  : eb.intl.string(eb.t.LW5tCE),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eK, dismissUntil: eW } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: s.type,
                        onClick: () => {
                            eL(eW);
                        },
                    }),
                    eb.intl.format(eb.t.zxU0Kp, { daysPastDue: eK }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eL(eW), (0, er.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: eb.intl.string(eb.t.q8rxeS),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eb.intl.string(eb.t.LlZaoX),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, er.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: eb.intl.string(eb.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eb.intl.string(eb.t["30YfCr"]),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, er.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: eb.intl.string(eb.t.U5pKWA),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ed === eN.PremiumTypes.TIER_1
                        ? eb.intl.formatToPlainString(eb.t.b6QUvf, { daysLeft: s.metadata.daysLeft })
                        : ed === eN.PremiumTypes.TIER_0
                          ? eb.intl.formatToPlainString(eb.t["tURZ/M"], { daysLeft: s.metadata.daysLeft })
                          : eb.intl.formatToPlainString(eb.t.AyC74I, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_L, {
                        noticeType: eI.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eL(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, er.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            ed === eN.PremiumTypes.TIER_1
                                ? eb.intl.string(eb.t.lboF5O)
                                : ed === eN.PremiumTypes.TIER_0
                                  ? eb.intl.string(eb.t["4UPwOq"])
                                  : eb.intl.string(eb.t["P/VvGb"]),
                    }),
                ],
            });
        case eI.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: s.buttonText ?? eb.intl.string(eb.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => eL(),
                showCloseButton: !0,
            });
        case eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: a });
        case eI.kqX.QUARANTINED:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    eb.intl.string(eb.t.DVFJYf),
                    (0, i.jsx)(h.eCN, {
                        href: eT.q,
                        target: "_blank",
                        noticeType: s.type,
                        children: eb.intl.string(eb.t.kvHdFN),
                    }),
                    (0, i.jsx)(h.MzZ, {
                        href: ex.A.getArticleURL(eI.MVz.QUARANTINE),
                        target: "_blank",
                        className: ey.yw,
                        children: eb.intl.string(eb.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eY, decisionId: ez } = s.metadata;
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.WARNING,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, B.wu)(t), eL(eY);
                        },
                    }),
                    eb.intl.string(eb.t.B8ruyY),
                    (0, i.jsx)(h.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, B.W5)(t, ez, () => {
                                    eL(eY), (0, B.wu)(t);
                                });
                        },
                        children: eb.intl.string(eb.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(h.zr9, {
                              onClick: () => Y.A.open(t, eI.BEX.GUILD_AUTOMOD, void 0, eI.nd0.AUTOMOD_MENTION_SPAM),
                              children: eb.intl.string(eb.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eI.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.DANGER,
                children: [
                    (0, i.jsx)(h.PMB, {
                        noticeType: eI.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            s.metadata?.streamKey != null && (0, et.lk)(s.metadata.streamKey);
                        },
                    }),
                    eb.intl.string(eb.t.rOx44m),
                ],
            });
        case eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(h.$Td, {
                color: h.Hv$.BRAND,
                children: [
                    (0, i.jsx)(h.PMB, {
                        onClick: () => {
                            eL(s.metadata?.dismissUntil);
                        },
                        noticeType: eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eb.intl.string(eb.t["0klLS7"]),
                    (0, i.jsx)(h.Z_L, {
                        onClick: () => {
                            (0, ei.$)(), eL(s.metadata?.dismissUntil);
                        },
                        noticeType: eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eb.intl.string(eb.t.e4y2VM),
                    }),
                ],
            });
        case eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(en.A, {});
        case eI.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(es.A, {});
        default:
            return null;
    }
});
function eD() {
    let { analyticsLocations: e } = (0, v.Ay)(y.A.NOTICE);
    return (0, i.jsx)(v.f5, { value: e, children: (0, i.jsx)(eM, {}) });
}
