"use strict";
n.d(t, { A: () => ep, w: () => em }), n(938796), n(667532);
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
    g = n(582754),
    m = n(397927),
    x = n(73153),
    A = n(435183),
    p = n(534963),
    f = n(820284),
    C = n(432371),
    b = n(323073),
    j = n(47167),
    N = n(355622),
    v = n(408018),
    _ = n(133343),
    y = n(235986),
    T = n(915089),
    E = n(375499),
    S = n(937773),
    I = n(770335),
    M = n(7584),
    R = n(200463),
    L = n(633839),
    w = n(235640),
    O = n(268761),
    G = n(406704),
    k = n(474078),
    D = n(71397),
    B = n(544028),
    U = n(95701),
    P = n(260509),
    V = n(961350),
    H = n(863036),
    F = n(71393),
    Y = n(576705),
    W = n(717518),
    J = n(287809),
    z = n(147036),
    Z = n(927813),
    Q = n(975571),
    X = n(879631),
    q = n(969574),
    $ = n(532277),
    K = n(592739),
    ee = n(436387),
    et = n(652215),
    en = n(746080),
    el = n(307731);
n(253913);
var ei = n(37411),
    es = n(985018),
    ea = n(263107),
    er = n(818050);
let eo = (0, T.Ld)(),
    ed = (0, T.Ld)(),
    ec = (0, T.Ld)(),
    eu = {
        popoutLocation: {
            page: et.liQ.CHANNEL_SETTINGS,
            section: et.JJy.CHANNEL_DEFAULT_REACTION,
            object: et.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eh = {
        popoutLocation: {
            page: et.liQ.CHANNEL_SETTINGS,
            section: et.JJy.CHANNEL_NAME,
            object: et.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eg = "AUTOMATIC_RTC_REGION",
    em = u.Ay.connectStores([H.A], () => {
        let { channel: e, submitting: t } = H.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, A.Ts)(e.id);
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
                    defaultReactionEmoji: p,
                    availableTags: f,
                    defaultSortOrder: C,
                    defaultForumLayout: b,
                    defaultTagSetting: j,
                } = e;
                e.isThread() && 0 === (t = (0, k.A)(t, !0)).length
                    ? x.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: es.intl.string(es.t.uXA573) },
                      })
                    : (0, A.RT)(e.id, {
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
                          defaultReactionEmoji: p,
                          availableTags: f,
                          defaultSortOrder: C,
                          defaultForumLayout: b,
                          defaultTagSetting: j,
                      });
            },
        };
    })(h.A);
function ex(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(S.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: el.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === I.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eh,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(m.YNO, {
        targetElementRef: a,
        renderPopout: r,
        animation: m.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(E.A, { ...e, ref: a, active: n, className: ea.Z8, tabIndex: 0 });
        },
    });
}
class eA extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, U.createChannelRecord)({
                    id: "1",
                    type: et.rbe.DM,
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
            richTopicValue: (0, v.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && p.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, v.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? es.intl.string(es.t["a+1pdO"])
            : e?.isThread()
              ? es.intl.string(es.t.OMmNCv)
              : es.intl.string(es.t["HEA/DU"]);
    }
    getCooldownSliderMarker(e) {
        return (0, X.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, X.$)(e * Z.A.Seconds.MINUTE, !0);
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
                isForumPost: x,
                isOwner: A,
                showSpoilerChannelSetting: p,
            } = this.props,
            C = U.Le.has(e.type),
            j = e.isForumLikeChannel(),
            v = j && e.availableTags?.every((e) => e.moderated),
            y = J.default.getCurrentUser()?.isStaff() === !0,
            T = U.IY.has(e.type)
                ? (0, l.jsx)(m.D0$, {
                      label: j ? es.intl.string(es.t.yR6HwZ) : es.intl.string(es.t.X8jMDh),
                      children: (0, l.jsx)(_.Ay, {
                          className: a()(ea.zm, { [ea.r9]: !s }),
                          innerClassName: a()(ea.At, { [ea.r9]: !s }),
                          characterCountClassName: ea.IQ,
                          maxCharacterCount: j ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: es.intl.string(es.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? g?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: j ? N.oU.FORUM_CHANNEL_GUIDELINES : N.oU.CHANNEL_TOPIC,
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
            E =
                j && y
                    ? (0, l.jsx)(m.fs1, {
                          label: es.intl.string(es.t.qk2jdY),
                          placeholder: es.intl.string(es.t.DDjD1H),
                          value: M.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            S = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.cGx, {}),
                          (0, l.jsx)(m.D0$, {
                              label: es.intl.string(es.t["P/y+sj"]),
                              description: es.intl.string(es.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: eo,
                              children: (0, l.jsx)(L.A, { channel: e }),
                          }),
                          (0, l.jsx)(m.Checkbox, {
                              disabled: !s || v,
                              checked: e.hasFlag(en.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: es.intl.string(es.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            I = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.cGx, {}),
                          (0, l.jsx)(m.D0$, {
                              label: es.intl.string(es.t["8ao1+E"]),
                              description: es.intl.string(es.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: ea.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: a()(ea.t0, ea._h),
                                          children: (0, l.jsxs)(m.ButtonGroup, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(m.YNO, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: m.YNO.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(m.Button, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: es.intl.string(es.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(m.QWc, {
                                                            text: es.intl.string(es.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(w.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            R = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.cGx, {}),
                          (0, l.jsxs)("div", {
                              className: ea.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(ea.t0, ea.WC),
                                      children: (0, l.jsx)(m.l6P, {
                                          selectionMode: "single",
                                          label: es.intl.string(es.t["kQvoC/"]),
                                          description: es.intl.string(es.t.mOSViT),
                                          options: [
                                              { id: "list", label: es.intl.string(es.t["4HXEZG"]), value: r.C.LIST },
                                              { id: "grid", label: es.intl.string(es.t["8RswJG"]), value: r.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? r.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === r.C.GRID
                                      ? (0, l.jsx)(K.A, { className: ea.Kf })
                                      : (0, l.jsx)(ee.A, { className: ea.Kf }),
                              ],
                          }),
                          (0, l.jsx)(m.cGx, {}),
                      ],
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, l.jsx)(m.l6P, {
                      selectionMode: "single",
                      label: es.intl.string(es.t.gePre2),
                      description: es.intl.string(es.t["165cVX"]),
                      options: [
                          { id: "activity", label: es.intl.string(es.t.ElZtzj), value: d.T.LATEST_ACTIVITY },
                          { id: "creation", label: es.intl.string(es.t.w28f3F), value: d.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            k = e.isForumLikeChannel()
                ? (0, l.jsx)(m.l6P, {
                      selectionMode: "single",
                      label: es.intl.string(es.t.Paxaug),
                      description: es.intl.string(es.t.DqOl8J),
                      options: [
                          { id: "some", label: es.intl.string(es.t.rQ0ctQ), value: o.n.MATCH_SOME },
                          { id: "all", label: es.intl.string(es.t.FCXUu0), value: o.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            B = C ? u : s,
            V = (0, l.jsx)($.A, {
                label: es.intl.string(es.t.tTHx98),
                helperText: this.getSlowmodeHelpText(),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            H = U.nb.has(e.type)
                ? j
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(m.cGx, {}),
                              (0, l.jsxs)(m.nVY, {
                                  label: es.intl.string(es.t.O1c02q),
                                  children: [
                                      V,
                                      (0, l.jsx)(m.Apm, {
                                          label: es.intl.string(es.t["fkY5+l"]),
                                          helperText: es.intl.string(es.t.kdZU6H),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: et.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !B,
                                          equidistant: !0,
                                          "aria-labelledby": ed,
                                          "aria-describedby": ec,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(m.cGx, {}),
                          ],
                      })
                    : V
                : null,
            F =
                C && null != e.threadMetadata
                    ? (0, l.jsx)(f.A, {
                          page: et.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(D.A, {
                              isDisabled: !h,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? ei.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: x ? es.intl.string(es.t["3aJN9M"]) : es.intl.string(es.t.YUXr4Z),
                          }),
                      })
                    : null,
            Y =
                e.type === et.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(m.dOG, {
                              label: es.intl.string(es.t.s2rpNf),
                              description: es.intl.string(es.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !h,
                          }),
                      })
                    : null,
            W = (0, b.Gc)(e),
            z = null != g && (0, P.wh)(g),
            Z = "none";
        W ? (Z = "nsfw") : e.isSpoilerChannel() && (Z = "spoiler");
        let X = [
                { value: "none", name: es.intl.string(es.t.OtnNJE), desc: es.intl.string(es.t["a5/7hX"]) },
                { value: "spoiler", name: es.intl.string(es.t.TvUHTb), desc: es.intl.string(es.t.ddWXHa) },
                { value: "nsfw", name: es.intl.string(es.t.Es25Yf), desc: es.intl.string(es.t["9eUgwR"]) },
            ],
            q =
                p && U.LE.has(e.type)
                    ? (0, l.jsxs)(m.BJc, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, l.jsx)(m.z6M, {
                                  label: es.intl.string(es.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: X,
                                  value: Z,
                                  disabled: !s || null != e.linkedLobby || z,
                              }),
                              null != e.linkedLobby
                                  ? (0, l.jsx)(m.po8, {
                                        messageType: m.YCn.WARNING,
                                        children: es.intl.string(es.t.EvavKG),
                                    })
                                  : null,
                          ],
                      })
                    : U.LE.has(e.type)
                      ? (0, l.jsxs)(m.BJc, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(m.dOG, {
                                    label: es.intl.string(es.t.Es25Yf),
                                    description: es.intl.string(es.t["9eUgwR"]),
                                    onChange: this.handleNSFWChange,
                                    checked: (0, b.Gc)(e),
                                    disabled: !s || null != e.linkedLobby || z,
                                }),
                                null != e.linkedLobby
                                    ? (0, l.jsx)(m.po8, {
                                          messageType: m.YCn.WARNING,
                                          children: es.intl.string(es.t.l6uSVa),
                                      })
                                    : null,
                            ],
                        })
                      : null,
            el =
                U.xR.has(e.type) &&
                null != g &&
                g.features.has(et.GuildFeatures.NEWS) &&
                e.id !== g?.rulesChannelId &&
                e.id !== g?.publicUpdatesChannelId
                    ? (0, l.jsxs)(m.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(m.dOG, {
                                  label: es.intl.string(es.t.Au2b7m),
                                  description: es.intl.format(es.t.tI7KNX, {
                                      documentationLink: Q.A.getArticleURL(et.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === et.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(m.po8, { messageType: m.YCn.INFO, children: es.intl.string(es.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            er = U.wE.has(e.type)
                ? (0, l.jsx)(f.A, {
                      page: et.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(D.A, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, O.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? es.intl.string(es.t.fyXclY)
                              : es.intl.string(es.t.W3Noi9),
                      }),
                  })
                : null,
            eu = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(m.dOG, {
                      label: es.intl.string(es.t.id3ozj),
                      description: es.intl.format(es.t.feJW1z, {
                          helpdeskArticle: Q.A.getArticleURL(et.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(en.lx.SUMMARIES_DISABLED) &&
                          g?.features.has(et.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !g?.features.has(et.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            eh = e.isMediaChannel()
                ? (0, l.jsx)(m.dOG, {
                      label: es.intl.string(es.t.u8LZOt),
                      description: es.intl.string(es.t.J4wCc7),
                      checked: !e.hasFlag(en.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === et.rbe.GUILD_CATEGORY
            ? ((i = es.intl.string(es.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = es.intl.string(es.t.uyVrTN)), (n = "post-title"))
              : C
                ? ((i = es.intl.string(es.t.j3XWjD)), (n = "thread-name"))
                : ((i = es.intl.string(es.t.PVbHDl)), (n = "channel-name"));
        let eg = A ? c : s;
        return (0, l.jsxs)(m.BJc, {
            gap: 24,
            children: [
                (0, l.jsx)(m.ksK, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !eg,
                    maxLength: et.Ign,
                    trailing: eg
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(ex, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                T,
                E,
                S,
                I,
                H,
                F,
                R,
                G,
                k,
                Y,
                q,
                el,
                eu,
                er,
                eh,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, z.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(m.Apm, {
            label: es.intl.string(es.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > et.gp3 ? es.intl.format(es.t.SbQJk5, { bitrate: et.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [et.hcd, et.gp3, i],
            minValue: et.hcd,
            maxValue: i,
            keyboardStep: et.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            U.k.has(e.type) &&
            (e.isGuildVocal() || G.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: et.K3c.AUTO, name: es.intl.string(es.t.jjKYpu) },
            { value: et.K3c.FULL, name: es.intl.string(es.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(m.z6M, {
            label: es.intl.string(es.t.jhJEJs),
            helperText: es.intl.format(es.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? et.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? es.intl.string(es.t.XX5ciX)
            : es.intl.formatToPlainString(es.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? et.RCc : et.cSc;
        return (0, l.jsx)(m.Apm, {
            label: es.intl.string(es.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: es.intl.format(e.isGuildStageVoice() ? es.t.OqZI8D : es.t["8yb3JT"], {}),
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
                label: es.intl.string(es.t.JEmsap),
                value: eg,
            });
        let a = e.rtcRegion ?? eg;
        return (0, l.jsx)(m.l6P, {
            selectionMode: "single",
            label: es.intl.string(es.t["Ms8bX+"]),
            description: es.intl.string(es.t["dbTs+z"]),
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
                e.type === et.rbe.GUILD_CATEGORY
                    ? (0, g.Mw)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, g.Mw)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(y.A, {
                justify: y.A.Justify.CENTER,
                className: er.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(m.nVY, {
                  label: es.intl.string(es.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, l.jsx)(m.cGx, { gap: 24 }) : null,
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
        return (0, l.jsx)(S.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: el.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: eu,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, en.lx.REQUIRE_TAG, e);
        (0, A.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, k.A)(e, !1)) : et.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, z.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, A.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, k.A)(t, !0);
            e !== t && (0, A.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = t?.selectionStart ?? 0,
            l = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, n) + e + i?.substring(l);
        (0, A.fy)({ name: s }),
            setTimeout(() => {
                let l = n + e.length;
                t?.focus(), t?.setSelectionRange(l, l);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, A.fy)({ topic: M.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, A.fy)({ template: M.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, A.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, A.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, A.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, A.fy)({ defaultTagSetting: e });
    };
    handleChangeBitrate = (e) => {
        (0, A.fy)({ bitrate: 1e3 * Math.round(e / 1e3) });
    };
    handleUserLimitChange = (e) => {
        (0, A.fy)({ userLimit: Math.round(e) });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, en.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, A.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleNSFWChange = (e) => {
        (0, A.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, en.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, A.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, A.fy)({ type: e ? et.rbe.GUILD_ANNOUNCEMENT : et.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, A.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, A.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, A.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, A.fy)({ rtcRegion: e === eg ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, A.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, A.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, A.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, en.lx.SUMMARIES_DISABLED, !e);
        (0, A.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, en.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, A.fy)({ flags: n });
    };
}
function ep() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, u.cf)([H.A], () => H.A.getProps()),
        a = (0, u.bG)([W.A], () => W.A.getRegions(t?.getGuildId() ?? null)),
        r = (0, u.bG)([B.A], () => B.A.theme),
        o = (0, u.bG)([F.A], () => F.A.getGuild(t?.getGuildId())),
        d = (0, G.NI)(t),
        c = (0, G.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, u.cf)([Y.A], () => ({
            canManageChannels: Y.A.can(et.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Y.A.can(et.xBc.SEND_MESSAGES, t),
        })),
        m = (0, j.Ay)(t),
        x = V.default.getId(),
        A = (0, R.p)(),
        p = t?.id,
        f = (0, C.cI)(t, !1, !0),
        b = q.A.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        N = i.useCallback(
            (e) => {
                null != p && A.getState().setLayoutType(p, e);
            },
            [p, A],
        );
    return (0, l.jsx)(eA, {
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
        handleSetDefaultLayout: N,
        showChannelSummariesSettings: f,
        showSpoilerChannelSetting: b,
    });
}
