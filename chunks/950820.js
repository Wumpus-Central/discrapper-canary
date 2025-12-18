n.d(e, { T: () => E });
var i = n(442837),
    l = n(924628),
    s = n(915009),
    u = n(509613),
    r = n(480294),
    a = n(63063),
    o = n(313789),
    S = n(922628),
    T = n(981631),
    c = n(388032);
let E = (0, u.qs)(o.n.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => c.intl.string(c.t.MNKzyg),
    useSubtitle: () =>
        c.intl.format(c.t["eQL/Mr"], { helpdeskArticle: a.Z.getArticleURL(T.BhN.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.hasConsented(T.pjP.PERSONALIZATION));
    },
    setValue: function (t) {
        t
            ? (0, l.g)([T.pjP.PERSONALIZATION], []).catch(S.S)
            : (0, S.V)({
                  header: c.intl.string(c.t["9SNpzv"]),
                  confirmText: c.intl.string(c.t["9g5UGw"]),
                  cancelText: c.intl.string(c.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, l.g)([], [T.pjP.PERSONALIZATION]).catch(S.S);
                  },
                  body: c.intl.string(c.t.gJvDDh),
              });
    },
    useDisabled: s.LN,
});
