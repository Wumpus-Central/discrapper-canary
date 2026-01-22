n.d(t, { A: () => u });
var r = n(157559),
    i = n(734057),
    a = n(576705),
    s = n(994500),
    o = n(694318),
    l = n(652215),
    c = n(985018);
function u(e, t) {
    if (s.A.isBlockedForMessage(e))
        return (
            r.A.show({
                title: c.intl.string(c.t["j7eA/g"]),
                body: c.intl.formatToPlainString(c.t.dTNNgr, { name: e.author.username }),
                confirmText: c.intl.string(c.t.BddRzS),
            }),
            !1
        );
    if (s.A.isIgnoredForMessage(e))
        return (
            r.A.show({
                title: c.intl.string(c.t.XyWoKV),
                body: c.intl.formatToPlainString(c.t["8t8doK"], { name: e.author.username }),
                confirmText: c.intl.string(c.t.BddRzS),
            }),
            !1
        );
    if ((0, o.kf)(e)) {
        let n = i.A.getChannel(e.channel_id);
        return (
            (null == n ? void 0 : n.isPrivate()) || a.A.can(l.xBc.MODERATE_MEMBERS, n)
                ? r.A.show({
                      title: c.intl.string(c.t["cZcG+P"]),
                      body: c.intl.formatToPlainString(c.t["1YTWty"], { name: e.author.username }),
                      confirmText: c.intl.string(c.t["+TSRGD"]),
                      cancelText: c.intl.string(c.t["ETE/oC"]),
                      onConfirm: t,
                  })
                : r.A.show({
                      title: c.intl.string(c.t["6vJKFk"]),
                      body: c.intl.formatToPlainString(c.t.zKNgPF, { name: e.author.username }),
                      confirmText: c.intl.string(c.t.BddRzS),
                  }),
            !1
        );
    }
    return !0;
}
