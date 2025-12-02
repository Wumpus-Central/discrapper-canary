n.d(e, { U: () => u });
var i = n(54381),
    r = n(473749),
    l = n(818710),
    s = n(159691);
let u = () => {
        let t = (0, l.Ij)(),
            e = (0, r.useMemo)(() => a(t), [t]);
        return (0, i.jsx)(s.zxk, {
            text: "Get the Discord App",
            onClick: () => {
                window.location.href = "https://discord.com/api/download?platform=" + e;
            },
        });
    },
    a = (t) => ("macos" === t ? "osx" : "win");
