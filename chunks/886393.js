var t = o(477900);
o(582128);
var c = o(164636),
    l = o(477782),
    s = o(173936),
    e = o(853742),
    a = o(734057),
    d = o(147036),
    r = o(957565),
    p = o(652215),
    u = o(792996);
o.d(
    i,
    {},
    {
        A: function (n, i, o) {
            let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                k = (0, c.bG)([a.A], () => (null != n ? a.A.getChannel(n.parent_id) : null));
            return null == n
                ? null
                : (0, t.jsx)(l.Dr, {
                      id: "channel-copy-link",
                      label: u.intl.string(u.t.WqhZss),
                      icon: h ? s.LinkIcon : void 0,
                      leadingAccessory: h ? { type: "icon", icon: s.LinkIcon } : void 0,
                      action: () => {
                          (n.isForumPost() && (0, e.jC)({ postId: n.id, location: { section: p.JJy.CONTEXT_MENU } }),
                              (0, r.C)((0, d.af)(n, k, i, o)));
                      },
                  });
        },
    },
);
