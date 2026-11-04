t.d(e, { A: () => L });
var n = t(477900);
t(582128);
var i = t(477782),
    a = t(855986),
    d = t(47167),
    r = t(5180),
    s = t(769765),
    u = t(71393),
    o = t(576705),
    c = t(994500),
    g = t(967198),
    b = t(543465),
    h = t(287809),
    f = t(44757),
    A = t(97587),
    v = t(60914),
    m = t(79843);
t(652215);
var p = t(792996);
let x = [];
function j(l) {
    return "null" === l.id ? null : l;
}
function _(l, e) {
    return (
        l.length === e.length &&
        l.every((l, t) => l.id === e[t].id && l.label === e[t].label && l.disabled === e[t].disabled)
    );
}
var D = t(466152);
function I(l, e) {
    (0, D.A)(l.guildId, l.channel, e.targetParentId, e.updates);
}
function L(l) {
    let e = (function (l) {
        let {
                isFavorites: e,
                listGuildId: t,
                categories: n,
                listChannel: i,
                isBlocked: D,
                guild: I,
            } = (function (l) {
                let e = (0, a.bG)([g.A], () => g.A.getGuildId()),
                    t = (0, r.ai)(e),
                    n = t ? e : l.getGuildId(),
                    {
                        categories: i,
                        listChannel: d,
                        isBlocked: c,
                        guild: h,
                    } = (0, a.cf)(
                        [s.A, u.A, o.A, b.Ay],
                        () => ({
                            categories: s.A.getCategories(n),
                            listChannel: (0, v.A)(n, l.id) ?? l,
                            isBlocked: null != (0, m.A)(l, n),
                            guild: u.A.getGuild(n),
                        }),
                        [n, l],
                    );
                return { isFavorites: t, listGuildId: n, categories: i, listChannel: d, isBlocked: c, guild: h };
            })(l),
            L = i.isCategory(),
            M = (0, f.cM)(i.parent_id, n),
            P = i.isCategory()
                ? n._categories.filter((l) => {
                      let { channel: e } = l;
                      return "null" !== e.id;
                  })
                : (0, f.dS)(i, n),
            k = P.length > 1 ? { first: P[0], last: P[P.length - 1] } : null,
            y = (0, a.bG)(
                [s.A, u.A, o.A, h.default, c.A],
                () =>
                    L
                        ? x
                        : n._categories
                              .filter((l) => {
                                  let { channel: t } = l;
                                  return e || (0, A.JL)(j(t));
                              })
                              .map((l) => {
                                  let { channel: t } = l,
                                      n = j(t);
                                  return {
                                      id: t.id,
                                      label: (0, d.m1)(t, h.default, c.A),
                                      disabled: t.id === M || !(e || (null != I && (0, A.Ay)(n, I))),
                                  };
                              }),
                [n, L, M, e, I],
                _,
            );
        if (__OVERLAY__ || (!e && i.isThread()) || null == t || D || (!y.some((l) => !l.disabled) && null == k))
            return null;
        let C = L || "null" === M;
        return {
            label: p.intl.string(p.t.A95Fzm),
            guildId: t,
            channel: i,
            isFavorites: e,
            destinations: y,
            placements:
                null != k
                    ? {
                          firstLabel: p.intl.string(C ? p.t.IMqgs9 : p.t.Q9TKt6),
                          lastLabel: p.intl.string(C ? p.t["8fQe3x"] : p.t["/Pkxmw"]),
                          isFirst: k.first.channel.id === i.id,
                          isLast: k.last.channel.id === i.id,
                      }
                    : null,
            getDestinationMove: function (l) {
                return { targetParentId: "null" === l ? null : l, updates: (0, f.vX)(i, n, l, "last") };
            },
            getPlacementMove: function (l) {
                return { targetParentId: i.parent_id ?? null, updates: (0, f.vX)(i, n, M, l) };
            },
        };
    })(l);
    if (null == e) return null;
    let t = e.destinations.find((l) => "null" === l.id),
        D = e.destinations.filter((l) => "null" !== l.id),
        L = e.destinations.some((l) => !l.disabled),
        { placements: M } = e;
    return (0, n.jsxs)(i.Dr, {
        id: "move-to",
        label: e.label,
        children: [
            (0, n.jsx)(i.rX, {
                children:
                    L && D.length > 0
                        ? (0, n.jsxs)(i.Dr, {
                              id: "move-to-category",
                              label: p.intl.string(p.t.RZY2fr),
                              children: [
                                  null != t
                                      ? (0, n.jsx)(i.rX, {
                                            children: (0, n.jsx)(i.Dr, {
                                                id: String(t.id),
                                                label: t.label,
                                                disabled: t.disabled,
                                                action: () => I(e, e.getDestinationMove(t.id)),
                                            }),
                                        })
                                      : null,
                                  (0, n.jsx)(i.rX, {
                                      children: D.map((l) =>
                                          (0, n.jsx)(
                                              i.Dr,
                                              {
                                                  id: String(l.id),
                                                  label: l.label,
                                                  disabled: l.disabled,
                                                  action: () => I(e, e.getDestinationMove(l.id)),
                                              },
                                              l.id,
                                          ),
                                      ),
                                  }),
                              ],
                          })
                        : null,
            }),
            (0, n.jsx)(i.rX, {
                children:
                    null != M
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(i.Dr, {
                                      id: "move-to-first",
                                      label: M.firstLabel,
                                      disabled: M.isFirst,
                                      action: () => I(e, e.getPlacementMove("first")),
                                  }),
                                  (0, n.jsx)(i.Dr, {
                                      id: "move-to-last",
                                      label: M.lastLabel,
                                      disabled: M.isLast,
                                      action: () => I(e, e.getPlacementMove("last")),
                                  }),
                              ],
                          })
                        : null,
            }),
        ],
    });
}
