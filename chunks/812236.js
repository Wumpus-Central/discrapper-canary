r.d(n, {
    Fs: function () {
        return m;
    },
    Xu: function () {
        return p;
    },
    ZP: function () {
        return h;
    },
    ms: function () {
        return E;
    },
    sV: function () {
        return f;
    }
});
var i = r(411104);
var a = r(192379),
    s = r(373793),
    o = r(911969),
    l = r(592125),
    u = r(963456),
    c = r(213459),
    d = r(367790);
let f = 'no primary app command for application',
    _ = [o.yU.PRIMARY_ENTRY_POINT];
async function h(e, n) {
    let r,
        i = l.Z.getChannel(e);
    if (
        (null != i &&
            null == (r = p(i, n)) &&
            (await (0, c.FN)({
                type: 'application',
                applicationId: n
            }),
            (r = p(i, n))),
        null != r)
    )
        return r;
    throw Error(f);
}
function p(e, n) {
    return c.ZP.query(
        e,
        { commandTypes: [o.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: d.p.COMMAND_ONLY,
            applicationId: n,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function m(e, n) {
    let { commands: r, loading: i } = g(e, n),
        s = r[0],
        o = null != s;
    return (
        a.useEffect(() => {
            !o &&
                !i &&
                (0, u.j)({
                    type: 'application',
                    applicationId: e
                });
        }, [e, o, i]),
        s
    );
}
function g(e, n) {
    return (0, c.v1)(
        n,
        { commandTypes: _ },
        {
            placeholderCount: 1,
            scoreMethod: d.p.COMMAND_ONLY,
            applicationId: e,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
function E(e) {
    let { channel: n, applicationId: r, botUserId: i } = e,
        a = m(r, n);
    if (null == a) return !1;
    let l = null != a.integration_types && a.integration_types.includes(s.Y.USER_INSTALL),
        u = null != a.contexts && a.contexts.includes(o.D.BOT_DM);
    return null != i && l && u;
}
