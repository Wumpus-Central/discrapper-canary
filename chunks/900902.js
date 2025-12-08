n.d(t, { Z: () => f });
var i = n(54381),
    r = n(473749),
    l = n(901461),
    a = n(453687),
    o = n(464891),
    s = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let p = r.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: a,
                isGroupStart: s,
                usernameProfile: p,
                avatarProfile: h,
                setPopout: f,
                author: m,
                repliedMessage: g,
                roleIcon: b,
            } = e,
            C = (0, u.wq)(t.author.id, n.id),
            y = (0, u.XO)(t, n, p, f),
            v = (0, u.R9)(h, f),
            _ = r.useCallback(() => {
                f({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                });
            }, [f]);
        return (0, i.jsx)(o.ZP, {
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
            onClickAvatar: v,
            onClickUsername: y,
            onContextMenu: C,
            onPopoutRequestClose: _,
            roleIcon: b,
        });
    }),
    h = r.memo(s.Z);
function f(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: r,
            replyReference: o,
            author: s,
            repliedMessage: c,
            roleIcon: u,
        } = e,
        { message: d, compact: f, channel: m, groupId: g } = t,
        { usernameProfile: b, avatarProfile: C } = r;
    if ((0, l.Z)(d)) return null;
    let y = d.id === g;
    return y || f || null != o
        ? (0, i.jsx)(p, {
              message: d,
              channel: m,
              compact: f,
              subscribeToGroupId: g,
              isGroupStart: y,
              groupId: g,
              setPopout: n,
              usernameProfile: b,
              avatarProfile: C,
              author: s,
              repliedMessage: c,
              roleIcon: u,
          })
        : (0, i.jsx)(h, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, a.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
