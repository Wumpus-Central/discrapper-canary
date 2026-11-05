e.d(n, { default: () => tl });
var i = e(477900),
    a = e(582128),
    r = e(189213),
    l = e(331322),
    s = e(534514),
    o = e(834730),
    c = e(289873),
    u = e(427262),
    d = e(855986),
    g = e(287809);
function m(t) {
    let { applicationId: n, id: e } = t;
    return { applicationId: n, gameOrganizationId: e };
}
function f(t) {
    let { applicationId: n, gameOrganizationId: e } = t;
    return `game-organization-invite:${n}:${e}`;
}
e(321073);
var p = e(765178),
    I = e(196765),
    A = e(121894);
let N = (0, I.v)(() => ({}));
function E(t, n, e) {
    let i = N.getState();
    (0, A.r)(() => {
        N.setState({ ...i, [t]: { ...i[t], [n]: e } });
    });
}
var v = e(620632),
    h = e(308528),
    x = e(138399),
    O = e(181658),
    y = e(652215),
    G = e(381941);
let S = {
    async createInvite(t, n, e) {
        try {
            let { body: i } = await v.Bo.post({
                url: y.Rsh.GAME_ORGANIZATION_INVITES(t, n),
                body: { target_user_id: e },
                rejectWithError: !0,
            });
            return i.code;
        } catch (t) {
            throw new O.A(t);
        }
    },
    async sendInvite(t, n) {
        let e = await h.A.getOrEnsurePrivateChannel(t);
        await x.A.sendMessage(
            e,
            {
                content: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/game-organizations/invite/${n}`,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            },
            !1,
            { location: G.Hx.GAME_ORGANIZATION_INVITE },
        );
    },
};
var _ = e(172799),
    j = e(792996);
let T = new Map();
var b = e(858899);
function z() {
    (0, b.P0)({ text: j.intl.string(j.t.fEptJP), variant: "critical" });
}
var w = e(927813),
    R = e(664947),
    M = e(73153),
    B = e(951217),
    C = e(653868);
let P = [],
    k = new Map(),
    L = null;
function $(t) {
    return {
        organization: (0, B.p)(t.game_organization),
        application: (0, C.Xw)(t.application),
        displayNoun: t.application_config.display_noun ?? null,
    };
}
class U extends d.Ay.Store {
    static displayName = "InvitableGameOrganizationStore";
    getInvitableGameOrganizations(t) {
        let n = y.fic.INVITABLE_GAME_ORGANIZATIONS(t);
        return null == n ? P : (k.get(n) ?? L);
    }
}
let V = new U(M.h, {
    INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS: function (t) {
        let { guildIds: n, gameOrganizations: e } = t,
            i = y.fic.INVITABLE_GAME_ORGANIZATIONS(n);
        if (null == i) return !1;
        ((L = e.map($)), k.set(i, L));
    },
    LOGOUT: function () {
        if (null == L) return !1;
        (k.clear(), (L = null));
    },
});
var Z = e(489452),
    D = e(696451),
    H = e(317525),
    J = e(71393),
    W = e(576705),
    X = e(372058),
    q = e(989683);
let F = (0, d.UT)(V, {
    getQueryId: y.fic.INVITABLE_GAME_ORGANIZATIONS,
    staleAfter: w.A.Seconds.MINUTE,
    failureStaleAfter: w.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: Z.A },
    get: (t) => V.getInvitableGameOrganizations(t),
    load: async (t) => {
        await R.A.fetchInvitableGameOrganizations(t);
    },
});
var K = e(646514),
    Q = e(177953),
    Y = e(821609);
function tt(t) {
    let { sendState: n, onInvite: e, nameId: r } = t,
        l = a.useId();
    return (0, i.jsx)(Y.$, {
        id: l,
        variant: "secondary",
        size: "sm",
        text: (function (t) {
            switch (t) {
                case _.iu.SENT:
                    return j.intl.string(j.t.dVT149);
                case _.iu.ERROR:
                    return j.intl.string(j.t.wNcfpX);
                default:
                    return j.intl.string(j.t.jYnGPG);
            }
        })(n),
        "aria-labelledby": `${l} ${r}`,
        loading: n === _.iu.SENDING,
        disabled: n === _.iu.SENT,
        onClick: e,
    });
}
var tn = e(752222),
    te = e(428314),
    ti = e(598414);
let ta = a.memo(function (t) {
    let { organization: n, userId: e, onInvite: r } = t,
        s = a.useId(),
        c = f(m(n)),
        u = N((t) => t[c]?.[e] ?? null),
        d = a.useCallback(() => r(n), [r, n]),
        g = a.useRef(null),
        p = u === _.iu.SENT,
        I = a.useRef(p);
    a.useEffect(() => {
        let t = document.activeElement;
        (p && !I.current && (null == t || t === document.body || g.current?.contains(t) === !0) && g.current?.focus(),
            (I.current = p));
    }, [p]);
    let { memberCount: A, maxMembers: E } = n;
    return (0, i.jsxs)("div", {
        ref: g,
        tabIndex: -1,
        className: te.nM,
        children: [
            (0, i.jsx)("img", { src: n.iconUrl ?? ti, alt: "", className: te.HE }),
            (0, i.jsxs)(l.B, {
                gap: 0,
                className: te.qg,
                children: [
                    (0, i.jsx)(o.E, {
                        id: s,
                        variant: "body-md/medium",
                        color: "text-strong",
                        lineClamp: 1,
                        children: n.name,
                    }),
                    null != A && null != E
                        ? (0, i.jsxs)(l.B, {
                              direction: "horizontal",
                              gap: 4,
                              align: "center",
                              children: [
                                  (0, i.jsx)(Q.n, { size: "xs", color: K.A.colors.ICON_SUBTLE }),
                                  (0, i.jsx)(o.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: j.intl.formatToPlainString(tn.default.VuENGl, { count: A, max: E }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(tt, { sendState: u, onInvite: d, nameId: s }),
        ],
    });
});
function tr(t) {
    let { group: n, userId: e, onInvite: a } = t,
        { application: r } = n;
    return (0, i.jsxs)(l.B, {
        gap: 8,
        children: [
            (0, i.jsxs)(l.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                children: [
                    (0, i.jsx)("img", { src: r.iconUrl ?? ti, alt: "", className: te.Gt }),
                    (0, i.jsx)(s.D, { variant: "body-sm/medium", color: "text-subtle", children: r.name }),
                ],
            }),
            (0, i.jsx)("div", {
                className: te.Nr,
                children: n.gameOrganizations.map((t) => {
                    let { organization: n } = t;
                    return (0, i.jsx)(ta, { organization: n, userId: e, onInvite: a }, n.id);
                }),
            }),
        ],
    });
}
function tl(t) {
    let n,
        { userId: e, ...s } = t,
        {
            user: I,
            groups: A,
            error: N,
            handleInvite: v,
        } = (function (t) {
            let n,
                e = (0, d.bG)([g.default], () => g.default.getUser(t)),
                { data: i, error: r } = F(
                    ((n = (0, X.E9)("game_organization_invite_picker")),
                    (0, d.yK)(
                        [J.A, D.Ay, H.A, W.A],
                        () =>
                            n
                                ? J.A.getGuildsArray()
                                      .filter((t) => (0, q.Dr)(t, W.A, D.Ay, H.A))
                                      .map((t) => t.id)
                                      .sort()
                                : [],
                        [n],
                    )),
                ),
                l = a.useMemo(
                    () =>
                        null != i
                            ? (function (t) {
                                  let n = new Map();
                                  for (let e of t) {
                                      let t = n.get(e.application.id);
                                      null != t
                                          ? t.gameOrganizations.push(e)
                                          : n.set(e.application.id, {
                                                application: e.application,
                                                gameOrganizations: [e],
                                            });
                                  }
                                  return Array.from(n.values());
                              })(i)
                            : null,
                    [i],
                ),
                s = a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let n = m(t);
                        !(async function (t, n, e, i) {
                            (E(t, e.id, _.iu.SENDING), p.O.announce(j.intl.string(j.t.kC3ZRG)));
                            try {
                                let i = `${t}:${e.id}`,
                                    a = T.get(i);
                                (null == a &&
                                    ((a = await S.createInvite(n.applicationId, n.gameOrganizationId, e.id)),
                                    T.set(i, a)),
                                    await S.sendInvite(e.id, a),
                                    T.delete(i),
                                    E(t, e.id, _.iu.SENT),
                                    p.O.announce(j.intl.string(j.t.PuLLzP)));
                            } catch {
                                (E(t, e.id, _.iu.ERROR), p.O.announce(j.intl.string(j.t.fEptJP)), i());
                            }
                        })(f(n), n, e, z);
                    },
                    [e],
                );
            return { user: e, groups: l, error: r, handleInvite: s };
        })(e);
    return (
        (n =
            null == A
                ? null != N
                    ? (0, i.jsx)(o.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          className: te.h5,
                          children: j.intl.string(j.t.fEptJP),
                      })
                    : (0, i.jsx)(c.y, { className: te.h5 })
                : 0 === A.length
                  ? (0, i.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: te.h5,
                        children: j.intl.string(tn.default.v7A3HG),
                    })
                  : (0, i.jsx)(l.B, {
                        gap: 24,
                        children: A.map((t) => (0, i.jsx)(tr, { group: t, userId: e, onInvite: v }, t.application.id)),
                    })),
        (0, i.jsx)(r.a, {
            ...s,
            title: j.intl.string(tn.default["wkSug+"]),
            subtitle: j.intl.formatToPlainString(tn.default.txHfjn, { username: u.Ay.getName(I) ?? "", days: 7 }),
            actions: [],
            children: n,
        })
    );
}
e(673383);
