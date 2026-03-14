n.d(t, { A: () => ej, w: () => eM });
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
    p = n(169604),
    N = n(956793),
    m = n(785796),
    h = n(800342),
    R = n(55619),
    S = n(246605),
    g = n(271866),
    C = n(86980),
    O = n(322337),
    y = n(77729),
    x = n(573648),
    f = n(793574),
    P = n(688810),
    D = n(587895),
    U = n(315982),
    M = n(235986),
    L = n(420216),
    j = n(984870),
    b = n(626262),
    v = n(813803),
    k = n(487329),
    G = n(102609),
    B = n(49463),
    w = n(322223),
    H = n(137207),
    V = n(619029),
    F = n(202384),
    $ = n(51758),
    W = n(571139),
    q = n(527012),
    X = n(997509),
    z = n(475723),
    K = n(598733),
    J = n(801644),
    Y = n(74848),
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
    ed = n(734057),
    eu = n(430452),
    e_ = n(383501),
    eE = n(967198),
    eT = n(287809),
    eA = n(67480),
    eI = n(147964),
    ep = n(519057),
    eN = n(954571),
    em = n(975571),
    eh = n(723702),
    eR = n(652215),
    eS = n(502075),
    eg = n(788868),
    eC = n(831502),
    eO = n(731854),
    ey = n(985018),
    ex = n(692324);
let ef = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, k.B1)(t)?.errorCode,
            r = ey.intl.formatToPlainString(ey.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(u.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: ex.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(u.DUT, {
                  tag: "span",
                  className: ex.wz,
                  onClick: () => open(em.A.getArticleURL(eR.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eP = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(u.$Td, {
            color: u.Hv$.DANGER,
            children: [
                (0, i.jsx)(u.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eM();
                    },
                }),
                ey.intl.string(ey.t.o3zuYz),
                (0, i.jsx)(ef, { error: k.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(u.eCN, {
                    href: em.A.getArticleURL(eR.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ey.intl.string(ey.t.RYKKox),
                }),
            ],
        });
    };
function eD(e) {
    return (0, eh.isWindows)() && c().satisfies(y.A?.os.release, eS.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eU(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, Y.x5)(eO.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, d.cf)([eu.Ay], () => ({
            inputDeviceOSMuted: eu.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eu.Ay.getInputDeviceOSVolume(),
        })),
        c = !1;
    return (
        !0 === a
            ? ((t = ey.intl.string(ey.t.ppW3ri)),
              (n = (0, i.jsx)(u.eCN, { href: eD(s), noticeType: l, children: ey.intl.string(ey.t.QghSIq) })))
            : 0 === o
              ? ((t = ey.intl.string(ey.t.j4gGA4)),
                (n = (0, i.jsx)(u.eCN, { href: eD(s), noticeType: l, children: ey.intl.string(ey.t.QghSIq) })))
              : eu.Ay.supports(eO.O5.LOOPBACK)
                ? ((t = ey.intl.string(ey.t.dNAJ18)),
                  (c = !0),
                  (n = (0, i.jsx)(u.zr9, {
                      onClick: () => {
                          (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, { section: eR.nc_.VOICE });
                      },
                      children: ey.intl.string(ey.t.I6YlB4),
                  })))
                : ((t = ey.intl.string(ey.t.nCO9bI)),
                  (n = (0, i.jsx)(u.eCN, {
                      href: em.A.getArticleURL(eR.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: ey.intl.string(ey.t.RYKKox),
                  }))),
        (0, i.jsxs)(u.$Td, {
            color: u.Hv$.DANGER,
            children: [
                (0, i.jsx)(u.PMB, {
                    noticeType: l,
                    onClick: () => {
                        eM(), (0, ec.h)();
                    },
                }),
                t,
                (0, i.jsx)(ef, { allowClick: c, error: k.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eM(e) {
    I.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eL = l.memo(function () {
    let e = (0, d.bG)([eT.default], () => eT.default.getCurrentUser()),
        t = (0, d.bG)([eE.A], () => eE.A.getGuildId()),
        r = (0, d.bG)([ep.Ay], () => ep.Ay.getNotice()),
        { analyticsLocations: s } = (0, P.Ay)(),
        o = (0, $.H)(t),
        c = (0, Z.V)();
    if (
        (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (
                    null == c &&
                    (r.type === eR.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eR.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    c?.trial_id != null && (n.trial_id = c.trial_id),
                    (e = { notice_type: r.type, ...n }),
                    eN.default.track(eR.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, c]),
        l.useEffect(() => {
            if (null != r && r.type === eR.kqX.SURVEY && null != r.metadata) {
                let { metadata: e } = r,
                    t = B.A.getUserExperimentDescriptor(e.id);
                null != t && (0, G.LQ)(e.id, t),
                    (async () => {
                        r.metadata?.id != null && (await (0, S.oX)(r.metadata?.id));
                    })();
            }
        }, [r]),
        null == r)
    )
        return null;
    let I = null != r.type ? ep.Re[r.type] : null,
        y = null != r.type ? ep.k3[r.type] : null,
        f = null != r.type ? ep.f7[r.type] : null,
        k = ep.pe[r.type];
    if (null != I) return (0, i.jsx)(b.$, { dismissibleContent: I, noticeType: r.type });
    if (null != y) return (0, i.jsx)(v._, { dismissibleContent: y, noticeType: r.type });
    if (null != f) return (0, i.jsx)(j.T, { dismissibleContent: f });
    if (null != k) return (0, i.jsx)(L.r, { dismissibleContent: k, noticeType: r.type });
    let Y = r.metadata?.premiumType;
    switch (r.type) {
        case eR.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(eo.A, {});
        case eR.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case eR.kqX.PENDING_MEMBER:
            return (0, i.jsx)(W.A, {});
        case eR.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(el.A, {});
        case eR.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ec } = r.metadata;
            return (0, i.jsx)(w.A, { onDismiss: () => eM(ec) });
        case eR.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eu } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(eu), noticeType: r.type }),
                    ey.intl.format(ey.t["08KQ1P"], { helpCenterLink: em.A.getArticleURL(eR.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eR.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eS } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(eS), noticeType: r.type }),
                    ey.intl.format(ey.t["8Je+dX"], { helpCenterLink: em.A.getArticleURL(eR.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eR.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: eO } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(eO), noticeType: r.type }),
                    ey.intl.string(ey.t["9DJgOg"]),
                ],
            });
        case eR.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: ef } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(ef), noticeType: r.type }),
                    ey.intl.format(ey.t.q8VPLo, { helpCenterLink: em.A.getArticleURL(eR.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eR.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eD } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(eD), noticeType: r.type }),
                    ey.intl.format(eh.isPlatformEmbedded ? ey.t.J232TI : ey.t.vceuiL, {
                        helpCenterLink: em.A.getArticleURL(eR.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eR.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: r.type }),
                    ey.intl.string(ey.t.iW0fcQ),
                    (0, i.jsx)(u.eCN, {
                        href: em.A.getArticleURL(eR.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.LQG5j6),
                    }),
                ],
            });
        case eR.kqX.GENERIC:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(u.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eR.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(u.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eR.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => {
                            p.A.clearRemoteDisconnectVoiceChannelId(), eM();
                        },
                        noticeType: r.type,
                    }),
                    ey.intl.string(ey.t.bOQ3jV),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => {
                            let e = e_.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && N.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.vD60Pv),
                    }),
                ],
            });
        case eR.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => {
                            p.A.clearLastSessionVoiceChannelId(), eM();
                        },
                        noticeType: r.type,
                    }),
                    ey.intl.string(ey.t.jY2lUA),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => {
                            let e = e_.A.getLastSessionVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && N.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.vD60Pv),
                    }),
                ],
            });
        case eR.kqX.SPOTIFY_AUTO_PAUSED:
            let eL = x.A.get(eR.fg2.SPOTIFY);
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: r.type }),
                    (0, i.jsx)("img", { alt: "", className: ex.tV, src: eL.icon.whiteSVG }),
                    ey.intl.string(ey.t.D8Cp76),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, { section: eR.nc_.VOICE }),
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.NiTd0e),
                    }),
                    (0, i.jsx)(u.MzZ, {
                        className: ex.N0,
                        href: em.A.getArticleURL(eR.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ey.intl.string(ey.t.CiqAIU),
                    }),
                ],
            });
        case eR.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    ey.intl.string(ey.t["f+Zaol"]),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: r.type,
                        onClick: () => (o && null != t ? (0, F.Ze)(t) : U.R()),
                        children: ey.intl.string(ey.t.fiNVin),
                    }),
                ],
            });
        case eR.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    ey.intl.string(ey.t["3sWbf3"]),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            T.A.verifyResend(),
                                _.A.show({
                                    title: ey.intl.string(ey.t.LykQYk),
                                    body: ey.intl.format(ey.t.azKEPy, { email: e?.email }),
                                    cancelText: ey.intl.string(ey.t.Vm8akB),
                                    onCancel: U.R,
                                });
                        },
                        children: ey.intl.string(ey.t.WnX4J2),
                    }),
                ],
            });
        case eR.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => m.A.ackScheduledMaintenance(), noticeType: r.type }),
                    ey.intl.format(ey.t["yb96S+"], r.metadata),
                    (0, i.jsx)(u.eCN, {
                        href: `${eR.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eR.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eU, { noticeType: r.type });
        case eR.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(eP, { noticeType: r.type });
        case eR.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let { vendor: e, model: t } = r.metadata;
                return (0, i.jsxs)(u.$Td, {
                    color: u.Hv$.DANGER,
                    children: [
                        ey.intl.format(ey.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(u.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                E.A.setEnableHardwareMuteNotice(!1), eM();
                            },
                        }),
                        (0, i.jsx)(u.eCN, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: r.type,
                            children: ey.intl.string(ey.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (J.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(u.$Td, {
                    color: u.Hv$.INFO,
                    children: [
                        ey.intl.format(ey.t.QMw8Fd, {}),
                        (0, i.jsx)(u.PMB, {
                            noticeType: r.type,
                            onClick: () => {
                                E.A.setEnableHardwareMuteNotice(!1), eM();
                            },
                        }),
                    ],
                });
            return null;
        case eR.kqX.STREAMER_MODE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: eR.kqX.STREAMER_MODE }),
                    ey.intl.string(ey.t.iEgBXp),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => R.A.setEnabled(!1),
                        noticeType: eR.kqX.STREAMER_MODE,
                        children: ey.intl.string(ey.t.R9GHya),
                    }),
                ],
            });
        case eR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: ej, applicationId: eb } = r.metadata,
                ev = eA.A.get(ej),
                ek = D.A.getApplication(eb);
            if (null == ev || null == ek) return null;
            let eG = { page: eR.liQ.IN_APP };
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => A.X(ev.id),
                        noticeType: eR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(u.tvc, { size: "md", color: "currentColor", className: ex.PC }),
                    ey.intl.format(ey.t["g3MU/+"], { applicationName: ek.name, skuName: ev.name }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, C.j)({
                                applicationId: ek.id,
                                skuId: ev.id,
                                openPremiumPaymentModal: () => {
                                    (0, Q.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eg.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: eG,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: eG,
                                context: __OVERLAY__ ? eR.BRT.OVERLAY : eR.BRT.APP,
                            }).then(() => A.X(ev.id)),
                        children: ey.intl.string(ey.t.KEwPYx),
                    }),
                ],
            });
        case eR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eA.A.get(e),
                l = D.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => eM(),
                        noticeType: eR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(u.tvc, { size: "md", color: "currentColor", className: ex.PC }),
                    ey.intl.format(ey.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(u.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => eM(),
                            to: {
                                pathname: eR.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ey.intl.string(ey.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eR.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.SURVEY,
                        onClick: () => {
                            (0, S.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, ee.K)(o) : window.open(s, "_blank"), (0, S.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eR.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    ey.intl.string(ey.t["ugxmk/"]),
                    (0, i.jsx)(u.eCN, {
                        href: em.A.getArticleURL(eR.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t["6ik4Xk"]),
                    }),
                ],
            });
        case eR.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: eR.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ey.intl.string(ey.t.wVjKGi),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, u.mMO)(async () => {
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
        case eR.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: eB } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: eR.kqX.DISPATCH_ERROR }),
                    eB?.displayMessage,
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, u.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eR.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: ew, total: eH, name: eV } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(u.PMB, { onClick: () => eM(), noticeType: eR.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(M.A, {
                        justify: M.A.Justify.CENTER,
                        children: [
                            null != eV
                                ? ey.intl.formatToPlainString(ey.t["pHj+z4"], {
                                      name: `${eV}`,
                                      progress: ew,
                                      total: eH,
                                  })
                                : ey.intl.formatToPlainString(ey.t["lHZn+A"], { progress: ew, total: eH }),
                            (0, i.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS, className: ex.gO }),
                        ],
                    }),
                ],
            });
        case eR.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eI.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(u.$Td, {
                    color: u.Hv$.WARNING,
                    children: (0, i.jsxs)(M.A, {
                        justify: M.A.Justify.CENTER,
                        align: M.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: ey.intl.format(ey.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(u.PMB, { onClick: g.cL, noticeType: eR.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(u.$Td, {
                color: u.Hv$.WARNING,
                children: (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    align: M.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: ey.intl.format(ey.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(O.A, {
                            dropdownSize: O.p.DropdownSizes.SMALL,
                            className: ex.aV,
                            color: O.p.Colors.WHITE,
                            look: O.p.Looks.OUTLINED,
                            size: O.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                h.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eR.JJy.NOTIFICATION_BAR,
                                        object: eR.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: r.metadata.applicationId,
                            children: ey.intl.string(ey.t.Q5ZgpK),
                        }),
                        (0, i.jsx)(u.PMB, { onClick: g.cL, noticeType: eR.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eR.kqX.VIEWING_ROLES:
            return (0, i.jsx)(z.A, {});
        case eR.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(u.$Td, {
                color:
                    Y === eg.PremiumTypes.TIER_1
                        ? u.Hv$.PREMIUM_TIER_1
                        : Y === eg.PremiumTypes.TIER_0
                          ? u.Hv$.PREMIUM_TIER_0
                          : u.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(u.tvc, { size: "md", color: "currentColor", className: ex.PC }),
                    Y === eg.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : Y === eg.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, u.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("41353"),
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("88202"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: r.metadata.daysLeft,
                                            premiumType: Y,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: r.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            Y === eg.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.BkbUPM)
                                : Y === eg.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t.Px978X)
                                  : ey.intl.string(ey.t.LW5tCE),
                    }),
                ],
            });
        case eR.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eF, dismissUntil: e$ } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            eM(e$);
                        },
                    }),
                    ey.intl.format(ey.t.zxU0Kp, { daysPastDue: eF }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eM(e$),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, { section: eR.nc_.SUBSCRIPTIONS });
                        },
                        children: ey.intl.string(ey.t.q8rxeS),
                    }),
                ],
            });
        case eR.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ey.intl.string(ey.t.LlZaoX),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, { section: eR.nc_.SUBSCRIPTIONS });
                        },
                        children: ey.intl.string(ey.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eR.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ey.intl.string(ey.t["30YfCr"]),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, { section: eR.nc_.SUBSCRIPTIONS });
                        },
                        children: ey.intl.string(ey.t.U5pKWA),
                    }),
                ],
            });
        case eR.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    Y === eg.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : Y === eg.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(u.Z_L, {
                        noticeType: eR.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            eM(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, { section: eR.nc_.SUBSCRIPTIONS });
                        },
                        children:
                            Y === eg.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.lboF5O)
                                : Y === eg.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t["4UPwOq"])
                                  : ey.intl.string(ey.t["P/VvGb"]),
                    }),
                ],
            });
        case eR.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(q.y, {
                buttonText: r.buttonText ?? ey.intl.string(ey.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => eM(),
                showCloseButton: !0,
            });
        case eR.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: s });
        case eR.kqX.QUARANTINED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    ey.intl.string(ey.t.DVFJYf),
                    (0, i.jsx)(u.eCN, {
                        href: eC.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: ey.intl.string(ey.t.kvHdFN),
                    }),
                    (0, i.jsx)(u.MzZ, {
                        href: em.A.getArticleURL(eR.MVz.QUARANTINE),
                        target: "_blank",
                        className: ex.yw,
                        children: ey.intl.string(ey.t.hvVgAZ),
                    }),
                ],
            });
        case eR.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eW, decisionId: eq } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, H.wu)(t), eM(eW);
                        },
                    }),
                    ey.intl.string(ey.t.B8ruyY),
                    (0, i.jsx)(u.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, H.W5)(t, eq, () => {
                                    eM(eW), (0, H.wu)(t);
                                });
                        },
                        children: ey.intl.string(ey.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(u.zr9, {
                              onClick: () => X.A.open(t, eR.BEX.GUILD_AUTOMOD, void 0, eR.nd0.AUTOMOD_MENTION_SPAM),
                              children: ey.intl.string(ey.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eR.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [
                    (0, i.jsx)(u.PMB, {
                        noticeType: eR.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, et.lk)(r.metadata.streamKey);
                        },
                    }),
                    ey.intl.string(ey.t.rOx44m),
                ],
            });
        case eR.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.BRAND,
                children: [
                    (0, i.jsx)(u.PMB, {
                        onClick: () => {
                            eM(r.metadata?.dismissUntil);
                        },
                        noticeType: eR.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ey.intl.string(ey.t["0klLS7"]),
                    (0, i.jsx)(u.Z_L, {
                        onClick: () => {
                            (0, ei.$)(), eM(r.metadata?.dismissUntil);
                        },
                        noticeType: eR.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ey.intl.string(ey.t.e4y2VM),
                    }),
                ],
            });
        case eR.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(en.A, {});
        case eR.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(er.A, {});
        default:
            return null;
    }
});
function ej() {
    let { analyticsLocations: e } = (0, P.Ay)(f.A.NOTICE);
    return (0, i.jsx)(P.f5, { value: e, children: (0, i.jsx)(eL, {}) });
}
