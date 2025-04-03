n.d(t, {
    $p: () => e9,
    BB: () => e5,
    ZP: () => e6
}),
    n(47120),
    n(301563),
    n(789020),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104),
    n(13667),
    n(390547);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    p = n(481060),
    m = n(904245),
    f = n(637374),
    h = n(626799),
    g = n(624367),
    _ = n(183431),
    b = n(421474),
    x = n(603270),
    y = n(162297),
    E = n(222709),
    v = n(446411),
    O = n(960904),
    N = n(161314),
    j = n(247206),
    C = n(25610),
    I = n(761538),
    S = n(674611),
    T = n(346610),
    P = n(868643),
    A = n(294734),
    w = n(426275),
    Z = n(947849),
    k = n(10433),
    R = n(715903),
    D = n(71619),
    L = n(637618),
    M = n(225890),
    W = n(364097),
    U = n(495129),
    F = n(939170),
    B = n(187506),
    G = n(954654),
    H = n(41776),
    V = n(628238),
    z = n(454585),
    K = n(768494),
    Y = n(124347),
    X = n(976853),
    q = n(346013),
    Q = n(94396),
    J = n(977683),
    $ = n(128435),
    ee = n(98278),
    et = n(614825),
    en = n(265299),
    er = n(699833),
    ei = n(344997),
    ea = n(378233),
    el = n(374425),
    eo = n(665906),
    es = n(432147),
    ec = n(695346),
    eu = n(314897),
    ed = n(271383),
    ep = n(607744),
    em = n(496675),
    ef = n(594174),
    eh = n(52824),
    eg = n(626135),
    e_ = n(70956),
    eb = n(408433),
    ex = n(630388),
    ey = n(709054),
    eE = n(591759),
    ev = n(594173),
    eO = n(169525),
    eN = n(786761),
    ej = n(161010),
    eC = n(255269),
    eI = n(461157),
    eS = n(901461),
    eT = n(432376),
    eP = n(384203),
    eA = n(633957),
    ew = n(530472),
    eZ = n(29909),
    ek = n(782658),
    eR = n(219797),
    eD = n(453687),
    eL = n(128854),
    eM = n(101578),
    eW = n(524444),
    eU = n(319323),
    eF = n(884182),
    eB = n(546432),
    eG = n(920888),
    eH = n(817384),
    eV = n(981631),
    ez = n(474936),
    eK = n(388032),
    eY = n(30804),
    eX = n(813102),
    eq = n(680674);
function eQ(e, t, n) {
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
function eJ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eQ(e, t, n[t]);
            });
    }
    return e;
}
function e$(e, t) {
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
function e0() {
    return (0, i.jsxs)('div', {
        className: eX.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)('img', {
                src: eq,
                className: eX.nitroBadgeSvg,
                alt: ''
            }),
            (0, i.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eK.NW.format(eK.t['G/H+s7'], { onClick: () => (0, ee.z)() })
            })
        ]
    });
}
let e1 = 15 * e_.Z.Millis.MINUTE,
    e2 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e3 = (e, t, n) => () => {
        let r = null != t ? t : n;
        if (null == r) return null;
        let { url: a, proxyURL: l, width: o, height: s } = r;
        return (0, i.jsx)(eZ.Z, {
            width: o,
            height: s,
            src: null != l && '' !== l ? l : a,
            url: null != e && '' !== e ? e : null != l && '' !== l ? l : a,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eX.gifFavoriteButton
        });
    },
    e4 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, srcIsAnimated: l } = e;
        return null != r && null != a && (Y.uo.test(n) || (l && (Y.YG.test(n) || Y.FH.test(n))))
            ? (0, i.jsx)(eZ.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eX.gifFavoriteButton
              })
            : null;
    };
class e5 extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e2.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, r;
        let { channel: i, message: a, poll: l } = this.props,
            { channel: o, message: s, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            i.type !== o.type ||
            c !== l ||
            s.codedLinks !== a.codedLinks ||
            s.flags !== a.flags ||
            s.giftCodes !== a.giftCodes ||
            s.attachments !== a.attachments ||
            s.embeds !== a.embeds ||
            s.components !== a.components ||
            s.activity !== a.activity ||
            ((n = s.reactions) !== (r = a.reactions) &&
                (n.length !== r.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: a } = e,
                            { emoji: l, count: o, burst_count: s } = r[t];
                        return a !== s || i !== o || n.id !== l.id || n.name !== l.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case ev.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(S.Z, {
                    messageId: e.id,
                    channelId: t.id
                });
                break;
            case ev.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(_.Z, { channelId: t.id });
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
        let t = e.attachments.some((e) => e.size > ez.Lw);
        return (0, ej.M)('attachment') && t ? (0, i.jsx)(e0, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === O.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                ek.Z,
                                {
                                    code: r,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === O.g.TEMPLATE) return (0, i.jsx)(W.Z, { code: r }, r);
                  if (n === O.g.EVENT) return (0, i.jsx)(M.Z, { code: r }, r);
                  if (n === O.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eP.Z,
                          {
                              code: r,
                              messageData: e
                          },
                          r
                      );
                  if (n === O.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          k.Z,
                          {
                              code: r,
                              message: e,
                              embedUrl: a
                          },
                          r
                      );
                  else if (n === O.g.ACTIVITY_BOOKMARK) {
                      var l, o, s;
                      let t = new URL(a),
                          n = null != (l = t.searchParams.get('referrer_id')) ? l : e.author.id,
                          c = null != (o = t.searchParams.get('custom_id')) ? o : void 0,
                          u = null != (s = t.searchParams.get('link_id')) ? s : void 0;
                      return (0, i.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: n,
                              customId: c,
                              linkId: u,
                              embedUrl: a
                          },
                          r
                      );
                  } else if (n === O.g.GUILD_PRODUCT) return (0, i.jsx)(L.Z, { code: r }, r);
                  else if (n === O.g.SERVER_SHOP) return (0, i.jsx)(N.Z, { guildId: r }, r);
                  else if (n === O.g.QUESTS_EMBED) return (0, i.jsx)(en.Z, { questId: r }, r);
                  else if (n === O.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          x.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === O.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                x.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e
                                },
                                r
                            );
                  } else if (n === O.g.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          y.Z,
                          {
                              applicationId: r,
                              embedUrl: a
                          },
                          r
                      );
                  else if (n === O.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: l, giftInfo: o } = e,
            s = ef.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      'div',
                      {
                          className: eX.giftCodeContainer,
                          children: (0, i.jsx)(f.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: s,
                              type: a,
                              content: l,
                              giftInfo: o
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
        return n !== s.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, i.jsx)(
                  'div',
                  {
                      className: eX.referralContainer,
                      children: (0, i.jsx)(et.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != r && r
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: r, isLurking: a, isGuest: l, isPendingMember: o, channel: s, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, i.jsx)(eG.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: a,
                  isGuest: l,
                  isPendingMember: o,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, hasInlineForwardButton: n, gifAutoPlay: r, canDeleteAttachments: a, inlineAttachmentMedia: l, onMediaItemContextMenu: o, shouldRedactExplicitContent: s, shouldHideMediaOptions: c } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || e.isComponentsV2()) return null;
        let p = u.filter((e) => null == e.flags || !(0, ex.yE)(e.flags, eV.J0y.IS_THUMBNAIL));
        if (0 === p.length) return null;
        let m = p
                .map((t) => {
                    var n;
                    return e$(eJ({}, (0, K.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ex.yE)(null != (n = t.flags) ? n : 0, eV.J0y.IS_ANIMATED)
                    });
                })
                .filter((e) => 'INVALID' !== e.type),
            { srcToOnClickOverride: f, srcToHandlePreloadImage: h } = (0, Q.J)(
                m,
                {
                    shouldRedactExplicitContent: s,
                    shouldHideMediaOptions: c
                },
                'Media Mosaic'
            ),
            g = m.length > 1,
            _ = (0, ex.yE)(d, eV.iLy.IS_VOICE_MESSAGE);
        function b(e, t) {
            return (0, eO.dn)(e.originalItem, t);
        }
        let x = p.map((n) => {
                let i = (0, K.VY)(n),
                    s = {
                        message: e,
                        item: (0, eB.OB)(n, l),
                        autoPlayGif: r,
                        canRemoveItem: a && (p.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eX.embedWrapper,
                        getObscureReason: b,
                        onContextMenu:
                            null != o
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), o(e, i);
                                  }
                                : void 0,
                        renderAudioComponent: _ ? eR.jY : eR.q7,
                        renderImageComponent: eR.dS,
                        renderVideoComponent: eR.vZ,
                        renderPlaintextFilePreview: eR.d4,
                        renderGenericFileComponent: eR.ZK,
                        renderMosaicItemFooter: eR.L9,
                        onPlay: (e, r, i) => {
                            eg.default.track(eV.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: i
                            });
                        },
                        gifFavoriteButton: e4(i),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, eh.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in f && (g && ((s.onClick = f[c]), (s.handlePreloadImage = h[c])), 'IMAGE' === s.item.type && (s.onViewItem = f[c])), s;
            }),
            y = n
                ? (0, i.jsx)(w.Z, {
                      className: eY.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, i.jsx)(eF.Z, {
            items: x,
            inlineForwardButton: y
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eH.b.has(t.type) || (0, eb.l3)(t) || ((0, F.b)(t) && !(0, B.M)(e)) || (0, eb.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eW.Yi,
                      renderVideoComponent: eW.lV,
                      renderLinkComponent: eW.iT
                  };
                  if (t.type === eV.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let a = eE.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let l = a.pathname.split('/')[3];
                          if (null != l)
                              return (0, i.jsx)(
                                  h.Z,
                                  {
                                      skuId: l,
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
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: r, disableComponentInteractivity: a, onMediaItemContextMenu: l } = this.props;
        return (0, i.jsx)(eL.F, {
            gifAutoPlay: t,
            getGifFavButton: e4,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == l || l(t, e);
                      },
            shouldHideMediaOptions: r,
            shouldRedactExplicitContent: n,
            children: (0, i.jsx)(G.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a
            })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eM.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eV.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(E.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eN.Pv)(e)
            ? (0, i.jsx)(ew.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
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
                      el.Z,
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
        if (e.hasFlag(eV.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(es.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(eV.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - ey.default.extractTimestamp(e.id) >= e1))
            return (0, i.jsx)('div', {
                className: eX.threadRoleMentionFailure,
                children: eK.NW.string(eK.t.ma8Rs7)
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.sYh, {
            dismissable: !0,
            header: eK.NW.string(eK.t.VL1KOj),
            confirmText: eK.NW.string(eK.t.YEHppK),
            cancelText: eK.NW.string(eK.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eX.confirmText,
                    children: eK.NW.string(eK.t['vXZ+Fh'])
                }),
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eK.NW.string(eK.t['5j2by8'])
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(p.sYh, {
                  dismissable: !0,
                  header: eK.NW.string(eK.t.CbTIEh),
                  confirmText: eK.NW.string(eK.t.kFwAsb),
                  cancelText: eK.NW.string(eK.t['ETE/oK']),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      m.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null
                          });
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: 'text-md/normal',
                      color: 'text-normal',
                      className: eX.confirmText,
                      children: eK.NW.string(eK.t.faHmOz)
                  })
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eU.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eA.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eV.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      q.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(er.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(ei.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eV.hBH.VOICE_CHANNEL)
            return (0, i.jsx)(U.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, j.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, i.jsx)(I.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)($.Z, {
                message: e,
                poll: t,
                className: eX.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, i.jsx)(A.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: l } = this.state,
            s = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderReferralTrial(t),
            d = this.renderAttachments(t),
            p = this.renderCtaButton(),
            m = this.renderSocialProofingFileSizeNitroUpsell(t),
            f = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            g = this.renderReactions(t),
            _ = this.renderPublishBump(t),
            b = this.renderEphemeralAccessories(t),
            x = this.renderStickersAccessories(t),
            y = this.renderThreadAccessories(t),
            E = this.renderComponentAccessories(t),
            v = this.renderThreadRoleMentionWarning(t),
            O = this.renderEmbeddedApplicationInstanceEmbed(t),
            N = this.renderInteractionPremiumUpsell(t),
            j = this.renderMediaPostEmbeds(t),
            C = this.renderSafetyPolicyNotice(t),
            I = this.renderSafetySystemNotification(t),
            S = this.renderVoiceChannelInvite(t, n),
            T = this.renderMediaObscureNotice(t),
            P = this.renderPoll(t, r),
            A = this.renderForwardedMessage(t);
        return null == s && null == d && null == f && null == h && null == g && null == c && null == u && null == _ && null == b && null == x && null == y && null == E && null == O && null == v && null == j && null == C && null != N && null == P && null == S && null == A
            ? null
            : (0, i.jsxs)('div', {
                  id: (0, eD.bX)(t),
                  className: o()(e, eX.container),
                  children: [A, v, P, s, c, u, j, d, p, f, T, h, x, E, O, N, m, g, _, b, a && this.renderSuppressConfirmModal(), l && this.renderRemoveAttachmentConfirmModal(), y, C, I, S]
              });
    }
    constructor(...e) {
        super(...e),
            eQ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eQ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eQ(this, 'renderEmbed', (e, t, n, r) => {
                let { gifAutoPlay: a, inlineEmbedMedia: l, canSuppressEmbeds: o, hasSpoilerEmbeds: s, shouldRedactExplicitContent: c, hasInlineForwardButton: u, isSearchResult: d } = this.props,
                    p = r.channel_id,
                    m = r.id,
                    f = (0, eO.BP)(e, p, m, s, c);
                if (e.type === eV.hBH.GIFT) return null;
                let h = (0, i.jsx)(
                    Z.h.Provider,
                    {
                        value: e3(e.url, e.image, e.video),
                        children: (0, i.jsx)(
                            v.ZP,
                            eJ(
                                {
                                    className: eX.embedWrapper,
                                    embed: e,
                                    obscureReason: null != f ? f : void 0,
                                    autoPlayGif: a,
                                    hideMedia: !l,
                                    onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    showImageRecs: !1,
                                    isSearchResult: d,
                                    embedIndex: t
                                },
                                n
                            )
                        )
                    },
                    e.id
                );
                return u
                    ? (0, i.jsxs)('div', {
                          className: eX.embedContainer,
                          children: [
                              h,
                              (0, i.jsx)(w.Z, {
                                  className: eY.hideIfMessageNotFocused,
                                  messageId: m,
                                  channelId: p,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : h;
            }),
            eQ(this, 'renderEmbedTitle', (e, t) => (e.type === eV.hBH.RICH ? z.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eQ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eV.hBH.RICH
                    ? z.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eQ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eQ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e6(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: l } = e,
        o = (0, c.e7)([eu.default], () => eu.default.getId()),
        s = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, eS.Z)(e.message),
        p = ec.nc.useSetting() && !1 !== e.renderReactions,
        m = ec.QK.useSetting(),
        f = (0, c.e7)([ep.Z], () => null == n.guild_id || ep.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([H.Z], () => null != n.guild_id && H.Z.isLurking(n.guild_id), [n]),
        g = (0, c.e7)([ed.ZP], () => ed.ZP.isCurrentUserGuest(n.guild_id), [n]),
        _ = (0, c.e7)([ed.ZP, ef.default], () => {
            var e, t;
            let r = ef.default.getCurrentUser();
            return null != (t = null != n.guild_id && null != r ? (null == (e = ed.ZP.getMember(n.guild_id, r.id)) ? void 0 : e.isPending) : null) && t;
        }),
        { canAddNewReactions: b, canManageMessages: x } = (0, c.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: f && em.Z.can(eV.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eV.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        y = (0, R.ux)(n.guild_id),
        [, E] = (0, D.AB)(n.guild_id),
        v = (0, eo.$R)(n),
        O = (o === r.author.id || x) && r.author.id !== eV.LAt && !1 !== a && !(0, ex.yE)(r.flags, eV.iLy.EPHEMERAL) && v && 1 === (0, eI.Z)(r),
        N = o === r.author.id && v && !l,
        j = r.author.id === o,
        I = r.isFirstMessageInForumPost(n),
        S = (0, eT.Z)({
            channel: n,
            canChat: f,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: h,
            isGuest: g,
            communicationDisabled: E,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: y
        }),
        A = (0, V.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        w = (0, X.Z)(null == n ? void 0 : n.id),
        Z = (0, J.Z)(r),
        k = (0, C.V)(n.id, r.author.id),
        { hasInlineForwardButton: L } = (0, T.yk)({ location: 'MessageAccessories' }),
        M = (0, P.a)(r) && L,
        W = (0, eC._)(n),
        U = (0, ev.ro)(r.id, r.channel_id);
    return (0, i.jsx)(
        e5,
        e$(
            eJ(
                e$(
                    eJ(
                        {
                            canSuppressEmbeds: O,
                            canDeleteAttachments: N
                        },
                        S
                    ),
                    { disableReactionReads: !!I || S.disableReactionReads }
                ),
                e
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && W,
                isLurking: h && f,
                isGuest: g && f,
                isPendingMember: _ && f,
                isCurrentUser: j,
                inlineAttachmentMedia: s,
                inlineEmbedMedia: u,
                renderEmbeds: d,
                gifAutoPlay: m,
                canRenderReferralEmbed: n.isDM(),
                poll: Z,
                showListsAndHeaders: A,
                showMaskedLinks: A,
                shouldHideMediaOptions: w,
                shouldRedactExplicitContent: k,
                ctaButtonType: U,
                hasInlineForwardButton: M
            }
        )
    );
}
eQ(e5, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e9 = (e) => {
    var t,
        { message: n, channel: r, disableReactionReads: a = !1, renderThreadAccessory: l = !1, disableReactionCreates: o = !0, disableReactionUpdates: s = !0, disableComponentInteractivity: c = !0, isSearchResult: u = !1 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'channel', 'disableReactionReads', 'renderThreadAccessory', 'disableReactionCreates', 'disableReactionUpdates', 'disableComponentInteractivity', 'isSearchResult']);
    let p = ec.x4.useSetting(),
        m = ec.RS.useSetting(),
        f = ec.NA.useSetting(),
        h = ec.QK.useSetting(),
        g = (0, V.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        _ = (0, X.Z)(null == r ? void 0 : r.id),
        b = (0, C.V)(r.id, n.author.id),
        x = (0, ev.ro)(n.id, n.channel_id),
        y = (0, J.Z)(n);
    return (0, i.jsx)(
        e5,
        e$(eJ({}, d), {
            message: n,
            channel: r,
            disableReactionReads: a,
            disableReactionCreates: o,
            disableReactionUpdates: s,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: l,
            inlineAttachmentMedia: p,
            inlineEmbedMedia: m,
            renderEmbeds: f,
            gifAutoPlay: h,
            poll: y,
            showListsAndHeaders: g,
            showMaskedLinks: g,
            shouldHideMediaOptions: _,
            shouldRedactExplicitContent: b,
            ctaButtonType: x,
            hasInlineForwardButton: !1,
            isSearchResult: u
        })
    );
};
