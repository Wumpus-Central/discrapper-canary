n.d(t, { Z: () => u });
var r = n(668781),
    i = n(592125),
    a = n(496675),
    o = n(699516),
    s = n(493892),
    l = n(981631),
    c = n(388032);
function u(e, t) {
    if (o.Z.isBlockedForMessage(e))
        return (
            r.Z.show({
                title: c.intl.string(c.t["j7eA/g"]),
                body: c.intl.formatToPlainString(c.t.dTNNgr, { name: e.author.username }),
                confirmText: c.intl.string(c.t.BddRzS),
            }),
            !1
        );
    if (o.Z.isIgnoredForMessage(e))
        return (
            r.Z.show({
                title: c.intl.string(c.t.XyWoKV),
                body: c.intl.formatToPlainString(c.t["8t8doK"], { name: e.author.username }),
                confirmText: c.intl.string(c.t.BddRzS),
            }),
            !1
        );
    if ((0, s.DQ)(e)) {
        let n = i.Z.getChannel(e.channel_id);
        return (
            (null == n ? void 0 : n.isPrivate()) || a.Z.can(l.Plq.MODERATE_MEMBERS, n)
                ? r.Z.show({
                      title: c.intl.string(c.t["cZcG+P"]),
                      body: c.intl.formatToPlainString(c.t["1YTWty"], { name: e.author.username }),
                      confirmText: c.intl.string(c.t["+TSRGD"]),
                      cancelText: c.intl.string(c.t["ETE/oC"]),
                      onConfirm: t,
                  })
                : r.Z.show({
                      title: c.intl.string(c.t["6vJKFk"]),
                      body: c.intl.formatToPlainString(c.t.zKNgPF, { name: e.author.username }),
                      confirmText: c.intl.string(c.t.BddRzS),
                  }),
            !1
        );
    }
    return !0;
}
