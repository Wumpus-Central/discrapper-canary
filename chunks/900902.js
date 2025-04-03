n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(901461),
    o = n(453687),
    a = n(464891),
    s = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let p = i.memo(function (e) {
        let { message: t, channel: n, compact: l = !1, groupId: o, isGroupStart: s, usernameProfile: p, avatarProfile: h, setPopout: f, author: m, repliedMessage: g, roleIcon: b } = e,
            _ = (0, u.wq)(t.author.id, n.id),
            C = (0, u.XO)(t, n, p, f),
            y = (0, u.R9)(h, f),
            x = i.useCallback(() => {
                f({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                });
            }, [f]);
        return (0, r.jsx)(a.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: m,
            compact: l,
            subscribeToGroupId: o,
            showTimestampOnHover: !s && l && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: h,
            showUsernamePopout: p,
            onClickAvatar: y,
            onClickUsername: C,
            onContextMenu: _,
            onPopoutRequestClose: x,
            roleIcon: b
        });
    }),
    h = i.memo(s.Z);
function f(e) {
    let { messageProps: t, setPopout: n, messagePopouts: i, replyReference: a, author: s, repliedMessage: c, roleIcon: u } = e,
        { message: d, compact: f, channel: m, groupId: g } = t,
        { usernameProfile: b, avatarProfile: _ } = i;
    if ((0, l.Z)(d)) return null;
    let C = d.id === g;
    return C || f || null != a
        ? (0, r.jsx)(p, {
              message: d,
              channel: m,
              compact: f,
              subscribeToGroupId: g,
              isGroupStart: C,
              groupId: g,
              setPopout: n,
              usernameProfile: b,
              avatarProfile: _,
              author: s,
              repliedMessage: c,
              roleIcon: u
          })
        : (0, r.jsx)(h, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, o.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
