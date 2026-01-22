n.d(t, {
    A: () => eq,
    w: () => eK,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(758879),
    l = n(299855),
    c = n.n(l),
    u = n(311907),
    d = n(823598),
    f = n(397927),
    p = n(157559),
    _ = n(827343),
    h = n(830215),
    m = n(503703),
    g = n(912851),
    E = n(169604),
    b = n(956793),
    y = n(785796),
    O = n(800342),
    A = n(55619),
    v = n(246605),
    S = n(271866),
    I = n(86980),
    T = n(322337),
    C = n(77729),
    N = n(573648),
    R = n(793574),
    w = n(688810),
    P = n(587895),
    D = n(315982),
    x = n(235986),
    L = n(826673),
    j = n(420216),
    M = n(984870),
    k = n(626262),
    U = n(813803),
    G = n(487329),
    V = n(102609),
    F = n(49463),
    B = n(322223),
    H = n(137207),
    Y = n(619029),
    W = n(202384),
    K = n(51758),
    z = n(571139),
    q = n(527012),
    X = n(997509),
    Z = n(475723),
    Q = n(598733),
    $ = n(37770),
    J = n(74848),
    ee = n(532794),
    et = n(617108),
    en = n(745299),
    er = n(814249),
    ei = n(829219),
    ea = n(597936),
    es = n(601730),
    eo = n(722255),
    el = n(613491),
    ec = n(464473),
    eu = n(780964),
    ed = n(840065),
    ef = n(459321),
    ep = n(594609),
    e_ = n(734057),
    eh = n(430452),
    em = n(383501),
    eg = n(967198),
    eE = n(287809),
    eb = n(67480),
    ey = n(147964),
    eO = n(519057),
    eA = n(954571),
    ev = n(975571),
    eS = n(723702),
    eI = n(837921),
    eT = n(652215),
    eC = n(502075),
    eN = n(788868),
    eR = n(831502),
    ew = n(731854),
    eP = n(985018),
    eD = n(237082);

function ex(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function eL(e) {
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
                ex(e, t, n[t]);
            });
    }
    return e;
}

function ej(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function eM(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ej(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ek = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, G.B1)(n)) ? void 0 : t.errorCode,
            s = eP.intl.formatToPlainString(eP.t.ejOT95, {
                errorCode: a,
            }),
            o = (0, r.jsx)(f.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eD.fU,
                selectable: !0,
                children: s,
            });
        return i
            ? (0, r.jsx)(f.DUT, {
                  tag: "span",
                  className: eD.wz,
                  onClick: () => i && open(ev.A.getArticleURL(eT.MVz.AV_ERROR_CODES)),
                  children: o,
              })
            : o;
    },
    eU = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eK();
                    },
                }),
                eP.intl.string(eP.t.o3zuYz),
                (0, r.jsx)(ek, {
                    error: G.iy.NO_INPUT_DEVICES,
                }),
                (0, r.jsx)(f.eCN, {
                    href: ev.A.getArticleURL(eT.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eP.intl.string(eP.t.RYKKox),
                }),
            ],
        });
    },
    eG = "ms-settings:sound-properties";

function eV(e) {
    return (0, eS.isWindows)() && c().satisfies(null === C.A || void 0 === C.A ? void 0 : C.A.os.release, eC.PH)
        ? "".concat(eG, "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let eF = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: n,
                    onClick: () => {
                        eK(), (0, ep.h)();
                    },
                }),
                eP.intl.string(eP.t.ppW3ri),
                (0, r.jsx)(ek, {
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.eCN, {
                    href: eV(t),
                    noticeType: n,
                    children: eP.intl.string(eP.t.pxYBbM),
                }),
            ],
        });
    },
    eB = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: n,
                    onClick: () => {
                        eK(), (0, ep.h)();
                    },
                }),
                eP.intl.string(eP.t.j4gGA4),
                (0, r.jsx)(ek, {
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.eCN, {
                    href: eV(t),
                    noticeType: n,
                    children: eP.intl.string(eP.t.pxYBbM),
                }),
            ],
        });
    },
    eH = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eK(), (0, ep.h)();
                    },
                }),
                eP.intl.string(eP.t.nCO9bI),
                (0, r.jsx)(ek, {
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.eCN, {
                    href: ev.A.getArticleURL(eT.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eP.intl.string(eP.t.RYKKox),
                }),
            ],
        });
    },
    eY = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eK(), (0, ep.h)();
                    },
                }),
                eP.intl.string(eP.t.dNAJ18),
                (0, r.jsx)(ek, {
                    allowClick: !0,
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.zr9, {
                    onClick: () => {
                        (0, ed.openUserSettings)(eu.X.VOICE_AND_VIDEO_PANEL, {
                            section: eT.nc_.VOICE,
                        });
                    },
                    children: eP.intl.string(eP.t.I6YlB4),
                }),
            ],
        });
    };

function eW(e, t) {
    let n = {
        notice_type: e,
    };
    null != t && (n.guild_id = t), eA.default.track(eT.HAw.APP_NOTICE_VIEWED, n);
}

function eK(e) {
    g.A.dismiss(
        null != e
            ? {
                  untilAtLeast: s()(e),
              }
            : void 0,
    );
}
let ez = i.memo(function () {
    var e, t;
    let a = (0, u.bG)([eE.default], () => eE.default.getCurrentUser()),
        l = (0, u.bG)([eg.A], () => eg.A.getGuildId()),
        c = (0, u.bG)([eO.Ay], () => eO.Ay.getNotice()),
        { analyticsLocations: g } = (0, w.Ay)(),
        C = (0, K.H)(l),
        { windowsMuteAndZeroVolumeDetectionEnabled: R } = (0, $.I)({
            location: "AppNotice",
        });
    i.useEffect(() => {
        (null == c ? void 0 : c.type) != null && eW(c.type, l);
    }, [null == c ? void 0 : c.type, l]),
        i.useEffect(() => {
            if (null != c && c.type === eT.kqX.SURVEY && null != c.metadata) {
                let { metadata: e } = c,
                    t = F.A.getUserExperimentDescriptor(e.id);
                null != t && (0, V.LQ)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = c.metadata) ? void 0 : e.id) != null &&
                            (await (0, v.oX)(null == (t = c.metadata) ? void 0 : t.id));
                    })();
            }
        }, [c]);
    let G = (0, J.x5)(ew.oh.AUDIO_INPUT),
        [ep, eA] = i.useState(""),
        [eC, ex] = i.useState(null),
        [ej, ek] = i.useState(null);
    if (
        (i.useEffect(() => {
            if ((0, eS.isWindows)() && R) {
                let e = null == G ? void 0 : G.guid;
                null != e &&
                    "" !== e &&
                    (eA(e),
                    eI.Ay.ensureModule("discord_voice")
                        .then(() => {
                            try {
                                var t, n, r, i;
                                let a = (0, d.lE)();
                                null == a ||
                                    null == (n = a.getDeviceOSMuted) ||
                                    null == (t = n.call(a, e)) ||
                                    t.then((e) => ex(e)),
                                    null == a ||
                                        null == (i = a.getDeviceOSVolume) ||
                                        null == (r = i.call(a, e)) ||
                                        r.then((e) => ek(e));
                            } catch (e) {}
                        })
                        .catch());
            }
        }, [R, null == G ? void 0 : G.guid]),
        null == c)
    )
        return null;
    let eG = null != c.type ? eO.Re[c.type] : null,
        eV = null != c.type ? eO.k3[c.type] : null,
        ez = null != c.type ? eO.f7[c.type] : null,
        eq = eO.pe[c.type];
    if (null != eG)
        return (0, r.jsx)(k.$, {
            dismissibleContent: eG,
            noticeType: c.type,
        });
    if (null != eV)
        return (0, r.jsx)(U._, {
            dismissibleContent: eV,
            noticeType: c.type,
        });
    if (null != ez)
        return (0, r.jsx)(M.T, {
            dismissibleContent: ez,
        });
    if (null != eq)
        return (0, r.jsx)(j.r, {
            dismissibleContent: eq,
            noticeType: c.type,
        });
    let eX = null == (e = c.metadata) ? void 0 : e.premiumType;
    switch (c.type) {
        case eT.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, r.jsx)(ef.A, {});
        case eT.kqX.LURKING_GUILD:
            return (0, r.jsx)(Q.A, {});
        case eT.kqX.PENDING_MEMBER:
            return (0, r.jsx)(z.A, {});
        case eT.kqX.INVITED_TO_SPEAK:
            return (0, r.jsx)(el.A, {});
        case eT.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eZ } = c.metadata;
            return (0, r.jsx)(B.A, {
                onDismiss: () => eK(eZ),
            });
        case eT.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(eQ),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["08KQ1P"], {
                        helpCenterLink: ev.A.getArticleURL(eT.MVz.WIN32_DEPRECATE),
                    }),
                ],
            });
        case eT.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: e$ } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(e$),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["8Je+dX"], {
                        helpCenterLink: ev.A.getArticleURL(eT.MVz.WIN7_8_DEPRECATE),
                    }),
                ],
            });
        case eT.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eJ } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(eJ),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t.q8VPLo, {
                        helpCenterLink: ev.A.getArticleURL(eT.MVz.MACOS_19_DEPRECATE),
                    }),
                ],
            });
        case eT.kqX.GENERIC:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: c.type,
                    }),
                    c.message,
                    null != c.buttonText
                        ? (0, r.jsx)(f.Z_L, {
                              onClick: c.callback,
                              noticeType: c.type,
                              children: c.buttonText,
                          })
                        : null,
                ],
            });
        case eT.kqX.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: c.type,
                    }),
                    c.message,
                    null != c.buttonText
                        ? (0, r.jsx)(f.Z_L, {
                              onClick: c.callback,
                              noticeType: c.type,
                              children: c.buttonText,
                          })
                        : null,
                ],
            });
        case eT.kqX.VOICE_DISABLED:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => {
                            E.A.clearRemoteDisconnectVoiceChannelId(), eK();
                        },
                        noticeType: c.type,
                    }),
                    eP.intl.string(eP.t.bOQ3jV),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => {
                            let e = em.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != e_.A.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.vD60Pv),
                    }),
                ],
            });
        case eT.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => {
                            E.A.clearLastSessionVoiceChannelId(), eK();
                        },
                        noticeType: c.type,
                    }),
                    eP.intl.string(eP.t.jY2lUA),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => {
                            let e = em.A.getLastSessionVoiceChannelId();
                            null != e && null != e_.A.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.vD60Pv),
                    }),
                ],
            });
        case eT.kqX.SPOTIFY_AUTO_PAUSED:
            let e0 = N.A.get(eT.fg2.SPOTIFY);
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: c.type,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eD.tV,
                        src: e0.icon.whiteSVG,
                    }),
                    eP.intl.string(eP.t.D8Cp76),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () =>
                            (0, ed.openUserSettings)(eu.X.VOICE_AND_VIDEO_PANEL, {
                                section: eT.nc_.VOICE,
                            }),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.NiTd0e),
                    }),
                    (0, r.jsx)(f.MzZ, {
                        className: eD.N0,
                        href: ev.A.getArticleURL(eT.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eP.intl.string(eP.t.CiqAIU),
                    }),
                ],
            });
        case eT.kqX.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    eP.intl.string(eP.t["f+Zaol"]),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: c.type,
                        onClick: () => (C && null != l ? (0, W.Ze)(l) : D.R()),
                        children: eP.intl.string(eP.t.fiNVin),
                    }),
                ],
            });
        case eT.kqX.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    eP.intl.string(eP.t["3sWbf3"]),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: c.type,
                        onClick: () => {
                            h.A.verifyResend(),
                                p.A.show({
                                    title: eP.intl.string(eP.t.LykQYk),
                                    body: eP.intl.format(eP.t.azKEPy, {
                                        email: null == a ? void 0 : a.email,
                                    }),
                                    cancelText: eP.intl.string(eP.t.Vm8akB),
                                    onCancel: D.R,
                                });
                        },
                        children: eP.intl.string(eP.t.WnX4J2),
                    }),
                ],
            });
        case eT.kqX.SCHEDULED_MAINTENANCE:
            if (null == c.metadata) return null;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => y.A.ackScheduledMaintenance(),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["yb96S+"], c.metadata),
                    (0, r.jsx)(f.eCN, {
                        href: "".concat(eT.qF7.STATUS, "/incidents/").concat(c.metadata.id),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eT.kqX.NO_INPUT_DETECTED:
            if (
                ((0, $.F)({
                    location: "AppNotice.trueTriggerPoint",
                }),
                (0, eS.isWindows)() && R)
            ) {
                if (!0 === eC)
                    return (0, r.jsx)(eF, {
                        deviceGuid: ep,
                        noticeType: c.type,
                    });
                else if (0 === ej)
                    return (0, r.jsx)(eB, {
                        deviceGuid: ep,
                        noticeType: c.type,
                    });
            }
            if (!eh.A.supports(ew.O5.LOOPBACK))
                return (0, r.jsx)(eH, {
                    noticeType: c.type,
                });
            return (0, r.jsx)(eY, {
                noticeType: c.type,
            });
        case eT.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(eU, {
                noticeType: c.type,
            });
        case eT.kqX.HARDWARE_MUTE:
            if (null == c.metadata) return null;
            let { vendor: e1, model: e2 } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    eP.intl.format(eP.t.qoDex7, {
                        vendorName: e1.name,
                        modelName: e2.name,
                    }),
                    (0, r.jsx)(f.PMB, {
                        noticeType: c.type,
                        onClick: () => {
                            _.A.setEnableHardwareMuteNotice(!1), eK();
                        },
                    }),
                    (0, r.jsx)(f.eCN, {
                        href: e2.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t["Yl/Riu"]),
                    }),
                ],
            });
        case eT.kqX.STREAMER_MODE:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.STREAMER_MODE,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: eT.kqX.STREAMER_MODE,
                    }),
                    eP.intl.string(eP.t.iEgBXp),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => A.A.setEnabled(!1),
                        noticeType: eT.kqX.STREAMER_MODE,
                        children: eP.intl.string(eP.t.R9GHya),
                    }),
                ],
            });
        case eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == c.metadata) return null;
            let { skuId: e3, applicationId: e6 } = c.metadata,
                e4 = eb.A.get(e3),
                e5 = P.A.getApplication(e6);
            if (null == e4 || null == e5) return null;
            let e7 = {
                page: eT.liQ.IN_APP,
            };
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => m.X(e4.id),
                        noticeType: eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(f.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eD.PC,
                    }),
                    eP.intl.format(eP.t["g3MU/+"], {
                        applicationName: e5.name,
                        skuName: e4.name,
                    }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, I.j)({
                                applicationId: e5.id,
                                skuId: e4.id,
                                openPremiumPaymentModal: () => {
                                    (0, ee.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eN.pe.TIER_2,
                                        analyticsLocations: g,
                                        analyticsObject: e7,
                                    });
                                },
                                analyticsLocations: g,
                                analyticsLocationObject: e7,
                                context: __OVERLAY__ ? eT.BRT.OVERLAY : eT.BRT.APP,
                            }).then(() => m.X(e4.id)),
                        children: eP.intl.string(eP.t.KEwPYx),
                    }),
                ],
            });
        case eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == c.metadata) return null;
            let { skuId: e, applicationId: t } = c.metadata,
                n = eb.A.get(e),
                i = P.A.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(f.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eD.PC,
                    }),
                    eP.intl.format(eP.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(f.zr9, {
                        children: (0, r.jsx)(o.N_, {
                            onClick: () => eK(),
                            to: {
                                pathname: eT.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: {
                                    scrollRestoration: !1,
                                },
                            },
                            children: eP.intl.string(eP.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eT.kqX.SURVEY: {
            let e = c.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a, embedded: s, id: o } = e;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.CUSTOM,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.SURVEY,
                        onClick: () => {
                            (0, v.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.SURVEY,
                        onClick: () => {
                            s ? (0, er.K)(o) : window.open(a, "_blank"), (0, v.pX)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case eT.kqX.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    eP.intl.string(eP.t["ugxmk/"]),
                    (0, r.jsx)(f.eCN, {
                        href: ev.A.getArticleURL(eT.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t["6ik4Xk"]),
                    }),
                ],
            });
        case eT.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: eT.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eP.intl.string(eP.t.wVjKGi),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, f.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        eL(
                                            {
                                                source: "Video unsupported browser",
                                            },
                                            t,
                                        ),
                                    );
                            });
                        },
                        children: eP.intl.string(eP.t["1WjMbC"]),
                    }),
                ],
            });
        case eT.kqX.DISPATCH_ERROR:
            if (null == c.metadata) return null;
            let { error: e8 } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: eT.kqX.DISPATCH_ERROR,
                    }),
                    null == e8 ? void 0 : e8.displayMessage,
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, r.jsx)(e, eL({}, t));
                            }),
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == c.metadata) return null;
            let { progress: e9, total: te, name: tt } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(x.A, {
                        justify: x.A.Justify.CENTER,
                        children: [
                            null != tt
                                ? eP.intl.formatToPlainString(eP.t["pHj+z4"], {
                                      name: "".concat(tt),
                                      progress: e9,
                                      total: te,
                                  })
                                : eP.intl.formatToPlainString(eP.t["lHZn+A"], {
                                      progress: e9,
                                      total: te,
                                  }),
                            (0, r.jsx)(f.y$y, {
                                type: f.y$y.Type.PULSING_ELLIPSIS,
                                className: eD.gO,
                            }),
                        ],
                    }),
                ],
            });
        case eT.kqX.APPLICATION_TEST_MODE:
            if (null == c.metadata) return null;
            if (null != ey.A.testModeEmbeddedApplicationId)
                return (0, r.jsx)(f.$Td, {
                    color: f.Hv$.WARNING,
                    children: (0, r.jsxs)(x.A, {
                        justify: x.A.Justify.CENTER,
                        align: x.A.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eP.intl.format(eP.t["1qxVe4"], {
                                    applicationName: c.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(f.PMB, {
                                onClick: S.cL,
                                noticeType: eT.kqX.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(f.$Td, {
                color: f.Hv$.WARNING,
                children: (0, r.jsxs)(x.A, {
                    justify: x.A.Justify.CENTER,
                    align: x.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eP.intl.format(eP.t.Fv5HrE, {
                                applicationName: c.metadata.applicationName,
                            }),
                        }),
                        (0, r.jsx)(T.A, {
                            dropdownSize: T.p.DropdownSizes.SMALL,
                            className: eD.aV,
                            color: T.p.Colors.WHITE,
                            look: T.p.Looks.OUTLINED,
                            size: T.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eT.JJy.NOTIFICATION_BAR,
                                        object: eT.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: c.metadata.applicationId,
                            children: eP.intl.string(eP.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(f.PMB, {
                            onClick: S.cL,
                            noticeType: eT.kqX.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eT.kqX.VIEWING_ROLES:
            return (0, r.jsx)(Z.A, {});
        case eT.kqX.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(f.$Td, {
                color:
                    eX === eN.PremiumTypes.TIER_1
                        ? f.Hv$.PREMIUM_TIER_1
                        : eX === eN.PremiumTypes.TIER_0
                          ? f.Hv$.PREMIUM_TIER_0
                          : f.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(f.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eD.PC,
                    }),
                    eX === eN.PremiumTypes.TIER_1
                        ? eP.intl.formatToPlainString(eP.t.fXv4wm, {
                              daysLeft: c.metadata.daysLeft,
                          })
                        : eX === eN.PremiumTypes.TIER_0
                          ? eP.intl.formatToPlainString(eP.t.ZOHZMr, {
                                daysLeft: c.metadata.daysLeft,
                            })
                          : eP.intl.formatToPlainString(eP.t.outyHh, {
                                daysLeft: c.metadata.daysLeft,
                            }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, f.mMO)(async () => {
                                    let { default: e } = await Promise.all([n.e("14704"), n.e("47827")]).then(
                                        n.bind(n, 174705),
                                    );
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eM(eL({}, t), {
                                                daysLeft: c.metadata.daysLeft,
                                                premiumType: eX,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: c.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            eX === eN.PremiumTypes.TIER_1
                                ? eP.intl.string(eP.t.BkbUPM)
                                : eX === eN.PremiumTypes.TIER_0
                                  ? eP.intl.string(eP.t.Px978X)
                                  : eP.intl.string(eP.t.LW5tCE),
                    }),
                ],
            });
        case eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: tn, dismissUntil: tr } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: c.type,
                        onClick: () => {
                            eK(tr);
                        },
                    }),
                    eP.intl.format(eP.t.zxU0Kp, {
                        daysPastDue: tn,
                    }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eK(tr),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
                                    section: eT.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children: eP.intl.string(eP.t.q8rxeS),
                    }),
                ],
            });
        case eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eP.intl.string(eP.t.LlZaoX),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
                                    section: eT.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children: eP.intl.string(eP.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eP.intl.string(eP.t["30YfCr"]),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
                                    section: eT.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children: eP.intl.string(eP.t.U5pKWA),
                    }),
                ],
            });
        case eT.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eX === eN.PremiumTypes.TIER_1
                        ? eP.intl.formatToPlainString(eP.t.b6QUvf, {
                              daysLeft: c.metadata.daysLeft,
                          })
                        : eX === eN.PremiumTypes.TIER_0
                          ? eP.intl.formatToPlainString(eP.t["tURZ/M"], {
                                daysLeft: c.metadata.daysLeft,
                            })
                          : eP.intl.formatToPlainString(eP.t.AyC74I, {
                                daysLeft: c.metadata.daysLeft,
                            }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eK(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
                                    section: eT.nc_.SUBSCRIPTIONS,
                                });
                        },
                        children:
                            eX === eN.PremiumTypes.TIER_1
                                ? eP.intl.string(eP.t.lboF5O)
                                : eX === eN.PremiumTypes.TIER_0
                                  ? eP.intl.string(eP.t["4UPwOq"])
                                  : eP.intl.string(eP.t["P/VvGb"]),
                    }),
                ],
            });
        case eT.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(q.y, {
                buttonText: null != (t = c.buttonText) ? t : eP.intl.string(eP.t["/g10LC"]),
                onGoBack: c.callback,
                onDismiss: () => eK(),
                showCloseButton: !0,
            });
        case eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(Y.A, {
                guildId: l,
                analyticsLocations: g,
            });
        case eT.kqX.QUARANTINED:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    eP.intl.string(eP.t.DVFJYf),
                    (0, r.jsx)(f.eCN, {
                        href: eR.q,
                        target: "_blank",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.kvHdFN),
                    }),
                    (0, r.jsx)(f.MzZ, {
                        href: ev.A.getArticleURL(eT.MVz.QUARANTINE),
                        target: "_blank",
                        className: eD.yw,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eT.kqX.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    eP.intl.string(eP.t.Ugijzi),
                    (0, r.jsx)(f.eCN, {
                        href: "".concat(eT.qF7.STATUS),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eK(),
                        noticeType: eT.kqX.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: ti, decisionId: ta } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != l && (0, H.wu)(l), eK(ti);
                        },
                    }),
                    eP.intl.string(eP.t.B8ruyY),
                    (0, r.jsx)(f.zr9, {
                        onClick: () => {
                            null != l &&
                                (0, H.W5)(l, ta, () => {
                                    eK(ti), (0, H.wu)(l);
                                });
                        },
                        children: eP.intl.string(eP.t.oX14El),
                    }),
                    null != l
                        ? (0, r.jsx)(f.zr9, {
                              onClick: () => X.A.open(l, eT.BEX.GUILD_AUTOMOD, void 0, eT.nd0.AUTOMOD_MENTION_SPAM),
                              children: eP.intl.string(eP.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.BRAND,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ea.li(), eK();
                        },
                    }),
                    eP.intl.string(eP.t.I1nKfO),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, f.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, r.jsx)(e, eL({}, t));
                            }),
                                ea.li(),
                                eK();
                        },
                        children: eP.intl.string(eP.t.l5xYnH),
                    }),
                ],
            });
        case eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let ts = s()().add(5, "days").toDate();
            return (0, r.jsx)(en.A, {
                dismissCurrentNotice: () => {
                    (0, L.Dr)(eO.pe[eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]), eK(ts);
                },
                subscriptionTier: eN.pe.TIER_2,
            });
        case eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let to = s()().add(5, "days").toDate();
            return (0, r.jsx)(et.A, {
                dismissCurrentNotice: () => {
                    eK(to);
                },
                subscriptionTier: eN.pe.TIER_2,
            });
        case eT.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eT.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = c.metadata) ? void 0 : e.streamKey) != null &&
                                (0, ei.lk)(c.metadata.streamKey);
                        },
                    }),
                    eP.intl.string(eP.t.rOx44m),
                ],
            });
        case eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.BRAND,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => {
                            var e;
                            eK(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eP.intl.string(eP.t["0klLS7"]),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => {
                            var e;
                            (0, eo.$)(), eK(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eP.intl.string(eP.t.e4y2VM),
                    }),
                ],
            });
        case eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(es.A, {});
        case eT.kqX.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ec.A, {});
        default:
            return null;
    }
});

function eq() {
    let { analyticsLocations: e } = (0, w.Ay)(R.A.NOTICE);
    return (0, r.jsx)(w.f5, {
        value: e,
        children: (0, r.jsx)(ez, {}),
    });
}
