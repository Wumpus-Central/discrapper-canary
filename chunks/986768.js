n.d(t, { V: () => u });
var r = n(317381),
    i = n(107105),
    l = n(616022),
    a = n(254579);
n(817938);
var s = n(238679),
    o = n(981631),
    c = n(701488);
function u(e, t, n) {
    var u, d, p, f, h, g;
    switch (t) {
        case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null == (u = e.application) ? void 0 : u.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== c.cE.FOCUSED } : null;
        }
        case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null == (d = e.application) ? void 0 : d.id,
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
            return (0, s.dO)();
        case o.zMe.QUEST_ENROLLMENT_STATUS_UPDATE: {
            let { quest_id: t } = n;
            if (!t) return null;
            let r = l.Z.getQuest(t),
                i = (0, a.nY)(r);
            if (null == r || null == i || i !== (null == (p = e.application) ? void 0 : p.id)) return null;
            return {
                quest_id: t,
                is_enrolled: (null == (f = r.userStatus) ? void 0 : f.enrolledAt) != null,
                enrolled_at: null != (g = null == (h = r.userStatus) ? void 0 : h.enrolledAt) ? g : null,
            };
        }
        default:
            return null;
    }
}
