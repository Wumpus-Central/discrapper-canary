n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(239091),
    a = n(644956),
    s = n(819366),
    o = n(592125);
let l = {
    handleUserContextMenu(e, t, a, s) {
        let l = o.Z.getChannel(t);
        null != l &&
            (0, r.jW)(s, async () => {
                let { default: t } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('13125'), n.e('61389')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        user: e,
                        channel: l,
                        guildId: a
                    });
            });
    },
    react(e, t, n) {
        let { userId: r, channelId: o, parsedUserId: l, roleId: u, roleName: c, viewingChannelId: d } = e;
        return null == r && (null != u || '@everyone' === c || '@here' === c)
            ? (0, i.jsx)(
                  a.Z,
                  {
                      inlinePreview: n.formatInline,
                      ...e,
                      children: t(e.content, n)
                  },
                  n.key
              )
            : (0, i.jsx)(
                  s.Z,
                  {
                      className: 'mention',
                      userId: r,
                      channelId: o,
                      viewingChannelId: d,
                      parsedUserId: l,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction
                  },
                  n.key
              );
    }
};
