"use strict";
n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(328650),
    a = n(863036),
    r = n(71393),
    o = n(576705),
    d = n(351906),
    c = n(652215);
function u() {
    let e = (0, i.bG)([d.A], () => d.A.hideInstantInvites),
        { channel: t, guild: n } = (0, i.cf)([a.A, r.A], () => {
            let { channel: e } = a.A.getProps(),
                t = null != e ? r.A.getGuild(e.getGuildId()) : null;
            return { channel: e, guild: t };
        }, []),
        u = (0, i.bG)([o.A], () => null != t && o.A.can(c.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: h, loading: g } = (0, i.cf)([a.A], () => a.A.getInvites(), []);
    return (0, l.jsx)(s.A, { invites: h, loading: g, guild: n, channel: t, canCreateInvites: u, hide: e });
}
