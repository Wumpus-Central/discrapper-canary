n.d(t, { D: () => r });
var l = n(200651);
n(192379);
var i = n(239091);
function r(e, t, r, a) {
    let s = r.getGuildId();
    return null != s
        ? (0, i.jW)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e('80125'), n.e('15799')]).then(n.bind(n, 357823));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          user: t,
                          channel: r,
                          guildId: s
                      });
              },
              a
          )
        : (0, i.jW)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e('80125'), n.e('45078')]).then(n.bind(n, 238296));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          user: t,
                          channel: r
                      });
              },
              a
          );
}
