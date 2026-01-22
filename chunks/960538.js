n.d(t, { t: () => C }), n(938796), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(111956),
    l = n.n(o),
    c = n(665260),
    u = n(305866),
    d = n(435371),
    f = n(397927),
    p = n(189551),
    _ = n(659859),
    h = n(649963),
    m = n(815807),
    g = n(429433),
    E = n(652215),
    b = n(307731),
    y = n(985018),
    O = n(233080),
    A = n(710504);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class C extends i.Component {
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: i, tabIndex: a = 0 } = this.props,
            { isReactionPickerActive: o } = this.state;
        if (e.state === E.cmJ.SENDING || (0, c.Lt)(e.flags, E.pr7.EPHEMERAL)) return null;
        let l = i ? A : O,
            u = {
                size: "sm",
                color: "currentColor",
                className: l.icon,
            };
        return e.type === E.lAJ.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, r.jsx)(_._x, {
                  message: e,
                  className: s()(l.reactionBtn, t),
              })
            : (0, r.jsx)(f.YNO, {
                  targetElementRef: this.ref,
                  shouldShow: o,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, i) => {
                      let { isShown: o } = i;
                      return (0, r.jsx)(d.m_, {
                          asContainer: !0,
                          text: y.intl.string(y.t.lfIHs4),
                          children: (0, r.jsxs)(
                              f.DUT,
                              T(S({}, e), {
                                  innerRef: this.ref,
                                  tabIndex: a,
                                  onClick: (e) => {
                                      this.handleAddReactionClick(e);
                                  },
                                  onMouseEnter: () => (0, p.K)(b.Vl.AddReactionPopoutMouseEntered),
                                  onFocus: () => (0, p.K)(b.Vl.AddReactionPopoutFocused),
                                  className: s()(l.reactionBtn, { [l.active]: o }, t),
                                  children: [(0, r.jsx)(f.nm2, S({}, u)), n],
                              }),
                          ),
                      });
                  },
              });
    }
    constructor(...e) {
        super(...e),
            v(this, "state", { isReactionPickerActive: !1 }),
            v(this, "ref", i.createRef()),
            v(this, "onAddReaction", (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, h.BB)(n.id, r.id, (0, m.jq)(e), i ? h.qN.FORUM_TOOLBAR : h.qN.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            v(this, "handleReactionPickerToggle", () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            v(this, "handleAddReactionClick", (e) => {
                e.stopPropagation(), this.handleReactionPickerToggle();
            }),
            v(this, "renderReactionPopout", (e) => {
                let { closePopout: t } = e,
                    { channel: n, message: i } = this.props,
                    a = { openPopoutType: "message_reaction_emoji_picker" },
                    s = (0, r.jsx)(g.C, {
                        closePopout: t,
                        channel: n,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            this.onAddReaction(n, i), r && (i ? l()(t, 150)() : t());
                        },
                        analyticsOverride: a,
                        messageId: i.id,
                    });
                return (0, r.jsx)(u.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(f.lGe, {
                                  "aria-label": y.intl.string(y.t["7Xqzdj"]),
                                  children: s,
                              })
                            : s;
                    },
                });
            });
    }
}
