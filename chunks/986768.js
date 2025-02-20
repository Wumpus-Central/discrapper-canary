n.d(t, { V: () => s });
var r = n(317381),
    i = n(176787);
n(817938);
var l = n(238679),
    o = n(981631),
    a = n(701488);
function s(e, t, n) {
    var s, c;
    switch (t) {
        case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null === (s = e.application) || void 0 === s ? void 0 : s.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== a.cE.FOCUSED } : null;
        }
        case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case o.zMe.THERMAL_STATE_UPDATE: {
            let e = (0, i.bY)();
            if (e === i.bG.UNHANDLED) return null;
            return { thermal_state: e };
        }
        case o.zMe.ORIENTATION_UPDATE:
            return null;
        case o.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, l.dO)();
        default:
            return null;
    }
}
