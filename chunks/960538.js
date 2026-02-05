n.d(t, { t: () => T }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(111956),
    o = n.n(s),
    d = n(665260),
    c = n(305866),
    u = n(435371),
    m = n(397927),
    _ = n(189551),
    h = n(659859),
    p = n(649963),
    g = n(815807),
    A = n(429433),
    f = n(652215),
    x = n(307731),
    E = n(985018),
    C = n(233080),
    I = n(710504);
class T extends l.Component {
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
        return (0, i.jsx)(c.M.Consumer, {
            children: (e) => {
                let { inDialog: t } = e;
                return t ? (0, i.jsx)(m.lGe, { "aria-label": E.intl.string(E.t["7Xqzdj"]), children: a }) : a;
            },
        });
    };
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: l, tabIndex: a = 0 } = this.props,
            { isReactionPickerActive: s } = this.state;
        if (e.state === f.cmJ.SENDING || (0, d.Lt)(e.flags, f.pr7.EPHEMERAL)) return null;
        let o = l ? I : C,
            c = { size: "sm", color: "currentColor", className: o.icon };
        return e.type === f.lAJ.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, i.jsx)(h._x, { message: e, className: r()(o.reactionBtn, t) })
            : (0, i.jsx)(m.YNO, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, l) => {
                      let { isShown: s } = l;
                      return (0, i.jsx)(u.m_, {
                          asContainer: !0,
                          text: E.intl.string(E.t.lfIHs4),
                          children: (0, i.jsxs)(m.DUT, {
                              ...e,
                              innerRef: this.ref,
                              tabIndex: a,
                              onClick: (e) => {
                                  this.handleAddReactionClick(e);
                              },
                              onMouseEnter: () => (0, _.K)(x.Vl.AddReactionPopoutMouseEntered),
                              onFocus: () => (0, _.K)(x.Vl.AddReactionPopoutFocused),
                              className: r()(o.reactionBtn, { [o.active]: s }, t),
                              children: [(0, i.jsx)(m.nm2, { ...c }), n],
                          }),
                      });
                  },
              });
    }
}
