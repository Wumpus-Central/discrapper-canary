i.d(e, {
    I: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.GATEWAY_LOGS, {
    useTitle: () => "Log Gateway Events",
    useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingGatewayEvents),
    setValue: (t) =>
        (0, l.x)({
            logGatewayEvents: t,
        }),
});
