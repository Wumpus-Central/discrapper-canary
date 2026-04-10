n.d(t, { t: () => v }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(111956),
    o = n.n(a),
    d = n(665260),
    c = n(305866),
    u = n(435371),
    m = n(397927),
    _ = n(189551),
    h = n(659859),
    p = n(649963),
    g = n(815807),
    A = n(429433),
    x = n(652215),
    f = n(307731),
    C = n(985018),
    E = n(486025),
    I = n(108277);
class v extends l.Component {
    state = { isReactionPickerActive: !1 };
    ref = l.createRef();
    onAddReaction = (e, t) => {
        if (null == e) return;
        let { channel: n, message: i, isForumToolbar: l } = this.props;
        (0, p.BB)(n.id, i.id, (0, g.jq)(e), l ? p.qN.FORUM_TOOLBAR : p.qN.MESSAGE_INLINE_BUTTON, { burst: t });
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
            s = (0, i.jsx)(A.C, {
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
                return t ? (0, i.jsx)(m.lGe, { "aria-label": C.intl.string(C.t["7Xqzdj"]), children: s }) : s;
            },
        });
    };
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: l, tabIndex: s = 0 } = this.props,
            { isReactionPickerActive: a } = this.state;
        if (e.state === x.cmJ.SENDING || (0, d.Lt)(e.flags, x.pr7.EPHEMERAL)) return null;
        let o = l ? I : E,
            c = { size: "sm", color: "currentColor", className: o.icon };
        return e.type === x.lAJ.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, i.jsx)(h._x, { message: e, className: r()(o.reactionBtn, t) })
            : (0, i.jsx)(m.YNO, {
                  targetElementRef: this.ref,
                  shouldShow: a,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, l) => {
                      let { isShown: a } = l;
                      return (0, i.jsx)(u.m_, {
                          asContainer: !0,
                          text: C.intl.string(C.t.lfIHs4),
                          children: (0, i.jsxs)(m.DUT, {
                              ...e,
                              innerRef: this.ref,
                              tabIndex: s,
                              onClick: (e) => {
                                  this.handleAddReactionClick(e);
                              },
                              onMouseEnter: () => (0, _.K)(f.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
                              onFocus: () => (0, _.K)(f.EmojiInteractionPoint.AddReactionPopoutFocused),
                              className: r()(o.reactionBtn, { [o.active]: a }, t),
                              children: [(0, i.jsx)(m.nm2, { ...c }), n],
                          }),
                      });
                  },
              });
    }
}
