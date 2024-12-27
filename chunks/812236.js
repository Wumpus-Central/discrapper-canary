r.d(n, {
    Fs: function () {
        return g;
    },
    Xu: function () {
        return m;
    },
    ZP: function () {
        return p;
    },
    ms: function () {
        return v;
    },
    sV: function () {
        return _;
    }
});
var i = r(411104);
var a = r(192379),
    s = r(373793),
    o = r(911969),
    l = r(404295),
    u = r(592125),
    c = r(963456),
    d = r(213459),
    f = r(367790);
let _ = 'no primary app command for application',
    h = [o.yU.PRIMARY_ENTRY_POINT];
async function p(e, n) {
    let r,
        i = u.Z.getChannel(e);
    if (
        (null != i &&
            null == (r = m(i, n)) &&
            (await (0, d.FN)({
                type: 'application',
                applicationId: n
            }),
            (r = m(i, n))),
        null != r)
    )
        return r;
    throw Error(_);
}
function m(e, n) {
    return d.ZP.query(
        e,
        { commandTypes: [o.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: f.p.COMMAND_ONLY,
            applicationId: n,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function g(e, n) {
    let { commands: r, loading: i } = E(e, n),
        s = r[0],
        o = null != s;
    return (
        a.useEffect(() => {
            !o &&
                !i &&
                (0, c.j)({
                    type: 'application',
                    applicationId: n
                });
        }, [n, o, i]),
        s
    );
}
function E(e, n) {
    return (0, d.v1)(
        e,
        { commandTypes: h },
        {
            placeholderCount: 1,
            scoreMethod: f.p.COMMAND_ONLY,
            applicationId: n,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
function v(e) {
    let { channel: n, applicationId: r, botUserId: i } = e,
        a = g(n, r),
        u = (0, l.bG)('useIsPrimaryAppCommandUsableInAppDM');
    if (null == a) return !1;
    let c = null != a.integration_types && a.integration_types.includes(s.Y.USER_INSTALL),
        d = null != a.contexts && a.contexts.includes(o.D.BOT_DM);
    return u && null != i && c && d;
}
