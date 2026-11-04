let i;
(n(323874), n(14289), n(35956), n(996308));
var r = n(206885),
    a = n(723702),
    s = n(253400);
(n(652215), n(672396));
let l = { width: 768, height: 432 },
    o = !1,
    d = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function c() {
    return !s.Ay?.isModuleVersionAtLeast?.("discord_hook", d);
}
n.d(
    t,
    {},
    {
        DEV_PID: -2,
        Gu: { width: 3840, height: 2160 },
        T6: function () {
            return o;
        },
        Ty: l,
        YU: "overlay_default",
        Zi: c,
        db: function (e) {
            return !a.isPlatformEmbedded || (e.width >= l.width && e.height >= l.height);
        },
        getPID: function () {
            if (void 0 !== i && -1 !== i) return i;
            let e = parseInt(new URLSearchParams(window.location.search).get("pid") ?? "", 10);
            return (isNaN(e) && (e = -1), (i = e));
        },
        is: function (e) {
            i = e;
        },
        kA: function () {
            let e = (0, a.uF)() && "arm64" === s.Ay.architecture;
            return r.O && !e && !c();
        },
        sN: function (e) {
            return null != e && 0 !== e && -1 !== e;
        },
        tQ: function () {
            return new URLSearchParams(window.location.search).get("rpc_auth_token");
        },
        wJ: function (e) {
            o = e;
        },
    },
);
