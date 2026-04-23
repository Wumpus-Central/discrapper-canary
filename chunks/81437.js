n.d(t, { A: () => c });
var i = n(157559),
    l = n(734057),
    a = n(576705),
    s = n(994500),
    r = n(694318),
    o = n(652215),
    d = n(985018);
function c(e, t) {
    if (s.A.isBlockedForMessage(e))
        return (
            i.A.show({
                title: d.intl.string(d.t["j7eA/g"]),
                body: d.intl.formatToPlainString(d.t.dTNNgr, { name: e.author.username }),
                confirmText: d.intl.string(d.t.BddRzS),
            }),
            !1
        );
    if (s.A.isIgnoredForMessage(e))
        return (
            i.A.show({
                title: d.intl.string(d.t.XyWoKV),
                body: d.intl.formatToPlainString(d.t["8t8doK"], { name: e.author.username }),
                confirmText: d.intl.string(d.t.BddRzS),
            }),
            !1
        );
    if ((0, r.kf)(e)) {
        let n = l.A.getChannel(e.channel_id);
        return (
            n?.isPrivate() || a.A.can(o.xBc.MODERATE_MEMBERS, n)
                ? i.A.show({
                      title: d.intl.string(d.t["cZcG+P"]),
                      body: d.intl.formatToPlainString(d.t["1YTWty"], { name: e.author.username }),
                      confirmText: d.intl.string(d.t["+TSRGD"]),
                      cancelText: d.intl.string(d.t["ETE/oC"]),
                      onConfirm: t,
                  })
                : i.A.show({
                      title: d.intl.string(d.t["6vJKFk"]),
                      body: d.intl.formatToPlainString(d.t.zKNgPF, { name: e.author.username }),
                      confirmText: d.intl.string(d.t.BddRzS),
                  }),
            !1
        );
    }
    return !0;
}
