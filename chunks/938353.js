n.d(t, {
    $p: () => te,
    BB: () => e7,
    ZP: () => e9,
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205);
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    p = n(481060),
    m = n(904245),
    f = n(637374),
    g = n(626799),
    _ = n(624367),
    h = n(183431),
    b = n(421474),
    E = n(603270),
    C = n(234431),
    v = n(162297),
    O = n(222709),
    y = n(446411),
    x = n(960904),
    j = n(161314),
    I = n(247206),
    S = n(629710),
    T = n(262777),
    P = n(761538),
    N = n(674611),
    A = n(294734),
    w = n(947849),
    Z = n(10433),
    R = n(715903),
    D = n(71619),
    L = n(637618),
    M = n(225890),
    k = n(364097),
    U = n(939170),
    F = n(187506),
    B = n(954654),
    G = n(41776),
    H = n(628238),
    V = n(454585),
    z = n(768494),
    W = n(124347),
    Y = n(976853),
    K = n(346013),
    X = n(207982),
    q = n(977683),
    J = n(128435),
    Q = n(98278),
    $ = n(623879),
    ee = n(686380),
    et = n(265299),
    en = n(982168),
    er = n(163038),
    ei = n(699833),
    el = n(344997),
    eo = n(378233),
    ea = n(374425),
    es = n(665906),
    ec = n(432147),
    eu = n(695346),
    ed = n(23750),
    ep = n(314897),
    em = n(271383),
    ef = n(607744),
    eg = n(496675),
    e_ = n(594174),
    eh = n(52824),
    eb = n(626135),
    eE = n(70956),
    eC = n(408433),
    ev = n(630388),
    eO = n(709054),
    ey = n(591759),
    ex = n(594173),
    ej = n(169525),
    eI = n(786761),
    eS = n(161010),
    eT = n(255269),
    eP = n(461157),
    eN = n(901461),
    eA = n(432376),
    ew = n(384203),
    eZ = n(633957),
    eR = n(530472),
    eD = n(29909),
    eL = n(782658),
    eM = n(219797),
    ek = n(453687),
    eU = n(128854),
    eF = n(101578),
    eB = n(524444),
    eG = n(319323),
    eH = n(884182),
    eV = n(546432),
    ez = n(920888),
    eW = n(328966),
    eY = n(963206),
    eK = n(817384),
    eX = n(981631),
    eq = n(474936),
    eJ = n(388032),
    eQ = n(636428),
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
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e8() {
    return (0, i.jsxs)("div", {
        className: eQ.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)("img", {
                src: e$,
                className: eQ.nitroBadgeSvg,
                alt: "",
            }),
            (0, i.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eJ.intl.format(eJ.t["G/H+s7"], { onClick: () => (0, Q.z)() }),
            }),
        ],
    });
}
let e2 = [eX.hBH.GIFV],
    e4 = 15 * eE.Z.Millis.MINUTE,
    e6 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e5 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: l, flags: o } = e,
            a = (0, ev.yE)(o, z.hR.IS_ANIMATED);
        return null != r && null != l && (W.uo.test(n) || (a && (W.YG.test(n) || W.FH.test(n))))
            ? (0, i.jsx)(eD.Z, {
                  width: r,
                  height: l,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eQ.gifFavoriteButton,
              })
            : null;
    };
class e7 extends (r = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e6.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, r;
        let { channel: i, message: l, poll: o } = this.props,
            { channel: a, message: s, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ["message", "channel"]) ||
            i.type !== a.type ||
            c !== o ||
            s.codedLinks !== l.codedLinks ||
            s.flags !== l.flags ||
            s.giftCodes !== l.giftCodes ||
            s.attachments !== l.attachments ||
            s.embeds !== l.embeds ||
            s.components !== l.components ||
            s.activity !== l.activity ||
            ((n = s.reactions) !== (r = l.reactions) &&
                (n.length !== r.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: l } = e,
                            { emoji: o, count: a, burst_count: s } = r[t];
                        return l !== s || i !== a || n.id !== o.id || n.name !== o.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case ex.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(N.Z, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case ex.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(h.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", {
            className: eQ.ctaButtonContainer,
            children: r,
        });
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eq.Lw);
        return (0, eS.M)("attachment") && t ? (0, i.jsx)(e8, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: l } = t;
                  if (n === x.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eL.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext,
                                },
                                r,
                            )
                          : null;
                  if (n === x.g.TEMPLATE) return (0, i.jsx)(k.Z, { code: r }, r);
                  if (n === x.g.EVENT) return (0, i.jsx)(M.Z, { code: r }, r);
                  if (n === x.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          ew.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === x.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          Z.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === x.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: o } = (0, C.U)(l);
                      return (0, i.jsx)(
                          _.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: o,
                          },
                          r,
                      );
                  } else if (n === x.g.GUILD_PRODUCT) return (0, i.jsx)(L.Z, { code: r }, r);
                  else if (n === x.g.SERVER_SHOP) return (0, i.jsx)(j.Z, { guildId: r }, r);
                  else if (n === x.g.QUESTS_EMBED) return (0, i.jsx)(et.Z, { questId: r }, r);
                  else if (n === x.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          E.P,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === x.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                E.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e,
                                },
                                r,
                            );
                  } else if (n === x.g.APP_OAUTH2_LINK) return (0, i.jsx)(v.Z, { applicationId: r }, r);
                  else if (n === x.g.COLLECTIBLES_SHOP) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: l, content: o, giftInfo: a } = e,
            s = e_.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eQ.giftCodeContainer,
                          children: (0, i.jsx)(f.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: s,
                              type: l,
                              content: o,
                              giftInfo: a,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: r } = this.props,
            l = $.ZP.getCurrentConfig({ location: "isSystemMessage" }).cohort !== $.FZ.Control;
        return n !== s.u.PREMIUM_REFERRAL || null == t || l
            ? null
            : (0, i.jsx)(
                  "div",
                  {
                      className: eQ.referralContainer,
                      children: (0, i.jsx)(ee.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != r && r,
                      }),
                  },
                  t,
              );
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: r,
            isLurking: l,
            isGuest: o,
            isPendingMember: a,
            channel: s,
            forceAddReactions: c,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(ez.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: l,
                  isGuest: o,
                  isPendingMember: a,
                  forceAddReactions: c,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: r,
                inlineAttachmentMedia: l,
                onMediaItemContextMenu: o,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: s,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ed.hv)(e)) return null;
        let d = c.filter((e) => null == e.flags || !(0, ev.yE)(e.flags, eX.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let p = d
                .map((t) => {
                    var n;
                    return e3(e1({}, (0, z.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ev.yE)(null != (n = t.flags) ? n : 0, eX.J0y.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: m, srcToHandlePreloadImage: f } = (0, X.G)(
                p,
                {
                    enabledContentHarmTypeFlags: a,
                    shouldHideMediaOptions: s,
                },
                "Media Mosaic",
            ),
            g = p.length > 1,
            _ = (0, ev.yE)(u, eX.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, ej.dn)(e.originalItem, t);
        }
        let b = d.map((i) => {
            let a = (0, z.VY)(i),
                s = {
                    message: e,
                    item: (0, eV.OB)(i, l),
                    autoPlayGif: n,
                    canRemoveItem: r && (d.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: h,
                    onContextMenu:
                        null != o
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), o(e, a);
                              }
                            : void 0,
                    renderAudioComponent: _ ? eM.jY : eM.q7,
                    renderImageComponent: eM.dS,
                    renderVideoComponent: eM.vZ,
                    renderPlaintextFilePreview: eM.d4,
                    renderGenericFileComponent: eM.ZK,
                    renderMosaicItemFooter: eM.L9,
                    onPlay: (e, n, r) => {
                        eb.default.track(eX.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: r,
                        });
                    },
                    gifFavoriteButton: e5(a),
                    isSearchResult: this.props.isSearchResult,
                },
                c = (0, eh.q)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return c in m && g && ((s.onClick = m[c]), (s.handlePreloadImage = f[c])), s;
        });
        return (0, i.jsx)(eH.Z, { items: b });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eK.b.has(t.type) || (0, eC.l3)(t) || ((0, U.b)(t) && !(0, F.M)(e)) || (0, eC.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eB.Yi,
                      renderVideoComponent: eB.lV,
                      renderLinkComponent: eB.iT,
                  };
                  if (
                      t.type === eX.hBH.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let l = ey.Z.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let o = l.pathname.split("/")[3];
                          if (null != o)
                              return (0, i.jsx)(
                                  g.Z,
                                  {
                                      skuId: o,
                                      renderFallback: () => this.renderEmbed(t, n, r, e),
                                  },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: r,
            disableComponentInteractivity: l,
            onMediaItemContextMenu: o,
        } = this.props;
        return (0, i.jsx)(eU.F, {
            gifAutoPlay: t,
            getGifFavButton: e5,
            getOnMediaItemContextMenu:
                null == o
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == o || o(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(B.ZP, {
                message: e,
                shouldDisableInteractiveComponents: l,
            }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eF.Z, {
            channel: t,
            message: e,
            hideParty: !1,
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eX.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(O.Z, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eI.Pv)(e)
            ? (0, i.jsx)(eR.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, eo.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      ea.Z,
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
        if (e.hasFlag(eX.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(ec.Z, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eX.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eO.default.extractTimestamp(e.id) >= e4)
        )
            return (0, i.jsx)("div", {
                className: eQ.threadRoleMentionFailure,
                children: eJ.intl.string(eJ.t.ma8Rs7),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.sYh, {
            dismissable: !0,
            header: eJ.intl.string(eJ.t.VL1KOj),
            confirmText: eJ.intl.string(eJ.t.YEHppK),
            cancelText: eJ.intl.string(eJ.t["ETE/oK"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eQ.confirmText,
                    children: eJ.intl.string(eJ.t["vXZ+Fh"]),
                }),
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eJ.intl.string(eJ.t["5j2by8"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(p.sYh, {
                  dismissable: !0,
                  header: eJ.intl.string(eJ.t.CbTIEh),
                  confirmText: eJ.intl.string(eJ.t.kFwAsb),
                  cancelText: eJ.intl.string(eJ.t["ETE/oK"]),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null,
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      m.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null,
                          });
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eQ.confirmText,
                      children: eJ.intl.string(eJ.t.faHmOz),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eG.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eZ.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eX.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      K.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eX.hBH.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(ei.i, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eX.hBH.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(el.g, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, S.kC)(e)
            ? (0, i.jsx)(P.Z, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(J.Z, {
                message: e,
                poll: t,
                className: eQ.pollContainer,
            });
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, en.Gi)(e, this.props.channel)) return (0, i.jsx)(er.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, en.Gi)(e, this.props.channel)) return (0, i.jsx)(A.Z, { message: e });
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
            { showSuppressModal: l, showRemoveAttachmentModal: o } = this.state,
            s = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            p = this.renderAttachments(t),
            m = this.renderCtaButton(),
            f = this.renderSocialProofingFileSizeNitroUpsell(t),
            g = this.renderEmbeds(t),
            _ = this.renderActivityInvite(t),
            h = this.renderReactions(t),
            b = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            C = this.renderStickersAccessories(t),
            v = this.renderThreadAccessories(t),
            O = this.renderComponentAccessories(t),
            y = this.renderThreadRoleMentionWarning(t),
            x = this.renderEmbeddedApplicationInstanceEmbed(t),
            j = this.renderInteractionPremiumUpsell(t),
            I = this.renderMediaPostEmbeds(t),
            S = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            P = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            A = this.renderForwardedMessage(t),
            w = this.renderReportedMessage(t);
        return null == c &&
            null == p &&
            null == g &&
            null == _ &&
            null == h &&
            null == u &&
            null == d &&
            null == b &&
            null == E &&
            null == C &&
            null == v &&
            null == O &&
            null == x &&
            null == y &&
            null == I &&
            null == S &&
            null != j &&
            null == N &&
            null == A &&
            null == w
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, ek.bX)(t),
                  className: a()(e, eQ.container),
                  children: [
                      w,
                      A,
                      y,
                      N,
                      c,
                      u,
                      d,
                      I,
                      p,
                      m,
                      g,
                      P,
                      _,
                      C,
                      O,
                      x,
                      j,
                      f,
                      s,
                      h,
                      b,
                      E,
                      l && this.renderSuppressConfirmModal(),
                      o && this.renderRemoveAttachmentConfirmModal(),
                      v,
                      S,
                      T,
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
                var l, o, a;
                let {
                        gifAutoPlay: s,
                        inlineEmbedMedia: c,
                        canSuppressEmbeds: u,
                        hasSpoilerEmbeds: d,
                        enabledContentHarmTypeFlags: p,
                        isSearchResult: m,
                        shouldAgeVerify: f,
                    } = this.props,
                    g = (0, ej.BP)(e, r, d, p);
                if (e.type === eX.hBH.GIFT) return null;
                let _ = e2.includes(e.type)
                    ? e.url
                    : null != (a = null == (l = e.image) ? void 0 : l.url)
                      ? a
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    w.h.Provider,
                    {
                        value: (0, eY.P)(_, e.image, e.video),
                        children: (0, i.jsx)(
                            y.ZP,
                            e1(
                                {
                                    embed: e,
                                    obscureReason: null != g ? g : void 0,
                                    autoPlayGif: s,
                                    hideMedia: !c,
                                    allowFullScreen: !this.props.disableComponentInteractivity,
                                    onSuppressEmbed: u ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    showImageRecs: !1,
                                    isSearchResult: m,
                                    embedIndex: t,
                                    shouldAgeVerify: null != f && f,
                                },
                                n,
                            ),
                        ),
                    },
                    e.id,
                );
            }),
            e0(this, "renderEmbedTitle", (e, t) =>
                e.type === eX.hBH.RICH ? V.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t,
            ),
            e0(this, "renderEmbedDescription", (e, t, n) =>
                e.type === eX.hBH.RICH
                    ? V.Z.parse(t, !0, {
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
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
function e9(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: l, isMessageSnapshot: o } = e,
        a = (0, c.e7)([ep.default], () => ep.default.getId()),
        s = eu.x4.useSetting(),
        u = eu.RS.useSetting(),
        d = eu.NA.useSetting() && !(0, eN.Z)(e.message),
        p = eu.nc.useSetting() && !1 !== e.renderReactions,
        m = eu.QK.useSetting(),
        f = (0, c.e7)([ef.Z], () => null == n.guild_id || ef.Z.canChatInGuild(n.guild_id), [n]),
        g = (0, c.e7)([G.Z], () => null != n.guild_id && G.Z.isLurking(n.guild_id), [n]),
        _ = (0, c.e7)([em.ZP], () => em.ZP.isCurrentUserGuest(n.guild_id), [n]),
        h = (0, c.e7)([em.ZP, e_.default], () => {
            var e, t;
            let r = e_.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != n.guild_id && null != r
                            ? null == (e = em.ZP.getMember(n.guild_id, r.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canAddNewReactions: b, canManageMessages: E } = (0, c.cj)(
            [eg.Z],
            () => ({
                canAddNewReactions: f && eg.Z.can(eX.Plq.ADD_REACTIONS, n),
                canManageMessages: eg.Z.can(eX.Plq.MANAGE_MESSAGES, n),
            }),
            [f, n],
        ),
        C = (0, R.ux)(n.guild_id),
        [, v] = (0, D.AB)(n.guild_id),
        O = (0, es.$R)(n),
        y =
            (a === r.author.id || E) &&
            r.author.id !== eX.LAt &&
            !1 !== l &&
            !(0, ev.yE)(r.flags, eX.iLy.EPHEMERAL) &&
            O &&
            1 === (0, eP.Z)(r),
        x = a === r.author.id && O && !o,
        j = r.author.id === a,
        S = r.isFirstMessageInForumPost(n),
        P = (0, eA.Z)({
            channel: n,
            canChat: f,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: g,
            isGuest: _,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: O,
            isAutomodQuarantined: C,
        }),
        N = (0, H.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        A = (0, Y.Z)(null == n ? void 0 : n.id),
        w = (0, q.Z)(r),
        Z = (0, T.v)(r),
        L = (0, eT._)(n),
        M = (0, ex.ro)(r.id, r.channel_id),
        k = (0, I.m8)();
    return (0, i.jsx)(
        e7,
        e3(
            e1(
                e3(
                    e1(
                        {
                            canSuppressEmbeds: y,
                            canDeleteAttachments: x,
                        },
                        P,
                    ),
                    { disableReactionReads: !!S || P.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && L,
                isLurking: g && f,
                isGuest: _ && f,
                isPendingMember: h && f,
                isCurrentUser: j,
                inlineAttachmentMedia: s,
                inlineEmbedMedia: u,
                renderEmbeds: d,
                gifAutoPlay: m,
                canRenderReferralEmbed: n.isDM(),
                poll: w,
                showListsAndHeaders: N,
                showMaskedLinks: N,
                shouldHideMediaOptions: A,
                enabledContentHarmTypeFlags: Z,
                ctaButtonType: M,
                shouldAgeVerify: k,
            },
        ),
    );
}
e0(e7, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let te = (e) => {
    var t,
        {
            message: n,
            channel: r,
            disableReactionReads: l = !1,
            renderThreadAccessory: o = !1,
            disableReactionCreates: a = !0,
            disableReactionUpdates: s = !0,
            disableComponentInteractivity: c = !0,
            isSearchResult: u = !1,
        } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
            "isSearchResult",
        ]);
    let p = eu.x4.useSetting(),
        m = eu.RS.useSetting(),
        f = eu.NA.useSetting(),
        g = eu.QK.useSetting(),
        _ = (0, H.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        h = (0, Y.Z)(null == r ? void 0 : r.id),
        b = (0, T.v)(n),
        E = (0, ex.ro)(n.id, n.channel_id),
        C = (0, q.Z)(n);
    return (0, i.jsx)(
        e7,
        e3(e1({}, d), {
            message: n,
            channel: r,
            disableReactionReads: l,
            disableReactionCreates: a,
            disableReactionUpdates: s,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: o,
            inlineAttachmentMedia: p,
            inlineEmbedMedia: m,
            renderEmbeds: f,
            gifAutoPlay: g,
            poll: C,
            showListsAndHeaders: _,
            showMaskedLinks: _,
            shouldHideMediaOptions: h,
            enabledContentHarmTypeFlags: b,
            ctaButtonType: E,
            isSearchResult: u,
        }),
    );
};
