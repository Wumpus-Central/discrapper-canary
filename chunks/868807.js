(n.d(t, { a: () => h }), n(388685));
var r = n(392711),
    i = n.n(r),
    o = n(442837),
    a = n(544891),
    s = n(570140),
    l = n(375954),
    c = n(306680),
    u = n(748902),
    d = n(981631);
let f = 25,
    _ = new Set(),
    p = null;
function h(e) {
    let { id: t } = e,
        {
            loaded: n,
            message: r,
            error: i
        } = (0, o.cj)(
            [u.Z, l.Z, c.ZP],
            () => {
                let e = c.ZP.lastMessageId(t),
                    n = u.Z.getMessageRequestPreview(t);
                if (null == n.message && null != e) {
                    let n = l.Z.getMessage(t, e);
                    if (null != n)
                        return {
                            loaded: !0,
                            error: !1,
                            message: n
                        };
                }
                return n;
            },
            [t]
        ),
        a = (0, o.e7)([u.Z], () => u.Z.shouldLoadMessageRequestPreview(t), [t]);
    return (
        !n && null == r && a && m(t),
        {
            loaded: n,
            error: i,
            message: r
        }
    );
}
function m(e) {
    (_.add(e), null == p && (p = setTimeout(g, 0)));
}
async function g() {
    try {
        for (; !i().isEmpty(_); ) await E();
    } finally {
        p = null;
    }
}
async function E() {
    let e = Array.from(_).slice(0, f);
    try {
        let t = await a.tn.get({
            url: d.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
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
        for (let t of e) _.delete(t);
    }
}
