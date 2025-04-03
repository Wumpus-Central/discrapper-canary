n.d(t, {
    $: () => h,
    Q: () => p
});
var r = n(155281),
    i = n(222146),
    l = n(749210),
    o = n(430824),
    a = n(496675),
    s = n(979651),
    c = n(938475),
    u = n(981631);
let d = 'DRAGGABLE_USER';
function p(e) {
    return (0, r.G)(
        d,
        {
            canDrop(e) {
                var t, n;
                let { channel: r } = e,
                    i = r.getGuildId(),
                    l = null != (n = null == (t = o.Z.getGuild(i)) ? void 0 : t.maxVideoChannelUsers) ? n : -1,
                    d = c.ZP.countVoiceStatesForChannel(r.id),
                    p = null != i && s.Z.hasVideo(r.id) && l > 0 && d >= l + 1;
                return a.Z.can(u.Plq.MOVE_MEMBERS, r) && a.Z.can(u.Plq.CONNECT, r) && !p;
            },
            drop(e, t) {
                let { channel: n } = e,
                    r = s.Z.getVoiceStateForUser(t.getItem().user.id);
                (null == r ? void 0 : r.channelId) !== n.id && l.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            }
        },
        (e, t) => ({
            connectUserDropTarget: e.dropTarget(),
            isUserOver: t.isOver() && t.canDrop()
        })
    )(e);
}
function h(e) {
    return (0, i.E)(
        d,
        {
            canDrag(e) {
                let { user: t, canDrag: n } = e;
                return null != n && n;
            },
            beginDrag(e) {
                let { user: t } = e;
                return { user: t };
            }
        },
        (e) => ({ connectUserDragSource: e.dragSource() })
    )(e);
}
