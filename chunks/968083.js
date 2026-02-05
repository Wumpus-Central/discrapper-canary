i.d(e, { I: () => u });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.GATEWAY_LOGS, {
    useTitle: () => "Log Gateway Events",
    useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingGatewayEvents),
    setValue: (t) => (0, l.x)({ logGatewayEvents: t }),
});
