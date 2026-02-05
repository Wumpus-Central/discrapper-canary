n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(417597),
    r = n(397927),
    a = n(853742),
    u = n(734057),
    d = n(147036),
    s = n(957565),
    o = n(652215),
    A = n(985018);
function c(e, t, n) {
    let c = (0, l.bG)([u.A], () => (null != e ? u.A.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "channel-copy-link",
              label: A.intl.string(A.t.WqhZss),
              action: () => {
                  e.isForumPost() && (0, a.jC)({ postId: e.id, location: { section: o.JJy.CONTEXT_MENU } }),
                      (0, s.C)((0, d.af)(e, c, t, n));
              },
          });
}
