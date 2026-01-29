n.d(t, {
    A: () => eq,
    w: () => ew,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    o = n.n(l),
    a = n(758879),
    s = n(299855),
    c = n.n(s),
    u = n(311907),
    E = n(823598),
    d = n(397927),
    _ = n(157559),
    A = n(827343),
    T = n(830215),
    I = n(503703),
    O = n(912851),
    N = n(169604),
    p = n(956793),
    R = n(785796),
    S = n(800342),
    P = n(55619),
    y = n(246605),
    f = n(271866),
    C = n(86980),
    m = n(322337),
    D = n(77729),
    g = n(573648),
    h = n(793574),
    b = n(688810),
    U = n(587895),
    M = n(315982),
    j = n(235986),
    k = n(420216),
    v = n(984870),
    L = n(626262),
    x = n(813803),
    G = n(709710),
    w = n(102609),
    B = n(49463),
    q = n(322223),
    X = n(137207),
    V = n(619029),
    F = n(202384),
    H = n(51758),
    W = n(571139),
    K = n(527012),
    Y = n(997509),
    $ = n(475723),
    z = n(598733),
    J = n(37770),
    Z = n(74848),
    Q = n(532794),
    ee = n(234419),
    et = n(814249),
    en = n(829219),
    er = n(597936),
    ei = n(601730),
    el = n(722255),
    eo = n(613491),
    ea = n(464473),
    es = n(780964),
    ec = n(840065),
    eu = n(459321),
    eE = n(594609),
    ed = n(734057),
    e_ = n(430452),
    eA = n(383501),
    eT = n(967198),
    eI = n(287809),
    eO = n(67480),
    eN = n(147964),
    ep = n(519057),
    eR = n(954571),
    eS = n(975571),
    eP = n(723702),
    ey = n(837921),
    ef = n(652215),
    eC = n(502075),
    em = n(788868),
    eD = n(831502),
    eg = n(731854),
    eh = n(985018),
    eb = n(237082);

function eU(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let eM = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            l = null == (t = (0, G.B1)(n)) ? void 0 : t.errorCode,
            o = eh.intl.formatToPlainString(eh.t.ejOT95, {
                errorCode: l,
            }),
            a = (0, r.jsx)(d.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eb.fU,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(d.DUT, {
                  tag: "span",
                  className: eb.wz,
                  onClick: () => i && open(eS.A.getArticleURL(ef.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    ej = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ew();
                    },
                }),
                eh.intl.string(eh.t.o3zuYz),
                (0, r.jsx)(eM, {
                    error: G.iy.NO_INPUT_DEVICES,
                }),
                (0, r.jsx)(d.eCN, {
                    href: eS.A.getArticleURL(ef.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eh.intl.string(eh.t.RYKKox),
                }),
            ],
        });
    };

function ek(e) {
    return (0, eP.isWindows)() && c().satisfies(null === D.A || void 0 === D.A ? void 0 : D.A.os.release, eC.PH)
        ? "".concat("ms-settings:sound-properties", "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let ev = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: n,
                    onClick: () => {
                        ew(), (0, eE.h)();
                    },
                }),
                eh.intl.string(eh.t.ppW3ri),
                (0, r.jsx)(eM, {
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.eCN, {
                    href: ek(t),
                    noticeType: n,
                    children: eh.intl.string(eh.t.pxYBbM),
                }),
            ],
        });
    },
    eL = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: n,
                    onClick: () => {
                        ew(), (0, eE.h)();
                    },
                }),
                eh.intl.string(eh.t.j4gGA4),
                (0, r.jsx)(eM, {
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.eCN, {
                    href: ek(t),
                    noticeType: n,
                    children: eh.intl.string(eh.t.pxYBbM),
                }),
            ],
        });
    },
    ex = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ew(), (0, eE.h)();
                    },
                }),
                eh.intl.string(eh.t.nCO9bI),
                (0, r.jsx)(eM, {
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.eCN, {
                    href: eS.A.getArticleURL(ef.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eh.intl.string(eh.t.RYKKox),
                }),
            ],
        });
    },
    eG = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ew(), (0, eE.h)();
                    },
                }),
                eh.intl.string(eh.t.dNAJ18),
                (0, r.jsx)(eM, {
                    allowClick: !0,
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.zr9, {
                    onClick: () => {
                        (0, ec.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, {
                            section: ef.nc_.VOICE,
                        });
                    },
                    children: eh.intl.string(eh.t.I6YlB4),
                }),
            ],
        });
    };

function ew(e) {
    O.A.dismiss(
        null != e
            ? {
                  untilAtLeast: o()(e),
              }
            : void 0,
    );
}
let eB = i.memo(function () {
    var e, t;
    let l = (0, u.bG)([eI.default], () => eI.default.getCurrentUser()),
        o = (0, u.bG)([eT.A], () => eT.A.getGuildId()),
        s = (0, u.bG)([ep.Ay], () => ep.Ay.getNotice()),
        { analyticsLocations: c } = (0, b.Ay)(),
        O = (0, H.H)(o),
        { windowsMuteAndZeroVolumeDetectionEnabled: D } = (0, J.I)({
            location: "AppNotice",
        }),
        h = (0, ee.V)();
    i.useEffect(() => {
        if ((null == s ? void 0 : s.type) != null) {
            let e;
            if (
                null == h &&
                (s.type === ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === ef.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
            )
                return;
            let t = {};
            null != o && (t.guild_id = o),
                (null == h ? void 0 : h.trial_id) != null && (t.trial_id = h.trial_id),
                (e = eU(
                    {
                        notice_type: s.type,
                    },
                    t,
                )),
                eR.default.track(ef.HAw.APP_NOTICE_VIEWED, e);
        }
    }, [null == s ? void 0 : s.type, o, h]),
        i.useEffect(() => {
            if (null != s && s.type === ef.kqX.SURVEY && null != s.metadata) {
                let { metadata: e } = s,
                    t = B.A.getUserExperimentDescriptor(e.id);
                null != t && (0, w.LQ)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = s.metadata) ? void 0 : e.id) != null &&
                            (await (0, y.oX)(null == (t = s.metadata) ? void 0 : t.id));
                    })();
            }
        }, [s]);
    let G = (0, Z.x5)(eg.oh.AUDIO_INPUT),
        [eE, eC] = i.useState(""),
        [eM, ek] = i.useState(null),
        [eB, eq] = i.useState(null);
    if (
        (i.useEffect(() => {
            if ((0, eP.isWindows)() && D) {
                let e = null == G ? void 0 : G.guid;
                null != e &&
                    "" !== e &&
                    (eC(e),
                    ey.Ay.ensureModule("discord_voice")
                        .then(() => {
                            try {
                                var t, n, r, i;
                                let l = (0, E.lE)();
                                null == l ||
                                    null == (n = l.getDeviceOSMuted) ||
                                    null == (t = n.call(l, e)) ||
                                    t.then((e) => ek(e)),
                                    null == l ||
                                        null == (i = l.getDeviceOSVolume) ||
                                        null == (r = i.call(l, e)) ||
                                        r.then((e) => eq(e));
                            } catch (e) {}
                        })
                        .catch());
            }
        }, [D, null == G ? void 0 : G.guid]),
        null == s)
    )
        return null;
    let eX = null != s.type ? ep.Re[s.type] : null,
        eV = null != s.type ? ep.k3[s.type] : null,
        eF = null != s.type ? ep.f7[s.type] : null,
        eH = ep.pe[s.type];
    if (null != eX)
        return (0, r.jsx)(L.$, {
            dismissibleContent: eX,
            noticeType: s.type,
        });
    if (null != eV)
        return (0, r.jsx)(x._, {
            dismissibleContent: eV,
            noticeType: s.type,
        });
    if (null != eF)
        return (0, r.jsx)(v.T, {
            dismissibleContent: eF,
        });
    if (null != eH)
        return (0, r.jsx)(k.r, {
            dismissibleContent: eH,
            noticeType: s.type,
        });
    let eW = null == (e = s.metadata) ? void 0 : e.premiumType;
    switch (s.type) {
        case ef.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, r.jsx)(eu.A, {});
        case ef.kqX.LURKING_GUILD:
            return (0, r.jsx)(z.A, {});
        case ef.kqX.PENDING_MEMBER:
            return (0, r.jsx)(W.A, {});
        case ef.kqX.INVITED_TO_SPEAK:
            return (0, r.jsx)(eo.A, {});
        case ef.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eK } = s.metadata;
            return (0, r.jsx)(q.A, {
                onDismiss: () => ew(eK),
            });
        case ef.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eY } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(eY),
                        noticeType: s.type,
                    }),
                    eh.intl.format(eh.t["08KQ1P"], {
                        helpCenterLink: eS.A.getArticleURL(ef.MVz.WIN32_DEPRECATE),
                    }),
                ],
            });
        case ef.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: e$ } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(e$),
                        noticeType: s.type,
                    }),
                    eh.intl.format(eh.t["8Je+dX"], {
                        helpCenterLink: eS.A.getArticleURL(ef.MVz.WIN7_8_DEPRECATE),
                    }),
                ],
            });
        case ef.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: ez } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(ez),
                        noticeType: s.type,
                    }),
                    eh.intl.format(eh.t.q8VPLo, {
                        helpCenterLink: eS.A.getArticleURL(ef.MVz.MACOS_19_DEPRECATE),
                    }),
                ],
            });
        case ef.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eJ } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(eJ),
                        noticeType: s.type,
                    }),
                    eh.intl.format(eP.isPlatformEmbedded ? eh.t.J232TI : eh.t.vceuiL, {
                        helpCenterLink: eS.A.getArticleURL(ef.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case ef.kqX.GENERIC:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: s.type,
                    }),
                    s.message,
                    null != s.buttonText
                        ? (0, r.jsx)(d.Z_L, {
                              onClick: s.callback,
                              noticeType: s.type,
                              children: s.buttonText,
                          })
                        : null,
                ],
            });
        case ef.kqX.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: s.type,
                    }),
                    s.message,
                    null != s.buttonText
                        ? (0, r.jsx)(d.Z_L, {
                              onClick: s.callback,
                              noticeType: s.type,
                              children: s.buttonText,
                          })
                        : null,
                ],
            });
        case ef.kqX.VOICE_DISABLED:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), ew();
                        },
                        noticeType: s.type,
                    }),
                    eh.intl.string(eh.t.bOQ3jV),
                    (0, r.jsx)(d.Z_L, {
                        onClick: () => {
                            let e = eA.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && p.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: eh.intl.string(eh.t.vD60Pv),
                    }),
                ],
            });
        case ef.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), ew();
                        },
                        noticeType: s.type,
                    }),
                    eh.intl.string(eh.t.jY2lUA),
                    (0, r.jsx)(d.Z_L, {
                        onClick: () => {
                            let e = eA.A.getLastSessionVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && p.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: eh.intl.string(eh.t.vD60Pv),
                    }),
                ],
            });
        case ef.kqX.SPOTIFY_AUTO_PAUSED:
            let eZ = g.A.get(ef.fg2.SPOTIFY);
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: s.type,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eb.tV,
                        src: eZ.icon.whiteSVG,
                    }),
                    eh.intl.string(eh.t.D8Cp76),
                    (0, r.jsx)(d.Z_L, {
                        onClick: () =>
                            (0, ec.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, {
                                section: ef.nc_.VOICE,
                            }),
                        noticeType: s.type,
                        children: eh.intl.string(eh.t.NiTd0e),
                    }),
                    (0, r.jsx)(d.MzZ, {
                        className: eb.N0,
                        href: eS.A.getArticleURL(ef.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eh.intl.string(eh.t.CiqAIU),
                    }),
                ],
            });
        case ef.kqX.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [
                    eh.intl.string(eh.t["f+Zaol"]),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: s.type,
                        onClick: () => (O && null != o ? (0, F.Ze)(o) : M.R()),
                        children: eh.intl.string(eh.t.fiNVin),
                    }),
                ],
            });
        case ef.kqX.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [
                    eh.intl.string(eh.t["3sWbf3"]),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: s.type,
                        onClick: () => {
                            T.A.verifyResend(),
                                _.A.show({
                                    title: eh.intl.string(eh.t.LykQYk),
                                    body: eh.intl.format(eh.t.azKEPy, {
                                        email: null == l ? void 0 : l.email,
                                    }),
                                    cancelText: eh.intl.string(eh.t.Vm8akB),
                                    onCancel: M.R,
                                });
                        },
                        children: eh.intl.string(eh.t.WnX4J2),
                    }),
                ],
            });
        case ef.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => R.A.ackScheduledMaintenance(),
                        noticeType: s.type,
                    }),
                    eh.intl.format(eh.t["yb96S+"], s.metadata),
                    (0, r.jsx)(d.eCN, {
                        href: "".concat(ef.qF7.STATUS, "/incidents/").concat(s.metadata.id),
                        noticeType: s.type,
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                ],
            });
        case ef.kqX.NO_INPUT_DETECTED:
            if (
                ((0, J.F)({
                    location: "AppNotice.trueTriggerPoint",
                }),
                (0, eP.isWindows)() && D)
            ) {
                if (!0 === eM)
                    return (0, r.jsx)(ev, {
                        deviceGuid: eE,
                        noticeType: s.type,
                    });
                else if (0 === eB)
                    return (0, r.jsx)(eL, {
                        deviceGuid: eE,
                        noticeType: s.type,
                    });
            }
            if (!e_.A.supports(eg.O5.LOOPBACK))
                return (0, r.jsx)(ex, {
                    noticeType: s.type,
                });
            return (0, r.jsx)(eG, {
                noticeType: s.type,
            });
        case ef.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(ej, {
                noticeType: s.type,
            });
        case ef.kqX.HARDWARE_MUTE:
            if (null == s.metadata) return null;
            let { vendor: eQ, model: e0 } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    eh.intl.format(eh.t.qoDex7, {
                        vendorName: eQ.name,
                        modelName: e0.name,
                    }),
                    (0, r.jsx)(d.PMB, {
                        noticeType: s.type,
                        onClick: () => {
                            A.A.setEnableHardwareMuteNotice(!1), ew();
                        },
                    }),
                    (0, r.jsx)(d.eCN, {
                        href: e0.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: s.type,
                        children: eh.intl.string(eh.t["Yl/Riu"]),
                    }),
                ],
            });
        case ef.kqX.STREAMER_MODE:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.STREAMER_MODE,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: ef.kqX.STREAMER_MODE,
                    }),
                    eh.intl.string(eh.t.iEgBXp),
                    (0, r.jsx)(d.Z_L, {
                        onClick: () => P.A.setEnabled(!1),
                        noticeType: ef.kqX.STREAMER_MODE,
                        children: eh.intl.string(eh.t.R9GHya),
                    }),
                ],
            });
        case ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let { skuId: e1, applicationId: e9 } = s.metadata,
                e7 = eO.A.get(e1),
                e2 = U.A.getApplication(e9);
            if (null == e7 || null == e2) return null;
            let e6 = {
                page: ef.liQ.IN_APP,
            };
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => I.X(e7.id),
                        noticeType: ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(d.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eb.PC,
                    }),
                    eh.intl.format(eh.t["g3MU/+"], {
                        applicationName: e2.name,
                        skuName: e7.name,
                    }),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, C.j)({
                                applicationId: e2.id,
                                skuId: e7.id,
                                openPremiumPaymentModal: () => {
                                    (0, Q.A)({
                                        initialPlanId: null,
                                        subscriptionTier: em.pe.TIER_2,
                                        analyticsLocations: c,
                                        analyticsObject: e6,
                                    });
                                },
                                analyticsLocations: c,
                                analyticsLocationObject: e6,
                                context: __OVERLAY__ ? ef.BRT.OVERLAY : ef.BRT.APP,
                            }).then(() => I.X(e7.id)),
                        children: eh.intl.string(eh.t.KEwPYx),
                    }),
                ],
            });
        case ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let { skuId: e, applicationId: t } = s.metadata,
                n = eO.A.get(e),
                i = U.A.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(d.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eb.PC,
                    }),
                    eh.intl.format(eh.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(d.zr9, {
                        children: (0, r.jsx)(a.N_, {
                            onClick: () => ew(),
                            to: {
                                pathname: ef.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: {
                                    scrollRestoration: !1,
                                },
                            },
                            children: eh.intl.string(eh.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case ef.kqX.SURVEY: {
            let e = s.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: l, embedded: o, id: a } = e;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.CUSTOM,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.SURVEY,
                        onClick: () => {
                            (0, y.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.SURVEY,
                        onClick: () => {
                            o ? (0, et.K)(a) : window.open(l, "_blank"), (0, y.pX)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case ef.kqX.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    eh.intl.string(eh.t["ugxmk/"]),
                    (0, r.jsx)(d.eCN, {
                        href: eS.A.getArticleURL(ef.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: s.type,
                        children: eh.intl.string(eh.t["6ik4Xk"]),
                    }),
                ],
            });
        case ef.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: ef.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eh.intl.string(eh.t.wVjKGi),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, d.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        eU(
                                            {
                                                source: "Video unsupported browser",
                                            },
                                            t,
                                        ),
                                    );
                            });
                        },
                        children: eh.intl.string(eh.t["1WjMbC"]),
                    }),
                ],
            });
        case ef.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let { error: e8 } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: ef.kqX.DISPATCH_ERROR,
                    }),
                    null == e8 ? void 0 : e8.displayMessage,
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, d.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, r.jsx)(e, eU({}, t));
                            }),
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                ],
            });
        case ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let { progress: e5, total: e3, name: e4 } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(j.A, {
                        justify: j.A.Justify.CENTER,
                        children: [
                            null != e4
                                ? eh.intl.formatToPlainString(eh.t["pHj+z4"], {
                                      name: "".concat(e4),
                                      progress: e5,
                                      total: e3,
                                  })
                                : eh.intl.formatToPlainString(eh.t["lHZn+A"], {
                                      progress: e5,
                                      total: e3,
                                  }),
                            (0, r.jsx)(d.y$y, {
                                type: d.y$y.Type.PULSING_ELLIPSIS,
                                className: eb.gO,
                            }),
                        ],
                    }),
                ],
            });
        case ef.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != eN.A.testModeEmbeddedApplicationId)
                return (0, r.jsx)(d.$Td, {
                    color: d.Hv$.WARNING,
                    children: (0, r.jsxs)(j.A, {
                        justify: j.A.Justify.CENTER,
                        align: j.A.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eh.intl.format(eh.t["1qxVe4"], {
                                    applicationName: s.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(d.PMB, {
                                onClick: f.cL,
                                noticeType: ef.kqX.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(d.$Td, {
                color: d.Hv$.WARNING,
                children: (0, r.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    align: j.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eh.intl.format(eh.t.Fv5HrE, {
                                applicationName: s.metadata.applicationName,
                            }),
                        }),
                        (0, r.jsx)(m.A, {
                            dropdownSize: m.p.DropdownSizes.SMALL,
                            className: eb.aV,
                            color: m.p.Colors.WHITE,
                            look: m.p.Looks.OUTLINED,
                            size: m.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                S.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: ef.JJy.NOTIFICATION_BAR,
                                        object: ef.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: s.metadata.applicationId,
                            children: eh.intl.string(eh.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(d.PMB, {
                            onClick: f.cL,
                            noticeType: ef.kqX.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case ef.kqX.VIEWING_ROLES:
            return (0, r.jsx)($.A, {});
        case ef.kqX.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(d.$Td, {
                color:
                    eW === em.PremiumTypes.TIER_1
                        ? d.Hv$.PREMIUM_TIER_1
                        : eW === em.PremiumTypes.TIER_0
                          ? d.Hv$.PREMIUM_TIER_0
                          : d.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(d.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eb.PC,
                    }),
                    eW === em.PremiumTypes.TIER_1
                        ? eh.intl.formatToPlainString(eh.t.fXv4wm, {
                              daysLeft: s.metadata.daysLeft,
                          })
                        : eW === em.PremiumTypes.TIER_0
                          ? eh.intl.formatToPlainString(eh.t.ZOHZMr, {
                                daysLeft: s.metadata.daysLeft,
                            })
                          : eh.intl.formatToPlainString(eh.t.outyHh, {
                                daysLeft: s.metadata.daysLeft,
                            }),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, d.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("1536"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) => {
                                        var n, i;
                                        return (0, r.jsx)(
                                            e,
                                            ((n = eU({}, t)),
                                            (i = i =
                                                {
                                                    daysLeft: s.metadata.daysLeft,
                                                    premiumType: eW,
                                                    analyticsSource: "Nag Bar",
                                                    premiumSubscription: s.metadata.premiumSubscription,
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(i)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          n,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(i, e),
                                                      );
                                                  }),
                                            n),
                                        );
                                    };
                                });
                        },
                        children:
                            eW === em.PremiumTypes.TIER_1
                                ? eh.intl.string(eh.t.BkbUPM)
                                : eW === em.PremiumTypes.TIER_0
                                  ? eh.intl.string(eh.t.Px978X)
                                  : eh.intl.string(eh.t.LW5tCE),
                    }),
                ],
            });
        case ef.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: te, dismissUntil: tt } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: s.type,
                        onClick: () => {
                            ew(tt);
                        },
                    }),
                    eh.intl.format(eh.t.zxU0Kp, {
                        daysPastDue: te,
                    }),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ew(tt),
                                (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
                                    section: ef.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children: eh.intl.string(eh.t.q8rxeS),
                    }),
                ],
            });
        case ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eh.intl.string(eh.t.LlZaoX),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
                                    section: ef.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children: eh.intl.string(eh.t["Zpd+Yq"]),
                    }),
                ],
            });
        case ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eh.intl.string(eh.t["30YfCr"]),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
                                    section: ef.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children: eh.intl.string(eh.t.U5pKWA),
                    }),
                ],
            });
        case ef.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eW === em.PremiumTypes.TIER_1
                        ? eh.intl.formatToPlainString(eh.t.b6QUvf, {
                              daysLeft: s.metadata.daysLeft,
                          })
                        : eW === em.PremiumTypes.TIER_0
                          ? eh.intl.formatToPlainString(eh.t["tURZ/M"], {
                                daysLeft: s.metadata.daysLeft,
                            })
                          : eh.intl.formatToPlainString(eh.t.AyC74I, {
                                daysLeft: s.metadata.daysLeft,
                            }),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = s.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
                                    section: ef.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children:
                            eW === em.PremiumTypes.TIER_1
                                ? eh.intl.string(eh.t.lboF5O)
                                : eW === em.PremiumTypes.TIER_0
                                  ? eh.intl.string(eh.t["4UPwOq"])
                                  : eh.intl.string(eh.t["P/VvGb"]),
                    }),
                ],
            });
        case ef.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(K.y, {
                buttonText: null != (t = s.buttonText) ? t : eh.intl.string(eh.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => ew(),
                showCloseButton: !0,
            });
        case ef.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(V.A, {
                guildId: o,
                analyticsLocations: c,
            });
        case ef.kqX.QUARANTINED:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    eh.intl.string(eh.t.DVFJYf),
                    (0, r.jsx)(d.eCN, {
                        href: eD.q,
                        target: "_blank",
                        noticeType: s.type,
                        children: eh.intl.string(eh.t.kvHdFN),
                    }),
                    (0, r.jsx)(d.MzZ, {
                        href: eS.A.getArticleURL(ef.MVz.QUARANTINE),
                        target: "_blank",
                        className: eb.yw,
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                ],
            });
        case ef.kqX.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    eh.intl.string(eh.t.Ugijzi),
                    (0, r.jsx)(d.eCN, {
                        href: "".concat(ef.qF7.STATUS),
                        noticeType: s.type,
                        children: eh.intl.string(eh.t.hvVgAZ),
                    }),
                    (0, r.jsx)(d.PMB, {
                        onClick: () => ew(),
                        noticeType: ef.kqX.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case ef.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tn, decisionId: tr } = s.metadata;
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != o && (0, X.wu)(o), ew(tn);
                        },
                    }),
                    eh.intl.string(eh.t.B8ruyY),
                    (0, r.jsx)(d.zr9, {
                        onClick: () => {
                            null != o &&
                                (0, X.W5)(o, tr, () => {
                                    ew(tn), (0, X.wu)(o);
                                });
                        },
                        children: eh.intl.string(eh.t.oX14El),
                    }),
                    null != o
                        ? (0, r.jsx)(d.zr9, {
                              onClick: () => Y.A.open(o, ef.BEX.GUILD_AUTOMOD, void 0, ef.nd0.AUTOMOD_MENTION_SPAM),
                              children: eh.intl.string(eh.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case ef.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.BRAND,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            er.li(), ew();
                        },
                    }),
                    eh.intl.string(eh.t.I1nKfO),
                    (0, r.jsx)(d.Z_L, {
                        noticeType: ef.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, d.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, r.jsx)(e, eU({}, t));
                            }),
                                er.li(),
                                ew();
                        },
                        children: eh.intl.string(eh.t.l5xYnH),
                    }),
                ],
            });
        case ef.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [
                    (0, r.jsx)(d.PMB, {
                        noticeType: ef.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = s.metadata) ? void 0 : e.streamKey) != null &&
                                (0, en.lk)(s.metadata.streamKey);
                        },
                    }),
                    eh.intl.string(eh.t.rOx44m),
                ],
            });
        case ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(d.$Td, {
                color: d.Hv$.BRAND,
                children: [
                    (0, r.jsx)(d.PMB, {
                        onClick: () => {
                            var e;
                            ew(null == (e = s.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eh.intl.string(eh.t["0klLS7"]),
                    (0, r.jsx)(d.Z_L, {
                        onClick: () => {
                            var e;
                            (0, el.$)(), ew(null == (e = s.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eh.intl.string(eh.t.e4y2VM),
                    }),
                ],
            });
        case ef.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(ei.A, {});
        case ef.kqX.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ea.A, {});
        default:
            return null;
    }
});

function eq() {
    let { analyticsLocations: e } = (0, b.Ay)(h.A.NOTICE);
    return (0, r.jsx)(b.f5, {
        value: e,
        children: (0, r.jsx)(eB, {}),
    });
}
