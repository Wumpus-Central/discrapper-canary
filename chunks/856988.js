i(321073);
var n = i(115560),
    d = i(190488),
    h = i(5463),
    l = i(897720),
    a = i(644434),
    r = i(652215);
function u(e, t) {
    return null != e && Number.isFinite(e.width) && Number.isFinite(e.height) && e.width > 0 && e.height > 0
        ? { width: Math.round(e.width) + a.GY.width, height: Math.round(e.height) + a.GY.height }
        : t;
}
function o(e, t) {
    return u(e.overlay_widget?.min_size, t.minSize);
}
function s(e, t) {
    return (0, d.j)(t) && null != t.guild_id
        ? { applicationId: e, projectId: t.id, guildId: t.guild_id }
        : { applicationId: e, projectId: t.id };
}
i.d(
    t,
    {},
    {
        P$: function (e) {
            return (
                0 === e.create.length &&
                0 === e.deleteWidgetIds.length &&
                0 === e.metaUpdates.length &&
                0 === e.minSizeUpdates.length
            );
        },
        c3: function (e) {
            let {
                    layoutId: t,
                    listed: i,
                    existing: d,
                    layoutSize: a,
                    defaultSettings: c,
                    removable: p,
                    createId: f = n.A,
                } = e,
                g = { create: [], deleteWidgetIds: [], metaUpdates: [], minSizeUpdates: [] },
                m = new Map();
            for (let e of i) {
                let t = e.application_id;
                m.has(t) || m.set(t, e);
            }
            let w = new Set();
            for (let e of d) {
                if (!(0, l.Du)(e)) {
                    g.deleteWidgetIds.push(e.id);
                    continue;
                }
                let { applicationId: t, projectId: i, guildId: n } = e.meta,
                    d = m.get(t);
                if (w.has(t)) {
                    g.deleteWidgetIds.push(e.id);
                    continue;
                }
                if (null == d) {
                    (null != n ? p.server : p.owned) && g.deleteWidgetIds.push(e.id);
                    continue;
                }
                w.add(t);
                let h = s(t, d);
                (i !== h.projectId || n !== h.guildId) && g.metaUpdates.push({ widgetId: e.id, meta: h });
                let a = o(d, c);
                (e.minSize.width !== a.width || e.minSize.height !== a.height) &&
                    g.minSizeUpdates.push({ widgetId: e.id, minSize: a });
            }
            let y = w.size;
            for (let [e, i] of m) {
                if (w.has(e)) continue;
                let {
                    anchor: n,
                    size: d,
                    minSize: l,
                } = (function (e, t, i, n) {
                    let d = o(e, n),
                        l = u(
                            e.overlay_widget?.default_size,
                            (function (e) {
                                let { width: t, height: i } = e.size;
                                return {
                                    width: "number" == typeof t ? t : e.minSize.width,
                                    height: "number" == typeof i ? i : e.minSize.height,
                                };
                            })(n),
                        ),
                        a = Math.max(l.width, d.width),
                        r = Math.max(l.height, d.height);
                    if (i.width <= 0 || i.height <= 0)
                        return { anchor: n.anchor, size: { width: a, height: r }, minSize: d };
                    ((a = Math.min(a, i.width)), (r = Math.min(r, i.height)));
                    let s = 24 * t,
                        c = Math.max(0, Math.min((i.width - a) / 2 + s, i.width - a)),
                        p = Math.max(0, Math.min(0.15 * i.height + s, i.height - r));
                    return { anchor: (0, h.NO)({ top: p, left: c }, i), size: { width: a, height: r }, minSize: d };
                })(i, y, a, c);
                (y++,
                    g.create.push({
                        id: f(),
                        layoutId: t,
                        type: r.uss.CONJURE,
                        anchor: n,
                        size: (0, h.R9)({ fixed: !0, ...d }, a),
                        minSize: l,
                        pinned: c.pinned,
                        meta: s(e, i),
                    }));
            }
            return g;
        },
    },
);
