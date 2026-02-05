i.d(e, { _: () => S });
var n = i(311907),
    l = i(290595),
    s = i(171316),
    r = i(419954),
    a = i(153488),
    u = i(975571),
    o = i(780964),
    d = i(997913),
    T = i(652215),
    A = i(985018);
let S = (0, r.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => A.intl.string(A.t.MNKzyg),
    useSubtitle: () =>
        A.intl.format(A.t["eQL/Mr"], { helpdeskArticle: u.A.getArticleURL(T.MVz.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, n.bG)([a.A], () => a.A.hasConsented(T.YAq.PERSONALIZATION));
    },
    setValue: function (t) {
        t
            ? (0, l.U)([T.YAq.PERSONALIZATION], []).catch(d.i)
            : (0, d.O)({
                  header: A.intl.string(A.t["9SNpzv"]),
                  confirmText: A.intl.string(A.t["9g5UGw"]),
                  cancelText: A.intl.string(A.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, l.U)([], [T.YAq.PERSONALIZATION]).catch(d.i);
                  },
                  body: A.intl.string(A.t.gJvDDh),
              });
    },
    useDisabled: s.uM,
});
