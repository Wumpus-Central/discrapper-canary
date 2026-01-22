n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(397927),
    u = n(853742),
    a = n(734057),
    o = n(147036),
    c = n(957565),
    d = n(652215),
    s = n(985018);

function f(e, t, n) {
    let f = (0, l.bG)([a.A], () => (null != e ? a.A.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "channel-copy-link",
              label: s.intl.string(s.t.WqhZss),
              action: () => {
                  e.isForumPost() &&
                      (0, u.jC)({
                          postId: e.id,
                          location: {
                              section: d.JJy.CONTEXT_MENU,
                          },
                      }),
                      (0, c.C)((0, o.af)(e, f, t, n));
              },
          });
}
