n.d(t, { I: () => g });
var l = n(735438),
    i = n.n(l),
    s = n(17928),
    a = n(636537),
    r = n(228366),
    o = n(232835),
    c = n(222823),
    d = n(401565),
    u = n(652215);
let h = new Set(),
    m = null;
function g(e) {
    var t;
    let { id: n } = e,
        { enabled: l = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            loaded: i,
            message: a,
            error: r,
        } = (0, s.cf)([d.A, o.A, c.Ay], () => {
            let e = c.Ay.lastMessageId(n),
                t = d.A.getMessageRequestPreview(n);
            if (null == t.message && null != e) {
                let t = o.A.getMessage(n, e);
                if (null != t) return { loaded: !0, error: !1, message: t };
            }
            return t;
        }, [n]),
        u = (0, s.bG)([d.A], () => d.A.shouldLoadMessageRequestPreview(n), [n]);
    return (
        l && !i && null == a && u && ((t = n), h.add(t), null == m && (m = setTimeout(p, 0))),
        { loaded: i, error: r, message: a }
    );
}
async function p() {
    try {
        for (; !i().isEmpty(h); ) await A();
    } finally {
        m = null;
    }
}
async function A() {
    let e = Array.from(h).slice(0, 25);
    try {
        let t = await a.Bo.get({
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
