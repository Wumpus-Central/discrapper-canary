n.d(t, {
    Pv: () => a,
    dI: () => o,
    gs: () => s
});
var r = n(570140);
let i = new (n(710845).Z)('TryLoad');
async function o(e) {
    try {
        return await e();
    } catch (e) {
        return i.log('database load failed.', e), null;
    }
}
function a(e, t, n) {
    try {
        return t();
    } catch (t) {
        return (
            i.log(''.concat(e, ': exception thrown, resetting socket.'), t, t.stack),
            r.Z.dispatch({
                type: 'RESET_SOCKET',
                args: {
                    error: t,
                    action: 'tryLoadOrResetCacheGateway ('.concat(e, ')'),
                    metricAction: 'tryLoadOrResetCacheGateway ('.concat(null != n ? n : e, ')'),
                    clearCache: !0
                }
            }),
            null
        );
    }
}
async function s(e, t, n) {
    try {
        return await t();
    } catch (t) {
        return (
            i.log(''.concat(e, ': exception thrown, resetting socket.'), t, t.stack),
            r.Z.dispatch({
                type: 'RESET_SOCKET',
                args: {
                    error: t,
                    action: 'tryLoadOrResetCacheGatewayAsync ('.concat(e, ')'),
                    metricAction: 'tryLoadOrResetCacheGatewayAsync ('.concat(null != n ? n : e, ')'),
                    clearCache: !0
                }
            }),
            null
        );
    }
}
