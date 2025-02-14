n.d(t, { V: () => o });
var i = n(317381),
    l = n(176787);
n(817938);
var r = n(238679),
    a = n(981631),
    s = n(701488);
function o(e, t, n) {
    var o, d;
    switch (t) {
        case a.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null === (o = e.application) || void 0 === o ? void 0 : o.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== s.cE.FOCUSED } : null;
        }
        case a.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case a.zMe.THERMAL_STATE_UPDATE: {
            let e = (0, l.bY)();
            if (e === l.bG.UNHANDLED) return null;
            return { thermal_state: e };
        }
        case a.zMe.ORIENTATION_UPDATE:
            return null;
        case a.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, r.dO)();
        default:
            return null;
    }
}
