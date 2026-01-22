n.d(e, { U: () => r });
var i = n(54381),
    l = n(473749),
    s = n(818710),
    u = n(159691);
let r = (t) => {
        let { onClick: e } = t,
            n = (0, s.Ij)(),
            r = (0, l.useMemo)(() => a(n), [n]);
        return (0, i.jsx)(u.zxk, {
            text: "Get the Discord App",
            onClick: () => {
                null == e || e(), (window.location.href = "https://discord.com/api/download?platform=" + r);
            },
        });
    },
    a = (t) => ("macos" === t ? "osx" : "win");
