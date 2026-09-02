n.d(t, { t: () => N }), n(938796);
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(649852),
    o = n.n(r),
    c = n(665260),
    d = n(305866),
    u = n(922016),
    m = n(866665),
    h = n(939249),
    g = n(460905),
    A = n(189551),
    p = n(649963),
    x = n(815807),
    f = n(429433),
    E = n(652215),
    I = n(307731),
    C = n(375708),
    _ = n(356974),
    v = n(988626);
class N extends l.Component {
    state = { isReactionPickerActive: !1 };
    ref = l.createRef();
    onAddReaction = (e, t) => {
        if (null == e) return;
        let { channel: n, message: i, isForumToolbar: l } = this.props;
        (0, p.BB)(n.id, i.id, (0, x.jq)(e), l ? p.qN.FORUM_TOOLBAR : p.qN.MESSAGE_INLINE_BUTTON, { burst: t });
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
            s = (0, i.jsx)(f.C, {
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
                return t ? (0, i.jsx)(d.l, { "aria-label": C.intl.string(C.t["7Xqzdj"]), children: s }) : s;
            },
        });
    };
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: l, tabIndex: s = 0 } = this.props,
            { isReactionPickerActive: r } = this.state;
        if (e.state === E.cmJ.SENDING || (0, c.Lt)(e.flags, E.pr7.EPHEMERAL)) return null;
        let o = l ? v : _,
            d = { size: "sm", color: "currentColor", className: o.icon };
        return (0, i.jsx)(u.Y, {
            targetElementRef: this.ref,
            shouldShow: r,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: "right",
            children: (e, l) => {
                let { isShown: r } = l;
                return (0, i.jsx)(m.m, {
                    asContainer: !0,
                    text: C.intl.string(C.t.lfIHs4),
                    children: (0, i.jsxs)(h.D, {
                        ...e,
                        innerRef: this.ref,
                        tabIndex: s,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, A.K)(I.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, A.K)(I.EmojiInteractionPoint.AddReactionPopoutFocused),
                        className: a()(o.reactionBtn, { [o.active]: r }, t),
                        children: [(0, i.jsx)(g.n, { ...d }), n],
                    }),
                });
            },
        });
    }
}
