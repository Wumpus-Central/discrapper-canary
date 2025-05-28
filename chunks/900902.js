n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(901461),
    a = n(453687),
    o = n(464891),
    s = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let p = i.memo(function (e) {
        let { message: t, channel: n, compact: l = !1, groupId: a, isGroupStart: s, usernameProfile: p, avatarProfile: h, setPopout: f, author: m, repliedMessage: g, roleIcon: b } = e,
            _ = (0, u.wq)(t.author.id, n.id),
            x = (0, u.XO)(t, n, p, f),
            y = (0, u.R9)(h, f),
            C = i.useCallback(() => {
                f({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                });
            }, [f]);
        return (0, r.jsx)(o.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: m,
            compact: l,
            subscribeToGroupId: a,
            showTimestampOnHover: !s && l && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: h,
            showUsernamePopout: p,
            onClickAvatar: y,
            onClickUsername: x,
            onContextMenu: _,
            onPopoutRequestClose: C,
            roleIcon: b
        });
    }),
    h = i.memo(s.Z);
function f(e) {
    let { messageProps: t, setPopout: n, messagePopouts: i, replyReference: o, author: s, repliedMessage: c, roleIcon: u } = e,
        { message: d, compact: f, channel: m, groupId: g } = t,
        { usernameProfile: b, avatarProfile: _ } = i;
    if ((0, l.Z)(d)) return null;
    let x = d.id === g;
    return x || f || null != o
        ? (0, r.jsx)(p, {
              message: d,
              channel: m,
              compact: f,
              subscribeToGroupId: g,
              isGroupStart: x,
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
              id: (0, a.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
