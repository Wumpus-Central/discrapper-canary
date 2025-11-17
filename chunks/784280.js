n.d(t, { default: () => p }), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(442837),
    r = n(159691),
    o = n(481060),
    u = n(881052),
    s = n(607070),
    d = n(745510),
    c = n(781792),
    h = n(430824),
    f = n(645792),
    g = n(981631),
    b = n(388032);
function p(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.getGuild(t)),
        [p, k] = l.useState(null),
        [C, v] = l.useState(""),
        { createMultipleConfettiAt: x } = l.useContext(d.h),
        m = (0, a.e7)([s.Z], () => s.Z.useReducedMotion, []),
        w = async (t) => {
            let { onClose: n, guildId: i } = e;
            t.preventDefault(), k(null);
            try {
                await (0, c.e)(i, { nick: C }), null == n || n();
            } catch (e) {
                k(new u.Hx(e));
            }
        },
        { transitionState: S, onClose: _ } = e,
        y = h.Z.getGuildsArray().filter((e) => e.id !== t && e.features.has(g.GuildFeatures.HUB)).length > 0,
        E = !m && !y && (null == n ? void 0 : n.features.has(g.GuildFeatures.HUB)) && (0, f.b)();
    return (
        l.useEffect(() => {
            E && x(window.innerWidth / 2, window.innerHeight / 2);
        }, [x, E]),
        (0, i.jsx)(r.u_l, {
            title: b.intl.formatToPlainString(b.t["d+6kzl"], { guildName: null == n ? void 0 : n.name }),
            actions: [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oC"]),
                    onClick: _,
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t.Np4yXU),
                    onClick: w,
                },
            ],
            transitionState: S,
            onClose: _,
            children: (0, i.jsx)("form", {
                onSubmit: w,
                children: (0, i.jsx)(o.oil, {
                    label: b.intl.string(b.t.pt6jhx),
                    placeholder: b.intl.string(b.t.RfWvWI),
                    description: b.intl.string(b.t.VAaqfF),
                    onChange: (e) => {
                        v(e);
                    },
                    error: null == p ? void 0 : p.getFirstFieldErrorMessage("name"),
                    value: C,
                }),
            }),
        })
    );
}
