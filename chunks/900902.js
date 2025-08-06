n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(901461),
    a = n(453687),
    s = n(464891),
    l = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let f = i.memo(function (e) {
        let { message: t, channel: n, compact: o = !1, groupId: a, isGroupStart: l, usernameProfile: f, avatarProfile: _, setPopout: p, author: h, repliedMessage: m, roleIcon: g } = e,
            E = (0, u.wq)(t.author.id, n.id),
            b = (0, u.XO)(t, n, f, p),
            y = (0, u.R9)(_, p),
            O = i.useCallback(() => {
                p({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                });
            }, [p]);
        return (0, r.jsx)(s.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: m,
            author: h,
            compact: o,
            subscribeToGroupId: a,
            showTimestampOnHover: !l && o && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: _,
            showUsernamePopout: f,
            onClickAvatar: y,
            onClickUsername: b,
            onContextMenu: E,
            onPopoutRequestClose: O,
            roleIcon: g
        });
    }),
    _ = i.memo(l.Z);
function p(e) {
    let { messageProps: t, setPopout: n, messagePopouts: i, replyReference: s, author: l, repliedMessage: c, roleIcon: u } = e,
        { message: d, compact: p, channel: h, groupId: m } = t,
        { usernameProfile: g, avatarProfile: E } = i;
    if ((0, o.Z)(d)) return null;
    let b = d.id === m;
    return b || p || null != s
        ? (0, r.jsx)(f, {
              message: d,
              channel: h,
              compact: p,
              subscribeToGroupId: m,
              isGroupStart: b,
              groupId: m,
              setPopout: n,
              usernameProfile: g,
              avatarProfile: E,
              author: l,
              repliedMessage: c,
              roleIcon: u
          })
        : (0, r.jsx)(_, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, a.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
