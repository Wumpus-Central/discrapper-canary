n.d(t, {
    Fs: () => p,
    Xu: () => _,
    ZP: () => f,
    ms: () => m,
    sV: () => u
}),
    n(411104);
var r = n(192379),
    i = n(373793),
    o = n(911969),
    a = n(592125),
    s = n(963456),
    l = n(213459),
    c = n(367790);
let u = 'no primary app command for application',
    d = [o.yU.PRIMARY_ENTRY_POINT];
async function f(e, t) {
    let n,
        r = a.Z.getChannel(e);
    if (
        (null != r &&
            null ==
                (n = _(
                    {
                        channel: r,
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
                    channel: r,
                    type: 'channel'
                },
                t
            ))),
        null != n)
    )
        return n;
    throw Error(u);
}
function _(e, t) {
    return l.ZP.query(
        e,
        { commandTypes: [o.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: c.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function p(e, t) {
    let { commands: n, loading: i } = h(e, t),
        o = n[0],
        a = null != o;
    return (
        r.useEffect(() => {
            a ||
                i ||
                (0, s.j)({
                    type: 'application',
                    applicationId: t
                });
        }, [t, a, i]),
        o
    );
}
function h(e, t) {
    return (0, l.v1)(
        e,
        { commandTypes: d },
        {
            placeholderCount: 1,
            scoreMethod: c.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
function m(e) {
    let { context: t, applicationId: n, botUserId: r } = e,
        i = p(t, n);
    return null != i && null != r && g(i);
}
function g(e) {
    if (null == e) return !1;
    let t = null != e.integration_types && e.integration_types.includes(i.Y.USER_INSTALL),
        n = null != e.contexts && e.contexts.includes(o.D.BOT_DM);
    return t && n;
}
