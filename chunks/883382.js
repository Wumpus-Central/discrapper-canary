n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(924628),
    l = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    h = n(388032);
function p() {
    let e = (0, s.cj)([l.Z], () => l.Z.hasConsented(g.pjP.PERSONALIZATION)),
        [t, n] = r.useState(e);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(d.Z, {
            title: h.intl.string(h.t.MNKzys),
            note: h.intl.format(h.t['eQL/Mj'], { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: (e) => {
                e
                    ? (0, a.g)([g.pjP.PERSONALIZATION], [])
                          .catch(u.S)
                          .then(() => n(!0))
                    : (0, u.V)({
                          header: h.intl.string(h.t['9SNpzs']),
                          confirmText: h.intl.string(h.t['9g5UGx']),
                          cancelText: h.intl.string(h.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, a.g)([], [g.pjP.PERSONALIZATION])
                                  .catch(u.S)
                                  .then(() => n(!1));
                          },
                          body: h.intl.string(h.t.gJvDDg)
                      });
            }
        })
    });
}
