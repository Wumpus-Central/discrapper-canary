n.d(e, { A: () => L });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(95362),
    u = n(534514),
    c = n(123292),
    o = n(811091),
    d = n(435558),
    m = n.n(d),
    h = n(819169),
    g = n(855986),
    v = n(927813),
    f = n(285059),
    p = n(698441),
    C = n(974930),
    y = n(890856),
    E = n(834730),
    A = n(408278),
    _ = n(365199),
    k = n(442433),
    x = n(734057),
    b = n(71393),
    I = n(722260),
    D = n(492260),
    S = n(103355),
    j = n(988794),
    N = n(792996),
    G = n(214040);
function T(t) {
    let { recurrenceId: e, originalScheduledStartTime: r, guildEventId: a, onClick: u, isActive: c } = t,
        o = (0, g.bG)([p.Ay], () => p.Ay.getGuildScheduledEvent(a)),
        d = (0, I.A)(e, o?.id),
        m = (0, g.bG)([b.A], () => b.A.getGuild(o?.guild_id)),
        h = (0, g.bG)([x.A], () => x.A.getChannel(o?.channel_id)),
        { is_canceled: v = !1 } = d ?? {},
        f = d?.scheduled_start_time != null ? new Date(d?.scheduled_start_time) : r,
        T = (0, D.A)(f.toISOString(), void 0, null != o),
        { startDateTimeString: w } = T,
        L = i.useRef(null);
    if (null == o) return null;
    let z = (0, C.G3)(o),
        P = v ? j.XG.CANCELED : j.XG.SCHEDULED;
    z === e && (P = o.status);
    let X = o?.scheduled_start_time != null ? (0, C.j)(d, f, new Date(o?.scheduled_start_time)) : null;
    function q(t) {
        null == o ||
            (t.stopPropagation(),
            null != m &&
                (0, k.L3)(t, async () => {
                    let { default: t } = await Promise.all([
                        n.e(476662),
                        n.e(253044),
                        n.e(881717),
                        n.e(363269),
                        n.e(693165),
                        n.e(993103),
                        n.e(489218),
                        n.e(912875),
                        n.e(862782),
                        n.e(482861),
                        n.e(252229),
                        n.e(60086),
                        n.e(856753),
                        n.e(256373),
                        n.e(543267),
                        n.e(599990),
                        n.e(628673),
                    ]).then(n.bind(n, 924037));
                    return (n) =>
                        (0, l.jsx)(t, {
                            guildEventId: o.id,
                            recurrenceId: e,
                            channel: h,
                            guild: m,
                            isRecurrenceItem: !0,
                            ...n,
                        });
                }));
    }
    return (0, l.jsxs)(y.s, {
        className: s()(G.kL, { [G.aD]: v, [G.vk]: null != u, [G.vu]: c }),
        ref: L,
        onClick: function (t) {
            (t.stopPropagation(), v || u?.(e));
        },
        onContextMenu: q,
        onFocus: () => L.current?.scrollIntoView({ block: "nearest" }),
        "aria-label": (0, S.o)({ timeData: T, status: X ?? P, eventType: o.entity_type, isCanceled: v }),
        children: [
            (0, l.jsx)(S.L, {
                startTime: f.toISOString(),
                status: X ?? P,
                eventType: o.entity_type,
                guildEventId: o.id,
                recurrenceId: e,
                timeData: T,
                className: G.q$,
            }),
            v &&
                (0, l.jsx)(E.E, {
                    variant: "body-sm/semibold",
                    color: "text-feedback-critical",
                    className: G.a6,
                    children: N.intl.string(N.t.fyBVRm),
                }),
            (0, l.jsx)(A.K, {
                icon: _.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": N.intl.formatToPlainString(N.t.aNAh3u, { eventTime: w }),
                onClick: q,
            }),
        ],
    });
}
var w = n(889303);
function L(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: r,
            onRecurrenceClick: d,
            hideScroller: y = !1,
            activeRecurrenceId: E,
        } = t,
        {
            recurrenceStartTimes: A,
            canViewMoreRecurrences: _,
            updateRecurrenceStartTimes: k,
        } = (function (t, e, n) {
            let l = (0, g.bG)([p.Ay], () => p.Ay.getGuildScheduledEvent(t)),
                r = (0, h.A)(n),
                [s, a] = i.useState(
                    null != n && null != l ? (0, C.er)(4, (0, C.X7)(n), new Date(l.scheduled_start_time)) : [],
                );
            (i.useEffect(() => {
                if (null == r || null == n || null == l || m().isEqual(r, n)) return;
                let t = (0, C.X7)(n);
                a((0, C.er)(s.length, t, new Date(l.scheduled_start_time)));
            }, [n, s.length, l, r]),
                i.useEffect(() => {
                    if (null == e) return;
                    let n = s.map((t) =>
                        o.default.fromTimestamp(Math.floor(t.getTime() / v.A.Millis.SECOND) * v.A.Millis.SECOND),
                    );
                    f.A.getGuildEventUserCounts(e, t, n);
                }, [t, e, s]));
            let u = i.useMemo(() => {
                if (null == n || 0 === s.length || l?.scheduled_start_time == null) return !1;
                let t = new Date();
                t.setFullYear(t.getFullYear() + 4);
                let e = s[s.length - 1],
                    i = (0, C.X7)(n).after(e);
                return null != i && i <= t;
            }, [n, s, l?.scheduled_start_time]);
            return {
                recurrenceStartTimes: s,
                canViewMoreRecurrences: u,
                updateRecurrenceStartTimes: function () {
                    if (null == n || null == l) return;
                    let t = (0, C.X7)(n),
                        e = s[s.length - 1];
                    a([...s, ...(0, C.er)(4, t, e, !0)]);
                },
            };
        })(r, e, n),
        x = y ? "div" : a.Ip;
    return (0, l.jsxs)("div", {
        className: w.w5,
        children: [
            (0, l.jsx)(u.D, { variant: "heading-xs/medium", className: w.R_, children: N.intl.string(N.t["D/jjoa"]) }),
            (0, l.jsxs)(x, {
                className: s()(w.XG, { [w.cq]: !y }),
                children: [
                    A.map((t) => {
                        let e = o.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            T,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: r,
                                onClick: d,
                                isActive: e === E,
                            },
                            e,
                        );
                    }),
                    _ &&
                        (0, l.jsx)("div", {
                            className: w.UD,
                            children: (0, l.jsx)(c.Q, {
                                onClick: function (t) {
                                    (t.stopPropagation(), k());
                                },
                                text: N.intl.string(N.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
