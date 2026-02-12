t.d(n, { A: () => c });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(816662),
    d = t(395504),
    s = t(543465),
    o = t(652215),
    u = t(985018);
function c(e) {
    let n = (0, d.jN)(e.guild_id),
        t = (0, r.bG)([s.Ay], () => s.Ay.isChannelOptedIn(e.guild_id, e.id)),
        c = (0, r.bG)([s.Ay], () => null != e.parent_id && s.Ay.isChannelOptedIn(e.guild_id, e.parent_id)),
        A = (0, r.bG)([s.Ay], () => s.Ay.isFavorite(e.guild_id, e.id)),
        E = () => {
            (0, a.AC)(e.guild_id, e.id, !t, { section: o.JJy.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, i.jsx)(l.Drp, {
            id: "opt-into-category",
            label: t ? u.intl.string(u.t["3zySTA"]) : u.intl.string(u.t["9mysCh"]),
            action: () => E(),
        });
    let g = A ? u.intl.string(u.t.z7I3gd) : u.intl.string(u.t["N2c/Un"]);
    return (
        A ? u.intl.string(u.t.M5PWSf) : u.intl.string(u.t.RMpwZu),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Drp, {
                    id: "opt-in-favorite-channel",
                    label: g,
                    action: () => {
                        (0, a.jA)(e.guild_id, e.id, !A, { section: o.JJy.CONTEXT_MENU });
                    },
                }),
                c
                    ? (0, i.jsx)(l.Drp, {
                          id: "opt-out-category",
                          label: u.intl.string(u.t.jNphKT),
                          action: () =>
                              void (
                                  null != e.parent_id &&
                                  (0, a.AC)(e.guild_id, e.parent_id, !1, { section: o.JJy.CONTEXT_MENU })
                              ),
                      })
                    : (0, i.jsx)(l.Drp, {
                          id: "opt-into-channel",
                          label: t ? u.intl.string(u.t["3zySTA"]) : u.intl.string(u.t["9mysCh"]),
                          action: () => E(),
                      }),
            ],
        })
    );
}
