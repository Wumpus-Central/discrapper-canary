n.d(t, {
    A: () => ez,
    w: () => eW,
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
    ef = n(594609),
    ep = n(734057),
    e_ = n(430452),
    eh = n(383501),
    em = n(967198),
    eg = n(287809),
    eE = n(67480),
    eb = n(147964),
    ey = n(519057),
    eO = n(954571),
    eA = n(975571),
    ev = n(723702),
    eS = n(837921),
    eI = n(652215),
    eT = n(502075),
    eC = n(788868),
    eN = n(831502),
    eR = n(731854),
    ew = n(985018),
    eP = n(237082);
function eD(e, t, n) {
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
function ex(e) {
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function eL(e, t) {
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
function ej(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eL(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eM = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, G.B1)(n)) ? void 0 : t.errorCode,
            s = ew.intl.formatToPlainString(ew.t.ejOT95, { errorCode: a }),
            o = (0, r.jsx)(f.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eP.fU,
                selectable: !0,
                children: s,
            });
        return i
            ? (0, r.jsx)(f.DUT, {
                  tag: "span",
                  className: eP.wz,
                  onClick: () => i && open(eA.A.getArticleURL(eI.MVz.AV_ERROR_CODES)),
                  children: o,
              })
            : o;
    },
    ek = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eW();
                    },
                }),
                ew.intl.string(ew.t.o3zuYz),
                (0, r.jsx)(eM, { error: G.iy.NO_INPUT_DEVICES }),
                (0, r.jsx)(f.eCN, {
                    href: eA.A.getArticleURL(eI.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ew.intl.string(ew.t.RYKKox),
                }),
            ],
        });
    },
    eU = "ms-settings:sound-properties";
function eG(e) {
    return (0, ev.isWindows)() && c().satisfies(null === C.A || void 0 === C.A ? void 0 : C.A.os.release, eT.PH)
        ? "".concat(eU, "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let eV = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: n,
                    onClick: () => {
                        eW(), (0, ef.h)();
                    },
                }),
                ew.intl.string(ew.t.ppW3ri),
                (0, r.jsx)(eM, { error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.eCN, {
                    href: eG(t),
                    noticeType: n,
                    children: ew.intl.string(ew.t.pxYBbM),
                }),
            ],
        });
    },
    eF = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: n,
                    onClick: () => {
                        eW(), (0, ef.h)();
                    },
                }),
                ew.intl.string(ew.t.j4gGA4),
                (0, r.jsx)(eM, { error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.eCN, {
                    href: eG(t),
                    noticeType: n,
                    children: ew.intl.string(ew.t.pxYBbM),
                }),
            ],
        });
    },
    eB = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.$Td, {
            color: f.Hv$.DANGER,
            children: [
                (0, r.jsx)(f.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eW(), (0, ef.h)();
                    },
                }),
                ew.intl.string(ew.t.nCO9bI),
                (0, r.jsx)(eM, { error: G.iy.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.eCN, {
                    href: eA.A.getArticleURL(eI.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ew.intl.string(ew.t.RYKKox),
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
                        eW(), (0, ef.h)();
                    },
                }),
                ew.intl.string(ew.t.dNAJ18),
                (0, r.jsx)(eM, {
                    allowClick: !0,
                    error: G.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.zr9, {
                    onClick: () => {
                        (0, ed.openUserSettings)(eu.X.VOICE_AND_VIDEO_PANEL, { section: eI.nc_.VOICE });
                    },
                    children: ew.intl.string(ew.t.I6YlB4),
                }),
            ],
        });
    };
function eY(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), eO.default.track(eI.HAw.APP_NOTICE_VIEWED, n);
}
function eW(e) {
    g.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eK = i.memo(function () {
    var e, t;
    let a = (0, u.bG)([eg.default], () => eg.default.getCurrentUser()),
        l = (0, u.bG)([em.A], () => em.A.getGuildId()),
        c = (0, u.bG)([ey.Ay], () => ey.Ay.getNotice()),
        { analyticsLocations: g } = (0, w.Ay)(),
        C = (0, K.H)(l),
        { windowsMuteAndZeroVolumeDetectionEnabled: R } = (0, $.I)({ location: "AppNotice" });
    i.useEffect(() => {
        (null == c ? void 0 : c.type) != null && eY(c.type, l);
    }, [null == c ? void 0 : c.type, l]),
        i.useEffect(() => {
            if (null != c && c.type === eI.kqX.SURVEY && null != c.metadata) {
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
    let G = (0, J.x5)(eR.oh.AUDIO_INPUT),
        [ef, eO] = i.useState(""),
        [eT, eD] = i.useState(null),
        [eL, eM] = i.useState(null);
    if (
        (i.useEffect(() => {
            if ((0, ev.isWindows)() && R) {
                let e = null == G ? void 0 : G.guid;
                null != e &&
                    "" !== e &&
                    (eO(e),
                    eS.Ay.ensureModule("discord_voice")
                        .then(() => {
                            try {
                                var t, n, r, i;
                                let a = (0, d.lE)();
                                null == a ||
                                    null == (n = a.getDeviceOSMuted) ||
                                    null == (t = n.call(a, e)) ||
                                    t.then((e) => eD(e)),
                                    null == a ||
                                        null == (i = a.getDeviceOSVolume) ||
                                        null == (r = i.call(a, e)) ||
                                        r.then((e) => eM(e));
                            } catch (e) {}
                        })
                        .catch());
            }
        }, [R, null == G ? void 0 : G.guid]),
        null == c)
    )
        return null;
    let eU = null != c.type ? ey.Re[c.type] : null,
        eG = null != c.type ? ey.k3[c.type] : null,
        eK = null != c.type ? ey.f7[c.type] : null,
        ez = ey.pe[c.type];
    if (null != eU)
        return (0, r.jsx)(k.$, {
            dismissibleContent: eU,
            noticeType: c.type,
        });
    if (null != eG)
        return (0, r.jsx)(U._, {
            dismissibleContent: eG,
            noticeType: c.type,
        });
    if (null != eK) return (0, r.jsx)(M.T, { dismissibleContent: eK });
    if (null != ez)
        return (0, r.jsx)(j.r, {
            dismissibleContent: ez,
            noticeType: c.type,
        });
    let eq = null == (e = c.metadata) ? void 0 : e.premiumType;
    switch (c.type) {
        case eI.kqX.LURKING_GUILD:
            return (0, r.jsx)(Q.A, {});
        case eI.kqX.PENDING_MEMBER:
            return (0, r.jsx)(z.A, {});
        case eI.kqX.INVITED_TO_SPEAK:
            return (0, r.jsx)(el.A, {});
        case eI.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eX } = c.metadata;
            return (0, r.jsx)(B.A, { onDismiss: () => eW(eX) });
        case eI.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eZ } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(eZ),
                        noticeType: c.type,
                    }),
                    ew.intl.format(ew.t["08KQ1P"], { helpCenterLink: eA.A.getArticleURL(eI.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eI.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(eQ),
                        noticeType: c.type,
                    }),
                    ew.intl.format(ew.t["8Je+dX"], { helpCenterLink: eA.A.getArticleURL(eI.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eI.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: e$ } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(e$),
                        noticeType: c.type,
                    }),
                    ew.intl.format(ew.t.q8VPLo, { helpCenterLink: eA.A.getArticleURL(eI.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eI.kqX.GENERIC:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
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
        case eI.kqX.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
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
        case eI.kqX.VOICE_DISABLED:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => {
                            E.A.clearRemoteDisconnectVoiceChannelId(), eW();
                        },
                        noticeType: c.type,
                    }),
                    ew.intl.string(ew.t.bOQ3jV),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => {
                            let e = eh.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ep.A.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: ew.intl.string(ew.t.vD60Pv),
                    }),
                ],
            });
        case eI.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => {
                            E.A.clearLastSessionVoiceChannelId(), eW();
                        },
                        noticeType: c.type,
                    }),
                    ew.intl.string(ew.t.jY2lUA),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => {
                            let e = eh.A.getLastSessionVoiceChannelId();
                            null != e && null != ep.A.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: ew.intl.string(ew.t.vD60Pv),
                    }),
                ],
            });
        case eI.kqX.SPOTIFY_AUTO_PAUSED:
            let eJ = N.A.get(eI.fg2.SPOTIFY);
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: c.type,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eP.tV,
                        src: eJ.icon.whiteSVG,
                    }),
                    ew.intl.string(ew.t.D8Cp76),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => (0, ed.openUserSettings)(eu.X.VOICE_AND_VIDEO_PANEL, { section: eI.nc_.VOICE }),
                        noticeType: c.type,
                        children: ew.intl.string(ew.t.NiTd0e),
                    }),
                    (0, r.jsx)(f.MzZ, {
                        className: eP.N0,
                        href: eA.A.getArticleURL(eI.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ew.intl.string(ew.t.CiqAIU),
                    }),
                ],
            });
        case eI.kqX.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    ew.intl.string(ew.t["f+Zaol"]),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: c.type,
                        onClick: () => (C && null != l ? (0, W.Ze)(l) : D.R()),
                        children: ew.intl.string(ew.t.fiNVin),
                    }),
                ],
            });
        case eI.kqX.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    ew.intl.string(ew.t["3sWbf3"]),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: c.type,
                        onClick: () => {
                            h.A.verifyResend(),
                                p.A.show({
                                    title: ew.intl.string(ew.t.LykQYk),
                                    body: ew.intl.format(ew.t.azKEPy, { email: null == a ? void 0 : a.email }),
                                    cancelText: ew.intl.string(ew.t.Vm8akB),
                                    onCancel: D.R,
                                });
                        },
                        children: ew.intl.string(ew.t.WnX4J2),
                    }),
                ],
            });
        case eI.kqX.SCHEDULED_MAINTENANCE:
            if (null == c.metadata) return null;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => y.A.ackScheduledMaintenance(),
                        noticeType: c.type,
                    }),
                    ew.intl.format(ew.t["yb96S+"], c.metadata),
                    (0, r.jsx)(f.eCN, {
                        href: "".concat(eI.qF7.STATUS, "/incidents/").concat(c.metadata.id),
                        noticeType: c.type,
                        children: ew.intl.string(ew.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kqX.NO_INPUT_DETECTED:
            if (((0, $.F)({ location: "AppNotice.trueTriggerPoint" }), (0, ev.isWindows)() && R)) {
                if (!0 === eT)
                    return (0, r.jsx)(eV, {
                        deviceGuid: ef,
                        noticeType: c.type,
                    });
                else if (0 === eL)
                    return (0, r.jsx)(eF, {
                        deviceGuid: ef,
                        noticeType: c.type,
                    });
            }
            if (!e_.A.supports(eR.O5.LOOPBACK)) return (0, r.jsx)(eB, { noticeType: c.type });
            return (0, r.jsx)(eH, { noticeType: c.type });
        case eI.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(ek, { noticeType: c.type });
        case eI.kqX.HARDWARE_MUTE:
            if (null == c.metadata) return null;
            let { vendor: e0, model: e1 } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    ew.intl.format(ew.t.qoDex7, {
                        vendorName: e0.name,
                        modelName: e1.name,
                    }),
                    (0, r.jsx)(f.PMB, {
                        noticeType: c.type,
                        onClick: () => {
                            _.A.setEnableHardwareMuteNotice(!1), eW();
                        },
                    }),
                    (0, r.jsx)(f.eCN, {
                        href: e1.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: c.type,
                        children: ew.intl.string(ew.t["Yl/Riu"]),
                    }),
                ],
            });
        case eI.kqX.STREAMER_MODE:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.STREAMER_MODE,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: eI.kqX.STREAMER_MODE,
                    }),
                    ew.intl.string(ew.t.iEgBXp),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => A.A.setEnabled(!1),
                        noticeType: eI.kqX.STREAMER_MODE,
                        children: ew.intl.string(ew.t.R9GHya),
                    }),
                ],
            });
        case eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == c.metadata) return null;
            let { skuId: e2, applicationId: e3 } = c.metadata,
                e6 = eE.A.get(e2),
                e4 = P.A.getApplication(e3);
            if (null == e6 || null == e4) return null;
            let e5 = { page: eI.liQ.IN_APP };
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => m.X(e6.id),
                        noticeType: eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(f.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eP.PC,
                    }),
                    ew.intl.format(ew.t["g3MU/+"], {
                        applicationName: e4.name,
                        skuName: e6.name,
                    }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, I.j)({
                                applicationId: e4.id,
                                skuId: e6.id,
                                openPremiumPaymentModal: () => {
                                    (0, ee.A)({
                                        initialPlanId: null,
                                        subscriptionTier: eC.pe.TIER_2,
                                        analyticsLocations: g,
                                        analyticsObject: e5,
                                    });
                                },
                                analyticsLocations: g,
                                analyticsLocationObject: e5,
                                context: __OVERLAY__ ? eI.BRT.OVERLAY : eI.BRT.APP,
                            }).then(() => m.X(e6.id)),
                        children: ew.intl.string(ew.t.KEwPYx),
                    }),
                ],
            });
        case eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == c.metadata) return null;
            let { skuId: e, applicationId: t } = c.metadata,
                n = eE.A.get(e),
                i = P.A.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(f.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eP.PC,
                    }),
                    ew.intl.format(ew.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(f.zr9, {
                        children: (0, r.jsx)(o.N_, {
                            onClick: () => eW(),
                            to: {
                                pathname: eI.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ew.intl.string(ew.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eI.kqX.SURVEY: {
            let e = c.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a, embedded: s, id: o } = e;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.CUSTOM,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.SURVEY,
                        onClick: () => {
                            (0, v.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.SURVEY,
                        onClick: () => {
                            s ? (0, er.K)(o) : window.open(a, "_blank"), (0, v.pX)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case eI.kqX.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    ew.intl.string(ew.t["ugxmk/"]),
                    (0, r.jsx)(f.eCN, {
                        href: eA.A.getArticleURL(eI.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: c.type,
                        children: ew.intl.string(ew.t["6ik4Xk"]),
                    }),
                ],
            });
        case eI.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: eI.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    ew.intl.string(ew.t.wVjKGi),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, f.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, r.jsx)(e, ex({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: ew.intl.string(ew.t["1WjMbC"]),
                    }),
                ],
            });
        case eI.kqX.DISPATCH_ERROR:
            if (null == c.metadata) return null;
            let { error: e7 } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: eI.kqX.DISPATCH_ERROR,
                    }),
                    null == e7 ? void 0 : e7.displayMessage,
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, r.jsx)(e, ex({}, t));
                            }),
                        children: ew.intl.string(ew.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == c.metadata) return null;
            let { progress: e8, total: e9, name: te } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DEFAULT,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(x.A, {
                        justify: x.A.Justify.CENTER,
                        children: [
                            null != te
                                ? ew.intl.formatToPlainString(ew.t["pHj+z4"], {
                                      name: "".concat(te),
                                      progress: e8,
                                      total: e9,
                                  })
                                : ew.intl.formatToPlainString(ew.t["lHZn+A"], {
                                      progress: e8,
                                      total: e9,
                                  }),
                            (0, r.jsx)(f.y$y, {
                                type: f.y$y.Type.PULSING_ELLIPSIS,
                                className: eP.gO,
                            }),
                        ],
                    }),
                ],
            });
        case eI.kqX.APPLICATION_TEST_MODE:
            if (null == c.metadata) return null;
            if (null != eb.A.testModeEmbeddedApplicationId)
                return (0, r.jsx)(f.$Td, {
                    color: f.Hv$.WARNING,
                    children: (0, r.jsxs)(x.A, {
                        justify: x.A.Justify.CENTER,
                        align: x.A.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: ew.intl.format(ew.t["1qxVe4"], {
                                    applicationName: c.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(f.PMB, {
                                onClick: S.cL,
                                noticeType: eI.kqX.APPLICATION_TEST_MODE,
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
                            children: ew.intl.format(ew.t.Fv5HrE, { applicationName: c.metadata.applicationName }),
                        }),
                        (0, r.jsx)(T.A, {
                            dropdownSize: T.p.DropdownSizes.SMALL,
                            className: eP.aV,
                            color: T.p.Colors.WHITE,
                            look: T.p.Looks.OUTLINED,
                            size: T.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eI.JJy.NOTIFICATION_BAR,
                                        object: eI.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: c.metadata.applicationId,
                            children: ew.intl.string(ew.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(f.PMB, {
                            onClick: S.cL,
                            noticeType: eI.kqX.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eI.kqX.VIEWING_ROLES:
            return (0, r.jsx)(Z.A, {});
        case eI.kqX.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(f.$Td, {
                color:
                    eq === eC.PremiumTypes.TIER_1
                        ? f.Hv$.PREMIUM_TIER_1
                        : eq === eC.PremiumTypes.TIER_0
                          ? f.Hv$.PREMIUM_TIER_0
                          : f.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(f.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: eP.PC,
                    }),
                    eq === eC.PremiumTypes.TIER_1
                        ? ew.intl.formatToPlainString(ew.t.fXv4wm, { daysLeft: c.metadata.daysLeft })
                        : eq === eC.PremiumTypes.TIER_0
                          ? ew.intl.formatToPlainString(ew.t.ZOHZMr, { daysLeft: c.metadata.daysLeft })
                          : ew.intl.formatToPlainString(ew.t.outyHh, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eW(
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
                                            ej(ex({}, t), {
                                                daysLeft: c.metadata.daysLeft,
                                                premiumType: eq,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: c.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            eq === eC.PremiumTypes.TIER_1
                                ? ew.intl.string(ew.t.BkbUPM)
                                : eq === eC.PremiumTypes.TIER_0
                                  ? ew.intl.string(ew.t.Px978X)
                                  : ew.intl.string(ew.t.LW5tCE),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: tt, dismissUntil: tn } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: c.type,
                        onClick: () => {
                            eW(tn);
                        },
                    }),
                    ew.intl.format(ew.t.zxU0Kp, { daysPastDue: tt }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eW(tn),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, { section: eI.nc_.SUBSCRIPTIONS });
                        },
                        children: ew.intl.string(ew.t.q8rxeS),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ew.intl.string(ew.t.LlZaoX),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, { section: eI.nc_.SUBSCRIPTIONS });
                        },
                        children: ew.intl.string(ew.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ew.intl.string(ew.t["30YfCr"]),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, { section: eI.nc_.SUBSCRIPTIONS });
                        },
                        children: ew.intl.string(ew.t.U5pKWA),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eq === eC.PremiumTypes.TIER_1
                        ? ew.intl.formatToPlainString(ew.t.b6QUvf, { daysLeft: c.metadata.daysLeft })
                        : eq === eC.PremiumTypes.TIER_0
                          ? ew.intl.formatToPlainString(ew.t["tURZ/M"], { daysLeft: c.metadata.daysLeft })
                          : ew.intl.formatToPlainString(ew.t.AyC74I, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eW(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, { section: eI.nc_.SUBSCRIPTIONS });
                        },
                        children:
                            eq === eC.PremiumTypes.TIER_1
                                ? ew.intl.string(ew.t.lboF5O)
                                : eq === eC.PremiumTypes.TIER_0
                                  ? ew.intl.string(ew.t["4UPwOq"])
                                  : ew.intl.string(ew.t["P/VvGb"]),
                    }),
                ],
            });
        case eI.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(q.y, {
                buttonText: null != (t = c.buttonText) ? t : ew.intl.string(ew.t["/g10LC"]),
                onGoBack: c.callback,
                onDismiss: () => eW(),
                showCloseButton: !0,
            });
        case eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(Y.A, {
                guildId: l,
                analyticsLocations: g,
            });
        case eI.kqX.QUARANTINED:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    ew.intl.string(ew.t.DVFJYf),
                    (0, r.jsx)(f.eCN, {
                        href: eN.q,
                        target: "_blank",
                        noticeType: c.type,
                        children: ew.intl.string(ew.t.kvHdFN),
                    }),
                    (0, r.jsx)(f.MzZ, {
                        href: eA.A.getArticleURL(eI.MVz.QUARANTINE),
                        target: "_blank",
                        className: eP.yw,
                        children: ew.intl.string(ew.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kqX.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    ew.intl.string(ew.t.Ugijzi),
                    (0, r.jsx)(f.eCN, {
                        href: "".concat(eI.qF7.STATUS),
                        noticeType: c.type,
                        children: ew.intl.string(ew.t.hvVgAZ),
                    }),
                    (0, r.jsx)(f.PMB, {
                        onClick: () => eW(),
                        noticeType: eI.kqX.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tr, decisionId: ti } = c.metadata;
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.WARNING,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != l && (0, H.wu)(l), eW(tr);
                        },
                    }),
                    ew.intl.string(ew.t.B8ruyY),
                    (0, r.jsx)(f.zr9, {
                        onClick: () => {
                            null != l &&
                                (0, H.W5)(l, ti, () => {
                                    eW(tr), (0, H.wu)(l);
                                });
                        },
                        children: ew.intl.string(ew.t.oX14El),
                    }),
                    null != l
                        ? (0, r.jsx)(f.zr9, {
                              onClick: () => X.A.open(l, eI.BEX.GUILD_AUTOMOD, void 0, eI.nd0.AUTOMOD_MENTION_SPAM),
                              children: ew.intl.string(ew.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eI.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.BRAND,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ea.li(), eW();
                        },
                    }),
                    ew.intl.string(ew.t.I1nKfO),
                    (0, r.jsx)(f.Z_L, {
                        noticeType: eI.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, f.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, r.jsx)(e, ex({}, t));
                            }),
                                ea.li(),
                                eW();
                        },
                        children: ew.intl.string(ew.t.l5xYnH),
                    }),
                ],
            });
        case eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let ta = s()().add(5, "days").toDate();
            return (0, r.jsx)(en.A, {
                dismissCurrentNotice: () => {
                    (0, L.Dr)(ey.pe[eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]), eW(ta);
                },
                subscriptionTier: eC.pe.TIER_2,
            });
        case eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let ts = s()().add(5, "days").toDate();
            return (0, r.jsx)(et.A, {
                dismissCurrentNotice: () => {
                    eW(ts);
                },
                subscriptionTier: eC.pe.TIER_2,
            });
        case eI.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.DANGER,
                children: [
                    (0, r.jsx)(f.PMB, {
                        noticeType: eI.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = c.metadata) ? void 0 : e.streamKey) != null &&
                                (0, ei.lk)(c.metadata.streamKey);
                        },
                    }),
                    ew.intl.string(ew.t.rOx44m),
                ],
            });
        case eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(f.$Td, {
                color: f.Hv$.BRAND,
                children: [
                    (0, r.jsx)(f.PMB, {
                        onClick: () => {
                            var e;
                            eW(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ew.intl.string(ew.t["0klLS7"]),
                    (0, r.jsx)(f.Z_L, {
                        onClick: () => {
                            var e;
                            (0, eo.$)(), eW(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ew.intl.string(ew.t.e4y2VM),
                    }),
                ],
            });
        case eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(es.A, {});
        case eI.kqX.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ec.A, {});
        default:
            return null;
    }
});
function ez() {
    let { analyticsLocations: e } = (0, w.Ay)(R.A.NOTICE);
    return (0, r.jsx)(w.f5, {
        value: e,
        children: (0, r.jsx)(eK, {}),
    });
}
