r.d(n, {
    Fs: function () {
        return m;
    },
    Xu: function () {
        return _;
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
    o = r(373793),
    s = r(911969),
    l = r(592125),
    u = r(963456),
    c = r(213459),
    d = r(367790);
let f = 'no primary app command for application',
    p = [s.yU.PRIMARY_ENTRY_POINT];
async function h(e, n) {
    let r,
        i = l.Z.getChannel(e);
    if (
        (null != i &&
            null == (r = _(i, n)) &&
            (await (0, c.FN)({
                type: 'application',
                applicationId: n
            }),
            (r = _(i, n))),
        null != r)
    )
        return r;
    throw Error(f);
}
function _(e, n) {
    return c.ZP.query(
        e,
        { commandTypes: [s.yU.PRIMARY_ENTRY_POINT] },
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
        o = r[0],
        s = null != o;
    return (
        a.useEffect(() => {
            !s &&
                !i &&
                (0, u.j)({
                    type: 'application',
                    applicationId: e
                });
        }, [e, s, i]),
        o
    );
}
function g(e, n) {
    return (0, c.v1)(
        n,
        { commandTypes: p },
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
    let l = null != a.integration_types && a.integration_types.includes(o.Y.USER_INSTALL),
        u = null != a.contexts && a.contexts.includes(s.D.BOT_DM);
    return null != i && l && u;
}
