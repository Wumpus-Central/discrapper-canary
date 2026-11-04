var t = l(734057),
    r = l(576705),
    i = l(652215);
l.d(
    e,
    {},
    {
        Ay: function (n, e) {
            return r.A.can(i.xBc.MANAGE_CHANNELS, n ?? e);
        },
        Fd: function (n) {
            if (null == n.parent_id) return null;
            let e = t.A.getChannel(n.parent_id);
            return null != e && e.isCategory() ? e : null;
        },
        JL: function (n) {
            return null == n || r.A.can(i.xBc.VIEW_CHANNEL, n);
        },
    },
);
