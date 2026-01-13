n.d(t, { V: () => d });
var r = n(317381),
    i = n(107105),
    l = n(591472),
    a = n(616022),
    o = n(254579);
n(817938);
var s = n(238679),
    c = n(981631),
    u = n(701488);
function d(e, t, n) {
    var d, p, f, g, h, m, b, _;
    switch (t) {
        case c.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null == (d = e.application) ? void 0 : d.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== u.cE.FOCUSED } : null;
        }
        case c.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null == (p = e.application) ? void 0 : p.id,
                n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case c.zMe.FRAME_LAYOUT_MODE_UPDATE: {
            let t =
                null != (null == (f = e.application) ? void 0 : f.id)
                    ? null == (g = l.Z.getConnectedFrame())
                        ? void 0
                        : g.layoutMode
                    : null;
            return null != t ? { layout_mode: t } : null;
        }
        case c.zMe.THERMAL_STATE_UPDATE: {
            let e = (0, i.bY)();
            if (e === i.bG.UNHANDLED) return null;
            return { thermal_state: e };
        }
        case c.zMe.ORIENTATION_UPDATE:
            return null;
        case c.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, s.dO)();
        case c.zMe.QUEST_ENROLLMENT_STATUS_UPDATE: {
            let { quest_id: t } = n;
            if (!t) return null;
            let r = a.Z.getQuest(t),
                i = (0, o.nY)(r);
            if (null == r || null == i || i !== (null == (h = e.application) ? void 0 : h.id)) return null;
            return {
                quest_id: t,
                is_enrolled: (null == (m = r.userStatus) ? void 0 : m.enrolledAt) != null,
                enrolled_at: null != (_ = null == (b = r.userStatus) ? void 0 : b.enrolledAt) ? _ : null,
            };
        }
        default:
            return null;
    }
}
