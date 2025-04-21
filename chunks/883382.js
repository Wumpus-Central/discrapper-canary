n.d(t, { Z: () => h }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(924628),
    a = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    p = n(388032);
function h() {
    let e = (0, s.cj)([a.Z], () => a.Z.hasConsented(g.pjP.PERSONALIZATION)),
        [t, n] = r.useState(e);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(d.Z, {
            title: p.intl.string(p.t.MNKzys),
            note: p.intl.format(p.t['eQL/Mj'], { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: (e) => {
                e
                    ? (0, l.g)([g.pjP.PERSONALIZATION], [])
                          .catch(u.S)
                          .then(() => n(!0))
                    : (0, u.V)({
                          header: p.intl.string(p.t['9SNpzs']),
                          confirmText: p.intl.string(p.t['9g5UGx']),
                          cancelText: p.intl.string(p.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, l.g)([], [g.pjP.PERSONALIZATION])
                                  .catch(u.S)
                                  .then(() => n(!1));
                          },
                          body: p.intl.string(p.t.gJvDDg)
                      });
            }
        })
    });
}
