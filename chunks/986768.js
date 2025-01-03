n.d(t, {
    V: function () {
        return o;
    }
});
var i = n(317381),
    r = n(176787);
n(817938);
var l = n(238679),
    a = n(981631),
    s = n(701488);
function o(e, t, n) {
    var o, c;
    switch (t) {
        case a.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null === (o = e.application) || void 0 === o ? void 0 : o.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== s.cE.FOCUSED } : null;
        }
        case a.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case a.zMe.THERMAL_STATE_UPDATE: {
            let e = (0, r.bY)();
            if (e === r.bG.UNHANDLED) return null;
            return { thermal_state: e };
        }
        case a.zMe.ORIENTATION_UPDATE:
            return null;
        case a.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, l.dO)();
        default:
            return null;
    }
}
