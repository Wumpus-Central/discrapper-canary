i.d(e, { X: () => a });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(732955);
let a = (t) => {
        let { onClick: e } = t,
            i = (0, s.R0)(),
            a = (0, l.useMemo)(() => u(i), [i]);
        return (0, n.jsx)(r.$nd, {
            text: "Get the Discord App",
            onClick: () => {
                e?.(), (window.location.href = "https://discord.com/api/download?platform=" + a);
            },
        });
    },
    u = (t) => ("macos" === t ? "osx" : "win");
