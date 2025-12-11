n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(876215),
    a = n(442837),
    s = n(471445),
    o = n(565138),
    c = n(924301),
    u = n(178480),
    d = n(592125),
    p = n(430824),
    f = n(594174),
    g = n(709054),
    h = n(981631),
    m = n(388032),
    b = n(697392);
function _(e) {
    var t;
    let { item: n } = e,
        _ = i.useMemo(() => {
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
        v = i.useMemo(() => {
            if ("contentInventory" === n.data.kind) return n.data.content.author_id;
        }, [n]),
        y = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                case "forumThread":
                    return g.default.extractTimestamp(n.data.message.id);
                case "channelSummary":
                    return g.default.extractTimestamp(n.data.topic.endId);
                case "guildEvent":
                    return g.default.extractTimestamp(n.data.eventId);
                case "generatedCandidate":
                    return g.default.extractTimestamp(n.data.item.content_id);
                default:
                    return n.timestamp;
            }
        }, [n]),
        I = (0, a.e7)([d.Z], () => d.Z.getChannel(E), [E]),
        C = null != (t = null == I ? void 0 : I.guild_id) ? t : O,
        S = (0, a.e7)([p.Z], () => (null != C ? p.Z.getGuild(C) : null), [C]),
        T = (0, a.e7)([f.default], () => (null != v ? f.default.getUser(v) : null), [v]);
    return "unknown" === _
        ? null
        : (0, r.jsx)("div", {
              className: b.container,
              children: (0, r.jsxs)("div", {
                  className: b.header,
                  children: [
                      (() => {
                          if ("guild" === _ && null != S)
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
                          if ("user" === _ && null != T) {
                              let e = T.getAvatarURL(void 0, 50);
                              return (0, r.jsx)("img", {
                                  src: e,
                                  alt: T.username,
                                  className: b.avatar,
                              });
                          }
                          return null;
                      })(),
                      (0, r.jsxs)("div", {
                          className: b.headerInfo,
                          children: [
                              (0, r.jsx)("div", {
                                  className: b.titleRow,
                                  children: (0, r.jsxs)("div", {
                                      className: b.titleLeft,
                                      children: [
                                          "guild" === _ && null != S
                                              ? (0, r.jsx)("div", {
                                                    className: b.title,
                                                    children: S.name,
                                                })
                                              : "user" === _ && null != T
                                                ? (0, r.jsx)("div", {
                                                      className: b.title,
                                                      children: T.username,
                                                  })
                                                : null,
                                          (0, r.jsx)("div", {
                                              className: b.timestamp,
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
                                                  return m.intl.string(m.t["8P08G9"]);
                                              return m.intl.string(m.t.hMFMY9);
                                          case "channelSummary":
                                          case "generatedCandidate":
                                              return m.intl.string(m.t.ljgIO9);
                                          case "guildEvent":
                                              return m.intl.string(m.t["6pFsLQ"]);
                                          case "forumThread":
                                              return m.intl.string(m.t.bYNuVx);
                                          case "contentInventory":
                                              switch (n.data.content.content_type) {
                                                  case l.s.CUSTOM_STATUS:
                                                      return m.intl.string(m.t.fxOLPR);
                                                  case l.s.TOP_GAME:
                                                  case l.s.PLAYED_GAME:
                                                      return m.intl.string(m.t.ktOTRQ);
                                                  default:
                                                      return "".concat(n.data.content.content_type);
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === _)
                                      return (0, r.jsx)("div", {
                                          className: b.subtitle,
                                          children: (0, r.jsx)("span", {
                                              className: b.subtitleText,
                                              children: e,
                                          }),
                                      });
                                  if (null != I && null != e) {
                                      let t = (0, s.KS)(I, S);
                                      return (0, r.jsxs)("div", {
                                          className: b.subtitle,
                                          children: [
                                              (0, r.jsx)("span", {
                                                  className: b.subtitleText,
                                                  children: e,
                                              }),
                                              (0, r.jsx)("span", {
                                                  className: b.subtitleText,
                                                  children: m.intl.string(m.t.CHUAYk),
                                              }),
                                              (0, r.jsxs)("span", {
                                                  className: b.subtitleText,
                                                  children: [
                                                      null != t &&
                                                          (0, r.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: b.channelIcon,
                                                          }),
                                                      I.name,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, r.jsx)("div", {
                                            className: b.subtitle,
                                            children: (0, r.jsx)("span", {
                                                className: b.subtitleText,
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
