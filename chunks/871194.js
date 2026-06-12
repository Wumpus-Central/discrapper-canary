s.d(t, { A: () => y });
var r = s(627968),
    n = s(64700),
    i = s(503698),
    l = s.n(i),
    a = s(735438),
    d = s.n(a),
    u = s(192308),
    c = s(292666),
    o = s(404778),
    m = s(452027),
    h = s(834730),
    g = s(830215),
    x = s(398590),
    p = s(803306),
    f = s(356343),
    E = s(713654),
    A = s(166005),
    N = s(95701),
    C = s(34457),
    I = s(287809),
    L = s(147925),
    j = s(9865),
    v = s(636537),
    _ = s(228366),
    b = s(617710),
    S = s(345942),
    G = s(71393),
    T = s(652215);
let U = (e, t, s) => (
    _.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT", code: e }),
    new Promise((r, n) => {
        v.Bo.post({
            url: T.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
            body: { name: t, icon: s },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                let s = t.body;
                _.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: e, guild: s }),
                    b.A.isConnected()
                        ? G.A.addConditionalChangeListener(() => {
                              if (null != G.A.getGuild(s.id)) return (0, S.u)(s.id), r(s), !1;
                          })
                        : ((0, S.u)(s.id), r(s));
            },
            (t) => {
                _.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: e }), n(t.body);
            },
        );
    })
);
var O = s(651539);
s(321073);
var R = s(174459),
    D = s(401755),
    Z = s(799365),
    M = s(375708),
    B = s(274341);
function y(e) {
    let t,
        s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [i, l] = n.useState(""),
        [a, d] = n.useState(null),
        [h, E] = n.useState(null),
        A = (0, O.A)(e.code);
    n.useEffect(() => {
        !(async function () {
            let e = I.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, p.rQ)();
                } catch (e) {
                    g.A.verifySSOToken("accept_guild_template", null);
                }
            null != e && l(M.intl.formatToPlainString(A.defaultName, { username: e.username }));
        })();
    }, [A.defaultName]),
        (t = n.useRef([])),
        n.useEffect(() => {
            null == e ||
                e.state === D.QB.RESOLVING ||
                t.current.includes(e.code) ||
                (t.current.push(e.code),
                R.default.track(T.HAw.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId,
                }));
        });
    let N = (0, r.jsxs)(r.Fragment, {
            children: [
                s ? (0, r.jsx)(Z.A, { guildTemplate: e }) : null,
                (0, r.jsx)("div", { className: B.Kk, children: (0, r.jsx)(f.A, { icon: a, onChange: d }) }),
                (0, r.jsx)(c.k, {
                    label: A.nameLabel,
                    helperText: M.intl.format(A.terms, { guidelinesURL: T.X7G.GUIDELINES }),
                    type: "text",
                    value: i,
                    maxLength: 100,
                    onChange: l,
                    error: h?.name,
                }),
            ],
        }),
        L = e.serializedSourceGuild.roles.map((t) => j.Wj(e.serializedSourceGuild.id, t)).filter((e) => !(0, C.Oy)(e));
    return {
        form: N,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.c, {}),
                (0, r.jsx)(m.D, {
                    label: M.intl.string(M.t.Zxk1OF),
                    helperText: M.intl.string(M.t.de7DpI),
                    children: (0, r.jsx)(F, { channels: e.serializedSourceGuild.channels }),
                }),
                L.length > 0
                    ? (0, r.jsx)(m.D, {
                          label: M.intl.string(M.t["RJ1e/r"]),
                          children: (0, r.jsx)(H, { guildId: e.serializedSourceGuild.id, roles: L }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            U(e.code, i, a)
                .then(() => {
                    (0, u.closeAllModals)(), (0, x.bz)();
                })
                .catch((e) => E(e));
        },
    };
}
function F(e) {
    let { channels: t } = e,
        s = d()(t)
            .sortBy((e) => (null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let s = (t = e).type === T.rbe.GUILD_CATEGORY ? L.A : (0, E.gU)((0, N.UE)(t));
                return (0, r.jsxs)(
                    "div",
                    {
                        className: l()(B.Ix, { [B.L1]: e.type === T.rbe.GUILD_CATEGORY }),
                        children: [
                            null != s ? (0, r.jsx)(s, { className: B.p }) : null,
                            (0, r.jsx)(h.E, { className: B.be, variant: "text-sm/normal", children: e.name }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("div", { className: B.oD, children: s });
}
function H(e) {
    let { guildId: t, roles: s } = e,
        n = s
            .slice()
            .reverse()
            .map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(A.g1, { role: e, guildId: t }) }, e.id));
    return (0, r.jsx)("ul", { className: B.F6, children: n });
}
