var l = n(46676);
n.d(
    e,
    {},
    {
        B: function (t) {
            let e = 0,
                n = null,
                l = null,
                r = null,
                i = !1,
                a = !1,
                o = !1;
            function u() {
                (async function () {
                    if (!(i || a || o)) {
                        ((i = !0), t.update("uploading", l));
                        try {
                            if (((n ??= await t.capture(e++)), null == n)) throw Error("capture failed");
                            if (((l ??= await t.composite(n)), null == l)) throw Error("composite failed");
                            if (
                                (null == r || (await t.isStaged(r)) || (r = null),
                                o || (t.update("uploading", l), (r ??= await t.upload(l)), o))
                            )
                                return;
                            if (!t.send(r)) throw Error("send failed");
                            ((a = !0), t.update("sent", l));
                        } catch {
                            o || t.update("failed", l);
                        } finally {
                            i = !1;
                        }
                    }
                })().catch(() => {});
            }
            return (
                u(),
                {
                    retry: u,
                    cancel: () => {
                        o = !0;
                    },
                }
            );
        },
        C: function (t) {
            return (0, l.jG)(t.history.present) && t.sketchDismissedFor !== t.history.present;
        },
    },
);
