n.d(t, {
    Fs: () => p,
    Xu: () => _,
    ZP: () => f,
    ms: () => m,
    sV: () => c
}),
    n(411104);
var i = n(192379),
    r = n(373793),
    a = n(911969),
    s = n(592125),
    o = n(963456),
    l = n(213459),
    u = n(367790);
let c = 'no primary app command for application',
    d = [a.yU.PRIMARY_ENTRY_POINT];
async function f(e, t) {
    let n;
    let i = s.Z.getChannel(e);
    if (
        (null != i &&
            null ==
                (n = _(
                    {
                        channel: i,
                        type: 'channel'
                    },
                    t
                )) &&
            (await (0, l.FN)({
                type: 'application',
                applicationId: t
            }),
            (n = _(
                {
                    channel: i,
                    type: 'channel'
                },
                t
            ))),
        null != n)
    )
        return n;
    throw Error(c);
}
function _(e, t) {
    return l.ZP.query(
        e,
        { commandTypes: [a.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: u.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function p(e, t) {
    let { commands: n, loading: r } = h(e, t),
        a = n[0],
        s = null != a;
    return (
        i.useEffect(() => {
            s ||
                r ||
                (0, o.j)({
                    type: 'application',
                    applicationId: t
                });
        }, [t, s, r]),
        a
    );
}
function h(e, t) {
    return (0, l.v1)(
        e,
        { commandTypes: d },
        {
            placeholderCount: 1,
            scoreMethod: u.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
function m(e) {
    let { context: t, applicationId: n, botUserId: i } = e,
        s = p(t, n);
    if (null == s) return !1;
    let o = null != s.integration_types && s.integration_types.includes(r.Y.USER_INSTALL),
        l = null != s.contexts && s.contexts.includes(a.D.BOT_DM);
    return null != i && o && l;
}
