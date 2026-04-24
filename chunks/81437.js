n.d(t, { A: () => d });
var i = n(157559),
    l = n(734057),
    a = n(576705),
    r = n(994500),
    s = n(694318),
    o = n(652215),
    c = n(985018);
function d(e, t) {
    if (r.A.isBlockedForMessage(e))
        return (
            i.A.show({
                title: c.intl.string(c.t["j7eA/g"]),
                body: c.intl.formatToPlainString(c.t.dTNNgr, { name: e.author.username }),
                confirmText: c.intl.string(c.t.BddRzS),
            }),
            !1
        );
    if (r.A.isIgnoredForMessage(e))
        return (
            i.A.show({
                title: c.intl.string(c.t.XyWoKV),
                body: c.intl.formatToPlainString(c.t["8t8doK"], { name: e.author.username }),
                confirmText: c.intl.string(c.t.BddRzS),
            }),
            !1
        );
    if ((0, s.kf)(e)) {
        let n = l.A.getChannel(e.channel_id);
        return (
            n?.isPrivate() || a.A.can(o.xBc.MODERATE_MEMBERS, n)
                ? i.A.show({
                      title: c.intl.string(c.t["cZcG+P"]),
                      body: c.intl.formatToPlainString(c.t["1YTWty"], { name: e.author.username }),
                      confirmText: c.intl.string(c.t["+TSRGD"]),
                      cancelText: c.intl.string(c.t["ETE/oC"]),
                      onConfirm: t,
                  })
                : i.A.show({
                      title: c.intl.string(c.t["6vJKFk"]),
                      body: c.intl.formatToPlainString(c.t.zKNgPF, { name: e.author.username }),
                      confirmText: c.intl.string(c.t.BddRzS),
                  }),
            !1
        );
    }
    return !0;
}
