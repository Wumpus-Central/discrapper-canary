n.d(t, { y: () => a });
var r = n(690889),
    i = n(343573);
function a(e, t, n) {
    let a = [
        { type: "client_report" },
        {
            timestamp: n || (0, i.yW)(),
            discarded_events: e,
        },
    ];
    return (0, r.Jd)(t ? { dsn: t } : {}, [a]);
}
