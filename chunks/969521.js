n.d(e, { U: () => s });
var i = n(54381),
    l = n(473749),
    r = n(818710),
    u = n(159691);
let s = () => {
        let t = (0, r.Ij)(),
            e = (0, l.useMemo)(() => a(t), [t]);
        return (0, i.jsx)(u.zxk, {
            text: "Get the Discord App",
            onClick: () => {
                window.location.href = "https://discord.com/api/download?platform=" + e;
            },
        });
    },
    a = (t) => ("macos" === t ? "osx" : "win");
