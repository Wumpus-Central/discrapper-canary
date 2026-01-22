n.d(t, {
    A: () => x,
}),
    n(896048),
    n(638769),
    n(264879);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(730134),
    u = n(378570),
    d = n(863005),
    f = n(707539),
    p = n(747926),
    h = n(576705),
    b = n(222823),
    g = n(287809),
    m = n(486020),
    A = n(661191),
    y = n(652215),
    O = n(37411),
    j = n(985018),
    v = n(533848);

function x(e) {
    let { channel: t } = e,
        i = (0, s.yK)([d.A, b.Ay, h.A], () => {
            let e = d.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return a()(d.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(a().values(d.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && h.A.can(y.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = b.Ay.lastMessageId(e.id),
                        r = b.Ay.lastMessageId(t.id);
                    return A.default.compare(n, r);
                })
                .reverse()
                .value();
        }),
        c = t.isForumLikeChannel() ? 5 : 3;
    return (
        l.useEffect(() => {
            (0, f.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: v.SW,
            children: [
                (0, r.jsx)(o.Text, {
                    className: v.DD,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: t.isForumLikeChannel() ? j.intl.string(j.t.ioVdO2) : j.intl.string(j.t.VNYs2v),
                }),
                i
                    .slice(0, t.isForumLikeChannel() ? i.length : c)
                    .map((e) =>
                        (0, r.jsx)(
                            E,
                            {
                                thread: e,
                            },
                            e.id,
                        ),
                    )
                    .filter((e) => l.isValidElement(e))
                    .slice(0, c),
                (0, r.jsx)(o.DUT, {
                    className: v.OS,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, u.iN)(t.id)
                            : (0, o.mMO)(async () => {
                                  let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          }),
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          (r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0,
                                                                    })
                                                                  : (e[t] = r);
                                                      });
                                              }
                                              return e;
                                          })(
                                              {
                                                  channel: t,
                                              },
                                              n,
                                          ),
                                      );
                              });
                    },
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: j.intl.string(j.t["4qdZ93"]),
                    }),
                }),
            ],
        })
    );
}

function E(e) {
    let { thread: t } = e,
        n = (0, s.bG)([g.default], () => g.default.getUser(t.ownerId)),
        l = (0, f.JO)(t);
    return (0, r.jsxs)(o.DUT, {
        className: v.nM,
        onClick: (e) => {
            (0, p.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, O.H9.POPOUT);
        },
        children: [
            null == n
                ? (0, r.jsx)("img", {
                      className: v.my,
                      src: m.Ay.getDefaultAvatarURL(void 0, void 0),
                      alt: "",
                  })
                : (0, r.jsx)(c.A, {
                      className: v.my,
                      user: n,
                      size: o._3J.SIZE_16,
                  }),
            (0, r.jsx)(o.Text, {
                className: v.UU,
                variant: "text-sm/normal",
                color: "none",
                children: t.name,
            }),
            (0, r.jsxs)(o.Text, {
                className: v.vE,
                variant: "text-sm/normal",
                color: "none",
                children: [
                    (0, r.jsx)("span", {
                        className: v.xE,
                        children: "•",
                    }),
                    (0, f.aK)(l),
                ],
            }),
        ],
    });
}
