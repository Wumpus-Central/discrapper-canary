(n.d(t, { P$: () => c, c3: () => u }), n(321073));
var i = n(132500),
    r = n(5463),
    l = n(897720),
    s = n(644434),
    a = n(652215);
function o(e, t) {
    return null != e && Number.isFinite(e.width) && Number.isFinite(e.height) && e.width > 0 && e.height > 0
        ? { width: Math.round(e.width) + s.GY.width, height: Math.round(e.height) + s.GY.height }
        : t;
}
function d(e, t) {
    return o(e.overlay_widget?.min_size, t.minSize);
}
function u(e) {
    let { layoutId: t, listed: n, existing: s, layoutSize: u, defaultSettings: c, createId: h = i.A } = e,
        m = { create: [], deleteWidgetIds: [], metaUpdates: [], minSizeUpdates: [] },
        g = new Map();
    for (let e of n) {
        let t = e.application_id;
        g.has(t) || g.set(t, e);
    }
    let p = new Set();
    for (let e of s) {
        if (!(0, l.Du)(e)) {
            m.deleteWidgetIds.push(e.id);
            continue;
        }
        let { applicationId: t, projectId: n } = e.meta,
            i = g.get(t);
        if (null == i || p.has(t)) {
            m.deleteWidgetIds.push(e.id);
            continue;
        }
        (p.add(t), n !== i.id && m.metaUpdates.push({ widgetId: e.id, meta: { applicationId: t, projectId: i.id } }));
        let r = d(i, c);
        (e.minSize.width !== r.width || e.minSize.height !== r.height) &&
            m.minSizeUpdates.push({ widgetId: e.id, minSize: r });
    }
    let f = p.size;
    for (let [e, n] of g) {
        if (p.has(e)) continue;
        let {
            anchor: i,
            size: l,
            minSize: s,
        } = (function (e, t, n, i) {
            let l = d(e, i),
                s = o(
                    e.overlay_widget?.default_size,
                    (function (e) {
                        let { width: t, height: n } = e.size;
                        return {
                            width: "number" == typeof t ? t : e.minSize.width,
                            height: "number" == typeof n ? n : e.minSize.height,
                        };
                    })(i),
                ),
                a = Math.max(s.width, l.width),
                u = Math.max(s.height, l.height);
            if (n.width <= 0 || n.height <= 0) return { anchor: i.anchor, size: { width: a, height: u }, minSize: l };
            ((a = Math.min(a, n.width)), (u = Math.min(u, n.height)));
            let c = 24 * t,
                h = Math.max(0, Math.min((n.width - a) / 2 + c, n.width - a)),
                m = Math.max(0, Math.min(0.15 * n.height + c, n.height - u));
            return { anchor: (0, r.NO)({ top: m, left: h }, n), size: { width: a, height: u }, minSize: l };
        })(n, f, u, c);
        (f++,
            m.create.push({
                id: h(),
                layoutId: t,
                type: a.uss.CONJURE,
                anchor: i,
                size: (0, r.R9)({ fixed: !0, ...l }, u),
                minSize: s,
                pinned: c.pinned,
                meta: { applicationId: e, projectId: n.id },
            }));
    }
    return m;
}
function c(e) {
    return (
        0 === e.create.length &&
        0 === e.deleteWidgetIds.length &&
        0 === e.metaUpdates.length &&
        0 === e.minSizeUpdates.length
    );
}
