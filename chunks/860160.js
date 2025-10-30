n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(876215),
    a = n(442837),
    s = n(471445),
    o = n(565138),
    c = n(924301),
    u = n(178480),
    d = n(592125),
    p = n(430824),
    f = n(594174),
    m = n(709054),
    h = n(981631),
    g = n(388032),
    _ = n(590981);
function b(e) {
    var t;
    let { item: n } = e,
        b = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                case "channelSummary":
                case "guildEvent":
                case "forumThread":
                case "generatedCandidate":
                    return "guild";
                case "contentInventory":
                    return "user";
                default:
                    return "unknown";
            }
        }, [n]),
        E = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                    return n.data.message.channel_id;
                case "channelSummary":
                    return n.data.topic.channelId;
                case "generatedCandidate":
                    return n.data.item.channel_id;
                case "forumThread":
                    return n.data.threadChannel.id;
                default:
                    return;
            }
        }, [n]),
        O = i.useMemo(() => {
            if ("guildEvent" === n.data.kind) {
                let e = c.ZP.getGuildScheduledEvent(n.data.eventId);
                return null == e ? void 0 : e.guild_id;
            }
        }, [n]),
        I = i.useMemo(() => {
            if ("contentInventory" === n.data.kind) return n.data.content.author_id;
        }, [n]),
        y = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                case "forumThread":
                    return m.default.extractTimestamp(n.data.message.id);
                case "channelSummary":
                    return m.default.extractTimestamp(n.data.topic.endId);
                case "guildEvent":
                    return m.default.extractTimestamp(n.data.eventId);
                case "generatedCandidate":
                    return m.default.extractTimestamp(n.data.item.content_id);
                default:
                    return n.timestamp;
            }
        }, [n]),
        v = (0, a.e7)([d.Z], () => d.Z.getChannel(E), [E]),
        C = null != (t = null == v ? void 0 : v.guild_id) ? t : O,
        S = (0, a.e7)([p.Z], () => (null != C ? p.Z.getGuild(C) : null), [C]),
        T = (0, a.e7)([f.default], () => (null != I ? f.default.getUser(I) : null), [I]);
    return "unknown" === b
        ? null
        : (0, r.jsx)("div", {
              className: _.container,
              children: (0, r.jsxs)("div", {
                  className: _.header,
                  children: [
                      (() => {
                          if ("guild" === b && null != S)
                              return (0, r.jsx)(o.Z, {
                                  guild: S,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === b && null != T) {
                              let e = T.getAvatarURL(void 0, 50);
                              return (0, r.jsx)("img", {
                                  src: e,
                                  alt: T.username,
                                  className: _.avatar,
                              });
                          }
                          return null;
                      })(),
                      (0, r.jsxs)("div", {
                          className: _.headerInfo,
                          children: [
                              (0, r.jsx)("div", {
                                  className: _.titleRow,
                                  children: (0, r.jsxs)("div", {
                                      className: _.titleLeft,
                                      children: [
                                          "guild" === b && null != S
                                              ? (0, r.jsx)("div", {
                                                    className: _.title,
                                                    children: S.name,
                                                })
                                              : "user" === b && null != T
                                                ? (0, r.jsx)("div", {
                                                      className: _.title,
                                                      children: T.username,
                                                  })
                                                : null,
                                          (0, r.jsx)("div", {
                                              className: _.timestamp,
                                              children: (0, u.a3)(y),
                                          }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (n.data.kind) {
                                          case "message":
                                              if (n.channelType === h.d4z.GUILD_ANNOUNCEMENT)
                                                  return g.intl.string(g.t["8P08G9"]);
                                              return g.intl.string(g.t.hMFMY9);
                                          case "channelSummary":
                                          case "generatedCandidate":
                                              return g.intl.string(g.t.ljgIO9);
                                          case "guildEvent":
                                              return g.intl.string(g.t["6pFsLQ"]);
                                          case "forumThread":
                                              return g.intl.string(g.t.bYNuVx);
                                          case "contentInventory":
                                              switch (n.data.content.content_type) {
                                                  case l.s.CUSTOM_STATUS:
                                                      return g.intl.string(g.t.fxOLPR);
                                                  case l.s.TOP_GAME:
                                                  case l.s.PLAYED_GAME:
                                                      return g.intl.string(g.t.ktOTRQ);
                                                  default:
                                                      return "".concat(n.data.content.content_type);
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === b)
                                      return (0, r.jsx)("div", {
                                          className: _.subtitle,
                                          children: (0, r.jsx)("span", {
                                              className: _.subtitleText,
                                              children: e,
                                          }),
                                      });
                                  if (null != v && null != e) {
                                      let t = (0, s.KS)(v, S);
                                      return (0, r.jsxs)("div", {
                                          className: _.subtitle,
                                          children: [
                                              (0, r.jsx)("span", {
                                                  className: _.subtitleText,
                                                  children: e,
                                              }),
                                              (0, r.jsx)("span", {
                                                  className: _.subtitleText,
                                                  children: g.intl.string(g.t.CHUAYk),
                                              }),
                                              (0, r.jsxs)("span", {
                                                  className: _.subtitleText,
                                                  children: [
                                                      null != t &&
                                                          (0, r.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: _.channelIcon,
                                                          }),
                                                      v.name,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, r.jsx)("div", {
                                            className: _.subtitle,
                                            children: (0, r.jsx)("span", {
                                                className: _.subtitleText,
                                                children: e,
                                            }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
