n.d(t, { Z: () => g }), n(388685);
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
    h = n(388032),
    m = n(597754);
function g() {
    let e = (0, a.cj)([l.Z], () => l.Z.hasConsented(p.pjP.PERSONALIZATION)),
        [t, n] = i.useState(e),
        g = (0, s.LN)(),
        E = (e) => {
            e
                ? (0, o.g)([p.pjP.PERSONALIZATION], [])
                      .catch(f.S)
                      .then(() => n(!0))
                : (0, f.V)({
                      header: h.intl.string(h.t["9SNpzv"]),
                      confirmText: h.intl.string(h.t["9g5UGw"]),
                      cancelText: h.intl.string(h.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, o.g)([], [p.pjP.PERSONALIZATION])
                              .catch(f.S)
                              .then(() => n(!1));
                      },
                      body: h.intl.string(h.t.gJvDDh),
                  });
        };
    return (0, r.jsx)(u.U, {
        setting: _.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(d.ZP, {
            title: h.intl.string(h.t.MNKzyg),
            note: h.intl.format(h.t["eQL/Mr"], { helpdeskArticle: c.Z.getArticleURL(p.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: E,
            disabled: g,
            tooltipText: g ? h.intl.string(m.default["6Af/cw"]) : void 0,
        }),
    });
}
