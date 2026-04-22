n.d(t, { t: () => T }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(111956),
    o = n.n(r),
    d = n(665260),
    c = n(305866),
    u = n(990078),
    m = n(265872),
    _ = n(939249),
    h = n(460905),
    p = n(189551),
    g = n(659859),
    A = n(649963),
    f = n(815807),
    x = n(429433),
    C = n(652215),
    E = n(307731),
    I = n(985018),
    v = n(347353),
    b = n(866661);
class T extends l.Component {
    state = { isReactionPickerActive: !1 };
    ref = l.createRef();
    onAddReaction = (e, t) => {
        if (null == e) return;
        let { channel: n, message: i, isForumToolbar: l } = this.props;
        (0, A.BB)(n.id, i.id, (0, f.jq)(e), l ? A.qN.FORUM_TOOLBAR : A.qN.MESSAGE_INLINE_BUTTON, { burst: t });
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
            a = (0, i.jsx)(x.C, {
                closePopout: t,
                channel: n,
                onSelectEmoji: (e) => {
                    let { emoji: n, willClose: i, isBurst: l } = e;
                    this.onAddReaction(n, l), i && (l ? o()(t, 150)() : t());
                },
                analyticsOverride: { openPopoutType: "message_reaction_emoji_picker" },
                messageId: l.id,
            });
        return (0, i.jsx)(c.M.Consumer, {
            children: (e) => {
                let { inDialog: t } = e;
                return t ? (0, i.jsx)(c.l, { "aria-label": I.intl.string(I.t["7Xqzdj"]), children: a }) : a;
            },
        });
    };
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: l, tabIndex: a = 0 } = this.props,
            { isReactionPickerActive: r } = this.state;
        if (e.state === C.cmJ.SENDING || (0, d.Lt)(e.flags, C.pr7.EPHEMERAL)) return null;
        let o = l ? b : v,
            c = { size: "sm", color: "currentColor", className: o.icon };
        return e.type === C.lAJ.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, i.jsx)(g._x, { message: e, className: s()(o.reactionBtn, t) })
            : (0, i.jsx)(m.Y, {
                  targetElementRef: this.ref,
                  shouldShow: r,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, l) => {
                      let { isShown: r } = l;
                      return (0, i.jsx)(u.m, {
                          asContainer: !0,
                          text: I.intl.string(I.t.lfIHs4),
                          children: (0, i.jsxs)(_.D, {
                              ...e,
                              innerRef: this.ref,
                              tabIndex: a,
                              onClick: (e) => {
                                  this.handleAddReactionClick(e);
                              },
                              onMouseEnter: () => (0, p.K)(E.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
                              onFocus: () => (0, p.K)(E.EmojiInteractionPoint.AddReactionPopoutFocused),
                              className: s()(o.reactionBtn, { [o.active]: r }, t),
                              children: [(0, i.jsx)(h.n, { ...c }), n],
                          }),
                      });
                  },
              });
    }
}
