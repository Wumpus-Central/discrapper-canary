n.d(t, {
    $p: () => ti,
    BB: () => tn,
    ZP: () => tr,
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(275726),
    c = n(95015),
    u = n(442837),
    d = n(377108),
    f = n(902704),
    p = n(481060),
    _ = n(904245),
    m = n(637374),
    h = n(626799),
    g = n(624367),
    E = n(183431),
    b = n(421474),
    y = n(603270),
    O = n(234431),
    v = n(162297),
    S = n(222709),
    I = n(446411),
    T = n(36129),
    A = n(960904),
    C = n(161314),
    N = n(247206),
    P = n(629710),
    R = n(262777),
    D = n(761538),
    w = n(674611),
    x = n(294734),
    L = n(947849),
    j = n(10433),
    M = n(715903),
    k = n(71619),
    U = n(637618),
    G = n(225890),
    Z = n(364097),
    B = n(939170),
    F = n(187506),
    V = n(954654),
    H = n(41776),
    Y = n(628238),
    W = n(454585),
    K = n(768494),
    z = n(124347),
    q = n(976853),
    Q = n(346013),
    X = n(120324),
    J = n(977683),
    $ = n(128435),
    ee = n(98278),
    et = n(348066),
    en = n(982168),
    er = n(163038),
    ei = n(699833),
    ea = n(344997),
    eo = n(614118),
    es = n(378233),
    el = n(374425),
    ec = n(665906),
    eu = n(432147),
    ed = n(695346),
    ef = n(23750),
    ep = n(314897),
    e_ = n(271383),
    em = n(607744),
    eh = n(496675),
    eg = n(594174),
    eE = n(52824),
    eb = n(626135),
    ey = n(70956),
    eO = n(408433),
    ev = n(709054),
    eS = n(591759),
    eI = n(594173),
    eT = n(169525),
    eA = n(786761),
    eC = n(161010),
    eN = n(255269),
    eP = n(461157),
    eR = n(901461),
    eD = n(432376),
    ew = n(384203),
    ex = n(633957),
    eL = n(530472),
    ej = n(29909),
    eM = n(782658),
    ek = n(219797),
    eU = n(453687),
    eG = n(128854),
    eZ = n(101578),
    eB = n(524444),
    eF = n(319323),
    eV = n(884182),
    eH = n(546432),
    eY = n(920888),
    eW = n(328966),
    eK = n(963206),
    ez = n(817384),
    eq = n(981631),
    eQ = n(474936),
    eX = n(388032),
    eJ = n(636428),
    e$ = n(680674);
function e0(e, t, n) {
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
function e1(e) {
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
                e0(e, t, n[t]);
            });
    }
    return e;
}
function e3(e, t) {
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
function e2(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e3(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e4(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e5(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e5(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function e8() {
    return (0, i.jsxs)("div", {
        className: eJ.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)("img", {
                src: e$,
                className: eJ.nitroBadgeSvg,
                alt: "",
            }),
            (0, i.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eX.intl.format(eX.t["G/H+s6"], { onClick: () => (0, ee.z)() }),
            }),
        ],
    });
}
let e6 = [eq.hBH.GIFV],
    e7 = 15 * ey.Z.Millis.MINUTE,
    e9 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    te = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: o } = e,
            s = (0, c.yE)(o, K.hR.IS_ANIMATED);
        return null != r && null != a && (z.uo.test(n) || (s && (z.YG.test(n) || z.FH.test(n))))
            ? (0, i.jsx)(ej.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: d.EO.IMAGE,
                  className: eJ.gifFavoriteButton,
              })
            : null;
    };
function tt(e, t) {
    return (
        e === t ||
        (e.length === t.length &&
            !e.some((e, n) => {
                let { emoji: r, count: i, burst_count: a } = e,
                    { emoji: o, count: s, burst_count: l } = t[n];
                return a !== l || i !== s || r.id !== o.id || r.name !== o.name;
            }))
    );
}
class tn extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e9.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: o, poll: s } = e;
        return (
            !(0, f.Z)(this.state, t) ||
            !(0, f.Z)(this.props, e, ["message", "channel"]) ||
            n.type !== a.type ||
            s !== i ||
            o.codedLinks !== r.codedLinks ||
            o.flags !== r.flags ||
            o.giftCodes !== r.giftCodes ||
            o.attachments !== r.attachments ||
            o.embeds !== r.embeds ||
            o.components !== r.components ||
            o.activity !== r.activity ||
            !tt(o.reactions, r.reactions)
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eI.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(w.Z, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case eI.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(E.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", {
            className: eJ.ctaButtonContainer,
            children: r,
        });
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eQ.Lw);
        return (0, eC.M)("attachment") && t ? (0, i.jsx)(e8, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === A.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eM.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext,
                                },
                                r,
                            )
                          : null;
                  if (n === A.g.TEMPLATE) return (0, i.jsx)(Z.Z, { code: r }, r);
                  if (n === A.g.EVENT) return (0, i.jsx)(G.Z, { code: r }, r);
                  if (n === A.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          ew.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === A.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          j.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === A.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: o } = (0, O.U)(a);
                      return (0, i.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: o,
                          },
                          r,
                      );
                  } else if (n === A.g.GUILD_PRODUCT) return (0, i.jsx)(U.Z, { code: r }, r);
                  else if (n === A.g.SERVER_SHOP) return (0, i.jsx)(C.Z, { guildId: r }, r);
                  else if (n === A.g.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = r.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(
                          eo.Z,
                          {
                              guildId: t,
                              skuId: e,
                              channel: n,
                          },
                          r,
                      );
                  } else if (n === A.g.QUESTS_EMBED) return (0, i.jsx)(et.Z, { questId: r }, r);
                  else if (n === A.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          y.P,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === A.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                y.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e,
                                },
                                r,
                            );
                  } else if (n === A.g.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          v.Z,
                          {
                              applicationId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === A.g.COLLECTIBLES_SHOP) return null;
                  else if (n === A.g.EXPERIMENT) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: o, giftInfo: s } = e,
            l = eg.default.getCurrentUser();
        return null != l && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eJ.giftCodeContainer,
                          children: (0, i.jsx)(m.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: l,
                              type: a,
                              content: o,
                              giftInfo: s,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: r,
            isLurking: a,
            isGuest: o,
            isPendingMember: s,
            channel: l,
            forceAddReactions: c,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eY.Z, {
                  message: e,
                  channel: l,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: a,
                  isGuest: o,
                  isPendingMember: s,
                  forceAddReactions: c,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: r,
                inlineAttachmentMedia: a,
                onMediaItemContextMenu: o,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: l,
            } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || (0, ef.hv)(e)) return null;
        let f = u.filter((e) => null == e.flags || !(0, c.yE)(e.flags, eq.J0y.IS_THUMBNAIL));
        if (0 === f.length) return null;
        let p = f
                .map((t) => {
                    var n;
                    return e2(e1({}, (0, K.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, c.yE)(null != (n = t.flags) ? n : 0, eq.J0y.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: _, srcToHandlePreloadImage: m } = (0, X.G)(
                p,
                {
                    enabledContentHarmTypeFlags: s,
                    shouldHideMediaOptions: l,
                },
                "Media Mosaic",
            ),
            h = p.length > 1,
            g = (0, c.yE)(d, eq.iLy.IS_VOICE_MESSAGE);
        function E(e, t) {
            return (0, eT.dn)(e.originalItem, t);
        }
        let b = f.map((i) => {
            let s = (e, n, r) => {
                    eb.default.track(eq.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                        type: i.content_type,
                        flags: i.flags,
                        size: i.size,
                        duration: r,
                    });
                },
                l = (0, K.VY)(i),
                c = {
                    message: e,
                    item: (0, eH.OB)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (f.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: E,
                    onContextMenu:
                        null != o
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), o(e, l);
                              }
                            : void 0,
                    renderAudioComponent: g ? ek.jY : ek.q7,
                    renderImageComponent: ek.dS,
                    renderVideoComponent: ek.vZ,
                    renderPlaintextFilePreview: ek.d4,
                    renderGenericFileComponent: ek.ZK,
                    renderMosaicItemFooter: ek.L9,
                    onPlay: s,
                    gifFavoriteButton: te(l),
                },
                u = (0, eE.q)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return u in _ && h && ((c.onClick = _[u]), (c.handlePreloadImage = m[u])), c;
        });
        return (0, i.jsx)(eV.Z, { items: b });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      ez.b.has(t.type) ||
                      (0, eO.l3)(t) ||
                      ((0, B.b)(t) && !(0, F.M)(e)) ||
                      (0, eO.jz)(t) ||
                      (0, eO.HK)(t)
                  )
                      return null;
                  let r = {
                      renderImageComponent: eB.Yi,
                      renderVideoComponent: eB.lV,
                      renderLinkComponent: eB.iT,
                  };
                  if (
                      t.type === eq.hBH.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = eS.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let o = a.pathname.split("/")[3];
                          if (null != o)
                              return (0, i.jsx)(
                                  h.Z,
                                  {
                                      skuId: o,
                                      renderFallback: () => this.renderEmbed(t, n, r, e),
                                  },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: r,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: o,
        } = this.props;
        return (0, i.jsx)(eG.F, {
            gifAutoPlay: t,
            getGifFavButton: te,
            getOnMediaItemContextMenu:
                null == o
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == o || o(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(V.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a,
            }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eZ.Z, {
            channel: t,
            message: e,
            hideParty: !1,
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eq.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(S.Z, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eA.Pv)(e)
            ? (0, i.jsx)(eL.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      _.Z.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, es.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      el.Z,
                      {
                          channel: n,
                          isInteracting: r,
                          renderableSticker: e,
                      },
                      e.id,
                  ),
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eq.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eu.Z, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eq.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - ev.default.extractTimestamp(e.id) >= e7)
        )
            return (0, i.jsx)("div", {
                className: eJ.threadRoleMentionFailure,
                children: eX.intl.string(eX.t.ma8Rs0),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.SR, {
            dismissable: !0,
            header: eX.intl.string(eX.t.VL1KOk),
            confirmText: eX.intl.string(eX.t.YEHppG),
            cancelText: eX.intl.string(eX.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eJ.confirmText,
                    children: eX.intl.string(eX.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eX.intl.string(eX.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(p.SR, {
                  dismissable: !0,
                  header: eX.intl.string(eX.t.CbTIEo),
                  confirmText: eX.intl.string(eX.t.kFwAsa),
                  cancelText: eX.intl.string(eX.t["ETE/oC"]),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null,
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      _.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null,
                          });
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eJ.confirmText,
                      children: eX.intl.string(eX.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== l.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eF.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(ex.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eq.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      Q.Z,
                      {
                          embedUrl: t.url,
                          message: e,
                          channel: this.props.channel,
                      },
                      t.id,
                  ),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eq.hBH.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(ei.i, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eq.hBH.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ea.g, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, P.kC)(e)
            ? (0, i.jsx)(D.Z, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)($.Z, {
                message: e,
                poll: t,
                className: eJ.pollContainer,
            });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(T.q, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, en.Gi)(e, this.props.channel)) return (0, i.jsx)(er.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, en.Gi)(e, this.props.channel)) return (0, i.jsx)(x.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eW.Z, {
            message: e,
            compact: t,
            location: eW.H.AFTER_ACCESSORIES,
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: o } = this.state,
            l = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderAttachments(t),
            f = this.renderCtaButton(),
            p = this.renderSocialProofingFileSizeNitroUpsell(t),
            _ = this.renderEmbeds(t),
            m = this.renderActivityInvite(t),
            h = this.renderReactions(t),
            g = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            b = this.renderStickersAccessories(t),
            y = this.renderThreadAccessories(t),
            O = this.renderComponentAccessories(t),
            v = this.renderThreadRoleMentionWarning(t),
            S = this.renderEmbeddedApplicationInstanceEmbed(t),
            I = this.renderInteractionPremiumUpsell(t),
            T = this.renderMediaPostEmbeds(t),
            A = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            N = this.renderMediaObscureNotice(t),
            P = this.renderPoll(t, n),
            R = this.renderForwardedMessage(t),
            D = this.renderReportedMessage(t),
            w = this.renderShareClientTheme(t);
        return null == c &&
            null == d &&
            null == _ &&
            null == m &&
            null == h &&
            null == u &&
            null == g &&
            null == E &&
            null == b &&
            null == y &&
            null == O &&
            null == S &&
            null == v &&
            null == T &&
            null == A &&
            null != I &&
            null == P &&
            null == R &&
            null == D &&
            null == w
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eU.bX)(t),
                  className: s()(e, eJ.container),
                  children: [
                      D,
                      R,
                      v,
                      P,
                      w,
                      c,
                      u,
                      T,
                      d,
                      f,
                      _,
                      N,
                      m,
                      b,
                      O,
                      S,
                      I,
                      p,
                      l,
                      h,
                      g,
                      E,
                      a && this.renderSuppressConfirmModal(),
                      o && this.renderRemoveAttachmentConfirmModal(),
                      y,
                      A,
                      C,
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            e0(this, "state", {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null,
            }),
            e0(this, "getAcceptInviteContext", (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id,
                };
            }),
            e0(this, "renderEmbed", (e, t, n, r) => {
                var a, o, s;
                let {
                        gifAutoPlay: l,
                        inlineEmbedMedia: c,
                        canSuppressEmbeds: u,
                        hasSpoilerEmbeds: d,
                        enabledContentHarmTypeFlags: f,
                        shouldAgeVerify: p,
                    } = this.props,
                    _ = (0, eT.BP)(e, r, d, f);
                if (e.type === eq.hBH.GIFT) return null;
                let m = e6.includes(e.type)
                    ? e.url
                    : null != (s = null == (a = e.image) ? void 0 : a.url)
                      ? s
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    L.h.Provider,
                    {
                        value: (0, eK.P)(m, e.image, e.video),
                        children: (0, i.jsx)(
                            I.ZP,
                            e1(
                                {
                                    embed: e,
                                    obscureReason: null != _ ? _ : void 0,
                                    autoPlayGif: l,
                                    hideMedia: !c,
                                    allowFullScreen: !this.props.disableComponentInteractivity,
                                    onSuppressEmbed: u ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    embedIndex: t,
                                    shouldAgeVerify: null != p && p,
                                },
                                n,
                            ),
                        ),
                    },
                    e.id,
                );
            }),
            e0(this, "renderEmbedTitle", (e, t) =>
                e.type !== eq.hBH.RICH
                    ? t
                    : (null != e.url && "" !== e.url ? W.Z.parseEmbedTitleWithoutLinks : W.Z.parseEmbedTitle)(t, !0, {
                          channelId: this.props.channel.id,
                      }),
            ),
            e0(this, "renderEmbedDescription", (e, t, n) =>
                e.type === eq.hBH.RICH
                    ? W.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks,
                      })
                    : t,
            ),
            e0(this, "handleEmbedSuppressed", (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            e0(this, "handleRemoveAttachment", (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t,
                });
            });
    }
}
function tr(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: o } = e,
        s = (0, u.e7)([ep.default], () => ep.default.getId()),
        l = ed.x4.useSetting(),
        d = ed.RS.useSetting(),
        f = ed.NA.useSetting() && !(0, eR.Z)(e.message),
        p = ed.nc.useSetting() && !1 !== e.renderReactions,
        _ = ed.QK.useSetting(),
        m = (0, u.e7)([em.Z], () => null == n.guild_id || em.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, u.e7)([H.Z], () => null != n.guild_id && H.Z.isLurking(n.guild_id), [n]),
        g = (0, u.e7)([e_.ZP], () => e_.ZP.isCurrentUserGuest(n.guild_id), [n]),
        E = (0, u.e7)([e_.ZP, eg.default], () => {
            var e, t;
            let r = eg.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != n.guild_id && null != r
                            ? null == (e = e_.ZP.getMember(n.guild_id, r.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canAddNewReactions: b, canManageMessages: y } = (0, u.cj)(
            [eh.Z],
            () => ({
                canAddNewReactions: m && eh.Z.can(eq.Plq.ADD_REACTIONS, n),
                canManageMessages: eh.Z.can(eq.Plq.MANAGE_MESSAGES, n),
            }),
            [m, n],
        ),
        O = (0, M.ux)(n.guild_id),
        [, v] = (0, k.AB)(n.guild_id),
        S = (0, ec.$R)(n),
        I =
            (s === r.author.id || y) &&
            r.author.id !== eq.LAt &&
            !1 !== a &&
            !(0, c.yE)(r.flags, eq.iLy.EPHEMERAL) &&
            S &&
            1 === (0, eP.Z)(r),
        T = s === r.author.id && S && !o,
        A = r.author.id === s,
        C = r.isFirstMessageInForumPost(n),
        P = (0, eD.Z)({
            channel: n,
            canChat: m,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: h,
            isGuest: g,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: S,
            isAutomodQuarantined: O,
        }),
        D = (0, Y.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        w = (0, q.Z)(null == n ? void 0 : n.id),
        x = (0, J.Z)(r),
        L = (0, R.v)(r),
        j = (0, eN._)(n),
        U = (0, eI.ro)(r.id, r.channel_id),
        G = (0, N.m8)();
    return (0, i.jsx)(
        tn,
        e2(
            e1(
                e2(
                    e1(
                        {
                            canSuppressEmbeds: I,
                            canDeleteAttachments: T,
                        },
                        P,
                    ),
                    { disableReactionReads: !!C || P.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && j,
                hasBailedAst: e.hasBailedAst,
                isLurking: h && m,
                isGuest: g && m,
                isPendingMember: E && m,
                isCurrentUser: A,
                inlineAttachmentMedia: l,
                inlineEmbedMedia: d,
                renderEmbeds: f,
                gifAutoPlay: _,
                canRenderReferralEmbed: n.isDM(),
                poll: x,
                showListsAndHeaders: D,
                showMaskedLinks: D,
                shouldHideMediaOptions: w,
                enabledContentHarmTypeFlags: L,
                ctaButtonType: U,
                shouldAgeVerify: G,
            },
        ),
    );
}
e0(tn, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let ti = (e) => {
    var t,
        {
            message: n,
            channel: r,
            disableReactionReads: a = !1,
            renderThreadAccessory: o = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: l = !0,
            disableComponentInteractivity: c = !0,
        } = e,
        u = e4(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
        ]);
    let d = ed.x4.useSetting(),
        f = ed.RS.useSetting(),
        p = ed.NA.useSetting(),
        _ = ed.QK.useSetting(),
        m = (0, Y.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        h = (0, q.Z)(null == r ? void 0 : r.id),
        g = (0, R.v)(n),
        E = (0, eI.ro)(n.id, n.channel_id),
        b = (0, J.Z)(n);
    return (0, i.jsx)(
        tn,
        e2(e1({}, u), {
            message: n,
            channel: r,
            disableReactionReads: a,
            disableReactionCreates: s,
            disableReactionUpdates: l,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: o,
            inlineAttachmentMedia: d,
            inlineEmbedMedia: f,
            renderEmbeds: p,
            gifAutoPlay: _,
            poll: b,
            showListsAndHeaders: m,
            showMaskedLinks: m,
            shouldHideMediaOptions: h,
            enabledContentHarmTypeFlags: g,
            ctaButtonType: E,
        }),
    );
};
