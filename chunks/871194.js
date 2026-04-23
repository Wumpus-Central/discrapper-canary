s.d(t, { A: () => D });
var r = s(627968),
    n = s(64700),
    i = s(503698),
    l = s.n(i),
    a = s(735438),
    d = s.n(a),
    c = s(192308),
    u = s(292666),
    C = s(404778),
    o = s(452027),
    L = s(834730),
    m = s(830215),
    h = s(398590),
    x = s(803306),
    g = s(356343),
    p = s(713654),
    f = s(166005),
    E = s(95701),
    j = s(34457),
    v = s(287809),
    N = s(147925),
    A = s(9865),
    I = s(636537),
    Z = s(228366),
    M = s(366853),
    b = s(345942),
    _ = s(71393),
    S = s(652215);
let G = (e, t, s) => (
    Z.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT", code: e }),
    new Promise((r, n) => {
        I.Bo.post({
            url: S.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
            body: { name: t, icon: s },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                let s = t.body;
                Z.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: e, guild: s }),
                    M.A.isConnected()
                        ? _.A.addConditionalChangeListener(() => {
                              if (null != _.A.getGuild(s.id)) return (0, b.u)(s.id), r(s), !1;
                          })
                        : ((0, b.u)(s.id), r(s));
            },
            (t) => {
                Z.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: e }), n(t.body);
            },
        );
    })
);
var H = s(651539);
s(321073);
var T = s(954571),
    U = s(401755),
    O = s(799365),
    R = s(985018),
    V = s(274341);
function D(e) {
    let t,
        s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [i, l] = n.useState(""),
        [a, d] = n.useState(null),
        [L, p] = n.useState(null),
        f = (0, H.A)(e.code);
    n.useEffect(() => {
        !(async function () {
            let e = v.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, x.rQ)();
                } catch (e) {
                    m.A.verifySSOToken("accept_guild_template", null);
                }
            null != e && l(R.intl.formatToPlainString(f.defaultName, { username: e.username }));
        })();
    }, [f.defaultName]),
        (t = n.useRef([])),
        n.useEffect(() => {
            null == e ||
                e.state === U.QB.RESOLVING ||
                t.current.includes(e.code) ||
                (t.current.push(e.code),
                T.default.track(S.HAw.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId,
                }));
        });
    let E = (0, r.jsxs)(r.Fragment, {
            children: [
                s ? (0, r.jsx)(O.A, { guildTemplate: e }) : null,
                (0, r.jsx)("div", { className: V.Kk, children: (0, r.jsx)(g.A, { icon: a, onChange: d }) }),
                (0, r.jsx)(u.k, {
                    label: f.nameLabel,
                    helperText: R.intl.format(f.terms, { guidelinesURL: S.X7G.GUIDELINES }),
                    type: "text",
                    value: i,
                    maxLength: 100,
                    onChange: l,
                    error: L?.name,
                }),
            ],
        }),
        N = e.serializedSourceGuild.roles.map((t) => A.Wj(e.serializedSourceGuild.id, t)).filter((e) => !(0, j.Oy)(e));
    return {
        form: E,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.c, {}),
                (0, r.jsx)(o.D, {
                    label: R.intl.string(R.t.Zxk1OF),
                    helperText: R.intl.string(R.t.de7DpI),
                    children: (0, r.jsx)(B, { channels: e.serializedSourceGuild.channels }),
                }),
                N.length > 0
                    ? (0, r.jsx)(o.D, {
                          label: R.intl.string(R.t["RJ1e/r"]),
                          children: (0, r.jsx)(y, { guildId: e.serializedSourceGuild.id, roles: N }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            G(e.code, i, a)
                .then(() => {
                    (0, c.closeAllModals)(), (0, h.bz)();
                })
                .catch((e) => p(e));
        },
    };
}
function B(e) {
    let { channels: t } = e,
        s = d()(t)
            .sortBy((e) => (null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let s = (t = e).type === S.rbe.GUILD_CATEGORY ? N.A : (0, p.gU)((0, E.UE)(t));
                return (0, r.jsxs)(
                    "div",
                    {
                        className: l()(V.Ix, { [V.L1]: e.type === S.rbe.GUILD_CATEGORY }),
                        children: [
                            null != s ? (0, r.jsx)(s, { className: V.p }) : null,
                            (0, r.jsx)(L.E, { className: V.be, variant: "text-sm/normal", children: e.name }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("div", { className: V.oD, children: s });
}
function y(e) {
    let { guildId: t, roles: s } = e,
        n = s
            .slice()
            .reverse()
            .map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(f.g1, { role: e, guildId: t }) }, e.id));
    return (0, r.jsx)("ul", { className: V.F6, children: n });
}
