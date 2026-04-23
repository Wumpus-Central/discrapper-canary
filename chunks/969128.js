i.d(e, { A: () => s });
var t = i(627968);
i(64700);
var l = i(17928),
    a = i(477782),
    r = i(816662),
    d = i(395504),
    c = i(543465),
    o = i(652215),
    u = i(985018);
function s(n) {
    let e = (0, d.jN)(n.guild_id),
        i = (0, l.bG)([c.Ay], () => c.Ay.isChannelOptedIn(n.guild_id, n.id)),
        s = (0, l.bG)([c.Ay], () => null != n.parent_id && c.Ay.isChannelOptedIn(n.guild_id, n.parent_id)),
        A = () => {
            (0, r.AC)(n.guild_id, n.id, !i, { section: o.JJy.CONTEXT_MENU });
        };
    return !e || n.isThread()
        ? null
        : n.isCategory()
          ? (0, t.jsx)(a.Dr, {
                id: "opt-into-category",
                label: i ? u.intl.string(u.t["3zySTA"]) : u.intl.string(u.t["9mysCh"]),
                action: () => A(),
            })
          : s
            ? (0, t.jsx)(a.Dr, {
                  id: "opt-out-category",
                  label: u.intl.string(u.t.jNphKT),
                  action: () =>
                      void (
                          null != n.parent_id && (0, r.AC)(n.guild_id, n.parent_id, !1, { section: o.JJy.CONTEXT_MENU })
                      ),
              })
            : (0, t.jsx)(a.Dr, {
                  id: "opt-into-channel",
                  label: i ? u.intl.string(u.t["3zySTA"]) : u.intl.string(u.t["9mysCh"]),
                  action: () => A(),
              });
}
