i.d(n, { A: () => g });
var r = i(157559),
    e = i(734057),
    o = i(576705),
    a = i(994500),
    s = i(694318),
    l = i(652215),
    d = i(375708);
function g(t, n) {
    if (a.A.isBlockedForMessage(t))
        return (
            r.A.show({
                title: d.intl.string(d.t["j7eA/g"]),
                body: d.intl.formatToPlainString(d.t.dTNNgr, { name: t.author.username }),
                confirmText: d.intl.string(d.t.BddRzS),
            }),
            !1
        );
    if (a.A.isIgnoredForMessage(t))
        return (
            r.A.show({
                title: d.intl.string(d.t.XyWoKV),
                body: d.intl.formatToPlainString(d.t["8t8doK"], { name: t.author.username }),
                confirmText: d.intl.string(d.t.BddRzS),
            }),
            !1
        );
    if ((0, s.kf)(t)) {
        let i = e.A.getChannel(t.channel_id);
        return (
            i?.isPrivate() || o.A.can(l.xBc.MODERATE_MEMBERS, i)
                ? r.A.show({
                      title: d.intl.string(d.t["cZcG+P"]),
                      body: d.intl.formatToPlainString(d.t["1YTWty"], { name: t.author.username }),
                      confirmText: d.intl.string(d.t["+TSRGD"]),
                      cancelText: d.intl.string(d.t["ETE/oC"]),
                      onConfirm: n,
                  })
                : r.A.show({
                      title: d.intl.string(d.t["6vJKFk"]),
                      body: d.intl.formatToPlainString(d.t.zKNgPF, { name: t.author.username }),
                      confirmText: d.intl.string(d.t.BddRzS),
                  }),
            !1
        );
    }
    return !0;
}
