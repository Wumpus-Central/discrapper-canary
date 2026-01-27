n.d(t, {
    t: () => j,
}),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(111956),
    o = n.n(s),
    c = n(665260),
    u = n(305866),
    d = n(435371),
    p = n(397927),
    m = n(189551),
    f = n(659859),
    g = n(649963),
    h = n(815807),
    _ = n(429433),
    b = n(652215),
    A = n(307731),
    y = n(985018),
    v = n(233080),
    x = n(710504);

function O(e, t, n) {
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

function E(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
class j extends i.Component {
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: i, tabIndex: l = 0 } = this.props,
            { isReactionPickerActive: s } = this.state;
        if (e.state === b.cmJ.SENDING || (0, c.Lt)(e.flags, b.pr7.EPHEMERAL)) return null;
        let o = i ? x : v,
            u = {
                size: "sm",
                color: "currentColor",
                className: o.icon,
            };
        return e.type === b.lAJ.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, r.jsx)(f._x, {
                  message: e,
                  className: a()(o.reactionBtn, t),
              })
            : (0, r.jsx)(p.YNO, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, i) => {
                      var s, c;
                      let { isShown: f } = i;
                      return (0, r.jsx)(d.m_, {
                          asContainer: !0,
                          text: y.intl.string(y.t.lfIHs4),
                          children: (0, r.jsxs)(
                              p.DUT,
                              ((s = E({}, e)),
                              (c = c =
                                  {
                                      innerRef: this.ref,
                                      tabIndex: l,
                                      onClick: (e) => {
                                          this.handleAddReactionClick(e);
                                      },
                                      onMouseEnter: () => (0, m.K)(A.Vl.AddReactionPopoutMouseEntered),
                                      onFocus: () => (0, m.K)(A.Vl.AddReactionPopoutFocused),
                                      className: a()(
                                          o.reactionBtn,
                                          {
                                              [o.active]: f,
                                          },
                                          t,
                                      ),
                                      children: [(0, r.jsx)(p.nm2, E({}, u)), n],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(c)).forEach(function (e) {
                                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e));
                                    }),
                              s),
                          ),
                      });
                  },
              });
    }
    constructor(...e) {
        super(...e),
            O(this, "state", {
                isReactionPickerActive: !1,
            }),
            O(this, "ref", i.createRef()),
            O(this, "onAddReaction", (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, g.BB)(n.id, r.id, (0, h.jq)(e), i ? g.qN.FORUM_TOOLBAR : g.qN.MESSAGE_INLINE_BUTTON, {
                    burst: t,
                });
            }),
            O(this, "handleReactionPickerToggle", () => {
                this.setState((e) => ({
                    isReactionPickerActive: !e.isReactionPickerActive,
                }));
            }),
            O(this, "handleAddReactionClick", (e) => {
                e.stopPropagation(), this.handleReactionPickerToggle();
            }),
            O(this, "renderReactionPopout", (e) => {
                let { closePopout: t } = e,
                    { channel: n, message: i } = this.props,
                    l = (0, r.jsx)(_.C, {
                        closePopout: t,
                        channel: n,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            this.onAddReaction(n, i), r && (i ? o()(t, 150)() : t());
                        },
                        analyticsOverride: {
                            openPopoutType: "message_reaction_emoji_picker",
                        },
                        messageId: i.id,
                    });
                return (0, r.jsx)(u.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(p.lGe, {
                                  "aria-label": y.intl.string(y.t["7Xqzdj"]),
                                  children: l,
                              })
                            : l;
                    },
                });
            });
    }
}
