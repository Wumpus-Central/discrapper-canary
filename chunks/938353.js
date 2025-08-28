n.d(t, {
    $p: () => ta,
    BB: () => tr,
    ZP: () => ti,
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
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
    T = n(36129),
    S = n(960904),
    A = n(161314),
    C = n(247206),
    N = n(629710),
    R = n(262777),
    P = n(761538),
    w = n(674611),
    D = n(294734),
    x = n(947849),
    L = n(10433),
    j = n(715903),
    M = n(71619),
    k = n(637618),
    U = n(225890),
    G = n(364097),
    B = n(939170),
    Z = n(187506),
    F = n(954654),
    V = n(41776),
    H = n(628238),
    Y = n(454585),
    W = n(768494),
    K = n(124347),
    z = n(976853),
    q = n(346013),
    X = n(207982),
    Q = n(977683),
    J = n(128435),
    $ = n(98278),
    ee = n(623879),
    et = n(686380),
    en = n(265299),
    er = n(982168),
    ei = n(163038),
    ea = n(699833),
    eo = n(344997),
    es = n(378233),
    el = n(374425),
    ec = n(665906),
    eu = n(432147),
    ed = n(695346),
    ef = n(23750),
    e_ = n(314897),
    ep = n(271383),
    eh = n(607744),
    em = n(496675),
    eg = n(594174),
    eE = n(52824),
    eb = n(626135),
    ey = n(70956),
    eO = n(408433),
    ev = n(630388),
    eI = n(709054),
    eT = n(591759),
    eS = n(594173),
    eA = n(169525),
    eC = n(786761),
    eN = n(161010),
    eR = n(255269),
    eP = n(461157),
    ew = n(901461),
    eD = n(432376),
    ex = n(384203),
    eL = n(633957),
    ej = n(530472),
    eM = n(29909),
    ek = n(782658),
    eU = n(219797),
    eG = n(453687),
    eB = n(128854),
    eZ = n(101578),
    eF = n(524444),
    eV = n(319323),
    eH = n(884182),
    eY = n(546432),
    eW = n(920888),
    eK = n(328966),
    ez = n(963206),
    eq = n(817384),
    eX = n(981631),
    eQ = n(474936),
    eJ = n(388032),
    e$ = n(636428),
    e0 = n(680674);
function e1(e, t, n) {
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
function e2(e) {
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
                e1(e, t, n[t]);
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
function e4(e, t) {
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
function e8(e, t) {
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
function e6() {
    return (0, i.jsxs)("div", {
        className: e$.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)("img", {
                src: e0,
                className: e$.nitroBadgeSvg,
                alt: "",
            }),
            (0, i.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eJ.intl.format(eJ.t["G/H+s7"], { onClick: () => (0, $.z)() }),
            }),
        ],
    });
}
let e7 = [eX.hBH.GIFV],
    e9 = 15 * ey.Z.Millis.MINUTE,
    te = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    tt = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: o } = e,
            s = (0, ev.yE)(o, W.hR.IS_ANIMATED);
        return null != r && null != a && (K.uo.test(n) || (s && (K.YG.test(n) || K.FH.test(n))))
            ? (0, i.jsx)(eM.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: e$.gifFavoriteButton,
              })
            : null;
    };
function tn(e, t) {
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
class tr extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && te.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: o, poll: s } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ["message", "channel"]) ||
            n.type !== a.type ||
            s !== i ||
            o.codedLinks !== r.codedLinks ||
            o.flags !== r.flags ||
            o.giftCodes !== r.giftCodes ||
            o.attachments !== r.attachments ||
            o.embeds !== r.embeds ||
            o.components !== r.components ||
            o.activity !== r.activity ||
            !tn(o.reactions, r.reactions)
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eS.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(w.Z, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case eS.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(g.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", {
            className: e$.ctaButtonContainer,
            children: r,
        });
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eQ.Lw);
        return (0, eN.M)("attachment") && t ? (0, i.jsx)(e6, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === S.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                ek.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext,
                                },
                                r,
                            )
                          : null;
                  if (n === S.g.TEMPLATE) return (0, i.jsx)(G.Z, { code: r }, r);
                  if (n === S.g.EVENT) return (0, i.jsx)(U.Z, { code: r }, r);
                  if (n === S.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          ex.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === S.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          L.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === S.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: o } = (0, y.U)(a);
                      return (0, i.jsx)(
                          m.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: o,
                          },
                          r,
                      );
                  } else if (n === S.g.GUILD_PRODUCT) return (0, i.jsx)(k.Z, { code: r }, r);
                  else if (n === S.g.SERVER_SHOP) return (0, i.jsx)(A.Z, { guildId: r }, r);
                  else if (n === S.g.QUESTS_EMBED) return (0, i.jsx)(en.Z, { questId: r }, r);
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          b.P,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT_SKU) {
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
                  } else if (n === S.g.APP_OAUTH2_LINK) return (0, i.jsx)(O.Z, { applicationId: r }, r);
                  else if (n === S.g.COLLECTIBLES_SHOP) return null;
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
                          className: e$.giftCodeContainer,
                          children: (0, i.jsx)(p.Z, {
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
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: r } = this.props,
            a = ee.ZP.getCurrentConfig({ location: "isSystemMessage" }).cohort !== ee.FZ.Control;
        return n !== l.u.PREMIUM_REFERRAL || null == t || a
            ? null
            : (0, i.jsx)(
                  "div",
                  {
                      className: e$.referralContainer,
                      children: (0, i.jsx)(et.Z, {
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
            isLurking: a,
            isGuest: o,
            isPendingMember: s,
            channel: l,
            forceAddReactions: c,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eW.Z, {
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
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ef.hv)(e)) return null;
        let d = c.filter((e) => null == e.flags || !(0, ev.yE)(e.flags, eX.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let f = d
                .map((t) => {
                    var n;
                    return e4(e2({}, (0, W.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ev.yE)(null != (n = t.flags) ? n : 0, eX.J0y.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: _, srcToHandlePreloadImage: p } = (0, X.G)(
                f,
                {
                    enabledContentHarmTypeFlags: s,
                    shouldHideMediaOptions: l,
                },
                "Media Mosaic",
            ),
            h = f.length > 1,
            m = (0, ev.yE)(u, eX.iLy.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, eA.dn)(e.originalItem, t);
        }
        let E = d.map((i) => {
            let s = (e, n, r) => {
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
                l = (0, W.VY)(i),
                c = {
                    message: e,
                    item: (0, eY.OB)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (d.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: g,
                    onContextMenu:
                        null != o
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), o(e, l);
                              }
                            : void 0,
                    renderAudioComponent: m ? eU.jY : eU.q7,
                    renderImageComponent: eU.dS,
                    renderVideoComponent: eU.vZ,
                    renderPlaintextFilePreview: eU.d4,
                    renderGenericFileComponent: eU.ZK,
                    renderMosaicItemFooter: eU.L9,
                    onPlay: s,
                    gifFavoriteButton: tt(l),
                    isSearchResult: this.props.isSearchResult,
                },
                u = (0, eE.q)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return u in _ && h && ((c.onClick = _[u]), (c.handlePreloadImage = p[u])), c;
        });
        return (0, i.jsx)(eH.Z, { items: E });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eq.b.has(t.type) || (0, eO.l3)(t) || ((0, B.b)(t) && !(0, Z.M)(e)) || (0, eO.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eF.Yi,
                      renderVideoComponent: eF.lV,
                      renderLinkComponent: eF.iT,
                  };
                  if (
                      t.type === eX.hBH.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = eT.Z.safeParseWithQuery(t.url);
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
              })
            : null;
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
        return (0, i.jsx)(eB.F, {
            gifAutoPlay: t,
            getGifFavButton: tt,
            getOnMediaItemContextMenu:
                null == o
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == o || o(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(F.ZP, {
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
        return this.props.channel.type !== eX.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(v.Z, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eC.Pv)(e)
            ? (0, i.jsx)(ej.Z, {
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
        if (e.hasFlag(eX.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eu.Z, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eX.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eI.default.extractTimestamp(e.id) >= e9)
        )
            return (0, i.jsx)("div", {
                className: e$.threadRoleMentionFailure,
                children: eJ.intl.string(eJ.t.ma8Rs7),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(f.sYh, {
            dismissable: !0,
            header: eJ.intl.string(eJ.t.VL1KOj),
            confirmText: eJ.intl.string(eJ.t.YEHppK),
            cancelText: eJ.intl.string(eJ.t["ETE/oK"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(f.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: e$.confirmText,
                    children: eJ.intl.string(eJ.t["vXZ+Fh"]),
                }),
                (0, i.jsx)(f.Text, {
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
            : (0, i.jsx)(f.sYh, {
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
                      _.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null,
                          });
                  },
                  children: (0, i.jsx)(f.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: e$.confirmText,
                      children: eJ.intl.string(eJ.t.faHmOz),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== l.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eV.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eL.Z, {
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
                      q.Z,
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
            ? (0, i.jsx)(ea.i, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eX.hBH.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(eo.g, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, N.kC)(e)
            ? (0, i.jsx)(P.Z, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(J.Z, {
                message: e,
                poll: t,
                className: e$.pollContainer,
            });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(T.q, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, er.Gi)(e, this.props.channel)) return (0, i.jsx)(ei.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, er.Gi)(e, this.props.channel)) return (0, i.jsx)(D.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eK.Z, {
            message: e,
            compact: t,
            location: eK.H.AFTER_ACCESSORIES,
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: o } = this.state,
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
            C = this.renderSafetyPolicyNotice(t),
            N = this.renderSafetySystemNotification(t),
            R = this.renderMediaObscureNotice(t),
            P = this.renderPoll(t, n),
            w = this.renderForwardedMessage(t),
            D = this.renderReportedMessage(t),
            x = this.renderShareClientTheme(t);
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
            null == C &&
            null != S &&
            null == P &&
            null == w &&
            null == D &&
            null == x
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eG.bX)(t),
                  className: s()(e, e$.container),
                  children: [
                      D,
                      w,
                      I,
                      P,
                      x,
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
                      a && this.renderSuppressConfirmModal(),
                      o && this.renderRemoveAttachmentConfirmModal(),
                      O,
                      C,
                      N,
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            e1(this, "state", {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null,
            }),
            e1(this, "getAcceptInviteContext", (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id,
                };
            }),
            e1(this, "renderEmbed", (e, t, n, r) => {
                var a, o, s;
                let {
                        gifAutoPlay: l,
                        inlineEmbedMedia: c,
                        canSuppressEmbeds: u,
                        hasSpoilerEmbeds: d,
                        enabledContentHarmTypeFlags: f,
                        isSearchResult: _,
                        shouldAgeVerify: p,
                    } = this.props,
                    h = (0, eA.BP)(e, r, d, f);
                if (e.type === eX.hBH.GIFT) return null;
                let m = e7.includes(e.type)
                    ? e.url
                    : null != (s = null == (a = e.image) ? void 0 : a.url)
                      ? s
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    x.h.Provider,
                    {
                        value: (0, ez.P)(m, e.image, e.video),
                        children: (0, i.jsx)(
                            I.ZP,
                            e2(
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
            e1(this, "renderEmbedTitle", (e, t) =>
                e.type === eX.hBH.RICH ? Y.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t,
            ),
            e1(this, "renderEmbedDescription", (e, t, n) =>
                e.type === eX.hBH.RICH
                    ? Y.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks,
                      })
                    : t,
            ),
            e1(this, "handleEmbedSuppressed", (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            e1(this, "handleRemoveAttachment", (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t,
                });
            });
    }
}
function ti(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: o } = e,
        s = (0, c.e7)([e_.default], () => e_.default.getId()),
        l = ed.x4.useSetting(),
        u = ed.RS.useSetting(),
        d = ed.NA.useSetting() && !(0, ew.Z)(e.message),
        f = ed.nc.useSetting() && !1 !== e.renderReactions,
        _ = ed.QK.useSetting(),
        p = (0, c.e7)([eh.Z], () => null == n.guild_id || eh.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([V.Z], () => null != n.guild_id && V.Z.isLurking(n.guild_id), [n]),
        m = (0, c.e7)([ep.ZP], () => ep.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([ep.ZP, eg.default], () => {
            var e, t;
            let r = eg.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != n.guild_id && null != r
                            ? null == (e = ep.ZP.getMember(n.guild_id, r.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canAddNewReactions: E, canManageMessages: b } = (0, c.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: p && em.Z.can(eX.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eX.Plq.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        y = (0, j.ux)(n.guild_id),
        [, O] = (0, M.AB)(n.guild_id),
        v = (0, ec.$R)(n),
        I =
            (s === r.author.id || b) &&
            r.author.id !== eX.LAt &&
            !1 !== a &&
            !(0, ev.yE)(r.flags, eX.iLy.EPHEMERAL) &&
            v &&
            1 === (0, eP.Z)(r),
        T = s === r.author.id && v && !o,
        S = r.author.id === s,
        A = r.isFirstMessageInForumPost(n),
        N = (0, eD.Z)({
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
        P = (0, H.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        w = (0, z.Z)(null == n ? void 0 : n.id),
        D = (0, Q.Z)(r),
        x = (0, R.v)(r),
        L = (0, eR._)(n),
        k = (0, eS.ro)(r.id, r.channel_id),
        U = (0, C.m8)();
    return (0, i.jsx)(
        tr,
        e4(
            e2(
                e4(
                    e2(
                        {
                            canSuppressEmbeds: I,
                            canDeleteAttachments: T,
                        },
                        N,
                    ),
                    { disableReactionReads: !!A || N.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && L,
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
                enabledContentHarmTypeFlags: x,
                ctaButtonType: k,
                shouldAgeVerify: U,
            },
        ),
    );
}
e1(tr, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let ta = (e) => {
    var t,
        {
            message: n,
            channel: r,
            disableReactionReads: a = !1,
            renderThreadAccessory: o = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: l = !0,
            disableComponentInteractivity: c = !0,
            isSearchResult: u = !1,
        } = e,
        d = e8(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
            "isSearchResult",
        ]);
    let f = ed.x4.useSetting(),
        _ = ed.RS.useSetting(),
        p = ed.NA.useSetting(),
        h = ed.QK.useSetting(),
        m = (0, H.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        g = (0, z.Z)(null == r ? void 0 : r.id),
        E = (0, R.v)(n),
        b = (0, eS.ro)(n.id, n.channel_id),
        y = (0, Q.Z)(n);
    return (0, i.jsx)(
        tr,
        e4(e2({}, d), {
            message: n,
            channel: r,
            disableReactionReads: a,
            disableReactionCreates: s,
            disableReactionUpdates: l,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: o,
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
