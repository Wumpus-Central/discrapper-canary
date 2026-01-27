n.d(t, {
    A: () => eF,
    w: () => eX,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    o = n.n(l);
if (21552 == n.j) var a = n(758879);
var s = n(299855),
    c = n.n(s),
    u = n(311907),
    E = n(823598),
    d = n(397927),
    _ = n(157559),
    T = n(827343),
    A = n(830215),
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
    D = n(322337),
    m = n(77729),
    g = n(573648),
    h = n(793574),
    U = n(688810),
    b = n(587895),
    M = n(315982),
    j = n(235986),
    k = n(826673),
    v = n(420216),
    L = n(984870),
    x = n(626262),
    G = n(813803),
    w = n(709710),
    B = n(102609),
    q = n(49463),
    X = n(322223),
    V = n(137207),
    F = n(619029),
    H = n(202384),
    W = n(51758),
    K = n(571139),
    Y = n(527012),
    $ = n(997509),
    z = n(475723),
    J = n(598733),
    Z = n(37770),
    Q = n(74848),
    ee = n(532794),
    et = n(234419),
    en = n(617108),
    er = n(745299),
    ei = n(814249),
    el = n(829219),
    eo = n(597936),
    ea = n(601730),
    es = n(722255),
    ec = n(613491),
    eu = n(464473),
    eE = n(780964),
    ed = n(840065),
    e_ = n(459321),
    eT = n(594609),
    eA = n(734057),
    eI = n(430452),
    eO = n(383501),
    eN = n(967198),
    ep = n(287809),
    eR = n(67480),
    eS = n(147964),
    eP = n(519057),
    ey = n(954571),
    ef = n(975571),
    eC = n(723702),
    eD = n(837921),
    em = n(652215),
    eg = n(502075),
    eh = n(788868),
    eU = n(831502),
    eb = n(731854),
    eM = n(985018),
    ej = n(237082);

function ek(e) {
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
let ev = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            l = null == (t = (0, w.B1)(n)) ? void 0 : t.errorCode,
            o = eM.intl.formatToPlainString(eM.t.ejOT95, {
                errorCode: l,
            }),
            a = (0, r.jsx)(d.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: ej.fU,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(d.DUT, {
                  tag: "span",
                  className: ej.wz,
                  onClick: () => i && open(ef.A.getArticleURL(em.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    eL = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eX();
                    },
                }),
                eM.intl.string(eM.t.o3zuYz),
                (0, r.jsx)(ev, {
                    error: w.iy.NO_INPUT_DEVICES,
                }),
                (0, r.jsx)(d.eCN, {
                    href: ef.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eM.intl.string(eM.t.RYKKox),
                }),
            ],
        });
    };

function ex(e) {
    return (0, eC.isWindows)() && c().satisfies(null === m.A || void 0 === m.A ? void 0 : m.A.os.release, eg.PH)
        ? "".concat("ms-settings:sound-properties", "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let eG = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: n,
                    onClick: () => {
                        eX(), (0, eT.h)();
                    },
                }),
                eM.intl.string(eM.t.ppW3ri),
                (0, r.jsx)(ev, {
                    error: w.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.eCN, {
                    href: ex(t),
                    noticeType: n,
                    children: eM.intl.string(eM.t.pxYBbM),
                }),
            ],
        });
    },
    ew = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: n,
                    onClick: () => {
                        eX(), (0, eT.h)();
                    },
                }),
                eM.intl.string(eM.t.j4gGA4),
                (0, r.jsx)(ev, {
                    error: w.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.eCN, {
                    href: ex(t),
                    noticeType: n,
                    children: eM.intl.string(eM.t.pxYBbM),
                }),
            ],
        });
    },
    eB = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eX(), (0, eT.h)();
                    },
                }),
                eM.intl.string(eM.t.nCO9bI),
                (0, r.jsx)(ev, {
                    error: w.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.eCN, {
                    href: ef.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eM.intl.string(eM.t.RYKKox),
                }),
            ],
        });
    },
    eq = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [
                (0, r.jsx)(d.PMB, {
                    noticeType: t,
                    onClick: () => {
                        eX(), (0, eT.h)();
                    },
                }),
                eM.intl.string(eM.t.dNAJ18),
                (0, r.jsx)(ev, {
                    allowClick: !0,
                    error: w.iy.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(d.zr9, {
                    onClick: () => {
                        (0, ed.openUserSettings)(eE.X.VOICE_AND_VIDEO_PANEL, {
                            section: em.nc_.VOICE,
                        });
                    },
                    children: eM.intl.string(eM.t.I6YlB4),
                }),
            ],
        });
    };

function eX(e) {
    O.A.dismiss(
        null != e
            ? {
                  untilAtLeast: o()(e),
              }
            : void 0,
    );
}
let eV =
    21552 == n.j
        ? i.memo(function () {
              var e, t;
              let l = (0, u.bG)([ep.default], () => ep.default.getCurrentUser()),
                  s = (0, u.bG)([eN.A], () => eN.A.getGuildId()),
                  c = (0, u.bG)([eP.Ay], () => eP.Ay.getNotice()),
                  { analyticsLocations: O } = (0, U.Ay)(),
                  m = (0, W.H)(s),
                  { windowsMuteAndZeroVolumeDetectionEnabled: h } = (0, Z.I)({
                      location: "AppNotice",
                  }),
                  w = (0, et.V)();
              i.useEffect(() => {
                  if ((null == c ? void 0 : c.type) != null) {
                      let e;
                      if (
                          null == w &&
                          (c.type === em.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                              c.type === em.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                      )
                          return;
                      let t = {};
                      null != s && (t.guild_id = s),
                          (null == w ? void 0 : w.trial_id) != null && (t.trial_id = w.trial_id),
                          (e = ek(
                              {
                                  notice_type: c.type,
                              },
                              t,
                          )),
                          ey.default.track(em.HAw.APP_NOTICE_VIEWED, e);
                  }
              }, [null == c ? void 0 : c.type, s, w]),
                  i.useEffect(() => {
                      if (null != c && c.type === em.kqX.SURVEY && null != c.metadata) {
                          let { metadata: e } = c,
                              t = q.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, B.LQ)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = c.metadata) ? void 0 : e.id) != null &&
                                      (await (0, y.oX)(null == (t = c.metadata) ? void 0 : t.id));
                              })();
                      }
                  }, [c]);
              let eT = (0, Q.x5)(eb.oh.AUDIO_INPUT),
                  [eg, ev] = i.useState(""),
                  [ex, eV] = i.useState(null),
                  [eF, eH] = i.useState(null);
              if (
                  (i.useEffect(() => {
                      if ((0, eC.isWindows)() && h) {
                          let e = null == eT ? void 0 : eT.guid;
                          null != e &&
                              "" !== e &&
                              (ev(e),
                              eD.Ay.ensureModule("discord_voice")
                                  .then(() => {
                                      try {
                                          var t, n, r, i;
                                          let l = (0, E.lE)();
                                          null == l ||
                                              null == (n = l.getDeviceOSMuted) ||
                                              null == (t = n.call(l, e)) ||
                                              t.then((e) => eV(e)),
                                              null == l ||
                                                  null == (i = l.getDeviceOSVolume) ||
                                                  null == (r = i.call(l, e)) ||
                                                  r.then((e) => eH(e));
                                      } catch (e) {}
                                  })
                                  .catch());
                      }
                  }, [h, null == eT ? void 0 : eT.guid]),
                  null == c)
              )
                  return null;
              let eW = null != c.type ? eP.Re[c.type] : null,
                  eK = null != c.type ? eP.k3[c.type] : null,
                  eY = null != c.type ? eP.f7[c.type] : null,
                  e$ = eP.pe[c.type];
              if (null != eW)
                  return (0, r.jsx)(x.$, {
                      dismissibleContent: eW,
                      noticeType: c.type,
                  });
              if (null != eK)
                  return (0, r.jsx)(G._, {
                      dismissibleContent: eK,
                      noticeType: c.type,
                  });
              if (null != eY)
                  return (0, r.jsx)(L.T, {
                      dismissibleContent: eY,
                  });
              if (null != e$)
                  return (0, r.jsx)(v.r, {
                      dismissibleContent: e$,
                      noticeType: c.type,
                  });
              let ez = null == (e = c.metadata) ? void 0 : e.premiumType;
              switch (c.type) {
                  case em.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, r.jsx)(e_.A, {});
                  case em.kqX.LURKING_GUILD:
                      return (0, r.jsx)(J.A, {});
                  case em.kqX.PENDING_MEMBER:
                      return (0, r.jsx)(K.A, {});
                  case em.kqX.INVITED_TO_SPEAK:
                      return (0, r.jsx)(ec.A, {});
                  case em.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eJ } = c.metadata;
                      return (0, r.jsx)(X.A, {
                          onDismiss: () => eX(eJ),
                      });
                  case em.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(eZ),
                                  noticeType: c.type,
                              }),
                              eM.intl.format(eM.t["08KQ1P"], {
                                  helpCenterLink: ef.A.getArticleURL(em.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case em.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eQ } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(eQ),
                                  noticeType: c.type,
                              }),
                              eM.intl.format(eM.t["8Je+dX"], {
                                  helpCenterLink: ef.A.getArticleURL(em.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case em.kqX.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: e0 } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(e0),
                                  noticeType: c.type,
                              }),
                              eM.intl.format(eM.t.q8VPLo, {
                                  helpCenterLink: ef.A.getArticleURL(em.MVz.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case em.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: e1 } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(e1),
                                  noticeType: c.type,
                              }),
                              eM.intl.format(eC.isPlatformEmbedded ? eM.t.J232TI : eM.t.vceuiL, {
                                  helpCenterLink: ef.A.getArticleURL(em.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case em.kqX.GENERIC:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DEFAULT,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: c.type,
                              }),
                              c.message,
                              null != c.buttonText
                                  ? (0, r.jsx)(d.Z_L, {
                                        onClick: c.callback,
                                        noticeType: c.type,
                                        children: c.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case em.kqX.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: c.type,
                              }),
                              c.message,
                              null != c.buttonText
                                  ? (0, r.jsx)(d.Z_L, {
                                        onClick: c.callback,
                                        noticeType: c.type,
                                        children: c.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case em.kqX.VOICE_DISABLED:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => {
                                      N.A.clearRemoteDisconnectVoiceChannelId(), eX();
                                  },
                                  noticeType: c.type,
                              }),
                              eM.intl.string(eM.t.bOQ3jV),
                              (0, r.jsx)(d.Z_L, {
                                  onClick: () => {
                                      let e = eO.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != eA.A.getChannel(e) && p.default.selectVoiceChannel(e);
                                  },
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t.vD60Pv),
                              }),
                          ],
                      });
                  case em.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DEFAULT,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => {
                                      N.A.clearLastSessionVoiceChannelId(), eX();
                                  },
                                  noticeType: c.type,
                              }),
                              eM.intl.string(eM.t.jY2lUA),
                              (0, r.jsx)(d.Z_L, {
                                  onClick: () => {
                                      let e = eO.A.getLastSessionVoiceChannelId();
                                      null != e && null != eA.A.getChannel(e) && p.default.selectVoiceChannel(e);
                                  },
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t.vD60Pv),
                              }),
                          ],
                      });
                  case em.kqX.SPOTIFY_AUTO_PAUSED:
                      let e2 = g.A.get(em.fg2.SPOTIFY);
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: c.type,
                              }),
                              (0, r.jsx)("img", {
                                  alt: "",
                                  className: ej.tV,
                                  src: e2.icon.whiteSVG,
                              }),
                              eM.intl.string(eM.t.D8Cp76),
                              (0, r.jsx)(d.Z_L, {
                                  onClick: () =>
                                      (0, ed.openUserSettings)(eE.X.VOICE_AND_VIDEO_PANEL, {
                                          section: em.nc_.VOICE,
                                      }),
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t.NiTd0e),
                              }),
                              (0, r.jsx)(d.MzZ, {
                                  className: ej.N0,
                                  href: ef.A.getArticleURL(em.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: eM.intl.string(eM.t.CiqAIU),
                              }),
                          ],
                      });
                  case em.kqX.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DEFAULT,
                          children: [
                              eM.intl.string(eM.t["f+Zaol"]),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: c.type,
                                  onClick: () => (m && null != s ? (0, H.Ze)(s) : M.R()),
                                  children: eM.intl.string(eM.t.fiNVin),
                              }),
                          ],
                      });
                  case em.kqX.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DEFAULT,
                          children: [
                              eM.intl.string(eM.t["3sWbf3"]),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: c.type,
                                  onClick: () => {
                                      A.A.verifyResend(),
                                          _.A.show({
                                              title: eM.intl.string(eM.t.LykQYk),
                                              body: eM.intl.format(eM.t.azKEPy, {
                                                  email: null == l ? void 0 : l.email,
                                              }),
                                              cancelText: eM.intl.string(eM.t.Vm8akB),
                                              onCancel: M.R,
                                          });
                                  },
                                  children: eM.intl.string(eM.t.WnX4J2),
                              }),
                          ],
                      });
                  case em.kqX.SCHEDULED_MAINTENANCE:
                      if (null == c.metadata) return null;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DEFAULT,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => R.A.ackScheduledMaintenance(),
                                  noticeType: c.type,
                              }),
                              eM.intl.format(eM.t["yb96S+"], c.metadata),
                              (0, r.jsx)(d.eCN, {
                                  href: "".concat(em.qF7.STATUS, "/incidents/").concat(c.metadata.id),
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t.hvVgAZ),
                              }),
                          ],
                      });
                  case em.kqX.NO_INPUT_DETECTED:
                      if (
                          ((0, Z.F)({
                              location: "AppNotice.trueTriggerPoint",
                          }),
                          (0, eC.isWindows)() && h)
                      ) {
                          if (!0 === ex)
                              return (0, r.jsx)(eG, {
                                  deviceGuid: eg,
                                  noticeType: c.type,
                              });
                          else if (0 === eF)
                              return (0, r.jsx)(ew, {
                                  deviceGuid: eg,
                                  noticeType: c.type,
                              });
                      }
                      if (!eI.A.supports(eb.O5.LOOPBACK))
                          return (0, r.jsx)(eB, {
                              noticeType: c.type,
                          });
                      return (0, r.jsx)(eq, {
                          noticeType: c.type,
                      });
                  case em.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(eL, {
                          noticeType: c.type,
                      });
                  case em.kqX.HARDWARE_MUTE:
                      if (null == c.metadata) return null;
                      let { vendor: e9, model: e7 } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              eM.intl.format(eM.t.qoDex7, {
                                  vendorName: e9.name,
                                  modelName: e7.name,
                              }),
                              (0, r.jsx)(d.PMB, {
                                  noticeType: c.type,
                                  onClick: () => {
                                      T.A.setEnableHardwareMuteNotice(!1), eX();
                                  },
                              }),
                              (0, r.jsx)(d.eCN, {
                                  href: e7.url,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t["Yl/Riu"]),
                              }),
                          ],
                      });
                  case em.kqX.STREAMER_MODE:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: em.kqX.STREAMER_MODE,
                              }),
                              eM.intl.string(eM.t.iEgBXp),
                              (0, r.jsx)(d.Z_L, {
                                  onClick: () => P.A.setEnabled(!1),
                                  noticeType: em.kqX.STREAMER_MODE,
                                  children: eM.intl.string(eM.t.R9GHya),
                              }),
                          ],
                      });
                  case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == c.metadata) return null;
                      let { skuId: e5, applicationId: e6 } = c.metadata,
                          e8 = eR.A.get(e5),
                          e3 = b.A.getApplication(e6);
                      if (null == e8 || null == e3) return null;
                      let e4 = {
                          page: em.liQ.IN_APP,
                      };
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => I.X(e8.id),
                                  noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, r.jsx)(d.tvc, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ej.PC,
                              }),
                              eM.intl.format(eM.t["g3MU/+"], {
                                  applicationName: e3.name,
                                  skuName: e8.name,
                              }),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, C.j)({
                                          applicationId: e3.id,
                                          skuId: e8.id,
                                          openPremiumPaymentModal: () => {
                                              (0, ee.A)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eh.pe.TIER_2,
                                                  analyticsLocations: O,
                                                  analyticsObject: e4,
                                              });
                                          },
                                          analyticsLocations: O,
                                          analyticsLocationObject: e4,
                                          context: __OVERLAY__ ? em.BRT.OVERLAY : em.BRT.APP,
                                      }).then(() => I.X(e8.id)),
                                  children: eM.intl.string(eM.t.KEwPYx),
                              }),
                          ],
                      });
                  case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == c.metadata) return null;
                      let { skuId: e, applicationId: t } = c.metadata,
                          n = eR.A.get(e),
                          i = b.A.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, r.jsx)(d.tvc, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ej.PC,
                              }),
                              eM.intl.format(eM.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name,
                              }),
                              (0, r.jsx)(d.zr9, {
                                  children: (0, r.jsx)(a.N_, {
                                      onClick: () => eX(),
                                      to: {
                                          pathname: em.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: {
                                              scrollRestoration: !1,
                                          },
                                      },
                                      children: eM.intl.string(eM.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case em.kqX.SURVEY: {
                      let e = c.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l, embedded: o, id: a } = e;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.CUSTOM,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.SURVEY,
                                  onClick: () => {
                                      (0, y.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.SURVEY,
                                  onClick: () => {
                                      o ? (0, ei.K)(a) : window.open(l, "_blank"), (0, y.pX)(t, !1);
                                  },
                                  children: i,
                              }),
                          ],
                      });
                  }
                  case em.kqX.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              eM.intl.string(eM.t["ugxmk/"]),
                              (0, r.jsx)(d.eCN, {
                                  href: ef.A.getArticleURL(em.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case em.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER,
                              }),
                              eM.intl.string(eM.t.wVjKGi),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, d.mMO)(async () => {
                                          let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                              n.bind(n, 987482),
                                          );
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  ek(
                                                      {
                                                          source: "Video unsupported browser",
                                                      },
                                                      t,
                                                  ),
                                              );
                                      });
                                  },
                                  children: eM.intl.string(eM.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case em.kqX.DISPATCH_ERROR:
                      if (null == c.metadata) return null;
                      let { error: te } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: em.kqX.DISPATCH_ERROR,
                              }),
                              null == te ? void 0 : te.displayMessage,
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, d.mMO)(async () => {
                                          let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                          return (t) => (0, r.jsx)(e, ek({}, t));
                                      }),
                                  children: eM.intl.string(eM.t.hvVgAZ),
                              }),
                          ],
                      });
                  case em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == c.metadata) return null;
                      let { progress: tt, total: tn, name: tr } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DEFAULT,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, r.jsxs)(j.A, {
                                  justify: j.A.Justify.CENTER,
                                  children: [
                                      null != tr
                                          ? eM.intl.formatToPlainString(eM.t["pHj+z4"], {
                                                name: "".concat(tr),
                                                progress: tt,
                                                total: tn,
                                            })
                                          : eM.intl.formatToPlainString(eM.t["lHZn+A"], {
                                                progress: tt,
                                                total: tn,
                                            }),
                                      (0, r.jsx)(d.y$y, {
                                          type: d.y$y.Type.PULSING_ELLIPSIS,
                                          className: ej.gO,
                                      }),
                                  ],
                              }),
                          ],
                      });
                  case em.kqX.APPLICATION_TEST_MODE:
                      if (null == c.metadata) return null;
                      if (null != eS.A.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(d.$Td, {
                              color: d.Hv$.WARNING,
                              children: (0, r.jsxs)(j.A, {
                                  justify: j.A.Justify.CENTER,
                                  align: j.A.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          children: eM.intl.format(eM.t["1qxVe4"], {
                                              applicationName: c.metadata.applicationName,
                                          }),
                                      }),
                                      (0, r.jsx)(d.PMB, {
                                          onClick: f.cL,
                                          noticeType: em.kqX.APPLICATION_TEST_MODE,
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
                                      children: eM.intl.format(eM.t.Fv5HrE, {
                                          applicationName: c.metadata.applicationName,
                                      }),
                                  }),
                                  (0, r.jsx)(D.A, {
                                      dropdownSize: D.p.DropdownSizes.SMALL,
                                      className: ej.aV,
                                      color: D.p.Colors.WHITE,
                                      look: D.p.Looks.OUTLINED,
                                      size: D.p.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          S.ct(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: em.JJy.NOTIFICATION_BAR,
                                                  object: em.ZSU.NAVIGATION_LINK,
                                              },
                                          }),
                                      applicationId: c.metadata.applicationId,
                                      children: eM.intl.string(eM.t.Q5ZgpK),
                                  }),
                                  (0, r.jsx)(d.PMB, {
                                      onClick: f.cL,
                                      noticeType: em.kqX.APPLICATION_TEST_MODE,
                                  }),
                              ],
                          }),
                      });
                  case em.kqX.VIEWING_ROLES:
                      return (0, r.jsx)(z.A, {});
                  case em.kqX.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(d.$Td, {
                          color:
                              ez === eh.PremiumTypes.TIER_1
                                  ? d.Hv$.PREMIUM_TIER_1
                                  : ez === eh.PremiumTypes.TIER_0
                                    ? d.Hv$.PREMIUM_TIER_0
                                    : d.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              (0, r.jsx)(d.tvc, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ej.PC,
                              }),
                              ez === eh.PremiumTypes.TIER_1
                                  ? eM.intl.formatToPlainString(eM.t.fXv4wm, {
                                        daysLeft: c.metadata.daysLeft,
                                    })
                                  : ez === eh.PremiumTypes.TIER_0
                                    ? eM.intl.formatToPlainString(eM.t.ZOHZMr, {
                                          daysLeft: c.metadata.daysLeft,
                                      })
                                    : eM.intl.formatToPlainString(eM.t.outyHh, {
                                          daysLeft: c.metadata.daysLeft,
                                      }),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
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
                                                      ((n = ek({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: c.metadata.daysLeft,
                                                              premiumType: ez,
                                                              analyticsSource: "Nag Bar",
                                                              premiumSubscription: c.metadata.premiumSubscription,
                                                          }),
                                                      Object.getOwnPropertyDescriptors
                                                          ? Object.defineProperties(
                                                                n,
                                                                Object.getOwnPropertyDescriptors(i),
                                                            )
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
                                      ez === eh.PremiumTypes.TIER_1
                                          ? eM.intl.string(eM.t.BkbUPM)
                                          : ez === eh.PremiumTypes.TIER_0
                                            ? eM.intl.string(eM.t.Px978X)
                                            : eM.intl.string(eM.t.LW5tCE),
                              }),
                          ],
                      });
                  case em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ti, dismissUntil: tl } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: c.type,
                                  onClick: () => {
                                      eX(tl);
                                  },
                              }),
                              eM.intl.format(eM.t.zxU0Kp, {
                                  daysPastDue: ti,
                              }),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eX(tl),
                                          (0, ed.openUserSettings)(eE.X.SUBSCRIPTIONS_PANEL, {
                                              section: em.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children: eM.intl.string(eM.t.q8rxeS),
                              }),
                          ],
                      });
                  case em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              eM.intl.string(eM.t.LlZaoX),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          (0, ed.openUserSettings)(eE.X.SUBSCRIPTIONS_PANEL, {
                                              section: em.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children: eM.intl.string(eM.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              eM.intl.string(eM.t["30YfCr"]),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          (0, ed.openUserSettings)(eE.X.SUBSCRIPTIONS_PANEL, {
                                              section: em.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children: eM.intl.string(eM.t.U5pKWA),
                              }),
                          ],
                      });
                  case em.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              ez === eh.PremiumTypes.TIER_1
                                  ? eM.intl.formatToPlainString(eM.t.b6QUvf, {
                                        daysLeft: c.metadata.daysLeft,
                                    })
                                  : ez === eh.PremiumTypes.TIER_0
                                    ? eM.intl.formatToPlainString(eM.t["tURZ/M"], {
                                          daysLeft: c.metadata.daysLeft,
                                      })
                                    : eM.intl.formatToPlainString(eM.t.AyC74I, {
                                          daysLeft: c.metadata.daysLeft,
                                      }),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eX(
                                          null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          (0, ed.openUserSettings)(eE.X.SUBSCRIPTIONS_PANEL, {
                                              section: em.nc_.SUBSCRIPTIONS,
                                          });
                                  },
                                  children:
                                      ez === eh.PremiumTypes.TIER_1
                                          ? eM.intl.string(eM.t.lboF5O)
                                          : ez === eh.PremiumTypes.TIER_0
                                            ? eM.intl.string(eM.t["4UPwOq"])
                                            : eM.intl.string(eM.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case em.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(Y.y, {
                          buttonText: null != (t = c.buttonText) ? t : eM.intl.string(eM.t["/g10LC"]),
                          onGoBack: c.callback,
                          onDismiss: () => eX(),
                          showCloseButton: !0,
                      });
                  case em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, r.jsx)(F.A, {
                          guildId: s,
                          analyticsLocations: O,
                      });
                  case em.kqX.QUARANTINED:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              eM.intl.string(eM.t.DVFJYf),
                              (0, r.jsx)(d.eCN, {
                                  href: eU.q,
                                  target: "_blank",
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t.kvHdFN),
                              }),
                              (0, r.jsx)(d.MzZ, {
                                  href: ef.A.getArticleURL(em.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: ej.yw,
                                  children: eM.intl.string(eM.t.hvVgAZ),
                              }),
                          ],
                      });
                  case em.kqX.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              eM.intl.string(eM.t.Ugijzi),
                              (0, r.jsx)(d.eCN, {
                                  href: "".concat(em.qF7.STATUS),
                                  noticeType: c.type,
                                  children: eM.intl.string(eM.t.hvVgAZ),
                              }),
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => eX(),
                                  noticeType: em.kqX.BLOCKED_BY_PROXY,
                              }),
                          ],
                      });
                  case em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: to, decisionId: ta } = c.metadata;
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.WARNING,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != s && (0, V.wu)(s), eX(to);
                                  },
                              }),
                              eM.intl.string(eM.t.B8ruyY),
                              (0, r.jsx)(d.zr9, {
                                  onClick: () => {
                                      null != s &&
                                          (0, V.W5)(s, ta, () => {
                                              eX(to), (0, V.wu)(s);
                                          });
                                  },
                                  children: eM.intl.string(eM.t.oX14El),
                              }),
                              null != s
                                  ? (0, r.jsx)(d.zr9, {
                                        onClick: () =>
                                            $.A.open(s, em.BEX.GUILD_AUTOMOD, void 0, em.nd0.AUTOMOD_MENTION_SPAM),
                                        children: eM.intl.string(eM.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case em.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.BRAND,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      eo.li(), eX();
                                  },
                              }),
                              eM.intl.string(eM.t.I1nKfO),
                              (0, r.jsx)(d.Z_L, {
                                  noticeType: em.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, d.mMO)(async () => {
                                          let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(
                                              n.bind(n, 156189),
                                          );
                                          return (t) => (0, r.jsx)(e, ek({}, t));
                                      }),
                                          eo.li(),
                                          eX();
                                  },
                                  children: eM.intl.string(eM.t.l5xYnH),
                              }),
                          ],
                      });
                  case em.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                      let ts = o()().add(5, "days").toDate();
                      return (0, r.jsx)(er.A, {
                          dismissCurrentNotice: () => {
                              (0, k.Dr)(eP.pe[em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]), eX(ts);
                          },
                          subscriptionTier: eh.pe.TIER_2,
                      });
                  case em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                      let tc = o()().add(5, "days").toDate();
                      return (0, r.jsx)(en.A, {
                          dismissCurrentNotice: () => {
                              eX(tc);
                          },
                          subscriptionTier: eh.pe.TIER_2,
                      });
                  case em.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.DANGER,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  noticeType: em.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null == (e = c.metadata) ? void 0 : e.streamKey) != null &&
                                          (0, el.lk)(c.metadata.streamKey);
                                  },
                              }),
                              eM.intl.string(eM.t.rOx44m),
                          ],
                      });
                  case em.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(d.$Td, {
                          color: d.Hv$.BRAND,
                          children: [
                              (0, r.jsx)(d.PMB, {
                                  onClick: () => {
                                      var e;
                                      eX(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              eM.intl.string(eM.t["0klLS7"]),
                              (0, r.jsx)(d.Z_L, {
                                  onClick: () => {
                                      var e;
                                      (0, es.$)(), eX(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eM.intl.string(eM.t.e4y2VM),
                              }),
                          ],
                      });
                  case em.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsx)(ea.A, {});
                  case em.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, r.jsx)(eu.A, {});
                  default:
                      return null;
              }
          })
        : null;

function eF() {
    let { analyticsLocations: e } = (0, U.Ay)(h.A.NOTICE);
    return (0, r.jsx)(U.f5, {
        value: e,
        children: (0, r.jsx)(eV, {}),
    });
}
