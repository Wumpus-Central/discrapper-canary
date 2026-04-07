t.d(n, { A: () => c });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(816662),
    d = t(395504),
    s = t(543465),
    u = t(652215),
    o = t(985018);
function c(e) {
    let n = (0, d.jN)(e.guild_id),
        t = (0, r.bG)([s.Ay], () => s.Ay.isChannelOptedIn(e.guild_id, e.id)),
        c = (0, r.bG)([s.Ay], () => null != e.parent_id && s.Ay.isChannelOptedIn(e.guild_id, e.parent_id)),
        A = () => {
            (0, a.AC)(e.guild_id, e.id, !t, { section: u.JJy.CONTEXT_MENU });
        };
    return !n || e.isThread()
        ? null
        : e.isCategory()
          ? (0, i.jsx)(l.Drp, {
                id: "opt-into-category",
                label: t ? o.intl.string(o.t["3zySTA"]) : o.intl.string(o.t["9mysCh"]),
                action: () => A(),
            })
          : c
            ? (0, i.jsx)(l.Drp, {
                  id: "opt-out-category",
                  label: o.intl.string(o.t.jNphKT),
                  action: () =>
                      void (
                          null != e.parent_id && (0, a.AC)(e.guild_id, e.parent_id, !1, { section: u.JJy.CONTEXT_MENU })
                      ),
              })
            : (0, i.jsx)(l.Drp, {
                  id: "opt-into-channel",
                  label: t ? o.intl.string(o.t["3zySTA"]) : o.intl.string(o.t["9mysCh"]),
                  action: () => A(),
              });
}
