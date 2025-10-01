n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(924628),
    s = n(915009),
    l = n(480294),
    c = n(63063),
    u = n(838436),
    d = n(51331),
    f = n(922628),
    _ = n(726985),
    p = n(981631),
    h = n(388032);
function m() {
    let e = (0, a.cj)([l.Z], () => l.Z.hasConsented(p.pjP.PERSONALIZATION)),
        [t, n] = i.useState(e),
        m = (0, s.LN)(),
        g = (e) => {
            e
                ? (0, o.g)([p.pjP.PERSONALIZATION], [])
                      .catch(f.S)
                      .then(() => n(!0))
                : (0, f.V)({
                      header: h.intl.string(h.t["9SNpzs"]),
                      confirmText: h.intl.string(h.t["9g5UGx"]),
                      cancelText: h.intl.string(h.t["+ZLPw8"]),
                      onConfirm: () => {
                          (0, o.g)([], [p.pjP.PERSONALIZATION])
                              .catch(f.S)
                              .then(() => n(!1));
                      },
                      body: h.intl.string(h.t.gJvDDg),
                  });
        };
    return (0, r.jsx)(u.U, {
        setting: _.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(d.Z, {
            title: h.intl.string(h.t.MNKzys),
            note: h.intl.format(h.t["eQL/Mj"], { helpdeskArticle: c.Z.getArticleURL(p.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: g,
            disabled: m,
        }),
    });
}
