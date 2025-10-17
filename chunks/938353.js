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
    L = n(947849),
    x = n(10433),
    M = n(715903),
    k = n(71619),
    j = n(637618),
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
    X = n(120324),
    Q = n(977683),
    J = n(128435),
    $ = n(98278),
    ee = n(265299),
    et = n(982168),
    en = n(163038),
    er = n(699833),
    ei = n(344997),
    ea = n(378233),
    eo = n(374425),
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
    eC = n(255269),
    eN = n(461157),
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
        i = e4(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e4(e, t) {
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
                children: eX.intl.format(eX.t["G/H+s7"], { onClick: () => (0, $.z)() }),
            }),
        ],
    });
}
let e5 = [ez.hBH.GIFV],
    e6 = 15 * eE.Z.Millis.MINUTE,
    e7 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e9 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: o } = e,
            s = (0, ey.yE)(o, W.hR.IS_ANIMATED);
        return null != r && null != a && (K.uo.test(n) || (s && (K.YG.test(n) || K.FH.test(n))))
            ? (0, i.jsx)(ex.Z, {
                  width: r,
                  height: a,
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
                let { emoji: r, count: i, burst_count: a } = e,
                    { emoji: o, count: s, burst_count: l } = t[n];
                return a !== l || i !== s || r.id !== o.id || r.name !== o.name;
            }))
    );
}
class tt extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e7.has(e));
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
            !te(o.reactions, r.reactions)
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
        return (0, eA.M)("attachment") && t ? (0, i.jsx)(e8, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === S.g.INVITE)
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
                  if (n === S.g.TEMPLATE) return (0, i.jsx)(G.Z, { code: r }, r);
                  if (n === S.g.EVENT) return (0, i.jsx)(U.Z, { code: r }, r);
                  if (n === S.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          ew.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === S.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          x.Z,
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
                  } else if (n === S.g.GUILD_PRODUCT) return (0, i.jsx)(j.Z, { code: r }, r);
                  else if (n === S.g.SERVER_SHOP) return (0, i.jsx)(A.Z, { guildId: r }, r);
                  else if (n === S.g.QUESTS_EMBED) return (0, i.jsx)(ee.Z, { questId: r }, r);
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
                  } else if (n === S.g.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          O.Z,
                          {
                              applicationId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === S.g.COLLECTIBLES_SHOP) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: o, giftInfo: s } = e,
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
            : (0, i.jsx)(eH.Z, {
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
        if (0 === c.length || e.isPoll() || (0, eu.hv)(e)) return null;
        let d = c.filter((e) => null == e.flags || !(0, ey.yE)(e.flags, ez.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let f = d
                .map((t) => {
                    var n;
                    return e2(e0({}, (0, W.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ey.yE)(null != (n = t.flags) ? n : 0, ez.J0y.IS_ANIMATED),
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
                l = (0, W.VY)(i),
                c = {
                    message: e,
                    item: (0, eV.OB)(i, a),
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
                  if (eK.b.has(t.type) || (0, eb.l3)(t) || ((0, B.b)(t) && !(0, Z.M)(e)) || (0, eb.jz)(t)) return null;
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
                      let a = ev.Z.safeParseWithQuery(t.url);
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
        return (0, i.jsx)(eU.F, {
            gifAutoPlay: t,
            getGifFavButton: e9,
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
        let t = (0, ea.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      eo.Z,
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
            !(Date.now() - eO.default.extractTimestamp(e.id) >= e6)
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
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== ez.hBH.POST_PREVIEW || null == t.url
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
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(T.q, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(en.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(D.Z, { message: e });
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
            { showSuppressModal: a, showRemoveAttachmentModal: o } = this.state,
            l = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderAttachments(t),
            f = this.renderCtaButton(),
            _ = this.renderSocialProofingFileSizeNitroUpsell(t),
            p = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            m = this.renderReactions(t),
            g = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            b = this.renderStickersAccessories(t),
            y = this.renderThreadAccessories(t),
            O = this.renderComponentAccessories(t),
            v = this.renderThreadRoleMentionWarning(t),
            I = this.renderEmbeddedApplicationInstanceEmbed(t),
            T = this.renderInteractionPremiumUpsell(t),
            S = this.renderMediaPostEmbeds(t),
            A = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            N = this.renderMediaObscureNotice(t),
            R = this.renderPoll(t, n),
            P = this.renderForwardedMessage(t),
            w = this.renderReportedMessage(t),
            D = this.renderShareClientTheme(t);
        return null == c &&
            null == d &&
            null == p &&
            null == h &&
            null == m &&
            null == u &&
            null == g &&
            null == E &&
            null == b &&
            null == y &&
            null == O &&
            null == I &&
            null == v &&
            null == S &&
            null == A &&
            null != T &&
            null == R &&
            null == P &&
            null == w &&
            null == D
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, ej.bX)(t),
                  className: s()(e, eQ.container),
                  children: [
                      w,
                      P,
                      v,
                      R,
                      D,
                      c,
                      u,
                      S,
                      d,
                      f,
                      p,
                      N,
                      h,
                      b,
                      O,
                      I,
                      T,
                      _,
                      l,
                      m,
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
                    h = (0, eT.BP)(e, r, d, f);
                if (e.type === ez.hBH.GIFT) return null;
                let m = e5.includes(e.type)
                    ? e.url
                    : null != (s = null == (a = e.image) ? void 0 : a.url)
                      ? s
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    L.h.Provider,
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
                e.type === ez.hBH.RICH ? Y.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t,
            ),
            e$(this, "renderEmbedDescription", (e, t, n) =>
                e.type === ez.hBH.RICH
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
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: o } = e,
        s = (0, c.e7)([ed.default], () => ed.default.getId()),
        l = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, eR.Z)(e.message),
        f = ec.nc.useSetting() && !1 !== e.renderReactions,
        _ = ec.QK.useSetting(),
        p = (0, c.e7)([e_.Z], () => null == n.guild_id || e_.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([V.Z], () => null != n.guild_id && V.Z.isLurking(n.guild_id), [n]),
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
        y = (0, M.ux)(n.guild_id),
        [, O] = (0, k.AB)(n.guild_id),
        v = (0, es.$R)(n),
        I =
            (s === r.author.id || b) &&
            r.author.id !== ez.LAt &&
            !1 !== a &&
            !(0, ey.yE)(r.flags, ez.iLy.EPHEMERAL) &&
            v &&
            1 === (0, eN.Z)(r),
        T = s === r.author.id && v && !o,
        S = r.author.id === s,
        A = r.isFirstMessageInForumPost(n),
        N = (0, eP.Z)({
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
        L = (0, R.v)(r),
        x = (0, eC._)(n),
        j = (0, eI.ro)(r.id, r.channel_id),
        U = (0, C.m8)();
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
                        N,
                    ),
                    { disableReactionReads: !!A || N.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && x,
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
            disableReactionReads: a = !1,
            renderThreadAccessory: o = !1,
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
        m = (0, H.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        g = (0, z.Z)(null == r ? void 0 : r.id),
        E = (0, R.v)(n),
        b = (0, eI.ro)(n.id, n.channel_id),
        y = (0, Q.Z)(n);
    return (0, i.jsx)(
        tt,
        e2(e0({}, d), {
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
