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
    T = n(960904),
    S = n(161314),
    A = n(247206),
    C = n(629710),
    N = n(262777),
    R = n(761538),
    P = n(674611),
    w = n(294734),
    D = n(947849),
    x = n(10433),
    L = n(715903),
    j = n(71619),
    M = n(637618),
    k = n(225890),
    U = n(364097),
    G = n(939170),
    B = n(187506),
    Z = n(954654),
    V = n(41776),
    F = n(628238),
    H = n(454585),
    Y = n(768494),
    W = n(124347),
    K = n(976853),
    z = n(346013),
    q = n(207982),
    X = n(977683),
    Q = n(128435),
    J = n(98278),
    $ = n(623879),
    ee = n(686380),
    et = n(265299),
    en = n(982168),
    er = n(163038),
    ei = n(699833),
    ea = n(344997),
    eo = n(378233),
    es = n(374425),
    el = n(665906),
    ec = n(432147),
    eu = n(695346),
    ed = n(23750),
    ef = n(314897),
    e_ = n(271383),
    ep = n(607744),
    eh = n(496675),
    em = n(594174),
    eg = n(52824),
    eE = n(626135),
    eb = n(70956),
    ey = n(408433),
    eO = n(630388),
    ev = n(709054),
    eI = n(591759),
    eT = n(594173),
    eS = n(169525),
    eA = n(786761),
    eC = n(161010),
    eN = n(255269),
    eR = n(461157),
    eP = n(901461),
    ew = n(432376),
    eD = n(384203),
    ex = n(633957),
    eL = n(530472),
    ej = n(29909),
    eM = n(782658),
    ek = n(219797),
    eU = n(453687),
    eG = n(128854),
    eB = n(101578),
    eZ = n(524444),
    eV = n(319323),
    eF = n(884182),
    eH = n(546432),
    eY = n(920888),
    eW = n(328966),
    eK = n(963206),
    ez = n(817384),
    eq = n(981631),
    eX = n(474936),
    eQ = n(388032),
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
function e2(e, t) {
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
function e3(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e2(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e4(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e8(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e8(e, t) {
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
        className: eJ.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)("img", {
                src: e$,
                className: eJ.nitroBadgeSvg,
                alt: "",
            }),
            (0, i.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eQ.intl.format(eQ.t["G/H+s7"], { onClick: () => (0, J.z)() }),
            }),
        ],
    });
}
let e5 = [eq.hBH.GIFV],
    e7 = 15 * eb.Z.Millis.MINUTE,
    e9 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    te = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: o } = e,
            s = (0, eO.yE)(o, Y.hR.IS_ANIMATED);
        return null != r && null != a && (W.uo.test(n) || (s && (W.YG.test(n) || W.FH.test(n))))
            ? (0, i.jsx)(ej.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
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
            !tt(o.reactions, r.reactions)
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eT.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(P.Z, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case eT.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(g.Z, { channelId: t.id });
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
        let t = e.attachments.some((e) => e.size > eX.Lw);
        return (0, eC.M)("attachment") && t ? (0, i.jsx)(e6, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
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
                  if (n === T.g.EVENT) return (0, i.jsx)(k.Z, { code: r }, r);
                  if (n === T.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eD.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === T.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          x.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
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
                              linkId: o,
                          },
                          r,
                      );
                  } else if (n === T.g.GUILD_PRODUCT) return (0, i.jsx)(M.Z, { code: r }, r);
                  else if (n === T.g.SERVER_SHOP) return (0, i.jsx)(S.Z, { guildId: r }, r);
                  else if (n === T.g.QUESTS_EMBED) return (0, i.jsx)(et.Z, { questId: r }, r);
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
        let { giftCodes: t, author: n, channel_id: r, type: a, content: o, giftInfo: s } = e,
            l = em.default.getCurrentUser();
        return null != l && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eJ.giftCodeContainer,
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
            a = $.ZP.getCurrentConfig({ location: "isSystemMessage" }).cohort !== $.FZ.Control;
        return n !== l.u.PREMIUM_REFERRAL || null == t || a
            ? null
            : (0, i.jsx)(
                  "div",
                  {
                      className: eJ.referralContainer,
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
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ed.hv)(e)) return null;
        let d = c.filter((e) => null == e.flags || !(0, eO.yE)(e.flags, eq.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let f = d
                .map((t) => {
                    var n;
                    return e3(e1({}, (0, Y.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, eO.yE)(null != (n = t.flags) ? n : 0, eq.J0y.IS_ANIMATED),
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
            m = (0, eO.yE)(u, eq.iLy.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, eS.dn)(e.originalItem, t);
        }
        let E = d.map((i) => {
            let s = (e, n, r) => {
                    eE.default.track(eq.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                    item: (0, eH.OB)(i, a),
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
                    gifFavoriteButton: te(l),
                    isSearchResult: this.props.isSearchResult,
                },
                u = (0, eg.q)({
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
                  if (ez.b.has(t.type) || (0, ey.l3)(t) || ((0, G.b)(t) && !(0, B.M)(e)) || (0, ey.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eZ.Yi,
                      renderVideoComponent: eZ.lV,
                      renderLinkComponent: eZ.iT,
                  };
                  if (
                      t.type === eq.hBH.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = eI.Z.safeParseWithQuery(t.url);
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
            children: (0, i.jsx)(Z.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a,
            }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eB.Z, {
            channel: t,
            message: e,
            hideParty: !1,
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eq.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(v.Z, {
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
        let t = (0, eo.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      es.Z,
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
            return (0, i.jsx)(ec.Z, {
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
                children: eQ.intl.string(eQ.t.ma8Rs7),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(f.sYh, {
            dismissable: !0,
            header: eQ.intl.string(eQ.t.VL1KOj),
            confirmText: eQ.intl.string(eQ.t.YEHppK),
            cancelText: eQ.intl.string(eQ.t["ETE/oK"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(f.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eJ.confirmText,
                    children: eQ.intl.string(eQ.t["vXZ+Fh"]),
                }),
                (0, i.jsx)(f.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eQ.intl.string(eQ.t["5j2by8"]),
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
                  header: eQ.intl.string(eQ.t.CbTIEh),
                  confirmText: eQ.intl.string(eQ.t.kFwAsb),
                  cancelText: eQ.intl.string(eQ.t["ETE/oK"]),
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
                      className: eJ.confirmText,
                      children: eQ.intl.string(eQ.t.faHmOz),
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
            : (0, i.jsx)(ex.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eq.hBH.POST_PREVIEW || null == t.url
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
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, C.kC)(e)
            ? (0, i.jsx)(R.Z, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(Q.Z, {
                message: e,
                poll: t,
                className: eJ.pollContainer,
            });
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, en.Gi)(e, this.props.channel)) return (0, i.jsx)(er.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, en.Gi)(e, this.props.channel)) return (0, i.jsx)(w.Z, { message: e });
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
            null == C &&
            null != S &&
            null == P &&
            null == w &&
            null == D
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eU.bX)(t),
                  className: s()(e, eJ.container),
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
                        isSearchResult: _,
                        shouldAgeVerify: p,
                    } = this.props,
                    h = (0, eS.BP)(e, r, d, f);
                if (e.type === eq.hBH.GIFT) return null;
                let m = e5.includes(e.type)
                    ? e.url
                    : null != (s = null == (a = e.image) ? void 0 : a.url)
                      ? s
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    D.h.Provider,
                    {
                        value: (0, eK.P)(m, e.image, e.video),
                        children: (0, i.jsx)(
                            I.ZP,
                            e1(
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
            e0(this, "renderEmbedTitle", (e, t) =>
                e.type === eq.hBH.RICH ? H.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t,
            ),
            e0(this, "renderEmbedDescription", (e, t, n) =>
                e.type === eq.hBH.RICH
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
        s = (0, c.e7)([ef.default], () => ef.default.getId()),
        l = eu.x4.useSetting(),
        u = eu.RS.useSetting(),
        d = eu.NA.useSetting() && !(0, eP.Z)(e.message),
        f = eu.nc.useSetting() && !1 !== e.renderReactions,
        _ = eu.QK.useSetting(),
        p = (0, c.e7)([ep.Z], () => null == n.guild_id || ep.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([V.Z], () => null != n.guild_id && V.Z.isLurking(n.guild_id), [n]),
        m = (0, c.e7)([e_.ZP], () => e_.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([e_.ZP, em.default], () => {
            var e, t;
            let r = em.default.getCurrentUser();
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
        { canAddNewReactions: E, canManageMessages: b } = (0, c.cj)(
            [eh.Z],
            () => ({
                canAddNewReactions: p && eh.Z.can(eq.Plq.ADD_REACTIONS, n),
                canManageMessages: eh.Z.can(eq.Plq.MANAGE_MESSAGES, n),
            }),
            [p, n],
        ),
        y = (0, L.ux)(n.guild_id),
        [, O] = (0, j.AB)(n.guild_id),
        v = (0, el.$R)(n),
        I =
            (s === r.author.id || b) &&
            r.author.id !== eq.LAt &&
            !1 !== a &&
            !(0, eO.yE)(r.flags, eq.iLy.EPHEMERAL) &&
            v &&
            1 === (0, eR.Z)(r),
        T = s === r.author.id && v && !o,
        S = r.author.id === s,
        C = r.isFirstMessageInForumPost(n),
        R = (0, ew.Z)({
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
        P = (0, F.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        w = (0, K.Z)(null == n ? void 0 : n.id),
        D = (0, X.Z)(r),
        x = (0, N.v)(r),
        M = (0, eN._)(n),
        k = (0, eT.ro)(r.id, r.channel_id),
        U = (0, A.m8)();
    return (0, i.jsx)(
        tn,
        e3(
            e1(
                e3(
                    e1(
                        {
                            canSuppressEmbeds: I,
                            canDeleteAttachments: T,
                        },
                        R,
                    ),
                    { disableReactionReads: !!C || R.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && M,
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
            isSearchResult: u = !1,
        } = e,
        d = e4(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
            "isSearchResult",
        ]);
    let f = eu.x4.useSetting(),
        _ = eu.RS.useSetting(),
        p = eu.NA.useSetting(),
        h = eu.QK.useSetting(),
        m = (0, F.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        g = (0, K.Z)(null == r ? void 0 : r.id),
        E = (0, N.v)(n),
        b = (0, eT.ro)(n.id, n.channel_id),
        y = (0, X.Z)(n);
    return (0, i.jsx)(
        tn,
        e3(e1({}, d), {
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
