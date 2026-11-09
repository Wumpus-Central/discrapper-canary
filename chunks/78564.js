var r = n(46676);
n.d(
    e,
    {},
    {
        B: function (t) {
            let e = 0,
                n = null,
                r = null,
                l = null,
                i = !1,
                a = !1,
                o = !1;
            function u() {
                (async function () {
                    if (!(i || a || o)) {
                        ((i = !0), t.update("uploading", r));
                        try {
                            if (((n ??= await t.capture(e++)), null == n)) throw Error("capture failed");
                            if (((r ??= await t.composite(n)), null == r)) throw Error("composite failed");
                            if (
                                (null == l || (await t.isStaged(l)) || (l = null),
                                o || (t.update("uploading", r), (l ??= await t.upload(r)), o))
                            )
                                return;
                            if (!t.send(l)) throw Error("send failed");
                            ((a = !0), t.update("sent", r));
                        } catch {
                            o || t.update("failed", r);
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
            return (0, r.jG)(t.history.present) && t.sketchDismissedFor !== t.history.present;
        },
    },
);
