n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(901461),
    r = n(453687),
    s = n(464891),
    o = n(318713),
    c = n(507418),
    d = n(348238),
    u = n(981631);
let h = l.memo(function (e) {
        let { message: t, channel: n, compact: a = !1, groupId: r, isGroupStart: o, usernameProfile: h, avatarProfile: p, setPopout: m, author: f, repliedMessage: g, roleIcon: _ } = e,
            C = (0, d.wq)(t.author.id, n.id),
            x = (0, d.XO)(t, n, h, m),
            v = (0, d.R9)(p, m),
            E = l.useCallback(() => {
                m({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                });
            }, [m]);
        return (0, i.jsx)(s.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: f,
            compact: a,
            subscribeToGroupId: r,
            showTimestampOnHover: !o && a && t.type !== u.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: p,
            showUsernamePopout: h,
            onClickAvatar: v,
            onClickUsername: x,
            onContextMenu: C,
            onPopoutRequestClose: E,
            roleIcon: _
        });
    }),
    p = l.memo(o.Z);
function m(e) {
    let { messageProps: t, setPopout: n, messagePopouts: l, replyReference: s, author: o, repliedMessage: c, roleIcon: d } = e,
        { message: u, compact: m, channel: f, groupId: g } = t,
        { usernameProfile: _, avatarProfile: C } = l;
    if ((0, a.Z)(u)) return null;
    let x = u.id === g;
    return x || m || null != s
        ? (0, i.jsx)(h, {
              message: u,
              channel: f,
              compact: m,
              subscribeToGroupId: g,
              isGroupStart: x,
              groupId: g,
              setPopout: n,
              usernameProfile: _,
              avatarProfile: C,
              author: o,
              repliedMessage: c,
              roleIcon: d
          })
        : (0, i.jsx)(p, {
              compact: !0,
              timestamp: u.timestamp,
              isInline: !1,
              id: (0, r.Dv)(u),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
