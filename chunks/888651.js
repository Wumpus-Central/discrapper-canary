n.d(t, {
    $: () => _,
    Q: () => f,
});
var r = n(617735),
    i = n(230826),
    o = n(749210),
    a = n(430824),
    s = n(496675),
    l = n(979651),
    c = n(938475),
    u = n(981631);
let d = "DRAGGABLE_USER";
function f(e) {
    return (0, r.G)(
        d,
        {
            canDrop(e) {
                var t, n;
                let { channel: r } = e,
                    i = r.getGuildId(),
                    o = null != (n = null == (t = a.Z.getGuild(i)) ? void 0 : t.maxVideoChannelUsers) ? n : -1,
                    d = c.ZP.countVoiceStatesForChannel(r.id),
                    f = null != i && l.Z.hasVideo(r.id) && o > 0 && d >= o + 1;
                return s.Z.can(u.Plq.MOVE_MEMBERS, r) && s.Z.can(u.Plq.CONNECT, r) && !f;
            },
            drop(e, t) {
                let { channel: n } = e,
                    r = l.Z.getVoiceStateForUser(t.getItem().user.id);
                (null == r ? void 0 : r.channelId) !== n.id &&
                    o.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            },
        },
        (e, t) => ({
            connectUserDropTarget: e.dropTarget(),
            isUserOver: t.isOver() && t.canDrop(),
        }),
    )(e);
}
function _(e) {
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
            },
        },
        (e) => ({ connectUserDragSource: e.dragSource() }),
    )(e);
}
