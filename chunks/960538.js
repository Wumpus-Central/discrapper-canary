n.d(t, { t: () => j }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(111956),
    o = n.n(a),
    d = n(665260),
    c = n(305866),
    u = n(990078),
    m = n(922016),
    h = n(939249),
    g = n(460905),
    p = n(189551),
    A = n(649963),
    x = n(815807),
    f = n(429433),
    E = n(652215),
    I = n(307731),
    C = n(375708),
    v = n(347353),
    _ = n(866661);
class j extends l.Component {
    state = { isReactionPickerActive: !1 };
    ref = l.createRef();
    onAddReaction = (e, t) => {
        if (null == e) return;
        let { channel: n, message: i, isForumToolbar: l } = this.props;
        (0, A.BB)(n.id, i.id, (0, x.jq)(e), l ? A.qN.FORUM_TOOLBAR : A.qN.MESSAGE_INLINE_BUTTON, { burst: t });
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
        return (0, i.jsx)(c.M.Consumer, {
            children: (e) => {
                let { inDialog: t } = e;
                return t ? (0, i.jsx)(c.l, { "aria-label": C.intl.string(C.t["7Xqzdj"]), children: s }) : s;
            },
        });
    };
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: l, tabIndex: s = 0 } = this.props,
            { isReactionPickerActive: a } = this.state;
        if (e.state === E.cmJ.SENDING || (0, d.Lt)(e.flags, E.pr7.EPHEMERAL)) return null;
        let o = l ? _ : v,
            c = { size: "sm", color: "currentColor", className: o.icon };
        return (0, i.jsx)(m.Y, {
            targetElementRef: this.ref,
            shouldShow: a,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: "right",
            children: (e, l) => {
                let { isShown: a } = l;
                return (0, i.jsx)(u.m, {
                    asContainer: !0,
                    text: C.intl.string(C.t.lfIHs4),
                    children: (0, i.jsxs)(h.D, {
                        ...e,
                        innerRef: this.ref,
                        tabIndex: s,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, p.K)(I.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, p.K)(I.EmojiInteractionPoint.AddReactionPopoutFocused),
                        className: r()(o.reactionBtn, { [o.active]: a }, t),
                        children: [(0, i.jsx)(g.n, { ...c }), n],
                    }),
                });
            },
        });
    }
}
