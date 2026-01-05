n.d(t, { Z: () => b }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(586902),
    u = n(594174),
    d = n(5192),
    p = n(23303),
    f = n(354459),
    h = n(65154),
    m = n(398839);
let g = r.memo(function (e) {
    let { channel: t, participant: n } = e,
        l = (0, o.e7)([u.default], () => u.default.getUser(n.user.id), [n.user.id]),
        p = r.useMemo(() => {
            var e, i;
            return null !=
                (i = null != (e = d.ZP.getNickname(t.guild_id, t.id, l)) ? e : null == l ? void 0 : l.globalName)
                ? i
                : n.userNick;
        }, [t, l, n.userNick]),
        f = (0, c.Z)({
            userId: n.user.id,
            context: h.Yn.DEFAULT,
        });
    if (null == l) return null;
    let g = s.EFr.SIZE_32,
        b = s.ny6[g].size,
        y = l.getAvatarURL(t.guild_id, b);
    return (0, i.jsxs)("div", {
        className: a()(m.participantItem, { [m.speaking]: f }),
        children: [
            (0, i.jsx)(s.qEK, {
                className: m.avatar,
                size: g,
                src: y,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("div", {
                className: m.username,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: p,
                }),
            }),
        ],
    });
});
function b(e) {
    let { channel: t, participants: n } = e,
        l = (0, p.Z)(t.id),
        a = r.useMemo(() => {
            if (null == l) return [];
            let e = new Set(l.participants.map((e) => e.userId));
            return n.filter((t) => !(!(0, f.Io)(t) || e.has(t.user.id)));
        }, [n, l]);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: m.container,
              children: a.map((e) =>
                  (0, f.Io)(e)
                      ? (0, i.jsx)(
                            g,
                            {
                                channel: t,
                                participant: e,
                            },
                            e.user.id,
                        )
                      : null,
              ),
          });
}
