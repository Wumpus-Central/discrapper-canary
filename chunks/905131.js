n.d(t, { Z: () => m });
var r = n(951288),
    a = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    c = n(276264),
    u = n(850020),
    s = n(271383),
    d = n(594174),
    _ = n(468324);
let m = a.memo(function (e) {
    let { userId: t, guildId: n, isPicked: a, isCurrent: i } = e,
        m = (0, o.e7)([d.default], () => d.default.getUser(t)),
        f = (0, o.e7)([s.ZP], () => (null != n ? s.ZP.getMember(n, t) : null)),
        h = (0, u.K)({
            user: m,
            guildId: null != n ? n : void 0,
        });
    return null == m
        ? null
        : (0, r.jsx)("li", {
              className: l()(_.memberItem, {
                  [_.picked]: a && !i,
                  [_.currentPick]: i,
              }),
              "data-member-id": t,
              children: (0, r.jsx)(c.Z, {
                  user: m,
                  nick: null == f ? void 0 : f.nick,
                  colorString: null == f ? void 0 : f.colorString,
                  colorStrings: null == f ? void 0 : f.colorStrings,
                  guildId: null != n ? n : void 0,
                  nameplate: i ? h : null,
                  hideClanTag: !0,
                  className: _.memberListItem,
                  hideSubtext: !0,
              }),
          });
});
