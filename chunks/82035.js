n.d(t, { default: () => A }), n(388685);
var e = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(544891),
    s = n(159691),
    u = n(481060),
    c = n(493773),
    d = n(910693),
    o = n(314897),
    x = n(271383),
    v = n(430824),
    N = n(496675),
    k = n(594174),
    g = n(626135),
    m = n(51144),
    E = n(981631),
    h = n(388032),
    C = n(277081);
function p(l) {
    let { disabled: t = !1, user: n, setNickname: i, nickname: a, error: s, hasNick: c } = l,
        d = r.useRef(null),
        x = r.useCallback(() => {
            var l;
            i(""), null == (l = d.current) || l.focus();
        }, [i]);
    return (0, e.jsxs)(e.Fragment, {
        children: [
            t || null == n || n.id === o.default.getId()
                ? null
                : (0, e.jsx)(u.Zbd, {
                      type: u.Zbd.Types.WARNING,
                      className: C.card,
                      children: (0, e.jsx)(u.Text, {
                          variant: "text-md/normal",
                          children: h.intl.string(h.t.dq3At2),
                      }),
                  }),
            (0, e.jsx)(u.oil, {
                label: t ? h.intl.string(h.t.EyA4q5) : h.intl.string(h.t["621LJD"]),
                disabled: t,
                inputRef: d,
                maxLength: E.l$U,
                value: a,
                placeholder: m.ZP.getName(n),
                onChange: i,
                autoFocus: !0,
            }),
            null != s
                ? (0, e.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: C.nickError,
                      children: s,
                  })
                : null,
            c && !t
                ? (0, e.jsx)("div", {
                      className: C.reset,
                      children: (0, e.jsx)(u.Avr, {
                          text: h.intl.string(h.t.aE02Rz),
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
    let { transitionState: n, user: u, guildId: o, onClose: m, analyticsSource: C, analyticsLocations: A } = l,
        f = (0, i.e7)([x.ZP], () => (null != o ? x.ZP.getMember(o, u.id) : null)),
        b = (0, i.e7)([N.Z, k.default, v.Z], () => {
            var l;
            let t = v.Z.getGuild(o);
            return (
                null != t &&
                ((null == (l = k.default.getCurrentUser()) ? void 0 : l.id) === u.id
                    ? N.Z.can(E.Plq.CHANGE_NICKNAME, t) || N.Z.can(E.Plq.MANAGE_NICKNAMES, t)
                    : N.Z.canManageUser(E.Plq.MANAGE_NICKNAMES, u.id, t))
            );
        }),
        [_, M] = r.useState(!1),
        [Z, j] = r.useState(null != (t = null == f ? void 0 : f.nick) ? t : ""),
        [y, I] = r.useState({});
    (0, c.ZP)(() => {
        g.default.track(E.rMx.OPEN_MODAL, {
            type: "Change Server Identity",
            location: E.ZY5.GUILD_CHANNEL,
            source: C,
        });
    });
    let P = (0, d.sE)(o, {
            location: null == A ? void 0 : A[0],
            targetUserId: u.id,
        }),
        S = r.useCallback(
            async (l) => {
                var t, n, e, r, i, s, c, x, v;
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
                            url: E.ANM.GUILD_MEMBER(o, u.id),
                            body: N,
                            rejectWithError: !1,
                        }),
                        P(d.jQ.CHANGE_NICKNAME),
                        m();
                } catch (a) {
                    let l;
                    M(!1);
                    let t = null != (e = null == (n = a.body) ? void 0 : n.errors) ? e : null;
                    (null == t ? void 0 : t.nick) != null
                        ? (l =
                              (null == (s = t.nick) || null == (i = s._errors) || null == (r = i[0])
                                  ? void 0
                                  : r.message) || h.intl.string(h.t.xex86n))
                        : (null == t ? void 0 : t.username) != null &&
                          (l =
                              (null == (v = t.username) || null == (x = v._errors) || null == (c = x[0])
                                  ? void 0
                                  : c.message) || h.intl.string(h.t.xex86n)),
                        I({ nick: l });
                }
            },
            [o, Z, m, u, f, P],
        );
    return (0, e.jsx)("form", {
        onSubmit: S,
        children: (0, e.jsx)(s.u_l, {
            transitionState: n,
            onClose: m,
            title: h.intl.string(h.t.dilOF6),
            actions: [
                {
                    text: h.intl.string(h.t["ETE/oC"]),
                    onClick: m,
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: _,
                },
            ],
            children: (0, e.jsx)(p, {
                disabled: !b,
                user: u,
                error: y.nick,
                nickname: Z,
                setNickname: j,
                hasNick: (null == f ? void 0 : f.nick) != null,
            }),
        }),
    });
};
