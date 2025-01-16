var i = r(200651);
r(192379);
var a = r(239091),
    s = r(644956),
    o = r(819366),
    l = r(592125);
n.Z = {
    handleUserContextMenu(e, n, s, o) {
        let u = l.Z.getChannel(n);
        null != u &&
            (0, a.jW)(o, async () => {
                let { default: n } = await Promise.all([r.e('50506'), r.e('79695'), r.e('51269'), r.e('13351'), r.e('33862'), r.e('92453'), r.e('13125'), r.e('54492')]).then(r.bind(r, 757387));
                return (r) =>
                    (0, i.jsx)(n, {
                        ...r,
                        user: e,
                        channel: u,
                        guildId: s
                    });
            });
    },
    react(e, n, r) {
        let { userId: a, channelId: l, parsedUserId: u, roleId: c, roleName: d, viewingChannelId: f } = e;
        return null == a && (null != c || '@everyone' === d || '@here' === d)
            ? (0, i.jsx)(
                  s.Z,
                  {
                      inlinePreview: r.formatInline,
                      ...e,
                      children: n(e.content, r)
                  },
                  r.key
              )
            : (0, i.jsx)(
                  o.Z,
                  {
                      className: 'mention',
                      userId: a,
                      channelId: l,
                      viewingChannelId: f,
                      parsedUserId: u,
                      content: n(e.content, r),
                      inlinePreview: r.noStyleAndInteraction
                  },
                  r.key
              );
    }
};
