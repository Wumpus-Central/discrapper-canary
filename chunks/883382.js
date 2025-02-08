n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(924628),
    a = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    h = n(388032);
function x() {
    let e = (0, r.cj)([a.Z], () => a.Z.hasConsented(g.pjP.PERSONALIZATION)),
        [t, n] = s.useState(e);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(d.Z, {
            title: h.intl.string(h.t.MNKzys),
            note: h.intl.format(h.t['eQL/Mj'], { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: (e) => {
                e
                    ? (0, l.g)([g.pjP.PERSONALIZATION], [])
                          .catch(u.S)
                          .then(() => n(!0))
                    : (0, u.V)({
                          header: h.intl.string(h.t['9SNpzs']),
                          confirmText: h.intl.string(h.t['9g5UGx']),
                          cancelText: h.intl.string(h.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, l.g)([], [g.pjP.PERSONALIZATION])
                                  .catch(u.S)
                                  .then(() => n(!1));
                          },
                          body: h.intl.string(h.t.gJvDDg)
                      });
            }
        })
    });
}
