n.d(t, { U: () => l });
var r = n(54381),
    i = n(473749),
    a = n(818710),
    o = n(159691);
let s = "https://discord.com/api/download?platform=",
    l = () => {
        let e = (0, a.Ij)(),
            t = (0, i.useMemo)(() => c(e), [e]),
            n = () => {
                window.location.href = s + t;
            };
        return (0, r.jsx)(o.zxk, {
            text: "Get the Discord App",
            onClick: n,
        });
    },
    c = (e) => {
        switch (e) {
            case "macos":
                return "osx";
            case "linux":
                return "linux";
            default:
                return "windows";
        }
    };
