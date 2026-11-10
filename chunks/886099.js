(n.r(l), n.d(l, { default: () => ex }));
var t = n(477900),
    r = n(582128),
    i = n(855986),
    o = n(477782),
    a = n(305866),
    u = n(140735),
    s = n(707554),
    d = n(793574),
    c = n(688810),
    f = n(316980),
    h = n(827656),
    m = n(627363),
    p = n(587895),
    x = n(499466);
function A(e, l) {
    let n = (0, x.TW)(l, { autoTrackExposure: e.bot }),
        t = (0, i.bG)([p.A], () => (n && e.bot ? (p.A.getAppIdForBotUserId(e.id) ?? e.id) : null), [n, e.bot, e.id]),
        r = (0, m.YY)(t).data;
    return r?.conjureProjectId != null ? r : null;
}
var g = n(730201);
let j = g.I;
function v(e) {
    let { user: l, guildId: n, onClose: i } = e,
        o = A(l, "ConjureBotProfileFooter"),
        { creator: a, remixProject: u, editProject: s, isSettled: d } = (0, f.A)(o, n ?? null, null != o),
        c = r.useCallback(() => i?.(), [i]);
    return null == o || (null == a && d)
        ? null
        : (0, t.jsx)("div", {
              className: g.q,
              children: (0, t.jsx)(h.A, {
                  applicationId: o.id,
                  creator: a,
                  remixProject: u,
                  editProject: s,
                  guildId: n ?? null,
                  onClose: c,
              }),
          });
}
var P = n(915089),
    b = n(713517),
    y = n(267102),
    I = n(397562),
    M = n(71393),
    w = n(562153),
    C = n(183555),
    O = n(741534),
    N = n(527212),
    R = n(702476),
    T = n(718019),
    k = n(915614),
    E = n(946356),
    U = n(630891),
    F = n(587168),
    $ = n(680581),
    S = n(95362),
    L = n(825484),
    _ = n(734057),
    G = n(576705),
    q = n(693241),
    B = n(821609),
    V = n(976860),
    W = n(652215),
    z = n(792996);
function D(e) {
    let { appChannel: l, onClose: n } = e;
    return (0, t.jsx)(B.$, {
        variant: "primary",
        text: z.intl.string(z.t["Cia+A8"]),
        onClick: function () {
            (n?.(), (0, V.pX)(W.BVt.CHANNEL(l.guildId, l.channelId)));
        },
    });
}
var H = n(696451),
    Y = n(309010),
    X = n(351906),
    J = n(851767),
    K = n(612770),
    Q = n(567556),
    Z = n(559506),
    ee = n(791556),
    el = n(900179),
    en = n(646986),
    et = n(465829),
    er = n(570314),
    ei = n(571077),
    eo = n(243166),
    ea = n(442228),
    eu = n(403369),
    es = n(996988),
    ed = n(96804),
    ec = n(47453);
function ef(e) {
    var l;
    let n,
        o,
        a,
        {
            user: u,
            currentUser: s,
            displayProfile: d,
            guild: c,
            isHoveringOrFocusing: f,
            onOpenProfile: h,
            channelId: m,
            onClose: p,
        } = e,
        x = w.Ay.getName(c?.id, m, u),
        g = (0, i.bG)([J.A], () => J.A.getUserProfile(u.id)?.application),
        j = (0, i.bG)([_.A, Y.Ay], () => _.A.getChannel(Y.Ay.getChannelId())),
        v =
            ((l = c?.id),
            (n = A(u, "BotUserProfilePopout")),
            (o = n?.id ?? null),
            (a = (0, i.bG)([_.A, G.A], () => (null != l && null != o ? ((0, q.A)(l, o, m)?.channelId ?? null) : null), [
                l,
                o,
                m,
            ])),
            r.useMemo(() => (null != l && null != a ? { guildId: l, channelId: a } : null), [l, a])),
        P = (0, i.bG)([H.Ay], () => H.Ay.isMember(c?.id, u.id)),
        b = (0, i.bG)([X.A], () => X.A.hidePersonalInformation);
    return (0, t.jsxs)(S.Ip, {
        fade: !0,
        className: ec.rf,
        children: [
            (0, t.jsx)(Z.A, { userId: u.id }),
            (0, t.jsx)(et.Ay, {
                user: u,
                guildId: c?.id,
                displayName: x,
                onClickName: h,
                displayNameTrailing: b ? null : (0, t.jsx)(eo.A, { userId: u.id, isVisible: f, onOpenProfile: h }),
                pronouns: d?.pronouns,
                onClose: p,
                trailing: (0, t.jsx)(Q.A, { displayProfile: d, themeType: es.d.POPOUT, onClose: p }),
            }),
            (0, t.jsx)(ee.A, { user: u, onOpenProfile: (e) => h?.({ tabSection: e }) }),
            (0, t.jsxs)("div", {
                className: ed.U,
                children: [
                    null != v
                        ? (0, t.jsxs)(L.e, {
                              size: "sm",
                              fullWidth: !0,
                              children: [
                                  (0, t.jsx)(D, { appChannel: v, onClose: p }),
                                  (0, t.jsx)(er.A, { user: u, closePopout: p, variant: "secondary", hideIcon: !0 }),
                              ],
                          })
                        : (0, t.jsx)(er.A, { user: u, closePopout: p, fullWidth: !0 }),
                    (0, t.jsx)(ei.A, { user: u, guildId: c?.id, fullWidth: !0 }),
                ],
            }),
            (0, t.jsx)(ea.A, { userId: u.id, userBio: d?.bio, hidePersonalInformation: b, onClose: p }),
            (0, t.jsx)(en.A, { user: u, currentUser: s, guildId: c?.id, onOpenUserProfileModal: h, onClose: p }),
            g?.popularApplicationCommandIds != null &&
                null != j &&
                (0, t.jsx)(K.A, {
                    applicationId: g.id,
                    commandIds: g.popularApplicationCommandIds,
                    channel: j,
                    guildId: c?.id,
                    onClick: p,
                }),
            null != c &&
                P &&
                (0, t.jsx)(el.A, {
                    heading: z.intl.string(z.t["LPJmL/"]),
                    children: (0, t.jsx)(eu.A, { userId: u.id, guild: c }),
                }),
        ],
    });
}
var eh = n(848674),
    em = n(518477),
    ep = n(207634);
function ex(e) {
    let {
            user: l,
            currentUser: n,
            guildId: f,
            channelId: h,
            messageId: m,
            roleId: p,
            openedAt: x,
            closePopout: A,
            setPopoutRef: g,
            disableUserProfileLink: S = __OVERLAY__,
            newAnalyticsLocations: L = [],
            disableAutoFocus: _ = !1,
            onClickContainer: G,
        } = e,
        { analyticsLocations: q } = (0, c.Ay)([...L, d.A.USER_PROFILE_POPOUT]),
        B = (0, y.aL)(),
        V = (0, C.pb)({ layout: "POPOUT", userId: l.id, guildId: f, channelId: h, messageId: m, roleId: p }),
        D = (0, N.Ay)(l.id, f);
    (0, I.A)(q, D, em.R7.POPOUT);
    let H = (0, i.bG)([M.A], () => (null != f ? M.A.getGuild(f) : null)),
        Y = r.useRef(null),
        { isHoveringOrFocusing: X } = (0, b.A)(Y);
    function J(e) {
        (A?.(),
            B.dispatch(W.jej.POPOUT_CLOSE),
            (0, R.openUserProfileModal)({ sourceAnalyticsLocations: q, hideRestrictedProfile: !0, ...V, ...e }));
    }
    r.useEffect(() => {
        g?.(Y?.current);
    }, [Y, g]);
    let K = _ ? "div" : a.l,
        Q = (0, P.GV)(),
        Z = w.Ay.useName(f, h, l);
    return (0, t.jsx)(c.f5, {
        value: q,
        children: (0, t.jsx)(C.of, {
            value: V,
            openedAt: x,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, t.jsxs)(K, {
                ref: Y,
                "aria-labelledby": Q,
                onClick: G,
                children: [
                    (0, t.jsx)(u.A, {
                        children: (0, t.jsx)(s.H, { id: Q, children: z.intl.format(z.t.KRe1Fk, { name: Z }) }),
                    }),
                    (0, t.jsxs)(E.A, {
                        user: l,
                        displayProfile: D,
                        themeType: es.d.POPOUT,
                        innerClassName: j,
                        children: [
                            (0, t.jsx)(F.A, {
                                children: (0, t.jsx)(U.A, {
                                    user: l,
                                    guildId: f,
                                    viewProfileItem: S
                                        ? null
                                        : (0, t.jsx)(o.Dr, {
                                              id: "view-profile",
                                              label: z.intl.string(z.t["+Xp3hq"]),
                                              action: () => {
                                                  (J(),
                                                      (0, O.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: q,
                                                          ...V,
                                                      }));
                                              },
                                          }),
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: ec.wx,
                                children: [
                                    (0, t.jsx)(k.A, { user: l, displayProfile: D, guildId: f, themeType: es.d.POPOUT }),
                                    (0, t.jsx)(T.A, {
                                        user: l,
                                        displayProfile: D,
                                        guildId: f,
                                        channelId: h,
                                        avatarSize: ep.T[es.d.POPOUT].avatarSize,
                                        onOpenProfile: S ? void 0 : J,
                                    }),
                                    (0, t.jsx)($.A, {
                                        user: l,
                                        guildId: f,
                                        channelId: h,
                                        themeType: es.d.POPOUT,
                                        onCloseProfile: A,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(ef, {
                                user: l,
                                currentUser: n,
                                displayProfile: D,
                                guild: H,
                                isHoveringOrFocusing: X,
                                onOpenProfile: S ? void 0 : J,
                                channelId: h,
                                onClose: A,
                            }),
                            (0, t.jsx)(eh.A, { user: l, guildId: f, channelId: h, onClose: A, disableAutoFocus: _ }),
                            (0, t.jsx)(v, { user: l, guildId: f, onClose: A }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
