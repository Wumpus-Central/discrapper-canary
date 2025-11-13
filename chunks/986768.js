n.d(t, { V: () => c });
var r = n(317381),
    i = n(107105),
    l = n(569984);
n(817938);
var a = n(238679),
    s = n(981631),
    o = n(701488);
function c(e, t, n) {
    var c, u, d, p, f, h;
    switch (t) {
        case s.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null == (c = e.application) ? void 0 : c.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== o.cE.FOCUSED } : null;
        }
        case s.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null == (u = e.application) ? void 0 : u.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case s.zMe.THERMAL_STATE_UPDATE: {
            let e = (0, i.bY)();
            if (e === i.bG.UNHANDLED) return null;
            return { thermal_state: e };
        }
        case s.zMe.ORIENTATION_UPDATE:
            return null;
        case s.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, a.dO)();
        case s.zMe.QUEST_ENROLLMENT_STATUS_UPDATE: {
            let { quest_id: t } = n;
            if (!t) return null;
            let r = l.Z.getQuest(t);
            if (null == r || r.config.application.id !== (null == (d = e.application) ? void 0 : d.id)) return null;
            return {
                quest_id: t,
                is_enrolled: (null == (p = r.userStatus) ? void 0 : p.enrolledAt) != null,
                enrolled_at: null != (h = null == (f = r.userStatus) ? void 0 : f.enrolledAt) ? h : null,
            };
        }
        default:
            return null;
    }
}
