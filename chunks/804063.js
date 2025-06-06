n.d(t, { Z: () => o });
var r = n(668781),
    i = n(699516),
    l = n(493892),
    a = n(388032);
function o(e) {
    let t = null;
    return (
        i.Z.isBlockedForMessage(e)
            ? (t = {
                  title: a.t['j7eA/v'],
                  body: a.t.dTNNgo
              })
            : i.Z.isIgnoredForMessage(e)
              ? (t = {
                    title: a.t.XyWoKS,
                    body: a.t['8t8doK']
                })
              : (0, l.DQ)(e) &&
                (t = {
                    title: a.t['6vJKFh'],
                    body: a.t.zKNgPD
                }),
        null == t ||
            (r.Z.show({
                title: a.intl.string(t.title),
                body: a.intl.formatToPlainString(t.body, { name: e.author.username }),
                confirmText: a.intl.string(a.t.BddRzc)
            }),
            !1)
    );
}
