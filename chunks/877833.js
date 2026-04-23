i.d(t, { default: () => E });
var n,
    l = i(627968),
    c = i(64700),
    s = i(189213),
    d = i(150934),
    a = i(985018),
    o = i(58149),
    r = i(954571),
    u = i(975571),
    _ = i(652215),
    h =
        (((n = {}).DESCRIPTION = "description"),
        (n.CATEGORIES = "categories"),
        (n.TAGS = "tags"),
        (n.AGREE_TO_RULES = "agree_to_rules"),
        n);
let k = (e) => {
    let { articleId: t, guildId: i, modalStep: n = null, pageView: l = null } = e;
    open(u.A.getArticleURL(t)),
        r.default.track(_.HAw.DISCOVERY_SETUP_CTA_CLICKED, {
            cta_name: _.Mmu,
            discovery_settings_view: l,
            help_center_article_id: t,
            modal_step: n,
            ...(0, o.H$)(i),
        });
};
var C = i(710825);
function E(e) {
    let { guildId: t, transitionState: i, onClose: n, onConfirm: o } = e,
        { rules: r, rulesAccepted: u } = (function () {
            let [e, t] = c.useState(!1),
                [i, n] = c.useState(!1),
                [l, s] = c.useState(!1);
            return {
                rules: c.useMemo(
                    () => [
                        {
                            key: "healthy",
                            title: a.intl.string(a.t.jIi9gq),
                            body: a.intl.string(a.t["4uUAXh"]),
                            onCheck: () => t(!e),
                            checked: e,
                        },
                        {
                            key: "nonNSFW",
                            title: a.intl.string(a.t["iwnCh+"]),
                            body: a.intl.string(a.t.UKFzEY),
                            onCheck: () => n(!i),
                            checked: i,
                        },
                        {
                            key: "guidelines",
                            title: a.intl.string(a.t.cZwlWn),
                            body: a.intl.string(a.t.u0Go2s),
                            onCheck: () => s(!l),
                            checked: l,
                        },
                    ],
                    [l, e, i],
                ),
                rulesAccepted: e && i && l,
            };
        })(),
        E = c.useCallback(() => {
            n(), o();
        }, [n, o]);
    return (0, l.jsx)(s.Modal, {
        title: a.intl.string(a.t["Q8OFN+"]),
        subtitle: a.intl.format(a.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                k({ articleId: _.MVz.PUBLIC_GUILD_GUILDLINES, guildId: t, modalStep: h.AGREE_TO_RULES }),
            onDiscoveryGuidelinesClick: () =>
                k({ articleId: _.MVz.SERVER_DISCOVERY_GUIDELINES, guildId: t, modalStep: h.AGREE_TO_RULES }),
        }),
        actions: [{ disabled: !u, text: a.intl.string(a.t["qjtt/p"]), onClick: E }],
        transitionState: i,
        onClose: n,
        children: (0, l.jsx)("div", {
            className: C.H,
            children: r.map((e) =>
                (0, l.jsx)(
                    "div",
                    {
                        className: C.k,
                        children: (0, l.jsx)(d.S, {
                            checked: e.checked,
                            onChange: e.onCheck,
                            label: e.title,
                            description: e.body,
                        }),
                    },
                    e.key,
                ),
            ),
        }),
    });
}
