n.d(t, { I: () => A });
var i = n(735438),
    l = n.n(i),
    a = n(311907),
    s = n(562465),
    r = n(73153),
    o = n(320501),
    c = n(222823),
    d = n(401565),
    u = n(652215);
let h = new Set(),
    m = null;
function A(e) {
    var t;
    let { id: n } = e,
        {
            loaded: i,
            message: l,
            error: s,
        } = (0, a.cf)([d.A, o.A, c.Ay], () => {
            let e = c.Ay.lastMessageId(n),
                t = d.A.getMessageRequestPreview(n);
            if (null == t.message && null != e) {
                let t = o.A.getMessage(n, e);
                if (null != t) return { loaded: !0, error: !1, message: t };
            }
            return t;
        }, [n]),
        r = (0, a.bG)([d.A], () => d.A.shouldLoadMessageRequestPreview(n), [n]);
    return (
        !i && null == l && r && ((t = n), h.add(t), null == m && (m = setTimeout(p, 0))),
        { loaded: i, error: s, message: l }
    );
}
async function p() {
    try {
        for (; !l().isEmpty(h); ) await g();
    } finally {
        m = null;
    }
}
async function g() {
    let e = Array.from(h).slice(0, 25);
    try {
        let t = await s.Bo.get({
            url: u.Rsh.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: { channel_ids: e },
            rejectWithError: !0,
        });
        r.h.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
            requestedChannelIds: e,
            supplementalData: t.body,
        });
    } catch (t) {
        r.h.dispatch({ type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: e });
    } finally {
        for (let t of e) h.delete(t);
    }
}
