var i = c(652215);
c.d(
    u,
    {},
    {
        K: function (n, u, c, l) {
            let t = c ?? u;
            return (
                (null != t && n.can(i.xBc.CREATE_INSTANT_INVITE, t)) ||
                (null != u && null != u.vanityURLCode) ||
                l?.invite_code != null
            );
        },
    },
);
