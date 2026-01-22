t.d(n, { default: () => w });
var r = t(627968),
    l = t(64700),
    i = t(735438),
    s = t.n(i),
    a = t(311907),
    c = t(397927),
    o = t(334738),
    u = t(964486),
    d = t(915089),
    m = t(256587),
    g = t(71393),
    h = t(222823),
    j = t(954571),
    x = t(403362);
t(645034);
var v = t(661191),
    p = t(285059),
    f = t(770666),
    b = t(508654),
    A = t(614170),
    y = t(868711),
    C = t(823508),
    O = t(988794),
    N = t(652215),
    k = t(790782),
    E = t(985018),
    P = t(586426);
function w(e) {
    let { transitionState: n, onClose: i, guildId: w } = e,
        G = (0, d.GV)(),
        T = (0, a.bG)([g.A], () => g.A.getGuild(w)),
        S = (0, f.A)(null == T ? void 0 : T.id),
        I = (0, b.Ay)(w),
        M = l.useRef(h.Ay.ackMessageId(w, k.P.GUILD_EVENT)),
        _ = (0, C.A)();
    return (
        l.useEffect(() => {
            I.forEach((e) => p.A.getGuildEventUserCounts(w, e.id, [])), p.A.getGuildEventsForCurrentUser(w);
        }, [I, w]),
        (0, u.Ay)(() => {
            j.default.track(N.HAw.OPEN_MODAL, {
                type: O.BV,
                guild_id: w,
                guild_events_count: I.length,
            });
        }),
        l.useEffect(() => {
            s()(I)
                .map((e) => e.creator_id)
                .filter(x.Vq)
                .uniq()
                .forEach((e) => {
                    m.A.requestMember(w, e);
                });
        }, [w, I]),
        l.useEffect(() => {
            null != w && (0, o.hK)(w, k.P.GUILD_EVENT);
        }, [w]),
        (0, r.jsxs)(c.EOs, {
            size: c.rIJ.MEDIUM,
            transitionState: n,
            "aria-labelledby": G,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, r.jsxs)(c.rQ0, {
                    className: P.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsx)(c.CTc, {
                            size: "md",
                            color: "currentColor",
                            className: P.Kk,
                        }),
                        (0, r.jsx)(c.Heading, {
                            id: G,
                            variant: "heading-md/semibold",
                            children:
                                I.length > 0
                                    ? E.intl.formatToPlainString(E.t.IBdqSu, { number: I.length })
                                    : E.intl.string(E.t.tlopTM),
                        }),
                        S &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: P.yF,
                                        children: "|",
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, c.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("68587"),
                                                    t.e("28136"),
                                                    t.e("342"),
                                                    t.e("68505"),
                                                ]).then(t.bind(t, 21653));
                                                return (n) => {
                                                    var t, l;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        (r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (l = l = { guildId: w }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(l),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(l)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(l, e),
                                                                  );
                                                              }),
                                                        t),
                                                    );
                                                };
                                            }, _);
                                        },
                                        text: E.intl.string(E.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(c.DUT, {
                            onClick: i,
                            className: P.gb,
                            "aria-label": E.intl.string(E.t.cpT0Cq),
                            children: (0, r.jsx)(c.PGe, {
                                size: "md",
                                color: "currentColor",
                                className: P.Kk,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.$mQ, {
                    className: P.Qs,
                    "data-migration-pending": !0,
                    children:
                        I.length > 0
                            ? I.map((e) =>
                                  (0, r.jsx)(
                                      A.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: i,
                                          isNew: null != M.current && v.default.compare(e.id, M.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, r.jsx)(y.A, {
                                  guildId: w,
                                  onClose: i,
                              }),
                }),
            ],
        })
    );
}
