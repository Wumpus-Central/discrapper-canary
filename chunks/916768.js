"use strict";
n.d(t, { A: () => ej, w: () => ex });
var i = n(627968),
    r = n(64700),
    l = n(989349),
    s = n.n(l);
if (21552 == n.j) var a = n(936504);
var o = n(299855),
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
    p = n(246605),
    P = n(271866),
    D = n(86980),
    M = n(322337),
    g = n(77729),
    U = n(573648),
    m = n(793574),
    h = n(688810),
    y = n(587895),
    f = n(315982),
    k = n(235986),
    L = n(420216),
    x = n(984870),
    G = n(626262),
    j = n(813803),
    q = n(487329),
    X = n(102609),
    B = n(49463),
    b = n(322223),
    v = n(137207),
    V = n(619029),
    F = n(202384),
    w = n(51758),
    H = n(571139),
    W = n(527012),
    $ = n(997509),
    Y = n(475723),
    K = n(598733),
    Q = n(801644),
    z = n(37770),
    J = n(74848),
    Z = n(532794),
    ee = n(234419),
    et = n(814249),
    en = n(829219),
    ei = n(597936),
    er = n(601730),
    el = n(722255),
    es = n(613491),
    ea = n(464473),
    eo = n(780964),
    eE = n(840065),
    ec = n(459321),
    e_ = n(594609),
    ed = n(734057),
    eA = n(430452),
    eu = n(383501),
    eT = n(967198),
    eI = n(287809),
    eN = n(67480),
    eR = n(147964),
    eS = n(519057),
    eO = n(954571),
    eC = n(975571),
    ep = n(723702),
    eP = n(652215),
    eD = n(502075),
    eM = n(788868),
    eg = n(831502),
    eU = n(731854),
    em = n(985018),
    eh = n(237082);
let ey = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            r = (0, q.B1)(t)?.errorCode,
            l = em.intl.formatToPlainString(em.t.ejOT95, { errorCode: r }),
            s = (0, i.jsx)(_.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eh.fU,
                selectable: !0,
                children: l,
            });
        return n
            ? (0, i.jsx)(_.DUT, {
                  tag: "span",
                  className: eh.wz,
                  onClick: () => n && open(eC.A.getArticleURL(eP.MVz.AV_ERROR_CODES)),
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
                em.intl.string(em.t.o3zuYz),
                (0, i.jsx)(ey, { error: q.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(_.eCN, {
                    href: eC.A.getArticleURL(eP.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: em.intl.string(em.t.RYKKox),
                }),
            ],
        });
    };
function ek(e) {
    return (0, ep.isWindows)() && E().satisfies(g.A?.os.release, eD.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function eL(e) {
    let t,
        n,
        { noticeType: r } = e,
        { windowsMuteAndZeroVolumeDetectionEnabled: l } = (0, z.I)({ location: "AudioIssueNoticeNoInput" }),
        s = (0, J.x5)(eU.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: d } = (0, c.cf)([eA.Ay], () => ({
            inputDeviceOSMuted: eA.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eA.Ay.getInputDeviceOSVolume(),
        })),
        A = (0, ep.isWindows)() && E().satisfies(g.A?.os.release, eD.PH) && l,
        u = !1;
    return (
        A && !0 === o
            ? ((t = em.intl.string(em.t.ppW3ri)),
              (n = (0, i.jsx)(_.eCN, { href: ek(a), noticeType: r, children: em.intl.string(em.t.QghSIq) })))
            : A && 0 === d
              ? ((t = em.intl.string(em.t.j4gGA4)),
                (n = (0, i.jsx)(_.eCN, { href: ek(a), noticeType: r, children: em.intl.string(em.t.QghSIq) })))
              : eA.Ay.supports(eU.O5.LOOPBACK)
                ? ((t = em.intl.string(em.t.dNAJ18)),
                  (u = !0),
                  (n = (0, i.jsx)(_.zr9, {
                      onClick: () => {
                          (0, eE.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, { section: eP.nc_.VOICE });
                      },
                      children: em.intl.string(em.t.I6YlB4),
                  })))
                : ((t = em.intl.string(em.t.nCO9bI)),
                  (n = (0, i.jsx)(_.eCN, {
                      href: eC.A.getArticleURL(eP.MVz.NO_INPUT_DETECTED),
                      noticeType: r,
                      children: em.intl.string(em.t.RYKKox),
                  }))),
        (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [
                (0, i.jsx)(_.PMB, {
                    noticeType: r,
                    onClick: () => {
                        ex(), (0, e_.h)();
                    },
                }),
                t,
                (0, i.jsx)(ey, { allowClick: u, error: q.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ex(e) {
    I.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eG =
    21552 == n.j
        ? r.memo(function () {
              let e = (0, c.bG)([eI.default], () => eI.default.getCurrentUser()),
                  t = (0, c.bG)([eT.A], () => eT.A.getGuildId()),
                  l = (0, c.bG)([eS.Ay], () => eS.Ay.getNotice()),
                  { analyticsLocations: s } = (0, h.Ay)(),
                  o = (0, w.H)(t),
                  E = (0, ee.V)();
              if (
                  (r.useEffect(() => {
                      if (l?.type != null) {
                          let e;
                          if (
                              null == E &&
                              (l.type === eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  l.type === eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          null != t && (n.guild_id = t),
                              E?.trial_id != null && (n.trial_id = E.trial_id),
                              (e = { notice_type: l.type, ...n }),
                              eO.default.track(eP.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [l?.type, t, E]),
                  r.useEffect(() => {
                      if (null != l && l.type === eP.kqX.SURVEY && null != l.metadata) {
                          let { metadata: e } = l,
                              t = B.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, X.LQ)(e.id, t),
                              (async () => {
                                  l.metadata?.id != null && (await (0, p.oX)(l.metadata?.id));
                              })();
                      }
                  }, [l]),
                  null == l)
              )
                  return null;
              let I = null != l.type ? eS.Re[l.type] : null,
                  g = null != l.type ? eS.k3[l.type] : null,
                  m = null != l.type ? eS.f7[l.type] : null,
                  q = eS.pe[l.type];
              if (null != I) return (0, i.jsx)(G.$, { dismissibleContent: I, noticeType: l.type });
              if (null != g) return (0, i.jsx)(j._, { dismissibleContent: g, noticeType: l.type });
              if (null != m) return (0, i.jsx)(x.T, { dismissibleContent: m });
              if (null != q) return (0, i.jsx)(L.r, { dismissibleContent: q, noticeType: l.type });
              let z = l.metadata?.premiumType;
              switch (l.type) {
                  case eP.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(ec.A, {});
                  case eP.kqX.LURKING_GUILD:
                      return (0, i.jsx)(K.A, {});
                  case eP.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(H.A, {});
                  case eP.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(es.A, {});
                  case eP.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: J } = l.metadata;
                      return (0, i.jsx)(b.A, { onDismiss: () => ex(J) });
                  case eP.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: e_ } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(e_), noticeType: l.type }),
                              em.intl.format(em.t["08KQ1P"], {
                                  helpCenterLink: eC.A.getArticleURL(eP.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case eP.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eA } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(eA), noticeType: l.type }),
                              em.intl.format(em.t["8Je+dX"], {
                                  helpCenterLink: eC.A.getArticleURL(eP.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case eP.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: eD } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(eD), noticeType: l.type }),
                              em.intl.string(em.t["9DJgOg"]),
                          ],
                      });
                  case eP.kqX.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eU } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(eU), noticeType: l.type }),
                              em.intl.format(em.t.q8VPLo, {
                                  helpCenterLink: eC.A.getArticleURL(eP.MVz.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case eP.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: ey } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(ey), noticeType: l.type }),
                              em.intl.format(ep.isPlatformEmbedded ? em.t.J232TI : em.t.vceuiL, {
                                  helpCenterLink: eC.A.getArticleURL(eP.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case eP.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: l.type }),
                              em.intl.string(em.t.iW0fcQ),
                              (0, i.jsx)(_.eCN, {
                                  href: eC.A.getArticleURL(eP.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: l.type,
                                  children: em.intl.string(em.t.LQG5j6),
                              }),
                          ],
                      });
                  case eP.kqX.GENERIC:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: l.type }),
                              l.message,
                              null != l.buttonText
                                  ? (0, i.jsx)(_.Z_L, {
                                        onClick: l.callback,
                                        noticeType: l.type,
                                        children: l.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case eP.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DANGER,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: l.type }),
                              l.message,
                              null != l.buttonText
                                  ? (0, i.jsx)(_.Z_L, {
                                        onClick: l.callback,
                                        noticeType: l.type,
                                        children: l.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case eP.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  onClick: () => {
                                      N.A.clearRemoteDisconnectVoiceChannelId(), ex();
                                  },
                                  noticeType: l.type,
                              }),
                              em.intl.string(em.t.bOQ3jV),
                              (0, i.jsx)(_.Z_L, {
                                  onClick: () => {
                                      let e = eu.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                                  },
                                  noticeType: l.type,
                                  children: em.intl.string(em.t.vD60Pv),
                              }),
                          ],
                      });
                  case eP.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  onClick: () => {
                                      N.A.clearLastSessionVoiceChannelId(), ex();
                                  },
                                  noticeType: l.type,
                              }),
                              em.intl.string(em.t.jY2lUA),
                              (0, i.jsx)(_.Z_L, {
                                  onClick: () => {
                                      let e = eu.A.getLastSessionVoiceChannelId();
                                      null != e && null != ed.A.getChannel(e) && R.default.selectVoiceChannel(e);
                                  },
                                  noticeType: l.type,
                                  children: em.intl.string(em.t.vD60Pv),
                              }),
                          ],
                      });
                  case eP.kqX.SPOTIFY_AUTO_PAUSED:
                      let ek = U.A.get(eP.fg2.SPOTIFY);
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DANGER,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: l.type }),
                              (0, i.jsx)("img", { alt: "", className: eh.tV, src: ek.icon.whiteSVG }),
                              em.intl.string(em.t.D8Cp76),
                              (0, i.jsx)(_.Z_L, {
                                  onClick: () =>
                                      (0, eE.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, { section: eP.nc_.VOICE }),
                                  noticeType: l.type,
                                  children: em.intl.string(em.t.NiTd0e),
                              }),
                              (0, i.jsx)(_.MzZ, {
                                  className: eh.N0,
                                  href: eC.A.getArticleURL(eP.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: em.intl.string(em.t.CiqAIU),
                              }),
                          ],
                      });
                  case eP.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DEFAULT,
                          children: [
                              em.intl.string(em.t["f+Zaol"]),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: l.type,
                                  onClick: () => (o && null != t ? (0, F.Ze)(t) : f.R()),
                                  children: em.intl.string(em.t.fiNVin),
                              }),
                          ],
                      });
                  case eP.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DEFAULT,
                          children: [
                              em.intl.string(em.t["3sWbf3"]),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: l.type,
                                  onClick: () => {
                                      u.A.verifyResend(),
                                          d.A.show({
                                              title: em.intl.string(em.t.LykQYk),
                                              body: em.intl.format(em.t.azKEPy, { email: e?.email }),
                                              cancelText: em.intl.string(em.t.Vm8akB),
                                              onCancel: f.R,
                                          });
                                  },
                                  children: em.intl.string(em.t.WnX4J2),
                              }),
                          ],
                      });
                  case eP.kqX.SCHEDULED_MAINTENANCE:
                      if (null == l.metadata) return null;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => S.A.ackScheduledMaintenance(), noticeType: l.type }),
                              em.intl.format(em.t["yb96S+"], l.metadata),
                              (0, i.jsx)(_.eCN, {
                                  href: `${eP.qF7.STATUS}/incidents/${l.metadata.id}`,
                                  noticeType: l.type,
                                  children: em.intl.string(em.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eP.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(eL, { noticeType: l.type });
                  case eP.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(ef, { noticeType: l.type });
                  case eP.kqX.HARDWARE_MUTE:
                      if (null != l.metadata) {
                          let { vendor: e, model: t } = l.metadata;
                          return (0, i.jsxs)(_.$Td, {
                              color: _.Hv$.DANGER,
                              children: [
                                  em.intl.format(em.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(_.PMB, {
                                      noticeType: l.type,
                                      onClick: () => {
                                          A.A.setEnableHardwareMuteNotice(!1), ex();
                                      },
                                  }),
                                  (0, i.jsx)(_.eCN, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: l.type,
                                      children: em.intl.string(em.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      if (
                          Q.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" })
                              .enableHardwareSilenceWarning
                      )
                          return (0, i.jsxs)(_.$Td, {
                              color: _.Hv$.INFO,
                              children: [
                                  em.intl.format(em.t.QMw8Fd, {}),
                                  (0, i.jsx)(_.PMB, {
                                      noticeType: l.type,
                                      onClick: () => {
                                          A.A.setEnableHardwareMuteNotice(!1), ex();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case eP.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eP.kqX.STREAMER_MODE }),
                              em.intl.string(em.t.iEgBXp),
                              (0, i.jsx)(_.Z_L, {
                                  onClick: () => C.A.setEnabled(!1),
                                  noticeType: eP.kqX.STREAMER_MODE,
                                  children: em.intl.string(em.t.R9GHya),
                              }),
                          ],
                      });
                  case eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == l.metadata) return null;
                      let { skuId: eG, applicationId: ej } = l.metadata,
                          eq = eN.A.get(eG),
                          eX = y.A.getApplication(ej);
                      if (null == eq || null == eX) return null;
                      let eB = { page: eP.liQ.IN_APP };
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  onClick: () => T.X(eq.id),
                                  noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eh.PC }),
                              em.intl.format(em.t["g3MU/+"], { applicationName: eX.name, skuName: eq.name }),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, D.j)({
                                          applicationId: eX.id,
                                          skuId: eq.id,
                                          openPremiumPaymentModal: () => {
                                              (0, Z.A)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eM.pe.TIER_2,
                                                  analyticsLocations: s,
                                                  analyticsObject: eB,
                                              });
                                          },
                                          analyticsLocations: s,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? eP.BRT.OVERLAY : eP.BRT.APP,
                                      }).then(() => T.X(eq.id)),
                                  children: em.intl.string(em.t.KEwPYx),
                              }),
                          ],
                      });
                  case eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == l.metadata) return null;
                      let { skuId: e, applicationId: t } = l.metadata,
                          n = eN.A.get(e),
                          r = y.A.getApplication(t);
                      if (null == n || null == r) return null;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  onClick: () => ex(),
                                  noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eh.PC }),
                              em.intl.format(em.t.LquIKC, { applicationName: r.name, skuName: n.name }),
                              (0, i.jsx)(_.zr9, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => ex(),
                                      to: {
                                          pathname: eP.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: em.intl.string(em.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case eP.kqX.SURVEY: {
                      let e = l.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: r, url: s, embedded: a, id: o } = e;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.CUSTOM,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  noticeType: eP.kqX.SURVEY,
                                  onClick: () => {
                                      (0, p.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, et.K)(o) : window.open(s, "_blank"), (0, p.pX)(t, !1);
                                  },
                                  children: r,
                              }),
                          ],
                      });
                  }
                  case eP.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DANGER,
                          children: [
                              em.intl.string(em.t["ugxmk/"]),
                              (0, i.jsx)(_.eCN, {
                                  href: eC.A.getArticleURL(eP.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: l.type,
                                  children: em.intl.string(em.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case eP.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eP.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              em.intl.string(em.t.wVjKGi),
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
                                  children: em.intl.string(em.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case eP.kqX.DISPATCH_ERROR:
                      if (null == l.metadata) return null;
                      let { error: eb } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DANGER,
                          children: [
                              (0, i.jsx)(_.PMB, { onClick: () => ex(), noticeType: eP.kqX.DISPATCH_ERROR }),
                              eb?.displayMessage,
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, _.mMO)(async () => {
                                          let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: em.intl.string(em.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == l.metadata) return null;
                      let { progress: ev, total: eV, name: eF } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  onClick: () => ex(),
                                  noticeType: eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(k.A, {
                                  justify: k.A.Justify.CENTER,
                                  children: [
                                      null != eF
                                          ? em.intl.formatToPlainString(em.t["pHj+z4"], {
                                                name: `${eF}`,
                                                progress: ev,
                                                total: eV,
                                            })
                                          : em.intl.formatToPlainString(em.t["lHZn+A"], { progress: ev, total: eV }),
                                      (0, i.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS, className: eh.gO }),
                                  ],
                              }),
                          ],
                      });
                  case eP.kqX.APPLICATION_TEST_MODE:
                      if (null == l.metadata) return null;
                      if (null != eR.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(_.$Td, {
                              color: _.Hv$.WARNING,
                              children: (0, i.jsxs)(k.A, {
                                  justify: k.A.Justify.CENTER,
                                  align: k.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: em.intl.format(em.t["1qxVe4"], {
                                              applicationName: l.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(_.PMB, { onClick: P.cL, noticeType: eP.kqX.APPLICATION_TEST_MODE }),
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
                                      children: em.intl.format(em.t.Fv5HrE, {
                                          applicationName: l.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(M.A, {
                                      dropdownSize: M.p.DropdownSizes.SMALL,
                                      className: eh.aV,
                                      color: M.p.Colors.WHITE,
                                      look: M.p.Looks.OUTLINED,
                                      size: M.p.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          O.ct(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eP.JJy.NOTIFICATION_BAR,
                                                  object: eP.ZSU.NAVIGATION_LINK,
                                              },
                                          }),
                                      applicationId: l.metadata.applicationId,
                                      children: em.intl.string(em.t.Q5ZgpK),
                                  }),
                                  (0, i.jsx)(_.PMB, { onClick: P.cL, noticeType: eP.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case eP.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(Y.A, {});
                  case eP.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(_.$Td, {
                          color:
                              z === eM.PremiumTypes.TIER_1
                                  ? _.Hv$.PREMIUM_TIER_1
                                  : z === eM.PremiumTypes.TIER_0
                                    ? _.Hv$.PREMIUM_TIER_0
                                    : _.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  noticeType: eP.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(_.tvc, { size: "md", color: "currentColor", className: eh.PC }),
                              z === eM.PremiumTypes.TIER_1
                                  ? em.intl.formatToPlainString(em.t.fXv4wm, { daysLeft: l.metadata.daysLeft })
                                  : z === eM.PremiumTypes.TIER_0
                                    ? em.intl.formatToPlainString(em.t.ZOHZMr, { daysLeft: l.metadata.daysLeft })
                                    : em.intl.formatToPlainString(em.t.outyHh, { daysLeft: l.metadata.daysLeft }),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, _.mMO)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("41353"),
                                                  n.e("62175"),
                                                  n.e("14704"),
                                                  n.e("94934"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: l.metadata.daysLeft,
                                                      premiumType: z,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: l.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      z === eM.PremiumTypes.TIER_1
                                          ? em.intl.string(em.t.BkbUPM)
                                          : z === eM.PremiumTypes.TIER_0
                                            ? em.intl.string(em.t.Px978X)
                                            : em.intl.string(em.t.LW5tCE),
                              }),
                          ],
                      });
                  case eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ew, dismissUntil: eH } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  noticeType: l.type,
                                  onClick: () => {
                                      ex(eH);
                                  },
                              }),
                              em.intl.format(em.t.zxU0Kp, { daysPastDue: ew }),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      ex(eH),
                                          (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                                              section: eP.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children: em.intl.string(em.t.q8rxeS),
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
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              em.intl.string(em.t.LlZaoX),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                                              section: eP.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children: em.intl.string(em.t["Zpd+Yq"]),
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
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              em.intl.string(em.t["30YfCr"]),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                                              section: eP.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children: em.intl.string(em.t.U5pKWA),
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
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              z === eM.PremiumTypes.TIER_1
                                  ? em.intl.formatToPlainString(em.t.b6QUvf, { daysLeft: l.metadata.daysLeft })
                                  : z === eM.PremiumTypes.TIER_0
                                    ? em.intl.formatToPlainString(em.t["tURZ/M"], { daysLeft: l.metadata.daysLeft })
                                    : em.intl.formatToPlainString(em.t.AyC74I, { daysLeft: l.metadata.daysLeft }),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      ex(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eE.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                                              section: eP.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children:
                                      z === eM.PremiumTypes.TIER_1
                                          ? em.intl.string(em.t.lboF5O)
                                          : z === eM.PremiumTypes.TIER_0
                                            ? em.intl.string(em.t["4UPwOq"])
                                            : em.intl.string(em.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case eP.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(W.y, {
                          buttonText: l.buttonText ?? em.intl.string(em.t["/g10LC"]),
                          onGoBack: l.callback,
                          onDismiss: () => ex(),
                          showCloseButton: !0,
                      });
                  case eP.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(V.A, { guildId: t, analyticsLocations: s });
                  case eP.kqX.QUARANTINED:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.DANGER,
                          children: [
                              em.intl.string(em.t.DVFJYf),
                              (0, i.jsx)(_.eCN, {
                                  href: eg.q,
                                  target: "_blank",
                                  noticeType: l.type,
                                  children: em.intl.string(em.t.kvHdFN),
                              }),
                              (0, i.jsx)(_.MzZ, {
                                  href: eC.A.getArticleURL(eP.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: eh.yw,
                                  children: em.intl.string(em.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eW, decisionId: e$ } = l.metadata;
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.WARNING,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  noticeType: eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, v.wu)(t), ex(eW);
                                  },
                              }),
                              em.intl.string(em.t.B8ruyY),
                              (0, i.jsx)(_.zr9, {
                                  onClick: () => {
                                      null != t &&
                                          (0, v.W5)(t, e$, () => {
                                              ex(eW), (0, v.wu)(t);
                                          });
                                  },
                                  children: em.intl.string(em.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(_.zr9, {
                                        onClick: () =>
                                            $.A.open(t, eP.BEX.GUILD_AUTOMOD, void 0, eP.nd0.AUTOMOD_MENTION_SPAM),
                                        children: em.intl.string(em.t["1R7QIx"]),
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
                                      ei.li(), ex();
                                  },
                              }),
                              em.intl.string(em.t.I1nKfO),
                              (0, i.jsx)(_.Z_L, {
                                  noticeType: eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, _.mMO)(async () => {
                                          let { default: e } = await Promise.all([n.e("16833"), n.e("17476")]).then(
                                              n.bind(n, 156189),
                                          );
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          ei.li(),
                                          ex();
                                  },
                                  children: em.intl.string(em.t.l5xYnH),
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
                                      l.metadata?.streamKey != null && (0, en.lk)(l.metadata.streamKey);
                                  },
                              }),
                              em.intl.string(em.t.rOx44m),
                          ],
                      });
                  case eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(_.$Td, {
                          color: _.Hv$.BRAND,
                          children: [
                              (0, i.jsx)(_.PMB, {
                                  onClick: () => {
                                      ex(l.metadata?.dismissUntil);
                                  },
                                  noticeType: eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              em.intl.string(em.t["0klLS7"]),
                              (0, i.jsx)(_.Z_L, {
                                  onClick: () => {
                                      (0, el.$)(), ex(l.metadata?.dismissUntil);
                                  },
                                  noticeType: eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: em.intl.string(em.t.e4y2VM),
                              }),
                          ],
                      });
                  case eP.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(er.A, {});
                  case eP.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(ea.A, {});
                  default:
                      return null;
              }
          })
        : null;
function ej() {
    let { analyticsLocations: e } = (0, h.Ay)(m.A.NOTICE);
    return (0, i.jsx)(h.f5, { value: e, children: (0, i.jsx)(eG, {}) });
}
