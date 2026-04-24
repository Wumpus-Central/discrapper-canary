n.d(t, { t: () => y }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(111956),
    o = n.n(s),
    c = n(665260),
    d = n(305866),
    u = n(990078),
    _ = n(922016),
    m = n(939249),
    h = n(460905),
    p = n(189551),
    g = n(874357),
    f = n(649963),
    x = n(815807),
    A = n(429433),
    C = n(652215),
    v = n(307731),
    I = n(985018),
    E = n(347353),
    b = n(866661);
class y extends l.Component {
    state = { isReactionPickerActive: !1 };
    ref = l.createRef();
    onAddReaction = (e, t) => {
        if (null == e) return;
        let { channel: n, message: i, isForumToolbar: l } = this.props;
        (0, f.BB)(n.id, i.id, (0, x.jq)(e), l ? f.qN.FORUM_TOOLBAR : f.qN.MESSAGE_INLINE_BUTTON, { burst: t });
    };
    handleReactionPickerToggle = () => {
        this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
    };
    handleAddReactionClick = (e) => {
        e.stopPropagation(), this.handleReactionPickerToggle();
    };
    renderReactionPopout = (e) => {
        let { closePopout: t } = e,
            { channel: n, message: l } = this.props,
            a = (0, i.jsx)(A.C, {
                closePopout: t,
                channel: n,
                onSelectEmoji: (e) => {
                    let { emoji: n, willClose: i, isBurst: l } = e;
                    this.onAddReaction(n, l), i && (l ? o()(t, 150)() : t());
                },
                analyticsOverride: { openPopoutType: "message_reaction_emoji_picker" },
                messageId: l.id,
            });
        return (0, i.jsx)(d.M.Consumer, {
            children: (e) => {
                let { inDialog: t } = e;
                return t ? (0, i.jsx)(d.l, { "aria-label": I.intl.string(I.t["7Xqzdj"]), children: a }) : a;
            },
        });
    };
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: l, tabIndex: a = 0 } = this.props,
            { isReactionPickerActive: s } = this.state;
        if (e.state === C.cmJ.SENDING || (0, c.Lt)(e.flags, C.pr7.EPHEMERAL)) return null;
        let o = l ? b : E,
            d = { size: "sm", color: "currentColor", className: o.icon };
        return e.type === C.lAJ.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, i.jsx)(g._x, { message: e, className: r()(o.reactionBtn, t) })
            : (0, i.jsx)(_.Y, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, l) => {
                      let { isShown: s } = l;
                      return (0, i.jsx)(u.m, {
                          asContainer: !0,
                          text: I.intl.string(I.t.lfIHs4),
                          children: (0, i.jsxs)(m.D, {
                              ...e,
                              innerRef: this.ref,
                              tabIndex: a,
                              onClick: (e) => {
                                  this.handleAddReactionClick(e);
                              },
                              onMouseEnter: () => (0, p.K)(v.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
                              onFocus: () => (0, p.K)(v.EmojiInteractionPoint.AddReactionPopoutFocused),
                              className: r()(o.reactionBtn, { [o.active]: s }, t),
                              children: [(0, i.jsx)(h.n, { ...d }), n],
                          }),
                      });
                  },
              });
    }
}
