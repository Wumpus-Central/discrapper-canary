n.d(t, { A: () => ej, w: () => ex });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(758879),
    o = n(299855),
    E = n.n(o),
    c = n(311907),
    _ = n(397927),
    d = n(157559),
    u = n(827343),
    A = n(830215),
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
    h = n(573648),
    M = n(793574),
    g = n(688810),
    y = n(587895),
    f = n(315982),
    L = n(235986),
    k = n(420216),
    x = n(984870),
    G = n(626262),
    j = n(813803),
    B = n(709710),
    q = n(102609),
    v = n(49463),
    X = n(322223),
    b = n(137207),
    F = n(619029),
    V = n(202384),
    w = n(51758),
    H = n(571139),
    W = n(527012),
    Y = n(997509),
    K = n(475723),
    $ = n(598733),
    z = n(37770),
    Q = n(74848),
    J = n(532794),
    Z = n(234419),
    ee = n(814249),
    et = n(829219),
    en = n(597936),
    ei = n(601730),
    el = n(722255),
    er = n(613491),
    es = n(464473),
    ea = n(780964),
    eo = n(840065),
    eE = n(459321),
    ec = n(128733),
    e_ = n(594609),
    ed = n(734057),
    eu = n(430452),
    eA = n(383501),
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
    eh = n(731854),
    eM = n(985018),
    eg = n(237082);
let ey = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, B.B1)(t)?.errorCode,
            r = eM.intl.formatToPlainString(eM.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(_.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eg.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(_.DUT, {
                  tag: "span",
                  className: eg.wz,
                  onClick: () => n && open(eC.A.getArticleURL(eD.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ef = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ex();
                    },
                }),
                eM.intl.string(eM.t.o3zuYz),
                (0, i.jsx)(ey, { error: B.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(_.eCN, {
                    href: eC.A.getArticleURL(eD.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eM.intl.string(eM.t.RYKKox),
                }),
            ],
        });
    };
function eL(e) {
    return (0, eP.isWindows)() && E().satisfies(U.A?.os.release, ep.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ek(e) {
    let t,
        n,
        { noticeType: l } = e,
        { windowsMuteAndZeroVolumeDetectionEnabled: r } = (0, z.I)({ location: "AudioIssueNoticeNoInput" }),
        s = (0, Q.x5)(eh.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: d } = (0, c.cf)([eu.A], () => ({
            inputDeviceOSMuted: eu.A.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eu.A.getInputDeviceOSVolume(),
        })),
        u = (0, eP.isWindows)() && E().satisfies(U.A?.os.release, ep.PH) && r,
        A = !1;
    return (
        u && !0 === o
            ? ((t = eM.intl.string(eM.t.ppW3ri)),
              (n = (0, i.jsx)(_.eCN, { href: eL(a), noticeType: l, children: eM.intl.string(eM.t.QghSIq) })))
            : u && 0 === d
              ? ((t = eM.intl.string(eM.t.j4gGA4)),
                (n = (0, i.jsx)(_.eCN, { href: eL(a), noticeType: l, children: eM.intl.string(eM.t.QghSIq) })))
              : eu.A.supports(eh.O5.LOOPBACK)
                ? ((t = eM.intl.string(eM.t.dNAJ18)),
                  (A = !0),
                  (n = (0, i.jsx)(_.zr9, {
                      onClick: () => {
                          (0, eo.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, { section: eD.nc_.VOICE });
                      },
                      children: eM.intl.string(eM.t.I6YlB4),
                  })))
                : ((t = eM.intl.string(eM.t.nCO9bI)),
                  (n = (0, i.jsx)(_.eCN, {
                      href: eC.A.getArticleURL(eD.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: eM.intl.string(eM.t.RYKKox),
                  }))),
        (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: l,
                    onClick: () => {
                        ex(), (0, e_.h)();
                    },
                }),
                t,
                (0, i.jsx)(ey, { allowClick: A, error: B.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ex(e) {
    I.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eG = l.memo(function () {
    let e = (0, c.bG)([eI.default], () => eI.default.getCurrentUser()),
        t = (0, c.bG)([eT.A], () => eT.A.getGuildId()),
        r = (0, c.bG)([eS.Ay], () => eS.Ay.getNotice()),
        { analyticsLocations: s } = (0, g.Ay)(),
        o = (0, w.H)(t),
        E = (0, Z.V)();
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
                    t = v.A.getUserExperimentDescriptor(e.id);
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
        M = null != r.type ? eS.f7[r.type] : null,
        B = eS.pe[r.type];
    if (null != I) return (0, i.jsx)(G.$, { dismissibleContent: I, noticeType: r.type });
    if (null != U) return (0, i.jsx)(j._, { dismissibleContent: U, noticeType: r.type });
    if (null != M) return (0, i.jsx)(x.T, { dismissibleContent: M });
    if (null != B) return (0, i.jsx)(k.r, { dismissibleContent: B, noticeType: r.type });
    let z = r.metadata?.premiumType;
    switch (r.type) {
        case eD.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(eE.A, {});
        case eD.kqX.LURKING_GUILD:
            return (0, i.jsx)($.A, {});
        case eD.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case eD.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(er.A, {});
        case eD.kqX.VOICE_DARE_OFFER:
            return (0, i.jsx)(ec.A, {});
        case eD.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: Q } = r.metadata;
            return (0, i.jsx)(X.A, { onDismiss: () => ex(Q) });
        case eD.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: e_ } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(e_), noticeType: r.type }),
                    eM.intl.format(eM.t["08KQ1P"], { helpCenterLink: eC.A.getArticleURL(eD.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eD.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eu } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(eu), noticeType: r.type }),
                    eM.intl.format(eM.t["8Je+dX"], { helpCenterLink: eC.A.getArticleURL(eD.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eD.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: ep } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(ep), noticeType: r.type }),
                    eM.intl.format(eM.t.q8VPLo, { helpCenterLink: eC.A.getArticleURL(eD.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eD.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eh } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(eh), noticeType: r.type }),
                    eM.intl.format(eP.isPlatformEmbedded ? eM.t.J232TI : eM.t.vceuiL, {
                        helpCenterLink: eC.A.getArticleURL(eD.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: r.type }),
                    eM.intl.string(eM.t.iW0fcQ),
                    (0, i.jsx)(_.eCN, {
                        href: eC.A.getArticleURL(eD.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.LQG5j6),
                    }),
                ],
            });
        case eD.kqX.GENERIC:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eD.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eD.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), ex();
                        },
                        noticeType: r.type,
                    }),
                    eM.intl.string(eM.t.bOQ3jV),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = eA.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.vD60Pv),
                    }),
                ],
            });
        case eD.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), ex();
                        },
                        noticeType: r.type,
                    }),
                    eM.intl.string(eM.t.jY2lUA),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = eA.A.getLastSessionVoiceChannelId();
                            null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.vD60Pv),
                    }),
                ],
            });
        case eD.kqX.SPOTIFY_AUTO_PAUSED:
            let ey = h.A.get(eD.fg2.SPOTIFY);
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: r.type }),
                    (0, i.jsx)("img", { alt: "", className: eg.tV, src: ey.icon.whiteSVG }),
                    eM.intl.string(eM.t.D8Cp76),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => (0, eo.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, { section: eD.nc_.VOICE }),
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.NiTd0e),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        className: eg.N0,
                        href: eC.A.getArticleURL(eD.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eM.intl.string(eM.t.CiqAIU),
                    }),
                ],
            });
        case eD.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    eM.intl.string(eM.t["f+Zaol"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => (o && null != t ? (0, V.Ze)(t) : f.R()),
                        children: eM.intl.string(eM.t.fiNVin),
                    }),
                ],
            });
        case eD.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    eM.intl.string(eM.t["3sWbf3"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            A.A.verifyResend(),
                                d.A.show({
                                    title: eM.intl.string(eM.t.LykQYk),
                                    body: eM.intl.format(eM.t.azKEPy, { email: e?.email }),
                                    cancelText: eM.intl.string(eM.t.Vm8akB),
                                    onCancel: f.R,
                                });
                        },
                        children: eM.intl.string(eM.t.WnX4J2),
                    }),
                ],
            });
        case eD.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => S.A.ackScheduledMaintenance(), noticeType: r.type }),
                    eM.intl.format(eM.t["yb96S+"], r.metadata),
                    (0, i.jsx)(_.eCN, {
                        href: `${eD.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                ],
            });
        case eD.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(ek, { noticeType: r.type });
        case eD.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ef, { noticeType: r.type });
        case eD.kqX.HARDWARE_MUTE:
            if (null == r.metadata) return null;
            let { vendor: eL, model: eG } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    eM.intl.format(eM.t.qoDex7, { vendorName: eL.name, modelName: eG.name }),
                    (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            u.A.setEnableHardwareMuteNotice(!1), ex();
                        },
                    }),
                    (0, i.jsx)(_.eCN, {
                        href: eG.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t["Yl/Riu"]),
                    }),
                ],
            });
        case eD.kqX.STREAMER_MODE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eD.kqX.STREAMER_MODE }),
                    eM.intl.string(eM.t.iEgBXp),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => C.A.setEnabled(!1),
                        noticeType: eD.kqX.STREAMER_MODE,
                        children: eM.intl.string(eM.t.R9GHya),
                    }),
                ],
            });
        case eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: ej, applicationId: eB } = r.metadata,
                eq = eN.A.get(ej),
                ev = y.A.getApplication(eB);
            if (null == eq || null == ev) return null;
            let eX = { page: eD.liQ.IN_APP };
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => T.X(eq.id),
                        noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eg.PC }),
                    eM.intl.format(eM.t["g3MU/+"], { applicationName: ev.name, skuName: eq.name }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, p.j)({
                                applicationId: ev.id,
                                skuId: eq.id,
                                openPremiumPaymentModal: () => {
                                    (0, J.A)({
                                        initialPlanId: null,
                                        subscriptionTier: em.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: eX,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: eX,
                                context: __OVERLAY__ ? eD.BRT.OVERLAY : eD.BRT.APP,
                            }).then(() => T.X(eq.id)),
                        children: eM.intl.string(eM.t.KEwPYx),
                    }),
                ],
            });
        case eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eN.A.get(e),
                l = y.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => ex(),
                        noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eg.PC }),
                    eM.intl.format(eM.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(_.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => ex(),
                            to: {
                                pathname: eD.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eM.intl.string(eM.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eD.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.SURVEY,
                        onClick: () => {
                            (0, P.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, ee.K)(o) : window.open(s, "_blank"), (0, P.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eD.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    eM.intl.string(eM.t["ugxmk/"]),
                    (0, i.jsx)(_.eCN, {
                        href: eC.A.getArticleURL(eD.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t["6ik4Xk"]),
                    }),
                ],
            });
        case eD.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eD.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    eM.intl.string(eM.t.wVjKGi),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, _.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: eM.intl.string(eM.t["1WjMbC"]),
                    }),
                ],
            });
        case eD.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: eb } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eD.kqX.DISPATCH_ERROR }),
                    eb?.displayMessage,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                ],
            });
        case eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: eF, total: eV, name: ew } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(L.A, {
                        justify: L.A.Justify.CENTER,
                        children: [
                            null != ew
                                ? eM.intl.formatToPlainString(eM.t["pHj+z4"], {
                                      name: `${ew}`,
                                      progress: eF,
                                      total: eV,
                                  })
                                : eM.intl.formatToPlainString(eM.t["lHZn+A"], { progress: eF, total: eV }),
                            (0, i.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS, className: eg.gO }),
                        ],
                    }),
                ],
            });
        case eD.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eR.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(_.$Td, {
                    color: _.Hv$.WARNING,
                    children: (0, i.jsxs)(L.A, {
                        justify: L.A.Justify.CENTER,
                        align: L.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: eM.intl.format(eM.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(_.PMB, { onClick: D.cL, noticeType: eD.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(_.$Td, {
                color: _.Hv$.WARNING,
                children: (0, i.jsxs)(L.A, {
                    justify: L.A.Justify.CENTER,
                    align: L.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: eM.intl.format(eM.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
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
                            children: eM.intl.string(eM.t.Q5ZgpK),
                        }),
                        (0, i.jsx)(_.PMB, { onClick: D.cL, noticeType: eD.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eD.kqX.VIEWING_ROLES:
            return (0, i.jsx)(K.A, {});
        case eD.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(_.$Td, {
                color:
                    z === em.PremiumTypes.TIER_1
                        ? _.Hv$.PREMIUM_TIER_1
                        : z === em.PremiumTypes.TIER_0
                          ? _.Hv$.PREMIUM_TIER_0
                          : _.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eg.PC }),
                    z === em.PremiumTypes.TIER_1
                        ? eM.intl.formatToPlainString(eM.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : z === em.PremiumTypes.TIER_0
                          ? eM.intl.formatToPlainString(eM.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : eM.intl.formatToPlainString(eM.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, _.mMO)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("62175"),
                                        n.e("14704"),
                                        n.e("1536"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: r.metadata.daysLeft,
                                            premiumType: z,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: r.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            z === em.PremiumTypes.TIER_1
                                ? eM.intl.string(eM.t.BkbUPM)
                                : z === em.PremiumTypes.TIER_0
                                  ? eM.intl.string(eM.t.Px978X)
                                  : eM.intl.string(eM.t.LW5tCE),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eH, dismissUntil: eW } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            ex(eW);
                        },
                    }),
                    eM.intl.format(eM.t.zxU0Kp, { daysPastDue: eH }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ex(eW),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children: eM.intl.string(eM.t.q8rxeS),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eM.intl.string(eM.t.LlZaoX),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children: eM.intl.string(eM.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eM.intl.string(eM.t["30YfCr"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children: eM.intl.string(eM.t.U5pKWA),
                    }),
                ],
            });
        case eD.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    z === em.PremiumTypes.TIER_1
                        ? eM.intl.formatToPlainString(eM.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : z === em.PremiumTypes.TIER_0
                          ? eM.intl.formatToPlainString(eM.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : eM.intl.formatToPlainString(eM.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ex(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eD.nc_.SUBSCRIPTIONS });
                        },
                        children:
                            z === em.PremiumTypes.TIER_1
                                ? eM.intl.string(eM.t.lboF5O)
                                : z === em.PremiumTypes.TIER_0
                                  ? eM.intl.string(eM.t["4UPwOq"])
                                  : eM.intl.string(eM.t["P/VvGb"]),
                    }),
                ],
            });
        case eD.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? eM.intl.string(eM.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => ex(),
                showCloseButton: !0,
            });
        case eD.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(F.A, { guildId: t, analyticsLocations: s });
        case eD.kqX.QUARANTINED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    eM.intl.string(eM.t.DVFJYf),
                    (0, i.jsx)(_.eCN, {
                        href: eU.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.kvHdFN),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        href: eC.A.getArticleURL(eD.MVz.QUARANTINE),
                        target: "_blank",
                        className: eg.yw,
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                ],
            });
        case eD.kqX.BLOCKED_BY_PROXY:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    eM.intl.string(eM.t.Ugijzi),
                    (0, i.jsx)(_.eCN, {
                        href: `${eD.qF7.STATUS}`,
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                    (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eD.kqX.BLOCKED_BY_PROXY }),
                ],
            });
        case eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eY, decisionId: eK } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, b.wu)(t), ex(eY);
                        },
                    }),
                    eM.intl.string(eM.t.B8ruyY),
                    (0, i.jsx)(_.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, b.W5)(t, eK, () => {
                                    ex(eY), (0, b.wu)(t);
                                });
                        },
                        children: eM.intl.string(eM.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(_.zr9, {
                              onClick: () => Y.A.open(t, eD.BEX.GUILD_AUTOMOD, void 0, eD.nd0.AUTOMOD_MENTION_SPAM),
                              children: eM.intl.string(eM.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eD.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            en.li(), ex();
                        },
                    }),
                    eM.intl.string(eM.t.I1nKfO),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eD.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, _.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                en.li(),
                                ex();
                        },
                        children: eM.intl.string(eM.t.l5xYnH),
                    }),
                ],
            });
        case eD.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eD.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, et.lk)(r.metadata.streamKey);
                        },
                    }),
                    eM.intl.string(eM.t.rOx44m),
                ],
            });
        case eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            ex(r.metadata?.dismissUntil);
                        },
                        noticeType: eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eM.intl.string(eM.t["0klLS7"]),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            (0, el.$)(), ex(r.metadata?.dismissUntil);
                        },
                        noticeType: eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eM.intl.string(eM.t.e4y2VM),
                    }),
                ],
            });
        case eD.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ei.A, {});
        case eD.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(es.A, {});
        default:
            return null;
    }
});
function ej() {
    let { analyticsLocations: e } = (0, g.Ay)(M.A.NOTICE);
    return (0, i.jsx)(g.f5, { value: e, children: (0, i.jsx)(eG, {}) });
}
