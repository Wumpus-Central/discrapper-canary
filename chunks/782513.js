var n = l(858899),
    i = l(792996);
l.d(
    t,
    {},
    {
        J9: function () {
            return { success: i.t.MWvxdK, partial: i.t.XGfY0Z, failed: i.t.aYi2eS };
        },
        MC: function () {
            return { success: i.t.SxnIX5, partial: i.t["MioRI/"], failed: i.t.sKXOvv };
        },
        Xh: function () {
            return { success: i.t.gUlqcY, partial: i.t.opkFpf, failed: i.t.Zq4ctl };
        },
        _P: function () {
            return { success: i.t["tU/Qsl"], partial: i.t.em58zY, failed: i.t.rE7o7Q };
        },
        cd: async function (e, t) {
            let l;
            try {
                l = await e;
            } catch {
                (0, n.P0)({ text: i.intl.string(t.failed), variant: "critical" });
                return;
            }
            let s = l.applied_user_ids.length + l.unchanged_user_ids.length,
                a = l.failed.length;
            0 === s
                ? (0, n.P0)({ text: i.intl.string(t.failed), variant: "critical" })
                : a > 0
                  ? (0, n.P0)({ text: i.intl.formatToPlainString(t.partial, { succeeded: s, failed: a }) })
                  : (0, n.P0)({ text: i.intl.formatToPlainString(t.success, { count: s }), variant: "success" });
        },
    },
);
