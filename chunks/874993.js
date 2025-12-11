n.d(t, { Z: () => C }), n(388685), n(472816), n(794429), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(999382),
    o = n(450377),
    c = n(823379),
    d = n(63063),
    u = n(727072),
    g = n(85960),
    f = n(577330),
    m = n(65912),
    b = n(51248),
    p = n(546513),
    h = n(572456),
    x = n(273504),
    j = n(981631),
    v = n(388032),
    O = n(993830);
function C(e) {
    var t, n;
    let { guildId: C, setPreventNavigation: y = () => {} } = e,
        { editingRule: N, setEditingRule: E } = (0, m.V)(),
        { guild: I, subsection: S } = (0, l.cj)([s.Z], () => s.Z.getProps()),
        _ = null != (n = null != (t = null == I ? void 0 : I.id) ? t : C) ? n : j.lds,
        T = null != N,
        [P] = (0, u.RD)(_),
        { rulesByTriggerType: w } = (0, u.pH)(_),
        Z = {
            [g.vh.MEMBERS]: v.intl.string(v.t.sx4E5v),
            [g.vh.CONTENT]: v.intl.string(v.t.fphZb0),
        },
        R = i.useMemo(
            () =>
                Object.values(null != w ? w : {})
                    .flat()
                    .filter(c.lm),
            [w],
        ),
        D = {
            isInEditMode: T,
            setEditingRule: E,
        },
        A = i.useRef(D);
    i.useEffect(() => {
        A.current = D;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = A.current;
            e && t(null);
        }, [_]);
    let L = i.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, r;
                    return null !=
                        (r =
                            null ==
                            (n = R.find((t) => {
                                let { id: n } = t;
                                return n === e;
                            }))
                                ? void 0
                                : n.name)
                        ? r
                        : null;
                }
                return null != t ? g.I6[t].getDefaultRuleName() : null;
            },
            [R],
        ),
        k = i.useMemo(() => {
            var e, t;
            return L(
                null != (e = null == N ? void 0 : N.id) ? e : null,
                null != (t = null == N ? void 0 : N.triggerType) ? t : null,
            );
        }, [L, N]);
    i.useEffect(() => {
        y(T, (0, h.af)(k));
    }, [y, T, k]);
    let G = (0, g.Z6)(_);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: v.intl.string(v.t.uRelgx),
            }),
            (0, r.jsx)("div", {
                className: O.descriptionContainer,
                children: (0, r.jsxs)("div", {
                    className: O.description,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: v.intl.string(v.t.EwuSCR),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            className: O.helpUrl,
                            children: v.intl.format(v.t["B+sgGt"], {
                                helpUrl: d.Z.getArticleURL(j.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    ],
                }),
            }),
            P
                ? (0, r.jsx)(f.Z, {})
                : Object.entries(G).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let l =
                          null != Z[t]
                              ? (0, r.jsx)("div", {
                                    className: O.categoryHeader,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: Z[t],
                                    }),
                                })
                              : null;
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: O.categoryContainer,
                              children: [
                                  l,
                                  (0, r.jsx)(r.Fragment, {
                                      children: n.map((e) => {
                                          var t;
                                          return (0, r.jsx)(
                                              p.Z,
                                              {
                                                  guildId: _,
                                                  triggerType: e,
                                                  rules: null != (t = w[e]) ? t : [],
                                                  initWithEdit:
                                                      S === j.KsC.AUTOMOD_MENTION_SPAM && e === x.fX.MENTION_SPAM,
                                              },
                                              e,
                                          );
                                      }),
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
            null != I &&
                (0, r.jsx)(o.k0, {
                    guild: I,
                    withDivider: !1,
                    className: O.explicitContentFilterSection,
                }),
            (0, r.jsx)(b.Z, {
                guildId: _,
                existingRules: R,
            }),
            T && (0, r.jsx)("div", { className: O.endSpacer }),
        ],
    });
}
