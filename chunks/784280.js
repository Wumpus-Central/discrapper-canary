n.d(e, { default: () => p }), n(388685);
var i = n(951288),
    l = n(647438),
    a = n(442837),
    o = n(159691),
    r = n(481060),
    s = n(881052),
    u = n(607070),
    c = n(745510),
    d = n(781792),
    h = n(430824),
    f = n(645792),
    g = n(981631),
    b = n(388032);
function p(t) {
    let { guildId: e } = t,
        n = (0, a.e7)([h.Z], () => h.Z.getGuild(e)),
        [p, k] = l.useState(null),
        [v, C] = l.useState(""),
        { createMultipleConfettiAt: x } = l.useContext(c.h),
        m = (0, a.e7)([u.Z], () => u.Z.useReducedMotion, []),
        w = async (e) => {
            let { onClose: n, guildId: i } = t;
            e.preventDefault(), k(null);
            try {
                await (0, d.e)(i, { nick: v }), null == n || n();
            } catch (t) {
                k(new s.Hx(t));
            }
        },
        { transitionState: S, onClose: _ } = t,
        y = h.Z.getGuildsArray().filter((t) => t.id !== e && t.features.has(g.oNc.HUB)).length > 0,
        E = !m && !y && (null == n ? void 0 : n.features.has(g.oNc.HUB)) && (0, f.b)();
    return (
        l.useEffect(() => {
            E && x(window.innerWidth / 2, window.innerHeight / 2);
        }, [x, E]),
        (0, i.jsx)(o.u_l, {
            title: b.intl.formatToPlainString(b.t["d+6kzs"], { guildName: null == n ? void 0 : n.name }),
            actions: [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oK"]),
                    onClick: _,
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t.Np4yXV),
                    onClick: w,
                },
            ],
            transitionState: S,
            onClose: _,
            children: (0, i.jsx)("form", {
                onSubmit: w,
                children: (0, i.jsx)(r.oil, {
                    label: b.intl.string(b.t.pt6jh4),
                    placeholder: b.intl.string(b.t.RfWvWF),
                    description: b.intl.string(b.t.VAaqfH),
                    onChange: (t) => {
                        C(t);
                    },
                    error: null == p ? void 0 : p.getFirstFieldErrorMessage("name"),
                    value: v,
                }),
            }),
        })
    );
}
