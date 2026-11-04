e.d(n, { default: () => O });
var l = e(477900),
    i = e(582128),
    r = e(165862),
    d = e(477782),
    a = e(442433),
    s = e(820284),
    u = e(50268),
    c = e(979361),
    o = e.n(c),
    g = e(536637),
    m = e.n(g),
    f = e(492462),
    b = e(855986),
    A = e(77729),
    h = e(47167),
    x = e(451909),
    v = e(71393),
    p = e(994500),
    E = e(287809),
    y = e(723702),
    j = e(698441),
    D = e(563312),
    G = e(794782),
    _ = e(974930),
    w = e(988794),
    T = e(652215),
    S = e(792996);
let R = "YYYYMMDDTHHmmss",
    k = "YYYY-MM-DDTHH:mm:ss",
    I = /RRULE:.*/;
var L = e(173936),
    N = e(486503),
    C = e(253932),
    X = e(957565),
    Y = e(691012),
    P = e(858899),
    Q = e(192308),
    M = e(732159),
    B = e(834730),
    F = e(931991),
    H = e(496092),
    Z = e(722260),
    U = e(823508),
    V = e(24661),
    W = e(138134),
    $ = e(928658),
    K = e(857071),
    q = e(46653),
    J = e(508654);
function O(t) {
    let n,
        {
            guildEventId: c,
            recurrenceId: g,
            channel: O,
            guild: z,
            analyticsContext: tt,
            isRecurrenceItem: tn = !1,
            onSelect: te,
            target: tl,
        } = t,
        ti = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, F.nr)(r ?? i),
                u = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                c = (0, Z.A)(e, u?.id),
                o = null != u && s(u);
            return a && c?.is_canceled && o
                ? (0, l.jsx)(d.Dr, {
                      id: S.intl.string(S.t.b8606G),
                      label: S.intl.string(S.t.b8606G),
                      action: function () {
                          null != e &&
                              null != c &&
                              (function (t, n, e, l) {
                                  let { scheduled_start_time: i, scheduled_end_time: r } = t;
                                  null == i && null == r
                                      ? H.default.deleteGuildEventException(n, e, l)
                                      : H.default.updateGuildEventException(
                                            { scheduled_start_time: i, scheduled_end_time: r, is_canceled: !1 },
                                            n,
                                            e,
                                            l,
                                        );
                              })(c, i.id, n, e);
                      },
                  })
                : null;
        })({ guildEventId: c, recurrenceId: g, guild: z, channel: O }),
        tr = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, F.nr)(r ?? i),
                [u, c] = (0, b.yK)([j.Ay], () => [j.Ay.isActive(n), j.Ay.getGuildScheduledEvent(n)]),
                o = (0, Z.A)(e, c?.id),
                g = null != c && s(c),
                m = c?.recurrence_rule != null && !a,
                f = (0, D.nh)(n, e);
            if (!g || (u && !m && !a) || (a && !a) || null == c || null == f) return null;
            let { startTime: A } = f;
            if (u && a) {
                if (null == A) return null;
                let t = new Date(o?.scheduled_start_time ?? A);
                if (new Date() > t) return null;
            }
            function h(t) {
                (0, Q.qf)((r) =>
                    (0, l.jsx)(M.u, {
                        ...r,
                        title: S.intl.string(S.t.R5bpin),
                        subtitle: S.intl.string(S.t.v2GWNQ),
                        confirmText: m || t ? S.intl.string(S.t["8ZsNv5"]) : S.intl.string(S.t.B9sJLX),
                        cancelText: S.intl.string(S.t.oEAioF),
                        onConfirm: () =>
                            a && !t ? H.default.deleteRecurrence(i.id, n, e, o) : H.default.deleteGuildEvent(n, i.id),
                        children:
                            (m || t) &&
                            (0, l.jsx)(B.E, { variant: "body-md/normal", children: S.intl.format(S.t.ZcpcyO, {}) }),
                    }),
                );
            }
            return (0, l.jsx)(d.Dr, {
                id: S.intl.string(S.t.B9sJLX),
                label: S.intl.string(S.t.B9sJLX),
                action: a ? void 0 : () => h(),
                color: "danger",
                children:
                    a &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.tqClly),
                                label: S.intl.string(S.t.tqClly),
                                action: () => h(),
                                disabled: o?.is_canceled,
                                color: "danger",
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.wr33rW),
                                label: S.intl.string(S.t.wr33rW),
                                action: () => h(!0),
                                color: "danger",
                            }),
                        ],
                    }),
            });
        })({ guildEventId: c, recurrenceId: g, guild: z, channel: O }),
        td = (function (t) {
            let { guildEventId: n, guild: i, channel: r, recurrenceId: a, isRecurrenceItem: s } = t,
                { canManageGuildEvent: u } = (0, F.nr)(r ?? i),
                c = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                o = u(c),
                g = (0, U.A)(),
                m = (0, Z.A)(a, c?.id),
                f = (0, D.nh)(n, a);
            if (!o || null == f || null == c) return null;
            let A = null != c.recurrence_rule && !s;
            function h(t) {
                null != c &&
                    ((null == a || t) && !s
                        ? (0, Q.mM)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e(237427),
                                  e.e(670870),
                                  e.e(998835),
                                  e.e(468555),
                                  e.e(142753),
                                  e.e(862179),
                                  e.e(191601),
                                  e.e(936875),
                                  e.e(401425),
                                  e.e(370017),
                                  e.e(881717),
                                  e.e(388859),
                                  e.e(711162),
                                  e.e(998392),
                                  e.e(948054),
                                  e.e(264236),
                                  e.e(268582),
                                  e.e(161379),
                                  e.e(50015),
                                  e.e(592028),
                                  e.e(232551),
                                  e.e(70833),
                                  e.e(631644),
                                  e.e(425906),
                                  e.e(123216),
                                  e.e(897073),
                                  e.e(182408),
                                  e.e(132191),
                                  e.e(958428),
                                  e.e(837687),
                                  e.e(858337),
                                  e.e(820683),
                                  e.e(159957),
                                  e.e(728136),
                                  e.e(643104),
                                  e.e(368426),
                                  e.e(680029),
                                  e.e(480436),
                                  e.e(409391),
                                  e.e(810262),
                                  e.e(756684),
                                  e.e(908170),
                                  e.e(752695),
                                  e.e(769014),
                                  e.e(853934),
                                  e.e(469647),
                                  e.e(670089),
                                  e.e(508425),
                                  e.e(454450),
                                  e.e(664743),
                                  e.e(426226),
                              ]).then(e.bind(e, 688218));
                              return (e) => (0, l.jsx)(t, { ...e, guildScheduledEventId: n, guildId: i.id });
                          }, g)
                        : null != a &&
                          (0, Q.mM)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e(881717),
                                  e.e(232551),
                                  e.e(853934),
                                  e.e(508425),
                                  e.e(961051),
                              ]).then(e.bind(e, 462166));
                              return (n) => (0, l.jsx)(t, { ...n, guildEvent: c, recurrenceId: a });
                          }, g));
            }
            return (0, l.jsx)(d.Dr, {
                id: S.intl.string(S.t.Rgy2dU),
                label: S.intl.string(S.t.Rgy2dU),
                action: A ? void 0 : () => h(!0),
                children:
                    A &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.wmVmXN),
                                label: S.intl.string(S.t.wmVmXN),
                                action: () => h(!1),
                                disabled: m?.is_canceled || f.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.BW1Qoh),
                                label: S.intl.string(S.t.BW1Qoh),
                                action: () => h(!0),
                                disabled: new Date(c.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: c, guild: z, channel: O, recurrenceId: g, isRecurrenceItem: tn }),
        ta = (0, V.A)(c, z, O),
        ts = (function (t, n, i) {
            let { canManageGuildEvent: r } = (0, F.nr)(i ?? n),
                a = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                s = r(a),
                u = null != (0, J.Qs)(i?.id ?? ""),
                c = null != a && (0, j.Fd)(a);
            return !s || c || u
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: S.intl.string(S.t.cK1GGY),
                      label: S.intl.string(S.t.cK1GGY),
                      action: function () {
                          null != a &&
                              (0, Q.mM)(async () => {
                                  let { default: t } = await Promise.all([
                                      e.e(998835),
                                      e.e(107427),
                                      e.e(858337),
                                      e.e(2329),
                                      e.e(908170),
                                      e.e(612502),
                                  ]).then(e.bind(e, 163765));
                                  return (n) => (0, l.jsx)(t, { ...n, event: a });
                              });
                      },
                  });
        })(c, z, O),
        tu = (function (t, n, e) {
            let i = null != e;
            if (null == (0, b.bG)([v.A], () => v.A.getGuild(n), [n])) return null;
            function r() {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = `${location.protocol}//${location.host}${T.BVt.GUILD_EVENT_DETAILS(n, t, l ? null : e)}`;
                (0, X.C)(i, () => (0, P.P0)({ text: S.intl.string(S.t["L/PwZf"]), variant: "success" }));
            }
            return (0, l.jsx)(d.Dr, {
                id: S.intl.string(S.t["9o+VKx"]),
                label: S.intl.string(S.t["9o+VKx"]),
                action: i ? void 0 : () => r(!0),
                children:
                    i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.QLtDqP),
                                label: S.intl.string(S.t.QLtDqP),
                                action: () => r(!1),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.AYnhB7),
                                label: S.intl.string(S.t.AYnhB7),
                                action: () => r(!0),
                            }),
                        ],
                    }),
            });
        })(c, z.id, g),
        tc = (function (t, n) {
            let e = C.Q_.useSetting(),
                { tidaWebformEnabled: r } = N.A.useExperiment(
                    { location: "useCopyEventImageLinkItem" },
                    { autoTrackExposure: !1 },
                ),
                a = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t)),
                s = null != a ? (0, Y.A)(a) : null,
                u = "event-image" === n.getAttribute("data-type"),
                c = i.useCallback(() => {
                    null != s && (0, X.C)(s);
                }, [s]);
            return X.p5 && e && r && null != s && u
                ? (0, l.jsx)(d.Dr, {
                      id: "copy-event-image-link",
                      label: S.intl.string(S.t["8xHmxo"]),
                      action: c,
                      icon: L.LinkIcon,
                  })
                : null;
        })(c, tl),
        to =
            ((n = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(c), [c])),
            null == c || null == n
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: "report-event",
                      label: S.intl.string(S.t.IBA5wX),
                      action: function () {
                          if (null != n) return (0, $.uA)(n);
                      },
                      icon: W.FlagIcon,
                      color: "danger",
                  })),
        tg = (0, u.A)({ id: c, label: S.intl.string(S.t.WZwPO4) }),
        tm = (0, u.A)({ id: g, label: S.intl.string(S.t.NZRGQo) }),
        tf = (function (t, n, e, i) {
            let r,
                a = (0, b.bG)([j.Ay], () => j.Ay.isActive(t)),
                s = (0, D.nh)(t ?? "", i),
                u = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                c = (0, b.bG)([v.A], () => v.A.getGuild(n), [n]);
            if (a || null == s || null == u) return null;
            r =
                u.entity_type === w.Ps.EXTERNAL
                    ? u.entity_metadata.location
                    : null != e && null != c
                      ? S.intl.formatToPlainString(S.t["2t8L04"], {
                            channelName: (0, h.m1)(e, E.default, p.A),
                            guildName: c.name,
                        })
                      : S.intl.string(S.t.VSgOVg);
            let g = m()(u.scheduled_start_time),
                T = null != u.scheduled_end_time ? m()(u.scheduled_end_time) : g,
                L = null != u.description && "" !== u.description ? x.Ay.unparse(u.description, e?.id ?? "", !0) : "",
                N = (0, G.Sn)(u.recurrence_rule),
                C = null != N ? (0, _.X7)(N) : null,
                { startTime: X, endTime: Y } = s,
                P = m()(X) ?? g,
                Q = m()(Y ?? X) ?? g;
            function M() {
                if (null == u) return;
                let t = o()();
                (t.createEvent({ start: g, end: T, summary: u.name, description: L, location: r, repeating: C }),
                    y.isPlatformEmbedded
                        ? A.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                        : window.open(t.toURL(), "_blank"));
            }
            return (0, l.jsxs)(d.Dr, {
                id: S.intl.string(S.t.k5pvjo),
                label: S.intl.string(S.t.k5pvjo),
                action: M,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.JKSLRH),
                        label: S.intl.string(S.t.JKSLRH),
                        action: function () {
                            if (null == u) return;
                            let t = C?.toString(),
                                n = {
                                    text: u.name,
                                    dates: `${g.format(R)}/${T.format(R)}`,
                                    details: L,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != t ? I.exec(t)?.[0] : void 0,
                                },
                                e = `https://calendar.google.com/calendar/render?${(0, f.As)(n)}`;
                            window.open(e, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, { id: S.intl.string(S.t.nrBYSe), label: S.intl.string(S.t.nrBYSe), action: M }),
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.odzaCd),
                        label: S.intl.string(S.t.odzaCd),
                        action: function () {
                            if (null == u) return;
                            let t = { v: 60, title: u.name, st: P.format(R), et: Q.format(R), desc: L, in_loc: r },
                                n = `https://calendar.yahoo.com/?${(0, f.As)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.rQe8EE),
                        label: S.intl.string(S.t.rQe8EE),
                        action: function () {
                            if (null == u) return;
                            let t = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: P.format(k),
                                    enddt: Q.format(k),
                                    subject: u.name,
                                    body: L,
                                    location: r,
                                    allday: !1,
                                },
                                n = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, f.As)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                ],
            });
        })(c, z.id, O, g),
        tb = (function (t) {
            let { guildEventId: n, guildId: e, recurrenceId: i } = t,
                r = (0, b.bG)([K.A], () => K.A.isLurking(e), [e]),
                a = (0, b.bG)([q.default], () => q.default.getId()),
                {
                    rsvped: s,
                    baseRsvp: u,
                    recurrenceRsvp: c,
                } = (0, b.cf)(
                    [j.Ay],
                    () => ({
                        rsvped: j.Ay.isInterestedInEventRecurrence(n, i),
                        baseRsvp: j.Ay.getRsvp(n, null, a),
                        recurrenceRsvp: j.Ay.getRsvp(n, i, a),
                    }),
                    [i, n, a],
                ),
                o = (0, Z.A)(i, n);
            if (r || o?.is_canceled) return null;
            function g() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    l = u?.response === w.Qi.INTERESTED ? w.Qi.UNINTERESTED : w.Qi.INTERESTED,
                    r = t ? null : i;
                H.default.updateRsvp(n, r, e, l);
            }
            return (0, l.jsxs)(d.Dr, {
                id: s ? S.intl.string(S.t["7M5gaN"]) : S.intl.string(S.t.FXixvH),
                label: s ? S.intl.string(S.t["7M5gaN"]) : S.intl.string(S.t.FXixvH),
                action: void 0,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.lwZCFT),
                        label: S.intl.string(S.t.lwZCFT),
                        action: () => g(!1),
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.uoorxi),
                        label: S.intl.string(S.t.uoorxi),
                        action: () => g(!0),
                        disabled: null != c,
                    }),
                ],
            });
        })({ guildEventId: c, guildId: z.id, recurrenceId: g });
    return (0, l.jsx)(s.A, {
        context: tt,
        object: T.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: a.Z_,
            "aria-label": S.intl.string(S.t.liqwPJ),
            onSelect: te,
            children: [
                (0, l.jsxs)(d.rX, { children: [tf, !tn && ts, td, !tn && ta, tr, ti, tu, tn && tb] }),
                !tn && (0, l.jsx)(d.rX, { children: to }),
                null != tc && (0, l.jsx)(d.rX, { children: tc }),
                (0, l.jsxs)(d.rX, { children: [tg, tm] }),
            ],
        }),
    });
}
