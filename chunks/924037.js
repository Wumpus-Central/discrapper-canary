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
    b = e(492462),
    f = e(855986),
    h = e(77729),
    A = e(47167),
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
    S = e(652215),
    T = e(792996);
let R = "YYYYMMDDTHHmmss",
    L = "YYYY-MM-DDTHH:mm:ss",
    N = /RRULE:.*/;
var k = e(173936),
    I = e(207560),
    X = e(253932),
    C = e(957565),
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
        c,
        g,
        O,
        z,
        tt,
        tn,
        {
            guildEventId: te,
            recurrenceId: tl,
            channel: ti,
            guild: tr,
            analyticsContext: td,
            isRecurrenceItem: ta = !1,
            onSelect: ts,
            target: tu,
        } = t,
        tc = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, F.nr)(r ?? i),
                u = (0, f.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                c = (0, Z.A)(e, u?.id),
                o = null != u && s(u);
            return a && c?.is_canceled && o
                ? (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.b8606G),
                      label: T.intl.string(T.t.b8606G),
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
        })({ guildEventId: te, recurrenceId: tl, guild: tr, channel: ti }),
        to = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, F.nr)(r ?? i),
                [u, c] = (0, f.yK)([j.Ay], () => [j.Ay.isActive(n), j.Ay.getGuildScheduledEvent(n)]),
                o = (0, Z.A)(e, c?.id),
                g = null != c && s(c),
                m = c?.recurrence_rule != null && !a,
                b = (0, D.nh)(n, e);
            if (!g || (u && !m && !a) || (a && !a) || null == c || null == b) return null;
            let { startTime: h } = b;
            if (u && a) {
                if (null == h) return null;
                let t = new Date(o?.scheduled_start_time ?? h);
                if (new Date() > t) return null;
            }
            function A(t) {
                (0, Q.qf)((r) =>
                    (0, l.jsx)(M.u, {
                        ...r,
                        title: T.intl.string(T.t.R5bpin),
                        subtitle: T.intl.string(T.t.v2GWNQ),
                        confirmText: m || t ? T.intl.string(T.t["8ZsNv5"]) : T.intl.string(T.t.B9sJLX),
                        cancelText: T.intl.string(T.t.oEAioF),
                        onConfirm: () =>
                            a && !t ? H.default.deleteRecurrence(i.id, n, e, o) : H.default.deleteGuildEvent(n, i.id),
                        children:
                            (m || t) &&
                            (0, l.jsx)(B.E, { variant: "body-md/normal", children: T.intl.format(T.t.ZcpcyO, {}) }),
                    }),
                );
            }
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t.B9sJLX),
                label: T.intl.string(T.t.B9sJLX),
                action: a ? void 0 : () => A(),
                color: "danger",
                children:
                    a &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.tqClly),
                                label: T.intl.string(T.t.tqClly),
                                action: () => A(),
                                disabled: o?.is_canceled,
                                color: "danger",
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.wr33rW),
                                label: T.intl.string(T.t.wr33rW),
                                action: () => A(!0),
                                color: "danger",
                            }),
                        ],
                    }),
            });
        })({ guildEventId: te, recurrenceId: tl, guild: tr, channel: ti }),
        tg = (function (t) {
            let { guildEventId: n, guild: i, channel: r, recurrenceId: a, isRecurrenceItem: s } = t,
                { canManageGuildEvent: u } = (0, F.nr)(r ?? i),
                c = (0, f.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                o = u(c),
                g = (0, U.A)(),
                m = (0, Z.A)(a, c?.id),
                b = (0, D.nh)(n, a);
            if (!o || null == b || null == c) return null;
            let h = null != c.recurrence_rule && !s;
            function A(t) {
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
                                  e.e(258398),
                                  e.e(592028),
                                  e.e(70833),
                                  e.e(425906),
                                  e.e(123216),
                                  e.e(897073),
                                  e.e(50015),
                                  e.e(232551),
                                  e.e(631644),
                                  e.e(182408),
                                  e.e(132191),
                                  e.e(958428),
                                  e.e(837687),
                                  e.e(858337),
                                  e.e(820683),
                                  e.e(159957),
                                  e.e(728136),
                                  e.e(643104),
                                  e.e(847158),
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
                id: T.intl.string(T.t.Rgy2dU),
                label: T.intl.string(T.t.Rgy2dU),
                action: h ? void 0 : () => A(!0),
                children:
                    h &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.wmVmXN),
                                label: T.intl.string(T.t.wmVmXN),
                                action: () => A(!1),
                                disabled: m?.is_canceled || b.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.BW1Qoh),
                                label: T.intl.string(T.t.BW1Qoh),
                                action: () => A(!0),
                                disabled: new Date(c.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: te, guild: tr, channel: ti, recurrenceId: tl, isRecurrenceItem: ta }),
        tm = (0, V.A)(te, tr, ti),
        tb = (function (t, n, i) {
            let { canManageGuildEvent: r } = (0, F.nr)(i ?? n),
                a = (0, f.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                s = r(a),
                u = null != (0, J.Qs)(i?.id ?? ""),
                c = null != a && (0, j.Fd)(a);
            return !s || c || u
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.cK1GGY),
                      label: T.intl.string(T.t.cK1GGY),
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
        })(te, tr, ti),
        tf = (function (t, n, e) {
            let i = null != e;
            if (null == (0, f.bG)([v.A], () => v.A.getGuild(n), [n])) return null;
            function r() {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = `${location.protocol}//${location.host}${S.BVt.GUILD_EVENT_DETAILS(n, t, l ? null : e)}`;
                (0, C.C)(i, () => (0, P.P0)({ text: T.intl.string(T.t["L/PwZf"]), variant: "success" }));
            }
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t["9o+VKx"]),
                label: T.intl.string(T.t["9o+VKx"]),
                action: i ? void 0 : () => r(!0),
                children:
                    i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.QLtDqP),
                                label: T.intl.string(T.t.QLtDqP),
                                action: () => r(!1),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.AYnhB7),
                                label: T.intl.string(T.t.AYnhB7),
                                action: () => r(!0),
                            }),
                        ],
                    }),
            });
        })(te, tr.id, tl),
        th =
            ((n = X.Q_.useSetting()),
            (c = (0, I.lF)()),
            (O = null != (g = (0, f.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(te))) ? (0, Y.A)(g) : null),
            (z = "event-image" === tu.getAttribute("data-type")),
            (tt = i.useCallback(() => {
                null != O && (0, C.C)(O);
            }, [O])),
            C.p5 && n && c && null != O && z
                ? (0, l.jsx)(d.Dr, {
                      id: "copy-event-image-link",
                      label: T.intl.string(T.t["8xHmxo"]),
                      action: tt,
                      icon: k.LinkIcon,
                  })
                : null),
        tA =
            ((tn = (0, f.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(te), [te])),
            null == te || null == tn
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: "report-event",
                      label: T.intl.string(T.t.IBA5wX),
                      action: function () {
                          if (null != tn) return (0, $.uA)(tn);
                      },
                      icon: W.FlagIcon,
                      color: "danger",
                  })),
        tx = (0, u.A)({ id: te, label: T.intl.string(T.t.WZwPO4) }),
        tv = (0, u.A)({ id: tl, label: T.intl.string(T.t.NZRGQo) }),
        tp = (function (t, n, e, i) {
            let r,
                a = (0, f.bG)([j.Ay], () => j.Ay.isActive(t)),
                s = (0, D.nh)(t ?? "", i),
                u = (0, f.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                c = (0, f.bG)([v.A], () => v.A.getGuild(n), [n]);
            if (a || null == s || null == u) return null;
            r =
                u.entity_type === w.Ps.EXTERNAL
                    ? u.entity_metadata.location
                    : null != e && null != c
                      ? T.intl.formatToPlainString(T.t["2t8L04"], {
                            channelName: (0, A.m1)(e, E.default, p.A),
                            guildName: c.name,
                        })
                      : T.intl.string(T.t.VSgOVg);
            let g = m()(u.scheduled_start_time),
                S = null != u.scheduled_end_time ? m()(u.scheduled_end_time) : g,
                k = null != u.description && "" !== u.description ? x.Ay.unparse(u.description, e?.id ?? "", !0) : "",
                I = (0, G.Sn)(u.recurrence_rule),
                X = null != I ? (0, _.X7)(I) : null,
                { startTime: C, endTime: Y } = s,
                P = m()(C) ?? g,
                Q = m()(Y ?? C) ?? g;
            function M() {
                if (null == u) return;
                let t = o()();
                (t.createEvent({ start: g, end: S, summary: u.name, description: k, location: r, repeating: X }),
                    y.isPlatformEmbedded
                        ? h.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                        : window.open(t.toURL(), "_blank"));
            }
            return (0, l.jsxs)(d.Dr, {
                id: T.intl.string(T.t.k5pvjo),
                label: T.intl.string(T.t.k5pvjo),
                action: M,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.JKSLRH),
                        label: T.intl.string(T.t.JKSLRH),
                        action: function () {
                            if (null == u) return;
                            let t = X?.toString(),
                                n = {
                                    text: u.name,
                                    dates: `${g.format(R)}/${S.format(R)}`,
                                    details: k,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != t ? N.exec(t)?.[0] : void 0,
                                },
                                e = `https://calendar.google.com/calendar/render?${(0, b.As)(n)}`;
                            window.open(e, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, { id: T.intl.string(T.t.nrBYSe), label: T.intl.string(T.t.nrBYSe), action: M }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.odzaCd),
                        label: T.intl.string(T.t.odzaCd),
                        action: function () {
                            if (null == u) return;
                            let t = { v: 60, title: u.name, st: P.format(R), et: Q.format(R), desc: k, in_loc: r },
                                n = `https://calendar.yahoo.com/?${(0, b.As)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.rQe8EE),
                        label: T.intl.string(T.t.rQe8EE),
                        action: function () {
                            if (null == u) return;
                            let t = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: P.format(L),
                                    enddt: Q.format(L),
                                    subject: u.name,
                                    body: k,
                                    location: r,
                                    allday: !1,
                                },
                                n = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, b.As)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                ],
            });
        })(te, tr.id, ti, tl),
        tE = (function (t) {
            let { guildEventId: n, guildId: e, recurrenceId: i } = t,
                r = (0, f.bG)([K.A], () => K.A.isLurking(e), [e]),
                a = (0, f.bG)([q.default], () => q.default.getId()),
                {
                    rsvped: s,
                    baseRsvp: u,
                    recurrenceRsvp: c,
                } = (0, f.cf)(
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
                id: s ? T.intl.string(T.t["7M5gaN"]) : T.intl.string(T.t.FXixvH),
                label: s ? T.intl.string(T.t["7M5gaN"]) : T.intl.string(T.t.FXixvH),
                action: void 0,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.lwZCFT),
                        label: T.intl.string(T.t.lwZCFT),
                        action: () => g(!1),
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.uoorxi),
                        label: T.intl.string(T.t.uoorxi),
                        action: () => g(!0),
                        disabled: null != c,
                    }),
                ],
            });
        })({ guildEventId: te, guildId: tr.id, recurrenceId: tl });
    return (0, l.jsx)(s.A, {
        context: td,
        object: S.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: a.Z_,
            "aria-label": T.intl.string(T.t.liqwPJ),
            onSelect: ts,
            children: [
                (0, l.jsxs)(d.rX, { children: [tp, !ta && tb, tg, !ta && tm, to, tc, tf, ta && tE] }),
                !ta && (0, l.jsx)(d.rX, { children: tA }),
                null != th && (0, l.jsx)(d.rX, { children: th }),
                (0, l.jsxs)(d.rX, { children: [tx, tv] }),
            ],
        }),
    });
}
