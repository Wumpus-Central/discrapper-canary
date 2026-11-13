var l = n(46676);
n.d(
    t,
    {},
    {
        B: function (e) {
            let t = 0,
                n = null,
                l = null,
                r = null,
                i = !1,
                a = !1,
                o = !1;
            function u() {
                (async function () {
                    if (!(i || a || o)) {
                        ((i = !0), e.update("uploading", l));
                        try {
                            if (((n ??= await e.capture(t++)), null == n)) throw Error("capture failed");
                            if (((l ??= await e.composite(n)), null == l)) throw Error("composite failed");
                            if (
                                (null == r || (await e.isStaged(r)) || (r = null),
                                o || (e.update("uploading", l), (r ??= await e.upload(l)), o))
                            )
                                return;
                            if (!e.send(r)) throw Error("send failed");
                            ((a = !0), e.update("sent", l));
                        } catch {
                            o || e.update("failed", l);
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
            return (0, l.jG)(e.history.present) && e.sketchDismissedFor !== e.history.present;
        },
    },
);
