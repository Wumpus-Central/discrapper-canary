n.d(t, {
    A: () => u,
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(328650),
    s = n(863036),
    a = n(71393),
    o = n(576705),
    c = n(351906),
    d = n(652215);

function u() {
    let e = (0, i.bG)([c.A], () => c.A.hideInstantInvites),
        { channel: t, guild: n } = (0, i.cf)([s.A, a.A], () => {
            let { channel: e } = s.A.getProps(),
                t = null != e ? a.A.getGuild(e.getGuildId()) : null;
            return {
                channel: e,
                guild: t,
            };
        }, []),
        u = (0, i.bG)([o.A], () => null != t && o.A.can(d.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: h, loading: g } = (0, i.cf)([s.A], () => s.A.getInvites(), []);
    return (0, l.jsx)(r.A, {
        invites: h,
        loading: g,
        guild: n,
        channel: t,
        canCreateInvites: u,
        hide: e,
    });
}
