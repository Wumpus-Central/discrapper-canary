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
                  title: o.t['j7eA/v'],
                  body: o.t.dTNNgo
              })
            : i.Z.isIgnoredForMessage(e)
              ? (t = {
                    title: o.t.XyWoKS,
                    body: o.t['8t8doK']
                })
              : (0, a.DQ)(e) &&
                (t = {
                    title: o.t['6vJKFh'],
                    body: o.t.zKNgPD
                }),
        null == t ||
            (r.Z.show({
                title: o.intl.string(t.title),
                body: o.intl.formatToPlainString(t.body, { name: e.author.username }),
                confirmText: o.intl.string(o.t.BddRzc)
            }),
            !1)
    );
}
