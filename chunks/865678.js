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
    b = n(432371),
    j = n(323073),
    C = n(47167),
    N = n(355622),
    v = n(408018),
    _ = n(133343),
    y = n(235986),
    S = n(915089),
    E = n(375499),
    T = n(937773),
    M = n(770335),
    I = n(7584),
    R = n(200463),
    L = n(633839),
    w = n(235640),
    O = n(268761),
    G = n(406704),
    D = n(474078),
    k = n(71397),
    B = n(544028),
    P = n(95701),
    U = n(260509),
    V = n(961350),
    H = n(863036),
    F = n(71393),
    Y = n(576705),
    W = n(717518),
    Z = n(287809),
    z = n(147036),
    J = n(927813),
    Q = n(975571),
    X = n(879631),
    q = n(532277),
    $ = n(592739),
    K = n(436387),
    ee = n(652215),
    et = n(746080),
    en = n(307731);
n(253913);
var el = n(37411),
    ei = n(985018),
    es = n(935456),
    ea = n(473169);
let er = (0, S.Ld)(),
    eo = (0, S.Ld)(),
    ed = (0, S.Ld)(),
    ec = (0, P.createChannelRecord)({ id: "1", type: ee.rbe.DM }),
    eu = {
        popoutLocation: {
            page: ee.liQ.CHANNEL_SETTINGS,
            section: ee.JJy.CHANNEL_DEFAULT_REACTION,
            object: ee.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eh = {
        popoutLocation: {
            page: ee.liQ.CHANNEL_SETTINGS,
            section: ee.JJy.CHANNEL_NAME,
            object: ee.ZSU.EMOJI_PICKER_BUTTON,
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
                    defaultSortOrder: b,
                    defaultForumLayout: j,
                    defaultTagSetting: C,
                } = e;
                e.isThread() && 0 === (t = (0, D.A)(t, !0)).length
                    ? x.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: ei.intl.string(ei.t.uXA573) },
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
                          defaultSortOrder: b,
                          defaultForumLayout: j,
                          defaultTagSetting: C,
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
                return (0, l.jsx)(T.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: en.b_.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === M.i.UNICODE && t(n.surrogates), l && i();
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
            return (0, l.jsx)(E.A, {
                ...e,
                ref: a,
                active: n,
                className: es.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eA extends i.PureComponent {
    defaultReactionButtonRef = i.createRef();
    nameInputRef = i.createRef();
    cursorPosition = 0;
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
            ? ei.intl.string(ei.t["a+1pdO"])
            : e?.isThread()
              ? ei.intl.string(ei.t.OMmNCv)
              : ei.intl.string(ei.t["HEA/DU"]);
    }
    getCooldownSliderMarker(e) {
        return (0, X.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, X.$)(e * J.A.Seconds.MINUTE, !0);
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
            } = this.props,
            p = P.Le.has(e.type),
            b = e.isForumLikeChannel(),
            C = b && e.availableTags?.every((e) => e.moderated),
            v = Z.default.getCurrentUser()?.isStaff() === !0,
            y = P.IY.has(e.type)
                ? (0, l.jsx)(m.D0$, {
                      label: b ? ei.intl.string(ei.t.yR6HwZ) : ei.intl.string(ei.t.X8jMDh),
                      children: (0, l.jsx)(_.Ay, {
                          className: a()(es.zm, { [es.r9]: !s }),
                          innerClassName: a()(es.At, { [es.r9]: !s }),
                          characterCountClassName: es.IQ,
                          maxCharacterCount: b ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: ei.intl.string(ei.t["71fbmh"]),
                          channel: ec,
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: b ? N.oU.FORUM_CHANNEL_GUIDELINES : N.oU.CHANNEL_TOPIC,
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
            S =
                b && v
                    ? (0, l.jsx)(m.fs1, {
                          label: ei.intl.string(ei.t.qk2jdY),
                          placeholder: ei.intl.string(ei.t.DDjD1H),
                          value: I.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            E = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.cGx, {}),
                          (0, l.jsx)(m.D0$, {
                              label: ei.intl.string(ei.t["P/y+sj"]),
                              description: ei.intl.string(ei.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: er,
                              children: (0, l.jsx)(L.A, { channel: e }),
                          }),
                          (0, l.jsx)(m.Checkbox, {
                              disabled: !s || C,
                              checked: e.hasFlag(et.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: ei.intl.string(ei.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            T = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.cGx, {}),
                          (0, l.jsx)(m.D0$, {
                              label: ei.intl.string(ei.t["8ao1+E"]),
                              description: ei.intl.string(ei.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: es.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: a()(es.t0, es._h),
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
                                                              text: ei.intl.string(ei.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(m.QWc, {
                                                            text: ei.intl.string(ei.t.N86XcP),
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
            M = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.cGx, {}),
                          (0, l.jsxs)("div", {
                              className: es.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(es.t0, es.WC),
                                      children: (0, l.jsx)(m.l6P, {
                                          selectionMode: "single",
                                          label: ei.intl.string(ei.t["kQvoC/"]),
                                          description: ei.intl.string(ei.t.mOSViT),
                                          options: [
                                              { id: "list", label: ei.intl.string(ei.t["4HXEZG"]), value: r.C.LIST },
                                              { id: "grid", label: ei.intl.string(ei.t["8RswJG"]), value: r.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? r.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === r.C.GRID
                                      ? (0, l.jsx)($.A, { className: es.Kf })
                                      : (0, l.jsx)(K.A, { className: es.Kf }),
                              ],
                          }),
                          (0, l.jsx)(m.cGx, {}),
                      ],
                  })
                : null,
            R = e.isForumLikeChannel()
                ? (0, l.jsx)(m.l6P, {
                      selectionMode: "single",
                      label: ei.intl.string(ei.t.gePre2),
                      description: ei.intl.string(ei.t["165cVX"]),
                      options: [
                          { id: "activity", label: ei.intl.string(ei.t.ElZtzj), value: d.T.LATEST_ACTIVITY },
                          { id: "creation", label: ei.intl.string(ei.t.w28f3F), value: d.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, l.jsx)(m.l6P, {
                      selectionMode: "single",
                      label: ei.intl.string(ei.t.Paxaug),
                      description: ei.intl.string(ei.t.DqOl8J),
                      options: [
                          { id: "some", label: ei.intl.string(ei.t.rQ0ctQ), value: o.n.MATCH_SOME },
                          { id: "all", label: ei.intl.string(ei.t.FCXUu0), value: o.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            D = p ? u : s,
            B = (0, l.jsx)(q.A, {
                label: ei.intl.string(ei.t.tTHx98),
                helperText: this.getSlowmodeHelpText(),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            V = P.nb.has(e.type)
                ? b
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(m.cGx, {}),
                              (0, l.jsxs)(m.nVY, {
                                  label: ei.intl.string(ei.t.O1c02q),
                                  children: [
                                      B,
                                      (0, l.jsx)(m.Apm, {
                                          label: ei.intl.string(ei.t["fkY5+l"]),
                                          helperText: ei.intl.string(ei.t.kdZU6H),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: ee.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !D,
                                          equidistant: !0,
                                          "aria-labelledby": eo,
                                          "aria-describedby": ed,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(m.cGx, {}),
                          ],
                      })
                    : B
                : null,
            H =
                p && null != e.threadMetadata
                    ? (0, l.jsx)(f.A, {
                          page: ee.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(k.A, {
                              isDisabled: !h,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? el.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: x ? ei.intl.string(ei.t["3aJN9M"]) : ei.intl.string(ei.t.YUXr4Z),
                          }),
                      })
                    : null,
            F =
                e.type === ee.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(m.dOG, {
                              label: ei.intl.string(ei.t.s2rpNf),
                              description: ei.intl.string(ei.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !h,
                          }),
                      })
                    : null,
            Y = null != g && (0, U.wh)(g),
            W = P.LE.has(e.type)
                ? (0, l.jsxs)(m.BJc, {
                      gap: 4,
                      children: [
                          (0, l.jsx)(m.dOG, {
                              label: ei.intl.string(ei.t.Es25Yf),
                              description: ei.intl.string(ei.t["9eUgwR"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, j.Gc)(e),
                              disabled: !s || null != e.linkedLobby || Y,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(m.po8, { messageType: m.YCn.WARNING, children: ei.intl.string(ei.t.l6uSVa) })
                              : null,
                      ],
                  })
                : null,
            z =
                P.xR.has(e.type) &&
                null != g &&
                g.features.has(ee.GuildFeatures.NEWS) &&
                e.id !== g?.rulesChannelId &&
                e.id !== g?.publicUpdatesChannelId
                    ? (0, l.jsxs)(m.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(m.dOG, {
                                  label: ei.intl.string(ei.t.Au2b7m),
                                  description: ei.intl.format(ei.t.tI7KNX, {
                                      documentationLink: Q.A.getArticleURL(ee.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === ee.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(m.po8, { messageType: m.YCn.INFO, children: ei.intl.string(ei.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            J = P.wE.has(e.type)
                ? (0, l.jsx)(f.A, {
                      page: ee.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(k.A, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, O.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? ei.intl.string(ei.t.fyXclY)
                              : ei.intl.string(ei.t.W3Noi9),
                      }),
                  })
                : null,
            X = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(m.dOG, {
                      label: ei.intl.string(ei.t.id3ozj),
                      description: ei.intl.format(ei.t.feJW1z, {
                          helpdeskArticle: Q.A.getArticleURL(ee.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(et.lx.SUMMARIES_DISABLED) &&
                          g?.features.has(ee.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !g?.features.has(ee.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            en = e.isMediaChannel()
                ? (0, l.jsx)(m.dOG, {
                      label: ei.intl.string(ei.t.u8LZOt),
                      description: ei.intl.string(ei.t.J4wCc7),
                      checked: !e.hasFlag(et.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === ee.rbe.GUILD_CATEGORY
            ? ((i = ei.intl.string(ei.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = ei.intl.string(ei.t.uyVrTN)), (n = "post-title"))
              : p
                ? ((i = ei.intl.string(ei.t.j3XWjD)), (n = "thread-name"))
                : ((i = ei.intl.string(ei.t.PVbHDl)), (n = "channel-name"));
        let ea = A ? c : s;
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
                    disabled: !ea,
                    maxLength: ee.Ign,
                    trailing: ea
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
                y,
                S,
                E,
                T,
                V,
                H,
                M,
                R,
                G,
                F,
                W,
                z,
                X,
                J,
                en,
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
            label: ei.intl.string(ei.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > ee.gp3 ? ei.intl.format(ei.t.SbQJk5, { bitrate: ee.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [ee.hcd, ee.gp3, i],
            minValue: ee.hcd,
            maxValue: i,
            keyboardStep: ee.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            P.k.has(e.type) &&
            (e.isGuildVocal() || G.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: ee.K3c.AUTO, name: ei.intl.string(ei.t.jjKYpu) },
            { value: ee.K3c.FULL, name: ei.intl.string(ei.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(m.z6M, {
            label: ei.intl.string(ei.t.jhJEJs),
            helperText: ei.intl.format(ei.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? ee.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? ei.intl.string(ei.t.XX5ciX)
            : ei.intl.formatToPlainString(ei.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? ee.RCc : ee.cSc;
        return (0, l.jsx)(m.Apm, {
            label: ei.intl.string(ei.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: ei.intl.format(e.isGuildStageVoice() ? ei.t.OqZI8D : ei.t["8yb3JT"], {}),
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
                label: ei.intl.string(ei.t.JEmsap),
                value: eg,
            });
        let a = e.rtcRegion ?? eg;
        return (0, l.jsx)(m.l6P, {
            selectionMode: "single",
            label: ei.intl.string(ei.t["Ms8bX+"]),
            description: ei.intl.string(ei.t["dbTs+z"]),
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
                e.type === ee.rbe.GUILD_CATEGORY
                    ? (0, g.Mw)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, g.Mw)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(y.A, {
                justify: y.A.Justify.CENTER,
                className: ea.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(m.nVY, {
                  label: ei.intl.string(ei.t["/dp6yY"]),
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
        return (0, l.jsx)(T.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: en.b_.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: eu,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, et.lx.REQUIRE_TAG, e);
        (0, A.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, D.A)(e, !1)) : ee.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, z.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, A.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, D.A)(t, !0);
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
        (0, A.fy)({ topic: I.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, A.fy)({ template: I.Ay.translateInlineEmojiToSurrogates(e) });
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
    handleNSFWChange = (e) => {
        (0, A.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, et.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, A.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, A.fy)({ type: e ? ee.rbe.GUILD_ANNOUNCEMENT : ee.rbe.GUILD_TEXT });
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
        let n = (0, c.lA)(t.flags, et.lx.SUMMARIES_DISABLED, !e);
        (0, A.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, et.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
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
            canManageChannels: Y.A.can(ee.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Y.A.can(ee.xBc.SEND_MESSAGES, t),
        })),
        m = (0, C.Ay)(t),
        x = V.default.getId(),
        A = (0, R.p)(),
        p = t?.id,
        f = (0, b.cI)(t, !1, !0),
        j = i.useCallback(
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
        handleSetDefaultLayout: j,
        showChannelSummariesSettings: f,
    });
}
