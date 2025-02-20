n.d(t, { a: () => f }), n(47120);
var r = n(392711),
    i = n.n(r),
    l = n(442837),
    o = n(544891),
    a = n(570140),
    s = n(375954),
    c = n(306680),
    u = n(748902),
    d = n(981631);
let p = new Set(),
    h = null;
function f(e) {
    var t;
    let { id: n } = e,
        {
            loaded: r,
            message: i,
            error: o
        } = (0, l.cj)(
            [u.Z, s.Z, c.ZP],
            () => {
                let e = c.ZP.lastMessageId(n),
                    t = u.Z.getMessageRequestPreview(n);
                if (null == t.message && null != e) {
                    let t = s.Z.getMessage(n, e);
                    if (null != t)
                        return {
                            loaded: !0,
                            error: !1,
                            message: t
                        };
                }
                return t;
            },
            [n]
        ),
        a = (0, l.e7)([u.Z], () => u.Z.shouldLoadMessageRequestPreview(n), [n]);
    return (
        !r && null == i && a && ((t = n), p.add(t), null == h && (h = setTimeout(m, 0))),
        {
            loaded: r,
            error: o,
            message: i
        }
    );
}
async function m() {
    try {
        for (; !i().isEmpty(p); ) await g();
    } finally {
        h = null;
    }
}
async function g() {
    let e = Array.from(p).slice(0, 25);
    try {
        let t = await o.tn.get({
            url: d.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: { channel_ids: e },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS',
            requestedChannelIds: e,
            supplementalData: t.body
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR',
            requestedChannelIds: e
        });
    } finally {
        for (let t of e) p.delete(t);
    }
}
