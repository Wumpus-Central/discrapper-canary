n.d(t, { Z: () => y }), n(388685), n(472816), n(794429), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(999382),
    c = n(450377),
    d = n(823379),
    u = n(63063),
    g = n(426563),
    m = n(727072),
    p = n(85960),
    f = n(577330),
    h = n(65912),
    x = n(51248),
    b = n(546513),
    j = n(572456),
    _ = n(273504),
    v = n(981631),
    C = n(388032),
    O = n(894780);
function y(e) {
    var t, n;
    let { guildId: y, setPreventNavigation: N = () => {} } = e,
        { editingRule: E, setEditingRule: I } = (0, h.V)(),
        { guild: S, subsection: T } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        P = null != (n = null != (t = null == S ? void 0 : S.id) ? t : y) ? n : v.lds,
        w = null != E,
        [Z] = (0, m.RD)(P),
        { rulesByTriggerType: R } = (0, m.pH)(P),
        D = {
            [p.vh.MEMBERS]: C.intl.string(C.t.sx4E5u),
            [p.vh.CONTENT]: C.intl.string(C.t.fphZb2),
        },
        A = i.useMemo(
            () =>
                Object.values(null != R ? R : {})
                    .flat()
                    .filter(d.lm),
            [R],
        ),
        L = {
            isInEditMode: w,
            setEditingRule: I,
        },
        k = i.useRef(L);
    i.useEffect(() => {
        k.current = L;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = k.current;
            e && t(null);
        }, [P]);
    let G = i.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, r;
                    return null !=
                        (r =
                            null ==
                            (n = A.find((t) => {
                                let { id: n } = t;
                                return n === e;
                            }))
                                ? void 0
                                : n.name)
                        ? r
                        : null;
                }
                return null != t ? p.I6[t].getDefaultRuleName() : null;
            },
            [A],
        ),
        M = i.useMemo(() => {
            var e, t;
            return G(
                null != (e = null == E ? void 0 : E.id) ? e : null,
                null != (t = null == E ? void 0 : E.triggerType) ? t : null,
            );
        }, [G, E]);
    i.useEffect(() => {
        N(w, (0, j.af)(M));
    }, [N, w, M]);
    let U = (0, p.Z6)(P);
    return (0, r.jsxs)(a.hjN, {
        title: C.intl.string(C.t.uRelg4),
        tag: "h1",
        children: [
            (0, r.jsxs)("div", {
                className: O.descriptionContainer,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        tag: "h3",
                        className: O.description,
                        titleClassName: O.descriptionHeader,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "header-secondary",
                                children: C.intl.string(C.t.EwuSCQ),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                className: O.helpUrl,
                                children: C.intl.format(C.t["B+sgGh"], {
                                    helpUrl: u.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: O.descriptionAvatarContainer,
                        children: [
                            (0, r.jsx)(a.qEK, {
                                src: (0, g.j)(),
                                size: a.EFr.SIZE_80,
                                "aria-label": C.intl.string(C.t.hG1StL),
                            }),
                            (0, r.jsx)(a.IGR, {
                                text: (0, r.jsxs)("div", {
                                    className: O.automodBadgeText,
                                    children: [
                                        (0, r.jsx)(a.sV5, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: O.checkmarkIcon,
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: "text-xs/bold",
                                            className: O.automodText,
                                            children: C.intl.string(C.t.hG1StL),
                                        }),
                                    ],
                                }),
                                color: s.Z.unsafe_rawColors.BRAND_500.css,
                                className: O.textBadge,
                            }),
                        ],
                    }),
                ],
            }),
            Z
                ? (0, r.jsx)(f.Z, {})
                : Object.entries(U).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let l =
                          null != D[t]
                              ? (0, r.jsx)(a.hjN, {
                                    tag: "h3",
                                    className: O.categoryHeader,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        children: D[t],
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
                                              b.Z,
                                              {
                                                  guildId: P,
                                                  triggerType: e,
                                                  rules: null != (t = R[e]) ? t : [],
                                                  initWithEdit:
                                                      T === v.KsC.AUTOMOD_MENTION_SPAM && e === _.fX.MENTION_SPAM,
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
            null != S &&
                (0, r.jsx)(c.k0, {
                    guild: S,
                    withDivider: !1,
                    className: O.explicitContentFilterSection,
                }),
            (0, r.jsx)(x.Z, {
                guildId: P,
                existingRules: A,
            }),
            w && (0, r.jsx)("div", { className: O.endSpacer }),
        ],
    });
}
