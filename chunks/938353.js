(n.d(t, {
    $p: () => tr,
    BB: () => tt,
    ZP: () => tn
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205));
var r,
    i = n(255367),
    a = n(73800),
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
    T = n(960904),
    S = n(161314),
    A = n(247206),
    N = n(629710),
    C = n(262777),
    w = n(761538),
    R = n(674611),
    P = n(294734),
    D = n(947849),
    L = n(10433),
    x = n(715903),
    k = n(71619),
    j = n(637618),
    M = n(225890),
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
    $ = n(977683),
    X = n(128435),
    Q = n(98278),
    J = n(614825),
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
    eN = n(255269),
    eC = n(461157),
    ew = n(901461),
    eR = n(432376),
    eP = n(384203),
    eD = n(633957),
    eL = n(530472),
    ex = n(29909),
    ek = n(782658),
    ej = n(219797),
    eM = n(453687),
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
    e$ = n(388032),
    eX = n(813102),
    eQ = n(680674);
function eJ(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function e0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eJ(e, t, n[t]);
            }));
    }
    return e;
}
function e1(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function e5(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function e4() {
    return (0, i.jsxs)('div', {
        className: eX.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)('img', {
                src: eQ,
                className: eX.nitroBadgeSvg,
                alt: ''
            }),
            (0, i.jsx)(f.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: e$.intl.format(e$.t['G/H+s7'], { onClick: () => (0, Q.z)() })
            })
        ]
    });
}
let e6 = [ez.hBH.GIFV],
    e8 = 15 * eE.Z.Millis.MINUTE,
    e7 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e9 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: o } = e,
            s = (0, ey.yE)(o, Y.hR.IS_ANIMATED);
        return null != r && null != a && (W.uo.test(n) || (s && (W.YG.test(n) || W.FH.test(n))))
            ? (0, i.jsx)(ex.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eX.gifFavoriteButton
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
        return !(0, d.Z)(this.state, t) || !(0, d.Z)(this.props, e, ['message', 'channel']) || n.type !== a.type || s !== i || o.codedLinks !== r.codedLinks || o.flags !== r.flags || o.giftCodes !== r.giftCodes || o.attachments !== r.attachments || o.embeds !== r.embeds || o.components !== r.components || o.activity !== r.activity || !te(o.reactions, r.reactions);
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eI.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(R.Z, {
                    messageId: e.id,
                    channelId: t.id
                });
                break;
            case eI.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(g.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)('div', {
            className: eX.ctaButtonContainer,
            children: r
        });
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eq.Lw);
        return (0, eA.M)('attachment') && t ? (0, i.jsx)(e4, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === T.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                ek.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === T.g.TEMPLATE) return (0, i.jsx)(U.Z, { code: r }, r);
                  if (n === T.g.EVENT) return (0, i.jsx)(M.Z, { code: r }, r);
                  if (n === T.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eP.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  if (n === T.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          L.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  else if (n === T.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: o } = (0, y.U)(a);
                      return (0, i.jsx)(
                          m.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: o
                          },
                          r
                      );
                  } else if (n === T.g.GUILD_PRODUCT) return (0, i.jsx)(j.Z, { code: r }, r);
                  else if (n === T.g.SERVER_SHOP) return (0, i.jsx)(S.Z, { guildId: r }, r);
                  else if (n === T.g.QUESTS_EMBED) return (0, i.jsx)(ee.Z, { questId: r }, r);
                  else if (n === T.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          b.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
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
                                    message: e
                                },
                                r
                            );
                  } else if (n === T.g.APP_OAUTH2_LINK) return (0, i.jsx)(O.Z, { applicationId: r }, r);
                  else if (n === T.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: o, giftInfo: s } = e,
            l = eh.default.getCurrentUser();
        return null != l && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      'div',
                      {
                          className: eX.giftCodeContainer,
                          children: (0, i.jsx)(p.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: l,
                              type: a,
                              content: o,
                              giftInfo: s
                          })
                      },
                      e
                  )
              )
            : null;
    }
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: r } = this.props;
        return n !== l.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, i.jsx)(
                  'div',
                  {
                      className: eX.referralContainer,
                      children: (0, i.jsx)(J.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != r && r
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: r, isLurking: a, isGuest: o, isPendingMember: s, channel: l, forceAddReactions: c } = this.props;
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
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, gifAutoPlay: n, canDeleteAttachments: r, inlineAttachmentMedia: a, onMediaItemContextMenu: o, enabledContentHarmTypeFlags: s, shouldHideMediaOptions: l } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, eu.hv)(e)) return null;
        let d = c.filter((e) => null == e.flags || !(0, ey.yE)(e.flags, ez.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let f = d
                .map((t) => {
                    var n;
                    return e2(e0({}, (0, Y.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ey.yE)(null != (n = t.flags) ? n : 0, ez.J0y.IS_ANIMATED)
                    });
                })
                .filter((e) => 'INVALID' !== e.type),
            { srcToOnClickOverride: _, srcToHandlePreloadImage: p } = (0, q.G)(
                f,
                {
                    enabledContentHarmTypeFlags: s,
                    shouldHideMediaOptions: l
                },
                'Media Mosaic'
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
                        duration: r
                    });
                },
                l = (0, Y.VY)(i),
                c = {
                    message: e,
                    item: (0, eV.OB)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (d.length > 1 || '' !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: g,
                    onContextMenu:
                        null != o
                            ? (e) => {
                                  (e.stopPropagation(), e.preventDefault(), o(e, l));
                              }
                            : void 0,
                    renderAudioComponent: m ? ej.jY : ej.q7,
                    renderImageComponent: ej.dS,
                    renderVideoComponent: ej.vZ,
                    renderPlaintextFilePreview: ej.d4,
                    renderGenericFileComponent: ej.ZK,
                    renderMosaicItemFooter: ej.L9,
                    onPlay: s,
                    gifFavoriteButton: e9(l),
                    isSearchResult: this.props.isSearchResult
                },
                u = (0, em.q)({
                    proxyURL: i.proxy_url,
                    url: i.url
                });
            return (u in _ && h && ((c.onClick = _[u]), (c.handlePreloadImage = p[u])), c);
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
                      renderLinkComponent: eB.iT
                  };
                  if (t.type === ez.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let a = ev.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let o = a.pathname.split('/')[3];
                          if (null != o)
                              return (0, i.jsx)(
                                  h.Z,
                                  {
                                      skuId: o,
                                      renderFallback: () => this.renderEmbed(t, n, r, e)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let { gifAutoPlay: t, enabledContentHarmTypeFlags: n, shouldHideMediaOptions: r, disableComponentInteractivity: a, onMediaItemContextMenu: o } = this.props;
        return (0, i.jsx)(eU.F, {
            gifAutoPlay: t,
            getGifFavButton: e9,
            getOnMediaItemContextMenu:
                null == o
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), null == o || o(t, e));
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(Z.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a
            })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eG.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ez.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(v.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eS.Pv)(e)
            ? (0, i.jsx)(eL.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      _.Z.dismissAutomatedMessage(e);
                  }
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
                          renderableSticker: e
                      },
                      e.id
                  )
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(ez.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(el.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(ez.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - eO.default.extractTimestamp(e.id) >= e8))
            return (0, i.jsx)('div', {
                className: eX.threadRoleMentionFailure,
                children: e$.intl.string(e$.t.ma8Rs7)
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(f.sYh, {
            dismissable: !0,
            header: e$.intl.string(e$.t.VL1KOj),
            confirmText: e$.intl.string(e$.t.YEHppK),
            cancelText: e$.intl.string(e$.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (_.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/normal',
                    color: 'text-default',
                    className: eX.confirmText,
                    children: e$.intl.string(e$.t['vXZ+Fh'])
                }),
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: e$.intl.string(e$.t['5j2by8'])
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(f.sYh, {
                  dismissable: !0,
                  header: e$.intl.string(e$.t.CbTIEh),
                  confirmText: e$.intl.string(e$.t.kFwAsb),
                  cancelText: e$.intl.string(e$.t['ETE/oK']),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      (_.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null
                          }));
                  },
                  children: (0, i.jsx)(f.Text, {
                      variant: 'text-md/normal',
                      color: 'text-default',
                      className: eX.confirmText,
                      children: e$.intl.string(e$.t.faHmOz)
                  })
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== l.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eZ.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eD.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
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
                          channel: this.props.channel
                      },
                      t.id
                  )
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(er.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(ei.g, { embed: e.embeds[0] }) : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, N.kC)(e) ? (0, i.jsx)(w.Z, { message: e }) : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(X.Z, {
                message: e,
                poll: t,
                className: eX.pollContainer
            });
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(en.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(P.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eY.Z, {
            message: e,
            compact: t,
            location: eY.H.AFTER_ACCESSORIES
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
            N = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            w = this.renderMediaObscureNotice(t),
            R = this.renderPoll(t, n),
            P = this.renderForwardedMessage(t),
            D = this.renderReportedMessage(t);
        return null == c && null == f && null == h && null == m && null == g && null == u && null == d && null == E && null == b && null == y && null == O && null == v && null == T && null == I && null == A && null == N && null != S && null == R && null == P && null == D
            ? null
            : (0, i.jsxs)('div', {
                  id: (0, eM.bX)(t),
                  className: s()(e, eX.container),
                  children: [D, P, I, R, c, u, d, A, f, _, h, w, m, y, v, T, S, p, l, g, E, b, a && this.renderSuppressConfirmModal(), o && this.renderRemoveAttachmentConfirmModal(), O, N, C]
              });
    }
    constructor(...e) {
        (super(...e),
            eJ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eJ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eJ(this, 'renderEmbed', (e, t, n, r) => {
                var a, o, s;
                let { gifAutoPlay: l, inlineEmbedMedia: c, canSuppressEmbeds: u, hasSpoilerEmbeds: d, enabledContentHarmTypeFlags: f, isSearchResult: _, shouldAgeVerify: p } = this.props,
                    h = r.channel_id,
                    m = r.id,
                    g = (0, eT.BP)(e, h, m, d, f);
                if (e.type === ez.hBH.GIFT) return null;
                let E = e6.includes(e.type) ? e.url : null != (s = null == (a = e.image) ? void 0 : a.url) ? s : null == (o = e.video) ? void 0 : o.url;
                return (0, i.jsx)(
                    D.h.Provider,
                    {
                        value: (0, eW.P)(E, e.image, e.video),
                        children: (0, i.jsx)(
                            I.ZP,
                            e0(
                                {
                                    embed: e,
                                    obscureReason: null != g ? g : void 0,
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
                                    shouldAgeVerify: null != p && p
                                },
                                n
                            )
                        )
                    },
                    e.id
                );
            }),
            eJ(this, 'renderEmbedTitle', (e, t) => (e.type === ez.hBH.RICH ? H.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eJ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === ez.hBH.RICH
                    ? H.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eJ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eJ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            }));
    }
}
function tn(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: o } = e,
        s = (0, c.e7)([ed.default], () => ed.default.getId()),
        l = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, ew.Z)(e.message),
        f = ec.nc.useSetting() && !1 !== e.renderReactions,
        _ = ec.QK.useSetting(),
        p = (0, c.e7)([e_.Z], () => null == n.guild_id || e_.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([F.Z], () => null != n.guild_id && F.Z.isLurking(n.guild_id), [n]),
        m = (0, c.e7)([ef.ZP], () => ef.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([ef.ZP, eh.default], () => {
            var e, t;
            let r = eh.default.getCurrentUser();
            return null != (t = null != n.guild_id && null != r ? (null == (e = ef.ZP.getMember(n.guild_id, r.id)) ? void 0 : e.isPending) : null) && t;
        }),
        { canAddNewReactions: E, canManageMessages: b } = (0, c.cj)(
            [ep.Z],
            () => ({
                canAddNewReactions: p && ep.Z.can(ez.Plq.ADD_REACTIONS, n),
                canManageMessages: ep.Z.can(ez.Plq.MANAGE_MESSAGES, n)
            }),
            [p, n]
        ),
        y = (0, x.ux)(n.guild_id),
        [, O] = (0, k.AB)(n.guild_id),
        v = (0, es.$R)(n),
        I = (s === r.author.id || b) && r.author.id !== ez.LAt && !1 !== a && !(0, ey.yE)(r.flags, ez.iLy.EPHEMERAL) && v && 1 === (0, eC.Z)(r),
        T = s === r.author.id && v && !o,
        S = r.author.id === s,
        N = r.isFirstMessageInForumPost(n),
        w = (0, eR.Z)({
            channel: n,
            canChat: p,
            renderReactions: f,
            canAddNewReactions: E,
            isLurking: h,
            isGuest: m,
            communicationDisabled: O,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: y
        }),
        R = (0, V.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        P = (0, K.Z)(null == n ? void 0 : n.id),
        D = (0, $.Z)(r),
        L = (0, C.v)(r),
        j = (0, eN._)(n),
        M = (0, eI.ro)(r.id, r.channel_id),
        U = (0, A.m8)();
    return (0, i.jsx)(
        tt,
        e2(
            e0(
                e2(
                    e0(
                        {
                            canSuppressEmbeds: I,
                            canDeleteAttachments: T
                        },
                        w
                    ),
                    { disableReactionReads: !!N || w.disableReactionReads }
                ),
                e
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && j,
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
                showListsAndHeaders: R,
                showMaskedLinks: R,
                shouldHideMediaOptions: P,
                enabledContentHarmTypeFlags: L,
                ctaButtonType: M,
                shouldAgeVerify: U
            }
        )
    );
}
eJ(tt, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let tr = (e) => {
    var t,
        { message: n, channel: r, disableReactionReads: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: l = !0, disableComponentInteractivity: c = !0, isSearchResult: u = !1 } = e,
        d = e3(e, ['message', 'channel', 'disableReactionReads', 'renderThreadAccessory', 'disableReactionCreates', 'disableReactionUpdates', 'disableComponentInteractivity', 'isSearchResult']);
    let f = ec.x4.useSetting(),
        _ = ec.RS.useSetting(),
        p = ec.NA.useSetting(),
        h = ec.QK.useSetting(),
        m = (0, V.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        g = (0, K.Z)(null == r ? void 0 : r.id),
        E = (0, C.v)(n),
        b = (0, eI.ro)(n.id, n.channel_id),
        y = (0, $.Z)(n);
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
            isSearchResult: u
        })
    );
};
