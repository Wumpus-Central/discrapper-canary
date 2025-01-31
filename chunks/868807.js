n.d(t, { a: () => m }), n(47120);
var i = n(392711),
    l = n.n(i),
    a = n(442837),
    r = n(544891),
    s = n(570140),
    o = n(375954),
    c = n(306680),
    d = n(748902),
    u = n(981631);
let h = new Set(),
    p = null;
function m(e) {
    var t;
    let { id: n } = e,
        {
            loaded: i,
            message: l,
            error: r
        } = (0, a.cj)(
            [d.Z, o.Z, c.ZP],
            () => {
                let e = c.ZP.lastMessageId(n),
                    t = d.Z.getMessageRequestPreview(n);
                if (null == t.message && null != e) {
                    let t = o.Z.getMessage(n, e);
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
        s = (0, a.e7)([d.Z], () => d.Z.shouldLoadMessageRequestPreview(n), [n]);
    return (
        !i && null == l && s && ((t = n), h.add(t), null == p && (p = setTimeout(f, 0))),
        {
            loaded: i,
            error: r,
            message: l
        }
    );
}
async function f() {
    try {
        for (; !l().isEmpty(h); ) await g();
    } finally {
        p = null;
    }
}
async function g() {
    let e = Array.from(h).slice(0, 25);
    try {
        let t = await r.tn.get({
            url: u.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: { channel_ids: e },
            rejectWithError: !0
        });
        s.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS',
            requestedChannelIds: e,
            supplementalData: t.body
        });
    } catch (t) {
        s.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR',
            requestedChannelIds: e
        });
    } finally {
        for (let t of e) h.delete(t);
    }
}
