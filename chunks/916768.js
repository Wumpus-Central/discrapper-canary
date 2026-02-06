n.d(t, { A: () => eG, w: () => ef });
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
    v = n(49463),
    X = n(322223),
    b = n(137207),
    V = n(619029),
    F = n(202384),
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
    ec = n(594609),
    e_ = n(734057),
    ed = n(430452),
    eA = n(383501),
    eu = n(967198),
    eT = n(287809),
    eI = n(67480),
    eN = n(147964),
    eR = n(519057),
    eS = n(954571),
    eO = n(975571),
    eC = n(723702),
    eP = n(652215),
    eD = n(502075),
    ep = n(788868),
    em = n(831502),
    eU = n(731854),
    eM = n(985018),
    eh = n(237082);
let eg = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, B.B1)(t)?.errorCode,
            r = eM.intl.formatToPlainString(eM.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(_.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eh.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(_.DUT, {
                  tag: "span",
                  className: eh.wz,
                  onClick: () => n && open(eO.A.getArticleURL(eP.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ey = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: t,
                    onClick: () => {
                        ef();
                    },
                }),
                eM.intl.string(eM.t.o3zuYz),
                (0, i.jsx)(eg, { error: B.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(_.eCN, {
                    href: eO.A.getArticleURL(eP.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eM.intl.string(eM.t.RYKKox),
                }),
            ],
        });
    };
function eL(e) {
    return (0, eC.isWindows)() && E().satisfies(U.A?.os.release, eD.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ek(e) {
    let t,
        n,
        { noticeType: l } = e,
        { windowsMuteAndZeroVolumeDetectionEnabled: r } = (0, z.I)({ location: "AudioIssueNoticeNoInput" }),
        s = (0, Q.x5)(eU.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: d } = (0, c.cf)([ed.A], () => ({
            inputDeviceOSMuted: ed.A.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ed.A.getInputDeviceOSVolume(),
        })),
        A = (0, eC.isWindows)() && E().satisfies(U.A?.os.release, eD.PH) && r,
        u = !1;
    return (
        A && !0 === o
            ? ((t = eM.intl.string(eM.t.ppW3ri)),
              (n = (0, i.jsx)(_.eCN, { href: eL(a), noticeType: l, children: eM.intl.string(eM.t.QghSIq) })))
            : A && 0 === d
              ? ((t = eM.intl.string(eM.t.j4gGA4)),
                (n = (0, i.jsx)(_.eCN, { href: eL(a), noticeType: l, children: eM.intl.string(eM.t.QghSIq) })))
              : ed.A.supports(eU.O5.LOOPBACK)
                ? ((t = eM.intl.string(eM.t.dNAJ18)),
                  (u = !0),
                  (n = (0, i.jsx)(_.zr9, {
                      onClick: () => {
                          (0, eo.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, { section: eP.nc_.VOICE });
                      },
                      children: eM.intl.string(eM.t.I6YlB4),
                  })))
                : ((t = eM.intl.string(eM.t.nCO9bI)),
                  (n = (0, i.jsx)(_.eCN, {
                      href: eO.A.getArticleURL(eP.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: eM.intl.string(eM.t.RYKKox),
                  }))),
        (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: l,
                    onClick: () => {
                        ef(), (0, ec.h)();
                    },
                }),
                t,
                (0, i.jsx)(eg, { allowClick: u, error: B.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ef(e) {
    I.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let ex = l.memo(function () {
    let e = (0, c.bG)([eT.default], () => eT.default.getCurrentUser()),
        t = (0, c.bG)([eu.A], () => eu.A.getGuildId()),
        r = (0, c.bG)([eR.Ay], () => eR.Ay.getNotice()),
        { analyticsLocations: s } = (0, g.Ay)(),
        o = (0, w.H)(t),
        E = (0, Z.V)();
    if (
        (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (
                    null == E &&
                    (r.type === eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    E?.trial_id != null && (n.trial_id = E.trial_id),
                    (e = { notice_type: r.type, ...n }),
                    eS.default.track(eP.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [r?.type, t, E]),
        l.useEffect(() => {
            if (null != r && r.type === eP.kqX.SURVEY && null != r.metadata) {
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
    let I = null != r.type ? eR.Re[r.type] : null,
        U = null != r.type ? eR.k3[r.type] : null,
        h = null != r.type ? eR.f7[r.type] : null,
        B = eR.pe[r.type];
    if (null != I) return (0, i.jsx)(G.$, { dismissibleContent: I, noticeType: r.type });
    if (null != U) return (0, i.jsx)(j._, { dismissibleContent: U, noticeType: r.type });
    if (null != h) return (0, i.jsx)(x.T, { dismissibleContent: h });
    if (null != B) return (0, i.jsx)(f.r, { dismissibleContent: B, noticeType: r.type });
    let z = r.metadata?.premiumType;
    switch (r.type) {
        case eP.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(eE.A, {});
        case eP.kqX.LURKING_GUILD:
            return (0, i.jsx)($.A, {});
        case eP.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case eP.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(er.A, {});
        case eP.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: Q } = r.metadata;
            return (0, i.jsx)(X.A, { onDismiss: () => ef(Q) });
        case eP.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: ec } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(ec), noticeType: r.type }),
                    eM.intl.format(eM.t["08KQ1P"], { helpCenterLink: eO.A.getArticleURL(eP.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case eP.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: ed } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(ed), noticeType: r.type }),
                    eM.intl.format(eM.t["8Je+dX"], { helpCenterLink: eO.A.getArticleURL(eP.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case eP.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eD } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(eD), noticeType: r.type }),
                    eM.intl.format(eM.t.q8VPLo, { helpCenterLink: eO.A.getArticleURL(eP.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case eP.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: eU } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(eU), noticeType: r.type }),
                    eM.intl.format(eC.isPlatformEmbedded ? eM.t.J232TI : eM.t.vceuiL, {
                        helpCenterLink: eO.A.getArticleURL(eP.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case eP.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: r.type }),
                    eM.intl.string(eM.t.iW0fcQ),
                    (0, i.jsx)(_.eCN, {
                        href: eO.A.getArticleURL(eP.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.LQG5j6),
                    }),
                ],
            });
        case eP.kqX.GENERIC:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eP.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: r.type }),
                    r.message,
                    null != r.buttonText
                        ? (0, i.jsx)(_.Z_L, { onClick: r.callback, noticeType: r.type, children: r.buttonText })
                        : null,
                ],
            });
        case eP.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            N.A.clearRemoteDisconnectVoiceChannelId(), ef();
                        },
                        noticeType: r.type,
                    }),
                    eM.intl.string(eM.t.bOQ3jV),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = eA.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != e_.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.vD60Pv),
                    }),
                ],
            });
        case eP.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            N.A.clearLastSessionVoiceChannelId(), ef();
                        },
                        noticeType: r.type,
                    }),
                    eM.intl.string(eM.t.jY2lUA),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            let e = eA.A.getLastSessionVoiceChannelId();
                            null != e && null != e_.A.getChannel(e) && R.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.vD60Pv),
                    }),
                ],
            });
        case eP.kqX.SPOTIFY_AUTO_PAUSED:
            let eg = M.A.get(eP.fg2.SPOTIFY);
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: r.type }),
                    (0, i.jsx)("img", { alt: "", className: eh.tV, src: eg.icon.whiteSVG }),
                    eM.intl.string(eM.t.D8Cp76),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => (0, eo.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, { section: eP.nc_.VOICE }),
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.NiTd0e),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        className: eh.N0,
                        href: eO.A.getArticleURL(eP.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eM.intl.string(eM.t.CiqAIU),
                    }),
                ],
            });
        case eP.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    eM.intl.string(eM.t["f+Zaol"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => (o && null != t ? (0, F.Ze)(t) : L.R()),
                        children: eM.intl.string(eM.t.fiNVin),
                    }),
                ],
            });
        case eP.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    eM.intl.string(eM.t["3sWbf3"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: r.type,
                        onClick: () => {
                            u.A.verifyResend(),
                                d.A.show({
                                    title: eM.intl.string(eM.t.LykQYk),
                                    body: eM.intl.format(eM.t.azKEPy, { email: e?.email }),
                                    cancelText: eM.intl.string(eM.t.Vm8akB),
                                    onCancel: L.R,
                                });
                        },
                        children: eM.intl.string(eM.t.WnX4J2),
                    }),
                ],
            });
        case eP.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => S.A.ackScheduledMaintenance(), noticeType: r.type }),
                    eM.intl.format(eM.t["yb96S+"], r.metadata),
                    (0, i.jsx)(_.eCN, {
                        href: `${eP.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                ],
            });
        case eP.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(ek, { noticeType: r.type });
        case eP.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ey, { noticeType: r.type });
        case eP.kqX.HARDWARE_MUTE:
            if (null == r.metadata) return null;
            let { vendor: eL, model: ex } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    eM.intl.format(eM.t.qoDex7, { vendorName: eL.name, modelName: ex.name }),
                    (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            A.A.setEnableHardwareMuteNotice(!1), ef();
                        },
                    }),
                    (0, i.jsx)(_.eCN, {
                        href: ex.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t["Yl/Riu"]),
                    }),
                ],
            });
        case eP.kqX.STREAMER_MODE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.STREAMER_MODE,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: eP.kqX.STREAMER_MODE }),
                    eM.intl.string(eM.t.iEgBXp),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => C.A.setEnabled(!1),
                        noticeType: eP.kqX.STREAMER_MODE,
                        children: eM.intl.string(eM.t.R9GHya),
                    }),
                ],
            });
        case eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let { skuId: eG, applicationId: ej } = r.metadata,
                eB = eI.A.get(eG),
                eq = y.A.getApplication(ej);
            if (null == eB || null == eq) return null;
            let ev = { page: eP.liQ.IN_APP };
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => T.X(eB.id),
                        noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eh.PC }),
                    eM.intl.format(eM.t["g3MU/+"], { applicationName: eq.name, skuName: eB.name }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, p.j)({
                                applicationId: eq.id,
                                skuId: eB.id,
                                openPremiumPaymentModal: () => {
                                    (0, J.A)({
                                        initialPlanId: null,
                                        subscriptionTier: ep.pe.TIER_2,
                                        analyticsLocations: s,
                                        analyticsObject: ev,
                                    });
                                },
                                analyticsLocations: s,
                                analyticsLocationObject: ev,
                                context: __OVERLAY__ ? eP.BRT.OVERLAY : eP.BRT.APP,
                            }).then(() => T.X(eB.id)),
                        children: eM.intl.string(eM.t.KEwPYx),
                    }),
                ],
            });
        case eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let { skuId: e, applicationId: t } = r.metadata,
                n = eI.A.get(e),
                l = y.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => ef(),
                        noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eh.PC }),
                    eM.intl.format(eM.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                    (0, i.jsx)(_.zr9, {
                        children: (0, i.jsx)(a.N_, {
                            onClick: () => ef(),
                            to: {
                                pathname: eP.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eM.intl.string(eM.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eP.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.CUSTOM,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.SURVEY,
                        onClick: () => {
                            (0, P.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.SURVEY,
                        onClick: () => {
                            a ? (0, ee.K)(o) : window.open(s, "_blank"), (0, P.pX)(t, !1);
                        },
                        children: l,
                    }),
                ],
            });
        }
        case eP.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    eM.intl.string(eM.t["ugxmk/"]),
                    (0, i.jsx)(_.eCN, {
                        href: eO.A.getArticleURL(eP.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t["6ik4Xk"]),
                    }),
                ],
            });
        case eP.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: eP.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    eM.intl.string(eM.t.wVjKGi),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
        case eP.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let { error: eX } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: eP.kqX.DISPATCH_ERROR }),
                    eX?.displayMessage,
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                ],
            });
        case eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let { progress: eb, total: eV, name: eF } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.CENTER,
                        children: [
                            null != eF
                                ? eM.intl.formatToPlainString(eM.t["pHj+z4"], {
                                      name: `${eF}`,
                                      progress: eb,
                                      total: eV,
                                  })
                                : eM.intl.formatToPlainString(eM.t["lHZn+A"], { progress: eb, total: eV }),
                            (0, i.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS, className: eh.gO }),
                        ],
                    }),
                ],
            });
        case eP.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eN.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(_.$Td, {
                    color: _.Hv$.WARNING,
                    children: (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.CENTER,
                        align: k.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: eM.intl.format(eM.t["1qxVe4"], {
                                    applicationName: r.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(_.PMB, { onClick: D.cL, noticeType: eP.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(_.$Td, {
                color: _.Hv$.WARNING,
                children: (0, i.jsxs)(k.A, {
                    justify: k.A.Justify.CENTER,
                    align: k.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: eM.intl.format(eM.t.Fv5HrE, { applicationName: r.metadata.applicationName }),
                        }),
                        (0, i.jsx)(m.A, {
                            dropdownSize: m.p.DropdownSizes.SMALL,
                            className: eh.aV,
                            color: m.p.Colors.WHITE,
                            look: m.p.Looks.OUTLINED,
                            size: m.p.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.ct(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eP.JJy.NOTIFICATION_BAR,
                                        object: eP.ZSU.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: r.metadata.applicationId,
                            children: eM.intl.string(eM.t.Q5ZgpK),
                        }),
                        (0, i.jsx)(_.PMB, { onClick: D.cL, noticeType: eP.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case eP.kqX.VIEWING_ROLES:
            return (0, i.jsx)(K.A, {});
        case eP.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(_.$Td, {
                color:
                    z === ep.PremiumTypes.TIER_1
                        ? _.Hv$.PREMIUM_TIER_1
                        : z === ep.PremiumTypes.TIER_0
                          ? _.Hv$.PREMIUM_TIER_0
                          : _.Hv$.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eh.PC }),
                    z === ep.PremiumTypes.TIER_1
                        ? eM.intl.formatToPlainString(eM.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                        : z === ep.PremiumTypes.TIER_0
                          ? eM.intl.formatToPlainString(eM.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                          : eM.intl.formatToPlainString(eM.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd),
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
                            z === ep.PremiumTypes.TIER_1
                                ? eM.intl.string(eM.t.BkbUPM)
                                : z === ep.PremiumTypes.TIER_0
                                  ? eM.intl.string(eM.t.Px978X)
                                  : eM.intl.string(eM.t.LW5tCE),
                    }),
                ],
            });
        case eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: ew, dismissUntil: eH } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            ef(eH);
                        },
                    }),
                    eM.intl.format(eM.t.zxU0Kp, { daysPastDue: ew }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ef(eH),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eP.nc_.SUBSCRIPTIONS });
                        },
                        children: eM.intl.string(eM.t.q8rxeS),
                    }),
                ],
            });
        case eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eM.intl.string(eM.t.LlZaoX),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eP.nc_.SUBSCRIPTIONS });
                        },
                        children: eM.intl.string(eM.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    eM.intl.string(eM.t["30YfCr"]),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eP.nc_.SUBSCRIPTIONS });
                        },
                        children: eM.intl.string(eM.t.U5pKWA),
                    }),
                ],
            });
        case eP.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    z === ep.PremiumTypes.TIER_1
                        ? eM.intl.formatToPlainString(eM.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                        : z === ep.PremiumTypes.TIER_0
                          ? eM.intl.formatToPlainString(eM.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                          : eM.intl.formatToPlainString(eM.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            ef(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, { section: eP.nc_.SUBSCRIPTIONS });
                        },
                        children:
                            z === ep.PremiumTypes.TIER_1
                                ? eM.intl.string(eM.t.lboF5O)
                                : z === ep.PremiumTypes.TIER_0
                                  ? eM.intl.string(eM.t["4UPwOq"])
                                  : eM.intl.string(eM.t["P/VvGb"]),
                    }),
                ],
            });
        case eP.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? eM.intl.string(eM.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => ef(),
                showCloseButton: !0,
            });
        case eP.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: s });
        case eP.kqX.QUARANTINED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    eM.intl.string(eM.t.DVFJYf),
                    (0, i.jsx)(_.eCN, {
                        href: em.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.kvHdFN),
                    }),
                    (0, i.jsx)(_.MzZ, {
                        href: eO.A.getArticleURL(eP.MVz.QUARANTINE),
                        target: "_blank",
                        className: eh.yw,
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                ],
            });
        case eP.kqX.BLOCKED_BY_PROXY:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    eM.intl.string(eM.t.Ugijzi),
                    (0, i.jsx)(_.eCN, {
                        href: `${eP.qF7.STATUS}`,
                        noticeType: r.type,
                        children: eM.intl.string(eM.t.hvVgAZ),
                    }),
                    (0, i.jsx)(_.PMB, { onClick: () => ef(), noticeType: eP.kqX.BLOCKED_BY_PROXY }),
                ],
            });
        case eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eW, decisionId: eY } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, b.wu)(t), ef(eW);
                        },
                    }),
                    eM.intl.string(eM.t.B8ruyY),
                    (0, i.jsx)(_.zr9, {
                        onClick: () => {
                            null != t &&
                                (0, b.W5)(t, eY, () => {
                                    ef(eW), (0, b.wu)(t);
                                });
                        },
                        children: eM.intl.string(eM.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(_.zr9, {
                              onClick: () => Y.A.open(t, eP.BEX.GUILD_AUTOMOD, void 0, eP.nd0.AUTOMOD_MENTION_SPAM),
                              children: eM.intl.string(eM.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            en.li(), ef();
                        },
                    }),
                    eM.intl.string(eM.t.I1nKfO),
                    (0, i.jsx)(_.Z_L, {
                        noticeType: eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, _.mMO)(async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                    n.bind(n, 156189),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                en.li(),
                                ef();
                        },
                        children: eM.intl.string(eM.t.l5xYnH),
                    }),
                ],
            });
        case eP.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [
                    (0, i.jsx)(_.PMB, {
                        noticeType: eP.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            r.metadata?.streamKey != null && (0, et.lk)(r.metadata.streamKey);
                        },
                    }),
                    eM.intl.string(eM.t.rOx44m),
                ],
            });
        case eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [
                    (0, i.jsx)(_.PMB, {
                        onClick: () => {
                            ef(r.metadata?.dismissUntil);
                        },
                        noticeType: eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eM.intl.string(eM.t["0klLS7"]),
                    (0, i.jsx)(_.Z_L, {
                        onClick: () => {
                            (0, el.$)(), ef(r.metadata?.dismissUntil);
                        },
                        noticeType: eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eM.intl.string(eM.t.e4y2VM),
                    }),
                ],
            });
        case eP.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ei.A, {});
        case eP.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(es.A, {});
        default:
            return null;
    }
});
function eG() {
    let { analyticsLocations: e } = (0, g.Ay)(h.A.NOTICE);
    return (0, i.jsx)(g.f5, { value: e, children: (0, i.jsx)(ex, {}) });
}
