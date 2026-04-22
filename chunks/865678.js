"use strict";
n.d(t, { A: () => eL, w: () => eR }), n(938796), n(667532);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(371444),
    o = n(392421),
    d = n(602137),
    c = n(665260),
    u = n(311907),
    h = n(36525),
    g = n(462887),
    m = n(265872),
    x = n(452027),
    p = n(260598),
    A = n(404778),
    f = n(150934),
    b = n(825484),
    _ = n(821609),
    C = n(123292),
    j = n(691885),
    v = n(270003),
    N = n(106236),
    S = n(243721),
    E = n(331322),
    y = n(954197),
    T = n(512950),
    R = n(292666),
    I = n(73153),
    M = n(435183),
    L = n(534963),
    w = n(820284),
    O = n(432371),
    k = n(323073),
    D = n(47167),
    G = n(355622),
    B = n(408018),
    U = n(133343),
    P = n(235986),
    V = n(915089),
    H = n(375499),
    F = n(937773),
    z = n(770335),
    W = n(7584),
    Z = n(200463),
    Y = n(633839),
    J = n(235640),
    X = n(268761),
    $ = n(406704),
    Q = n(474078),
    q = n(71397),
    K = n(544028),
    ee = n(95701),
    et = n(260509),
    en = n(961350),
    el = n(863036),
    ei = n(71393),
    es = n(576705),
    ea = n(717518),
    er = n(287809),
    eo = n(147036),
    ed = n(927813),
    ec = n(975571),
    eu = n(879631),
    eh = n(969574),
    eg = n(532277),
    em = n(592739),
    ex = n(436387),
    ep = n(652215),
    eA = n(746080),
    ef = n(307731);
n(253913);
var eb = n(37411),
    e_ = n(985018),
    eC = n(263107),
    ej = n(818050);
let ev = (0, V.Ld)(),
    eN = (0, V.Ld)(),
    eS = (0, V.Ld)(),
    eE = {
        popoutLocation: {
            page: ep.liQ.CHANNEL_SETTINGS,
            section: ep.JJy.CHANNEL_DEFAULT_REACTION,
            object: ep.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ey = {
        popoutLocation: {
            page: ep.liQ.CHANNEL_SETTINGS,
            section: ep.JJy.CHANNEL_NAME,
            object: ep.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eT = "AUTOMATIC_RTC_REGION",
    eR = u.Ay.connectStores([el.A], () => {
        let { channel: e, submitting: t } = el.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, M.Ts)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: l,
                    bitrate: i,
                    userLimit: s,
                    nsfw: a,
                    flags: r,
                    rateLimitPerUser: o,
                    defaultThreadRateLimitPerUser: d,
                    threadMetadata: c,
                    defaultAutoArchiveDuration: u,
                    template: h,
                    rtcRegion: g,
                    videoQualityMode: m,
                    defaultReactionEmoji: x,
                    availableTags: p,
                    defaultSortOrder: A,
                    defaultForumLayout: f,
                    defaultTagSetting: b,
                } = e;
                e.isThread() && 0 === (t = (0, Q.A)(t, !0)).length
                    ? I.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: e_.intl.string(e_.t.uXA573) },
                      })
                    : (0, M.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: s,
                          nsfw: a,
                          flags: r,
                          rateLimitPerUser: o,
                          defaultThreadRateLimitPerUser: d,
                          autoArchiveDuration: c?.autoArchiveDuration,
                          locked: c?.locked,
                          invitable: c?.invitable,
                          defaultAutoArchiveDuration: u,
                          template: h,
                          rtcRegion: g,
                          videoQualityMode: m,
                          defaultReactionEmoji: x,
                          availableTags: p,
                          defaultSortOrder: A,
                          defaultForumLayout: f,
                          defaultTagSetting: b,
                      });
            },
        };
    })(h.A);
function eI(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(F.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: ef.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === z.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: ey,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(m.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: m.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(H.A, { ...e, ref: a, active: n, className: eC.Z8, tabIndex: 0 });
        },
    });
}
class eM extends i.PureComponent {
    defaultReactionButtonRef = i.createRef();
    nameInputRef = i.createRef();
    cursorPosition = 0;
    channelTopicTextAreaChannel = null;
    channelTopicTextAreaGuildId = void 0;
    getChannelTopicTextAreaChannel(e) {
        let t = e ?? void 0;
        return (
            (null == this.channelTopicTextAreaChannel || this.channelTopicTextAreaGuildId !== t) &&
                ((this.channelTopicTextAreaGuildId = t),
                (this.channelTopicTextAreaChannel = (0, ee.createChannelRecord)({
                    id: "1",
                    type: ep.rbe.DM,
                    guild_id: t,
                }))),
            this.channelTopicTextAreaChannel
        );
    }
    constructor(e) {
        super(e);
        const t = this.props.channel?.topic ?? "";
        this.state = {
            textTopicValue: t,
            richTopicValue: (0, B.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && L.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, B.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? e_.intl.string(e_.t["a+1pdO"])
            : e?.isThread()
              ? e_.intl.string(e_.t.OMmNCv)
              : e_.intl.string(e_.t["HEA/DU"]);
    }
    getCooldownSliderMarker(e) {
        return (0, eu.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, eu.$)(e * ed.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        let n,
            i,
            {
                canManageChannels: s,
                canSendMessages: c,
                isThreadModerator: u,
                canManageThread: h,
                guild: g,
                isForumPost: I,
                isOwner: M,
                showSpoilerChannelSetting: L,
            } = this.props,
            O = ee.Le.has(e.type),
            D = e.isForumLikeChannel(),
            B = D && e.availableTags?.every((e) => e.moderated),
            P = er.default.getCurrentUser()?.isStaff() === !0,
            V = ee.IY.has(e.type)
                ? (0, l.jsx)(x.D, {
                      label: D ? e_.intl.string(e_.t.yR6HwZ) : e_.intl.string(e_.t.X8jMDh),
                      children: (0, l.jsx)(U.Ay, {
                          className: a()(eC.zm, { [eC.r9]: !s }),
                          innerClassName: a()(eC.At, { [eC.r9]: !s }),
                          characterCountClassName: eC.IQ,
                          maxCharacterCount: D ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: e_.intl.string(e_.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? g?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: D ? G.oU.FORUM_CHANNEL_GUIDELINES : G.oU.CHANNEL_TOPIC,
                          onFocus: () => {
                              this.setState({ topicFocused: !0 });
                          },
                          onBlur: () => {
                              this.setState({ topicFocused: !1 });
                          },
                          focused: this.state.topicFocused,
                          onSubmit: this.handleSubmit,
                          disableThemedBackground: !0,
                          error: this.getError("topic"),
                          disabled: !s,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            H =
                D && P
                    ? (0, l.jsx)(p.f, {
                          label: e_.intl.string(e_.t.qk2jdY),
                          placeholder: e_.intl.string(e_.t.DDjD1H),
                          value: W.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            F = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.c, {}),
                          (0, l.jsx)(x.D, {
                              label: e_.intl.string(e_.t["P/y+sj"]),
                              description: e_.intl.string(e_.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: ev,
                              children: (0, l.jsx)(Y.A, { channel: e }),
                          }),
                          (0, l.jsx)(f.S, {
                              disabled: !s || B,
                              checked: e.hasFlag(eA.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: e_.intl.string(e_.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.c, {}),
                          (0, l.jsx)(x.D, {
                              label: e_.intl.string(e_.t["8ao1+E"]),
                              description: e_.intl.string(e_.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: eC.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: a()(eC.t0, eC._h),
                                          children: (0, l.jsxs)(b.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(m.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: m.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(_.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: e_.intl.string(e_.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(C.Q, {
                                                            text: e_.intl.string(e_.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(J.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            Z = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.c, {}),
                          (0, l.jsxs)("div", {
                              className: eC.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(eC.t0, eC.WC),
                                      children: (0, l.jsx)(j.l, {
                                          selectionMode: "single",
                                          label: e_.intl.string(e_.t["kQvoC/"]),
                                          description: e_.intl.string(e_.t.mOSViT),
                                          options: [
                                              { id: "list", label: e_.intl.string(e_.t["4HXEZG"]), value: r.C.LIST },
                                              { id: "grid", label: e_.intl.string(e_.t["8RswJG"]), value: r.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? r.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === r.C.GRID
                                      ? (0, l.jsx)(em.A, { className: eC.Kf })
                                      : (0, l.jsx)(ex.A, { className: eC.Kf }),
                              ],
                          }),
                          (0, l.jsx)(A.c, {}),
                      ],
                  })
                : null,
            $ = e.isForumLikeChannel()
                ? (0, l.jsx)(j.l, {
                      selectionMode: "single",
                      label: e_.intl.string(e_.t.gePre2),
                      description: e_.intl.string(e_.t["165cVX"]),
                      options: [
                          { id: "activity", label: e_.intl.string(e_.t.ElZtzj), value: d.T.LATEST_ACTIVITY },
                          { id: "creation", label: e_.intl.string(e_.t.w28f3F), value: d.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            Q = e.isForumLikeChannel()
                ? (0, l.jsx)(j.l, {
                      selectionMode: "single",
                      label: e_.intl.string(e_.t.Paxaug),
                      description: e_.intl.string(e_.t.DqOl8J),
                      options: [
                          { id: "some", label: e_.intl.string(e_.t.rQ0ctQ), value: o.n.MATCH_SOME },
                          { id: "all", label: e_.intl.string(e_.t.FCXUu0), value: o.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            K = O ? u : s,
            en = (0, l.jsx)(eg.A, {
                label: e_.intl.string(e_.t.tTHx98),
                helperText: this.getSlowmodeHelpText(),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            el = ee.nb.has(e.type)
                ? D
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(A.c, {}),
                              (0, l.jsxs)(v.n, {
                                  label: e_.intl.string(e_.t.O1c02q),
                                  children: [
                                      en,
                                      (0, l.jsx)(N.A, {
                                          label: e_.intl.string(e_.t["fkY5+l"]),
                                          helperText: e_.intl.string(e_.t.kdZU6H),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: ep.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !K,
                                          equidistant: !0,
                                          "aria-labelledby": eN,
                                          "aria-describedby": eS,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(A.c, {}),
                          ],
                      })
                    : en
                : null,
            ei =
                O && null != e.threadMetadata
                    ? (0, l.jsx)(w.A, {
                          page: ep.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(q.A, {
                              isDisabled: !h,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? eb.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: I ? e_.intl.string(e_.t["3aJN9M"]) : e_.intl.string(e_.t.YUXr4Z),
                          }),
                      })
                    : null,
            es =
                e.type === ep.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(S.d, {
                              label: e_.intl.string(e_.t.s2rpNf),
                              description: e_.intl.string(e_.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !h,
                          }),
                      })
                    : null,
            ea = (0, k.Gc)(e),
            eo = null != g && (0, et.wh)(g),
            ed = "none";
        ea ? (ed = "nsfw") : e.isSpoilerChannel() && (ed = "spoiler");
        let eu = [
                { value: "none", name: e_.intl.string(e_.t.OtnNJE), desc: e_.intl.string(e_.t["a5/7hX"]) },
                { value: "spoiler", name: e_.intl.string(e_.t.TvUHTb), desc: e_.intl.string(e_.t.ddWXHa) },
                { value: "nsfw", name: e_.intl.string(e_.t.Es25Yf), desc: e_.intl.string(e_.t["9eUgwR"]) },
            ],
            eh =
                L && ee.LE.has(e.type)
                    ? (0, l.jsxs)(E.B, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, l.jsx)(y.z, {
                                  label: e_.intl.string(e_.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: eu,
                                  value: ed,
                                  disabled: !s || null != e.linkedLobby || eo,
                              }),
                              null != e.linkedLobby
                                  ? (0, l.jsx)(T.p, { messageType: T.Y.WARNING, children: e_.intl.string(e_.t.EvavKG) })
                                  : null,
                          ],
                      })
                    : ee.LE.has(e.type)
                      ? (0, l.jsxs)(E.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(S.d, {
                                    label: e_.intl.string(e_.t.Es25Yf),
                                    description: e_.intl.string(e_.t["9eUgwR"]),
                                    onChange: this.handleNSFWChange,
                                    checked: (0, k.Gc)(e),
                                    disabled: !s || null != e.linkedLobby || eo,
                                }),
                                null != e.linkedLobby
                                    ? (0, l.jsx)(T.p, {
                                          messageType: T.Y.WARNING,
                                          children: e_.intl.string(e_.t.l6uSVa),
                                      })
                                    : null,
                            ],
                        })
                      : null,
            ef =
                ee.xR.has(e.type) &&
                null != g &&
                g.features.has(ep.GuildFeatures.NEWS) &&
                e.id !== g?.rulesChannelId &&
                e.id !== g?.publicUpdatesChannelId
                    ? (0, l.jsxs)(E.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(S.d, {
                                  label: e_.intl.string(e_.t.Au2b7m),
                                  description: e_.intl.format(e_.t.tI7KNX, {
                                      documentationLink: ec.A.getArticleURL(ep.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === ep.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(T.p, { messageType: T.Y.INFO, children: e_.intl.string(e_.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            ej = ee.wE.has(e.type)
                ? (0, l.jsx)(w.A, {
                      page: ep.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(q.A, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, X.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? e_.intl.string(e_.t.fyXclY)
                              : e_.intl.string(e_.t.W3Noi9),
                      }),
                  })
                : null,
            eE = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(S.d, {
                      label: e_.intl.string(e_.t.id3ozj),
                      description: e_.intl.format(e_.t.feJW1z, {
                          helpdeskArticle: ec.A.getArticleURL(ep.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(eA.lx.SUMMARIES_DISABLED) &&
                          g?.features.has(ep.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !g?.features.has(ep.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            ey = e.isMediaChannel()
                ? (0, l.jsx)(S.d, {
                      label: e_.intl.string(e_.t.u8LZOt),
                      description: e_.intl.string(e_.t.J4wCc7),
                      checked: !e.hasFlag(eA.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === ep.rbe.GUILD_CATEGORY
            ? ((i = e_.intl.string(e_.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = e_.intl.string(e_.t.uyVrTN)), (n = "post-title"))
              : O
                ? ((i = e_.intl.string(e_.t.j3XWjD)), (n = "thread-name"))
                : ((i = e_.intl.string(e_.t.PVbHDl)), (n = "channel-name"));
        let eT = M ? c : s;
        return (0, l.jsxs)(E.B, {
            gap: 24,
            children: [
                (0, l.jsx)(R.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !eT,
                    maxLength: ep.Ign,
                    trailing: eT
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(eI, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                V,
                H,
                F,
                z,
                el,
                ei,
                Z,
                $,
                Q,
                es,
                eh,
                ef,
                eE,
                ej,
                ey,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, eo.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(N.A, {
            label: e_.intl.string(e_.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > ep.gp3 ? e_.intl.format(e_.t.SbQJk5, { bitrate: ep.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [ep.hcd, ep.gp3, i],
            minValue: ep.hcd,
            maxValue: i,
            keyboardStep: ep.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            ee.k.has(e.type) &&
            (e.isGuildVocal() || $.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: ep.K3c.AUTO, name: e_.intl.string(e_.t.jjKYpu) },
            { value: ep.K3c.FULL, name: e_.intl.string(e_.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(y.z, {
            label: e_.intl.string(e_.t.jhJEJs),
            helperText: e_.intl.format(e_.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? ep.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? e_.intl.string(e_.t.XX5ciX)
            : e_.intl.formatToPlainString(e_.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? ep.RCc : ep.cSc;
        return (0, l.jsx)(N.A, {
            label: e_.intl.string(e_.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: e_.intl.format(e.isGuildStageVoice() ? e_.t.OqZI8D : e_.t["8yb3JT"], {}),
            initialValue: Math.min(e.userLimit, i),
            onValueChange: this.handleUserLimitChange,
            onValueRender: this.onRenderUserLimit,
            onMarkerRender: (e) => (0 === Math.round(e) ? "∞" : e),
            markers: [0, i],
            minValue: 0,
            maxValue: i,
            disabled: !t,
        });
    }
    renderRegionOverride(e) {
        let { regions: t, canManageChannels: n, guild: i } = this.props;
        if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != t &&
            (s = t
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({ id: e.id, label: e.name, value: e.id }))).unshift({
                id: "auto",
                label: e_.intl.string(e_.t.JEmsap),
                value: eT,
            });
        let a = e.rtcRegion ?? eT;
        return (0, l.jsx)(j.l, {
            selectionMode: "single",
            label: e_.intl.string(e_.t["Ms8bX+"]),
            description: e_.intl.string(e_.t["dbTs+z"]),
            options: s,
            value: a,
            onSelectionChange: this.handleRegionChange,
            disabled: !n,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: i } = this.props;
        return (
            (t =
                e.type === ep.rbe.GUILD_CATEGORY
                    ? (0, g.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, g.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(P.A, {
                justify: P.A.Justify.CENTER,
                className: ej.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(v.n, {
                  label: e_.intl.string(e_.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, l.jsx)(A.c, { gap: 24 }) : null,
                      this.renderVoiceBitrate(e, n),
                      this.renderVideoQualityMode(e),
                      this.renderUserLimit(e),
                      this.renderRegionOverride(e),
                      this.renderJuiceImage(e),
                  ],
              });
    }
    renderEmojiPicker = (e) => {
        let { closePopout: t } = e,
            { channel: n } = this.props;
        return (0, l.jsx)(F.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: ef.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: eE,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, eA.lx.REQUIRE_TAG, e);
        (0, M.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, Q.A)(e, !1)) : ep.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, eo.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, M.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, Q.A)(t, !0);
            e !== t && (0, M.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = t?.selectionStart ?? 0,
            l = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, n) + e + i?.substring(l);
        (0, M.fy)({ name: s }),
            setTimeout(() => {
                let l = n + e.length;
                t?.focus(), t?.setSelectionRange(l, l);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, M.fy)({ topic: W.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeRichTopic = (e, t, n) => {
        this.setState({ textTopicValue: t, richTopicValue: n }), this.handleChangeTopic(t);
    };
    handleSubmit() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    handleChangeTemplate = (e) => {
        (0, M.fy)({ template: W.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, M.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, M.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, M.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, M.fy)({ defaultTagSetting: e });
    };
    handleChangeBitrate = (e) => {
        (0, M.fy)({ bitrate: 1e3 * Math.round(e / 1e3) });
    };
    handleUserLimitChange = (e) => {
        (0, M.fy)({ userLimit: Math.round(e) });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, eA.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, M.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleNSFWChange = (e) => {
        (0, M.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, eA.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, M.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, M.fy)({ type: e ? ep.rbe.GUILD_ANNOUNCEMENT : ep.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, M.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, M.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, M.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, M.fy)({ rtcRegion: e === eT ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, M.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, M.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, M.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, eA.lx.SUMMARIES_DISABLED, !e);
        (0, M.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, eA.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, M.fy)({ flags: n });
    };
}
function eL() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, u.cf)([el.A], () => el.A.getProps()),
        a = (0, u.bG)([ea.A], () => ea.A.getRegions(t?.getGuildId() ?? null)),
        r = (0, u.bG)([K.A], () => K.A.theme),
        o = (0, u.bG)([ei.A], () => ei.A.getGuild(t?.getGuildId())),
        d = (0, $.NI)(t),
        c = (0, $.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, u.cf)([es.A], () => ({
            canManageChannels: es.A.can(ep.xBc.MANAGE_CHANNELS, t),
            canSendMessages: es.A.can(ep.xBc.SEND_MESSAGES, t),
        })),
        m = (0, D.Ay)(t),
        x = en.default.getId(),
        p = (0, Z.p)(),
        A = t?.id,
        f = (0, O.cI)(t, !1, !0),
        b = eh.A.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        _ = i.useCallback(
            (e) => {
                null != A && p.getState().setLayoutType(A, e);
            },
            [A, p],
        );
    return (0, l.jsx)(eM, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: a,
        theme: r,
        guild: o,
        canManageChannels: t?.isThread() ? d : h,
        canSendMessages: g,
        isThreadModerator: c,
        canManageThread: d,
        subsection: s,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(x),
        handleSetDefaultLayout: _,
        showChannelSummariesSettings: f,
        showSpoilerChannelSetting: b,
    });
}
