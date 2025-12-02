n.d(e, { U: () => u });
var i = n(54381),
    l = n(473749),
    s = n(818710),
    r = n(159691);
let u = () => {
        let t = (0, s.Ij)(),
            e = (0, l.useMemo)(() => a(t), [t]);
        return (0, i.jsx)(r.zxk, {
            text: "Get the Discord App",
            onClick: () => {
                window.location.href = "https://discord.com/api/download?platform=" + e;
            },
        });
    },
    a = (t) => ("macos" === t ? "osx" : "win");
