n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(924628),
    s = n(480294),
    l = n(63063),
    c = n(838436),
    u = n(51331),
    d = n(922628),
    f = n(726985),
    _ = n(981631),
    p = n(388032);
function h() {
    let e = (0, a.cj)([s.Z], () => s.Z.hasConsented(_.pjP.PERSONALIZATION)),
        [t, n] = i.useState(e),
        h = (e) => {
            e
                ? (0, o.g)([_.pjP.PERSONALIZATION], [])
                      .catch(d.S)
                      .then(() => n(!0))
                : (0, d.V)({
                      header: p.intl.string(p.t["9SNpzs"]),
                      confirmText: p.intl.string(p.t["9g5UGx"]),
                      cancelText: p.intl.string(p.t["+ZLPw8"]),
                      onConfirm: () => {
                          (0, o.g)([], [_.pjP.PERSONALIZATION])
                              .catch(d.S)
                              .then(() => n(!1));
                      },
                      body: p.intl.string(p.t.gJvDDg),
                  });
        };
    return (0, r.jsx)(c.U, {
        setting: f.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(u.Z, {
            title: p.intl.string(p.t.MNKzys),
            note: p.intl.format(p.t["eQL/Mj"], { helpdeskArticle: l.Z.getArticleURL(_.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: h,
        }),
    });
}
