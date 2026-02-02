n.d(t, {
    A: () => eC,
    w: () => ey,
}),
    n(938796),
    n(667532);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    c = n(371444),
    u = n(392421),
    d = n(602137),
    h = n(665260),
    g = n(311907),
    m = n(36525),
    p = n(582754),
    f = n(397927),
    b = n(435183),
    x = n(534963),
    j = n(820284),
    A = n(213464),
    y = n(432371),
    v = n(323073),
    O = n(47167),
    C = n(355622),
    N = n(408018),
    S = n(133343),
    E = n(235986),
    _ = n(915089),
    T = n(375499),
    w = n(937773),
    M = n(770335),
    R = n(7584),
    I = n(422844),
    L = n(856220),
    P = n(235640),
    D = n(268761),
    k = n(406704),
    G = n(474078),
    B = n(71397),
    U = n(544028),
    V = n(95701),
    H = n(260509),
    F = n(961350),
    W = n(863036),
    Y = n(71393),
    Z = n(576705),
    J = n(717518),
    z = n(287809),
    Q = n(147036),
    X = n(405269),
    q = n(927813),
    K = n(975571),
    $ = n(879631),
    ee = n(532277),
    et = n(592739),
    en = n(436387),
    el = n(652215),
    ei = n(746080),
    er = n(307731);
n(253913);
var es = n(37411),
    ea = n(985018),
    eo = n(935456),
    ec = n(473169);

function eu(e, t, n) {
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

function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                eu(e, t, n[t]);
            });
    }
    return e;
}

function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eg = (0, _.Ld)(),
    em = (0, _.Ld)(),
    ep = (0, _.Ld)(),
    ef = (0, V.createChannelRecord)({
        id: "1",
        type: el.rbe.DM,
    }),
    eb = {
        popoutLocation: {
            page: el.liQ.CHANNEL_SETTINGS,
            section: el.JJy.CHANNEL_DEFAULT_REACTION,
            object: el.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ex = {
        popoutLocation: {
            page: el.liQ.CHANNEL_SETTINGS,
            section: el.JJy.CHANNEL_NAME,
            object: el.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ej = "AUTOMATIC_RTC_REGION",
    eA = {
        breakingChangeDate: (0, X.i$)(o()(el.X30), "LL"),
        helpCenterLink: K.A.getArticleURL(el.MVz.SLOWMODE),
    },
    ey = g.Ay.connectStores([W.A], () => {
        let { channel: e, submitting: t } = W.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, b.Ts)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: l,
                    bitrate: i,
                    userLimit: r,
                    nsfw: s,
                    flags: a,
                    rateLimitPerUser: o,
                    defaultThreadRateLimitPerUser: c,
                    threadMetadata: u,
                    defaultAutoArchiveDuration: d,
                    template: h,
                    rtcRegion: g,
                    videoQualityMode: m,
                    defaultReactionEmoji: p,
                    availableTags: f,
                    defaultSortOrder: x,
                    defaultForumLayout: j,
                    defaultTagSetting: A,
                } = e;
                e.isThread() && (t = (0, G.A)(t, !0)),
                    (0, b.RT)(e.id, {
                        name: t,
                        type: n,
                        topic: l,
                        bitrate: i,
                        userLimit: r,
                        nsfw: s,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: c,
                        autoArchiveDuration: null == u ? void 0 : u.autoArchiveDuration,
                        locked: null == u ? void 0 : u.locked,
                        invitable: null == u ? void 0 : u.invitable,
                        defaultAutoArchiveDuration: d,
                        template: h,
                        rtcRegion: g,
                        videoQualityMode: m,
                        defaultReactionEmoji: p,
                        availableTags: f,
                        defaultSortOrder: x,
                        defaultForumLayout: j,
                        defaultTagSetting: A,
                    });
            },
        };
    })(m.A);

function ev(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = i.useRef(null),
        a = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(w.A, {
                    channel: n,
                    guildId: r,
                    pickerIntention: er.b_.CHANNEL_NAME,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === M.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: ex,
                });
            },
            [n, r, t],
        );
    return (0, l.jsx)(f.YNO, {
        targetElementRef: s,
        renderPopout: a,
        animation: f.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(
                T.A,
                eh(ed({}, e), {
                    ref: s,
                    active: n,
                    className: eo.Z8,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10,
                        },
                    },
                }),
            );
        },
    });
}
class eO extends i.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && x.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, l, i;
        let r = null != (t = null == (l = this.props.channel) ? void 0 : l.topic) ? t : "";
        (null != (n = null == (i = e.channel) ? void 0 : i.topic) ? n : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, N.x7)(r),
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return (null == e ? void 0 : e.isForumLikeChannel())
            ? ea.intl.format(ea.t.EIQq9v, eA)
            : (null == e ? void 0 : e.isThread())
              ? ea.intl.format(ea.t["8sTC8t"], eA)
              : ea.intl.format(ea.t.wW2MWu, eA);
    }
    getCooldownSliderMarker(e) {
        return (0, $.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, $.$)(e * q.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, i, r, a, o, h;
        let g,
            m,
            {
                canManageChannels: p,
                canSendMessages: b,
                isThreadModerator: x,
                canManageThread: A,
                guild: y,
                isForumPost: O,
                isOwner: N,
                showAdvancedSlowModeSetting: E,
            } = this.props,
            _ = V.Le.has(e.type),
            T = e.isForumLikeChannel(),
            w = T && (null == (o = e.availableTags) ? void 0 : o.every((e) => e.moderated)),
            M = (null == (h = z.default.getCurrentUser()) ? void 0 : h.isStaff()) === !0,
            I = V.IY.has(e.type)
                ? (0, l.jsx)(f.D0$, {
                      label: T ? ea.intl.string(ea.t.yR6HwZ) : ea.intl.string(ea.t.X8jMDh),
                      children: (0, l.jsx)(S.Ay, {
                          className: s()(eo.zm, {
                              [eo.r9]: !p,
                          }),
                          innerClassName: s()(eo.At, {
                              [eo.r9]: !p,
                          }),
                          characterCountClassName: eo.IQ,
                          maxCharacterCount: T ? ei.U9 : ei.s4,
                          onChange: this.handleChangeRichTopic,
                          placeholder: ea.intl.string(ea.t["71fbmh"]),
                          channel: ef,
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: T ? C.oU.FORUM_CHANNEL_GUIDELINES : C.oU.CHANNEL_TOPIC,
                          onFocus: () => {
                              this.setState({
                                  topicFocused: !0,
                              });
                          },
                          onBlur: () => {
                              this.setState({
                                  topicFocused: !1,
                              });
                          },
                          focused: this.state.topicFocused,
                          onSubmit: this.handleSubmit,
                          disableThemedBackground: !0,
                          error: this.getError("topic"),
                          disabled: !p,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            k =
                T && M
                    ? (0, l.jsx)(f.fs1, {
                          label: ea.intl.string(ea.t.qk2jdY),
                          placeholder: ea.intl.string(ea.t.DDjD1H),
                          value: R.Ay.translateSurrogatesToInlineEmoji(null != (n = e.template) ? n : ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !p,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            G = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(f.cGx, {}),
                          (0, l.jsx)(f.D0$, {
                              label: ea.intl.string(ea.t["P/y+sj"]),
                              description: ea.intl.string(ea.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: eg,
                              children: (0, l.jsx)(L.A, {
                                  channel: e,
                              }),
                          }),
                          (0, l.jsx)(f.Checkbox, {
                              disabled: !p || w,
                              checked: e.hasFlag(ei.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: ea.intl.string(ea.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            U = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(f.cGx, {}),
                          (0, l.jsx)(f.D0$, {
                              label: ea.intl.string(ea.t["8ao1+E"]),
                              description: ea.intl.string(ea.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: eo.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: s()(eo.t0, eo._h),
                                          children: (0, l.jsxs)(f.ButtonGroup, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(f.YNO, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: f.YNO.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(
                                                              f.Button,
                                                              eh(ed({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  text: ea.intl.string(ea.t["59QgaD"]),
                                                                  disabled: !p,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                              }),
                                                          ),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(f.QWc, {
                                                            text: ea.intl.string(ea.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(P.A, {
                                          reactionEmoji: e.defaultReactionEmoji,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            F = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(f.cGx, {}),
                          (0, l.jsxs)("div", {
                              className: eo.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: s()(eo.t0, eo.WC),
                                      children: (0, l.jsx)(f.l6P, {
                                          selectionMode: "single",
                                          label: ea.intl.string(ea.t["kQvoC/"]),
                                          description: ea.intl.string(ea.t.mOSViT),
                                          options: [
                                              {
                                                  id: "list",
                                                  label: ea.intl.string(ea.t["4HXEZG"]),
                                                  value: c.C.LIST,
                                              },
                                              {
                                                  id: "grid",
                                                  label: ea.intl.string(ea.t["8RswJG"]),
                                                  value: c.C.GRID,
                                              },
                                          ],
                                          value: null != (i = e.defaultForumLayout) ? i : c.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === c.C.GRID
                                      ? (0, l.jsx)(et.A, {
                                            className: eo.Kf,
                                        })
                                      : (0, l.jsx)(en.A, {
                                            className: eo.Kf,
                                        }),
                              ],
                          }),
                          (0, l.jsx)(f.cGx, {}),
                      ],
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, l.jsx)(f.l6P, {
                      selectionMode: "single",
                      label: ea.intl.string(ea.t.gePre2),
                      description: ea.intl.string(ea.t["165cVX"]),
                      options: [
                          {
                              id: "activity",
                              label: ea.intl.string(ea.t.ElZtzj),
                              value: d.T.LATEST_ACTIVITY,
                          },
                          {
                              id: "creation",
                              label: ea.intl.string(ea.t.w28f3F),
                              value: d.T.CREATION_DATE,
                          },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            Y = e.isForumLikeChannel()
                ? (0, l.jsx)(f.l6P, {
                      selectionMode: "single",
                      label: ea.intl.string(ea.t.Paxaug),
                      description: ea.intl.string(ea.t.DqOl8J),
                      options: [
                          {
                              id: "some",
                              label: ea.intl.string(ea.t.rQ0ctQ),
                              value: u.n.MATCH_SOME,
                          },
                          {
                              id: "all",
                              label: ea.intl.string(ea.t.FCXUu0),
                              value: u.n.MATCH_ALL,
                          },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            Z = _ ? x : p,
            J =
                !0 === E
                    ? (0, l.jsx)(ee.A, {
                          label: ea.intl.string(ea.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          channel: e,
                          onChange: this.handleChangeSlowmode,
                      })
                    : (0, l.jsx)(f.Apm, {
                          label: ea.intl.string(ea.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          initialValue: e.rateLimitPerUser,
                          markers: el.s_7,
                          stickToMarkers: !0,
                          onValueChange: this.handleChangeSlowmode,
                          onMarkerRender: this.getCooldownSliderMarker,
                          disabled: !Z,
                          equidistant: !0,
                          "aria-labelledby": em,
                          "aria-describedby": ep,
                      }),
            Q = V.nb.has(e.type)
                ? T
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(f.cGx, {}),
                              (0, l.jsxs)(f.nVY, {
                                  label: ea.intl.string(ea.t.O1c02q),
                                  children: [
                                      J,
                                      (0, l.jsx)(f.Apm, {
                                          label: ea.intl.string(ea.t["fkY5+l"]),
                                          helperText: ea.intl.format(ea.t.nZSuEj, eA),
                                          initialValue: null != (r = e.defaultThreadRateLimitPerUser) ? r : 0,
                                          markers: el.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !Z,
                                          equidistant: !0,
                                          "aria-labelledby": em,
                                          "aria-describedby": ep,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(f.cGx, {}),
                          ],
                      })
                    : J
                : null,
            X =
                _ && null != e.threadMetadata
                    ? (0, l.jsx)(j.A, {
                          page: el.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(B.A, {
                              isDisabled: !A,
                              autoArchiveDuration: null != (a = e.threadMetadata.autoArchiveDuration) ? a : es.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: O ? ea.intl.string(ea.t["3aJN9M"]) : ea.intl.string(ea.t.YUXr4Z),
                          }),
                      })
                    : null,
            q =
                e.type === el.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(f.dOG, {
                              label: ea.intl.string(ea.t.s2rpNf),
                              description: ea.intl.string(ea.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !A,
                          }),
                      })
                    : null,
            $ = null != y && (0, H.wh)(y),
            er = V.LE.has(e.type)
                ? (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(f.dOG, {
                              label: ea.intl.string(ea.t.Es25Yf),
                              description: ea.intl.string(ea.t["9eUgwR"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, v.Gc)(e),
                              disabled: !p || null != e.linkedLobby || $,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(f.po8, {
                                    messageType: f.YCn.WARNING,
                                    children: ea.intl.string(ea.t.l6uSVa),
                                })
                              : null,
                      ],
                  })
                : null,
            ec =
                V.xR.has(e.type) &&
                null != y &&
                y.features.has(el.GuildFeatures.NEWS) &&
                e.id !== (null == y ? void 0 : y.rulesChannelId) &&
                e.id !== (null == y ? void 0 : y.publicUpdatesChannelId)
                    ? (0, l.jsxs)(f.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(f.dOG, {
                                  label: ea.intl.string(ea.t.Au2b7m),
                                  description: ea.intl.format(ea.t.tI7KNX, {
                                      documentationLink: K.A.getArticleURL(el.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === el.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !p,
                              }),
                              (0, l.jsx)(f.po8, {
                                  messageType: f.YCn.INFO,
                                  children: ea.intl.string(ea.t["2Ab4Id"]),
                              }),
                          ],
                      })
                    : null,
            eu = V.wE.has(e.type)
                ? (0, l.jsx)(j.A, {
                      page: el.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(B.A, {
                          isDisabled: !p,
                          autoArchiveDuration: (0, D.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? ea.intl.string(ea.t.fyXclY)
                              : ea.intl.string(ea.t.W3Noi9),
                      }),
                  })
                : null,
            eb = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(f.dOG, {
                      label: ea.intl.string(ea.t.id3ozj),
                      description: ea.intl.format(ea.t.feJW1z, {
                          helpdeskArticle: K.A.getArticleURL(el.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(ei.lx.SUMMARIES_DISABLED) &&
                          (null == y ? void 0 : y.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                      disabled:
                          !p || !(null == y ? void 0 : y.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                  })
                : null,
            ex = e.isMediaChannel()
                ? (0, l.jsx)(f.dOG, {
                      label: ea.intl.string(ea.t.u8LZOt),
                      description: ea.intl.string(ea.t.J4wCc7),
                      checked: !e.hasFlag(ei.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !p,
                  })
                : null;
        e.type === el.rbe.GUILD_CATEGORY
            ? ((m = ea.intl.string(ea.t.OCAkGP)), (g = "category-name"))
            : e.isForumPost()
              ? ((m = ea.intl.string(ea.t.uyVrTN)), (g = "post-title"))
              : _
                ? ((m = ea.intl.string(ea.t.j3XWjD)), (g = "thread-name"))
                : ((m = ea.intl.string(ea.t.PVbHDl)), (g = "channel-name"));
        let ej = N ? b : p;
        return (0, l.jsxs)(f.BJc, {
            gap: 24,
            children: [
                (0, l.jsx)(f.ksK, {
                    label: m,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: g,
                    autoFocus: !0,
                    disabled: !ej,
                    maxLength: el.Ign,
                    trailing: ej
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(ev, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: null == e ? void 0 : e.guild_id,
                              }),
                          }
                        : void 0,
                }),
                I,
                k,
                G,
                U,
                Q,
                X,
                F,
                W,
                Y,
                q,
                er,
                ec,
                eb,
                eu,
                ex,
            ],
        });
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1e3), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, Q.Jz)(t, e),
            r = this.getError("bitrate");
        return (0, l.jsx)(f.Apm, {
            label: ea.intl.string(ea.t.w2d0vU),
            errorMessage: "" !== r ? r : void 0,
            helperText:
                i > el.gp3
                    ? ea.intl.format(ea.t.SbQJk5, {
                          bitrate: el.gp3 / 1e3,
                      })
                    : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [el.hcd, el.gp3, i],
            minValue: el.hcd,
            maxValue: i,
            keyboardStep: el.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            V.k.has(e.type) &&
            (e.isGuildVocal() ||
                k.io.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "9b50bd_1",
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = [
            {
                value: el.K3c.AUTO,
                name: ea.intl.string(ea.t.jjKYpu),
            },
            {
                value: el.K3c.FULL,
                name: ea.intl.string(ea.t["7jOoJE"]),
            },
        ];
        return (0, l.jsx)(f.z6M, {
            label: ea.intl.string(ea.t.jhJEJs),
            helperText: ea.intl.format(ea.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: i,
            value: null != (t = e.videoQualityMode) ? t : el.K3c.AUTO,
            disabled: !n,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? ea.intl.string(ea.t.XX5ciX)
            : ea.intl.formatToPlainString(ea.t["3uHFUR"], {
                  num: e,
              });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? el.RCc : el.cSc;
        return (0, l.jsx)(f.Apm, {
            label: ea.intl.string(ea.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: ea.intl.format(e.isGuildStageVoice() ? ea.t.OqZI8D : ea.t["8yb3JT"], {}),
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
        var t;
        let { regions: n, canManageChannels: i, guild: r } = this.props;
        if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                }))).unshift({
                id: "auto",
                label: ea.intl.string(ea.t.JEmsap),
                value: ej,
            });
        let a = null != (t = e.rtcRegion) ? t : ej;
        return (0, l.jsx)(f.l6P, {
            selectionMode: "single",
            label: ea.intl.string(ea.t["Ms8bX+"]),
            description: ea.intl.string(ea.t["dbTs+z"]),
            options: s,
            value: a,
            onSelectionChange: this.handleRegionChange,
            disabled: !i,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: i } = this.props;
        return (
            (t =
                e.type === el.rbe.GUILD_CATEGORY
                    ? (0, p.Mw)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, p.Mw)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(E.A, {
                justify: E.A.Justify.CENTER,
                className: ec.o9,
                children: (0, l.jsx)("img", {
                    alt: "",
                    width: 280,
                    height: 165,
                    src: t,
                }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(f.nVY, {
                  label: ea.intl.string(ea.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings()
                          ? (0, l.jsx)(f.cGx, {
                                gap: 24,
                            })
                          : null,
                      this.renderVoiceBitrate(e, n),
                      this.renderVideoQualityMode(e),
                      this.renderUserLimit(e),
                      this.renderRegionOverride(e),
                      this.renderJuiceImage(e),
                  ],
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            eu(this, "defaultReactionButtonRef", i.createRef()),
            eu(this, "nameInputRef", i.createRef()),
            eu(this, "cursorPosition", 0),
            eu(this, "renderEmojiPicker", (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, l.jsx)(w.A, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        this.handleChangeDefaultReactionEmoji(n), l && t();
                    },
                    pickerIntention: er.b_.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eb,
                });
            }),
            eu(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, ei.lx.REQUIRE_TAG, e);
                (0, b.fy)({
                    flags: n,
                });
            }),
            eu(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: l } = this.props;
                if (null == l) return;
                l.isThread() ? (e = (0, G.A)(e, !1)) : el.kvI.LIMITED_CHANNEL_NAME.has(l.type) && (e = (0, Q.an)(e));
                let i = null != (t = null == (n = this.nameInputRef.current) ? void 0 : n.selectionStart) ? t : 0;
                (0, b.fy)({
                    name: e,
                }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(i, i);
                    }, 0);
            }),
            eu(this, "handleBlurName", () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, G.A)(t, !0);
                    e !== t &&
                        (0, b.fy)({
                            name: e,
                        });
                }
            }),
            eu(this, "insertEmojiAtPosition", (e) => {
                var t, n;
                let l = this.nameInputRef.current,
                    i = null != (t = null == l ? void 0 : l.selectionStart) ? t : 0,
                    r = null != (n = null == l ? void 0 : l.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, i)) + e + (null == s ? void 0 : s.substring(r));
                (0, b.fy)({
                    name: a,
                }),
                    setTimeout(() => {
                        let t = i + e.length;
                        null == l || l.focus(), null == l || l.setSelectionRange(t, t);
                    }, 0);
            }),
            eu(this, "handleChangeTopic", (e) => {
                (0, b.fy)({
                    topic: R.Ay.translateInlineEmojiToSurrogates(e),
                });
            }),
            eu(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            eu(this, "handleChangeTemplate", (e) => {
                (0, b.fy)({
                    template: R.Ay.translateInlineEmojiToSurrogates(e),
                });
            }),
            eu(this, "handleChangeDefaultReactionEmoji", (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0,
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence,
                            };
                (0, b.fy)({
                    defaultReactionEmoji: t,
                });
            }),
            eu(this, "handleChangeDefaultForumLayout", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.fy)({
                    defaultForumLayout: e,
                }),
                    this.props.handleSetDefaultLayout(e);
            }),
            eu(this, "handleChangeDefaultSortOrder", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.fy)({
                    defaultSortOrder: e,
                });
            }),
            eu(this, "handleChangeDefaultTagSetting", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.fy)({
                    defaultTagSetting: e,
                });
            }),
            eu(this, "handleChangeBitrate", (e) => {
                (0, b.fy)({
                    bitrate: 1e3 * Math.round(e / 1e3),
                });
            }),
            eu(this, "handleUserLimitChange", (e) => {
                (0, b.fy)({
                    userLimit: Math.round(e),
                });
            }),
            eu(this, "handleNSFWChange", (e) => {
                (0, b.fy)({
                    nsfw: e,
                });
            }),
            eu(this, "handleActiveChannelsRemovedChange", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, ei.lx.ACTIVE_CHANNELS_REMOVED, !e);
                (0, b.fy)({
                    flags: n,
                });
            }),
            eu(this, "handleNewsChange", (e) => {
                (0, b.fy)({
                    type: e ? el.rbe.GUILD_ANNOUNCEMENT : el.rbe.GUILD_TEXT,
                });
            }),
            eu(this, "handleChangeSlowmode", (e) => {
                (0, b.fy)({
                    rateLimitPerUser: e,
                });
            }),
            eu(this, "handleChangeThreadMessageSlowmode", (e) => {
                (0, b.fy)({
                    defaultThreadRateLimitPerUser: e,
                });
            }),
            eu(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
                (0, b.fy)({
                    defaultAutoArchiveDuration: e,
                });
            }),
            eu(this, "handleRegionChange", (e) => {
                (0, b.fy)({
                    rtcRegion: e === ej ? null : e,
                });
            }),
            eu(this, "handleVideoQualityModeChange", (e) => {
                (0, b.fy)({
                    videoQualityMode: e,
                });
            }),
            eu(this, "handleAutoArchiveDurationChanged", (e) => {
                (0, b.fy)({
                    autoArchiveDuration: e,
                });
            }),
            eu(this, "handleInvitableChanged", (e) => {
                (0, b.fy)({
                    invitable: e,
                });
            }),
            eu(this, "handleChannelSummariesToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, ei.lx.SUMMARIES_DISABLED, !e);
                (0, b.fy)({
                    flags: n,
                });
            }),
            eu(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, ei.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, b.fy)({
                    flags: n,
                });
            });
        const r = null != (t = null == (n = this.props.channel) ? void 0 : n.topic) ? t : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, N.x7)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}

function eC() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, g.cf)([W.A], () => W.A.getProps()),
        s = (0, g.bG)([J.A], () => {
            var e;
            return J.A.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, g.bG)([U.A], () => U.A.theme),
        o = (0, g.bG)([Y.A], () => Y.A.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, k.NI)(t),
        u = (0, k.H_)(t),
        { canManageChannels: d, canSendMessages: h } = (0, g.cf)([Z.A], () => ({
            canManageChannels: Z.A.can(el.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Z.A.can(el.xBc.SEND_MESSAGES, t),
        })),
        m = (0, O.Ay)(t),
        p = F.default.getId(),
        f = (0, I.p)(),
        b = null == t ? void 0 : t.id,
        x = (0, y.cI)(t, !1, !0),
        j = A.A.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
        }).enabled,
        v = i.useCallback(
            (e) => {
                null != b && f.getState().setLayoutType(b, e);
            },
            [b, f],
        );
    return (0, l.jsx)(eO, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : d,
        canSendMessages: h,
        isThreadModerator: u,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: x,
        showAdvancedSlowModeSetting: j,
    });
}
