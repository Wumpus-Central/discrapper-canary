i.d(n, { Wx: () => C, g0: () => O, qC: () => P });
var e,
    r = i(612200),
    s = i(323073),
    a = i(398884),
    o = i(772366),
    E = i(207560),
    c = i(477900),
    u = i(582128),
    l = i(562708),
    _ = i(189213),
    A = i(192308),
    f = i(379257),
    G = i(306537),
    I = i(36149),
    N = i(506775),
    D = i(272767),
    S = i(375708);
function T(t) {
    let n,
        i,
        { transitionState: e, onClose: r, onConfirm: s } = t,
        {
            description: a,
            confirm: o,
            goBackIsPrimary: E,
        } = (function (t) {
            let n = (0, D.i)()[t],
                i = { text: S.intl.string(S.t.FDSSia), joins: !1 };
            switch (t) {
                case N.M$.ADULT:
                    return {
                        description: n,
                        confirm: { text: S.intl.string(S.t.wVq7uo), joins: !0 },
                        goBackIsPrimary: !1,
                    };
                case N.M$.TEEN:
                    return { description: n, confirm: i, goBackIsPrimary: !0 };
                case N.M$.UNVERIFIED:
                    return { description: n, confirm: i, goBackIsPrimary: !1 };
            }
        })(((n = (0, I.yM)()), (i = (0, I.uE)()), n ? N.M$.TEEN : i ? N.M$.ADULT : N.M$.UNVERIFIED)),
        A = u.useCallback(async () => {
            if (o.joins) {
                (s(), await r());
                return;
            }
            f.A.showAgeVerificationGetStartedModal({ entryPoint: G.q1.NSFW_AGE_GATE });
        }, [o.joins, s, r]),
        T = { text: S.intl.string(S.t["/g10LC"]), onClick: r },
        d = { text: o.text, onClick: A },
        M = E ? [{ ...d, variant: "secondary" }, T] : [{ ...T, variant: "secondary" }, d];
    return (0, c.jsx)(_.a, {
        transitionState: e,
        onClose: r,
        title: S.intl.string(S.t.xi46lg),
        subtitle: a,
        actions: M,
        trackingProps: {
            impression: { impressionName: l.ImpressionNames.USER_AGE_GATE_VERIFY },
            impressionType: l.ImpressionTypes.MODAL,
        },
    });
}
var d = i(521169),
    M = i(666113),
    g = i(652215),
    p = i(204925),
    C =
        (((e = {}).PROCEED = "PROCEED"),
        (e.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (e.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        e);
function P(t) {
    let { guild: n, isMember: i, onConfirm: e } = t;
    return (
        null != n &&
        !i &&
        !!(0, s.zS)(n) &&
        !!(0, E.u0)() &&
        (function (t) {
            var n;
            let { onConfirm: i } = t;
            return (
                !!(0, d.n)(M.sR) && ((n = { onConfirm: i }), (0, A.openModal)((t) => (0, c.jsx)(T, { ...t, ...n })), !0)
            );
        })({ onConfirm: e })
    );
}
function R(t) {
    return null != t && (0, a.Sn)();
}
function y(t) {
    (0, o.A)({
        analyticsSource: { page: g.liQ.INVITE_EMBED },
        analyticsLocation: { page: g.liQ.INVITE_EMBED, section: g.JJy.GUILD_CAP_UPSELL_MODAL },
        analyticsLocations: t,
    });
}
function O(t) {
    let { guildId: n, guild: i, isMember: e, analyticsLocations: a, onGateConfirm: o } = t;
    return P({
        guild: i,
        isMember: e,
        onConfirm: function () {
            R(n) ? y(a) : o();
        },
    })
        ? "AGE_GATE_SHOWN"
        : null != i && !e && (0, s.xq)() && (0, s.zS)(i)
          ? ((0, r.yO)(p.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
          : R(n)
            ? (y(a), "GUILD_CAP_SHOWN")
            : "PROCEED";
}
