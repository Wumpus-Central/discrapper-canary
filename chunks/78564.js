var r = n(46676);
n.d(
    t,
    {},
    {
        B: function (e) {
            let t = 0,
                n = null,
                r = null,
                l = null,
                i = !1,
                a = !1,
                o = !1;
            function u() {
                (async function () {
                    if (!(i || a || o)) {
                        ((i = !0), e.update("uploading", r));
                        try {
                            if (((n ??= await e.capture(t++)), null == n)) throw Error("capture failed");
                            if (((r ??= await e.composite(n)), null == r)) throw Error("composite failed");
                            if (
                                (null == l || (await e.isStaged(l)) || (l = null),
                                o || (e.update("uploading", r), (l ??= await e.upload(r)), o))
                            )
                                return;
                            if (!e.send(l)) throw Error("send failed");
                            ((a = !0), e.update("sent", r));
                        } catch {
                            o || e.update("failed", r);
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
        C: function (e) {
            return (0, r.jG)(e.history.present) && e.sketchDismissedFor !== e.history.present;
        },
    },
);
