n.d(t, {
    $p: () => tr,
    BB: () => tt,
    ZP: () => tn,
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    f = n(481060),
    _ = n(904245),
    p = n(637374),
    h = n(626799),
    m = n(624367),
    g = n(183431),
    E = n(421474),
    b = n(603270),
    y = n(234431),
    O = n(162297),
    v = n(222709),
    I = n(446411),
    T = n(960904),
    S = n(161314),
    A = n(247206),
    N = n(629710),
    C = n(262777),
    R = n(761538),
    P = n(674611),
    w = n(294734),
    D = n(947849),
    L = n(10433),
    x = n(715903),
    M = n(71619),
    k = n(637618),
    j = n(225890),
    U = n(364097),
    G = n(939170),
    B = n(187506),
    Z = n(954654),
    F = n(41776),
    V = n(628238),
    H = n(454585),
    Y = n(768494),
    W = n(124347),
    K = n(976853),
    z = n(346013),
    q = n(207982),
    X = n(977683),
    Q = n(128435),
    J = n(98278),
    $ = n(686380),
    ee = n(265299),
    et = n(982168),
    en = n(163038),
    er = n(699833),
    ei = n(344997),
    eo = n(378233),
    ea = n(374425),
    es = n(665906),
    el = n(432147),
    ec = n(695346),
    eu = n(23750),
    ed = n(314897),
    ef = n(271383),
    e_ = n(607744),
    ep = n(496675),
    eh = n(594174),
    em = n(52824),
    eg = n(626135),
    eE = n(70956),
    eb = n(408433),
    ey = n(630388),
    eO = n(709054),
    ev = n(591759),
    eI = n(594173),
    eT = n(169525),
    eS = n(786761),
    eA = n(161010),
    eN = n(255269),
    eC = n(461157),
    eR = n(901461),
    eP = n(432376),
    ew = n(384203),
    eD = n(633957),
    eL = n(530472),
    ex = n(29909),
    eM = n(782658),
    ek = n(219797),
    ej = n(453687),
    eU = n(128854),
    eG = n(101578),
    eB = n(524444),
    eZ = n(319323),
    eF = n(884182),
    eV = n(546432),
    eH = n(920888),
    eY = n(328966),
    eW = n(963206),
    eK = n(817384),
    ez = n(981631),
    eq = n(474936),
    eX = n(388032),
    eQ = n(636428),
    eJ = n(680674);
function e$(e, t, n) {
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
function e0(e) {
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
                e$(e, t, n[t]);
            });
    }
    return e;
}
function e1(e, t) {
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
            : e1(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e3(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e5(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e5(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function e4() {
    return (0, i.jsxs)("div", {
        className: eQ.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)("img", {
                src: eJ,
                className: eQ.nitroBadgeSvg,
                alt: "",
            }),
            (0, i.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eX.intl.format(eX.t["G/H+s7"], { onClick: () => (0, J.z)() }),
            }),
        ],
    });
}
let e6 = [ez.hBH.GIFV],
    e8 = 15 * eE.Z.Millis.MINUTE,
    e7 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e9 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: o, flags: a } = e,
            s = (0, ey.yE)(a, Y.hR.IS_ANIMATED);
        return null != r && null != o && (W.uo.test(n) || (s && (W.YG.test(n) || W.FH.test(n))))
            ? (0, i.jsx)(ex.Z, {
                  width: r,
                  height: o,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eQ.gifFavoriteButton,
              })
            : null;
    };
function te(e, t) {
    return (
        e === t ||
        (e.length === t.length &&
            !e.some((e, n) => {
                let { emoji: r, count: i, burst_count: o } = e,
                    { emoji: a, count: s, burst_count: l } = t[n];
                return o !== l || i !== s || r.id !== a.id || r.name !== a.name;
            }))
    );
}
class tt extends (r = o.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e7.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: o, message: a, poll: s } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ["message", "channel"]) ||
            n.type !== o.type ||
            s !== i ||
            a.codedLinks !== r.codedLinks ||
            a.flags !== r.flags ||
            a.giftCodes !== r.giftCodes ||
            a.attachments !== r.attachments ||
            a.embeds !== r.embeds ||
            a.components !== r.components ||
            a.activity !== r.activity ||
            !te(a.reactions, r.reactions)
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eI.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(P.Z, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case eI.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(g.Z, { channelId: t.id });
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
        return (0, eA.M)("attachment") && t ? (0, i.jsx)(e4, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: o } = t;
                  if (n === T.g.INVITE)
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
                  if (n === T.g.TEMPLATE) return (0, i.jsx)(U.Z, { code: r }, r);
                  if (n === T.g.EVENT) return (0, i.jsx)(j.Z, { code: r }, r);
                  if (n === T.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          ew.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === T.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          L.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === T.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: a } = (0, y.U)(o);
                      return (0, i.jsx)(
                          m.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: a,
                          },
                          r,
                      );
                  } else if (n === T.g.GUILD_PRODUCT) return (0, i.jsx)(k.Z, { code: r }, r);
                  else if (n === T.g.SERVER_SHOP) return (0, i.jsx)(S.Z, { guildId: r }, r);
                  else if (n === T.g.QUESTS_EMBED) return (0, i.jsx)(ee.Z, { questId: r }, r);
                  else if (n === T.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          b.P,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === T.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, E.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                b.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e,
                                },
                                r,
                            );
                  } else if (n === T.g.APP_OAUTH2_LINK) return (0, i.jsx)(O.Z, { applicationId: r }, r);
                  else if (n === T.g.COLLECTIBLES_SHOP) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: o, content: a, giftInfo: s } = e,
            l = eh.default.getCurrentUser();
        return null != l && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eQ.giftCodeContainer,
                          children: (0, i.jsx)(p.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: l,
                              type: o,
                              content: a,
                              giftInfo: s,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: r } = this.props;
        return n !== l.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, i.jsx)(
                  "div",
                  {
                      className: eQ.referralContainer,
                      children: (0, i.jsx)($.Z, {
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
            isLurking: o,
            isGuest: a,
            isPendingMember: s,
            channel: l,
            forceAddReactions: c,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eH.Z, {
                  message: e,
                  channel: l,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: o,
                  isGuest: a,
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
                inlineAttachmentMedia: o,
                onMediaItemContextMenu: a,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: l,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, eu.hv)(e)) return null;
        let d = c.filter((e) => null == e.flags || !(0, ey.yE)(e.flags, ez.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let f = d
                .map((t) => {
                    var n;
                    return e2(e0({}, (0, Y.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ey.yE)(null != (n = t.flags) ? n : 0, ez.J0y.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: _, srcToHandlePreloadImage: p } = (0, q.G)(
                f,
                {
                    enabledContentHarmTypeFlags: s,
                    shouldHideMediaOptions: l,
                },
                "Media Mosaic",
            ),
            h = f.length > 1,
            m = (0, ey.yE)(u, ez.iLy.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, eT.dn)(e.originalItem, t);
        }
        let E = d.map((i) => {
            let s = (e, n, r) => {
                    eg.default.track(ez.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                        type: i.content_type,
                        flags: i.flags,
                        size: i.size,
                        duration: r,
                    });
                },
                l = (0, Y.VY)(i),
                c = {
                    message: e,
                    item: (0, eV.OB)(i, o),
                    autoPlayGif: n,
                    canRemoveItem: r && (d.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: g,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, l);
                              }
                            : void 0,
                    renderAudioComponent: m ? ek.jY : ek.q7,
                    renderImageComponent: ek.dS,
                    renderVideoComponent: ek.vZ,
                    renderPlaintextFilePreview: ek.d4,
                    renderGenericFileComponent: ek.ZK,
                    renderMosaicItemFooter: ek.L9,
                    onPlay: s,
                    gifFavoriteButton: e9(l),
                    isSearchResult: this.props.isSearchResult,
                },
                u = (0, em.q)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return u in _ && h && ((c.onClick = _[u]), (c.handlePreloadImage = p[u])), c;
        });
        return (0, i.jsx)(eF.Z, { items: E });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eK.b.has(t.type) || (0, eb.l3)(t) || ((0, G.b)(t) && !(0, B.M)(e)) || (0, eb.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eB.Yi,
                      renderVideoComponent: eB.lV,
                      renderLinkComponent: eB.iT,
                  };
                  if (
                      t.type === ez.hBH.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let o = ev.Z.safeParseWithQuery(t.url);
                      if (null != o && null != o.pathname) {
                          let a = o.pathname.split("/")[3];
                          if (null != a)
                              return (0, i.jsx)(
                                  h.Z,
                                  {
                                      skuId: a,
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
            disableComponentInteractivity: o,
            onMediaItemContextMenu: a,
        } = this.props;
        return (0, i.jsx)(eU.F, {
            gifAutoPlay: t,
            getGifFavButton: e9,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == a || a(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(Z.ZP, {
                message: e,
                shouldDisableInteractiveComponents: o,
            }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eG.Z, {
            channel: t,
            message: e,
            hideParty: !1,
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ez.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(v.Z, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eS.Pv)(e)
            ? (0, i.jsx)(eL.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      _.Z.dismissAutomatedMessage(e);
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
        if (e.hasFlag(ez.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(el.Z, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(ez.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eO.default.extractTimestamp(e.id) >= e8)
        )
            return (0, i.jsx)("div", {
                className: eQ.threadRoleMentionFailure,
                children: eX.intl.string(eX.t.ma8Rs7),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(f.sYh, {
            dismissable: !0,
            header: eX.intl.string(eX.t.VL1KOj),
            confirmText: eX.intl.string(eX.t.YEHppK),
            cancelText: eX.intl.string(eX.t["ETE/oK"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(f.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eQ.confirmText,
                    children: eX.intl.string(eX.t["vXZ+Fh"]),
                }),
                (0, i.jsx)(f.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eX.intl.string(eX.t["5j2by8"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(f.sYh, {
                  dismissable: !0,
                  header: eX.intl.string(eX.t.CbTIEh),
                  confirmText: eX.intl.string(eX.t.kFwAsb),
                  cancelText: eX.intl.string(eX.t["ETE/oK"]),
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
                  children: (0, i.jsx)(f.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eQ.confirmText,
                      children: eX.intl.string(eX.t.faHmOz),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== l.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eZ.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eD.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== ez.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      z.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(er.i, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.g, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, N.kC)(e)
            ? (0, i.jsx)(R.Z, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(Q.Z, {
                message: e,
                poll: t,
                className: eQ.pollContainer,
            });
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(en.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(w.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eY.Z, {
            message: e,
            compact: t,
            location: eY.H.AFTER_ACCESSORIES,
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: o, showRemoveAttachmentModal: a } = this.state,
            l = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            f = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            p = this.renderSocialProofingFileSizeNitroUpsell(t),
            h = this.renderEmbeds(t),
            m = this.renderActivityInvite(t),
            g = this.renderReactions(t),
            E = this.renderPublishBump(t),
            b = this.renderEphemeralAccessories(t),
            y = this.renderStickersAccessories(t),
            O = this.renderThreadAccessories(t),
            v = this.renderComponentAccessories(t),
            I = this.renderThreadRoleMentionWarning(t),
            T = this.renderEmbeddedApplicationInstanceEmbed(t),
            S = this.renderInteractionPremiumUpsell(t),
            A = this.renderMediaPostEmbeds(t),
            N = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            R = this.renderMediaObscureNotice(t),
            P = this.renderPoll(t, n),
            w = this.renderForwardedMessage(t),
            D = this.renderReportedMessage(t);
        return null == c &&
            null == f &&
            null == h &&
            null == m &&
            null == g &&
            null == u &&
            null == d &&
            null == E &&
            null == b &&
            null == y &&
            null == O &&
            null == v &&
            null == T &&
            null == I &&
            null == A &&
            null == N &&
            null != S &&
            null == P &&
            null == w &&
            null == D
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, ej.bX)(t),
                  className: s()(e, eQ.container),
                  children: [
                      D,
                      w,
                      I,
                      P,
                      c,
                      u,
                      d,
                      A,
                      f,
                      _,
                      h,
                      R,
                      m,
                      y,
                      v,
                      T,
                      S,
                      p,
                      l,
                      g,
                      E,
                      b,
                      o && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      O,
                      N,
                      C,
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            e$(this, "state", {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null,
            }),
            e$(this, "getAcceptInviteContext", (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id,
                };
            }),
            e$(this, "renderEmbed", (e, t, n, r) => {
                var o, a, s;
                let {
                        gifAutoPlay: l,
                        inlineEmbedMedia: c,
                        canSuppressEmbeds: u,
                        hasSpoilerEmbeds: d,
                        enabledContentHarmTypeFlags: f,
                        isSearchResult: _,
                        shouldAgeVerify: p,
                    } = this.props,
                    h = (0, eT.BP)(e, r, d, f);
                if (e.type === ez.hBH.GIFT) return null;
                let m = e6.includes(e.type)
                    ? e.url
                    : null != (s = null == (o = e.image) ? void 0 : o.url)
                      ? s
                      : null == (a = e.video)
                        ? void 0
                        : a.url;
                return (0, i.jsx)(
                    D.h.Provider,
                    {
                        value: (0, eW.P)(m, e.image, e.video),
                        children: (0, i.jsx)(
                            I.ZP,
                            e0(
                                {
                                    embed: e,
                                    obscureReason: null != h ? h : void 0,
                                    autoPlayGif: l,
                                    hideMedia: !c,
                                    allowFullScreen: !this.props.disableComponentInteractivity,
                                    onSuppressEmbed: u ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    showImageRecs: !1,
                                    isSearchResult: _,
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
            e$(this, "renderEmbedTitle", (e, t) =>
                e.type === ez.hBH.RICH ? H.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t,
            ),
            e$(this, "renderEmbedDescription", (e, t, n) =>
                e.type === ez.hBH.RICH
                    ? H.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks,
                      })
                    : t,
            ),
            e$(this, "handleEmbedSuppressed", (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            e$(this, "handleRemoveAttachment", (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t,
                });
            });
    }
}
function tn(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: o, isMessageSnapshot: a } = e,
        s = (0, c.e7)([ed.default], () => ed.default.getId()),
        l = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, eR.Z)(e.message),
        f = ec.nc.useSetting() && !1 !== e.renderReactions,
        _ = ec.QK.useSetting(),
        p = (0, c.e7)([e_.Z], () => null == n.guild_id || e_.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([F.Z], () => null != n.guild_id && F.Z.isLurking(n.guild_id), [n]),
        m = (0, c.e7)([ef.ZP], () => ef.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([ef.ZP, eh.default], () => {
            var e, t;
            let r = eh.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != n.guild_id && null != r
                            ? null == (e = ef.ZP.getMember(n.guild_id, r.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canAddNewReactions: E, canManageMessages: b } = (0, c.cj)(
            [ep.Z],
            () => ({
                canAddNewReactions: p && ep.Z.can(ez.Plq.ADD_REACTIONS, n),
                canManageMessages: ep.Z.can(ez.Plq.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        y = (0, x.ux)(n.guild_id),
        [, O] = (0, M.AB)(n.guild_id),
        v = (0, es.$R)(n),
        I =
            (s === r.author.id || b) &&
            r.author.id !== ez.LAt &&
            !1 !== o &&
            !(0, ey.yE)(r.flags, ez.iLy.EPHEMERAL) &&
            v &&
            1 === (0, eC.Z)(r),
        T = s === r.author.id && v && !a,
        S = r.author.id === s,
        N = r.isFirstMessageInForumPost(n),
        R = (0, eP.Z)({
            channel: n,
            canChat: p,
            renderReactions: f,
            canAddNewReactions: E,
            isLurking: h,
            isGuest: m,
            communicationDisabled: O,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: y,
        }),
        P = (0, V.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        w = (0, K.Z)(null == n ? void 0 : n.id),
        D = (0, X.Z)(r),
        L = (0, C.v)(r),
        k = (0, eN._)(n),
        j = (0, eI.ro)(r.id, r.channel_id),
        U = (0, A.m8)();
    return (0, i.jsx)(
        tt,
        e2(
            e0(
                e2(
                    e0(
                        {
                            canSuppressEmbeds: I,
                            canDeleteAttachments: T,
                        },
                        R,
                    ),
                    { disableReactionReads: !!N || R.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && k,
                isLurking: h && p,
                isGuest: m && p,
                isPendingMember: g && p,
                isCurrentUser: S,
                inlineAttachmentMedia: l,
                inlineEmbedMedia: u,
                renderEmbeds: d,
                gifAutoPlay: _,
                canRenderReferralEmbed: n.isDM(),
                poll: D,
                showListsAndHeaders: P,
                showMaskedLinks: P,
                shouldHideMediaOptions: w,
                enabledContentHarmTypeFlags: L,
                ctaButtonType: j,
                shouldAgeVerify: U,
            },
        ),
    );
}
e$(tt, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let tr = (e) => {
    var t,
        {
            message: n,
            channel: r,
            disableReactionReads: o = !1,
            renderThreadAccessory: a = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: l = !0,
            disableComponentInteractivity: c = !0,
            isSearchResult: u = !1,
        } = e,
        d = e3(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
            "isSearchResult",
        ]);
    let f = ec.x4.useSetting(),
        _ = ec.RS.useSetting(),
        p = ec.NA.useSetting(),
        h = ec.QK.useSetting(),
        m = (0, V.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        g = (0, K.Z)(null == r ? void 0 : r.id),
        E = (0, C.v)(n),
        b = (0, eI.ro)(n.id, n.channel_id),
        y = (0, X.Z)(n);
    return (0, i.jsx)(
        tt,
        e2(e0({}, d), {
            message: n,
            channel: r,
            disableReactionReads: o,
            disableReactionCreates: s,
            disableReactionUpdates: l,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: a,
            inlineAttachmentMedia: f,
            inlineEmbedMedia: _,
            renderEmbeds: p,
            gifAutoPlay: h,
            poll: y,
            showListsAndHeaders: m,
            showMaskedLinks: m,
            shouldHideMediaOptions: g,
            enabledContentHarmTypeFlags: E,
            ctaButtonType: b,
            isSearchResult: u,
        }),
    );
};
