n.d(t, { Z: () => h });
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
                avatarProfile: f,
                setPopout: h,
                author: m,
                repliedMessage: g,
                roleIcon: b,
            } = e,
            y = (0, u.wq)(t.author.id, n.id),
            C = (0, u.XO)(t, n, p, h),
            v = (0, u.R9)(f, h),
            x = r.useCallback(() => {
                h({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                });
            }, [h]);
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
            showAvatarPopout: f,
            showUsernamePopout: p,
            onClickAvatar: v,
            onClickUsername: C,
            onContextMenu: y,
            onPopoutRequestClose: x,
            roleIcon: b,
        });
    }),
    f = r.memo(s.Z);
function h(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: r,
            replyReference: o,
            author: s,
            repliedMessage: c,
            roleIcon: u,
        } = e,
        { message: d, compact: h, channel: m, groupId: g } = t,
        { usernameProfile: b, avatarProfile: y } = r;
    if ((0, l.Z)(d)) return null;
    let C = d.id === g;
    return C || h || null != o
        ? (0, i.jsx)(p, {
              message: d,
              channel: m,
              compact: h,
              subscribeToGroupId: g,
              isGroupStart: C,
              groupId: g,
              setPopout: n,
              usernameProfile: b,
              avatarProfile: y,
              author: s,
              repliedMessage: c,
              roleIcon: u,
          })
        : (0, i.jsx)(f, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, a.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
