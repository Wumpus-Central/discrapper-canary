n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(924628),
    l = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    p = n(388032);
function h() {
    let e = (0, s.cj)([l.Z], () => l.Z.hasConsented(g.pjP.PERSONALIZATION)),
        [t, n] = i.useState(e);
    return (0, r.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(d.Z, {
            title: p.NW.string(p.t.MNKzys),
            note: p.NW.format(p.t['eQL/Mj'], { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: (e) => {
                e
                    ? (0, a.g)([g.pjP.PERSONALIZATION], [])
                          .catch(u.S)
                          .then(() => n(!0))
                    : (0, u.V)({
                          header: p.NW.string(p.t['9SNpzs']),
                          confirmText: p.NW.string(p.t['9g5UGx']),
                          cancelText: p.NW.string(p.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, a.g)([], [g.pjP.PERSONALIZATION])
                                  .catch(u.S)
                                  .then(() => n(!1));
                          },
                          body: p.NW.string(p.t.gJvDDg)
                      });
            }
        })
    });
}
