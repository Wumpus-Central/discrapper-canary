n.d(t, { Z: () => s });
var r = n(668781),
    i = n(699516),
    a = n(493892),
    o = n(388032);
function s(e) {
    let t = null;
    return (
        i.Z.isBlockedForMessage(e)
            ? (t = {
                  title: o.t["j7eA/g"],
                  body: o.t.dTNNgr,
              })
            : i.Z.isIgnoredForMessage(e)
              ? (t = {
                    title: o.t.XyWoKV,
                    body: o.t["8t8doK"],
                })
              : (0, a.DQ)(e) &&
                (t = {
                    title: o.t["6vJKFk"],
                    body: o.t.zKNgPF,
                }),
        null == t ||
            (r.Z.show({
                title: o.intl.string(t.title),
                body: o.intl.formatToPlainString(t.body, { name: e.author.username }),
                confirmText: o.intl.string(o.t.BddRzS),
            }),
            !1)
    );
}
