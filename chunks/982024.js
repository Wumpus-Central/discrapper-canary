var a = n(858899),
    t = n(73153),
    i = n(407876),
    o = n(432005),
    r = n(963852),
    d = n(195880),
    c = n(101392),
    s = n(399263),
    u = n(792996);
function h() {
    (0, a.P0)({ text: u.intl.string(u.t.B3vFdU), variant: "critical" });
}
class m extends Error {}
function f(e) {
    t.h.dispatch({ type: "SLOWMODE_SET_COOLDOWN", channelId: e, slowmodeType: c.R.SendMessage, cooldownMs: 0 });
}
function p(e, l) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        a = (0, d.m)(),
        c = new i.A();
    function u(l) {
        s.A.getFiles(e.channelId).some((e) => e.id === a) &&
            ((c._file = { ...c._file, ...l }),
            t.h.dispatch({ type: "UPLOAD_PROGRESS", channelId: e.channelId, file: c._file }));
    }
    function h() {
        t.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: e.channelId, file: c._file, aborted: !1 });
    }
    return (
        (c.id = a),
        (c._file = { ...c._file, id: a, isPreparing: !0, items: l, preparedCount: 0, preparedTotal: n }),
        c.on("complete", h),
        t.h.dispatch({
            type: "UPLOAD_START",
            channelId: e.channelId,
            file: c._file,
            uploader: c,
            message: (0, o.rh)((0, r.Ay)({ ...e, nonce: a })),
        }),
        {
            nonce: a,
            uploader: c,
            clear: h,
            setPreparedCount: function (e) {
                u({ preparedCount: e });
            },
            markFailed: function () {
                u({ isPreparing: !1, preparationFailed: !0 });
            },
        }
    );
}
n.d(
    l,
    {},
    {
        Dx: f,
        MV: m,
        UQ: h,
        bH: function (e) {
            let { message: l, items: n, send: a } = e;
            for (let e of n) null != e.preparation && (e.preparation.claimed = !0);
            let t = n.filter((e) => null != e.preparation),
                i = p(l, n, t.length),
                o = 0;
            async function r(e) {
                if (null == e.preparation) return !0;
                let l = await e.preparation.ready;
                return (i.setPreparedCount(++o), l);
            }
            !(async function () {
                try {
                    if ((await Promise.all(n.map(r))).some((e) => !e) || n.some((e) => e.isCancelled()))
                        throw Error("Attachment preparation failed");
                    (await a(i), i.clear());
                } catch (e) {
                    (e instanceof m || h(), i.markFailed(), f(l.channelId));
                }
            })();
        },
        lH: p,
    },
);
