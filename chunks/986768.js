n.d(t, { V: () => s });
var r = n(317381),
    i = n(176787);
n(817938);
var l = n(238679),
    a = n(981631),
    o = n(701488);
function s(e, t, n) {
    var s, c;
    switch (t) {
        case a.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null == (s = e.application) ? void 0 : s.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== o.cE.FOCUSED } : null;
        }
        case a.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null == (c = e.application) ? void 0 : c.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case a.zMe.THERMAL_STATE_UPDATE: {
            let e = (0, i.bY)();
            if (e === i.bG.UNHANDLED) return null;
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
