n.d(t, { default: () => A }), n(388685);
var e = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(544891),
    u = n(159691),
    s = n(481060),
    d = n(493773),
    c = n(910693),
    o = n(314897),
    x = n(271383),
    v = n(430824),
    N = n(496675),
    g = n(594174),
    k = n(626135),
    m = n(51144),
    E = n(981631),
    h = n(388032),
    C = n(277081);
function p(l) {
    let { disabled: t = !1, user: n, setNickname: i, nickname: a, error: u, hasNick: d } = l,
        c = r.useRef(null),
        x = r.useCallback(() => {
            var l;
            i(""), null == (l = c.current) || l.focus();
        }, [i]);
    return (0, e.jsxs)(e.Fragment, {
        children: [
            t || null == n || n.id === o.default.getId()
                ? null
                : (0, e.jsx)(s.Zbd, {
                      type: s.Zbd.Types.WARNING,
                      className: C.card,
                      children: (0, e.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: h.intl.string(h.t.dq3At7),
                      }),
                  }),
            (0, e.jsx)(s.oil, {
                label: t ? h.intl.string(h.t.EyA4q6) : h.intl.string(h.t["621LJC"]),
                disabled: t,
                inputRef: c,
                maxLength: E.l$U,
                value: a,
                placeholder: m.ZP.getName(n),
                onChange: i,
                autoFocus: !0,
            }),
            null != u
                ? (0, e.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-danger",
                      className: C.nickError,
                      children: u,
                  })
                : null,
            d && !t
                ? (0, e.jsx)("div", {
                      className: C.reset,
                      children: (0, e.jsx)(s.Avr, {
                          text: h.intl.string(h.t.aE02R0),
                          onClick: x,
                          textVariant: "text-sm/normal",
                      }),
                  })
                : null,
        ],
    });
}
let A = function (l) {
    var t;
    let { transitionState: n, user: s, guildId: o, onClose: m, analyticsSource: C, analyticsLocations: A } = l,
        f = (0, i.e7)([x.ZP], () => (null != o ? x.ZP.getMember(o, s.id) : null)),
        _ = (0, i.e7)([N.Z, g.default, v.Z], () => {
            var l;
            let t = v.Z.getGuild(o);
            return (
                null != t &&
                ((null == (l = g.default.getCurrentUser()) ? void 0 : l.id) === s.id
                    ? N.Z.can(E.Plq.CHANGE_NICKNAME, t) || N.Z.can(E.Plq.MANAGE_NICKNAMES, t)
                    : N.Z.canManageUser(E.Plq.MANAGE_NICKNAMES, s.id, t))
            );
        }),
        [b, M] = r.useState(!1),
        [Z, j] = r.useState(null != (t = null == f ? void 0 : f.nick) ? t : ""),
        [y, I] = r.useState({});
    (0, d.ZP)(() => {
        k.default.track(E.rMx.OPEN_MODAL, {
            type: "Change Server Identity",
            location: E.ZY5.GUILD_CHANNEL,
            source: C,
        });
    });
    let P = (0, c.sE)(o, {
            location: null == A ? void 0 : A[0],
            targetUserId: s.id,
        }),
        S = r.useCallback(
            async (l) => {
                var t, n, e, r, i, u, d, x, v;
                l.preventDefault();
                let N = null;
                if (
                    (Z !== (null != (t = null == f ? void 0 : f.nick) ? t : "") && ((N = null != N ? N : {}).nick = Z),
                    null == N)
                )
                    return void m();
                try {
                    M(!0),
                        await a.tn.patch({
                            url: E.ANM.GUILD_MEMBER(o, s.id),
                            body: N,
                            rejectWithError: !1,
                        }),
                        P(c.jQ.CHANGE_NICKNAME),
                        m();
                } catch (a) {
                    let l;
                    M(!1);
                    let t = null != (e = null == (n = a.body) ? void 0 : n.errors) ? e : null;
                    (null == t ? void 0 : t.nick) != null
                        ? (l =
                              (null == (u = t.nick) || null == (i = u._errors) || null == (r = i[0])
                                  ? void 0
                                  : r.message) || h.intl.string(h.t.xex86u))
                        : (null == t ? void 0 : t.username) != null &&
                          (l =
                              (null == (v = t.username) || null == (x = v._errors) || null == (d = x[0])
                                  ? void 0
                                  : d.message) || h.intl.string(h.t.xex86u)),
                        I({ nick: l });
                }
            },
            [o, Z, m, s, f, P],
        );
    return (0, e.jsx)("form", {
        onSubmit: S,
        children: (0, e.jsx)(u.u_l, {
            transitionState: n,
            onClose: m,
            title: h.intl.string(h.t.dilOFx),
            actions: [
                {
                    text: h.intl.string(h.t["ETE/oK"]),
                    onClick: m,
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t.R3BPHx),
                    variant: "primary",
                    type: "submit",
                    disabled: b,
                },
            ],
            children: (0, e.jsx)(p, {
                disabled: !_,
                user: s,
                error: y.nick,
                nickname: Z,
                setNickname: j,
                hasNick: (null == f ? void 0 : f.nick) != null,
            }),
        }),
    });
};
