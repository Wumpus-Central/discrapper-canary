n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(417597),
    r = n(477782),
    a = n(853742),
    u = n(734057),
    s = n(147036),
    d = n(957565),
    o = n(652215),
    c = n(985018);
function E(e, t, n) {
    let E = (0, i.bG)([u.A], () => (null != e ? u.A.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "channel-copy-link",
              label: c.intl.string(c.t.WqhZss),
              action: () => {
                  e.isForumPost() && (0, a.jC)({ postId: e.id, location: { section: o.JJy.CONTEXT_MENU } }),
                      (0, d.C)((0, s.af)(e, E, t, n));
              },
          });
}
