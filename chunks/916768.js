"use strict";
n.d(t, { A: () => eF, w: () => eB });
var i = n(627968),
    r = n(64700),
    l = n(989349),
    s = n.n(l);
if (21552 == n.j) var a = n(936504);
var o = n(299855),
    c = n.n(o),
    u = n(311907);
if (21552 == n.j) var d = n(462887);
if (21552 == n.j) var _ = n(834730);
if (21552 == n.j) var E = n(939249);
if (21552 == n.j) var A = n(417098);
if (21552 == n.j) var m = n(349288);
if (21552 == n.j) var I = n(403581);
if (21552 == n.j) var T = n(192308);
if (21552 == n.j) var N = n(289873);
var g = n(157559),
    p = n(827343),
    C = n(830215),
    f = n(503703),
    h = n(912851),
    R = n(169604),
    S = n(956793),
    O = n(785796),
    x = n(55619),
    M = n(246605),
    D = n(271866),
    P = n(736653),
    U = n(77729),
    y = n(573648),
    L = n(793574),
    v = n(688810),
    j = n(587895),
    k = n(315982),
    b = n(235986),
    G = n(420216),
    w = n(187848),
    B = n(984870),
    H = n(626262),
    F = n(487329),
    X = n(102609),
    q = n(49463),
    V = n(322223),
    K = n(137207),
    W = n(619029),
    Y = n(202384),
    z = n(51758),
    J = n(571139),
    Q = n(527012),
    Z = n(997509),
    $ = n(475723),
    ee = n(598733),
    et = n(801644),
    en = n(74848),
    ei = n(4630),
    er = n(532794),
    el = n(234419),
    es = n(37992),
    ea = n(532423),
    eo = n(814249),
    ec = n(829219),
    eu = n(601730),
    ed = n(722255),
    e_ = n(613491),
    eE = n(464473),
    eA = n(780964),
    em = n(858897),
    eI = n(459321),
    eT = n(594609),
    eN = n(734057),
    eg = n(430452),
    ep = n(383501),
    eC = n(967198),
    ef = n(287809),
    eh = n(67480),
    eR = n(147964),
    eS = n(519057),
    eO = n(954571),
    ex = n(975571),
    eM = n(723702),
    eD = n(652215),
    eP = n(502075),
    eU = n(788868),
    ey = n(831502),
    eL = n(731854),
    ev = n(985018),
    ej = n(846775);
let ek = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            r = (0, F.B1)(t)?.errorCode,
            l = ev.intl.formatToPlainString(ev.t.ejOT95, { errorCode: r }),
            s = (0, i.jsx)(_.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: ej.fU,
                selectable: !0,
                children: l,
            });
        return n
            ? (0, i.jsx)(E.D, {
                  tag: "span",
                  className: ej.wz,
                  onClick: () => open(ex.A.getArticleURL(eD.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eb = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(A.$T, {
            color: A.Hv.DANGER,
            children: [
                (0, i.jsx)(A.PM, {
                    noticeType: t,
                    onClick: () => {
                        eB();
                    },
                }),
                ev.intl.string(ev.t.o3zuYz),
                (0, i.jsx)(ek, { error: F.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(A.eC, {
                    href: ex.A.getArticleURL(eD.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ev.intl.string(ev.t.RYKKox),
                }),
            ],
        });
    };
function eG(e) {
    return (0, eM.isWindows)() && c().satisfies(U.A?.os.release, eP.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ew(e) {
    let t,
        n,
        { noticeType: r } = e,
        l = (0, en.x5)(eL.oh.AUDIO_INPUT),
        s = l?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, u.cf)([eg.Ay], () => ({
            inputDeviceOSMuted: eg.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eg.Ay.getInputDeviceOSVolume(),
        })),
        c = !1;
    return (
        !0 === a
            ? ((t = ev.intl.string(ev.t.ppW3ri)),
              (n = (0, i.jsx)(A.eC, { href: eG(s), noticeType: r, children: ev.intl.string(ev.t.QghSIq) })))
            : 0 === o
              ? ((t = ev.intl.string(ev.t.j4gGA4)),
                (n = (0, i.jsx)(A.eC, { href: eG(s), noticeType: r, children: ev.intl.string(ev.t.QghSIq) })))
              : eg.Ay.supports(eL.O5.LOOPBACK)
                ? ((t = ev.intl.string(ev.t.dNAJ18)),
                  (c = !0),
                  (n = (0, i.jsx)(A.zr, {
                      onClick: () => {
                          (0, em.openUserSettings)(eA.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: ev.intl.string(ev.t.I6YlB4),
                  })))
                : ((t = ev.intl.string(ev.t.nCO9bI)),
                  (n = (0, i.jsx)(A.eC, {
                      href: ex.A.getArticleURL(eD.MVz.NO_INPUT_DETECTED),
                      noticeType: r,
                      children: ev.intl.string(ev.t.RYKKox),
                  }))),
        (0, i.jsxs)(A.$T, {
            color: A.Hv.DANGER,
            children: [
                (0, i.jsx)(A.PM, {
                    noticeType: r,
                    onClick: () => {
                        eB(), (0, eT.h)();
                    },
                }),
                t,
                (0, i.jsx)(ek, { allowClick: c, error: F.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function eB(e) {
    h.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let eH =
    21552 == n.j
        ? r.memo(function () {
              let e = (0, u.bG)([ef.default], () => ef.default.getCurrentUser()),
                  t = (0, u.bG)([eC.A], () => eC.A.getGuildId()),
                  l = (0, u.bG)([eS.Ay], () => eS.Ay.getNotice()),
                  { analyticsLocations: s } = (0, v.Ay)(),
                  o = (0, P.Ay)(),
                  c = (0, z.H)(t),
                  _ = (0, el.V)();
              if (
                  (r.useEffect(() => {
                      if (l?.type != null) {
                          let e;
                          if (
                              null == _ &&
                              (l.type === eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  l.type === eD.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          null != t && (n.guild_id = t),
                              _?.trial_id != null && (n.trial_id = _.trial_id),
                              (e = { notice_type: l.type, ...n }),
                              eO.default.track(eD.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [l?.type, t, _]),
                  r.useEffect(() => {
                      if (null != l && l.type === eD.kqX.SURVEY && null != l.metadata) {
                          let { metadata: e } = l,
                              t = q.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, X.LQ)(e.id, t),
                              (async () => {
                                  l.metadata?.id != null && (await (0, M.oX)(l.metadata?.id));
                              })();
                      }
                  }, [l]),
                  null == l)
              )
                  return null;
              let E = null != l.type ? eS.Re[l.type] : null,
                  h = null != l.type ? eS.rV[l.type] : null,
                  U = null != l.type ? eS.f7[l.type] : null,
                  L = eS.pe[l.type];
              if (null != E) return (0, i.jsx)(H.$, { dismissibleContent: E, noticeType: l.type });
              if (null != h) return (0, i.jsx)(w.d, { dismissibleContent: h });
              if (null != U) return (0, i.jsx)(B.T, { dismissibleContent: U });
              if (null != L) return (0, i.jsx)(G.r, { dismissibleContent: L, noticeType: l.type });
              let F = l.metadata?.premiumType;
              switch (l.type) {
                  case eD.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(eI.A, {});
                  case eD.kqX.LURKING_GUILD:
                      return (0, i.jsx)(ee.A, {});
                  case eD.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(J.A, {});
                  case eD.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(e_.A, {});
                  case eD.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: en } = l.metadata;
                      return (0, i.jsx)(V.A, { onDismiss: () => eB(en) });
                  case eD.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eT } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(eT), noticeType: l.type }),
                              ev.intl.format(ev.t["08KQ1P"], {
                                  helpCenterLink: ex.A.getArticleURL(eD.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case eD.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eg } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(eg), noticeType: l.type }),
                              ev.intl.format(ev.t["8Je+dX"], {
                                  helpCenterLink: ex.A.getArticleURL(eD.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case eD.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: eP } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(eP), noticeType: l.type }),
                              ev.intl.string(ev.t["9DJgOg"]),
                          ],
                      });
                  case eD.kqX.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(eL), noticeType: l.type }),
                              ev.intl.format(ev.t.q8VPLo, {
                                  helpCenterLink: ex.A.getArticleURL(eD.MVz.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case eD.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: ek } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(ek), noticeType: l.type }),
                              ev.intl.format(eM.isPlatformEmbedded ? ev.t.J232TI : ev.t.vceuiL, {
                                  helpCenterLink: ex.A.getArticleURL(eD.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: l.type }),
                              ev.intl.string(ev.t.iW0fcQ),
                              (0, i.jsx)(A.eC, {
                                  href: ex.A.getArticleURL(eD.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t.LQG5j6),
                              }),
                          ],
                      });
                  case eD.kqX.GENERIC:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: l.type }),
                              l.message,
                              null != l.buttonText
                                  ? (0, i.jsx)(A.Z_, {
                                        onClick: l.callback,
                                        noticeType: l.type,
                                        children: l.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case eD.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: l.type }),
                              l.message,
                              null != l.buttonText
                                  ? (0, i.jsx)(A.Z_, {
                                        onClick: l.callback,
                                        noticeType: l.type,
                                        children: l.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case eD.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => {
                                      R.A.clearRemoteDisconnectVoiceChannelId(), eB();
                                  },
                                  noticeType: l.type,
                              }),
                              ev.intl.string(ev.t.bOQ3jV),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => {
                                      let e = ep.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != eN.A.getChannel(e) && S.default.selectVoiceChannel(e);
                                  },
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t.vD60Pv),
                              }),
                          ],
                      });
                  case eD.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => {
                                      R.A.clearLastSessionVoiceChannelId(), eB();
                                  },
                                  noticeType: l.type,
                              }),
                              ev.intl.string(ev.t.jY2lUA),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => {
                                      let e = ep.A.getLastSessionVoiceChannelId();
                                      null != e && null != eN.A.getChannel(e) && S.default.selectVoiceChannel(e);
                                  },
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t.vD60Pv),
                              }),
                          ],
                      });
                  case eD.kqX.SPOTIFY_AUTO_PAUSED:
                      let eG = y.A.get(eD.fg2.SPOTIFY);
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: l.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: ej.tV,
                                  src: (0, d.q)(o) ? eG.icon.darkSVG : eG.icon.whiteSVG,
                              }),
                              ev.intl.string(ev.t.D8Cp76),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => (0, em.openUserSettings)(eA.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t.NiTd0e),
                              }),
                              (0, i.jsx)(m.Anchor, {
                                  className: ej.uD,
                                  href: ex.A.getArticleURL(eD.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: ev.intl.string(ev.t.CiqAIU),
                              }),
                          ],
                      });
                  case eD.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              ev.intl.string(ev.t["f+Zaol"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: l.type,
                                  onClick: () => (c && null != t ? (0, Y.Ze)(t) : k.R()),
                                  children: ev.intl.string(ev.t.fiNVin),
                              }),
                          ],
                      });
                  case eD.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              ev.intl.string(ev.t["3sWbf3"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: l.type,
                                  onClick: () => {
                                      C.A.verifyResend(),
                                          g.A.show({
                                              title: ev.intl.string(ev.t.LykQYk),
                                              body: ev.intl.format(ev.t.azKEPy, { email: e?.email }),
                                              cancelText: ev.intl.string(ev.t.Vm8akB),
                                              onCancel: k.R,
                                          });
                                  },
                                  children: ev.intl.string(ev.t.WnX4J2),
                              }),
                          ],
                      });
                  case eD.kqX.SCHEDULED_MAINTENANCE:
                      if (null == l.metadata) return null;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => O.A.ackScheduledMaintenance(), noticeType: l.type }),
                              ev.intl.format(ev.t["yb96S+"], l.metadata),
                              (0, i.jsx)(A.eC, {
                                  href: `${eD.qF7.STATUS}/incidents/${l.metadata.id}`,
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eD.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(ew, { noticeType: l.type });
                  case eD.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(eb, { noticeType: l.type });
                  case eD.kqX.HARDWARE_MUTE:
                      if (null != l.metadata) {
                          let { vendor: e, model: t } = l.metadata;
                          return (0, i.jsxs)(A.$T, {
                              color: A.Hv.DANGER,
                              children: [
                                  ev.intl.format(ev.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(A.PM, {
                                      noticeType: l.type,
                                      onClick: () => {
                                          p.A.setEnableHardwareMuteNotice(!1), eB();
                                      },
                                  }),
                                  (0, i.jsx)(A.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: l.type,
                                      children: ev.intl.string(ev.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      if (
                          et.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" })
                              .enableHardwareSilenceWarning
                      )
                          return (0, i.jsxs)(A.$T, {
                              color: A.Hv.INFO,
                              children: [
                                  ev.intl.format(ev.t.QMw8Fd, {}),
                                  (0, i.jsx)(A.PM, {
                                      noticeType: l.type,
                                      onClick: () => {
                                          p.A.setEnableHardwareMuteNotice(!1), eB();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case eD.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: eD.kqX.STREAMER_MODE }),
                              ev.intl.string(ev.t.iEgBXp),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => x.A.setEnabled(!1),
                                  noticeType: eD.kqX.STREAMER_MODE,
                                  children: ev.intl.string(ev.t.R9GHya),
                              }),
                          ],
                      });
                  case eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == l.metadata) return null;
                      let { skuId: eH, applicationId: eF } = l.metadata,
                          eX = eh.A.get(eH),
                          eq = j.A.getApplication(eF);
                      if (null == eX || null == eq) return null;
                      let eV = { page: eD.liQ.IN_APP };
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => f.X(eX.id),
                                  noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ej.PC }),
                              ev.intl.format(ev.t["g3MU/+"], { applicationName: eq.name, skuName: eX.name }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ei.j)({
                                          applicationId: eq.id,
                                          skuId: eX.id,
                                          openPremiumPaymentModal: () => {
                                              (0, er.A)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eU.pe.TIER_2,
                                                  analyticsLocations: s,
                                                  analyticsObject: eV,
                                              });
                                          },
                                          analyticsLocations: s,
                                          analyticsLocationObject: eV,
                                          context: __OVERLAY__ ? eD.BRT.OVERLAY : eD.BRT.APP,
                                      }).then(() => f.X(eX.id)),
                                  children: ev.intl.string(ev.t.KEwPYx),
                              }),
                          ],
                      });
                  case eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == l.metadata) return null;
                      let { skuId: e, applicationId: t } = l.metadata,
                          n = eh.A.get(e),
                          r = j.A.getApplication(t);
                      if (null == n || null == r) return null;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => eB(),
                                  noticeType: eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ej.PC }),
                              ev.intl.format(ev.t.LquIKC, { applicationName: r.name, skuName: n.name }),
                              (0, i.jsx)(A.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => eB(),
                                      to: {
                                          pathname: eD.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: ev.intl.string(ev.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case eD.kqX.SURVEY: {
                      let e = l.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: r, url: s, embedded: a, id: o } = e;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.SURVEY,
                                  onClick: () => {
                                      (0, M.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, eo.K)(o) : window.open(s, "_blank"), (0, M.pX)(t, !1);
                                  },
                                  children: r,
                              }),
                          ],
                      });
                  }
                  case eD.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              ev.intl.string(ev.t["ugxmk/"]),
                              (0, i.jsx)(A.eC, {
                                  href: ex.A.getArticleURL(eD.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case eD.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: eD.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              ev.intl.string(ev.t.wVjKGi),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, T.openModalLazy)(async () => {
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
                  case eD.kqX.DISPATCH_ERROR:
                      if (null == l.metadata) return null;
                      let { error: eK } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: eD.kqX.DISPATCH_ERROR }),
                              eK?.displayMessage,
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, T.openModalLazy)(async () => {
                                          let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: ev.intl.string(ev.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == l.metadata) return null;
                      let { progress: eW, total: eY, name: ez } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => eB(),
                                  noticeType: eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(b.A, {
                                  justify: b.A.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? ev.intl.formatToPlainString(ev.t["pHj+z4"], {
                                                name: `${ez}`,
                                                progress: eW,
                                                total: eY,
                                            })
                                          : ev.intl.formatToPlainString(ev.t["lHZn+A"], { progress: eW, total: eY }),
                                      (0, i.jsx)(N.y, { type: N.y.Type.PULSING_ELLIPSIS, className: ej.gO }),
                                  ],
                              }),
                          ],
                      });
                  case eD.kqX.APPLICATION_TEST_MODE:
                      if (null == l.metadata) return null;
                      if (null != eR.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(A.$T, {
                              color: A.Hv.WARNING,
                              children: (0, i.jsxs)(b.A, {
                                  justify: b.A.Justify.CENTER,
                                  align: b.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: ev.intl.format(ev.t["1qxVe4"], {
                                              applicationName: l.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(A.PM, { onClick: D.cL, noticeType: eD.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(A.$T, {
                          color: A.Hv.WARNING,
                          children: (0, i.jsxs)(b.A, {
                              justify: b.A.Justify.CENTER,
                              align: b.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: ev.intl.format(ev.t.Fv5HrE, {
                                          applicationName: l.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(A.PM, { onClick: D.cL, noticeType: eD.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case eD.kqX.VIEWING_ROLES:
                      return (0, i.jsx)($.A, {});
                  case eD.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(A.$T, {
                          color:
                              F === eU.PremiumTypes.TIER_1
                                  ? A.Hv.PREMIUM_TIER_1
                                  : F === eU.PremiumTypes.TIER_0
                                    ? A.Hv.PREMIUM_TIER_0
                                    : A.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ej.PC }),
                              F === eU.PremiumTypes.TIER_1
                                  ? ev.intl.formatToPlainString(ev.t.fXv4wm, { daysLeft: l.metadata.daysLeft })
                                  : F === eU.PremiumTypes.TIER_0
                                    ? ev.intl.formatToPlainString(ev.t.ZOHZMr, { daysLeft: l.metadata.daysLeft })
                                    : ev.intl.formatToPlainString(ev.t.outyHh, { daysLeft: l.metadata.daysLeft }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, T.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("41353"),
                                                  n.e("62175"),
                                                  n.e("14704"),
                                                  n.e("24919"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: l.metadata.daysLeft,
                                                      premiumType: F,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: l.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      F === eU.PremiumTypes.TIER_1
                                          ? ev.intl.string(ev.t.BkbUPM)
                                          : F === eU.PremiumTypes.TIER_0
                                            ? ev.intl.string(ev.t.Px978X)
                                            : ev.intl.string(ev.t.LW5tCE),
                              }),
                          ],
                      });
                  case eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eJ, dismissUntil: eQ } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: l.type,
                                  onClick: () => {
                                      eB(eQ);
                                  },
                              }),
                              ev.intl.format(ev.t.zxU0Kp, { daysPastDue: eJ }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eB(eQ), (0, em.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: ev.intl.string(ev.t.q8rxeS),
                              }),
                          ],
                      });
                  case eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              ev.intl.string(ev.t.LlZaoX),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, em.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: ev.intl.string(ev.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              ev.intl.string(ev.t["30YfCr"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, em.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: ev.intl.string(ev.t.U5pKWA),
                              }),
                          ],
                      });
                  case eD.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              F === eU.PremiumTypes.TIER_1
                                  ? ev.intl.formatToPlainString(ev.t.b6QUvf, { daysLeft: l.metadata.daysLeft })
                                  : F === eU.PremiumTypes.TIER_0
                                    ? ev.intl.formatToPlainString(ev.t["tURZ/M"], { daysLeft: l.metadata.daysLeft })
                                    : ev.intl.formatToPlainString(ev.t.AyC74I, { daysLeft: l.metadata.daysLeft }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: eD.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      eB(l.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, em.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      F === eU.PremiumTypes.TIER_1
                                          ? ev.intl.string(ev.t.lboF5O)
                                          : F === eU.PremiumTypes.TIER_0
                                            ? ev.intl.string(ev.t["4UPwOq"])
                                            : ev.intl.string(ev.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case eD.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(Q.y, {
                          buttonText: l.buttonText ?? ev.intl.string(ev.t["/g10LC"]),
                          onGoBack: l.callback,
                          onDismiss: () => eB(),
                          showCloseButton: !0,
                      });
                  case eD.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(W.A, { guildId: t, analyticsLocations: s });
                  case eD.kqX.QUARANTINED:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              ev.intl.string(ev.t.DVFJYf),
                              (0, i.jsx)(A.eC, {
                                  href: ey.q,
                                  target: "_blank",
                                  noticeType: l.type,
                                  children: ev.intl.string(ev.t.kvHdFN),
                              }),
                              (0, i.jsx)(m.Anchor, {
                                  href: ex.A.getArticleURL(eD.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: ej.yw,
                                  children: ev.intl.string(ev.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eZ, decisionId: e$ } = l.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, K.wu)(t), eB(eZ);
                                  },
                              }),
                              ev.intl.string(ev.t.B8ruyY),
                              (0, i.jsx)(A.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, K.W5)(t, e$, () => {
                                              eB(eZ), (0, K.wu)(t);
                                          });
                                  },
                                  children: ev.intl.string(ev.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(A.zr, {
                                        onClick: () =>
                                            Z.A.open(t, eD.BEX.GUILD_AUTOMOD, void 0, eD.nd0.AUTOMOD_MENTION_SPAM),
                                        children: ev.intl.string(ev.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case eD.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: eD.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      l.metadata?.streamKey != null && (0, ec.lk)(l.metadata.streamKey);
                                  },
                              }),
                              ev.intl.string(ev.t.rOx44m),
                          ],
                      });
                  case eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.BRAND,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => {
                                      eB(l.metadata?.dismissUntil);
                                  },
                                  noticeType: eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              ev.intl.string(ev.t["0klLS7"]),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => {
                                      (0, ed.$)(), eB(l.metadata?.dismissUntil);
                                  },
                                  noticeType: eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: ev.intl.string(ev.t.e4y2VM),
                              }),
                          ],
                      });
                  case eD.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(eu.A, {});
                  case eD.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(ea.A, {});
                  case eD.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                      return (0, i.jsx)(es.A, { premiumSubscription: l.metadata.premiumSubscription });
                  case eD.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(eE.A, {});
                  case eD.kqX.RESTRICTED_HOURS_WARNING:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => eB(), noticeType: l.type }),
                              l.message,
                              l.metadata?.subtitle != null ? ` \xb7 ${l.metadata.subtitle}` : null,
                          ],
                      });
                  default:
                      return null;
              }
          })
        : null;
function eF() {
    let { analyticsLocations: e } = (0, v.Ay)(L.A.NOTICE);
    return (0, i.jsx)(v.f5, { value: e, children: (0, i.jsx)(eH, {}) });
}
