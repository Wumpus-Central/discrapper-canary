if (
    (n.d(t, {
        $: () => h,
        Q: () => p,
    }),
    12633 == n.j)
)
    var i = n(472435);
var r = n(861044),
    l = n(749210),
    a = n(430824),
    o = n(496675),
    s = n(979651),
    c = n(938475),
    u = n(981631);
let d = "DRAGGABLE_USER";
function p(e) {
    return (0, i.G)(
        d,
        {
            canDrop(e) {
                var t, n;
                let { channel: i } = e,
                    r = i.getGuildId(),
                    l = null != (n = null == (t = a.Z.getGuild(r)) ? void 0 : t.maxVideoChannelUsers) ? n : -1,
                    d = c.ZP.countVoiceStatesForChannel(i.id),
                    p = null != r && s.Z.hasVideo(i.id) && l > 0 && d >= l + 1;
                return o.Z.can(u.Plq.MOVE_MEMBERS, i) && o.Z.can(u.Plq.CONNECT, i) && !p;
            },
            drop(e, t) {
                let { channel: n } = e,
                    i = s.Z.getVoiceStateForUser(t.getItem().user.id);
                (null == i ? void 0 : i.channelId) !== n.id &&
                    l.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            },
        },
        (e, t) => ({
            connectUserDropTarget: e.dropTarget(),
            isUserOver: t.isOver() && t.canDrop(),
        }),
    )(e);
}
function h(e) {
    return (0, r.E)(
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
