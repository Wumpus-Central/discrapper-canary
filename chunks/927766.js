i.d(e, { X: () => u });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(732955);
let u = (t) => {
        let { onClick: e } = t,
            i = (0, s.R0)(),
            u = (0, l.useMemo)(() => a(i), [i]);
        return (0, n.jsx)(r.$nd, {
            text: "Get the Discord App",
            onClick: () => {
                null == e || e(), (window.location.href = "https://discord.com/api/download?platform=" + u);
            },
        });
    },
    a = (t) => ("macos" === t ? "osx" : "win");
