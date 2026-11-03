n.d(t, { B: () => a, C: () => r });
var l = n(46676);
function r(e) {
    return (0, l.jG)(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
function a(e) {
    let t = 0,
        n = null,
        l = null,
        r = null,
        a = !1,
        i = !1,
        s = !1;
    async function u() {
        if (!(a || i || s)) {
            ((a = !0), e.update("uploading", l));
            try {
                if (((n ??= await e.capture(t++)), null == n)) throw Error("capture failed");
                if (((l ??= await e.composite(n)), null == l)) throw Error("composite failed");
                if (
                    (null == r || (await e.isStaged(r)) || (r = null),
                    s || (e.update("uploading", l), (r ??= await e.upload(l)), s))
                )
                    return;
                if (!e.send(r)) throw Error("send failed");
                ((i = !0), e.update("sent", l));
            } catch {
                s || e.update("failed", l);
            } finally {
                a = !1;
            }
        }
    }
    function o() {
        u().catch(() => {});
    }
    return (
        o(),
        {
            retry: o,
            cancel: () => {
                s = !0;
            },
        }
    );
}
