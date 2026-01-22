i.d(e, { _: () => E });
var n = i(311907),
    l = i(290595),
    s = i(171316),
    r = i(419954),
    u = i(153488),
    a = i(975571),
    o = i(780964),
    T = i(997913),
    A = i(652215),
    S = i(985018);
let E = (0, r.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => S.intl.string(S.t.MNKzyg),
    useSubtitle: () =>
        S.intl.format(S.t["eQL/Mr"], { helpdeskArticle: a.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, n.bG)([u.A], () => u.A.hasConsented(A.YAq.PERSONALIZATION));
    },
    setValue: function (t) {
        t
            ? (0, l.U)([A.YAq.PERSONALIZATION], []).catch(T.i)
            : (0, T.O)({
                  header: S.intl.string(S.t["9SNpzv"]),
                  confirmText: S.intl.string(S.t["9g5UGw"]),
                  cancelText: S.intl.string(S.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, l.U)([], [A.YAq.PERSONALIZATION]).catch(T.i);
                  },
                  body: S.intl.string(S.t.gJvDDh),
              });
    },
    useDisabled: s.uM,
});
