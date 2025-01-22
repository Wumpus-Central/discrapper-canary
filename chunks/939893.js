var i = n(200651);
n(192379);
var a = n(477660),
    r = n.n(a),
    l = n(481060),
    o = n(447543),
    s = n(15470),
    c = n(960904),
    d = n(830121),
    u = n(746878),
    m = n(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    h = {
        ...m.Z.rules,
        heading: { ...s.i.heading },
        image: { ...r().defaultRules.image },
        inviteLink: {
            order: m.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
                let i = (0, d.zO)(e[0]);
                return null == i || i.type !== c.g.INVITE
                    ? {
                          type: 'text',
                          content: e[0]
                      }
                    : {
                          type: 'inviteLink',
                          content: [
                              {
                                  type: 'text',
                                  content: e[0]
                              }
                          ],
                          onClick: () => {
                              var e;
                              o.Z.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: i.code,
                                  context: { location: 'Application Directory' }
                              }),
                                  null === (e = n.closeModal) || void 0 === e || e.call(n);
                          }
                      };
            },
            react: (e, t, n) =>
                (0, i.jsx)(
                    l.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, u.S)(e, t, n)
                    },
                    n.key
                )
        }
    };
t.Z = h;
