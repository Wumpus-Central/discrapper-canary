n.d(t, { A: () => eM, w: () => eD });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(936504),
    o = n(299855),
    c = n.n(o),
    d = n(311907),
    u = n(397927),
    _ = n(157559),
    E = n(827343),
    T = n(830215),
    A = n(503703),
    I = n(912851),
    N = n(169604),
    p = n(956793),
    m = n(785796),
    R = n(55619),
    h = n(246605),
    S = n(271866),
    g = n(77729),
    C = n(573648),
    O = n(793574),
    y = n(688810),
    x = n(587895),
    f = n(315982),
    P = n(235986),
    D = n(420216),
    U = n(984870),
    M = n(626262),
    L = n(813803),
    j = n(487329),
    b = n(102609),
    v = n(49463),
    k = n(322223),
    G = n(137207),
    B = n(619029),
    w = n(202384),
    H = n(51758),
    F = n(571139),
    V = n(527012),
    $ = n(997509),
    W = n(475723),
    q = n(598733),
    X = n(801644),
    K = n(74848),
    z = n(39771),
    J = n(532794),
    Y = n(234419),
    Q = n(814249),
    Z = n(829219),
    ee = n(601730),
    et = n(722255),
    en = n(613491),
    ei = n(464473),
    el = n(780964),
    er = n(840065),
    es = n(459321),
    ea = n(594609),
    eo = n(734057),
    ec = n(430452),
    ed = n(383501),
    eu = n(967198),
    e_ = n(287809),
    eE = n(67480),
    eT = n(147964),
    eA = n(519057),
    eI = n(954571),
    eN = n(975571),
    ep = n(723702),
    em = n(652215),
    eR = n(502075),
    eh = n(788868),
    eS = n(831502),
    eg = n(731854),
    eC = n(985018),
    eO = n(237082);
let ey = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, j.B1)(t)?.errorCode,
            r = eC.intl.formatToPlainString(eC.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(u.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eO.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(u.DUT, {
                  tag: "span",
                  className: eO.wz,
                  onClick: () => open(eN.A.getArticleURL(em.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ex = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(u.$Td, {
            color: u.Hv$.DANGER,
            children: [
                (0, i.jsx)(u.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eD();
                    },
                }),
                eC.intl.string(eC.t.o3zuYz),
                (0, i.jsx)(ey, { error: j.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(u.eCN, {
                    href: eN.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eC.intl.string(eC.t.RYKKox),
                }),
            ],
        });
    };
function ef(e) {
    return (0, ep.isWindows)() && c().satisfies(g.A?.os.release, eR.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eP(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, K.x5)(eg.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, d.cf)([ec.Ay], () => ({
            inputDeviceOSMuted: ec.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ec.Ay.getInputDeviceOSVolume(),
        })),
        c = !1;
    return (
        !0 === a
            ? ((t = eC.intl.string(eC.t.ppW3ri)),
              (n = (0, i.jsx)(u.eCN, { href: ef(s), noticeType: l, children: eC.intl.string(eC.t.QghSIq) })))
            : 0 === o
              ? ((t = eC.intl.string(eC.t.j4gGA4)),
                (n = (0, i.jsx)(u.eCN, { href: ef(s), noticeType: l, children: eC.intl.string(eC.t.QghSIq) })))
              : ec.Ay.supports(eg.O5.LOOPBACK)
                ? ((t = eC.intl.string(eC.t.dNAJ18)),
                  (c = !0),
                  (n = (0, i.jsx)(u.zr9, {
                      onClick: () => {
                          (0, er.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: eC.intl.string(eC.t.I6YlB4),
                  })))
                : ((t = eC.intl.string(eC.t.nCO9bI)),
                  (n = (0, i.jsx)(u.eCN, {
                      href: eN.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: eC.intl.string(eC.t.RYKKox),
                  }))),
        (0, i.jsxs)(u.$Td, {
            color: u.Hv$.DANGER,
            children: [
                (0, i.jsx)(u.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eD(), (0, ea.h)();
                    },
                }),
                t,
                (0, i.jsx)(ey, { allowClick: c, error: j.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eD(e) {
    I.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eU = l.memo(function () {
    let e = (0, d.bG)([e_.default], () => e_.default.getCurrentUser()),
        t = (0, d.bG)([eu.A], () => eu.A.getGuildId()),
        r = (0, d.bG)([eA.Ay], () => eA.Ay.getNotice()),
        { analyticsLocations: s } = (0, y.Ay)(),
        o = (0, H.H)(t),
        c = (0, Y.V)();
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
                    eI.default.track(em.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, c]),
        l.useEffect(() => {
            if (null != r && r.type === em.kqX.SURVEY && null != r.metadata) {
                let { metadata: e } = r,
                    t = v.A.getUserExperimentDescriptor(e.id);
                null != t && (0, b.LQ)(e.id, t),
                    (async () => {
                        r.metadata?.id != null && (await (0, h.oX)(r.metadata?.id));
                    })();
            }
        }, [r]),
        null == r)
    )
        return null;
    let I = null != r.type ? eA.Re[r.type] : null,
        g = null != r.type ? eA.k3[r.type] : null,
        O = null != r.type ? eA.f7[r.type] : null,
        j = eA.pe[r.type];
    if (null != I) return (0, i.jsx)(M.$, { dismissibleContent: I, noticeType: r.type });
    if (null != g) return (0, i.jsx)(L._, { dismissibleContent: g, noticeType: r.type });
    if (null != O) return (0, i.jsx)(U.T, { dismissibleContent: O });
    if (null != j) return (0, i.jsx)(D.r, { dismissibleContent: j, noticeType: r.type });
    let K = r.metadata?.premiumType;
    switch (r.type) {
        case em.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(es.A, {});
        case em.kqX.LURKING_GUILD:
            return (0, i.jsx)(q.A, {});
        case em.kqX.PENDING_MEMBER:
            return (0, i.jsx)(F.A, {});
        case em.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(en.A, {});
        case em.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ea } = r.metadata;
            return (0, i.jsx)(k.A, { onDismiss: () => eD(ea) });
        case em.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: ec } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(ec), noticeType: r.type }),
                    eC.intl.format(eC.t["08KQ1P"], { helpCenterLink: eN.A.getArticleURL(em.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case em.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eR } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(eR), noticeType: r.type }),
                    eC.intl.format(eC.t["8Je+dX"], { helpCenterLink: eN.A.getArticleURL(em.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case em.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: eg } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(eg), noticeType: r.type }),
                    eC.intl.string(eC.t["9DJgOg"]),
                ],
            });
        case em.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: ey } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(ey), noticeType: r.type }),
                    eC.intl.format(eC.t.q8VPLo, { helpCenterLink: eN.A.getArticleURL(em.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case em.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: ef } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(ef), noticeType: r.type }),
                    eC.intl.format(ep.isPlatformEmbedded ? eC.t.J232TI : eC.t.vceuiL, {
                        helpCenterLink: eN.A.getArticleURL(em.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case em.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: r.type }),
                    eC.intl.string(eC.t.iW0fcQ),
                    (0, i.jsx)(u.eCN, {
                        href: eN.A.getArticleURL(em.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: eC.intl.string(eC.t.LQG5j6),
                    }),
                ],
            });
        case em.kqX.GENERIC:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(u.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case em.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(u.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case em.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), eD();
                        },
                        noticeType: r.type,
                    }),
                    eC.intl.string(eC.t.bOQ3jV),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => {
                            let e = ed.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != eo.A.getChannel(e) && p.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eC.intl.string(eC.t.vD60Pv),
                    }),
                ],
            });
        case em.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), eD();
                        },
                        noticeType: r.type,
                    }),
                    eC.intl.string(eC.t.jY2lUA),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => {
                            let e = ed.A.getLastSessionVoiceChannelId();
                            null != e && null != eo.A.getChannel(e) && p.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eC.intl.string(eC.t.vD60Pv),
                    }),
                ],
            });
        case em.kqX.SPOTIFY_AUTO_PAUSED:
            let eU = C.A.get(em.fg2.SPOTIFY);
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: r.type }),
                    (0, i.jsx)("img", { alt: "", className: eO.tV, src: eU.icon.whiteSVG }),
                    eC.intl.string(eC.t.D8Cp76),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => (0, er.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: r.type,
                        children: eC.intl.string(eC.t.NiTd0e),
                    }),
                    (0, i.jsx)(u.MzZ, {
                        className: eO.N0,
                        href: eN.A.getArticleURL(em.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eC.intl.string(eC.t.CiqAIU),
                    }),
                ],
            });
        case em.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    eC.intl.string(eC.t["f+Zaol"]),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: r.type,
                        onClick: () => (o && null != t ? (0, w.Ze)(t) : f.R()),
                        children: eC.intl.string(eC.t.fiNVin),
                    }),
                ],
            });
        case em.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    eC.intl.string(eC.t["3sWbf3"]),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            T.A.verifyResend(),
                                _.A.show({
                                    title: eC.intl.string(eC.t.LykQYk),
                                    body: eC.intl.format(eC.t.azKEPy, { email: e?.email }),
                                    cancelText: eC.intl.string(eC.t.Vm8akB),
                                    onCancel: f.R,
                                });
                        },
                        children: eC.intl.string(eC.t.WnX4J2),
                    }),
                ],
            });
        case em.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => m.A.ackScheduledMaintenance(), noticeType: r.type }),
                    eC.intl.format(eC.t["yb96S+"], r.metadata),
                    (0, i.jsx)(u.eCN, {
                        href: `${em.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: eC.intl.string(eC.t.hvVgAZ),
                    }),
                ],
            });
        case em.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eP, { noticeType: r.type });
        case em.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ex, { noticeType: r.type });
        case em.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let { vendor: e, model: t } = r.metadata;
                return (0, i.jsxs)(u.$Td, {
                    color: u.Hv$.DANGER,
                    children: [
                        eC.intl.format(eC.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(u.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                E.A.setEnableHardwareMuteNotice(!1), eD();
                            },
                        }),
                        (0, i.jsx)(u.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: r.type,
                            children: eC.intl.string(eC.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (X.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(u.$Td, {
                    color: u.Hv$.INFO,
                    children: [
                        eC.intl.format(eC.t.QMw8Fd, {}),
                        (0, i.jsx)(u.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                E.A.setEnableHardwareMuteNotice(!1), eD();
                            },
                        }),
                    ],
                });
            return null;
        case em.kqX.STREAMER_MODE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: em.kqX.STREAMER_MODE }),
                    eC.intl.string(eC.t.iEgBXp),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => R.A.setEnabled(!1),
                        noticeType: em.kqX.STREAMER_MODE,
                        children: eC.intl.string(eC.t.R9GHya),
                    }),
                ],
            });
        case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: eM, applicationId: eL } = r.metadata,
                ej = eE.A.get(eM),
                eb = x.A.getApplication(eL);
            if (null == ej || null == eb) return null;
            let ev = { page: em.liQ.IN_APP };
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => A.X(ej.id),
                        noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(u.tvc, { size: "md", color: "currentColor", className: eO.PC }),
                    eC.intl.format(eC.t["g3MU/+"], { applicationName: eb.name, skuName: ej.name }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, z.j)({
                                applicationId: eb.id,
                                skuId: ej.id,
                                openPremiumPaymentModal: () => {
                                    (0, J.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eh.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: ev,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: ev,
                                context: __OVERLAY__ ? em.BRT.OVERLAY : em.BRT.APP,
                            }).then(() => A.X(ej.id)),
                        children: eC.intl.string(eC.t.KEwPYx),
                    }),
                ],
            });
        case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eE.A.get(e),
                l = x.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => eD(),
                        noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(u.tvc, { size: "md", color: "currentColor", className: eO.PC }),
                    eC.intl.format(eC.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(u.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => eD(),
                            to: {
                                pathname: em.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eC.intl.string(eC.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case em.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.SURVEY,
                        onClick: () => {
                            (0, h.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, Q.K)(o) : window.open(s, "_blank"), (0, h.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case em.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    eC.intl.string(eC.t["ugxmk/"]),
                    (0, i.jsx)(u.eCN, {
                        href: eN.A.getArticleURL(em.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: eC.intl.string(eC.t["6ik4Xk"]),
                    }),
                ],
            });
        case em.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    eC.intl.string(eC.t.wVjKGi),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, u.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: eC.intl.string(eC.t["1WjMbC"]),
                    }),
                ],
            });
        case em.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: ek } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: em.kqX.DISPATCH_ERROR }),
                    ek?.displayMessage,
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, u.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: eC.intl.string(eC.t.hvVgAZ),
                    }),
                ],
            });
        case em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: eG, total: eB, name: ew } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eD(), noticeType: em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(P.A, {
                        justify: P.A.Justify.CENTER,
                        children: [
                            null != ew
                                ? eC.intl.formatToPlainString(eC.t["pHj+z4"], {
                                      name: `${ew}`,
                                      progress: eG,
                                      total: eB,
                                  })
                                : eC.intl.formatToPlainString(eC.t["lHZn+A"], { progress: eG, total: eB }),
                            (0, i.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS, className: eO.gO }),
                        ],
                    }),
                ],
            });
        case em.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eT.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(u.$Td, {
                    color: u.Hv$.WARNING,
                    children: (0, i.jsxs)(P.A, {
                        justify: P.A.Justify.CENTER,
                        align: P.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: eC.intl.format(eC.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(u.PMB, { onClick: S.cL, noticeType: em.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(u.$Td, {
                color: u.Hv$.WARNING,
                children: (0, i.jsxs)(P.A, {
                    justify: P.A.Justify.CENTER,
                    align: P.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: eC.intl.format(eC.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(u.PMB, { onClick: S.cL, noticeType: em.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case em.kqX.VIEWING_ROLES:
            return (0, i.jsx)(W.A, {});
        case em.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(u.$Td, {
                color:
                    K === eh.PremiumTypes.TIER_1
                        ? u.Hv$.PREMIUM_TIER_1
                        : K === eh.PremiumTypes.TIER_0
                          ? u.Hv$.PREMIUM_TIER_0
                          : u.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(u.tvc, { size: "md", color: "currentColor", className: eO.PC }),
                    K === eh.PremiumTypes.TIER_1
                        ? eC.intl.formatToPlainString(eC.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : K === eh.PremiumTypes.TIER_0
                          ? eC.intl.formatToPlainString(eC.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : eC.intl.formatToPlainString(eC.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, u.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("94934"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: r.metadata.daysLeft,
                                            premiumType: K,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: r.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            K === eh.PremiumTypes.TIER_1
                                ? eC.intl.string(eC.t.BkbUPM)
                                : K === eh.PremiumTypes.TIER_0
                                  ? eC.intl.string(eC.t.Px978X)
                                  : eC.intl.string(eC.t.LW5tCE),
                    }),
                ],
            });
        case em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eH, dismissUntil: eF } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            eD(eF);
                        },
                    }),
                    eC.intl.format(eC.t.zxU0Kp, { daysPastDue: eH }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eD(eF), (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: eC.intl.string(eC.t.q8rxeS),
                    }),
                ],
            });
        case em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eC.intl.string(eC.t.LlZaoX),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: eC.intl.string(eC.t["Zpd+Yq"]),
                    }),
                ],
            });
        case em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eC.intl.string(eC.t["30YfCr"]),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: eC.intl.string(eC.t.U5pKWA),
                    }),
                ],
            });
        case em.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    K === eh.PremiumTypes.TIER_1
                        ? eC.intl.formatToPlainString(eC.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : K === eh.PremiumTypes.TIER_0
                          ? eC.intl.formatToPlainString(eC.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : eC.intl.formatToPlainString(eC.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eD(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            K === eh.PremiumTypes.TIER_1
                                ? eC.intl.string(eC.t.lboF5O)
                                : K === eh.PremiumTypes.TIER_0
                                  ? eC.intl.string(eC.t["4UPwOq"])
                                  : eC.intl.string(eC.t["P/VvGb"]),
                    }),
                ],
            });
        case em.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(V.y, {
                buttonText: r.buttonText ?? eC.intl.string(eC.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => eD(),
                showCloseButton: !0,
            });
        case em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(B.A, { guildId: t, analyticsLocations: s });
        case em.kqX.QUARANTINED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    eC.intl.string(eC.t.DVFJYf),
                    (0, i.jsx)(u.eCN, {
                        href: eS.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: eC.intl.string(eC.t.kvHdFN),
                    }),
                    (0, i.jsx)(u.MzZ, {
                        href: eN.A.getArticleURL(em.MVz.QUARANTINE),
                        target: "_blank",
                        className: eO.yw,
                        children: eC.intl.string(eC.t.hvVgAZ),
                    }),
                ],
            });
        case em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eV, decisionId: e$ } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, G.wu)(t), eD(eV);
                        },
                    }),
                    eC.intl.string(eC.t.B8ruyY),
                    (0, i.jsx)(u.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, G.W5)(t, e$, () => {
                                    eD(eV), (0, G.wu)(t);
                                });
                        },
                        children: eC.intl.string(eC.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(u.zr9, {
                              onClick: () => $.A.open(t, em.BEX.GUILD_AUTOMOD, void 0, em.nd0.AUTOMOD_MENTION_SPAM),
                              children: eC.intl.string(eC.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case em.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: em.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, Z.lk)(r.metadata.streamKey);
                        },
                    }),
                    eC.intl.string(eC.t.rOx44m),
                ],
            });
        case em.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.BRAND,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => {
                            eD(r.metadata?.dismissUntil);
                        },
                        noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eC.intl.string(eC.t["0klLS7"]),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => {
                            (0, et.$)(), eD(r.metadata?.dismissUntil);
                        },
                        noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eC.intl.string(eC.t.e4y2VM),
                    }),
                ],
            });
        case em.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ee.A, {});
        case em.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ei.A, {});
        default:
            return null;
    }
});
function eM() {
    let { analyticsLocations: e } = (0, y.Ay)(O.A.NOTICE);
    return (0, i.jsx)(y.f5, { value: e, children: (0, i.jsx)(eU, {}) });
}
