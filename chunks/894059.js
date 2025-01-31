t.d(n, { Z: () => s });
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(518756),
    r = t(576749),
    d = t(388032);
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = (0, a.Z)(e),
        o = (0, r.Z)();
    return s
        ? (0, i.jsx)(l.sNh, {
              id: 'create-event',
              label: d.intl.string(d.t['60lJ0N']),
              icon: n ? l.VZI : void 0,
              action: () => {
                  (0, l.ZDy)(async () => {
                      let { default: n } = await Promise.all([t.e('18543'), t.e('22347'), t.e('58023'), t.e('99267')]).then(t.bind(t, 779250));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              guildId: e
                          });
                  }, o);
              }
          })
        : null;
}
