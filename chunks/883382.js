n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(924628),
    s = n(915009),
    l = n(480294),
    c = n(63063),
    u = n(838436),
    d = n(51331),
    f = n(922628),
    p = n(726985),
    _ = n(981631),
    m = n(388032),
    h = n(517319);
function g() {
    let e = (0, a.cj)([l.Z], () => l.Z.hasConsented(_.pjP.PERSONALIZATION)),
        [t, n] = i.useState(e),
        g = (0, s.LN)(),
        E = (e) => {
            e
                ? (0, o.g)([_.pjP.PERSONALIZATION], [])
                      .catch(f.S)
                      .then(() => n(!0))
                : (0, f.V)({
                      header: m.intl.string(m.t["9SNpzv"]),
                      confirmText: m.intl.string(m.t["9g5UGw"]),
                      cancelText: m.intl.string(m.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, o.g)([], [_.pjP.PERSONALIZATION])
                              .catch(f.S)
                              .then(() => n(!1));
                      },
                      body: m.intl.string(m.t.gJvDDh),
                  });
        };
    return (0, r.jsx)(u.U, {
        setting: p.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(d.ZP, {
            title: m.intl.string(m.t.MNKzyg),
            note: m.intl.format(m.t["eQL/Mr"], { helpdeskArticle: c.Z.getArticleURL(_.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: E,
            disabled: g,
            tooltipText: g ? m.intl.string(h.default["6Af/cw"]) : void 0,
        }),
    });
}
