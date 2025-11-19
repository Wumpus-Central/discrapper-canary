n.d(t, { Z: () => O }), n(388685), n(472816), n(794429), n(953529);
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
    m = n(577330),
    p = n(65912),
    f = n(51248),
    h = n(546513),
    b = n(572456),
    x = n(273504),
    j = n(981631),
    _ = n(388032),
    v = n(716971);
function O(e) {
    var t, n;
    let { guildId: O, setPreventNavigation: C = () => {} } = e,
        { editingRule: y, setEditingRule: N } = (0, p.V)(),
        { guild: E, subsection: I } = (0, l.cj)([s.Z], () => s.Z.getProps()),
        S = null != (n = null != (t = null == E ? void 0 : E.id) ? t : O) ? n : j.lds,
        T = null != y,
        [P] = (0, u.RD)(S),
        { rulesByTriggerType: w } = (0, u.pH)(S),
        Z = {
            [g.vh.MEMBERS]: _.intl.string(_.t.sx4E5v),
            [g.vh.CONTENT]: _.intl.string(_.t.fphZb0),
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
            setEditingRule: N,
        },
        A = i.useRef(D);
    i.useEffect(() => {
        A.current = D;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = A.current;
            e && t(null);
        }, [S]);
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
                null != (e = null == y ? void 0 : y.id) ? e : null,
                null != (t = null == y ? void 0 : y.triggerType) ? t : null,
            );
        }, [L, y]);
    i.useEffect(() => {
        C(T, (0, b.af)(k));
    }, [C, T, k]);
    let G = (0, g.Z6)(S);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                children: _.intl.string(_.t.uRelgx),
            }),
            (0, r.jsx)("div", {
                className: v.descriptionContainer,
                children: (0, r.jsxs)("div", {
                    className: v.description,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: _.intl.string(_.t.EwuSCR),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            className: v.helpUrl,
                            children: _.intl.format(_.t["B+sgGt"], {
                                helpUrl: d.Z.getArticleURL(j.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    ],
                }),
            }),
            P
                ? (0, r.jsx)(m.Z, {})
                : Object.entries(G).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let l =
                          null != Z[t]
                              ? (0, r.jsx)("div", {
                                    className: v.categoryHeader,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        children: Z[t],
                                    }),
                                })
                              : null;
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: v.categoryContainer,
                              children: [
                                  l,
                                  (0, r.jsx)(r.Fragment, {
                                      children: n.map((e) => {
                                          var t;
                                          return (0, r.jsx)(
                                              h.Z,
                                              {
                                                  guildId: S,
                                                  triggerType: e,
                                                  rules: null != (t = w[e]) ? t : [],
                                                  initWithEdit:
                                                      I === j.KsC.AUTOMOD_MENTION_SPAM && e === x.fX.MENTION_SPAM,
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
            null != E &&
                (0, r.jsx)(o.k0, {
                    guild: E,
                    withDivider: !1,
                    className: v.explicitContentFilterSection,
                }),
            (0, r.jsx)(f.Z, {
                guildId: S,
                existingRules: R,
            }),
            T && (0, r.jsx)("div", { className: v.endSpacer }),
        ],
    });
}
